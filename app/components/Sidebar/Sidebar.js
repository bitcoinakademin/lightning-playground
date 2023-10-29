"use client";
import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  Button,
  lighten,
  darken,
} from "@mui/material";

import SidebarMenu from "./SidebarMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SlHome } from "react-icons/sl";
import { SlWallet } from "react-icons/sl";

// import logo from '@/img/logo.svg'

export default function Sidebar() {
  // const pathname = usePathname();
  // // Clickable menu items
  // const MenuItem = ({ icon, name, route }) => {
  //   // Highlight menu item based on currently displayed route
  //   const colorClass =
  //     pathname === route ? "text-yellow-400" : "text-white/50 hover:text-white";
  //   return (
  //     <Link
  //       href={route}
  //       className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
  //     >
  //       <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
  //       <div>{name}</div>
  //     </Link>
  //   );
  // };
  const theme = useTheme();
  return (
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 100,
        }}
      >
        <SidebarMenu />
      </Box>
  );
}
