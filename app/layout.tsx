import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/src/components/interface/SideNavbar";
import NavBar from "@/src/components/interface/NavBar";
import BottomNavBar from "@/src/components/interface/BottomNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobbo",
  description: "Uncover your perfect job opportunity!",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* You can add other meta tags or link tags here if needed */}
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <div className="flex">
          <SideNavbar/>
          <div className="md:w-full md:ml-[260px]">
            <NavBar/>
            <BottomNavBar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

