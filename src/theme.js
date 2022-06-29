import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// A custom theme for this app
let theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  p: {
    fontFamily: "'Poppins', sans-serif",
  },
  MuiButton: {
    root: {
      textTransform: "none",
      padding: "20px",
    },
    fullWidth: {
      maxWidth: "20px",
    },
  },
  palette: {
    primary: {
      main: "#3772FF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
