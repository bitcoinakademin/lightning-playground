import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { BlockIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { IconButton, Tooltip } from "@mui/material";

const fetcher = (url) => fetch(url).then((res) => res.json());

function BlockHeight() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    "https://blockstream.info/api/blocks/tip",
    fetcher
  );

  if (error) {
    return <div>Error loading price</div>;
  }

  if (isLoading) {
    return <div>Loading price</div>;
  }

  return (
    <Tooltip title="Senaste blockhöjden">
      <IconButton
        //onClick={() => router.push("/graph")}
        size="small"
        sx={{
          color: "white",
          width: "25",
        }}
      >
        <BlockIcon
          style={{
            width: "25",
          }}
        />
        : {data[0].height}
      </IconButton>
    </Tooltip>
  );
}

export default BlockHeight;
