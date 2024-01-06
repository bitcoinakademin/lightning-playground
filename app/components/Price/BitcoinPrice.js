"use client"

import React from "react";
import { BitcoinIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Tooltip, Button, CircularProgress, Typography } from "@mui/material";
import Link from "next/link";
import useSWR from "swr";

export default function BitcoinPrice() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
    fetcher
  );

  if (error)
    return <Typography>Ingen data tillgänglig</Typography>;
  if (!data) return <CircularProgress />;

  return (
    <Tooltip title="Bitcoinpriset just nu">
      <Link href="/graf">
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
