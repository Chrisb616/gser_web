"use client";

import { createTheme } from "@mui/material/styles";
import type { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColor;
    highlight: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    highlight?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    highlight: true;
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    tertiary: true;
    highlight: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    tertiary: true;
    highlight: true;
  }
}

/** Brand colors for The Greatest Story Ever Rolled. */
export const brand = {
  parchment: "#FDF6E3",
  forest: "#233A2B",
  gold: "#D4AF37",
  moss: "#5C7D47",
  bronze: "#A8763F",
} as const;

const { palette } = createTheme();

const theme = createTheme({
  cssVariables: true,
  palette: {
    background: {
      default: brand.parchment,
      paper: brand.parchment,
    },
    primary: {
      main: brand.forest,
      contrastText: brand.parchment,
    },
    secondary: {
      main: brand.gold,
      contrastText: brand.forest,
    },
    tertiary: palette.augmentColor({
      color: {
        main: brand.moss,
        contrastText: brand.parchment,
      },
      name: "tertiary",
    }),
    highlight: palette.augmentColor({
      color: {
        main: brand.bronze,
        contrastText: brand.parchment,
      },
      name: "highlight",
    }),
    text: {
      primary: brand.forest,
      secondary: brand.moss,
    },
    divider: brand.bronze,
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    h1: { color: brand.forest },
    h2: { color: brand.forest },
    h3: { color: brand.forest },
    h4: { color: brand.gold },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brand.parchment,
          color: brand.forest,
          minHeight: "100%",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          borderBottom: `2px solid ${brand.gold}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: brand.parchment,
          borderColor: brand.bronze,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderColor: brand.gold,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: "highlight",
      },
    },
  },
});

export default theme;
