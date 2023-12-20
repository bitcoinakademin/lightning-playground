"use client"

import { Grid, Link, AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        position: "relative",
        bottom: 0,
        zIndex: 100,
        width: "100%",
        height: 100,
        bgcolor: "grey.100",
      }}
    >
      <Grid container display="flex" height={"100%"}>
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height={"100%"}
        >
          <Link href="https://bitcoinakademin.se/">BitcoinAkademin</Link>
          <Typography variant="caption" sx={{ color: "#ffc93c" }}>
            @2023
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};
export default Footer;
