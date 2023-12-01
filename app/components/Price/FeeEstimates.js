import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { CoinsIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { IconButton, Tooltip } from "@mui/material";
import { round } from "mathjs"

const fetcher = (url) => fetch(url).then((res) => res.json());

function FeeEstimates() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    "https://blockstream.info/api/fee-estimates",
    fetcher
  );

  if (error) {
    return <div>Error loading price</div>;
  }

  if (isLoading) {
    return <div>Loading price</div>;
  }

  console.log(Object.values(data)[0]);

  return (
    <Tooltip title="Transaktionskostnad just nu">
      <IconButton
        //onClick={() => router.push("/graph")}
        size="small"
        sx={{
          color: "white",
          width: "25",
        }}
      >
        <CoinsIcon
          style={{
            width: "25",
          }}
        />
        : {round(Object.values(data)[0])} sat/vB
      </IconButton>
    </Tooltip>
  );
}

export default FeeEstimates;
