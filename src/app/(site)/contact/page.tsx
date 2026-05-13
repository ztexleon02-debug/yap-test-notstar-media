import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getSiteSettings } from "@/lib/sanity/queries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact | Notstar Media",
  description: "Reach Notstar Media for brand partnerships, creator collaborations, media strategy, and production engagements.",
});

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero eyebrow="Contact" title="Bring the brief, the ambition, or the half-formed idea." body="We work with brands, creators, and leadership teams building modern media properties with clear strategic intent." />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="gradient-stroke rounded-[2.5rem] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-accent-deep/70">Direct line</p>
            <a href={`mailto:${settings?.contactEmail || "hello@notstarmedia.com"}`} className="font-display mt-5 block text-4xl tracking-[-0.04em] text-accent-deep">{settings?.contactEmail || "hello@notstarmedia.com"}</a>
            <div className="mt-8 space-y-4 text-sm leading-7 text-muted"><p>Ideal for brand storytelling engagements, show development, executive content systems, and creator partnerships.</p><p>Newsletter signup UI and CRM hooks can be connected next without redesigning this page.</p></div>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
