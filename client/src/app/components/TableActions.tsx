import { Box, Button } from "@mui/material";

export default function TableActions() {
  return (
    <Box sx={{ display: "flex", gap: "20px", width: "max-content" }}>
      <Button
        sx={{ color: "white" }}
        color="warning"
        variant="contained"
        size="small"
      >
        Editar
      </Button>
      <Button color="error" variant="contained" size="small">
        Deletar
      </Button>
    </Box>
  );
}
