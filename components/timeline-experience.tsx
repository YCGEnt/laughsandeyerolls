"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  formatTimelineDate,
  getPublishedTimelineEntries,
  getTimelineYear,
  type TimelineEntry,
} from "../lib/timeline";

export function TimelineExperience() {
  const [entries, setEntries] = useState<TimelineEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openEntry, setOpenEntry] = useState<TimelineEntry | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "empty" | "error">(
    "loading",
  );
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: sectionRef,
  });
  const railX = useTransform(scrollYProgress, [0, 1], ["0%", "-64%"]);

  useEffect(() => {
    let mounted = true;

    getPublishedTimelineEntries()
      .then((timelineEntries) => {
        if (!mounted) {
          return;
        }

        setEntries(timelineEntries);
        setActiveId(timelineEntries[0]?.id ?? null);
        setOpenEntry(timelineEntries[0] ?? null);
        setStatus(timelineEntries.length ? "ready" : "empty");
      })
      .catch(() => {
        if (mounted) {
          setStatus("error");
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const activeEntry = useMemo(
    () => entries.find((entry) => entry.id === activeId) ?? entries[0] ?? null,
    [activeId, entries],
  );

  function selectEntry(entry: TimelineEntry) {
    setActiveId(entry.id);
    setOpenEntry(entry);
  }

  return (
    <section
      className="timeline-section px-5 py-20 sm:px-8 lg:px-12"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-accent-primary">
            Timeline
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            A life arranged by stories, not just dates.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            Scroll down to travel across the archive. Milestones are the map;
            stories are the destination.
          </p>
        </div>

        <div className="timeline-scroll-stage mt-14">
          {status === "ready" ? (
            <>
              <div className="timeline-sticky-window">
                <motion.div className="timeline-rail" style={{ x: railX }}>
                  <div className="timeline-horizontal-line" aria-hidden="true" />
                  {entries.map((entry) => {
                    const active = activeId === entry.id;

                    return (
                      <button
                        aria-pressed={active}
                        className={["timeline-milestone", active ? "is-active" : ""].join(
                          " ",
                        )}
                        key={entry.id}
                        onClick={() => selectEntry(entry)}
                        onFocus={() => setActiveId(entry.id)}
                        type="button"
                      >
                        <span className="timeline-dot" />
                        <span className="timeline-year">{getTimelineYear(entry)}</span>
                        <span className="timeline-title">{entry.title}</span>
                      </button>
                    );
                  })}
                </motion.div>

                <StoryPreview entry={activeEntry} onOpen={() => setOpenEntry(activeEntry)} />
              </div>

              <StoryDrawer entry={openEntry} onClose={() => setOpenEntry(null)} />
            </>
          ) : (
            <TimelineEmptyState status={status} />
          )}
        </div>
      </div>
    </section>
  );
}

function StoryPreview({
  entry,
  onOpen,
}: {
  entry: TimelineEntry | null;
  onOpen: () => void;
}) {
  if (!entry) {
    return null;
  }

  return (
    <motion.article
      animate={{ opacity: 1, y: 0 }}
      className="timeline-story-preview display-case"
      initial={{ opacity: 0, y: 10 }}
      key={entry.id}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="timeline-date">{formatTimelineDate(entry)}</p>
      <h3 className="mt-3 font-display text-3xl leading-tight text-text-primary">
        {entry.title}
      </h3>
      {entry.era ? (
        <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-accent-primary">
          Era / {entry.era}
        </p>
      ) : null}
      <p className="mt-4 text-base leading-8 text-text-secondary">{entry.summary}</p>
      <button
        className="mt-6 rounded-full border border-border-subtle px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-text-secondary transition hover:border-accent-primary hover:text-accent-primary"
        onClick={onOpen}
        type="button"
      >
        Open story
      </button>
    </motion.article>
  );
}

function StoryDrawer({
  entry,
  onClose,
}: {
  entry: TimelineEntry | null;
  onClose: () => void;
}) {
  if (!entry) {
    return null;
  }

  return (
    <div className="timeline-drawer" role="dialog" aria-modal="false">
      <button
        aria-label="Close story"
        className="timeline-drawer-close"
        onClick={onClose}
        type="button"
      >
        Close
      </button>
      <p className="timeline-date">{formatTimelineDate(entry)}</p>
      <h3 className="mt-4 font-display text-4xl leading-tight text-text-primary">
        {entry.title}
      </h3>
      {entry.era ? (
        <p className="mt-5 text-xs font-black uppercase tracking-[0.28em] text-accent-primary">
          Era / {entry.era}
        </p>
      ) : null}
      <p className="mt-6 text-lg leading-8 text-text-secondary">{entry.summary}</p>
      {entry.story ? (
        <p className="mt-6 whitespace-pre-line text-base leading-8 text-text-secondary">
          {entry.story}
        </p>
      ) : null}
      {entry.quote ? (
        <blockquote className="mt-7 border-l-2 border-accent-primary pl-5 text-base italic leading-8 text-text-secondary">
          &quot;{entry.quote}&quot;
        </blockquote>
      ) : null}
      {entry.featured_image_url ? (
        <div className="timeline-media mt-7">
          <span className="text-xs font-black uppercase tracking-[0.28em]">
            [FEATURED IMAGE]
          </span>
        </div>
      ) : null}
      {entry.audio_memory_url ? (
        <a
          className="mt-6 inline-flex rounded-full bg-accent-primary px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-parchment-surface transition hover:bg-accent-hover"
          href={entry.audio_memory_url}
        >
          Listen to audio memory
        </a>
      ) : null}
    </div>
  );
}

function TimelineEmptyState({
  status,
}: {
  status: "loading" | "ready" | "empty" | "error";
}) {
  const message =
    status === "loading"
      ? "Opening the archive..."
      : status === "error"
        ? "Timeline entries could not be loaded. Check Supabase configuration."
        : "No published timeline entries yet. Add the first memory in the timeline admin.";

  return (
    <div className="timeline-empty display-case">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-accent-primary">
        Timeline
      </p>
      <p className="mt-4 text-lg leading-8 text-text-secondary">{message}</p>
    </div>
  );
}
