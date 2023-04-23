import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IBasicTableProps, TableItem } from "../interfaces/Table";
import TableActions from "./TableActions";

export default function BasicTable({ headers, items }: IBasicTableProps) {
  const tableItems: TableItem[] = items.map((item) => {
    const tableItem: TableItem = { id: item.id };
    Object.entries(item).forEach(([key, value]) => {
      if (key !== "id") {
        tableItem[key] = value;
      }
    });
    return tableItem;
  });

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 4 }}>
      <Table sx={{ minWidth: "60vw" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "background.default" }}>
          <TableRow>
            {headers &&
              headers.map((header) => (
                <TableCell key={header.id} sx={{ minWidth: "20vw" }}>
                  {header.title}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.map(({ id, ...rest }) => (
            <TableRow key={id}>
              {Object.entries(rest).map(([key, value]) => (
                <TableCell key={key}>{value.toString()}</TableCell>
              ))}

              <TableCell>
                <TableActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
