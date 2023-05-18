"use client";

import React from "react";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import Heading from "@/app/components/Heading";
import { Box, Button } from "@mui/material";
import CardCargo from "../components/CardCargo";

export default function Dashboard(): JSX.Element {
  return (
    <DefaultLayout leftSideBar rightSideBar>
      <Heading variant="h3">Carregamentos</Heading>
      <Box display="flex" justifyContent="space-between" maxWidth={350} mt={2}>
        <Button size="small" variant="outlined">
          Ver todos
        </Button>
        <Button size="medium" variant="contained">
          Ativos
        </Button>
        <Button size="small" variant="outlined">
          Finalizados
        </Button>
      </Box>

      <Box display="flex" width="100%" justifyContent="space-between" mt={4}>
        <CardCargo />
        <CardCargo />
      </Box>

      <Box display="flex" width="100%" justifyContent="space-between" mt={4}>
        <CardCargo />
        <CardCargo />
      </Box>

      <Box display="flex" width="100%" justifyContent="space-between" mt={4}>
        <CardCargo />
        <CardCargo />
      </Box>
    </DefaultLayout>
  );
}
