"use client";

import Markdown from "@/app/components/Markdown";
import {
  Typography,
  Grid,
  Backdrop,
  CircularProgress,
  useTheme,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Stack,
  Button,
} from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function Numbers() {
  const [post, setPost] = useState(null);
  const [dataType, setDataType] = useState("1M");
  const [dataTitle, setDataTitle] = useState("U.S 1 Month Treasury");
  const [data, setData] = useState([0]);
  const [dates, setDates] = useState([0]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(dayjs("2023-11-10"));
  const [endDate, setEndDate] = useState(dayjs());
  const [bitcoinData, setBitcoinData] = useState([[0,0], [0,0]]);
  const [scaleType, setScaleType] = useState("linear");
  const theme = useTheme();

  useEffect(() => {
    const getPost = () => {
      Axios({
        method: "GET",
        url: `https://blog.bitcoinakademin.se/wp-json/wp/v2/pages/9795`,
      })
        .then((res) => {
          setPost(res.data);
          setLoading(false);
          window.scrollTo(0, 0);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getPost();
    fetchBitcoinData();

    const dates1M = [
      new Date(2022, 9, 16),
      new Date(2022, 9, 18),
      new Date(2022, 9, 19),
      new Date(2022, 9, 20),
      new Date(2022, 9, 21),
      new Date(2022, 9, 22),
    ];
    const data1M = [2.47, 2.514, 2.522, 2.568, 2.6493, 2.654].reverse();

    setData(data1M);
    setDates(dates1M);
  }, []);

  const handleChange = (event) => {
    setDataType(event.target.value);
    if (event.target.value === "1M") {
      const dates1M = [
        new Date(2022, 9, 16),
        new Date(2022, 9, 18),
        new Date(2022, 9, 19),
        new Date(2022, 9, 20),
        new Date(2022, 9, 21),
        new Date(2022, 9, 22),
      ];
      const data1M = [2.47, 2.514, 2.522, 2.568, 2.6493, 2.654].reverse();

      setData(data1M);
      setDates(dates1M);
      setDataTitle("U.S 1 Month Treasury");
    } else if (event.target.value === "6M") {
      const data6M = [3.909, 3.902, 3.902, 3.866, 3.8108, 3.806].reverse();
      setData(data6M);
      setDataTitle("U.S 6 Month Treasury");
    } else if (event.target.value === "1Y") {
      const data1Y = [4.075, 4.073, 4.038, 4.055, 3.9854, 3.964].reverse();
      setData(data1Y);
      setDataTitle("U.S 1 Year Treasury");
    } else if (event.target.value === "2Y") {
      const data2Y = [4.118, 4.0591, 3.9707, 3.9464, 3.8713, 3.8713].reverse();
      setData(data2Y);
      setDataTitle("U.S 2 Year Treasury");
    } else if (event.target.value === "5Y") {
      const data5Y = [3.9291, 3.768, 3.7517, 3.6894, 3.6362, 3.6362].reverse();
      setData(data5Y);
      setDataTitle("U.S 5 Year Treasury");
    } else if (event.target.value === "7Y") {
      const data7Y = [3.8587, 3.6803, 3.6932, 3.6172, 3.5701, 3.5701].reverse();
      setData(data7Y);
      setDataTitle("U.S 7 Year Treasury");
    } else if (event.target.value === "30Y") {
      const data30Y = [3.638, 3.507, 3.575, 3.516, 3.52, 3.52].reverse();
      setData(data30Y);
      setDataTitle("U.S 30 Year Treasury");
    }
  };

  const handleChangeScale = (event) => {
    setScaleType(event.target.value);
  };

  const fetchBitcoinData = () => {
    const startDateUnix = dayjs(startDate).unix();
    const endDateUnix = dayjs(endDate).unix();
    const getBitcoinData = () => {
      Axios({
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=sek&from=${startDateUnix}&to=${endDateUnix}`,
      })
        .then((res) => {
          const newDates = res.data.prices.map(function (x) {
            return new Date(x[0]);
          });
          const newPrices = res.data.prices.map(function (x) {
            return x[1];
          });
          setBitcoinData([newDates, newPrices]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getBitcoinData(startDateUnix, endDateUnix);
  };

  console.log(bitcoinData);

  return (
    <Grid container spacing={2} sx={{ maxWidth: "md" }}>
      {post ? (
        <>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Test av interaktiv graf
            </Typography>
            <FormControl sx={{ minWidth: 200, mt: 5 }}>
              <InputLabel>Data</InputLabel>
              <Select value={dataType} label="Data" onChange={handleChange}>
                <MenuItem value={"1M"}>U.S 1M</MenuItem>
                <MenuItem value={"6M"}>U.S 6M</MenuItem>
                <MenuItem value={"1Y"}>U.S 1Y</MenuItem>
                <MenuItem value={"2Y"}>U.S 2Y</MenuItem>
                <MenuItem value={"5Y"}>U.S 5Y</MenuItem>
                <MenuItem value={"7Y"}>U.S 7Y</MenuItem>
                <MenuItem value={"30Y"}>U.S 30Y</MenuItem>
              </Select>
            </FormControl>
            <LineChart
              xAxis={[
                {
                  id: "dates",
                  data: dates,
                  scaleType: "time",
                },
              ]}
              series={[
                {
                  id: "US-1m",
                  label: dataTitle,
                  data: data,
                  color: theme.palette.primary.main,
                },
              ]}
              width={750}
              maxWidth="md"
              height={400}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Test av bitcoin graf
            </Typography>
            <Stack direction="row" spacing={3}>
              <DatePicker
                label="Från"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
              />
              <DatePicker
                label="Till"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
                onClick={fetchBitcoinData}
              >
                Uppdatera graf
              </Button>
            </Stack>
            <FormControl sx={{ minWidth: 200, mt: 5 }}>
              <InputLabel>Skala</InputLabel>
              <Select value={scaleType} label="Skala" onChange={(event) => setScaleType(event.target.value)}>
                <MenuItem value={"linear"}>Linjär</MenuItem>
                <MenuItem value={"log"}>Log</MenuItem>
              </Select>
            </FormControl>
            <LineChart
              xAxis={[
                {
                  data: bitcoinData[0],
                  scaleType: "time",
                },
              ]}
              yAxis={[
                {
                  scaleType: scaleType,
                }
              ]}
              series={[
                {
                  label: "Bitcoin pris (SEK)",
                  data: bitcoinData[1],
                  color: theme.palette.primary.main,
                  showMark: false,
                },
              ]}
              width={750}
              maxWidth="md"
              height={400}
              sx={{ padding: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {post.title.rendered}
            </Typography>
            <Markdown>{post.content.rendered}</Markdown>
          </Grid>
        </>
      ) : (
        <Typography>Laddar data...</Typography>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Grid>
  );
}
