"use client";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  useTheme,
  useMediaQuery,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";

function ContentSection() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      rowSpacing={2}
      columnGap={isMobile ? 0 : 8}
      display={"flex"}
      maxWidth={"lg"}
    >
      <Grid item xs={12} md={12} sx={{ mb: isMobile ? 0 : 5 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems={isMobile ? "start" : "center"}
          flexDirection="column"
        >
          <Typography variant="h4" align={isMobile ? "left" : "center"}>
            Innehåll
          </Typography>
          <Typography
            align={isMobile ? "left" : "center"}
            sx={{ width: isMobile ? "90vw" : 800 }}
          >
            BitcoinAkademin består av fyra olika delar. Avsnitten Introduktion
            och Resurser innehåller information som hjälper nybörjare att lära
            sig grunderna och komma igång med Bitcoin. Blogg och Siffror
            innehåller information för dig som vill hålla dig uppdaterad och fördjupa dina kunskaper om
            Bitcoin.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={5.5}>
        <Card
          sx={{ mb: 2, maxWidth: isMobile ? "90vw" : 800, borderRadius: 4 }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
              För nybörjare
            </Typography>
            <Typography variant="subtitle1">
            Börja med att läsa Introduktion till Bitcoin. Mycket av det
                    som händer på Bitcoinakademin har sina rötter i inlägget.
                    Under resurser finns en förteckning över bra & ha grejor som
                    hur du gör för att komma igång med Bitcoin.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={() => router.push("/introduktion")}>Introduktion</Button>
            <Button variant="outlined" onClick={() => router.push("/resurser")}>Resurser</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={5.5}>
      <Card
          sx={{ mb: 2, maxWidth: isMobile ? "90vw" : 800, borderRadius: 4 }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
              För erfarna
            </Typography>
            <Typography variant="subtitle1">
            I vår blogg kan du fördjupa dig i olika bitcoin relaterade ämnen. I delen Siffor hittar du statusen för Bitcoin just nu tillsammans med makro- och finansuppföljningar.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={() => router.push("/blogg")}>Blogg</Button>
            <Button variant="outlined" onClick={() => router.push("/siffror")}>Siffror</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ContentSection;
