import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Vet Doctor Appointment",
  description: "coded by Digpal Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
