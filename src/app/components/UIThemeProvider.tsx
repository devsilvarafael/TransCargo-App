"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

import theme from "@/app/themes/index";

export default function UIThemeProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
