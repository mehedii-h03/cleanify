import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const oxygen = Oxygen({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cleanify",
  description: "Cleanify your daily life partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={oxygen.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
