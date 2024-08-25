import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer";
import config from "@/config";
import CommodoreLines from "@/components/comodoreLines";

const inter = Inter({ subsets: ["latin"],
  display: 'swap',
  weight: ['400'],
 });

const vt323 = VT323({ subsets: ["latin"],
  display: 'swap',
  weight: ['400'],
 });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={!vt323.className ? inter.className: vt323.className}>{children}
      <Footer />    
      </body>
     
    </html>
  );
}
