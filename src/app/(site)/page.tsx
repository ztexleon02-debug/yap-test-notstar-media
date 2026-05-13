import Link from "next/link";
import { ArrowRight, Play, Sparkles, TrendingUp } from "lucide-react";
import { PortableTextRenderer } from "@/components/portable-text-renderer";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { MediaFrame } from "@/components/media-frame";
import { PostCard, ServiceCard, ShowCard, TestimonialCard } from "@/components/content-cards";
import { getFaqs, getHomepage, getPosts, getServices, getShows } from "@/lib/sanity/queries";

export default async function HomePage() {
  const [homepage, shows, posts, services, faqs] = await Promise.all([
    getHomepage(),
    getShows(),
    getPosts(),
    getServices(),
    getFaqs(),
  ]);

  const featuredShows = homepage?.featuredShows?.length ? homepage.featuredShows : shows.slice(0, 3);
  const featuredPosts = homepage?.featuredPosts?.length ? homepage.featuredPosts : posts.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="gradient-stroke rounded-[2.5rem] px-6 py-10 sm:px-10 sm:py-14 lg:pr-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-accent-deep">
              <Sparkles size={14} /> Strategy-led media company
            </div>
            <h1 className="font-display mt-8 max-w-4xl text-5xl tracking-[-0.06em] text-balance text-accent-deep sm:text-6xl lg:text-7xl">
              {homepage?.heroTitle || "Notstar Media builds shows, story systems, and attention you actually own."}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {homepage?.heroSubtitle ||
                "We shape premium podcasts, editorial content ecosystems, and creator-led media properties for brands and leaders who want influence with staying power."}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={homepage?.heroCtaLink || "/contact"} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-deep px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5">
                {homepage?.heroCtaText || "Start a media build"} <ArrowRight size={16} />
              </Link>
              <Link href={homepage?.heroSecondaryCtaLink || "/shows"} className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white/70 px-6 py-3 text-sm font-semibold text-accent-deep hover:bg-white">
                {homepage?.heroSecondaryCtaText || "View flagship shows"} <Play size={16} />
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {(homepage?.stats || [
                { value: "40+", label: "launches guided", supportingText: "Across audio, video, and editorial franchises." },
                { value: "12M", label: "monthly impressions shaped", supportingText: "Through premium content systems and distribution." },
                { value: "92%", label: "retainer retention", supportingText: "Because the media strategy compounds beyond campaign windows." },
              ]).map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] bg-white/58 p-4">
                  <p className="font-display text-4xl tracking-[-0.05em] text-accent-deep">{stat.value}</p>
                  <p className="mt-2 text-sm font-semibold text-accent-deep">{stat.label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.supportingText}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="grid gap-6">
            <MediaFrame image={homepage?.heroMedia} title="Original media systems" priority className="min-h-[24rem] rounded-[2.5rem]" />
            <div className="card-glass grid gap-5 rounded-[2.5rem] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft/70 text-accent-deep">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent-deep/60">Capabilities</p>
                  <p className="mt-1 text-lg font-semibold text-accent-deep">From concept to durable distribution</p>
                </div>
              </div>
              <div className="grid gap-3 text-sm text-muted">
                <p>Podcast and show development with strong positioning and audience logic.</p>
                <p>Editorial storytelling systems for founders, companies, and creator-led brands.</p>
                <p>Short-form ecosystems that compound into reach, trust, and qualified attention.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Flagship work" title="Media properties designed to feel editorial, not disposable." body="Original shows, brand-backed formats, and recurring series built to carry a point of view across platforms." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredShows.map((show, index) => (
              <Reveal key={show._id} delay={index * 0.08}><ShowCard show={show} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal><SectionHeading eyebrow="About Notstar" title="A premium media partner for founders, brands, and modern operators." body="Notstar Media brings strategy, editorial judgment, and cinematic production together so every show, series, and content stream feels intentional from the first frame to the last click." /></Reveal>
          <Reveal delay={0.1} className="card-glass rounded-[2.5rem] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div><p className="text-xs uppercase tracking-[0.22em] text-accent-deep/70">What we build</p><p className="mt-3 text-sm leading-7 text-muted">Flagship podcasts, executive media brands, short-form content engines, editorial franchises, and content systems that outlast one-off campaigns.</p></div>
              <div><p className="text-xs uppercase tracking-[0.22em] text-accent-deep/70">How we work</p><p className="mt-3 text-sm leading-7 text-muted">Positioning first, then format, then distribution. Every output is designed to earn trust, travel cleanly across channels, and build category memory.</p></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" title="Capability stacks for brands that want more than content volume." body="Strategy, production, editorial systems, and distribution support shaped around high-trust growth." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">{featuredServices.map((service, index) => <Reveal key={service._id} delay={index * 0.08}><ServiceCard service={service} /></Reveal>)}</div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Insights" title="Editorial thinking for the operators shaping modern attention." body="A newsroom-style stream of strategy notes, brand storytelling insights, and content infrastructure lessons." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">{featuredPosts.map((post, index) => <Reveal key={post._id} delay={index * 0.08}><PostCard post={post} /></Reveal>)}</div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Trusted by modern builders" title="Built for teams who care how the story feels in the market." body="Clear point of view, premium execution, and systems that keep working after launch week." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">{(homepage?.testimonials || []).map((testimonial, index) => <Reveal key={testimonial._id} delay={index * 0.08}><TestimonialCard testimonial={testimonial} /></Reveal>)}</div>
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="card-glass rounded-[2.5rem] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-accent-deep/70">Start here</p>
            <h2 className="font-display mt-4 text-4xl tracking-[-0.05em] text-accent-deep sm:text-5xl">{homepage?.ctaTitle || "Turn your expertise into a media property with gravity."}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{homepage?.ctaBody || "Whether you're launching a show, scaling an executive media brand, or building a repeatable content engine, we design the strategy and system to make it feel premium from day one."}</p>
            <Link href={homepage?.ctaButtonLink || "/contact"} className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-deep px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5">{homepage?.ctaButtonText || "Book a conversation"} <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={0.12} className="gradient-stroke rounded-[2.5rem] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-accent-deep/70">Quick answers</p>
            <div className="mt-6 space-y-5">{faqs.slice(0, 3).map((faq) => <div key={faq._id} className="border-b border-line pb-5 last:border-none last:pb-0"><h3 className="text-lg font-semibold text-accent-deep">{faq.question}</h3><div className="mt-3 text-sm leading-7 text-muted"><PortableTextRenderer value={faq.answer} /></div></div>)}</div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
