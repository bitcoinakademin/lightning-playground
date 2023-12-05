"use client";
import {
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  colors,
  Button,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { BitcoinCircleIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";
import { Tweet } from "react-tweet";

export default function Home() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const bitcoinTitle = (
    <Typography
      variant="h2"
      display={"inline"}
      sx={{ color: theme.palette.primary.main }}
    >
      Bitcoin
    </Typography>
  );

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
      image: true
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      maxWidth={"lg"}
      display={"flex"}
      sx={{ mb: 10 }}
    >
      <Grid item xs={12} md={6} height="70vh">
        <Box
          height="100%"
          width="80%"
          display="flex"
          justifyContent="center"
          alignItems="start"
          flexDirection="column"
        >
          <Typography variant="h2">Lär dig allt om {bitcoinTitle}</Typography>
          <Typography variant="subtitle1" sx={{ mb: 5 }}>
            En plats om Bitcoin för alla - från nyfikna nybörjare till experter.
            Målsättningen är att du här ska kunna ta dina första steg i att
            förstå Bitcoin och kunna följa Bitcoins utveckling på vägen att bli
            viktigare än internet, mycket viktigare.
          </Typography>
          <Stack direction={"row"} spacing={3}>
          <Link
          href="/#latest-news"
          scroll={false}
          // style={{
          //   textDecoration: "none",
          //   color:
          //     subPath === "#introduction"
          //       ? theme.palette.primary.main
          //       : "black",
          // }}
        >
            <Button variant="contained" sx={{ color: "white" }}>
              Senaste nytt
            </Button>
            </Link>
            <Button variant="outlined">Kom igång med Bitcoin</Button>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <BitcoinCircleIcon
            style={{
              width: isMobile ? "80vw" : "30vw",
              maxWidth: 500,
              color: theme.palette.primary.main,
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          component={NextLink}
          href={"/introduction"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardActionArea sx={{ height: 210 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Introduktion
                </Typography>
                <Typography variant="subtitle1">
                  Börja med att läsa Introduktion till Bitcoin. Mycket av det
                  som händer på Bitcoinakademin har sina rötter i inlägget.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          component={NextLink}
          href={"/numbers"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardActionArea sx={{ height: 210 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Siffror
                </Typography>
                <Typography variant="subtitle1">
                  Under rubriken Siffror hittar du statusen för Bitcoin just nu
                  tillsammans med makro- och finansuppföljningar.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          component={NextLink}
          href={"/resources"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardActionArea sx={{ height: 210 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Resurser
                </Typography>
                <Typography variant="subtitle1">
                  En förteckning över bra & ha grejor finns under Resurser som
                  hur du gör för att komma igång med Bitcoin.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          component={NextLink}
          href={"/blog"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardActionArea sx={{ height: 210 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Blogg
                </Typography>
                <Typography variant="subtitle1">
                  Under Blogg hittar du löpande uppföljningar kring utvecklingen
                  av Bitcoins ekosystem och annat spännande vi lärt oss.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          component={NextLink}
          href={"/webln"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardActionArea sx={{ height: 210 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Guider
                </Typography>
                <Typography variant="subtitle1">
                  Våra guider hjälper dig med allt från att skaffa din första
                  plånbok till att utveckla dina egna bitcoinlösningar.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          component={NextLink}
          href={"/contact"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardActionArea sx={{ height: 210 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  Kontakt
                </Typography>
                <Typography variant="subtitle1">
                  Bitcoin är open source och Bitcoinakademin är såklart lika
                  öppet. Hör av dej om du vill vara med!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={12} md={12} sx={{ mt: isMobile ? 5 : 15 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h3" id="latest-news" sx={{ mb: 2, scrollMargin: 70}}>
            Senaste nytt
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
                    image={"/hashrate.jpeg"}
                  />
                )}
                                {post.tweet && (
                  <Tweet
                  id="1730226879125160426"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
