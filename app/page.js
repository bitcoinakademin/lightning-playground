"use client"
import { Container, Typography, Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { DevicesIcon, GlobeIcon, NodeIcon } from '@bitcoin-design/bitcoin-icons-react/filled';

export default function Home() {
  const router = useRouter();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        mt: "125px",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "50vh",
          maxWidth: "md",
        }}
      >
        <Stack>
        <Typography variant="h4">Välkommen!</Typography>
        <Typography>
          Välkommen till BitcoinAkademins playground för Lightning Network! Här
          lär du dig hur du kan skicka bitcoin blixtsnabbt och
          billigt mellan två parter. Vi har tre olika delar som tillsammans täcker allt du behöver veta om lightning network och hjälper dig komma igång med lightning plånböcker både på webben och i mobilen. Tryck på den delen du vill börja med nedan. Om du är helt ny till lightning rekommenderar vi att börja med en webbplånbok. 
        </Typography>
        </Stack>
        <Stack
        spacing={2}
        direction="row"
        >
        <Button
          endIcon={<GlobeIcon style={{width: "150" }} />}
          onClick={() => router.push("/webln")}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
          }}
        >
          Webbplånbok
        </Button>
        <Button
          endIcon={<DevicesIcon style={{width: "150" }} />}
          onClick={() => router.push("/webln")}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
          }}
        >
          Mobilplånbok
        </Button>
        <Button
          endIcon={<NodeIcon style={{width: "150" }} />}
          onClick={() => router.push("/webln")}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
          }}
        >
          Lightning-nod
        </Button>
        </Stack>
      </Box>
    </Container>
  );
}
