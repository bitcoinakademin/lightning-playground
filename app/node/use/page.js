import {Typography, Box } from "@mui/material";

export default function Use() {
  return (
      <Box
        sx={{
          maxWidth: "md",
          width: "100vw",
        }}
      >
        <Typography variant="h4">Använd Lightning-nod</Typography>
        <Typography>Här visar vi hur man kopplar sin en egen lightning-nod med sin mobil- och webbplånbok.</Typography>
      </Box>
  );
}