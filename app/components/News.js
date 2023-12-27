"use client";
import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Tweet } from "react-tweet";

export default function News() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const posts = [
    {
      id: 1,
      title: "Bitcoin når nya höjder!",
      content:
        "Bitcoin har rusat till 42000 dollar vilket är höjder som inte har setts sedan våren 2022.",
      date: "2023-12-05",
    },
    {
      id: 2,
      title: "MicroStrategy köper nya bitcoin",
      content:
        "Saylor fortsätter köpa dippen. Läs vårt inlägg om MicroStrategy där vi berättar om hur denna aktien kan vara en attraktiv exponering mot bitcoin i din portfölj.",
      date: "2023-12-03",
      tweet: true,
    },
    {
      id: 3,
      title: "Nätverket är säkrare än någonsin",
      content:
        "Hashraten fortsätter öka i enorm takt. Läs vårt inlägg om hashrate och mining för att förstå mer om varför detta är viktigt.",
      date: "2023-12-02",
      image: true,
    },
  ];
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={isMobile ? "start" : "center"}
      flexDirection="column"
    >
      <Typography
        variant="h4"
        id="latest-news"
        sx={{ scrollMargin: 70 }}
      >
        Senaste nytt
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Här lägger vi upp ett urval av de viktigaste Bitcoin relaterade nyheterna varje dag. 
      </Typography>
      {posts.map((post, index) => (
        <Card
          key={index}
          sx={{ mb: 2, width: isMobile ? "90vw" : 800, borderRadius: 4 }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {post.date.slice(0, 10)}
            </Typography>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1">{post.content}</Typography>
            {post.image && (
              <CardMedia
                component="img"
                alt="post thumbnail"
                height="500"
                sx={{ objectFit: "contain" }}
                image={"/hashrate.jpeg"}
              />
            )}
            {post.tweet && <Tweet id="1730226879125160426" />}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
