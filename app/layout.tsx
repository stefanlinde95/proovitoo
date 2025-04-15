import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Palgaturu analüüs ja brognoos | Stefan Linde | Äripäev",
  description: `Veebirakendus, mis võimaldab kasutajatel analüüsida
  Eesti palgaturu andmeid ja saada ülevaade palgatasemete trendidest erinevates valdkondades.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
