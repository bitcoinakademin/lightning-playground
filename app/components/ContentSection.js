"use client";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";

function ContentSection() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      spacing={2}
      maxWidth={"lg"}
      display={"flex"}
    >
      <Grid item xs={12} md={12}>
        <Typography variant="h4" align="center">Innehåll</Typography>
        <Typography align="center">
          BitcoinAkademin består av 6 olika delar. Avsnitten Introduktion och
          Resurser innehåller information som hjälper nybörjare att lära sig
          grunderna. Blogg och Siffror innehåller information för dig som vill
          hålla dig uppdaterad om läget för Bitcoin. Våra Guider är för dig som
          vill få praktisk erfarenhet där vi steg för steg visar allt från att
          skicka och ta emot transaktioner till programmering av bitcoin. Den
          sista biten av BitcoinAkademin är att den är öppen och vi ser gärna
          att fler vill engagera sig. Kontakta oss om du vill bidra med
          innehåll!
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
    </Grid>
  );
}

export default ContentSection;
