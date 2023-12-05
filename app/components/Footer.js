import { Grid, Link, AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
    elevation={0}
      sx={{
        position: "relative",
        bottom: 0,
        zIndex: 100,
        width: "100%",
        bgcolor: "white",
      }}
    >
      <Toolbar>
        <Grid
          container
          display="flex"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            md={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="https://bitcoinakademin.se/"
              sx={{ mt: 2 }}
            >
              BitcoinAkademin
            </Link>
            <Typography variant="caption" sx={{ mb: 1, color: "#ffc93c" }}>
              @2023
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
