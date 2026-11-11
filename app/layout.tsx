import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const SITE_URL = "https://www.victoriassecretdiscounts.com"
const SITE_NAME = "Victoria's Secret Discounts"
const TITLE = "The Victoria's Secret Discounts They Don't Advertise"
const DESCRIPTION =
  "Discover how shoppers are unlocking hidden discount codes on Black Friday bras, cozy pajamas, and Christmas fragrance gift sets this holiday season. Complete 5+ deals in five simple steps and get your discount delivered straight to your inbox."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Victoria's Secret discount code",
    "Victoria's Secret promo code",
    "Victoria's Secret discounts",
    "Victoria's Secret deals",
    "Victoria's Secret Black Friday deals",
    "Victoria's Secret Black Friday sale",
    "Victoria's Secret Christmas gifts",
    "Victoria's Secret holiday sale",
    "Victoria's Secret pajama deals",
    "Victoria's Secret fragrance gift sets",
    "Black Friday bra deals",
    "stocking stuffers and minis",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 1024,
        alt: "Pink perfume and body mist bottles, folded satin pajamas and a blush robe beside pink-and-black striped gift boxes with pine sprigs and warm string lights on a charcoal background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

export const viewport: Viewport = {
  themeColor: "#17171B",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
