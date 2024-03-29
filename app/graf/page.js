"use client";

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
  Button,
  useMediaQuery,
  Box,
  Stack,
} from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ma } from "moving-averages";
import regression from "regression";

function InteractiveGraph() {
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(dayjs().add(-1, "day"));
  const [endDate, setEndDate] = useState(dayjs());
  const [currency, setCurrency] = useState("usd");
  const [coin, setCoin] = useState("bitcoin");
  const [chartCurrency, setChartCurrency] = useState("usd");
  const [chartCoin, setChartCoin] = useState("bitcoin");
  const [bitcoinData, setBitcoinData] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [bitcoinMA, setBitcoinMA] = useState([0]);
  const [bitcoinRegression, setBitcoinRegression] = useState([0]);
  const [scaleType, setScaleType] = useState("linear");
  const [trend, setTrend] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  const fetchBitcoinData = () => {
    const startDateUnix = dayjs(startDate).unix();
    const endDateUnix = dayjs(endDate).unix();

    const getBitcoinData = () => {
      setLoading(true);
      Axios({
        method: "GET",
        url: `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${currency}&from=${startDateUnix}&to=${endDateUnix}`,
      })
        .then((res) => {
          const newDates = res.data.prices.map(function (x) {
            return new Date(x[0]);
          });
          const newPrices = res.data.prices.map(function (x) {
            return x[1];
          });
          setBitcoinData([newDates, newPrices]);
          setBitcoinMA(ma(newPrices, trend));

          //TODO fix regression
          setBitcoinRegression(regression.linear(res.data.prices));
          setChartCoin(coin);
          setChartCurrency(currency);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getBitcoinData(startDateUnix, endDateUnix);
  };

  const calcBitcoinMA = (trend) => {
    fetchBitcoinData();
    setTrend(trend);
    setBitcoinMA(ma(bitcoinData[1], trend));
  };

  return (
    <Box sx={{ maxWidth: isMobile ? "90vw" : "md" }}>
      <Typography variant="h3">Graf</Typography>
      <Typography sx={{ mb: 1 }}>
        Här kan du se prisutvecklingen av Bitcoin och andra cryptovalutor över
        en valfri period.
      </Typography>

      <Stack direction={"row"} spacing={2} sx={{mt: 4}}>
        <FormControl sx={{ width: isMobile ? 100 : 200 }}>
          <InputLabel>Cryptovaluta</InputLabel>
          <Select
            value={coin}
            label="Cryptovaluta"
            onChange={(event) => setCoin(event.target.value)}
            size="small"
          >
            <MenuItem value={"bitcoin"}>Bitcoin</MenuItem>
            <MenuItem value={"ethereum"}>Ethereum</MenuItem>
            <MenuItem value={"solana"}>Solana</MenuItem>
            <MenuItem value={"cardano"}>Cardano</MenuItem>
            <MenuItem value={"dogecoin"}>Dogecoin</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <InputLabel>Valuta</InputLabel>
          <Select
            value={currency}
            label="Valuta"
            onChange={(event) => setCurrency(event.target.value)}
            size="small"
          >
            <MenuItem value={"sek"}>Svenska Kronor</MenuItem>
            <MenuItem value={"usd"}>Amerikanska Dollar</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      {/* <Grid item xs={4} md={3}>
          <FormControl sx={{ width: isMobile ? 100 : 200 }}>
            <InputLabel>Skala</InputLabel>
            <Select
              value={scaleType}
              label="Skala"
              disabled={trend == 0 ? false : true}
              onChange={(event) => setScaleType(event.target.value)}
              size="small"
            >
              <MenuItem value={"linear"}>Linjär</MenuItem>
              <MenuItem value={"log"}>Log</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs={8} md={9}>
          <FormControl sx={{width: 200}}>
            <InputLabel>Trendlinje</InputLabel>
            <Select
              value={trend}
              label="Trendlinje"
              onChange={(event) => calcBitcoinMA(event.target.value)}
              size="small"
            >
              <MenuItem value={0}>Ingen</MenuItem>
              <MenuItem value={50}>50WMA</MenuItem>
              <MenuItem value={100}>100WMA</MenuItem>
              <MenuItem value={200}>200WMA</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
      <Stack direction={"row"} spacing={2} sx={{marginY: 4}}>
        <DatePicker
          label="Från"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          slotProps={{ textField: { size: "small" } }}
          sx={{ width: isMobile ? 150 : 200 }}
        />

        <DatePicker
          label="Till"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          slotProps={{ textField: { size: "small" } }}
          sx={{ width: isMobile ? 150 : 200 }}
        />
      </Stack>
      <Button
        variant="contained"
        sx={{
          color: "white",
          fontWeight: "bold",
          textTransform: "none",
        }}
        onClick={fetchBitcoinData}
      >
        Uppdatera
      </Button>

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
          },
        ]}
        series={
          trend !== 0
            ? [
                {
                  label: `${chartCoin}-pris (${chartCurrency})`,
                  data: bitcoinData[1],
                  color: theme.palette.primary.main,
                  showMark: false,
                },

                {
                  label: `${trend} veckors genomsnitt`,
                  data: bitcoinMA,
                  color: "grey",
                  showMark: false,
                },
              ]
            : [
                {
                  label: `${chartCoin}-pris (${chartCurrency})`,
                  data: bitcoinData[1],
                  color: theme.palette.primary.main,
                  showMark: false,
                },
              ]
        }
        width={isMobile ? 375 : 900}
        height={isMobile ? 300 : 400}
        sx={{ padding: 1 }}
      />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    </Box>
  );
}

export default InteractiveGraph;
