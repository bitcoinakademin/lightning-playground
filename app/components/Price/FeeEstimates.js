import React from "react";
import { CoinsIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button, Tooltip } from "@mui/material";
import { round } from "mathjs";

export default async function FeeEstimates() {
  const res = await fetch("https://blockstream.info/api/fee-estimates");
  const data = await res.json();

  return (
    <Tooltip title="Transaktionskostnad just nu">
      <Button
        startIcon={
          <CoinsIcon
            style={{
              width: "25",
            }}
          />
        }
      >
        {round(Object.values(data)[0])} sat/vB
      </Button>
    </Tooltip>
  );
}
