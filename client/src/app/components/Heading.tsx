/* eslint-disable react/jsx-props-no-spreading */
// jsx-props-no-spreading is disabled in this file because the props needs to have the default props by Typo

"use client";

import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface HeadingProps extends TypographyProps {
  children: ReactNode;
}

export default function Heading({ children, ...props }: HeadingProps) {
  const { variant } = props;

  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
}
