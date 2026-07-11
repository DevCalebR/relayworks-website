import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RelayWorks - AI Document Processing Kit",
    template: "%s | RelayWorks",
  },
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    title: "RelayWorks AI Document Processing Kit",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/images/product/01-homepage.png",
        width: 1440,
        height: 1100,
        alt: "RelayWorks AI Document Processing Kit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RelayWorks AI Document Processing Kit",
    description: site.description,
    images: ["/images/product/01-homepage.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
