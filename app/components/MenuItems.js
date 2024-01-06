"use client";

import {
  useTheme,
  useMediaQuery,
  Collapse,
  MenuItem,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  HomeIcon,
  InfoCircleIcon,
  CaretDownIcon,
  CaretUpIcon,
  GraphIcon,
  StarIcon,
  PhotoIcon,
  AddressBookIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import { useState } from "react";
import Link from "next/link";

function MenuItems() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const searchParams = useSearchParams();
  const search = searchParams.get("sektion");

  const [openIntroduction, setOpenIntroduction] = useState(false);
  const [openSiffror, setOpenSiffror] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openSandbox, setOpenSandbox] = useState(false);
  const [subPath, setSubPath] = useState("");

  const handleOpen = (clickedSection) => {
    if (clickedSection === "introduction") {
      setOpenIntroduction(!openIntroduction);
    } else if (clickedSection === "siffror") {
      setOpenSiffror(!openSiffror);
    } else if (clickedSection === "resources") {
      setOpenResources(!openResources);
      router.push("/resurser")
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
            pathname === "/introduktion" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => handleOpen("introduction")}>
          <ListItemIcon>
            <InfoCircleIcon
              style={{
                width: "25px",
                color:
                  pathname === "/introduktion"
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
                  pathname === "/introduktion"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          ) : (
            <CaretDownIcon
              style={{
                width: "15px",
                color:
                  pathname === "/introduktion"
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
          href={{
            pathname: "/introduktion",
            query: { sektion: "start" },
          }}
          style={{
            textDecoration: "none",
            color: search === "start" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Start</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/introduktion",
            query: { sektion: "uppfinningen-bitcoin" },
          }}
          style={{
            textDecoration: "none",
            color:
              search === "uppfinningen-bitcoin"
                ? theme.palette.primary.main
                : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Uppfinningen Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/introduktion",
            query: { sektion: "dagens-pengar-och-vagen-hit" },
          }}
          style={{
            textDecoration: "none",
            color:
              search === "dagens-pengar-och-vagen-hit" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Dagens pengar</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/introduktion",
            query: { sektion: "ar-bitcoin-pengar" },
          }}
          style={{
            textDecoration: "none",
            color:
              search === "ar-bitcoin-pengar"
                ? theme.palette.primary.main
                : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Är Bitcoin pengar?</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/introduktion",
            query: { sektion: "bitcoin-utover-pengar" },
          }}
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              search === "bitcoin-utover-pengar"
                ? theme.palette.primary.main
                : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Bitcoin utöver pengar</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/introduktion",
            query: { sektion: "statusen-for-bitcoin" },
          }}
          scroll={true}
          style={{
            textDecoration: "none",
            color:
              search === "statusen-for-bitcoin" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Statusen för Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/introduktion",
            query: { sektion: "hoten-mot-bitcoin" },
          }}
          style={{
            textDecoration: "none",
            color:
              search === "hoten-mot-bitcoin"
                ? theme.palette.primary.main
                : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Hoten mot Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/introduktion",
            query: { sektion: "framtiden" },
          }}
          style={{
            textDecoration: "none",
            color:
              search === "framtiden" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Framtiden</ListItemText>
          </MenuItem>
        </Link>
      </Collapse>
      <ListItem
        disablePadding
        sx={{
          color: pathname === "/siffror" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => handleOpen("siffror")}>
          <ListItemIcon>
            <GraphIcon
              style={{
                width: "25px",
                color:
                  pathname === "/siffror"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Siffror</ListItemText>
          {openSiffror ? (
            <CaretUpIcon
              style={{
                width: "15px",
                color:
                  pathname === "/siffror"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          ) : (
            <CaretDownIcon
              style={{
                width: "15px",
                color:
                  pathname === "/siffror"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={openSiffror} timeout="auto" unmountOnExit sx={{ ml: 4.5 }}>
        <Link
          href={{
            pathname: "/siffror",
            query: { sektion: "introduktion" },
          }}
          style={{
            textDecoration: "none",
            color:
              search === "introduktion" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Introduktion</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/siffror",
            query: { sektion: "makro" },
          }}
          style={{
            textDecoration: "none",
            color: search === "makro" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Makro</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/siffror",
            query: { sektion: "finansmarknad" },
          }}
          style={{
            textDecoration: "none",
            color:
              search === "finansmarknad" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Finansmarknad</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/siffror",
            query: { sektion: "bitcoin" },
          }}
          style={{
            textDecoration: "none",
            color: search === "bitcoin" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Bitcoin</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/siffror",
            query: { sektion: "klimat" },
          }}
          style={{
            textDecoration: "none",
            color: search === "klimat" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Klimat</ListItemText>
          </MenuItem>
        </Link>
        <Link
          href={{
            pathname: "/siffror",
            query: { sektion: "kallor-och-bilagor" },
          }}
          style={{
            textDecoration: "none",
            color: search === "kallor-och-bilagor" ? theme.palette.primary.main : "gray",
          }}
        >
          <MenuItem>
            <ListItemText>Källor & bilagor</ListItemText>
          </MenuItem>
        </Link>
      </Collapse>
      <ListItem
        disablePadding
        onClick={() => router.push("/blogg")}
        sx={{
          color: pathname === "/blogg" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => router.push("/blogg")}>
          <ListItemIcon>
            <PhotoIcon
              style={{
                width: "25px",
                color:
                  pathname === "/blogg" ? theme.palette.primary.main : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Blogg</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        onClick={() => router.push("/graf")}
        sx={{
          color: pathname === "/graf" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => router.push("/graf")}>
          <ListItemIcon>
            <TimelineOutlinedIcon               style={{
                width: "25px",
                color:
                  pathname === "/graf" ? theme.palette.primary.main : "black",
              }}/>
          </ListItemIcon>
          <ListItemText>Graf</ListItemText>
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
        onClick={() => handleOpen("resources")}
        sx={{
          color:
            pathname === "/resurser" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => handleOpen("resources")}>
          <ListItemIcon>
            <StarIcon
              style={{
                width: "25px",
                color:
                  pathname === "/resurser"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Resurser</ListItemText>
          {/* {openResources ? (
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
          )} */}
        </ListItemButton>
      </ListItem>
      {/* <Collapse
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
          //     pathname === "/introduktion"
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
          //     pathname === "/introduktion"
          //       ? theme.palette.primary.main
          //       : "black",
          // }}
        >
          <ListItemText>Pengar</ListItemText>
        </MenuItem>
      </Collapse> */}
      <ListItem
        disablePadding
        sx={{
          color: pathname === "/kontakt" ? theme.palette.primary.main : "black",
        }}
      >
        <ListItemButton onClick={() => router.push("/kontakt")}>
          <ListItemIcon>
            <AddressBookIcon
              style={{
                width: "25px",
                color:
                  pathname === "/kontakt"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Kontakt</ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default MenuItems;
