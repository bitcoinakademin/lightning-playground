"use client";
import {
  Typography,
  Button,
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
    <Grid
      container
      spacing={2}
      sx={{ height: isMobile ? "100%" : "85vh", maxWidth: "md" }}
    >
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Välkommen till BitcoinAkademin!</Typography>
        <Typography>
          En plats om Bitcoin för alla - från nyfikna nybörjare till experter.
          Målsättningen är att du här ska kunna ta dina första steg i att förstå
          Bitcoin och kunna följa Bitcoins utveckling på vägen att bli viktigare
          än internet, mycket viktigare.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          component={NextLink}
          href={"/introduction"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card>
            <CardActionArea>
              <CardContent sx={{minHeight: 225}}>
                <Typography variant="h5">Introduktion</Typography>
                <Typography>
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
          <Card>
            <CardActionArea>
              <CardContent sx={{minHeight: 225}}>
                <Typography variant="h5">Siffror</Typography>
                <Typography>
                  Under rubriken Siffror hittar du statusen för Bitcoin just nu
                  tillsammans med makro- och finansuppföljningar. De tre delarna
                  hänger samman, Bitcoin skapades för att ersätta dagens pengar.
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
          <Card>
            <CardActionArea>
              <CardContent sx={{minHeight: 225}}>
                <Typography variant="h5">Resurser</Typography>
                <Typography>
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
          <Card>
            <CardActionArea>
              <CardContent sx={{minHeight: 225}}>
                <Typography variant="h5">Blogg</Typography>
                <Typography>
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
          <Card>
            <CardActionArea>
              <CardContent sx={{minHeight: 225}}>
                <Typography variant="h5">Sandlåda</Typography>
                <Typography>
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
          <Card>
            <CardActionArea>
              <CardContent sx={{minHeight: 225}}>
                <Typography variant="h5">Kontakt</Typography>
                <Typography>
                  Bitcoin är open source och Bitcoinakademin är såklart lika
                  öppet. Hör av dej om du vill vara med!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}
