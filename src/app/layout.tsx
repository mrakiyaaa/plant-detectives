import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";

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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <div className="pt-14 flex flex-col flex-1">
          {children}
          <ContactFooter />
        </div>
      </body>
    </html>
  );
}
