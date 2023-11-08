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
import { LightningCircleIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import MyDrawer from "./Sidebar/MyDrawer";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 100,
        width: "100%",
        height: "60px",
      }}
    >
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
              <MyDrawer />
            </Grid>
            <Grid
              item
              xs={8}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6">
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
          >
            <Grid
              item
              md={1}
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <Link
                component={NextLink}
                href="/"
                variant="inherit"
                underline="none"
                color="white"
              >
                <LightningCircleIcon style={{ width: "50", color: "white" }} />
              </Link>
            </Grid>
            <Grid
              item
              md={11}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link
                component={NextLink}
                href="/"
                variant="inherit"
                underline="none"
                color="white"
              >
                <Typography variant="h5" fontWeight="bold">
                  Lightning Playground
                </Typography>
              </Link>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
