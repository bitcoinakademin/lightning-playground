import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeRegistry from "./utils/ThemeRegistry";
import BitcoinPrice from "./components/Price/BitcoinPrice";
import BlockHeight from "./components/Price/BlockHeight";
import FeeEstimates from "./components/Price/FeeEstimates";
import ContentLayout from "./components/ContentLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BitcoinAkademin",
  description: "Lär dig att förstå och använda Bitcoin, och följ dess utveckling.",
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
          <ContentLayout children={children} />
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
