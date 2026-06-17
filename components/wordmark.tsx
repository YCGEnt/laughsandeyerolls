type WordmarkVariant = "primary" | "compact";

type WordmarkProps = {
  variant: WordmarkVariant;
  className?: string;
  priority?: boolean;
};

const placeholderLabel: Record<WordmarkVariant, string> = {
  primary: "[WORDMARK]",
  compact: "[LOGO]",
};

export function Wordmark({ variant, className }: WordmarkProps) {
  return (
    <span
      aria-label={`${placeholderLabel[variant]} placeholder`}
      className={[
        "inline-flex items-center justify-center border border-line bg-panel text-muted",
        "font-sans font-black uppercase tracking-[0.32em]",
        variant === "primary"
          ? "min-h-20 rounded-sm px-8 py-6 text-sm sm:text-base"
          : "min-h-9 rounded-sm px-3 py-2 text-[0.58rem]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
    >
      {placeholderLabel[variant]}
    </span>
  );
}
