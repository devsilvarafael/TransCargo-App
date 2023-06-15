import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, p, h2 {
        margin: 0;
        padding: 0;
    }

    * {
        font-family: 'Inter', sans-serif;
        font-family: 400;
        font-size: 1rem;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #DBF4FE;
        border-radius: 6px;
    }

`;



//componente deve ser utilizado no arquivo;
