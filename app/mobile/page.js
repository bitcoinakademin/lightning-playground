import { Typography, Box } from "@mui/material";

export default function Mobile() {
  return (
    <Box
      sx={{
        maxWidth: "md",
        width: "100vw",
      }}
    >
      <Typography variant="h4">Mobilplånbok</Typography>
      <Typography>Här visar vi hur man kommer igång med Blixt.</Typography>
    </Box>
  );
}
