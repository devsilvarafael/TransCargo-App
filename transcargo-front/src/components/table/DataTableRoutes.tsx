import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

import { ModalDialogCharge } from "../modal/ModalChargeCreate";
export default function DataTableCharge() {

  return (
    <Box
      sx={{
        maxWidth: "100%",
      }}
    >
      <ModalDialogCharge/>
     

      <Sheet variant="outlined" sx={{
          borderRadius: "8px",
          "--TableCell-height": "40px",
          // the number is the amount of the header rows.
          "--TableHeader-height": "calc(1 * var(--TableCell-height))",
          "--Table-firstColumnWidth": "100px",
          "--Table-lastColumnWidth": "220px",
        
          "--TableRow-stripeBackground": "rgba(0 0 0 / 0.02)",
          "--TableRow-hoverBackground": "rgba(0 0 0 / 0.04)",
          overflow: "auto",
          background: (
            theme
          ) => `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            "40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local, local, scroll, scroll",
          backgroundPosition:
            "var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)",
          backgroundColor: "background.surface",
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            "--unstable_TableCell-height": "0px",
            "& tr > *:first-child": {
              position: "sticky",
              left: 0,
              boxShadow: "1px 0 var(--TableCell-borderColor)",
              bgcolor: "background.surface",
            },
            "& tr > *:last-child": {
              position: "sticky",
              right: 0,
              bgcolor: "var(--TableCell-headBackground)",
            },
            "--TableCell-borderColor":
              "var(--joy-palette-divider, rgba(var(--joy-palette-neutral-mainChannel, 115 115 140) / 0.15))",
          }}
        >
          <thead>
            <tr>
    
              <th style={{ width: 200, padding: "10px", textAlign: "center" }}>N° CTe</th>
              <th style={{ width: 200, padding: "10px", textAlign: "center"  }}>Categoria</th>
              <th style={{ width: 200, padding: "10px", textAlign: "center"  }}>Peso</th>
              <th style={{ width: 200, padding: "10px", textAlign: "center"  }}>Data</th>
              <th style={{ width: 200, padding: "10px", textAlign: "center"  }}>Origem</th>
              <th style={{ width: 200, padding: "10px", textAlign: "center"  }}>Destino</th>
              <th style={{ width: 200, padding: "10px", textAlign: "center"  }}>Status</th>
              <th style={{ width: 200, padding: "10px", textAlign: "center"  }}>Ações</th>
            </tr>
          </thead>
          
        </Table>
      </Sheet>
    </Box>
  );
}
