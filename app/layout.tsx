import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import "./layout.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Footer from "./components/Footer";
import Flyer from "./components/Flyer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
  fallback: ["poppins"],
  subsets: ["latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "Ualgo",
  description: "Generated by create react app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-1000`}>{children}</body>
    </html>
  );
}
