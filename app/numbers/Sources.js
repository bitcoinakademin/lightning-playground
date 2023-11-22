"use client";

import Markdown from "@/app/components/Markdown";
import {
  Typography,
  Backdrop,
  CircularProgress,
  Box,
} from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Sources() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/10368`,
      })
        .then((res) => {
          setPost(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getPost();
  }, []);

  return (
    <Box>
      {post ? (
        <Markdown>{post.content.rendered}</Markdown>
      ) : (
        <Typography>Laddar data...</Typography>
      )}
    </Box>
  );
}
