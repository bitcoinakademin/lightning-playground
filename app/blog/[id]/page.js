"use client";

import Markdown from "@/app/components/Markdown";
import { Typography, Grid, Backdrop, CircularProgress, Button } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getPost = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/posts/${params.id}`,
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
          <Typography variant="subtitle2">{post.date.slice(0, 10)}</Typography>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {post.title.rendered}
          </Typography>
          <Markdown>{post.content.rendered}</Markdown>
          <Button
            variant="outlined"
            sx={{
              fontWeight: "bold",
              mt: 2,
              textTransform: "none",
            }}
            onClick={() => router.back()}
          >
            Tillbaka
          </Button>
        </Grid>
      ) : (
        <Typography>Laddar data...</Typography>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Grid>
  );
}
