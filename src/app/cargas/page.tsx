"use client";

import InventoryIcon from "@mui/icons-material/Inventory";

import { Button, Card } from "@mui/material";
import Heading from "../components/Heading";
import DefaultLayout from "../layouts/DefaultLayout";
import BasicTable from "../components/Table";

const cargos = [
  {
    id: 1,
    document: "DF-0001SC",
    category: "Eletrônicos",
    weight: 1200,
    date: "2023-04-20",
    origin: "São Paulo",
    destiny: "Rio de Janeiro",
    status: "processando",
  },
  {
    id: 2,
    document: "MG-0002FR",
    category: "Alimentos",
    weight: 1500,
    date: "2023-04-21",
    origin: "Belo Horizonte",
    destiny: "Brasília",
    status: "na estrada",
  },
  {
    id: 3,
    document: "PR-0003BR",
    category: "Roupas",
    weight: 800,
    date: "2023-04-22",
    origin: "Curitiba",
    destiny: "Porto Alegre",
    status: "entregue",
  },
  {
    id: 4,
    document: "SP-0004CR",
    category: "Materiais de construção",
    weight: 2000,
    date: "2023-04-23",
    origin: "São Paulo",
    destiny: "Campinas",
    status: "processando",
  },
  {
    id: 5,
    document: "RJ-0005BA",
    category: "Medicamentos",
    weight: 500,
    date: "2023-04-24",
    origin: "Rio de Janeiro",
    destiny: "Salvador",
    status: "na estrada",
  },
];

export default function Cargos(): JSX.Element {
  return (
    <DefaultLayout leftSideBar>
      <Heading sx={{ color: "#505862" }} variant="h4" fontWeight={600} mt={2}>
        Gerenciar - Cargas
      </Heading>
      <Button
        sx={{ marginTop: 6, marginBottom: 6, backgroundColor: "#644BC8" }}
        startIcon={<InventoryIcon />}
        variant="contained"
        size="small"
      >
        Adicionar Carga
      </Button>
      <Card sx={{ padding: 4, bgcolor: "#FFF", borderRadius: "10px" }}>
        <BasicTable
          headers={[
            { title: "Nº CT-e", id: 1 },
            { title: "Categoria", id: 2 },
            { title: "Peso (kg)", id: 3 },
            { title: "Data", id: 4 },
            { title: "Origem", id: 5 },
            { title: "Destino", id: 6 },
            { title: "Status", id: 7 },
            { title: "Ações", id: 8 },
          ]}
          items={cargos}
          actions="icon"
          itemColor=""
          disableShadow
          disableGutters
        />
      </Card>
    </DefaultLayout>
  );
}
