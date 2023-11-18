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
} from "@mui/material";
import { useRouter } from "next/navigation";
import {
  DevicesIcon,
  GlobeIcon,
  NodeIcon,
} from "@bitcoin-design/bitcoin-icons-react/filled";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";

export default function Home() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ minHeight: isMobile ? "100%" : "85vh", maxWidth: "md", mb: 2 }}>
      <Typography variant="h4">Välkommen till BitcoinAkademin!</Typography>
      <Typography sx={{ mb: 10 }}>
        En plats om Bitcoin för alla - från nyfikna nybörjare till experter.
        Målsättningen är att du här ska kunna ta dina första steg i att förstå
        Bitcoin och kunna följa Bitcoins utveckling på vägen att bli viktigare
        än internet, mycket viktigare.
      </Typography>
      <Grid
        container
        spacing={10}
      >
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
                background:
                  "linear-gradient(0deg, rgba(255,253,208,1) 0%, rgba(252,186,3,1) 100%)",
              }}
            >
              <CardActionArea 
              sx={{height: 210}}>
                <CardContent>
                  <Typography variant="h6">Introduktion</Typography>
                  <Typography variant="body2">
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
                background:
                  "linear-gradient(0deg, rgba(255,253,208,1) 0%, rgba(252,186,3,1) 100%)",
              }}
            >
              <CardActionArea>
                <CardContent sx={{height: 210}}>
                  <Typography variant="h6">Siffror</Typography>
                  <Typography variant="body2">
                    Under rubriken Siffror hittar du statusen för Bitcoin just
                    nu tillsammans med makro- och finansuppföljningar. De tre
                    delarna hänger samman, Bitcoin skapades för att ersätta
                    dagens pengar.
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
                background:
                  "linear-gradient(0deg, rgba(255,253,208,1) 0%, rgba(252,186,3,1) 100%)",
              }}
            >
              <CardActionArea sx={{height: 210}}>
                <CardContent>
                  <Typography variant="h6">Resurser</Typography>
                  <Typography variant="body2">
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
                background:
                  "linear-gradient(0deg, rgba(255,253,208,1) 0%, rgba(252,186,3,1) 100%)",
              }}
            >
              <CardActionArea sx={{height: 210}}>
                <CardContent>
                  <Typography variant="h6">Blogg</Typography>
                  <Typography variant="body2">
                    Under Blogg hittar du löpande uppföljningar kring
                    utvecklingen av Bitcoins ekosystem och annat spännande vi
                    lärt oss.
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
                background:
                  "linear-gradient(0deg, rgba(255,253,208,1) 0%, rgba(252,186,3,1) 100%)",
              }}
            >
              <CardActionArea sx={{height: 210}}>
                <CardContent>
                  <Typography variant="h6">Sandlåda</Typography>
                  <Typography variant="body2">
                    Planen framöver är att skapa en Bitcoin Sandbox där du på
                    olika sätt kan testa Bitcoin som Lightning, LNurl, Fedimint,
                    DLC m.m.
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
                background:
                  "linear-gradient(0deg, rgba(255,253,208,1) 0%, rgba(252,186,3,1) 100%)",
              }}
            >
              <CardActionArea sx={{height: 210}}>
                <CardContent>
                  <Typography variant="h6">Kontakt</Typography>
                  <Typography variant="body2">
                    Bitcoin är open source och Bitcoinakademin är såklart lika
                    öppet. Hör av dej om du vill vara med!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
