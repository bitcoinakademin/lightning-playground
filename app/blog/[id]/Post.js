"use client";

import { Button, Stack, Typography } from "@mui/material";
import useSWR from "swr";
import Markdown from "@/app/components/Markdown";
import { useRouter } from "next/navigation";

export default function Post({ params }) {
  const router = useRouter();
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/posts/${params.id}`,
    fetcher,
    { suspense: true }
  );

  return (
    <Stack
      spacing={2}
      display="flex"
      flexDirection="column"
      sx={{ maxWidth: "md", mb: 5 }}
    >
      <Typography variant="subtitle2">{data.date.slice(0, 10)}</Typography>
      <Typography variant="h4" sx={{ mb: 1 }}>
        {data.title.rendered}
      </Typography>
      <Markdown>{data.content.rendered}</Markdown>
      <Button
        variant="contained"
        sx={{
          color: "white",
          maxWidth: 100,
          mt: 2,
          textTransform: "none",
        }}
        onClick={() => router.back()}
      >
        Tillbaka
      </Button>
    </Stack>
  );
}
