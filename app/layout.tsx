import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _sans = Geist({ subsets: ["latin"] })
const _mono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amir Nikanjam",
  description: "Resume Website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
