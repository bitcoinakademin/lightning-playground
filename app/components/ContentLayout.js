"use client"

import { Box } from "@mui/material";
import React from "react";

function ContentLayout({ children }) {
  return (
    <Box
      sx={{
        pt: "60px",
        flex: "1" /* Takes up the remaining width */,
        overflowY: "auto",
        marginY: 5,
        marginX: 2,
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
}

export default ContentLayout;
