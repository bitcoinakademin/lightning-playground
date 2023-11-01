import { Container, Typography, Box } from "@mui/material";

export default function Node() {
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
        <Typography variant="h4">Lightning-nod</Typography>
        <Typography>Här visar vi hur man kommer igång med en egen lightning-nod.</Typography>
      </Box>
    </Container>
  );
}