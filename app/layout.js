import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CustomTheme from "./utils/CustomTheme";


export const metadata = {
  title: "BitcoinAkademin",
  description:
    "Lär dig att förstå och använda Bitcoin, och följ dess utveckling.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CustomTheme children={children} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
