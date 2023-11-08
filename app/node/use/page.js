import { Typography, Grid } from "@mui/material";

export default function Use() {
  return (
    <Grid container spacing={2} sx={{ maxWidth: "md", width: "100%" }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Använd Lightning-nod</Typography>
        <Typography>
          Här visar vi hur man kopplar sin en egen lightning-nod med sin mobil-
          och webbplånbok.
        </Typography>
      </Grid>
    </Grid>
  );
}
