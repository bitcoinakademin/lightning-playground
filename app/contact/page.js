import { Typography, Grid } from "@mui/material";

export default function Contact() {
  return (
    <Grid container spacing={2} sx={{ maxWidth: "md", width: "100%" }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Kontakta oss</Typography>
        <Typography>
          Vill du komma i kontakt med oss kan du höra av dig till
          hej@bitcoinakademin.se
        </Typography>
      </Grid>
    </Grid>
  );
}
