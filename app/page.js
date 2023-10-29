import { Container, Typography, Box } from "@mui/material";


export default function Home() {
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
      sx={{maxWidth: "750px"}}
      >
        <Typography>
          Välkommen till BitcoinAkademins playground för Lightning Network! Här
          kan du läsa och testa på hur bitcoin kan skickas blixtsnabbt och
          billigt mellan två parter.
        </Typography>
      </Box>
    </Container>
  );
}
