import { useContext, useState } from "react";
import styles from "../../components/Login/FormLogin.module.css";

export function FormLogin() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.formContainer}>
      <h1>Login</h1>

      <form className={styles.formImputs}>
        <input
          type="email"
          placeholder="Usuário/email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        {error && <span>Email ou senha incorretos!</span>}
      </form>
    </div>
  );
}
