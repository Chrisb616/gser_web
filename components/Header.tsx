"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import icon from "../app/icon.png";
import Link from "./Link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Players", href: "/players" },
  { label: "Visuals & Maps", href: "/visuals" },
  { label: "Fan Art", href: "/art" },
  { label: "Info", href: "/info" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar sx={{ gap: 1, justifyContent: "space-evenly", flexWrap: "wrap" }}>
        <Box
          component={Link}
          href="/"
          aria-label="GSER home"
          sx={{
            mr: { sm: 2 },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image src={icon} alt="GSER" width={36} height={36} priority />
        </Box>
        <Box
          component="nav"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            flexGrow: 1,
            gap: 0.5,
          }}
        >
          {navItems.map(({ label, href }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Button
                key={href}
                component={Link}
                href={href}
                color={active ? "secondary" : "inherit"}
                variant={active ? "contained" : "text"}
              >
                {label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
