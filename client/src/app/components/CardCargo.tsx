import { Avatar, Box, Card, Divider, Typography } from "@mui/material";

import arrowDownIcon from "@/app/assets/arrow-down-right.svg";
import arrowUpIcon from "@/app/assets/arrow-up-right.svg";
import Image from "next/image";

export default function CardCargo() {
  return (
    <Card sx={{ flex: 1, minWidth: 279, minHeight: 246, mr: 8, padding: 1.5 }}>
      <Typography variant="body1" color="#8593A3">
        Nº Conhecimento
      </Typography>
      <Typography variant="h6" fontWeight="bold" mt={1}>
        DF-145009SC
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: "#D4F4EC" }}>
          <Image src={arrowUpIcon} width={24} height={24} alt="icon" />
        </Avatar>

        <Box ml={2}>
          <Typography variant="overline" fontWeight="bold">
            Florianopolis, SC
          </Typography>
          <Typography variant="body2">Monte Verde</Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: "#DEE1FD" }}>
          <Image src={arrowDownIcon} width={24} height={24} alt="icon" />
        </Avatar>

        <Box ml={2}>
          <Typography variant="overline" fontWeight="bold">
            Brasilia, DF
          </Typography>
          <Typography variant="body2">Monte Verde</Typography>
        </Box>
      </Box>
    </Card>
  );
}
