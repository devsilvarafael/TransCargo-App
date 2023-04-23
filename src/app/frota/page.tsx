/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React from "react";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import Heading from "@/app/components/Heading";

import TruckIcon from "@mui/icons-material/LocalShipping";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BasicTable from "../components/Table";
import { TruckItems } from "../interfaces/Table";

const truckData: TruckItems[] = [
  {
    id: 1,
    plate: "ABC-123",
    model: "Ford F-150",
    driver: "John Doe",
  },
  {
    id: 2,
    plate: "DEF-456",
    model: "Toyota Tacoma",
    driver: "Jane Smith",
  },
  {
    id: 3,
    plate: "GHI-789",
    model: "Chevrolet Silverado",
    driver: "Bob Johnson",
  },
  {
    id: 4,
    plate: "JKL-012",
    model: "Dodge Ram",
    driver: "Alice Lee",
  },
  {
    id: 5,
    plate: "MNO-345",
    model: "GMC Sierra",
    driver: "Charlie Brown",
  },
];

export default function Frota(): JSX.Element {
  return (
    <DefaultLayout leftSideBar>
      <Heading sx={{ color: "#505862" }} variant="h2">
        Gerenciar - Frota
      </Heading>
      <Stack spacing={2} direction="row">
        <Button
          sx={{ marginTop: 6, marginBottom: 6, backgroundColor: "#644BC8" }}
          startIcon={<TruckIcon />}
          variant="contained"
        >
          Adicionar veículo
        </Button>
      </Stack>
      <BasicTable
        headers={[
          { title: "Placa", id: 1 },
          { title: "Modelo", id: 2 },
          { title: "Motorista", id: 3 },
          { title: "Ações", id: 4 },
        ]}
        items={truckData}
      />
    </DefaultLayout>
  );
}
