import React from "react";
import { BlockIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button, Tooltip } from "@mui/material";

export default async function BlockHeight() {
  const res = await fetch("https://blockstream.info/api/blocks/tip");
  const data = await res.json();

  return (
    <Tooltip title="Senaste blockhöjden">
      <Button
        startIcon={
          <BlockIcon
            style={{
              width: "25",
            }}
          />
        }
      >
        {data[0].height}
      </Button>
    </Tooltip>
  );
}
