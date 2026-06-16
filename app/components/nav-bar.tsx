"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("skills"), href: "#skills" },
    { label: t("experiences"), href: "#experiences" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#08080f]/90 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.06)] dark:shadow-none"
          : "bg-white/70 dark:bg-[#08080f]/70 backdrop-blur-xl border-b border-gray-100/80 dark:border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          niraina<span className="text-violet-500 dark:text-violet-400">.</span>dev
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 dark:text-white/55 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <LanguageSwitcher />

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white ml-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-[#08080f]/95 backdrop-blur-2xl border-t border-gray-200 dark:border-white/10 px-6 py-5">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
