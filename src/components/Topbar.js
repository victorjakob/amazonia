"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
  { label: "Contact", href: "/contact" },
];

const LOGO =
  "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752601311/naturalesa-w1_vdd6fh.png";

export default function Topbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header only floats over the artwork at the very top of the homepage.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock the page behind the open drawer, and allow Escape to dismiss it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = !isHome || scrolled || open;

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          solid
            ? "bg-forest-900/92 backdrop-blur-md border-b border-white/10"
            : "bg-gradient-to-b from-black/50 via-black/20 to-transparent border-b border-transparent"
        }`}
      >
        <div className="u-shell flex items-center justify-between h-20 lg:h-24">
          <Link href="/" aria-label="Amazonia — home" className="shrink-0">
            <Image
              src={LOGO}
              alt="Amazonia"
              width={220}
              height={220}
              priority
              className={`w-auto object-contain transition-all duration-500 ease-out ${
                scrolled ? "h-10 lg:h-12" : "h-12 lg:h-16"
              }`}
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-2">
              {NAV.map((entry) => {
                const active = isActive(entry.href);
                return (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative block px-4 py-2.5 u-tracked transition-colors duration-300 ${
                        active
                          ? "text-paper"
                          : "text-paper/70 hover:text-paper"
                      }`}
                    >
                      {entry.label}
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute left-4 right-4 bottom-1 h-px origin-left bg-amber-soft transition-transform duration-500 ease-out ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden relative h-11 w-11 -mr-2 flex items-center justify-center"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-paper transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-paper transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden bg-forest-900"
          >
            <nav
              aria-label="Primary"
              className="h-full flex flex-col items-center justify-center gap-2"
            >
              {NAV.map((entry, index) => (
                <motion.div
                  key={entry.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + index * 0.07,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={entry.href}
                    className={`font-display block px-8 py-4 text-4xl transition-colors duration-300 ${
                      isActive(entry.href)
                        ? "text-amber-soft"
                        : "text-paper/85 hover:text-paper"
                    }`}
                  >
                    {entry.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for pages that do not open with a full-bleed hero */}
      {!isHome && <div aria-hidden="true" className="h-20 lg:h-24" />}
    </>
  );
}
