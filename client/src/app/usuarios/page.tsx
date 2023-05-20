/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React from "react";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import Heading from "@/app/components/Heading";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Button from "@mui/material/Button";
import axios from "axios";
import { useQuery } from "react-query";
import { User } from "@/app/interfaces/User";
import BasicTable from "../components/Table";
import translateUserRole from "@/app/utils/translateUserRole";

export default function Usuarios(): JSX.Element {
  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8080/api/users");

    return response.data.map((user: User) => ({
            id: user.id,
            role: translateUserRole(user.role),
            username: user.name,
            email: user.email,
        }));
  };

  const { data: users } = useQuery("users", fetchUsers);

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
        {users && (
            <BasicTable
                headers={[
                    { title: "Tipo de usuário", id: 1 },
                    { title: "Nome do Usuário", id: 2 },
                    { title: "E-mail", id: 3},
                    { title: "Ações", id: 4 },
                ]}
                actions="button"
                items={users}
            />
        )}

    </DefaultLayout>
  );
}
