import {Typography, Box } from "@mui/material";


export default function Use() {

  return (
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
  );
}