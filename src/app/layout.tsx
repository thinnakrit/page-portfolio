import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Thinnakrit Knoo-Aksorn",
  description:
    "Thinnakrit Knoo-Aksorn - Software Engineer (Fullstack) | TypeScript Enthusiast Passionate about building scalable web and mobile applications. Proficient in React, Next.js, Flutter, Nodejs, Nestjs, web3 and Kotlin 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          overscrollBehavior: "none",
          background: "white",
          fontFamily: "Courier New",
        }}
      >
        {children}
      </body>
    </html>
  );
}
