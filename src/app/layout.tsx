/* eslint-disable @next/next/no-page-custom-font */
"use client";
import './globals.css'
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Header } from "@/components/layout";

const LayoutContent = styled(Box)(() => ({
  width: "100%",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=''
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
