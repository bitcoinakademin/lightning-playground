"use client";

import {
  Box,
  List,
  Button,
  ListItem,
  useTheme,
  Typography,
  colors,
} from "@mui/material";
import Link from "@mui/material/Link";
import * as NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  HomeIcon,
  GlobeIcon,
  LightningCircleIcon,
  DevicesIcon,
  Confirmations6Icon,
  NodeIcon
} from "@bitcoin-design/bitcoin-icons-react/filled";

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
        width: "225px",
      }}
    >
      <Box
        sx={{
          padding: theme.spacing(1),
          height: "100vh",
        }}
      >
        <Link
          component={NextLink}
          href="/"
          variant="inherit"
          underline="none"
          color="white"
        >
          <LightningCircleIcon
            style={{ width: "100", color: "#fcba03", marginLeft: "10" }}
          />
        </Link>
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
                  startIcon={<GlobeIcon style={{ width: "25" }} />}
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
                  startIcon={<Confirmations6Icon style={{ width: "25" }} />}
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
              Mobilplånbok
            </Typography>
          }
        >
          <Box>
            <List component="div">
              <ListItem component="div">
                <Button
                  startIcon={<DevicesIcon style={{ width: "25" }} />}
                  onClick={() => router.push("/mobile")}
                  sx={{
                    color: pathname === "/mobile" ? "primary" : "black",
                    textTransform: "none",
                  }}
                >
                  Kom igång
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<Confirmations6Icon style={{ width: "25" }} />}
                  onClick={() => router.push("/mobile/use")}
                  sx={{
                    color: pathname === "/mobile/use" ? "primary" : "black",
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
              Lightning-nod
            </Typography>
          }
        >
          <Box>
            <List component="div">
              <ListItem component="div">
                <Button
                  startIcon={<NodeIcon style={{ width: "25" }} />}
                  onClick={() => router.push("/node")}
                  sx={{
                    color: pathname === "/node" ? "primary" : "black",
                    textTransform: "none",
                  }}
                >
                  Kom igång
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<Confirmations6Icon style={{ width: "25" }} />}
                  onClick={() => router.push("/node/use")}
                  sx={{
                    color: pathname === "/node/use" ? "primary" : "black",
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
                    startIcon={<HomeIcon style={{ width: "25" }} />}
                    sx={{
                      color: "black",
                      textTransform: "none",
                    }}
                  >
                    Hem till BA
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
