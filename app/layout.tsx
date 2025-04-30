import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Donald Kisaka",
  description: "Donald Kisaka's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black`}>
        <div className="h-full w-full mx-auto max-w-[47.5rem] p-6">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
