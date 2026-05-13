import { PageHero } from "@/components/page-hero";
import { PortableTextRenderer } from "@/components/portable-text-renderer";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/content-cards";
import { getAboutPage, getTeamMembers } from "@/lib/sanity/queries";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About | Notstar Media",
  description: "Learn how Notstar Media approaches strategy-led podcasts, editorial storytelling, and modern media systems.",
});

export default async function AboutPage() {
  const [about, teamMembers] = await Promise.all([getAboutPage(), getTeamMembers()]);
  const team = about?.teamMembers?.length ? about.teamMembers : teamMembers;

  return (
    <>
      <PageHero eyebrow="About" title={about?.headline || "A media company for brands and leaders who want authority with texture."} body="Notstar Media blends strategic thinking, premium production, and sharp editorial judgment to build media properties that feel credible, distinctive, and commercially useful." />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="card-glass rounded-[2.5rem] p-8 sm:p-10">
            <SectionHeading eyebrow="Brand story" title="We believe the strongest growth channel is the story platform you own." />
            <div className="mt-6"><PortableTextRenderer value={about?.story} /></div>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-6">
            <div className="gradient-stroke rounded-[2.5rem] p-8"><p className="text-xs uppercase tracking-[0.24em] text-accent-deep/70">Mission</p><p className="font-display mt-4 text-3xl tracking-[-0.04em] text-accent-deep">{about?.mission || "Help thoughtful brands and founders turn expertise into trust-building media ecosystems."}</p></div>
            <div className="card-glass rounded-[2.5rem] p-8"><p className="text-xs uppercase tracking-[0.24em] text-accent-deep/70">Vision</p><p className="font-display mt-4 text-3xl tracking-[-0.04em] text-accent-deep">{about?.vision || "A future where the most influential companies operate like world-class publishers with a point of view."}</p></div>
          </Reveal>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Values" title="High standards, clear thinking, and media that compounds." body="The systems behind our editorial and production decisions." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{(about?.values || []).map((value, index) => <Reveal key={value.title} delay={index * 0.08} className="gradient-stroke rounded-[2rem] p-6"><h3 className="font-display text-3xl tracking-[-0.04em] text-accent-deep">{value.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{value.description}</p></Reveal>)}</div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Team" title="A compact, senior team built for media precision." body="Every profile below is editable from Sanity so your studio leadership can stay current without code changes." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{team.map((member, index) => <Reveal key={member._id} delay={index * 0.08}><TeamCard member={member} /></Reveal>)}</div>
        </div>
      </section>
    </>
  );
}
