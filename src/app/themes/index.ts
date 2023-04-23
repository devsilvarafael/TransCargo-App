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
      dark: "#8593A3",
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
});

export default theme;
