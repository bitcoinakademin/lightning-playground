import { Typography, Box } from "@mui/material";

export default function Node() {
  return (
      <Box
        sx={{
          maxWidth: "md",
          width: "100vw",
        }}
      >
        <Typography variant="h4">Lightning-nod</Typography>
        <Typography>Här visar vi hur man kommer igång med en egen lightning-nod.</Typography>
      </Box>
  );
}