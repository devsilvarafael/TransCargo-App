import {
  Intro,
  FormContainer,
  FormInputs,
  Ground,
  IntroTitle,
} from "./login.module.tsx";
import SVGdraw from "../../assets/Logo.svg";
import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

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


  const signInUser = (event: FormEvent) => {
    axios.post("http://localhost:8080/api/login", userData).then(res => {
      console.log(res.data)
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
            <button type="submit" onClick={signInUser}>Entrar</button>
           </Link>
        </FormInputs>
      </FormContainer>
      </IntroTitle>
    </Intro>
      </Ground>
  );
}
