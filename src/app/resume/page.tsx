'use client';

import Link from 'next/link';
import { ArrowLeft, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { about, certifications, experience } from '@/data/portfolio';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-glow">
        <div className="flex items-center justify-between print:hidden">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <button type="button" onClick={() => window.print()} className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400">
            Print Resume
          </button>
        </div>

        <header className="mt-6 border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-semibold text-white">Saurav K</h1>
          <p className="mt-2 text-lg text-cyan-400">Quality Analyst Lead</p>
          <p className="mt-4 max-w-3xl text-slate-300">{about.headline}</p>
        </header>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-white"><Briefcase className="h-5 w-5 text-cyan-400" /> Experience</h2>
            <div className="mt-4 space-y-6">
              {experience.map((item) => (
                <div key={item.company}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-white">{item.role}</h3>
                      <p className="text-sm text-cyan-400">{item.company}</p>
                    </div>
                    <p className="text-sm text-slate-400">{item.period}</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {item.responsibilities.map((entry) => (
                      <li key={entry}>• {entry}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-white"><GraduationCap className="h-5 w-5 text-cyan-400" /> Credentials</h2>
            <div className="mt-4 space-y-3">
              {certifications.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.issuer} • {item.year}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white"><Sparkles className="h-5 w-5 text-cyan-400" /> Focus Areas</h3>
              <p className="mt-3 text-sm text-slate-300">Automation strategy, AI-assisted testing, Agile leadership, release readiness, and quality operations.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
