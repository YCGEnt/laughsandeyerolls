import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Laughs & Eye Rolls | Adventures with Ms. Murphy",
  description:
    "A cinematic family archive preserving stories, humor, travel memories, and personality with warmth and wit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const savedTheme = window.localStorage.getItem("laughs-eye-rolls-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
