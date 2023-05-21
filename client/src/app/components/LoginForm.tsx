"use client";

import { Box, Button, Card, FormControl, TextField } from "@mui/material";
import LoginContainer from "@/app/components/LoginContainer";
import Image from "next/image";
import Heading from "@/app/components/Heading";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

interface LoginValuesProps {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formValue, setFormValue] = useState<LoginValuesProps>({
    email: "",
    password: "",
  });

  function loginFormValues(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  async function signIn(event: FormEvent) {
    event.preventDefault();

    const { email, password } = formValue;

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Logado");
      }

      setFormValue({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginContainer>
      <Box>
        <Heading variant="h2" mb={6} color="#353B41">
          Login
        </Heading>
        <Card
          sx={{
            minWidth: 600,
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/transcargo-icon.svg"
            alt="Find Inc. - Logo"
            width={100}
            height={100}
          />

          <FormControl fullWidth sx={{ mt: 5 }}>
            <TextField
              name="email"
              label="E-mail"
              value={formValue.email}
              onChange={(event) => loginFormValues(event)}
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth sx={{ mt: 4 }}>
            <TextField
              name="password"
              label="Senha"
              value={formValue.password}
              onChange={(event) => loginFormValues(event)}
              fullWidth
            />
          </FormControl>

          <Button
            onClick={signIn}
            variant="contained"
            sx={{ mt: 6, height: 50 }}
            fullWidth
          >
            Login
          </Button>
        </Card>
      </Box>
    </LoginContainer>
  );
}
