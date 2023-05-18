import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TransCargo - Frota",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
