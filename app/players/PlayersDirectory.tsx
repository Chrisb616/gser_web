"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PlayersCard, { type Player } from "./PlayersCard";

export type { Player };

export default function PlayersDirectory({ players }: { players: Player[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(players[0]?.id ?? "");

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { root, rootMargin: "0px 0px -60% 0px", threshold: 0 },
    );

    players.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [players]);

  const scrollTo = useCallback((id: string) => {
    const root = scrollRef.current;
    const node = document.getElementById(id);
    if (!root || !node) {
      return;
    }

    root.scrollTo({ top: node.offsetTop, behavior: "smooth" });
    setActiveId(id);
  }, []);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={3}
      sx={{ alignItems: "flex-start" }}
    >
      <Paper
        component="nav"
        aria-label="Players table of contents"
        variant="outlined"
        sx={{
          position: { md: "sticky" },
          top: { md: 24 },
          width: { xs: "100%", md: 240 },
          flexShrink: 0,
          p: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{ px: 1, color: "text.secondary", display: "block" }}
        >
          Contents
        </Typography>
        <List dense disablePadding>
          {players.map((player) => (
            <ListItemButton
              key={player.id}
              selected={activeId === player.id}
              onClick={() => scrollTo(player.id)}
              sx={{ borderRadius: 1 }}
            >
              <ListItemText primary={player.name} />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      <Box
        ref={scrollRef}
        sx={{
          position: "relative",
          flexGrow: 1,
          width: "100%",
          maxHeight: { xs: 420, md: "calc(100vh - 220px)" },
          overflowY: "auto",
          pr: 1,
        }}
      >
        <Stack spacing={8}>
          {players.map((player) => (
            <PlayersCard key={player.id} player={player} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
