import { Typography, Grid } from "@mui/material";

export default function Node() {
  return (
    <Grid container spacing={2} sx={{ maxWidth: "md", width: "100%" }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Lightning-nod</Typography>
        <Typography>
          Här visar vi hur man kommer igång med en egen lightning-nod.
        </Typography>
      </Grid>
    </Grid>
  );
}
