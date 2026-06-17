import Link from "next/link";
import { SoftReveal } from "../components/soft-reveal";
import { ThemeToggle } from "../components/theme-toggle";
import { Wordmark } from "../components/wordmark";

const timelineMoments = [
  {
    year: "Chapter 01",
    title: "The stories that started it",
    description:
      "A place for origin stories, signature sayings, and the details everyone swears they will never forget.",
  },
  {
    year: "Chapter 02",
    title: "Trips worth retelling",
    description:
      "Travel memories with room for the detours, side comments, and highly specific snack opinions.",
  },
  {
    year: "Chapter 03",
    title: "Everyday evidence",
    description:
      "Small moments, dry observations, and the family lore that proves personality lives in the details.",
  },
];

export default function Home() {
  return (
    <main className="archive-home min-h-screen overflow-hidden bg-page text-ink transition-colors duration-300">
      <section className="relative isolate px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
        <div className="hero-wash absolute inset-0 -z-10" />
        <div className="archive-spotlight absolute right-0 top-0 -z-10 h-80 w-80" />

        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-line pb-5 text-xs uppercase tracking-[0.28em] text-muted">
          <Link
            aria-label="Laughs & Eye Rolls home"
            className="inline-flex rounded-sm focus:outline-none focus:ring-2 focus:ring-vintage-crimson focus:ring-offset-4 focus:ring-offset-page"
            href="/"
          >
            <Wordmark
              className="h-auto w-36 sm:w-44"
              priority
              variant="compact"
            />
          </Link>
          <span>Family Archive</span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Preserving presence</span>
            <ThemeToggle />
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-20">
          <SoftReveal>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.38em] text-vintage-crimson">
              The Archive Opens
            </p>
            <h1 className="sr-only">Laughs & Eye Rolls</h1>
            <Wordmark
              className="w-full max-w-[28rem]"
              priority
              variant="primary"
            />
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              The Archive Opens
            </h1>
            <p className="mt-5 text-xl font-light tracking-[0.08em] text-muted sm:text-2xl">
              Adventures with Ms. Murphy
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              A warm, editorial archive for preserving family stories, travel memories,
              voice, humor, and the tiny details that make everyone say, &quot;That is so
              Ms. Murphy.&quot;
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-vintage-crimson px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-ivory-linen shadow-xl shadow-vintage-crimson/15 transition duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-page focus:outline-none focus:ring-2 focus:ring-vintage-crimson focus:ring-offset-4 focus:ring-offset-page"
                href="#featured-story"
              >
                Begin the archive
              </a>
              <a
                className="rounded-full border border-line px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-muted transition duration-300 hover:-translate-y-0.5 hover:border-vintage-crimson hover:text-vintage-crimson focus:outline-none focus:ring-2 focus:ring-muted focus:ring-offset-4 focus:ring-offset-page"
                href="#travel"
              >
                Preview travels
              </a>
            </div>
          </SoftReveal>

          <SoftReveal
            className="display-case rounded-[2rem] border border-line bg-panel-strong p-4 lg:p-5"
            transition={{
              delay: 0.16,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="portrait-scene relative min-h-[28rem] overflow-hidden rounded-[1.5rem] p-8 text-ivory-linen">
              <div className="absolute inset-x-8 top-8 h-px bg-ivory-linen/35" />
              <div className="absolute bottom-10 right-8 h-32 w-24 rounded-t-full border border-ivory-linen/25 bg-ivory-linen/10" />
              <div className="absolute bottom-16 left-8 h-40 w-28 rounded-full border border-ivory-linen/20 bg-warm-smoke/10 blur-[1px]" />
              <div className="relative z-10 flex h-full min-h-[24rem] flex-col justify-between">
                <p className="max-w-xs text-sm uppercase tracking-[0.32em] text-fog-gray">
                  [FEATURED IMAGE]
                </p>
                <div>
                  <p className="font-display text-4xl leading-tight">
                    [PHOTO PLACEHOLDER]
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-fog-gray">
                    Until the family selects the image, this frame keeps the page
                    elegant without borrowing someone else&apos;s memory.
                  </p>
                </div>
              </div>
            </div>
          </SoftReveal>
        </div>
      </section>

      <section id="featured-story" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-vintage-crimson">
              Featured story
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              The archive begins with personality.
            </h2>
          </div>
          <article className="display-case rounded-[2rem] border border-line bg-panel p-8">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-muted">
              Story card placeholder
            </p>
            <h3 className="mt-5 text-2xl font-bold text-ink">
              The Look That Required No Translation
            </h3>
            <p className="mt-4 text-lg leading-8 text-muted">
              Some family stories need dates. Others need timing, tone, and the
              exact pause before Ms. Murphy decided whether the room deserved a
              laugh, an eye roll, or both.
            </p>
            <p className="mt-6 border-l-2 border-vintage-crimson pl-5 text-base italic leading-7 text-muted">
              &quot;We are saving the moment before the punchline, too.&quot;
            </p>
          </article>
        </div>
      </section>

      <section className="archive-band px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-fog-gray">
              Timeline preview
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              A life arranged by stories, not just dates.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {timelineMoments.map((moment) => (
              <article
                className="display-case rounded-[1.5rem] border border-ivory-linen/15 bg-ivory-linen/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:bg-ivory-linen/[0.09]"
                key={moment.title}
              >
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-warm-smoke">
                  {moment.year}
                </p>
                <h3 className="mt-4 text-xl font-bold">{moment.title}</h3>
                <p className="mt-3 leading-7 text-fog-gray">{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="travel" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="display-case travel-panel rounded-[2rem] border border-line p-8">
            <div className="travel-map aspect-[4/3] rounded-[1.5rem] border border-line p-6">
              <div className="flex h-full flex-col justify-between rounded-[1rem] border border-dashed border-line p-6 text-muted">
                <span className="text-xs font-bold uppercase tracking-[0.3em]">
                  [TIMELINE PREVIEW]
                </span>
                <span className="max-w-xs text-2xl font-bold leading-tight">
                  Routes, detours, and the stories collected between them.
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-vintage-crimson">
              Travel memories
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Every destination gets the commentary it deserves.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Future travel chapters can gather photos, routes, captions, family
              jokes, and the wonderfully specific details that never make it into
              ordinary albums.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="w-32 sm:w-40" variant="compact" />
          <p className="font-display text-2xl text-ink">Adventures with Ms. Murphy</p>
          <p>Built to preserve memories, humor, and the occasional excellent side-eye.</p>
        </div>
      </footer>
    </main>
  );
}
