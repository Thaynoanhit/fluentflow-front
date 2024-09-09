import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import GlobalStyle from '../styles/GlobalStyles';

const poppins = Poppins({ subsets: ["latin"], weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  title: "FluentFlow",
  description: "FluentFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalStyle/>
        {children}
      </body>
    </html>
  );
}
