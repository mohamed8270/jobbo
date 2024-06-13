import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/src/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobbo",
  description: "Uncover your perfect job opportunity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNavbar/>
        {children}
      </body>
    </html>
  );
}
