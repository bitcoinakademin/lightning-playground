"use client";

import {
  AppBar,
  Toolbar,
  Grid,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar 
    elevation={5}
    sx={{height: 60, position:"fixed"}}>
      <Toolbar>
        {isMobile ? (
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ pt: 2, pb: 2 }}
          >
            <Grid
              item
              xs={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* <CustomDrawer /> */}
            </Grid>
            <Grid
              item
              xs={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5">
                <Link
                  component={NextLink}
                  href="/"
                  variant="inherit"
                  underline="none"
                  color="white"
                >
                  Lightning Playground
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            ></Grid>
          </Grid>
        ) : (
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ pt: 3, pb: 3 }}
          >
            <Grid
              item
              md={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5" fontWeight="bold">
                <Link
                  component={NextLink}
                  href="/"
                  variant="inherit"
                  underline="none"
                  color="white"
                >
                  Lightning Playground
                </Link>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
