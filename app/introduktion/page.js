"use client";

import Markdown from "@/app/components/Markdown";
import {
  Typography,
  CircularProgress,
  Box,
  Fab,
  Tooltip,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CaretUpIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import CustomTabPanel from "../components/CustomTabPanel";
import useSWR from "swr";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function introduktion() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const searchParams = useSearchParams();
  const search = searchParams.get("sektion");

  useEffect(() => {
    if (search === "start") {
      setValue(0);
    } else if (search === "uppfinningen-bitcoin") {
      setValue(1);
    } else if (search === "dagens-pengar-och-vagen-hit") {
      setValue(2);
    } else if (search === "ar-bitcoin-pengar") {
      setValue(3);
    } else if (search === "bitcoin-utover-pengar") {
      setValue(4);
    } else if (search === "statusen-for-bitcoin") {
      setValue(5);
    } else if (search === "hoten-mot-bitcoin") {
      setValue(6);
    } else if (search === "framtiden") {
      setValue(7);
    }else {
      setValue(0);
    }
  }, [search]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const postIds = [10358, 10356, 10354, 10352, 10350, 10348, 10346, 10343];
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data: introduktion, error: introduktionError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[7]}`,
    fetcher
  );
  const { data: one, error: oneError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[6]}`,
    fetcher
  );
  const { data: two, error: twoError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[5]}`,
    fetcher
  );
  const { data: three, error: threeError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[4]}`,
    fetcher
  );
  const { data: four, error: fourError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[3]}`,
    fetcher
  );
  const { data: five, error: fiveError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[2]}`,
    fetcher
  );
  const { data: six, error: sixError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[1]}`,
    fetcher
  );
  const { data: seven, error: sevenError } = useSWR(
    `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[0]}`,
    fetcher
  );

  if (
    introduktionError ||
    oneError ||
    twoError ||
    threeError ||
    fourError ||
    fiveError ||
    sixError ||
    sevenError
  )
    return <Typography>Kunde inte hämta datan. Försök igen senare</Typography>;
  if (
    !introduktion ||
    !one ||
    !two ||
    !three ||
    !four ||
    !five ||
    !six ||
    !seven
  )
    return <CircularProgress />;

  const navigateTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ maxWidth: "md", overflow: isMobile && "hidden" }}>
      <Typography variant="h3">Introduktion</Typography>
      <Typography variant="body1">
        Här hittar du en introduktion till Bitcoin. Om du är nybörjare till
        Bitcoin är detta ett utmärkt ställe att lära dig grunderna till vad
        Bitcoin är, varför det skapades och hur det fungerar.
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{ marginY: 6 }}
      >
        <Tab
          label="Start"
          href={{
            pathname: "/introduktion",
            query: { sektion: "start" },
          }}
          component={Link}
        />
        <Tab
          label="1. Uppfinningen Bitcoin"
          href={{
            pathname: "/introduktion",
            query: { sektion: "uppfinningen-bitcoin" },
          }}
          component={Link}
        />
        <Tab
          label="2. Dagens pengar och vägen hit"
          href={{
            pathname: "/introduktion",
            query: { sektion: "dagens-pengar-och-vagen-hit" },
          }}
          component={Link}
        />
        <Tab
          label="3. Är Bitcoin pengar?"
          href={{
            pathname: "/introduktion",
            query: { sektion: "ar-bitcoin-pengar" },
          }}
          component={Link}
        />
        <Tab
          label="4. Bitcoin utöver pengar"
          href={{
            pathname: "/introduktion",
            query: { sektion: "bitcoin-utover-pengar" },
          }}
          component={Link}
        />
        <Tab
          label="5. Statusen för Bitcoin"
          href={{
            pathname: "/introduktion",
            query: { sektion: "statusen-for-bitcoin" },
          }}
          component={Link}
        />
        <Tab
          label="6. Hoten mot Bitcoin"
          href={{
            pathname: "/introduktion",
            query: { sektion: "hoten-mot-bitcoin" },
          }}
          component={Link}
        />
        <Tab
          label="7. Framtiden"
          href={{
            pathname: "/introduktion",
            query: { sektion: "framtiden" },
          }}
          component={Link}
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Markdown>{introduktion.content.rendered}</Markdown>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Markdown>{one.content.rendered}</Markdown>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Markdown>{two.content.rendered}</Markdown>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Markdown>{three.content.rendered}</Markdown>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Markdown>{four.content.rendered}</Markdown>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Markdown>{five.content.rendered}</Markdown>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Markdown>{six.content.rendered}</Markdown>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Markdown>{seven.content.rendered}</Markdown>
      </CustomTabPanel>
      <Tooltip title="Till toppen">
        <Fab
          onClick={navigateTop}
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 40, right: 40 }}
        >
          <CaretUpIcon style={{ width: 20, color: "white" }} />
        </Fab>
      </Tooltip>
    </Box>
  );
}
