import {
  Intro,
  FormContainer,
  FormInputs,
  Ground,
  IntroTitle,
} from "./login.module.tsx";
import SVGdraw from "../../assets/Logo.svg";
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from "react";


export function SignIn() {

  

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handleUserData = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }




  return (
      <Ground>
    <Intro>
      <IntroTitle>
      <h1>Login</h1>
      <FormContainer>
      <img src={SVGdraw} alt="" />
      
        <FormInputs>
          <input type="email" name="email" placeholder="Usuário/email" onChange={handleUserData} required />
          <input type="password" name="password" placeholder="Senha" onChange={handleUserData} required minLength={8} />
      
         
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button type="submit" >Entrar</button>
           </Link>
        </FormInputs>
      </FormContainer>
      </IntroTitle>
    </Intro>
      </Ground>
  );
}
