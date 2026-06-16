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
    <main className="min-h-screen overflow-hidden bg-ivory-linen text-espresso">
      <section className="relative isolate px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(159,45,45,0.16),transparent_32rem),linear-gradient(135deg,rgba(246,241,234,0.96),rgba(216,214,210,0.7))]" />
        <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-warm-smoke/25 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-espresso/15 pb-5 text-xs uppercase tracking-[0.28em] text-espresso/75">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-cocoa-brown/15 pb-5 text-xs uppercase tracking-[0.28em] text-cocoa-brown/75">
          <a
            aria-label="Laughs & Eye Rolls home"
            className="inline-flex rounded-sm focus:outline-none focus:ring-2 focus:ring-vintage-crimson focus:ring-offset-4 focus:ring-offset-ivory-linen"
            href="/"
          >
            <Wordmark
              className="h-auto w-36 sm:w-44"
              priority
              variant="compact"
            />
          </a>
          <span>Family Archive</span>
          <span className="hidden sm:inline">Preserving presence</span>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-20">
          <div className="animate-soft-reveal">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.38em] text-vintage-crimson">
              Cinematic memory keeping
            </p>
            <h1 className="sr-only">Laughs & Eye Rolls</h1>
            <Wordmark
              className="h-auto w-full max-w-[34rem]"
              priority
              variant="primary"
            />
            <p className="mt-5 text-xl font-light tracking-[0.08em] text-espresso sm:text-2xl">
              Adventures with Ms. Murphy
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-espresso/85">
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-espresso sm:text-6xl lg:text-7xl">
              Laughs &<br /> Eye Rolls
            </h1>
            <p className="mt-5 text-xl font-light tracking-[0.08em] text-cocoa-brown sm:text-2xl">
              Adventures with Ms. Murphy
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-cocoa-brown/85">
              A warm, editorial archive for preserving family stories, travel memories,
              voice, humor, and the tiny details that make everyone say, “That is so
              Ms. Murphy.”
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-vintage-crimson px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-ivory-linen shadow-xl shadow-vintage-crimson/15 transition duration-300 hover:-translate-y-0.5 hover:bg-espresso focus:outline-none focus:ring-2 focus:ring-vintage-crimson focus:ring-offset-4 focus:ring-offset-ivory-linen"
                href="#featured-story"
              >
                Begin the archive
              </a>
              <a
                className="rounded-full border border-espresso/25 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-espresso transition duration-300 hover:-translate-y-0.5 hover:border-vintage-crimson hover:text-vintage-crimson focus:outline-none focus:ring-2 focus:ring-espresso focus:ring-offset-4 focus:ring-offset-ivory-linen"
                className="rounded-full border border-cocoa-brown/25 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-cocoa-brown transition duration-300 hover:-translate-y-0.5 hover:border-vintage-crimson hover:text-vintage-crimson focus:outline-none focus:ring-2 focus:ring-cocoa-brown focus:ring-offset-4 focus:ring-offset-ivory-linen"
                href="#travel"
              >
                Preview travels
              </a>
            </div>
          </div>

          <div className="animate-soft-reveal rounded-[2rem] border border-espresso/15 bg-ivory-linen/70 p-4 shadow-2xl shadow-espresso/10 [animation-delay:160ms] lg:p-5">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(47,33,29,0.88),rgba(47,33,29,0.72)),radial-gradient(circle_at_30%_20%,rgba(246,241,234,0.24),transparent_18rem)] p-8 text-ivory-linen">
          <div className="animate-soft-reveal rounded-[2rem] border border-cocoa-brown/15 bg-ivory-linen/70 p-4 shadow-2xl shadow-cocoa-brown/10 [animation-delay:160ms] lg:p-5">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,rgba(47,33,29,0.88),rgba(75,54,47,0.72)),radial-gradient(circle_at_30%_20%,rgba(246,241,234,0.24),transparent_18rem)] p-8 text-ivory-linen">
              <div className="absolute inset-x-8 top-8 h-px bg-ivory-linen/35" />
              <div className="absolute bottom-10 right-8 h-32 w-24 rounded-t-full border border-ivory-linen/25 bg-ivory-linen/10" />
              <div className="absolute bottom-16 left-8 h-40 w-28 rounded-full border border-ivory-linen/20 bg-warm-smoke/10 blur-[1px]" />
              <div className="relative z-10 flex h-full min-h-[24rem] flex-col justify-between">
                <p className="max-w-xs text-sm uppercase tracking-[0.32em] text-fog-gray">
                  Featured image placeholder
                </p>
                <div>
                  <p className="font-display text-4xl leading-tight">
                    A portrait will live here.
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-fog-gray">
                    Until the family selects the image, this frame keeps the page
                    elegant without borrowing someone else’s memory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-story" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-vintage-crimson">
              Featured story
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">
              The archive begins with personality.
            </h2>
          </div>
          <article className="rounded-[2rem] border border-espresso/15 bg-white/45 p-8 shadow-xl shadow-espresso/5">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-espresso/60">
          <article className="rounded-[2rem] border border-cocoa-brown/15 bg-white/45 p-8 shadow-xl shadow-cocoa-brown/5">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-cocoa-brown/60">
              Story card placeholder
            </p>
            <h3 className="mt-5 text-2xl font-bold text-espresso">
              The Look That Required No Translation
            </h3>
            <p className="mt-4 text-lg leading-8 text-espresso/85">
            <p className="mt-4 text-lg leading-8 text-cocoa-brown/85">
              Some family stories need dates. Others need timing, tone, and the
              exact pause before Ms. Murphy decided whether the room deserved a
              laugh, an eye roll, or both.
            </p>
            <p className="mt-6 border-l-2 border-vintage-crimson pl-5 text-base italic leading-7 text-espresso">
            <p className="mt-6 border-l-2 border-vintage-crimson pl-5 text-base italic leading-7 text-cocoa-brown">
              “We are saving the moment before the punchline, too.”
            </p>
          </article>
        </div>
      </section>

      <section className="bg-espresso px-5 py-16 text-ivory-linen sm:px-8 lg:px-12">
      <section className="bg-cocoa-brown px-5 py-16 text-ivory-linen sm:px-8 lg:px-12">
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
                className="rounded-[1.5rem] border border-ivory-linen/15 bg-ivory-linen/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:bg-ivory-linen/[0.09]"
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
          <div className="rounded-[2rem] border border-espresso/15 bg-[linear-gradient(135deg,rgba(216,214,210,0.75),rgba(246,241,234,0.95))] p-8">
            <div className="aspect-[4/3] rounded-[1.5rem] border border-espresso/15 bg-[radial-gradient(circle_at_28%_32%,rgba(159,45,45,0.22),transparent_8rem),radial-gradient(circle_at_70%_64%,rgba(47,33,29,0.18),transparent_9rem)] p-6">
              <div className="flex h-full flex-col justify-between rounded-[1rem] border border-dashed border-espresso/30 p-6 text-espresso">
          <div className="rounded-[2rem] border border-cocoa-brown/15 bg-[linear-gradient(135deg,rgba(216,214,210,0.75),rgba(246,241,234,0.95))] p-8">
            <div className="aspect-[4/3] rounded-[1.5rem] border border-cocoa-brown/15 bg-[radial-gradient(circle_at_28%_32%,rgba(159,45,45,0.22),transparent_8rem),radial-gradient(circle_at_70%_64%,rgba(75,54,47,0.18),transparent_9rem)] p-6">
              <div className="flex h-full flex-col justify-between rounded-[1rem] border border-dashed border-cocoa-brown/30 p-6 text-cocoa-brown">
                <span className="text-xs font-bold uppercase tracking-[0.3em]">
                  Travel map placeholder
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
            <p className="mt-6 text-lg leading-8 text-espresso/85">
            <p className="mt-6 text-lg leading-8 text-cocoa-brown/85">
              Future travel chapters can gather photos, routes, captions, family
              jokes, and the wonderfully specific details that never make it into
              ordinary albums.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-espresso/15 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-espresso/75 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="h-auto w-40 sm:w-48" variant="compact" />
      <footer className="border-t border-cocoa-brown/15 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-cocoa-brown/75 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="h-auto w-40 sm:w-48" variant="compact" />
          <p className="font-display text-2xl text-espresso">Laughs & Eye Rolls</p>
          <p>Built to preserve memories, humor, and the occasional excellent side-eye.</p>
        </div>
      </footer>
    </main>
  );
}
