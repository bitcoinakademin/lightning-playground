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
} from "@mui/material";
import React, { useState } from "react";
import { CaretUpIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import CustomTabPanel from "../components/CustomTabPanel";
import useSWR from "swr";

export default function Introduction() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const postIds = [10358, 10356, 10354, 10352, 10350, 10348, 10346, 10343];
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data: introduction, error: introductionError } = useSWR(
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
    introductionError ||
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
    !introduction ||
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
    <Box spacing={2} sx={{ maxWidth: "md" }}>
      <Typography variant="h3">Introduktion</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
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
      >
        <Tab label="Start" />
        <Tab label="1. Uppfinningen Bitcoin" />
        <Tab label="2. Dagens pengar och vägen hit" />
        <Tab label="3. Är Bitcoin pengar?" />
        <Tab label="4. Bitcoin utöver pengar" />
        <Tab label="5. Statusen för Bitcoin" />
        <Tab label="6. Hoten mot Bitcoin" />
        <Tab label="7. Framtiden" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Markdown>{introduction.content.rendered}</Markdown>
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
