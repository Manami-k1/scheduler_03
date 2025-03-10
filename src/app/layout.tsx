import type { Metadata } from "next";
import "reset-css";
import "./globals.css";

export const metadata: Metadata = {
  title: "scheduler_03",
  description: "scheduler_03 create",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
