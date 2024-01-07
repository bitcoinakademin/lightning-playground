"use client";
import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { Tweet } from "react-tweet";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/CustomTheme";
import dayjs from "dayjs";

export default function News() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [news, setNews] = useState([
    {
      title: "",
      content: "",
      date: "",
      twitter: "",
      image: "",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("date", "desc"))
    const fetchNews = async () => {
      await getDocs(q).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNews(newData);
        setLoading(false);
      });
    };
    fetchNews();
  }, []);


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={isMobile ? "start" : "center"}
      flexDirection="column"
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          <Typography variant="h4" id="nyheter" sx={{ scrollMargin: 70 }}>
            Nyheter
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Här lägger vi upp ett urval av de viktigaste Bitcoin relaterade
            nyheterna varje dag.
          </Typography>
          {news.map((post) => (
            <Card
              key={post.id}
              sx={{ mb: 2, width: isMobile ? "90vw" : 800, borderRadius: 4 }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                 {dayjs.unix(post.date.seconds).format('YYYY-MM-DD')}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: theme.palette.primary.main }}
                >
                  {post.title}
                </Typography>
                <Typography variant="subtitle1">{post.content}</Typography>
                {post.image && (
                  <CardMedia
                    component="img"
                    alt="post thumbnail"
                    height="500"
                    sx={{ objectFit: "contain" }}
                    image={post.image}
                  />
                )}
                {post.twitter && <Tweet id={post.twitter} />}
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}
