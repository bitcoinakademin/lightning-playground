import { Grid, Link, AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      sx={{
        position: "relative",
        bottom: 0,
        zIndex: 100,
        width: "100%",
        height: "70px",
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
              sx={{ color: "white", mt: 2 }}
            >
              BitcoinAkademin
            </Link>
            <Typography variant="caption" sx={{ color: "white", mb: 1 }}>
              @2023
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
