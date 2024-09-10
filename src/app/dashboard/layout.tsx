'use client';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });
import NavigationBar from "@/components/general/NavigationBar/NavigationBar";
import { Header } from "@/components/general/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className} style={{ backgroundColor: '#F8F8FA' }}>
        <Header />
        {children}
        <NavigationBar />
      </body>
    </html>
  );
}
