import { createTheme, Theme } from "@mui/material";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#644BC8",
      light: "#FFFFFF",
      dark: "#3F4EC4",
    },
    secondary: {
      main: "#C3CCD6",
      light: "#28CA9E",
      dark: "#BCC4FB",
    },
    error: {
      main: "#F35625",
    },
    warning: {
      main: "#FFAB00",
    },
    background: {
      default: "#F4F7FA",
    },
  },
  typography: {
    fontFamily: "Inter",
    h2: {
      fontWeight: "bold",
      fontSize: 34,
    },
  },
});

export default theme;
