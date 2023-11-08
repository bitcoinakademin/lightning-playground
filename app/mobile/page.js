import { Typography, Grid } from "@mui/material";

export default function Mobile() {
  return (
    <Grid container spacing={2} sx={{ maxWidth: "md", width: "100%" }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Mobilplånbok</Typography>
        <Typography>Här visar vi hur man kommer igång med Blixt.</Typography>
      </Grid>
    </Grid>
  );
}
