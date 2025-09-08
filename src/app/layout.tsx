import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome to my completed frontend challenges",
  description:
    "Here you will find all of my completed challenges and see my comments on it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-coolgray'>{children}</body>
    </html>
  );
}
