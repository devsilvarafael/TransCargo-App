/* eslint-disable no-nested-ternary */
import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import DotIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";
import { IBasicTableProps, TableItem } from "../interfaces/Table";
import TableActions from "./TableActions";

export default function BasicTable({
  headers,
  items,
  itemColor,
  disableShadow,
  disableGutters,
  actions,
}: IBasicTableProps) {
  const haveStatusStyle = {
    onway: {
      backgroundColor: "#FFDD99",
      color: "#CC7A00",
      borderRadius: "20px",
      padding: "2px 1rem",
      minWidth: 92,
    },
    processing: {
      backgroundColor: "#CBBEFD",
      color: "#644BC8",
      borderRadius: "20px",
      padding: "2px 0.7rem",
      minWidth: 92,
    },
    delivered: {
      backgroundColor: "#A9EAD8",
      color: "#20A17F",
      borderRadius: "20px",
      padding: "2px 1.4rem",
    },
  };

  const tableItems: TableItem[] = items.map((item) => {
    const tableItem: TableItem = { id: item.id };
    Object.entries(item).forEach(([key, value]) => {
      if (key !== "id") {
        tableItem[key] = value;
      }
    });
    return tableItem;
  });

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
    } catch (err) {
      console.log(err);
    } 
  }

  return (
    <TableContainer component={Paper} sx={{ boxShadow: disableShadow ? 0 : 4 }}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "background.default" }}>
          <TableRow>
            {headers &&
              headers.map((header) => (
                <TableCell
                  key={header.id}
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "secondary.dark",
                  }}
                >
                  {header.title}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.map(({ id, ...rest }) => (
            <TableRow key={id} sx={{ bgcolor: itemColor }}>
              {Object.entries(rest).map(([key, value]) => (
                <TableCell
                  key={key}
                  sx={{ minWidth: disableGutters ? "9vw" : "20vw" }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: key === "status" ? "bold" : "normal",
                      color: key === "document" ? "primary.dark" : "#000",
                      textTransform:
                        key === "status" || key === "type"
                          ? "capitalize"
                          : "normal",
                      textAlign: key === "status" ? "center" : "left",
                    }}
                    style={
                      key === "status" && value === "processando"
                        ? haveStatusStyle.processing
                        : key === "status" && value === "na estrada"
                        ? haveStatusStyle.onway
                        : key === "status" && value === "entregue"
                        ? haveStatusStyle.delivered
                        : undefined
                    }
                  >
                    {value.toString()}
                  </Typography>
                </TableCell>
              ))}

              <TableCell sx={{ textAlign: "center" }}>
                {actions === "icon" ? <DotIcon /> : <TableActions deleteData={() => handleDelete(id)}/>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
