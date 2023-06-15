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
import {ModalConfirmAndCancel} from "./ModalSelectUser.module";


export function ModalDialogUser() {
  const [open, setOpen] = React.useState<boolean>(false);
const handleClose = () => {
    setOpen(false);}


  return (
    <ModalUserContainer>
      <React.Fragment>
        <Button
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
          sx={{ backgroundColor: "#ba1073", color: "white" }}
        >
          USUÁRIO
        </Button>
        
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 600, minWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title"  component="h2">
            Cadastrar - Administrador
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
                  <FormLabel>Nome</FormLabel>
                  <Input autoFocus required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Função</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Login</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Senha</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <div>
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
                </div>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </ModalUserContainer>
  );
}
