import React from "react";
import { Inter } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { Metadata } from "next";

import "@fontsource/inter";

import UIThemeProvider from "@/app/components/UIThemeProvider";

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
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <body>
        <UIThemeProvider>{children}</UIThemeProvider>
      </body>
    </html>
  );
}
