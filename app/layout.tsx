import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/header/Navbar";
import BasicSpeedDial from "./components/sideTouch/BasicSpeedDial";
import { CssBaseline } from '@mui/material';
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Savita Paint | BETA-V1.0.0",
  description: "savita paint",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <BasicSpeedDial />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
