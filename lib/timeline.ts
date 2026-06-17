import { createSupabaseBrowserClient, isSupabaseConfigured } from "./supabase";

export type DatePrecision = "exact" | "month" | "year" | "era" | "chapter";
export type TimelineStatus = "draft" | "published";

export type TimelineEntry = {
  id: string;
  title: string;
  slug: string | null;
  event_date: string | null;
  date_precision: DatePrecision;
  era: string | null;
  summary: string;
  story: string | null;
  featured_image_url: string | null;
  gallery_image_urls: string[];
  audio_memory_url: string | null;
  quote: string | null;
  tags: string[];
  featured: boolean;
  status: TimelineStatus;
  sort_year: number | null;
  sort_month: number | null;
  sort_day: number | null;
  created_at?: string;
  updated_at?: string;
};

export type TimelineEntryDraft = Omit<
  TimelineEntry,
  "id" | "gallery_image_urls" | "tags" | "created_at" | "updated_at"
> & {
  gallery_image_urls: string;
  tags: string;
};

export async function getPublishedTimelineEntries() {
  if (!isSupabaseConfigured) {
    return [];
  }

  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("timeline_entries")
    .select("*")
    .eq("status", "published")
    .order("sort_year", { ascending: true, nullsFirst: false })
    .order("sort_month", { ascending: true, nullsFirst: false })
    .order("sort_day", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []) as TimelineEntry[];
}

export async function getAdminTimelineEntries() {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("timeline_entries")
    .select("*")
    .order("sort_year", { ascending: true, nullsFirst: false })
    .order("sort_month", { ascending: true, nullsFirst: false })
    .order("sort_day", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data ?? []) as TimelineEntry[];
}

export async function upsertTimelineEntry(draft: TimelineEntryDraft) {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("timeline_entries")
    .upsert({
      ...draft,
      gallery_image_urls: parseList(draft.gallery_image_urls),
      tags: parseList(draft.tags),
      published: draft.status === "published",
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as TimelineEntry;
}

export function formatTimelineDate(entry: TimelineEntry) {
  if (entry.date_precision === "era" || entry.date_precision === "chapter") {
    return entry.era ?? entry.title;
  }

  if (!entry.event_date) {
    return entry.era ?? "Undated";
  }

  const date = new Date(`${entry.event_date}T00:00:00`);

  if (entry.date_precision === "year") {
    return String(date.getUTCFullYear());
  }

  if (entry.date_precision === "month") {
    return date.toLocaleDateString("en-US", {
      month: "long",
      timeZone: "UTC",
      year: "numeric",
    });
  }

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  });
}

export function getTimelineYear(entry: TimelineEntry) {
  if (entry.sort_year) {
    return String(entry.sort_year);
  }

  if (entry.event_date) {
    return String(new Date(`${entry.event_date}T00:00:00`).getUTCFullYear());
  }

  return entry.era ?? "Chapter";
}

function parseList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
