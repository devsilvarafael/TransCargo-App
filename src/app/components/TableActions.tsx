import { Box, Button } from "@mui/material";

export default function TableActions() {
  return (
    <Box sx={{ display: "flex", gap: "20px", width: "max-content" }}>
      <Button sx={{ color: "white" }} color="warning" variant="contained">
        Editar
      </Button>
      <Button color="error" variant="contained">
        Deletar
      </Button>
    </Box>
  );
}
