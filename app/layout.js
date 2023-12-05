import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeRegistry from "./utils/ThemeRegistry";
import { Box } from "@mui/material";
import BitcoinPrice from "./components/Price/BitcoinPrice";
import BlockHeight from "./components/Price/BlockHeight";
import FeeEstimates from "./components/Price/FeeEstimates";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BitcoinAkademin",
  description: "Lär dig förstå och använda Bitcoin och följ dess utveckling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}> 
            <Navbar>
              <BitcoinPrice />
              <BlockHeight />
              <FeeEstimates />
              </Navbar>
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
        </ThemeRegistry>
      </body>
    </html>
  );
}
