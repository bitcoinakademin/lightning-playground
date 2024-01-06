"use client"

import React from "react";
import { BlockIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button, Tooltip, CircularProgress, Typography } from "@mui/material";
import Link from "next/link";
import useSWR from "swr";

export default function BlockHeight() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://blockstream.info/api/blocks/tip`,
    fetcher
  );

  if (error)
    return <Typography>Ingen data tillgänglig</Typography>;
  if (!data) return <CircularProgress />;

  return (
    <Tooltip title="Senaste blockhöjden">
      <Link href="https://mempool.space/">
      <Button
        startIcon={
          <BlockIcon
            style={{
              width: "25px",
            }}
          />
        }
      >
        {data[0].height}
      </Button>
      </Link>
    </Tooltip>
  );
}
