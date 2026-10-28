import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import "./globals.css"
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
   variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })

export const metadata = {
  title: "EternalMoments | Wedding Photographer & Planner",
  description:
    "Wedding photography and planning services. View our gallery, packages and client testimonials.",
}

export default function RootLayout({ children }) {
  return (
    <html className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}