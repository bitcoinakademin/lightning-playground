"use client";

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  useTheme,
  Typography,
  colors,
} from "@mui/material";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import UndoIcon from "@mui/icons-material/Undo";
import { BitcoinIcon, HomeIcon, GlobeIcon, LightningCircleIcon, CaretLeftIcon, Confirmations6Icon } from '@bitcoin-design/bitcoin-icons-react/filled';

function SidebarMenu() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: "60px",
        bgcolor: colors.grey[50],
        width: "250px",
      }}
    >
      <Box
        sx={{
          padding: theme.spacing(1),
          height: "100vh",
        }}
      >
        <LightningCircleIcon style={{width: "100", color: '#fcba03', marginLeft: "10"}}/>
        <List>
          <ListItem>
            <Button
              startIcon={<HomeIcon style={{width: "25" }} />}
              onClick={() => router.push("/")}
              sx={{
                color: pathname === "/" ? "primary" : "black",
                textTransform: "none",
              }}
            >
              Start
            </Button>
          </ListItem>
        </List>
        <List
          subheader={
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 14,
                padding: theme.spacing(0, 2.5),
                lineHeight: 1.4,
              }}
            >
              Webbplånbok
            </Typography>
          }
        >
          <Box>
            <List component="div">
              <ListItem component="div">
                <Button
                  startIcon={<GlobeIcon style={{width: "25" }} />}
                  onClick={() => router.push("/webln")}
                  sx={{
                    color: pathname === "/webln" ? "primary" : "black",
                    textTransform: "none",
                  }}
                >
                  Kom igång
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<Confirmations6Icon style={{width: "25" }} />}
                  onClick={() => router.push("/webln/use")}
                  sx={{
                    color: pathname === "/webln/use" ? "primary" : "black",
                    textTransform: "none",
                  }}
                >
                  Användning
                </Button>
              </ListItem>
            </List>
          </Box>
        </List>
        <List
          subheader={
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 14,
                padding: theme.spacing(0, 2.5),
                lineHeight: 1.4,
              }}
            >
              BitcoinAkademin
            </Typography>
          }
        >
          <Box>
            <List>
              <ListItem>
                <Link component={NextLink} href="https://bitcoinakademin.se/">
                  <Button
                    startIcon={<CaretLeftIcon style={{width: "25" }} />}
                    sx={{
                      color: "black",
                      textTransform: "none",
                    }}
                  >
                    Tillbaka till BA
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Box>
        </List>
      </Box>
    </Box>
  );
}

export default SidebarMenu;
