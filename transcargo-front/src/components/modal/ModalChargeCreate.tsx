import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import { ModalUserContainer } from "./ModalUserCreate.module";
import { ModalConfirmAndCancel } from "./ModalSelectUser.module";
export function ModalDialogCharge() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ModalUserContainer>
      <React.Fragment>
        
      <Button
          
          onClick={() => setOpen(true)}
          sx={{ backgroundColor: "#c7127c", color: "white" }}
        >
          <h1 >
          
            NOVA CARGA
          </h1>
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 600, minWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title" component="h2">
              Cadastrar Carga
            </Typography>
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <FormControl>
                  <FormLabel>N° CTe</FormLabel>
                  <Input autoFocus required type="number" />
                </FormControl>
                <FormControl>
                  <FormLabel>Tipo</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Peso</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Dimensão</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Origem</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Destino</FormLabel>
                  <Input required type="text" />
                </FormControl>

                <ModalConfirmAndCancel>
                  <Button
                    sx={{ backgroundColor: "#4B3896", color: "white", gridColumn: "1 / -1" }}
                    type="submit"
                  >
                    CADASTRAR
                  </Button>
                  <Button
                    sx={{ backgroundColor: "#FFFFFF", color: "red", border: "1px solid red", gridColumn: "1 / -1" }}
                    type="submit" onClick={handleClose}
                  >

                    CANCELAR
                  </Button>

                </ModalConfirmAndCancel>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </ModalUserContainer>
  );
}
