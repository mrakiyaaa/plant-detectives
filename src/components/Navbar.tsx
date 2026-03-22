"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Science", href: "/science" },
  { label: "Impacts", href: "/impacts" },
  { label: "World Map", href: "/world-map" },
  { label: "Solutions", href: "/solutions" },
  { label: "Quiz", href: "/quiz" },
  { label: "Calculator", href: "/carbon-calculator" },
  { label: "Pledge", href: "/pledge" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="font-heading font-bold text-lg text-green-600 shrink-0"
          >
            Planet Detectives
          </Link>

          <ul className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
