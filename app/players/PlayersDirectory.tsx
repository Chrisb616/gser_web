"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import PlayersCard, { type Player } from "./PlayersCard";

export type { Player };

function remainingViewportHeight(element: HTMLElement) {
  const parent = element.parentElement;
  const bottomGap = parent ? parseFloat(getComputedStyle(parent).paddingBottom) || 0 : 0;
  const top = element.getBoundingClientRect().top;
  const visualViewport = window.visualViewport;

  if (visualViewport) {
    return visualViewport.offsetTop + visualViewport.height - top - bottomGap;
  }

  return window.innerHeight - top - bottomGap;
}

export default function PlayersDirectory({ players }: { players: Player[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(players[0]?.id ?? "");

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const updateHeight = () => {
      const nextHeight = `${Math.max(Math.floor(remainingViewportHeight(root)), 200)}px`;
      if (root.style.height !== nextHeight) {
        root.style.height = nextHeight;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("resize", updateHeight);
    window.visualViewport?.addEventListener("scroll", updateHeight);

    const observer = new ResizeObserver(updateHeight);
    observer.observe(document.body);
    if (root.parentElement) {
      observer.observe(root.parentElement);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.visualViewport?.removeEventListener("resize", updateHeight);
      window.visualViewport?.removeEventListener("scroll", updateHeight);
      observer.disconnect();
    };
  }, []);

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
      ref={rootRef}
      direction={{ xs: "column", md: "row" }}
      spacing={3}
      sx={{
        alignItems: "stretch",
        width: "100%",
        minHeight: 0,
        overflow: "hidden",
      }}
    >
      <Paper
        component="nav"
        aria-label="Players table of contents"
        variant="outlined"
        sx={{
          display: { xs: "none", md: "block" },
          alignSelf: "flex-start",
          width: 240,
          flexShrink: 0,
          maxHeight: "100%",
          overflowY: "auto",
          p: 1,
        }}
      >
        <List dense disablePadding>
          {players.map((player) => (
            <ListItemButton
              key={player.id}
              selected={activeId === player.id}
              onClick={() => scrollTo(player.id)}
              sx={{
                borderRadius: 1,
                "&.Mui-selected": {
                  bgcolor: "tertiary.main",
                  color: "tertiary.contrastText",
                  "&:hover": {
                    bgcolor: "tertiary.dark",
                  },
                },
              }}
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
          minHeight: 0,
          width: "100%",
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Stack spacing={2}>
          {players.map((player) => (
            <PlayersCard key={player.id} player={player} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
