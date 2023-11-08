import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeRegistry from "./utils/ThemeRegistry";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lightning Playground",
  description: "Testa olika Lightning Network funktioner, snabbt och enkelt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: "60px",
            }}
          >
            <SidebarMenu />
            <Box
              sx={{
                flex: "1" /* Takes up the remaining width */,
                overflowY: "auto",
                marginY: 7,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {children}
            </Box>
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
