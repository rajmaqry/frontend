import { createTheme } from "@mui/material/styles";

import * as React from "react";
import { styled } from "@mui/styles";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";
import Paper from "@mui/material/Paper";

export const AAppBar = styled(AppBar)({
  background: "#00b8d4",
  border: 0,
  borderRadius: 1,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white"
});
export const APaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 100,
  lineHeight: "80px"
}));

export const AFormPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 300,
  lineHeight: "80px"
}));
export const AButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 1,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: "40px",
  padding: "0 5px 0px 5px"
});

const basetheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#0971f1",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  },
  header: {
    backgroundColor: "blue",
    color: "black",
    boxShadow: "0px 0px 0px 0px"
  },
  button: {
    backgroundColor: "#002884",
    color: "white"
  },
  mode: "light"
});
export const paperTheme = createTheme({ palette: { mode: "light" } });
export default basetheme;
