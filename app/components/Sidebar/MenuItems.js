"use client";

import {
  useTheme,
  useMediaQuery,
  Collapse,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import {
  HomeIcon,
  InfoCircleIcon,
  CaretDownIcon,
  GraphIcon,
  StarIcon,
  PhotoIcon,
  BlockIcon,
  AddressBookIcon,
} from "@bitcoin-design/bitcoin-icons-react/filled";
import { useState } from "react";

function MenuItems() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openIntroduction, setOpenIntroduction] = useState(false);
  const [openNumbers, setOpenNumbers] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const [openSandbox, setOpenSandbox] = useState(false);

  const handleOpen = (clickedSection) => {
    if (clickedSection === "introduction") {
      setOpenIntroduction(!openIntroduction);
    } else if (clickedSection === "numbers") {
      setOpenNumbers(!openNumbers)
    } else if (clickedSection === "resources") {
      setOpenResources(!openResources)
    } else if (clickedSection === "sandbox") {
      setOpenSandbox(!openSandbox)
    }
  };

  return (
    <>
      <MenuList>
        <MenuItem
          onClick={() => router.push("/")}
          sx={{
            color: pathname === "/" ? theme.palette.primary.main : "black",
          }}
        >
          <ListItemIcon>
            <HomeIcon
              style={{
                width: "25",
                color: pathname === "/" ? theme.palette.primary.main : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Hem</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleOpen("introduction")}
          sx={{
            color:
              pathname === "/introduction"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <ListItemIcon>
            <InfoCircleIcon
              style={{
                width: "25",
                color:
                  pathname === "/introduction"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Introduktion</ListItemText>
          <ListItemIcon>
            <CaretDownIcon
              style={{
                width: "15",
                color:
                  pathname === "/introduction"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
        </MenuItem>
        <Collapse in={openIntroduction} timeout="auto" unmountOnExit sx={{ml: 4.5}}>
          <MenuItem
            onClick={() => router.push("/introduction")}
            sx={{
              color:
                pathname === "/introduction"
                  ? theme.palette.primary.main
                  : "black",
            }}
          >
            <ListItemText>Uppfinningen Bitcoin</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/introduction")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Dagens pengar</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/introduction")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Är Bitcoin pengar?</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/introduction")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Bitcoin utöver pengar</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/introduction")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Statusen för Bitcoin</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/introduction")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Hoten mot Bitcoin</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/introduction")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Framtiden</ListItemText>
          </MenuItem>
        </Collapse>
        <MenuItem
          onClick={() => handleOpen("numbers")}
          sx={{
            color:
              pathname === "/numbers"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <ListItemIcon>
            <GraphIcon
              style={{
                width: "25",
                color:
                  pathname === "/numbers"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Siffror</ListItemText>
          <ListItemIcon>
            <CaretDownIcon
              style={{
                width: "15",
                color:
                  pathname === "/numbers"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
        </MenuItem>
        <Collapse in={openNumbers} timeout="auto" unmountOnExit sx={{ml: 4.5}}>
          <MenuItem
            onClick={() => router.push("/numbers")}
            sx={{
              color:
                pathname === "/numbers"
                  ? theme.palette.primary.main
                  : "black",
            }}
          >
            <ListItemText>Makro</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/numbers")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Finansmarknad</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/numbers")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Bitcoin</ListItemText>
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/numbers")}
            // sx={{
            //   color:
            //     pathname === "/introduction"
            //       ? theme.palette.primary.main
            //       : "black",
            // }}
          >
            <ListItemText>Klimat</ListItemText>
          </MenuItem>  
        </Collapse>
        <MenuItem
          onClick={() => handleOpen("resources")}
          sx={{
            color:
              pathname === "/resources"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <ListItemIcon>
            <StarIcon
              style={{
                width: "25",
                color:
                  pathname === "/resources"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Resurser</ListItemText>
          <ListItemIcon>
            <CaretDownIcon
              style={{
                width: "15",
                color:
                  pathname === "/resources"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
        </MenuItem>
        <Collapse in={openResources} timeout="auto" unmountOnExit sx={{ml: 4.5}}>
          <MenuItem
            onClick={() => router.push("/resources")}
            sx={{
              color:
                pathname === "/resources"
                  ? theme.palette.primary.main
                  : "black",
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
        <MenuItem
          onClick={() => router.push("/blog")}
          sx={{
            color: pathname === "/blog" ? theme.palette.primary.main : "black",
          }}
        >
          <ListItemIcon>
            <PhotoIcon
              style={{
                width: "25",
                color: pathname === "/blog" ? theme.palette.primary.main : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Blogg</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleOpen("sandbox")}
          sx={{
            color:
              pathname === "/webln"
                ? theme.palette.primary.main
                : "black",
          }}
        >
          <ListItemIcon>
            <BlockIcon
              style={{
                width: "25",
                color:
                  pathname === "/webln"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Sandlåda</ListItemText>
          <ListItemIcon>
            <CaretDownIcon
              style={{
                width: "15",
                color:
                  pathname === "/webln"
                    ? theme.palette.primary.main
                    : "black",
              }}
            />
          </ListItemIcon>
        </MenuItem>
        <Collapse in={openSandbox} timeout="auto" unmountOnExit sx={{ml: 4.5}}>
          <MenuItem
            onClick={() => router.push("/webln")}
            sx={{
              color:
                pathname === "/webln"
                  ? theme.palette.primary.main
                  : "black",
            }}
          >
            <ListItemText>Lightning webbplånbok</ListItemText>
          </MenuItem>
        </Collapse>
        <MenuItem
          onClick={() => router.push("/contact")}
          sx={{
            color: pathname === "/contact" ? theme.palette.primary.main : "black",
          }}
        >
          <ListItemIcon>
            <AddressBookIcon
              style={{
                width: "25",
                color: pathname === "/contact" ? theme.palette.primary.main : "black",
              }}
            />
          </ListItemIcon>
          <ListItemText>Kontakta oss</ListItemText>
        </MenuItem>
      </MenuList>
      
    </>
  );
}

export default MenuItems;
