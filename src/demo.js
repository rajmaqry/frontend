import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SubHeader from "./AppBar";
import AddIcon from "@mui/icons-material/Add";
import { IngestionOptions } from "./ingestion";
import BaseContainer from "./container";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary
}));
const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#64b5f6"
    },
    secondary: {
      main: "#64ffda"
    },
    mode: "light"
  }
});

export default function Elevation() {
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    console.log(inputValues);
    setInputValues({ ...inputValues, ...abc });
  };

  const [showTab, showTabFunc] = React.useState(false);

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="strech"
    >
      <Grid item xs={12}>
        <SubHeader
          display="Configure you data ingestion points"
          addButton="ture"
          buttonText="Create new"
          buttonClick={() => handleClick()}
          buttonIcon={<AddIcon />}
        />
      </Grid>
      {Object.keys(inputValues).map((c) => {
        return (
          <Grid item xs={12}>
            {inputValues[c]}
          </Grid>
        );
      })}
      {Array.from(Array(counter)).map((c, index) => {
        return (
          <Grid item xs={12}>
            <Item onChange={handleOnChange} key={c} className={index}>
              {<IngestionOptions />}
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
}
