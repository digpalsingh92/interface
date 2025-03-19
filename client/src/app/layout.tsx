import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Layout/Navbar";
import { Roboto } from 'next/font/google'
import Footer from "@/components/ui/Layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
 
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Vets-For-Pets",
  description: "create using next js and tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
