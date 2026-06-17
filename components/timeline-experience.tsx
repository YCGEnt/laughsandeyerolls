"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TimelineEntry = {
  id: string;
  date: string;
  title: string;
  body: string;
  quote?: string;
  media?: "photo" | "audio";
};

type TimelineChapter = {
  type: "chapter";
  id: string;
  title: string;
  subtitle: string;
};

type TimelineStory = {
  type: "story";
  side: "left" | "right";
  entry: TimelineEntry;
};

type TimelineItem = TimelineChapter | TimelineStory;

const timelineItems: TimelineItem[] = [
  {
    type: "chapter",
    id: "beginning",
    title: "The Charlotte Era Begins",
    subtitle: "The opening pages of a family archive, arranged by presence instead of paperwork.",
  },
  {
    type: "story",
    side: "left",
    entry: {
      id: "annie-arrives",
      date: "March 4, 1947",
      title: "Annie Arrives",
      body:
        'Andrea "Andy" Murphy enters the world and immediately begins a lifelong commitment to strong opinions, excellent commentary, and keeping everybody in line.',
      quote: "Some stories begin with a date. This one begins with a personality.",
      media: "photo",
    },
  },
  {
    type: "story",
    side: "right",
    entry: {
      id: "daily-question",
      date: "Chapter Marker",
      title: "The Daily Question Era",
      body:
        "Every family has rituals. Some arrive as recipes, some as phone calls, and some as the exact question that tells everyone the day has officially started.",
      media: "audio",
    },
  },
  {
    type: "chapter",
    id: "motion",
    title: "The Cruise Years",
    subtitle: "Travel chapters, detours, and the commentary that made every itinerary better.",
  },
  {
    type: "story",
    side: "left",
    entry: {
      id: "airport-boyfriend",
      date: "Travel Note",
      title: "The Airport Boyfriend Era",
      body:
        "The archive keeps room for the stories that get funnier every time they are retold, especially the ones that somehow start at a gate, a terminal, or a very public waiting area.",
      quote: "The destination mattered. The side comments mattered more.",
    },
  },
  {
    type: "story",
    side: "right",
    entry: {
      id: "everyday-evidence",
      date: "Ongoing",
      title: "Everyday Evidence",
      body:
        "Small observations, familiar looks, and perfectly timed remarks become the proof that personality is preserved in the details.",
      media: "photo",
    },
  },
];

export function TimelineExperience() {
  const [activeId, setActiveId] = useState("annie-arrives");
  const entryRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-28% 0px -46% 0px", threshold: [0.22, 0.48, 0.72] },
    );

    Object.values(entryRefs.current).forEach((entry) => {
      if (entry) {
        observer.observe(entry);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-accent-primary">
            Timeline
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            A life arranged by stories, not just dates.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            Dates provide structure. Stories provide meaning. This timeline is the
            story engine of the archive.
          </p>
        </div>

        <div className="timeline-track mt-16">
          <div className="timeline-spine" aria-hidden="true" />

          {timelineItems.map((item) => {
            if (item.type === "chapter") {
              return <TimelineChapterBreak item={item} key={item.id} />;
            }

            return (
              <TimelineEntryCard
                active={activeId === item.entry.id}
                item={item}
                key={item.entry.id}
                setRef={(node) => {
                  entryRefs.current[item.entry.id] = node;
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineChapterBreak({ item }: { item: TimelineChapter }) {
  return (
    <motion.div
      className="timeline-chapter"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-90px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="text-xs font-black uppercase tracking-[0.34em] text-accent-primary">
        Chapter Break
      </p>
      <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
        {item.title}
      </h3>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary">
        {item.subtitle}
      </p>
    </motion.div>
  );
}

function TimelineEntryCard({
  active,
  item,
  setRef,
}: {
  active: boolean;
  item: TimelineStory;
  setRef: (node: HTMLElement | null) => void;
}) {
  return (
    <motion.article
      className={[
        "timeline-entry",
        item.side === "left" ? "timeline-entry-left" : "timeline-entry-right",
        active ? "is-active" : "",
      ].join(" ")}
      id={item.entry.id}
      initial={{ opacity: 0, y: 18 }}
      ref={setRef}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: false, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="timeline-marker" aria-hidden="true" />
      <div className="timeline-artifact display-case">
        <p className="timeline-date">{item.entry.date}</p>
        <h3 className="mt-4 font-display text-3xl leading-tight text-text-primary">
          {item.entry.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-text-secondary">
          {item.entry.body}
        </p>

        {item.entry.quote ? (
          <blockquote className="mt-6 border-l-2 border-accent-primary pl-5 text-sm italic leading-7 text-text-secondary">
            &quot;{item.entry.quote}&quot;
          </blockquote>
        ) : null}

        {item.entry.media ? (
          <div className="timeline-media mt-7">
            <span className="text-xs font-black uppercase tracking-[0.28em]">
              {item.entry.media === "photo" ? "[PHOTO PLACEHOLDER]" : "[AUDIO CLIP]"}
            </span>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
