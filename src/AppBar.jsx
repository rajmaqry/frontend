import * as React from "react";
import { Component } from "react";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import basetheme from "./theme";
import { ThemeProvider } from "@mui/styles";
import { AButton, AAppBar } from "./theme";

export default class SubHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleEvent = (e) => {
      this.props.buttonClick(e);
    };

    const isButton = this.props.addButton;
    return (
      <ThemeProvider theme={basetheme}>
        <ThemeProvider theme={basetheme}>
          <AAppBar position="static">
            <Toolbar>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                {this.props.display}
              </Typography>

              {isButton && (
                <AButton
                  color="inherit"
                  startIcon={this.props.buttonIcon}
                  onClick={(e) => handleEvent(e)}
                >
                  {this.props.buttonText}
                </AButton>
              )}
            </Toolbar>
          </AAppBar>
        </ThemeProvider>
      </ThemeProvider>
    );
  }
}
