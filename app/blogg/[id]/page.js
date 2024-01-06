"use client";

import {
  Button,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import useSWR from "swr";
import Markdown from "@/app/components/Markdown";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogPost() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/posts/${search}`,
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
      sx={{ maxWidth: "md", mb: 5, overflow: isMobile && "hidden" }}
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
