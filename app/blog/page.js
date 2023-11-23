"use client";

import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Pagination,
  CircularProgress,
  Backdrop,
  Box,
} from "@mui/material";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleChange = (event, value) => {
    setLoading(true);
    setPage(value);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const getPosts = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/posts?_embed&page=${page}`,
      })
        .then((res) => {
          const pages = parseInt(res.headers["x-wp-totalpages"]);
          setPages(pages);
          setPosts(res.data);
          setLoading(false);
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getPosts();
  }, [page]);

  return (
    <Stack
      spacing={2}
      display="flex"
      flexDirection="column"
      sx={{ maxWidth: "md" }}
    >
      <Typography variant="h4">Blogg</Typography>
      {posts.map((post, index) => (
        <Link
          key={index}
          component={NextLink}
          href={`/blog/${post.id}`}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {post.date.slice(0, 10)}
                </Typography>
                <Typography variant="h5">{post.title.rendered}</Typography>
                <Typography
                  variant="body2"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                />
                <CardMedia
                  component="img"
                  alt="post thumbnail"
                  height="250"
                  sx={{ objectFit: "contain" }}
                  image={
                    post._embedded["wp:featuredmedia"]
                      ? post._embedded["wp:featuredmedia"]["0"].source_url
                      : ""
                  }
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Pagination
          count={pages}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Stack>
  );
}
