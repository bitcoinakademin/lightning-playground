import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ThemeRegistry from "./utils/ThemeRegistry";
import SidebarMenu from "./components/Sidebar/SidebarMenu";

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
          <SidebarMenu />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
