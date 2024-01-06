"use client";
import {
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
  Stack,
} from "@mui/material";
import ContentSection from "./components/ContentSection";
import { BitcoinCircleIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import News from "./components/News";
import Link from "next/link";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const bitcoinTitle = (
    <div>
      <Typography
        variant="h2"
        display={"inline"}
        sx={{ color: theme.palette.primary.main }}
      >
        Bitcoin
      </Typography>
    </div>
  );

  return (
    <Box>
      <Grid container spacing={2} maxWidth={"lg"} display={"flex"}>
        <Grid
          item
          xs={12}
          md={6}
          height={isMobile ? "60vh" : "75vh"}
          maxHeight={700}
          minHeight={500}
        >
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
              En plats om Bitcoin för alla - från nyfikna nybörjare till
              experter. Målsättningen är att du här ska kunna ta dina första
              steg i att förstå Bitcoin och kunna följa Bitcoins utveckling på
              vägen att bli viktigare än internet, mycket viktigare.
            </Typography>
            <Stack direction={"row"} spacing={3}>
              <Link href="/#latest-news">
                <Button variant="contained" sx={{ color: "white" }}>
                  Senaste nytt
                </Button>
              </Link>
              <Link
                href={{
                  pathname: "/introduktion",
                  query: { sektion: "start" },
                }}
              >
                <Button variant="outlined">Kom igång med Bitcoin</Button>
              </Link>
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
                width: isMobile ? "0vw" : "30vw",
                maxWidth: 500,
                color: theme.palette.primary.main,
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Stack spacing={isMobile ? 5 : 15}>
        <ContentSection />
        <News />
      </Stack>
    </Box>
  );
}
