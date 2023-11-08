import {Typography, Grid } from "@mui/material";


export default function Use() {

  return (
    <Grid container spacing={2} sx={{ maxWidth: "md", width: "100%" }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Använd Mobilplånbok</Typography>
        <Typography>
          Här visar vi hur och var man använder en mobilplånbok.
        </Typography>
        </Grid>
    </Grid>
  );
}