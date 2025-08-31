import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";


const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Flooq",
  description: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={almarai.className}>
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}