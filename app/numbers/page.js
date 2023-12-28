"use client";

import {
  CircularProgress,
  Box,
  Typography,
  Tooltip,
  Fab,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Markdown from "@/app/components/Markdown";
import React, { useState } from "react";
import { CaretUpIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import CustomTabPanel from "../components/CustomTabPanel";
import useSWR from "swr";


export default function Numbers() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const postIds = [10372, 10370, 10364, 10360, 10366, 10362, 10368];
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data : introduction, error: introductionError } = useSWR(`https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[0]}`,fetcher)
  const { data : macro, error: macroError } = useSWR(`https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[1]}`,fetcher)
  const { data : finance, error: financeError } = useSWR(`https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[2]}`,fetcher)
  const { data : bitcoin, error: bitcoinError } = useSWR(`https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[3]}`,fetcher)
  const { data : climate, error: climateError } = useSWR(`https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[5]}`,fetcher)
  const { data : attachments, error: attachmentsError } = useSWR(`https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[4]}`,fetcher)
  const { data : sources, error: sourcesError } = useSWR(`https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/${postIds[6]}`,fetcher)

  if (introductionError || macroError || financeError || bitcoinError || climateError || attachmentsError || sourcesError) return <Typography>Kunde inte hämta datan. Försök igen senare</Typography>
  if (!introduction || !macro || !finance || !bitcoin || !climate || !attachments || !sources) return <CircularProgress />

  const navigateTop = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <Box spacing={2} sx={{ maxWidth: "md", overflow: isMobile && "hidden" }}>
          <Typography variant="h3">Siffror</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Här hittar du statusen för Bitcoin just nu tillsammans med makro-
            och finansuppföljningar. De tre delarna hänger samman, Bitcoin
            skapades för att ersätta dagens pengar. Siffrorna uppdateras
            kontinuerligt.
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Start" />
            <Tab label="Macro" />
            <Tab label="Finans" />
            <Tab label="Bitcoin" />
            <Tab label="Klimat" />
            <Tab label="Källor och bilagor" />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Markdown id="introduction" style={{ scrollMargin: 60 }}>
              {introduction.content.rendered}
            </Markdown>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Markdown id="macro" style={{ scrollMargin: 70 }}>
              {macro.content.rendered}
            </Markdown>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Markdown id="finance" style={{ scrollMargin: 70 }}>
              {finance.content.rendered}
            </Markdown>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Markdown id="bitcoin" style={{ scrollMargin: 70 }}>
              {bitcoin.content.rendered}
            </Markdown>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <Markdown id="climate" style={{ scrollMargin: 70 }}>
              {climate.content.rendered}
            </Markdown>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            <Markdown id="sources" style={{ scrollMargin: 70 }}>
              {sources.content.rendered}
            </Markdown>
            <Markdown id="attachments" style={{ scrollMargin: 70 }}>
              {attachments.content.rendered}
            </Markdown>
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
