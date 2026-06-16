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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
