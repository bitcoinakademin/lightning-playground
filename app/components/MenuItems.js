"use client";

import {
  useTheme,
  useMediaQuery,
  Collapse,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import {
  HomeIcon,
  InfoCircleIcon,
  CaretDownIcon,
  CaretUpIcon,
  GraphIcon,
  StarIcon,
  PhotoIcon,
  BlockIcon,
  AddressBookIcon,
  BitcoinIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { useState } from "react";
import Link from "next/link";

function MenuItems() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openIntroduction, setOpenIntroduction] = useState(false);
  const [openNumbers, setOpenNumbers] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openSandbox, setOpenSandbox] = useState(false);
  const [subPath, setSubPath] = useState("");

  const handleOpen = (clickedSection) => {
    if (clickedSection === "introduction") {
      setOpenIntroduction(!openIntroduction);
    } else if (clickedSection === "numbers") {
      setOpenNumbers(!openNumbers);
    } else if (clickedSection === "resources") {
      setOpenResources(!openResources);
    } else if (clickedSection === "sandbox") {
      setOpenSandbox(!openSandbox);
    }
  };

  return (
    <List>
      <ListItem
        disablePadding
        sx={{
          color: pathname === "/" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => router.push("/")}>
          <ListItemIcon>
            <HomeIcon
              style={{
                width: "25px",
                color: pathname === "/" ? theme.palette.primary.main : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Hem</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        sx={{
          color:
            pathname === "/introduction" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => handleOpen("introduction")}>
          <ListItemIcon>
            <InfoCircleIcon
              style={{
                width: "25px",
                color:
                  pathname === "/introduction"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Introduktion</ListItemText>
          {openIntroduction ? (
            <CaretUpIcon
              style={{
                width: "15px",
                color:
                  pathname === "/introduction"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          ) : (
            <CaretDownIcon
              style={{
                width: "15px",
                color:
                  pathname === "/introduction"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse
        in={openIntroduction}
        timeout="auto"
        unmountOnExit
        sx={{ ml: 4.5 }}
      >
        <Link
          href="/introduction/#introduction"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#introduction"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#introduction");
            }}
          >
            <ListItemText>Start</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/introduction/#the-bitcoin-innovation"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#the-bitcoin-innovation"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#the-bitcoin-innovation");
            }}
          >
            <ListItemText>Uppfinningen Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/introduction/#todays-money"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#todays-money"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#todays-money");
            }}
          >
            <ListItemText>Dagens pengar</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/introduction/#is-bitcoin-money"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#is-bitcoin-money"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#is-bitcoin-money");
            }}
          >
            <ListItemText>Är Bitcoin pengar?</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/introduction/#Bitcoin-beyond-money"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#Bitcoin-beyond-money"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#Bitcoin-beyond-money");
            }}
          >
            <ListItemText>Bitcoin utöver pengar</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/introduction/#Bitcoin-status"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#Bitcoin-status"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#Bitcoin-status");
            }}
          >
            <ListItemText>Statusen för Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/introduction/#Bitcoin-threats"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#Bitcoin-threats"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#Bitcoin-threats");
            }}
          >
            <ListItemText>Hoten mot Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/introduction/#the-future"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#the-future" ? theme.palette.primary.main : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#the-future");
            }}
          >
            <ListItemText>Framtiden</ListItemText>
          </MenuItem>
        </Link>
      </Collapse>
      <ListItem
        disablePadding
        sx={{
          color: pathname === "/numbers" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => handleOpen("numbers")}>
          <ListItemIcon>
            <GraphIcon
              style={{
                width: "25px",
                color:
                  pathname === "/numbers"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Siffror</ListItemText>
          {openNumbers ? (
            <CaretUpIcon
              style={{
                width: "15px",
                color:
                  pathname === "/numbers"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          ) : (
            <CaretDownIcon
              style={{
                width: "15px",
                color:
                  pathname === "/numbers"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openNumbers} timeout="auto" unmountOnExit sx={{ ml: 4.5 }}>
        <Link
          href="/numbers/#macro"
          scroll={true}
          style={{
            textDecoration: "none",
            color: subPath === "#macro" ? theme.palette.primary.main : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#macro");
            }}
          >
            <ListItemText>Makro</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/numbers/#finance"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#finance" ? theme.palette.primary.main : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#finance");
            }}
          >
            <ListItemText>Finansmarknad</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/numbers/#bitcoin"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#bitcoin" ? theme.palette.primary.main : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#bitcoin");
            }}
          >
            <ListItemText>Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href="/numbers/#climate"
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              subPath === "#climate" ? theme.palette.primary.main : "black",
          }}
        >
          <MenuItem
            onClick={() => {
              setSubPath("#climate");
            }}
          >
            <ListItemText>Klimat</ListItemText>
          </MenuItem>
        </Link>
      </Collapse>
      <ListItem
        disablePadding
        onClick={() => handleOpen("resources")}
        sx={{
          color:
            pathname === "/resources" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => handleOpen("resources")}>
          <ListItemIcon>
            <StarIcon
              style={{
                width: "25px",
                color:
                  pathname === "/resources"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Resurser</ListItemText>
          {openResources ? (
            <CaretUpIcon
              style={{
                width: "15px",
                color:
                  pathname === "/resources"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          ) : (
            <CaretDownIcon
              style={{
                width: "15px",
                color:
                  pathname === "/resources"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse
        in={openResources}
        timeout="auto"
        unmountOnExit
        sx={{ ml: 4.5 }}
      >
        <MenuItem
          onClick={() => router.push("/resources")}
          sx={{
            color:
              pathname === "/resources" ? theme.palette.primary.main : "black",
          }}
        >
          <ListItemText>Kom igång med Bitcoin</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => router.push("/resources")}
          // sx={{
          //   color:
          //     pathname === "/introduction"
          //       ? theme.palette.primary.main
          //       : "black",
          // }}
        >
          <ListItemText>Eurodollar</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => router.push("/resources")}
          // sx={{
          //   color:
          //     pathname === "/introduction"
          //       ? theme.palette.primary.main
          //       : "black",
          // }}
        >
          <ListItemText>Pengar</ListItemText>
        </MenuItem>
      </Collapse>
      <ListItem
      disablePadding
        onClick={() => router.push("/blog")}
        sx={{
          color: pathname === "/blog" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => router.push("/blog")}>
        <ListItemIcon>
          <PhotoIcon
            style={{
              width: "25px",
              color:
                pathname === "/blog" ? theme.palette.primary.main : "black",
            }}
          />
        </ListItemIcon>
        <ListItemText>Blogg</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem
      disablePadding
        onClick={() => router.push("/graph")}
        sx={{
          color: pathname === "/graph" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => router.push("/graph")}>
        <ListItemIcon>
          <BitcoinIcon
            style={{
              width: "25px",
              color:
                pathname === "/graph" ? theme.palette.primary.main : "black",
            }}
          />
        </ListItemIcon>
        <ListItemText>Bitcoingraf</ListItemText>
        </ListItemButton>
      </ListItem>
      {/* <ListItem
        disablePadding
        sx={{
          color: pathname === "/webln" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => handleOpen("sandbox")}>
        <ListItemIcon>
          <BlockIcon
            style={{
              width: "25",
              color:
                pathname === "/webln" ? theme.palette.primary.main : "black",
            }}
          />
        </ListItemIcon>
        <ListItemText>Sandlåda</ListItemText>
        {openSandbox ? (
          <CaretUpIcon
            style={{
              width: "15",
              color:
                pathname === "/webln" ? theme.palette.primary.main : "black",
            }}
          />
        ) : (
          <CaretDownIcon
          style={{
            width: "15",
            color:
              pathname === "/webln" ? theme.palette.primary.main : "black",
          }}
        />
        )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openSandbox} timeout="auto" unmountOnExit sx={{ ml: 4.5 }}>
        <MenuItem
          onClick={() => router.push("/webln")}
          sx={{
            color: pathname === "/webln" ? theme.palette.primary.main : "black",
          }}
        >
          <ListItemText>Lightning webbplånbok</ListItemText>
        </MenuItem>
      </Collapse> */}
      <ListItem
        disablePadding
        sx={{
          color: pathname === "/contact" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => router.push("/contact")}>
        <ListItemIcon>
          <AddressBookIcon
            style={{
              width: "25px",
              color:
                pathname === "/contact" ? theme.palette.primary.main : "black",
            }}
          />
        </ListItemIcon>
        <ListItemText>Kontakta oss</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default MenuItems;
