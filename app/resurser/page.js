"use client";

import Markdown from "@/app/components/Markdown";
import {
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import React from "react";
import useSWR from "swr";

export default function Resources() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/9797`,
    fetcher
  );

  if (error)
    return <Typography>Kunde inte hämta datan. Försök igen senare</Typography>;
  if (!data) return <CircularProgress />;

  return (
    <Stack
      spacing={2}
      display="flex"
      flexDirection="column"
      sx={{ maxWidth: "md", mb: 5 }}
    >
      <Typography variant="h4" sx={{ mb: 1 }}>
        {data.title.rendered}
      </Typography>
      <Markdown>{data.content.rendered}</Markdown>
    </Stack>
  );
}
