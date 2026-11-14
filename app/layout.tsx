import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tripathy Loop",
  description: "Control plane for six parallel AI research experiments",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
