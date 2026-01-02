import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff6a21", // ORANGE wie im Bild
    },
    background: {
      default: "#0f1020",
      paper: "#15162c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b9b9c9",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

export default theme;
