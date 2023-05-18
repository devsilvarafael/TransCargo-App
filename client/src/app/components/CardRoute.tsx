/* eslint-disable import/no-extraneous-dependencies */

"use client";

import { Badge, Box, Card, Typography } from "@mui/material";
import Image from "next/image";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InfoIcon from "@/app/assets/info.svg";

export default function CardRoute(): JSX.Element {
  return (
    <Card
      sx={{
        display: "flex",
        padding: 2,
        mt: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        mr={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        height="40%"
        mb={2.2}
      >
        <Badge
          badgeContent=""
          variant="dot"
          color="warning"
          sx={{ display: "block" }}
        />

        <Image
          src={InfoIcon}
          width={12}
          height={12}
          alt="info"
          color="primary.main"
        />
      </Box>

      <Box>
        <Typography>DF-4928430SC</Typography>
        <Typography>Mauricio Oliveira | Scania LP2322</Typography>

        <input
          type="range"
          style={{
            width: "100%",
            WebkitAppearance: "none",
            borderRadius: "40px",
            height: 5,
            backgroundColor: "#28CA9E",
          }}
        />
      </Box>

      <KeyboardArrowRightIcon sx={{ ml: 2 }} />
    </Card>
  );
}
