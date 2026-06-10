"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitBranch } from "lucide-react";

const navLinks = [
  { label: "Basics", href: "/home" },
  { label: "DSA", href: "/dsa" },
  { label: "LLD", href: "/lld" },
  { label: "HLD", href: "/hld" },
  { label: "AI", href: "/ai" },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 text-white text-xs font-bold tracking-tight group-hover:bg-emerald-700 transition-colors">
            LLD
          </span>
          <span className="text-sm font-semibold text-gray-800 tracking-tight">
            Reference
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors
                ${
                  isActive(href)
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                }`}
            >
              {label}
              {isActive(href) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-emerald-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* GitHub */}
        <a
          href="https://github.com/manikandaprabhu0512/system-design-LLD/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="GitHub repository"
        >
          <GitBranch size={18} />
          <span className="hidden sm:inline text-xs font-medium">GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
