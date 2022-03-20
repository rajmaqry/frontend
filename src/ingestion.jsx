import { ThemeProvider, styled } from "@mui/material/styles";
import { INGESTION_ENDPOINTS } from "./data_ingestions";
import SelectButton from "./SelectButton";
import { APaper, paperTheme, AFormPaper } from "./theme";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { DatForm } from "./myform";

export const IngestionOptions = () => {
  const [selected, setSelected] = useState(INGESTION_ENDPOINTS["Select"].text);
  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  const isSelected = selected !== "Select" ? true : false;
  const renderDetailsForm = (selected) => {
    switch (selected) {
      case "AWSS3":
        return <AFormPaper elevation="2">{DatForm(selected)}</AFormPaper>;
      default:
        return <p></p>;
    }
  };

  const ingestionOptions = () => {
    return (
      <SelectButton
        name="ingestion_op"
        value={selected}
        id="ingestion_op"
        options={INGESTION_ENDPOINTS}
        onValueChange={(e) => handleSelect(e)}
      />
    );
  };
  return (
    <ThemeProvider theme={paperTheme}>
      <APaper key="ingestion" elevation="2">
        <Grid
          container
          spacing={2}
          columns={16}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Select ingestion endpoints:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            {ingestionOptions()}
          </Grid>
          {isSelected && (
            <Grid item xs={16}>
              {renderDetailsForm(selected)}
            </Grid>
          )}
        </Grid>
      </APaper>
    </ThemeProvider>
  );
};
