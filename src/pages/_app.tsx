import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local"
import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={geistSans.variable}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
