import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, SignInButton, SignedOut} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NaviGo",
  description: "NaviGo is a blockchain-enabled cab booking web app",
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
          <SignedOut>
            <SignInButton />
          </SignedOut>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}