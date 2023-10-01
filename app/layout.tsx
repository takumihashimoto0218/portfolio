import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/ Header ";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "takumiのポートフォリオ",
  description: "next.js13でポートフォリオ作成",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
      <Header />
      <Footer />
      </body>
    </html>
  );
}