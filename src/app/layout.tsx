import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Next GSAP Quote",
  description: "Next.js GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
