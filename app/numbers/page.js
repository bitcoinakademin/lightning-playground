"use client";

import {
  Backdrop,
  CircularProgress,
  Box,
} from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Macro from "./Macro";
import Climate from "./Climate";
import Intro from "./Intro";
import Sources from "./Sources";
import Finance from "./Finance";
import Bitcoin from "./Bitcoin";
import Attachments from "./Attachments";

export default function Numbers() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/9795`,
      })
        .then((res) => {
          if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getPost();
  }, []);

  return (
    <Box spacing={2} sx={{ maxWidth: "md" }}>
      <>
        <Intro />
        <Macro />
        <Finance />
        <Bitcoin />
        <Attachments />
        <Climate />
        <Sources />
      </>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Box>
  );
}
