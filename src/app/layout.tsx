import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { buildMetadata } from "@/lib/seo";
import { getSiteSettings } from "@/lib/sanity/queries";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return buildMetadata({
    title: settings?.seo?.metaTitle || settings?.siteTitle || "Notstar Media",
    description:
      settings?.seo?.metaDescription ||
      "Notstar Media builds story-driven media brands, podcasts, and digital content ecosystems for founders, creators, and companies that want to own attention.",
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
