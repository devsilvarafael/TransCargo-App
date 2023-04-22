"use client";

import { Box, Button, Card, FormControl, TextField } from "@mui/material";
import LoginContainer from "@/app/components/LoginContainer";
import Image from "next/image";
import Heading from "@/app/components/Heading";
import { ChangeEvent, useState } from "react";

interface LoginValuesProps {
  email: null | string;
  password: null | string;
}

export default function LoginForm() {
  const [formValue, setFormValue] = useState<LoginValuesProps>({
    email: null,
    password: null,
  });

  function loginFormValues(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
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
              fullWidth
            />
          </FormControl>

          <Button variant="contained" sx={{ mt: 6, height: 50 }} fullWidth>
            Login
          </Button>
        </Card>
      </Box>
    </LoginContainer>
  );
}
