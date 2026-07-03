import "./globals.css";
import React from "react";

export const metadata = {
  title: "Weather Dashboard",
  description: "Full Stack Weather Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}