import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "./logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Discount Machine",
  description: "Discover deals and discounts on gadgets, fashion, and more!",
  keywords: "discounts, deals, gadgets, fashion, electronics",
  openGraph: {
    title: "Discount Machine",
    description: "Discover deals and discounts on gadgets, fashion, and more!",
    type: "website",
    url: "https://discount-machine.vercel.app",
    images: [{
      url: logo.src,
      width: 1200,
      height: 630,
      alt: "Discount Machine Logo",
    }],
    locale: 'en_US',
    siteName: 'Discount Machine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discount Machine',
    description: 'Discover deals and discounts on gadgets, fashion, and more!',
    images: [logo.src],
    creator: '@TeleDiscountBot',
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
