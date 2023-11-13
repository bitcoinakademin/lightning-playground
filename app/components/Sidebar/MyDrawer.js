import React, { useState } from "react";
import { Drawer, IconButton, colors } from "@mui/material";
import MenuItems from "./MenuItems";
import {
  BitcoinCircleIcon,
  MenuIcon,
} from "@bitcoin-design/bitcoin-icons-react/filled";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";

function MyDrawer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: "70vw",
            display: "flex",
            flexDirection: "column",
            bgcolor: colors.grey[50],
          },
        }}
      >
        <Link
          component={NextLink}
          href="/"
          variant="inherit"
          underline="none"
          color="white"
        >
          <BitcoinCircleIcon
            style={{
              width: "75",
              color: "#fcba03",
              marginTop: 10,
              marginLeft: 10,
            }}
          />
        </Link>
        <MenuItems />
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{ width: "25", color: "white" }} />
      </IconButton>
    </>
  );
}

export default MyDrawer;
