import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/config/site";
import resumeData from "@/resume/resume.json";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Caleb Rogers | Software Engineer — AI, Automation & Full-Stack Development",
    template: "%s | Caleb Rogers",
  },
  description: site.description,
  keywords: site.keywords,
  alternates: { canonical: "/" },
  authors: [{ name: "Caleb Rogers", url: site.url }],
  creator: "Caleb Rogers",
  openGraph: {
    title: "Caleb Rogers | Software Engineer — AI, Automation & Full-Stack Development",
    description: site.description,
    url: site.url,
    siteName: "Caleb Rogers — Software Engineer",
    images: [
      {
        url: "/images/product/01-homepage.png",
        width: 1440,
        height: 1100,
        alt: "RelayWorks AI document processing interface built by Caleb Rogers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb Rogers | Software Engineer — AI, Automation & Full-Stack Development",
    description: site.description,
    images: ["/images/product/01-homepage.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Caleb Rogers",
    url: site.url,
    jobTitle: "Software Engineer",
    sameAs: [resumeData.contact.github, resumeData.contact.linkedin],
    knowsAbout: [
      "AI applications",
      "workflow automation",
      "API integrations",
      "document processing",
      "native macOS development",
      "full-stack web development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xlfczsmcpq");`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
