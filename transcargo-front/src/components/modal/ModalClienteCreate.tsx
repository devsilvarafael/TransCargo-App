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
import axios from "axios";
export function ModalDialogCliente() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);

    const handleSubmitCliente = async () => {
      // Dados do formulário
      const formData = {
        name: String,
        email: String,
        password: String,
        role: String,
        cnpj: Number,
        address: String
        // outros campos
      };
  
      try {
        // Enviar a requisição para o backend
        const response = await fetch("URL_DO_BACKEND", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        // Verificar a resposta do backend
        if (response.ok) {
          
          const responseData = await response.json();
          console.log(responseData);
          // Tratar a resposta do backend conforme necessário
        } else {
         console.error("Erro ao tentar criar o usuario ");
        
        }
      } catch (error) {
        console.error("Erro inesperado ao tentar criar o usuario");
      }
    };
  };
  return (
    <ModalUserContainer>
      <React.Fragment>
        <Button
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
          sx={{ backgroundColor: "#9bba10", color: "white" }}
        >
          <h1>
            CLIENTE
          </h1>
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{ maxWidth: 600, minWidth: 500 }}
          >
            <Typography id="basic-modal-dialog-title" component="h2">
              Cadastrar - Cliente
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
                  <FormLabel>CNPJ</FormLabel>
                  <Input autoFocus required type="number" />
                </FormControl>
                <FormControl>
                  <FormLabel>Nome do Cliente</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Endereço do Cliente</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>CEP</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Nome do Usuário</FormLabel>
                  <Input required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Senha</FormLabel>
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
