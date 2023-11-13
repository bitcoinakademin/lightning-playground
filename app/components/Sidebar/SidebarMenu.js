"use client";

import {
  Box,
  useTheme,
  useMediaQuery,
  colors,
} from "@mui/material";
import MenuItems from "./MenuItems";

function SidebarMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Box
          sx={{
            position: "-webkit-sticky" /* Safari */,
            position: "sticky",
            top: "60px",
            flex: "0 0 250px",
            height: "calc(100vh - 60px)",
            overflowY: "auto",
            bgcolor: colors.grey[50],
            padding: theme.spacing(1),
          }}
        >
          <MenuItems />
        </Box>
      )}
    </>
  );
}

export default SidebarMenu;
