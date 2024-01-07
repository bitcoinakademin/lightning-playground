"use client";

import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/sv";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

function CustomTheme({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#ffc93c",
      },
      secondary: {
        main: "#ffd76f",
      },
    },
    typography: {
      fontFamily: "Figtree",
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="sv">
        <CssBaseline />
        <Navbar />
        <Box
          sx={{
            pt: "60px",
            flex: "1" /* Takes up the remaining width */,
            overflowY: "auto",
            marginY: 5,
            marginX: 2,
            display: "flex",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          {children}
        </Box>
        <Footer />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyB8mKDqpqZWL8VNEDf1cg_5vPgCzKxo_L4",
  authDomain: "bitcoinakademin.firebaseapp.com",
  projectId: "bitcoinakademin",
  storageBucket: "bitcoinakademin.appspot.com",
  messagingSenderId: "304828441983",
  appId: "1:304828441983:web:8fb28a7af2e2b15125664a",
  measurementId: "G-VDZK0FM862",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 //const db = getFirestore(app);

export const db = getFirestore(app);

export default CustomTheme;