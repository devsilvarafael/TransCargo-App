import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TransCargo - Cargas",
};
export default function CargosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
