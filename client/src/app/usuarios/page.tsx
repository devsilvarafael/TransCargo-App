/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React from "react";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import Heading from "@/app/components/Heading";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Button from "@mui/material/Button";
import BasicTable from "../components/Table";

const users = [
  { type: "adm", user: "admin@company.com", username: "John Doe", id: 1 },
  {
    type: "motorista",
    user: "driver1@company.com",
    username: "Jane Smith",
    id: 2,
  },
  {
    type: "cliente",
    user: "customer1@company.com",
    username: "Bob Johnson",
    id: 3,
  },
  {
    type: "cliente",
    user: "customer2@company.com",
    username: "Alice Williams",
    id: 4,
  },
  {
    type: "motorista",
    user: "driver2@company.com",
    username: "Samuel Lee",
    id: 5,
  },
];

export default function Usuarios(): JSX.Element {
  return (
    <DefaultLayout leftSideBar>
      <Heading sx={{ color: "#505862" }} variant="h4" fontWeight={600} mt={2}>
        Gerenciar - Usuários
      </Heading>
      <Button
        sx={{ marginTop: 6, marginBottom: 6, backgroundColor: "#644BC8" }}
        startIcon={<PersonAddIcon />}
        variant="contained"
        size="small"
      >
        Criar Usuário
      </Button>
      <BasicTable
        headers={[
          { title: "Tipo", id: 1 },
          { title: "Usuário", id: 2 },
          { title: "Nome do Usuário", id: 3 },
          { title: "Ações", id: 4 },
        ]}
        actions="button"
        items={users}
      />
    </DefaultLayout>
  );
}
