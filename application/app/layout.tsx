import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { BusinessCard } from "@/features/myself";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen h-screen flex flex-col items-center bg-site-background dark:text-white`}>
        <main className="flex flex-col md:flex-row items-start p-3 gap-6 md:gap-4 md:mt-12 w-full max-w-[1200] h-full">
          <BusinessCard />
          <div className='relative bg-white grow-2 w-full min-h-full p-6 rounded-2xl border border-stone-200'>
            <Header />
            <div className="">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
