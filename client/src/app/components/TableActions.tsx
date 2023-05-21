import { Box, Button } from "@mui/material";

interface ButtonActionsProps {
  deleteData?: (id: any) => void;
  editData?: (data: any) => void;
}
export default function TableActions({
  deleteData,
  editData,
}: ButtonActionsProps) {
  return (
    <Box sx={{ display: "flex", gap: "20px", width: "max-content" }}>
      <Button
        sx={{ color: "white" }}
        color="warning"
        variant="contained"
        size="small"
        onClick={editData}
      >
        Editar
      </Button>
      <Button
        color="error"
        variant="contained"
        size="small"
        onClick={deleteData}
      >
        Deletar
      </Button>
    </Box>
  );
}
