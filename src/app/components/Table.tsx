import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableActions from "./TableActions";

function createData(
  name: string,
  usuario: string,
  nomeUsuario: string,
  acao: React.ReactNode
) {
  return { name, usuario, nomeUsuario, acao };
}

const rows = [
  createData("ADM", "rafael@dev", "Rafael Silva", <TableActions />),
  createData(
    "MOTORISTA",
    "valdemort@potter",
    "Voldemort Pereira",
    <TableActions />
  ),
  createData("CLIENTE", "3211", "Potter Soluções LTDA", <TableActions />),
  createData("MOTORISTA", "eneascarneiro", "Enéas Carneiro", <TableActions />),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "60vw" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "transparent" }}>
          <TableRow>
            <TableCell sx={{ minWidth: "20vw" }}>Tipo</TableCell>
            <TableCell sx={{ minWidth: "20vw" }}>Usuário</TableCell>
            <TableCell sx={{ minWidth: "20vw" }}>Nome do usuário</TableCell>
            <TableCell sx={{ minWidth: "20vw" }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.usuario}</TableCell>
              <TableCell>{row.nomeUsuario}</TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {row.acao}
                {/* <ArrowForwardIosIcon sx={{ width: 20, height: 20 }} /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
