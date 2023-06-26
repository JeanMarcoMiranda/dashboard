import React from "react";
import "../styles/globals.css";
import { HeaderLayoutComponent as Header } from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Nextjs dashboard project</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
