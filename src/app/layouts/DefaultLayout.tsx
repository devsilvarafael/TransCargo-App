"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
  Box,
  Avatar,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";

import DashboardIcon from "@/app/assets/dashboard-icon.svg";
import TruckIcon from "@/app/assets/truck-icon.svg";
import ManagementIcon from "@/app/assets/gerenciar-icon.svg";
import SettingsIcon from "@/app/assets/settings-icon.svg";
import styled from "@emotion/styled";

interface DefaultLayoutProps {
  children: ReactNode;
  leftSideBar?: boolean;
  rightSideBar?: boolean;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

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
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 200,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 329,
              boxSizing: "border-box",
              border: "none",
              boxShadow: 3,
            },
            mr: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",

                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                src="/transcargo-icon.svg"
                alt="logo"
                width={60}
                height={60}
              />

              <List>
                {leftSideBarOptions.map((item) => (
                  <ListItem key={item.id} disableGutters alignItems="center">
                    <ListItemButton alignItems="center">
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

            <Stack
              direction="row"
              spacing={2}
              mb={8}
              alignItems="center"
              justifyContent="center"
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src="https://picsum.photos/id/237/200/300"
                  alt="username"
                />
              </StyledBadge>
              <Typography>Harry Potter</Typography>
            </Stack>
          </Box>
        </Drawer>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box sx={{ ml: 16, mt: 8 }}>{children}</Box>
        {rightSideBar && (
          <Drawer
            variant="permanent"
            anchor="right"
            sx={{
              width: 429,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 429,
                boxSizing: "border-box",
                border: "none",
                boxShadow: 3,
              },
              mr: 4,
            }}
          >
            Teste
          </Drawer>
        )}
      </Box>
    </Paper>
  );
}

// Fix eslint error: required default props

DefaultLayout.defaultProps = {
  leftSideBar: false,
  rightSideBar: false,
};
