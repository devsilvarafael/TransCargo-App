"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";

import DashboardIcon from "@/app/assets/dashboard-icon.svg";
import TruckIcon from "@/app/assets/truck-icon.svg";
import ManagementIcon from "@/app/assets/gerenciar-icon.svg";
import SettingsIcon from "@/app/assets/settings-icon.svg";

interface DefaultLayoutProps {
  children: ReactNode;
  leftSideBar?: boolean;
  rightSideBar?: boolean;
}

const leftSideBarOptions = [
  { id: 0, label: "Dashboard", icon: DashboardIcon },
  { id: 1, label: "Rotas", icon: TruckIcon },
  { id: 2, label: "Gerênciar", icon: ManagementIcon },
  { id: 3, label: "Settings", icon: SettingsIcon },
];

export default function DefaultLayout({
  children,
  leftSideBar,
  rightSideBar,
}: DefaultLayoutProps) {
  return (
    <Paper
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {leftSideBar && (
        <Drawer variant="permanent" sx={{ flexGrow: 1, maxWidth: 350 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              minWidth: 300,
            }}
          >
            <Image
              src="/transcargo-icon.svg"
              alt="logo"
              width={60}
              height={60}
            />

            <Divider flexItem sx={{ marginTop: 2 }} />

            <List>
              {leftSideBarOptions.map((item) => (
                <ListItem key={item.id} disableGutters>
                  <ListItemButton>
                    <ListItemIcon>
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={20}
                        height={20}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}

      <Box mt={4}>{children}</Box>
    </Paper>
  );
}
