"use client";

import React from "react";
import { CoinsIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button, CircularProgress, Tooltip, Typography } from "@mui/material";
import { round } from "mathjs";
import useSWR from "swr";
import Link from "next/link";

export default function FeeEstimates() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://blockstream.info/api/fee-estimates`,
    fetcher
  );

  if (error) return <Typography>Ingen data tillgänglig</Typography>;
  if (!data) return <CircularProgress />;

  return (
    <Tooltip title="Transaktionskostnad just nu">
      <Link href="https://mempool.space/">
        <Button
          startIcon={
            <CoinsIcon
              style={{
                width: "25px",
              }}
            />
          }
        >
          {round(Object.values(data)[0])} sat/vB
        </Button>
      </Link>
    </Tooltip>
  );
}
