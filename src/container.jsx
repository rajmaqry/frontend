import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import basetheme from "./theme";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary
}));

export default function BaseContainer({ children }) {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="strech"
    >
      <ThemeProvider theme={basetheme}>
        {Object.keys(children).map((c) => {
          return (
            <Grid item xs={12}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 2
                }}
              >
                <p>{children[c]}</p>
              </Box>
            </Grid>
          );
        })}
      </ThemeProvider>
    </Grid>
  );
}
