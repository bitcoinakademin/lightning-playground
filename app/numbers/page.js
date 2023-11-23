"use client";

import { Backdrop, CircularProgress, Box, Typography, Tooltip, Fab } from "@mui/material";
import Markdown from "@/app/components/Markdown";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CaretUpIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

export default function Numbers() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postIds = [10372, 10370, 10364, 10360, 10366, 10362, 10368];
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

  const navigateTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box spacing={2} sx={{ maxWidth: "md" }}>
      {posts.length > 1 ? (
        <>
          <Markdown id="introduction" style={{ scrollMargin: 60 }}>
            {posts[0].value.data.content.rendered}
          </Markdown>
          <Markdown id="macro" style={{ scrollMargin: 70 }}>
            {posts[1].value.data.content.rendered}
          </Markdown>
          <Markdown id="finance" style={{ scrollMargin: 70 }}>
            {posts[2].value.data.content.rendered}
          </Markdown>
          <Markdown id="bitcoin" style={{ scrollMargin: 70 }}>
            {posts[3].value.data.content.rendered}
          </Markdown>
          <Markdown id="attachments" style={{ scrollMargin: 70 }}>
            {posts[4].value.data.content.rendered}
          </Markdown>
          <Markdown id="climate" style={{ scrollMargin: 70 }}>
            {posts[5].value.data.content.rendered}
          </Markdown>
          <Markdown id="sources" style={{ scrollMargin: 70 }}>
            {posts[6].value.data.content.rendered}
          </Markdown>
        </>
      ) : (
        <Typography>Laddar data...</Typography>
      )}
      <Tooltip title="Till toppen">
        <Fab
          onClick={navigateTop}
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 40, right: 40 }}
        >
          <CaretUpIcon style={{ width: 20, color: "white" }} />
        </Fab>
      </Tooltip>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Box>
  );
}
