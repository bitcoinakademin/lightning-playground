import { Grid, Link, AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="sticky"
      //color="transparent"
    >
      <Toolbar>
        <Grid
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          direction="column"
        >
          <Grid
            item
            xs={12}
            md={12}
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              href="https://bitcoinakademin.se/"
              sx={{color: "white", mb: 0, mt: 2}}
            >
              BitcoinAkademin
            </Link>
            <Typography
              variant="caption"
              sx={{color: "white", mb: 1 }}
            >
              @2023
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
