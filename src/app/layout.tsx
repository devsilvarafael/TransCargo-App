import React from "react";

export const metadata = {
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
