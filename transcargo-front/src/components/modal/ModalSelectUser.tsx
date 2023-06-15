import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { ModalDialogCliente } from "./ModalClienteCreate";
import { ModalUserContainer, ModalSelectTypeUser } from "./ModalSelectUser.module";
import { ModalDialogUser } from './ModalUserCreate';
import { ModalDialogDrive } from "./ModalDriverCreat";

export function BasicModalDialogSelectOptionUser() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (

    <ModalUserContainer>

      <React.Fragment>

        <Button
          
          onClick={() => setOpen(true)}
          sx={{ backgroundColor: "#644BC8", color: "white" }}
        >
          Criar Usuário
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 600, minWidth: 500 }}
          >

            <h1>SELECIONE O TIPO DE USUARIO</h1>

            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <ModalSelectTypeUser>
                <ModalDialogUser />
                <ModalDialogCliente />
                <ModalDialogDrive />

              </ModalSelectTypeUser>




            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </ModalUserContainer>
  );
}
