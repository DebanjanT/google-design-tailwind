import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Tailwind Design",
  description: "Material Design Using Tailwind CSS",
};

// Font files can be colocated inside of `app`
const productSans = localFont({
  src: [
    {
      path: "../public/font/ProductSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/ProductSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../public/font/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--product-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${productSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
