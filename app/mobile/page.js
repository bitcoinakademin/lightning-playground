import { Container, Typography, Box } from "@mui/material";

export default function Mobile() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        mt: "125px",
        minHeight: "100vh",
        mb: "100px",
      }}
    >
      <Box
        sx={{
          maxWidth: "md",
          width: "100vw",
        }}
      >
        <Typography variant="h4">Mobilplånbok</Typography>
        <Typography>Här visar vi hur man kommer igång med Blixt.</Typography>
      </Box>
    </Container>
  );
}
