'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Leadership', 'Certifications', 'GitHub', 'Testimonials', 'Contact'];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="text-lg font-semibold tracking-wide text-white">
          Saurav K
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
