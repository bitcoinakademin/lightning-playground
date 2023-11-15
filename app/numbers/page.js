"use client";

import Markdown from "@/app/components/Markdown";
import { Typography, Grid, Backdrop, CircularProgress } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Numbers() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/9795`,
      })
        .then((res) => {
          setPost(res.data);
          setLoading(false);
          window.scrollTo(0, 0);
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Grid>
  );
}