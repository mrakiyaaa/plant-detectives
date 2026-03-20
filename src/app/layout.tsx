import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planet Detectives: Solve the Climate Mystery",
  description:
    "An interactive educational website for kids and students about climate change. Explore the science, discover impacts, and learn what you can do!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
