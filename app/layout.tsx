import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "@/src/components/interface/SideNavbar";
import NavBar from "@/src/components/interface/NavBar";
import BottomNavBar from "@/src/components/interface/BottomNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobbo",
  description: "Uncover your perfect job opportunity!",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["Jobbo", "jobbo", "Jobs", "Company", "IT", "Freshers", "PWA", "Work"],
  authors: [
    {
      name: "Mohamed Ibrahim",
      url: "https://ibu-ux.web.app/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", sizes:"128x128", url: "/assets/images/jobbo-logo.jpg" },
    { rel: "icon",sizes:"128x128", url: "/assets/images/jobbo-logo.jpg" },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#fff" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="viewport-fit=cover"></meta>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} min-h-screen overflow-x-hidden`}>
        <div className="flex">
          <SideNavbar/>
          <div className="md:w-full md:ml-[260px]">
            <NavBar/>
            <main className="flex-grow w-full">{children}</main>
            <BottomNavBar/>
          </div>
        </div>
      </body>
    </html>
  );
}

