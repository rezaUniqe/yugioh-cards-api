import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yu-Gi-Oh! Cards",
  description:
    "Explore a vast collection of Yu-Gi-Oh! cards, deck lists, and resources. Join the battle with your favorite cards!",
  keywords:
    "Yu-Gi-Oh, cards, card shop, deck lists, trading cards, collectibles",
  openGraph: {
    title: "Yu-Gi-Oh! Cards",
    description:
      "Explore a vast collection of Yu-Gi-Oh! cards, deck lists, and resources. Join the battle with your favorite cards!",
    url: "https://yourwebsite.com",
    siteName: "Yu-Gi-Oh! Card",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "Yu-Gi-Oh! Card Shop Banner",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={"dark"} lang="en">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
