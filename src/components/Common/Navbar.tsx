"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/site/Logo";
import { BookCall } from "@/components/site/BookCall";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500",
        scrolled || open ? "border-line bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      )}
    >
      <nav aria-label="Main" className="container-site flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <Logo />
          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-[0.875rem] font-medium transition-colors duration-200",
                      active ? "text-fg" : "text-fg-subtle hover:text-fg"
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden
                        className="absolute inset-x-0 -bottom-[13px] h-px bg-fg"
                        transition={{ duration: 0.45, ease: EASE }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <BookCall size="sm" className="hidden md:inline-flex" />
          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-[10px] border border-line text-fg transition-colors hover:bg-white/[0.06] md:hidden"
          >
            {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="h-[calc(100dvh-64px)] overflow-y-auto border-t border-line bg-bg md:hidden"
          >
            <ul className="container-site flex flex-col pt-2">
              {[{ href: "/", label: "Home" }, ...NAV_LINKS].map((link) => {
                const active = link.href === "/" ? pathname === "/" : isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      // Section links keep the same path, so close the sheet on tap.
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "font-display flex items-center justify-between border-b border-line py-4 text-[1.75rem] font-medium tracking-[-0.035em]",
                        active ? "text-fg" : "text-fg-subtle"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="container-site pt-8">
              <BookCall size="lg" className="w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
