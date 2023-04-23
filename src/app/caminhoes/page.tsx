/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React from "react";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import Heading from "@/app/components/Heading";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BasicTable from "@/app/components/Table";

export default function Dashboard(): JSX.Element {
  return (
    <DefaultLayout leftSideBar>
      <Heading sx={{ color: "#505862" }} variant="h2">
        Gerenciar - Caminhões
      </Heading>
      <Stack spacing={2} direction="row">
        <Button
          sx={{ marginTop: 6, marginBottom: 6, backgroundColor: "#644BC8" }}
          startIcon={<LocalShippingIcon />}
          variant="contained"
        >
          Adicionar Caminhão
        </Button>
      </Stack>
      <BasicTable />
    </DefaultLayout>
  );
}
