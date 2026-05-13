import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteSettings } from "@/lib/sanity/queries";

export default async function SiteLayout({ children }: { children: ReactNode }) {
  const settings = await getSiteSettings();

  return (
    <div className="shell flex min-h-screen flex-col">
      <SiteHeader
        siteTitle={settings?.siteTitle || "Notstar Media"}
        links={
          settings?.navigationLinks || [
            { label: "About", href: "/about" },
            { label: "Shows", href: "/shows" },
            { label: "News", href: "/news" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]
        }
      />
      <main className="flex-1">{children}</main>
      <SiteFooter settings={settings} />
    </div>
  );
}
