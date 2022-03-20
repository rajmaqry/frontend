import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export function DatForm(props) {
  return (
    <Grid
      container
      direction="rows"
      style={{
        padding: 30
      }}
    >
      <Grid
        item
        xs={6}
        direction="column"
        alignItems="left"
        justifyContent="left"
      >
        <Grid item xs={6}>
          <TextField variant="outlined" label="FRS" name="FRS" value="OK" />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="outlined" label="FRS" name="FRS" value="OK" />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="outlined" label="FRS" name="FRS" value="OK" />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          item
          xs={6}
          direction="column"
          alignItems="right"
          justifyContent="right"
        >
          <TextField variant="outlined" label="FRS" name="FRS" value="OK" />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="outlined" label="FRS" name="FRS" value="OK" />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="outlined" label="FRS" name="FRS" value="OK" />
        </Grid>
      </Grid>
    </Grid>
  );
}
