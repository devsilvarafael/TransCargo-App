import {
  Intro,
  IntroHeader,
  IntroMain,
  FormContainer,
  FormInputs,
  IntroContainer,
 
} from "./login.module.tsx";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Intro>
      <IntroContainer>
      
  
      </IntroContainer>

      <FormContainer>
        <h1>Cadastro</h1>

        <FormInputs>
          <input type="text" placeholder="Usuário" required />
          <input type="text" placeholder="CPF" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="setor" required />
          <button type="submit">Realizar Solicitção</button>
          <p>
            Já possui conta?{" "}
            <Link to="/signin">
              <span> Faça o Login!</span>
            </Link>
          </p>
        </FormInputs>
      </FormContainer>
    </Intro>
  );
}
