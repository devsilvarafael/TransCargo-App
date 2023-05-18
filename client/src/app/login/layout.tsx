import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TransCargo - Login",
};
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
