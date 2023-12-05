import React from "react";
import { BitcoinIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Tooltip, Button } from "@mui/material";

export default async function BitcoinPrice() {
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", {
    next: { revalidate: 60 }, // Will revalidate every 30 seconds
  });
  const data = await res.json();

  return (
    <Tooltip title="Bitcoinpriset just nu">
    <Button
      startIcon={<BitcoinIcon
        style={{
          width: "25",
        }}
      />}
    >
    {data.bitcoin.usd} USD
    </Button>
    </Tooltip>
  );
}

