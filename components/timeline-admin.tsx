"use client";

import { useEffect, useState } from "react";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "../lib/supabase";
import {
  getAdminTimelineEntries,
  upsertTimelineEntry,
  type DatePrecision,
  type TimelineEntry,
  type TimelineEntryDraft,
  type TimelineStatus,
} from "../lib/timeline";

const blankDraft: TimelineEntryDraft = {
  title: "",
  slug: null,
  event_date: null,
  date_precision: "exact",
  era: "",
  summary: "",
  story: "",
  featured_image_url: "",
  gallery_image_urls: "",
  audio_memory_url: "",
  quote: "",
  tags: "",
  featured: false,
  status: "draft",
  sort_year: null,
  sort_month: null,
  sort_day: null,
};

export function TimelineAdmin() {
  const [email, setEmail] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [entries, setEntries] = useState<TimelineEntry[]>([]);
  const [draft, setDraft] = useState<TimelineEntryDraft>(blankDraft);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isSupabaseConfigured) {
      return;
    }

    const supabase = createSupabaseBrowserClient();
    supabase.auth.getUser().then(({ data }) => {
      const hasUser = Boolean(data.user);
      setSignedIn(hasUser);

      if (hasUser) {
        refreshEntries();
      }
    });
  }, []);

  async function refreshEntries() {
    const timelineEntries = await getAdminTimelineEntries();
    setEntries(timelineEntries);
  }

  async function signIn() {
    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithOtp({ email });

    setMessage(error ? error.message : "Check your email for the admin sign-in link.");
  }

  async function saveEntry() {
    await upsertTimelineEntry(draft);
    setDraft(blankDraft);
    await refreshEntries();
    setMessage("Timeline entry saved.");
  }

  if (!isSupabaseConfigured) {
    return (
      <AdminShell>
        <p className="text-text-secondary">
          Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to
          manage timeline entries.
        </p>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      {!signedIn ? (
        <div className="display-case rounded-2xl border border-line bg-panel p-6">
          <label className="text-xs font-black uppercase tracking-[0.24em] text-text-muted">
            Admin email
          </label>
          <input
            className="mt-3 w-full rounded-lg border border-line bg-parchment-surface px-4 py-3 text-espresso"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            type="email"
            value={email}
          />
          <button
            className="mt-4 rounded-full bg-accent-primary px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-parchment-surface"
            onClick={signIn}
            type="button"
          >
            Send sign-in link
          </button>
          {message ? <p className="mt-4 text-sm text-text-secondary">{message}</p> : null}
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <TimelineForm draft={draft} onChange={setDraft} onSave={saveEntry} />
          <div className="display-case rounded-2xl border border-line bg-panel p-6">
            <h2 className="font-display text-2xl">Recent entries</h2>
            <div className="mt-5 grid gap-3">
              {entries.map((entry) => (
                <button
                  className="rounded-xl border border-line p-4 text-left transition hover:border-accent-primary"
                  key={entry.id}
                  onClick={() =>
                    setDraft({
                      ...entry,
                      gallery_image_urls: entry.gallery_image_urls.join(", "),
                      tags: entry.tags.join(", "),
                    })
                  }
                  type="button"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-accent-primary">
                    {entry.status}
                  </p>
                  <p className="mt-2 font-bold">{entry.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">{entry.era}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </AdminShell>
  );
}

function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="timeline-admin min-h-screen bg-page px-5 py-10 text-ink sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.32em] text-accent-primary">
          Admin
        </p>
        <h1 className="mt-4 font-display text-5xl">Timeline Entries</h1>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Add memories, eras, running jokes, trips, quotes, and audio moments without
          editing code.
        </p>
        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}

function TimelineForm({
  draft,
  onChange,
  onSave,
}: {
  draft: TimelineEntryDraft;
  onChange: (draft: TimelineEntryDraft) => void;
  onSave: () => void;
}) {
  function update<K extends keyof TimelineEntryDraft>(
    key: K,
    value: TimelineEntryDraft[K],
  ) {
    onChange({ ...draft, [key]: value });
  }

  return (
    <div className="display-case rounded-2xl border border-line bg-panel p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Title">
          <input value={draft.title} onChange={(e) => update("title", e.target.value)} />
        </Field>
        <Field label="Slug">
          <input
            value={draft.slug ?? ""}
            onChange={(e) => update("slug", e.target.value || null)}
          />
        </Field>
        <Field label="Event date">
          <input
            type="date"
            value={draft.event_date ?? ""}
            onChange={(e) => update("event_date", e.target.value || null)}
          />
        </Field>
        <Field label="Date precision">
          <select
            value={draft.date_precision}
            onChange={(e) => update("date_precision", e.target.value as DatePrecision)}
          >
            <option value="exact">Exact Date</option>
            <option value="month">Month + Year</option>
            <option value="year">Year Only</option>
            <option value="era">Era</option>
            <option value="chapter">Chapter</option>
          </select>
        </Field>
        <Field label="Era">
          <input value={draft.era ?? ""} onChange={(e) => update("era", e.target.value)} />
        </Field>
        <Field label="Status">
          <select
            value={draft.status}
            onChange={(e) => update("status", e.target.value as TimelineStatus)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </Field>
        <Field label="Sort year">
          <input
            type="number"
            value={draft.sort_year ?? ""}
            onChange={(e) => update("sort_year", e.target.value ? Number(e.target.value) : null)}
          />
        </Field>
        <Field label="Sort month">
          <input
            max="12"
            min="1"
            type="number"
            value={draft.sort_month ?? ""}
            onChange={(e) => update("sort_month", e.target.value ? Number(e.target.value) : null)}
          />
        </Field>
      </div>
      <Field label="Summary">
        <textarea value={draft.summary} onChange={(e) => update("summary", e.target.value)} />
      </Field>
      <Field label="Story">
        <textarea value={draft.story ?? ""} onChange={(e) => update("story", e.target.value)} />
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Featured image URL">
          <input
            value={draft.featured_image_url ?? ""}
            onChange={(e) => update("featured_image_url", e.target.value)}
          />
        </Field>
        <Field label="Audio memory URL">
          <input
            value={draft.audio_memory_url ?? ""}
            onChange={(e) => update("audio_memory_url", e.target.value)}
          />
        </Field>
        <Field label="Gallery image URLs">
          <input
            value={draft.gallery_image_urls}
            onChange={(e) => update("gallery_image_urls", e.target.value)}
          />
        </Field>
        <Field label="Tags">
          <input value={draft.tags} onChange={(e) => update("tags", e.target.value)} />
        </Field>
      </div>
      <Field label="Quote">
        <textarea value={draft.quote ?? ""} onChange={(e) => update("quote", e.target.value)} />
      </Field>
      <label className="mt-4 flex items-center gap-3 text-sm font-bold text-text-secondary">
        <input
          checked={draft.featured}
          onChange={(e) => update("featured", e.target.checked)}
          type="checkbox"
        />
        Featured memory
      </label>
      <button
        className="mt-6 rounded-full bg-accent-primary px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-parchment-surface"
        onClick={onSave}
        type="button"
      >
        Save timeline entry
      </button>
    </div>
  );
}

function Field({
  children,
  label,
}: {
  children: React.ReactElement;
  label: string;
}) {
  return (
    <label className="mt-4 block text-xs font-black uppercase tracking-[0.22em] text-text-muted">
      {label}
      {children}
    </label>
  );
}
