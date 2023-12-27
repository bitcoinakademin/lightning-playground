import React from "react";
import { BitcoinIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Tooltip, Button } from "@mui/material";
import Link from "next/link";

export default async function BitcoinPrice() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    {
      next: { revalidate: 60 }, // Will revalidate every 30 seconds
    }
  );
  const data = await res.json();

  return (
    <Tooltip title="Bitcoinpriset just nu">
      <Link href="/graph">
      <Button
        startIcon={
          <BitcoinIcon
            style={{
              width: "25px",
            }}
          />
        }
      >
        {data.bitcoin.usd} USD
      </Button>
      </Link>
    </Tooltip>
  );
}
