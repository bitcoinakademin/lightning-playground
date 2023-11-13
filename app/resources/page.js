"use client";

import Markdown from "@/app/components/Markdown";
import { Typography, Grid } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Resources() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/9797`,
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
    <Grid container spacing={2} sx={{ maxWidth: "md" }}>
      {post ? (
        <Grid item xs={12} md={12}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {post.title.rendered}
          </Typography>
          <Markdown>{post.content.rendered}</Markdown>
        </Grid>
      ) : (
        <Typography>Laddar data...</Typography>
      )}
    </Grid>
  );
}