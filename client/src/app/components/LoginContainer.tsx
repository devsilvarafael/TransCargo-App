"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";

export default function LoginContainer({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}
