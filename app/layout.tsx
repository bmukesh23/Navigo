import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "navigo",
  description: "navigo is a blockchain-enabled cab booking web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}