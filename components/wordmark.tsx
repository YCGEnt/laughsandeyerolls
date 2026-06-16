type WordmarkVariant = "primary" | "compact";

type WordmarkProps = {
  variant: WordmarkVariant;
  className?: string;
  priority?: boolean;
};

const wordmarkSources: Record<WordmarkVariant, string> = {
  primary: "/brand/Espresso-wordmark-primary.svg",
  compact: "/brand/Espresso-wordmark-compact.svg",
};

export function Wordmark({ variant, className, priority = false }: WordmarkProps) {
  return (
    <img
      alt="Laughs & Eye Rolls"
      className={className}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      src={wordmarkSources[variant]}
    />
  );
}
