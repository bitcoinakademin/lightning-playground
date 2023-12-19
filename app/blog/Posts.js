"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Pagination,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";
import { useState } from "react";
import useSWR from "swr";

export default function Posts() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(28);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const fetcher = ([url, page]) =>
    fetch(`${url}?_embed&page=${page}`).then((r) => 
      r.json()
    );
  const { data, error } = useSWR(
    [`https://blog.bitcoinakademin.se/wp-json/wp/v2/posts`, page],
    fetcher,
    { suspense: true }
  );

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Stack
      spacing={2}
      display="flex"
      flexDirection="column"
      sx={{ maxWidth: "md", mb: 5 }}
      
    >
      <Typography variant="h4">Blogg</Typography>
      {data.map((post, index) => (
        <Link
          key={index}
          component={NextLink}
          href={`/blog/${post.id}`}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card sx={{ mb: 2, width: isMobile ? "90vw" : 800, borderRadius: 4 }}>
            <CardActionArea>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {post.date.slice(0, 10)}
                </Typography>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>{post.title.rendered}</Typography>
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
    </Stack>
  );
}
