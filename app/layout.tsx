import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artistly - Connect with the Best Performing Artists in India",
  description:
    "Browse, book, and manage talented Indian artists effortlessly. Find singers, dancers, DJs, speakers, comedians, and more for your events.",
  keywords: "artists, performers, booking, events, India, singers, dancers, DJs, speakers, comedians, musicians",
  authors: [{ name: "Artistly Team" }],
  openGraph: {
    title: "Artistly - Connect with the Best Performing Artists",
    description: "Browse, book, and manage talented Indian artists effortlessly.",
    type: "website",
    locale: "en_IN",
  },
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
z
      </body>
    </html>
  )
}


 
