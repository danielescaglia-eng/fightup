import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FightUp — Sfida. Combatti. Conquista.",
  description:
    "La piattaforma di matchmaking per sport da combattimento. Sfida i fighter, scala le classifiche, streamma i tuoi match e costruisci la tua leggenda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
