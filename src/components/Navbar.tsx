"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Mystery", href: "/mystery" },
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
  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isHome
          ? "bg-transparent"
          : "bg-white/80 backdrop-blur-md border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className={`font-heading font-bold text-lg shrink-0 transition-colors ${
              isHome ? "text-white" : "text-green-600"
            }`}
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
                      isHome
                        ? isActive
                          ? "bg-white/20 text-white"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                        : isActive
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
