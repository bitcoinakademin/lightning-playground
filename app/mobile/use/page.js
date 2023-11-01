import { Container, Typography, Box } from "@mui/material";


export default function Use() {

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
          width: "100vw"
        }}
      >
        <Typography variant="h4">Använd Mobilplånbok</Typography>
        <Typography>
          Här visar vi hur och var man använder en mobilplånbok.
        </Typography>
      </Box>
    </Container>
  );
}