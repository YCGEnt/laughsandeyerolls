"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const storageKey = "laughs-eye-rolls-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function getTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(storageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("themechange", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("themechange", callback);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");

  function updateTheme(nextTheme: Theme) {
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <div
      aria-label="Color theme"
      className="inline-grid grid-cols-2 rounded-full border border-line bg-panel p-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted shadow-sm backdrop-blur"
      role="group"
    >
      {(["light", "dark"] as const).map((mode) => {
        const isActive = theme === mode;

        return (
          <button
            aria-pressed={isActive}
            className={[
              "rounded-full px-3 py-2 transition duration-200 focus:outline-none focus:ring-2 focus:ring-vintage-crimson focus:ring-offset-2 focus:ring-offset-page",
              isActive
                ? "bg-vintage-crimson text-ivory-linen shadow-sm"
                : "text-muted hover:text-vintage-crimson",
            ].join(" ")}
            key={mode}
            onClick={() => updateTheme(mode)}
            type="button"
          >
            {mode}
          </button>
        );
      })}
    </div>
  );
}
