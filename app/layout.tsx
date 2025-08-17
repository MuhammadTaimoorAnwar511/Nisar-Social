import type { Metadata } from "next"
import "./globals.css"
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
subsets: ["latin"],
display: "swap",
variable: "--font-inter",
})

const playfair = Playfair_Display({
subsets: ["latin"],
display: "swap",
variable: "--font-playfair",
})

export const metadata: Metadata = {
title: "Nisar Bakers — Freshly baked goodness, every day",
description:
  "Modern, elegant, and vibrant bakery-themed website for Nisar Bakers. Fresh breads, cakes, and pastries baked daily with love.",
themeColor: [
  { media: "(prefers-color-scheme: light)", color: "#FFF8E7" },
  { media: "(prefers-color-scheme: dark)", color: "#3d2a1e" },
],
openGraph: {
  type: "website",
  siteName: "Nisar Bakers",
  title: "Nisar Bakers — Freshly baked goodness, every day",
  description:
    "Modern, elegant, and vibrant bakery-themed website for Nisar Bakers. Fresh breads, cakes, and pastries baked daily with love.",
  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Nisar Bakers — assortment of artisan baked goods",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  site: "@NisarBakers",
  creator: "@NisarBakers",
  title: "Nisar Bakers — Freshly baked goodness, every day",
  description:
    "Modern, elegant, and vibrant bakery-themed website for Nisar Bakers. Fresh breads, cakes, and pastries baked daily with love.",
  images: ["/opengraph-image.png"],
},
icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  other: [{ rel: "mask-icon", url: "/safari-pinned-tab.png" }],
},
manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
  <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
    <body className={inter.className}>{children}</body>
  </html>
)
}
