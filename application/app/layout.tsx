import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from '@/components/ui/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Emmanuel",
  description: "Adam Emmanuel -- Portfolio - 2026",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center bg-site-background dark:text-white`}>
        <Header />
        <div className="flex flex-col h-fit items-center p-2 gap-2 mt-20 md:mt-24 mb-12 w-96/100 md:w-45/100 bg-base shadow-basic shadow-base-shadow rounded-2xl text-lg">
        {children}
        </div>
      </body>
    </html>
  );
}
