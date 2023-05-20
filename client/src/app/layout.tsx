import React from "react";
import { Inter } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { Metadata } from "next";

import "@fontsource/inter";

import "@/app/styles/globals.css";

import UIThemeProvider from "@/app/components/UIThemeProvider";
import QueryProvider from "@/app/components/QueryProvider";

const inter: NextFont = Inter({
  weight: ["200", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TransCargo App",
  description: "É rapido? É TransCargo!",
  icons: {
    icon: [{ url: "/transcargo-icon.svg", sizes: "16x16" }],
    shortcut: "/transcargo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
      <QueryProvider>
        <UIThemeProvider>{children}</UIThemeProvider>
      </QueryProvider>
      </body>
    </html>
  );
}
