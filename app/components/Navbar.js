"use client";

import {
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { BitcoinCircleIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { useState } from "react";
import styled from "@emotion/styled";
import {
  MenuIcon,
  CaretLeftIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import MenuItems from "./MenuItems";

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

const Navbar = () => {
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
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "60px",
      }}
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon style={{ width: 30, color: "white" }} />
        </IconButton>
        <Typography variant="h5" noWrap component="div" sx={{color: "white"}}>
          BitcoinAkademin
        </Typography>
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
        <BitcoinCircleIcon style={{ height: 50, marginRight: 150, color: theme.palette.primary.main }} />
          <IconButton onClick={handleDrawerClose}>
              <CaretLeftIcon
                style={{
                  width: "15",
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
