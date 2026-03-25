import { Link } from "@tanstack/react-router";
import { GraduationCap, Menu, User, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" as const },
  { label: "ABOUT SIBM", href: "/" as const },
  { label: "PROGRAMMES", href: "/" as const },
  { label: "ADMISSIONS", href: "/" as const },
  { label: "STUDENT LIFE", href: "/" as const },
  { label: "ALUMNI", href: "/" as const },
  { label: "CONTACT", href: "/" as const },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border shadow-xs sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="header.link"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-navy text-base tracking-wide">
                SIBM PUNE
              </div>
              <div className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Symbiosis Institute
              </div>
            </div>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            data-ocid="nav.panel"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-3 py-2 text-xs font-semibold text-foreground hover:text-navy hover:bg-muted rounded transition-colors tracking-wide"
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              className="px-4 py-1.5 text-xs font-semibold border border-navy text-navy rounded hover:bg-navy hover:text-white transition-colors"
              data-ocid="header.login_button"
            >
              Login
            </button>
            <button
              type="button"
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="header.toggle"
            >
              <User className="w-4 h-4" />
              Profile
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-2 text-sm font-semibold text-foreground hover:text-navy"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
