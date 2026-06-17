type WordmarkVariant = "primary" | "compact";

type WordmarkProps = {
  variant: WordmarkVariant;
  className?: string;
  priority?: boolean;
};

export function Wordmark({ variant, className }: WordmarkProps) {
  if (variant === "compact") {
    return (
      <svg
        aria-label="Laughs & Eye Rolls"
        className={className}
        role="img"
        viewBox="0 0 228 42"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          fill="currentColor"
          fontFamily="Lato, Arial, sans-serif"
          fontSize="10"
          fontWeight="900"
          letterSpacing="3.8"
          x="2"
          y="14"
        >
          LAUGHS &amp; EYE
        </text>
        <text
          fill="currentColor"
          fontFamily="Lato, Arial, sans-serif"
          fontSize="10"
          fontWeight="900"
          letterSpacing="3.8"
          x="2"
          y="30"
        >
          ROLLS
        </text>
      </svg>
    );
  }

  return (
    <svg
      aria-label="Laughs & Eye Rolls"
      className={className}
      role="img"
      viewBox="0 0 640 210"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fill="currentColor"
        fontFamily="Cinzel Decorative, Georgia, serif"
        fontSize="78"
        fontWeight="400"
        letterSpacing="-1"
        x="0"
        y="82"
      >
        LAUGHS &amp;
      </text>
      <text
        fill="currentColor"
        fontFamily="Cinzel Decorative, Georgia, serif"
        fontSize="78"
        fontWeight="400"
        letterSpacing="-1"
        x="0"
        y="164"
      >
        EYE ROLLS
      </text>
    </svg>
  );
}
