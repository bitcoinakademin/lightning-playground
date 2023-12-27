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
    <Grid container rowSpacing={2} columnGap={isMobile ? 0 : 8} display={"flex"} maxWidth={"lg"}>
      <Grid item xs={12} md={12} sx={{mb: isMobile ? 0 : 5}}>
        <Typography variant="h4" align={isMobile ? "left" : "center"}>
          Innehåll
        </Typography>
        <Typography align={isMobile ? "left" : "center"}>
          BitcoinAkademin består av fyra olika delar. Avsnitten Introduktion och
          Resurser innehåller information som hjälper nybörjare att lära sig
          grunderna och komma igång med Bitcoin. Blogg och Siffror innehåller
          information för dig som vill hålla dig uppdaterad om läget för
          Bitcoin.
        </Typography>
      </Grid>
      <Grid item xs={12} md={2.5}>
        <Link
          component={NextLink}
          href={"/introduction"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{ mb: 2, maxWidth: isMobile ? "90vw" : 400, borderRadius: 4 }}
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
      <Grid item xs={12} md={2.5}>
        <Link
          component={NextLink}
          href={"/numbers"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{ mb: 2, maxWidth: isMobile ? "90vw" : 400, borderRadius: 4 }}
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
      <Grid item xs={12} md={2.5}>
        <Link
          component={NextLink}
          href={"/resources"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{ mb: 2, maxWidth: isMobile ? "90vw" : 400, borderRadius: 4 }}
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
      <Grid item xs={12} md={2.5}>
        <Link
          component={NextLink}
          href={"/blog"}
          variant="inherit"
          underline="none"
          color="white"
        >
          <Card
            sx={{ mb: 2, maxWidth: isMobile ? "90vw" : 400, borderRadius: 4 }}
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
    </Grid>
  );
}

export default ContentSection;
