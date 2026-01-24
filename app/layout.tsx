import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio 2026",
  description: "Adam Emmanuel -- Portfolio - 2026",
};

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home', icon: '〶', path: '/' },
  { id: 'resume', label: 'Resume', icon: '✿', path: '/resume' },
  { id: 'about', label: 'About me', icon: '⏀', path: '/about' },
  { id: 'portfolio', label: 'Portfolio', icon: '⍄', path: '/portfolio' },
];

function Header() {

  return (
    <header className="flex items-center h-[64] fixed w-96/100 md:w-45/100 rounded-[12] top-[8] md:top-[16] left-['calc(50% - 96% / 2)'] pl-[16] pr-[16] bg-base shadow-basic shadow-base-shadow">
      <nav>
        <ul className="flex gap-3">
          {menuItems.map(({ id, icon }) => <li key={id} className="flex items-center justify-center size-[32] bg-panel rounded-full"> <div className="size-[24]"><HomeIcon /></div></li> )}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full h-48 p-3 bg-panel rounded-[12] border border-panel">
      <div>blabla</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center bg-site-background dark:text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
