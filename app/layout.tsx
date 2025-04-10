import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalHeader from "./components/header/globalHeader";
import GlobalFooter from "./components/footer/globalFooter";
import Header from "./components/header/header-page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
  default: 'SU_PAL E-commerce App', // a default is required when creating a template
  template: '%s | SU_PAL E-commerce App',
},
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Global Header */}
        <Header />
        {children}
      {/* Global Footer */}
        <GlobalFooter />
      </body>
    </html>
  );
}
