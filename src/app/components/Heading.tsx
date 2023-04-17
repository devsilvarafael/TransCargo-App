"use client";

import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface HeadingProps extends TypographyProps {
  children: ReactNode;
}

export default function Heading({ children, ...props }: HeadingProps) {
  const { variant } = props;

  return <Typography variant={variant}>{children}</Typography>;
}
