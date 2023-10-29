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

import HomeIcon from "@mui/icons-material/Home";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import UndoIcon from "@mui/icons-material/Undo";

import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";

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
        <List>
          <ListItem>
            <Button
              startIcon={<HomeIcon />}
              onClick={() => router.push("/")}
              sx={{
                color: pathname === "/" ? "primary" : "black",
                textTransform: "none",
              }}
            >
              Hem
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
                  startIcon={<InstallDesktopIcon />}
                  onClick={() => router.push("/webln")}
                  sx={{
                    color: pathname === "/webln" ? "primary" : "black",
                    textTransform: "none",
                  }}
                >
                  Kom igång
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
          <Box >
            <List>
              <ListItem>
                <Link
                  component={NextLink}
                  href="https://bitcoinakademin.se/"
                >
                  <Button
                    startIcon={<UndoIcon />}
                    sx={{
                      color: "black",
                      textTransform: "none",
                    }}
                  >
                    Tillbaka till startsidan
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
