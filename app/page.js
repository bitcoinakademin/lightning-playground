"use client";
import {
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import {
  DevicesIcon,
  GlobeIcon,
  NodeIcon,
} from "@bitcoin-design/bitcoin-icons-react/filled";

export default function Home() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={2}
      sx={{ height: isMobile ? "100%" : "50vh", maxWidth: "md" }}
    >
      <Grid item xs={12} md={12}>
        <Typography variant="h4">Välkommen!</Typography>
        <Typography>
          Välkommen till Bitcoin Akademins playground för Lightning Network! Här
          lär du dig hur du kan skicka bitcoin blixtsnabbt och billigt. Sidan
          består av tre olika delar som tillsammans täcker allt du behöver veta
          för att börja använda lightning både på webben och i mobilen. Tryck på
          den delen du vill börja med nedan. Om du är helt ny till lightning
          rekommenderar vi att börja med en webbplånbok.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          endIcon={<GlobeIcon style={{ width: "150" }} />}
          onClick={() => router.push("/webln")}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
            fontWeight: "bold",
            minWidth: isMobile ? "100%" : "50px",
          }}
        >
          Webbplånbok
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          endIcon={<DevicesIcon style={{ width: "150" }} />}
          onClick={() => router.push("/webln")}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
            fontWeight: "bold",
            minWidth: isMobile ? "100%" : "50px",
          }}
        >
          Mobilplånbok
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          endIcon={<NodeIcon style={{ width: "150" }} />}
          onClick={() => router.push("/webln")}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
            fontWeight: "bold",
            minWidth: isMobile ? "100%" : "50px",
          }}
        >
          Lightning-nod
        </Button>
      </Grid>
    </Grid>
  );
}
