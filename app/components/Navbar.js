"use client";

import {
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  Divider,
  Grid,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { BitcoinCircleIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { useState } from "react";
import styled from "@emotion/styled";
import {
  MenuIcon,
  CaretLeftIcon,
  BitcoinIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import MenuItems from "./MenuItems";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar = ({ children }) => {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
    elevation={0} 
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        bgcolor: "white",
        borderBottom: 1,
        borderBottomColor: "grey.300",
      }}
      open={open}
    >
      <Toolbar>
        <Grid container>
          <Grid item xs={3} md={"auto"}>
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon style={{ width: 30, color: theme.palette.primary.main }} />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={6}
            md={1.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              onClick={() => router.push("/")}
              sx={{ color: theme.palette.primary.main }}
            >
              BitcoinAkademin
            </IconButton>
          </Grid>
          <Grid item xs={3} md={4.5}></Grid>
          {isMobile ? (
            <></>
          ) : (
            <>
              <Grid item md={1.5} display="flex" alignItems="center" justifyContent="center">
                {children[0]}
              </Grid>
              <Grid item md={1.5} display="flex" alignItems="center" justifyContent="center">
                {children[1]}
              </Grid>
              <Grid item md={1.5} display="flex" alignItems="center" justifyContent="center">
                {children[2]}
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <BitcoinCircleIcon
            style={{
              height: 50,
              marginRight: 150,
              color: theme.palette.primary.main,
            }}
          />
          <IconButton onClick={handleDrawerClose}>
            <CaretLeftIcon
              style={{
                width: "20px",
                color: theme.palette.primary.main,
              }}
            />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <Toolbar > */}
        {/* <Image
          src={"/images/logo.png"}
          alt="logo"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        /> */}
        {/* <BitcoinCircleIcon style={{ width: "40%", marginLeft: 50, color: theme.palette.primary.main }} />
      </Toolbar> */}
        <MenuItems />
      </Drawer>
    </AppBar>
  );
};
export default Navbar;
