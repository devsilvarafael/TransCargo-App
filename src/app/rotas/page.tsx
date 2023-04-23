/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React from "react";
import DefaultLayout from "@/app/layouts/DefaultLayout";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CardRoute from "../components/CardRoute";

export default function Dashboard(): JSX.Element {
  return (
    <DefaultLayout leftSideBar disableGutters>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box
          sx={{
            minWidth: 317,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography textAlign="center" variant="h4" mb={2}>
            Rotas
          </Typography>

          <TextField
            id="input-with-icon-textfield"
            placeholder="Digite o nº do carregamento"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{ mb: 2 }}
          />

          <CardRoute />
          <CardRoute />
          <CardRoute />
          <CardRoute />
          <CardRoute />
        </Box>

        <Box>map</Box>
      </Box>
    </DefaultLayout>
  );
}
