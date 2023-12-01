import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { BitcoinIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { IconButton, Tooltip } from "@mui/material";

const fetcher = (url) => fetch(url).then((res) => res.json());

function BitcoinPrice() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    fetcher
  );

  if (error) {
    return <div>Error loading price</div>;
  }

  if (isLoading) {
    return <div>Loading price</div>;
  }

  return (
    <Tooltip title="Bitcoinpriset just nu">
    <IconButton
      onClick={() => router.push("/graph")}
      size="small"
      sx={{
        color: "white",
        width: "25",
      }}
    >
      <BitcoinIcon
        style={{
          width: "25",
        }}
      />
      : {data.bitcoin.usd} USD
    </IconButton>
    </Tooltip>
  );
}

export default BitcoinPrice;
