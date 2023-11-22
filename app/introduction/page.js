"use client";

import Markdown from "@/app/components/Markdown";
import {
  Typography,
  Grid,
  Backdrop,
  CircularProgress,
  Box,
} from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Introduction() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postIds = [
      10358, 10356, 10354, 10352, 10350, 10348, 10346, 10343,
    ].reverse();
    const getPosts = async () => {
      let postsList = [];
      for (let i = 0; i < postIds.length; i++) {
        const postId = postIds[i];
        postsList.push(
          Axios({
            method: "GET",
            url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postId}`,
          })
        );
      }
      const responses = await Promise.allSettled(postsList);
      setPosts(responses);
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setLoading(false);
    };
    getPosts();
  }, []);

  return (
    <Box spacing={2} sx={{ maxWidth: "md"}}>
      {posts.length > 1 ? (
        <>
          <Markdown id="introduction" style={{scrollMargin: 60}}>
            {posts[0].value.data.content.rendered}
          </Markdown>
          <Markdown id="the-bitcoin-innovation" style={{scrollMargin: 70}}>
            {posts[1].value.data.content.rendered}
          </Markdown>
          <Markdown id="todays-money" style={{scrollMargin: 70}}>
            {posts[2].value.data.content.rendered}
          </Markdown>
          <Markdown id="is-bitcoin-money" style={{scrollMargin: 70}}>
            {posts[3].value.data.content.rendered}
          </Markdown>
          <Markdown id="Bitcoin-beyond-money" style={{scrollMargin: 70}}>
            {posts[4].value.data.content.rendered}
          </Markdown>
          <Markdown id="Bitcoin-status" style={{scrollMargin: 70}}>
            {posts[5].value.data.content.rendered}
          </Markdown>
          <Markdown id="Bitcoin-threats" style={{scrollMargin: 70}}>
            {posts[6].value.data.content.rendered}
          </Markdown>
          <Markdown id="the-future" style={{scrollMargin: 70}}>
            {posts[7].value.data.content.rendered}
          </Markdown>
        </>
      ) : (
        <Typography>Laddar data...</Typography>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Box>
  );
}
