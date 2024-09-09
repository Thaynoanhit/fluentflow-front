import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "FluentFlow | FluentFlow",
  description: "FluentFlow",
};

const poppins = Poppins({ subsets: ["latin"], weight: ['500', '600', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={poppins.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
