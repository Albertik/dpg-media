import { Hanken_Grotesk } from "next/font/google"
import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { ErrorBoundary } from "../components/error-boundary"

const fontSans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans antialiased`}
      >
        <Providers>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  )
}
