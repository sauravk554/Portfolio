'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BookOpen, Briefcase, Circle, Code2, Compass, Github, Linkedin, Mail, MapPin, Sparkles, Star, TrendingUp } from 'lucide-react';
import { about, certifications, contactInfo, experience, leadershipHighlights, projects, skills, stats, testimonials } from '@/data/portfolio';
import { BackToTop } from '@/components/BackToTop';
import { Navigation } from '@/components/Navigation';

const skillLevelColors: Record<string, string> = {
  Expert: 'bg-emerald-500/20 text-emerald-300',
  Advanced: 'bg-sky-500/20 text-sky-300',
  Intermediate: 'bg-amber-500/20 text-amber-300'
};

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              <BadgeCheck className="h-4 w-4 text-cyan-400" />
              Quality Analyst Lead • 7+ years in QA excellence
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building resilient quality systems for high-velocity product teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I lead quality engineering strategy with automation, AI-assisted testing, and pragmatic leadership to help teams ship faster with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">
                Contact Me
              </a>
              <a href="#certifications" className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-cyan-400 hover:text-white">
                View Certifications
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.slice(0, 3).map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index, duration: 0.4 }} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="glass-card overflow-hidden p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Profile</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Saurav K</h2>
                  <p className="text-slate-400">Quality Analyst Lead</p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-xl font-semibold text-white">
                  SK
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Briefcase className="h-4 w-4 text-cyan-400" />
                  Leading quality at Apex Digital Solutions
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['QA Strategy', 'Automation', 'Leadership', 'AI Testing'].map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={contactInfo.linkedIn} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-500 hover:text-white">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={contactInfo.github} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-white">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-500 hover:text-white">
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a href="/resume.pdf" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-white">
                  <BookOpen className="h-4 w-4" /> Resume
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.slice(3).map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-center">
                    <div className="text-xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
            <h2 className="section-title">Executive Summary</h2>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 text-cyan-400">
              <Compass className="h-5 w-5" />
              <p className="font-medium">Leadership philosophy</p>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white">Quality is a product strategy lever, not a gatekeeper.</h3>
            <p className="mt-4 text-slate-300">I lead with clarity, measurable outcomes, and a strong bias toward cross-functional collaboration.</p>
          </div>
          <div className="space-y-4 text-slate-300">
            {about.paragraphs.map((paragraph, index) => (
              <motion.div key={paragraph} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass-card p-6">
                {paragraph}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Experience</p>
          <h2 className="section-title">Career Timeline</h2>
        </div>
        <div className="space-y-6">
          {experience.map((item, index) => (
            <motion.div key={item.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass-card p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-cyan-400">{item.company}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.period}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Responsibilities</h4>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {item.responsibilities.map((entry) => (
                      <li key={entry} className="flex gap-2"><Circle className="mt-1 h-3 w-3 text-cyan-400" />{entry}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Achievements</h4>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {item.achievements.map((entry) => (
                      <li key={entry} className="flex gap-2"><TrendingUp className="mt-1 h-3 w-3 text-blue-400" />{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skills</p>
          <h2 className="section-title">Core Competencies</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <motion.div key={skillGroup.category} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="glass-card p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                <span className="text-sm text-slate-400">{skillGroup.items.length} items</span>
              </div>
              <div className="space-y-3">
                {skillGroup.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-slate-300">{item.name}</span>
                      <span className={`rounded-full px-2.5 py-1 text-xs ${skillLevelColors[item.level]}`}>{item.level}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className={`h-2 rounded-full ${item.level === 'Expert' ? 'w-full bg-blue-500' : item.level === 'Advanced' ? 'w-4/5 bg-cyan-400' : 'w-3/5 bg-amber-400'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
          <h2 className="section-title">Featured Work</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass-card p-6">
              <div className="mb-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-cyan-400">Featured Project</span>
                  <Sparkles className="h-4 w-4 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{project.overview}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">{tech}</span>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p><span className="font-semibold text-white">Role:</span> {project.role}</p>
                <p><span className="font-semibold text-white">Challenge:</span> {project.challenge}</p>
                <p><span className="font-semibold text-white">Solution:</span> {project.solution}</p>
                <p><span className="font-semibold text-white">Impact:</span> {project.impact}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.github} className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                  <Code2 className="h-4 w-4" /> GitHub
                </a>
                <a href="#contact" className="flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-white">
                  <ArrowRight className="h-4 w-4" /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="leadership" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Leadership</p>
          <h2 className="section-title">Leadership Highlights</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {leadershipHighlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Certifications</p>
          <h2 className="section-title">Credentials & Training</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-cyan-400">
                <Star className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.issuer}</p>
              <p className="mt-2 text-sm text-cyan-400">{item.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="github" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">GitHub</p>
          <h2 className="section-title">Public Engineering Profile</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-white">Profile Focus</h3>
            <p className="mt-4 text-slate-300">My public work centers on automation frameworks, CI/CD enablement, and reusable patterns that improve quality at scale.</p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Top Languages</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Java', 'Python', 'TypeScript'].map((lang) => (
                  <span key={lang} className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300">{lang}</span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Recent Activity</h4>
              <p className="mt-3 text-slate-300">Automation repositories, CI/CD tools, and AI-assisted testing patterns.</p>
            </div>
          </div>
          <div className="space-y-6">
            {projects.slice(0, 2).map((project) => (
              <div key={project.title} className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.overview}</p>
                <a href={project.github} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
                  <Github className="h-4 w-4" /> View repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Testimonials</p>
          <h2 className="section-title">What Partners Say</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.author} className="glass-card p-8">
              <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
          <h2 className="section-title">Let’s Connect</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card p-8">
            <div className="space-y-4 text-slate-300">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4 transition hover:border-blue-500">
                <Mail className="h-5 w-5 text-cyan-400" /> {contactInfo.email}
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4">
                <MapPin className="h-5 w-5 text-cyan-400" /> {contactInfo.location}
              </div>
              <a href={contactInfo.linkedIn} className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4 transition hover:border-blue-500">
                <Linkedin className="h-5 w-5 text-cyan-400" /> LinkedIn Profile
              </a>
              <a href={contactInfo.github} className="flex items-center gap-3 rounded-2xl border border-slate-800 p-4 transition hover:border-blue-500">
                <Github className="h-5 w-5 text-cyan-400" /> GitHub Profile
              </a>
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-slate-700 p-6 text-sm text-slate-400">
              Calendar booking placeholder for consultation calls.
            </div>
          </div>
          <div className="glass-card p-8">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                <input id="name" className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0 focus:border-cyan-400" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                <input id="email" type="email" className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0 focus:border-cyan-400" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                <textarea id="message" rows={5} className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0 focus:border-cyan-400" placeholder="Tell me about your project or team." />
              </div>
              <button type="submit" className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/80 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2026 Saurav K. Crafted for modern quality leadership.</p>
      </footer>
      <BackToTop />
    </main>
  );
}
