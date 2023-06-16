import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { ModalUserContainer } from "./ModalUserCreate.module";
import {ModalConfirmAndCancel} from "./ModalSelectUser.module";


export function ModalDialogCreateRouterTrunck() {
  const [open, setOpen] = React.useState<boolean>(false);
const handleClose = () => {
    setOpen(false);}


  return (
    <ModalUserContainer>
      <React.Fragment>
        <Button
          onClick={() => setOpen(true)}
          sx={{ backgroundColor: "#30a8c7", color: "white" }}
        >
          Rota de Entrega
        </Button>
        
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 600, minWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title"  component="h2">
            Nova Rota
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
                  <FormLabel>Localização Atual</FormLabel>
                  <Input autoFocus required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Ponto De destino</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Ponto de Parada</FormLabel>
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
