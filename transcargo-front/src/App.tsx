import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { UserAuthenticationQuery } from "./components/UserAuthenticationQuery";

export function App() {
  return (
    <UserAuthenticationQuery>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </UserAuthenticationQuery>
  );
}
