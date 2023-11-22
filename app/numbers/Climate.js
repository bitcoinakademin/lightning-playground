"use client";

import Markdown from "@/app/components/Markdown";
import { Typography, Box } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Klimat() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/10362`,
      })
        .then((res) => {
          setPost(res.data);
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
        <>
          <Typography id="climate" style={{scrollMargin: 70}}></Typography>
          <Markdown>{post.content.rendered}</Markdown>
        </>
      ) : (
        <Typography>Laddar data...</Typography>
      )}
    </Box>
  );
}
