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
import Link from "@mui/material/Link";
import ContentSection from "./components/ContentSection";
import { BitcoinCircleIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import News from "./components/News";

export default function Home() {
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

  return (
    <Box>
      <Grid
        container
        spacing={2}
        maxWidth={"lg"}
        display={"flex"}
      >
        <Grid item xs={12} md={6} height="75vh" maxHeight={700}>
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
              <Link href="/#latest-news" scroll={false}>
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
      </Grid>
      <Stack spacing={15}>
      <ContentSection />
      <News />
      </Stack>
    </Box>
  );
}
