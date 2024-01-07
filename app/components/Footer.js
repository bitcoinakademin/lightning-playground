"use client"

import { Grid, Link, AppBar, Toolbar, Typography, useTheme, } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <AppBar
      elevation={0}
      sx={{
        position: "relative",
        bottom: 0,
        zIndex: 100,
        width: "100%",
        height: 100,
        bgcolor: theme.palette.action.hover,
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
          <Link href="/">BitcoinAkademin</Link>
          <Typography variant="caption" sx={{ color: theme.palette.primary.main }}>
            @2024
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};
export default Footer;
