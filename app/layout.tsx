import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Providers } from "./provider"
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nono AI",
  description: "This is the manager system about nono ai",
  icons: [
    { rel: "icon", url: "https://s2.loli.net/2024/01/05/BlPhoKMpqGO7Cg4.png" },
    {
      rel: "apple-touch-icon",
      url: "https://s2.loli.net/2024/01/05/BlPhoKMpqGO7Cg4.png",
    },
  ],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <SessionProvider>
          <Providers>
            <div className="flex flex-col justify-between w-full h-full min-h-screen">
              <Header />
              <main className="flex-auto w-full max-w-5xl px-4 py-4 mx-auto sm:px-6 md:py-6">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  )
}
