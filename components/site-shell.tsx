'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, ArrowUpRight, X } from 'lucide-react'
import { legalNav } from '@/lib/legal-content'

const links = [
  ['Product', '/product'],
  ['How it works', '/how-it-works'],
  ['For businesses', '/businesses'],
  ['About', '/about'],
  ['Team', '/team'],
]

function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/images/logo-mark.png" alt="Regulars logo" width={32} height={32} className="size-8 rounded-lg" />
      <span className="font-serif text-2xl tracking-tight">regulars<span className="text-primary">.</span></span>
    </span>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" onClick={() => setOpen(false)}><Logo /></Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</Link>)}
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">Book a demo <ArrowUpRight className="size-4" /></Link>
        </nav>
        <button className="rounded-md p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="flex flex-col gap-5 border-t border-border px-5 py-6 md:hidden" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="text-primary">Book a demo →</Link></nav>}
    </header>
    {children}
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:flex-row md:justify-between md:px-8">
        <div className="max-w-xs">
          <Link href="/"><Logo /></Link>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">The quiet system behind the places people keep coming back to.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Explore</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/product" className="text-muted-foreground hover:text-foreground">Product</Link>
              <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">How it works</Link>
              <Link href="/businesses" className="text-muted-foreground hover:text-foreground">Businesses</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/team" className="text-muted-foreground hover:text-foreground">Team</Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Legal</p>
            <div className="flex flex-col gap-2.5">
              {legalNav.map(({ label, href }) => <Link key={href} href={href} className="text-muted-foreground hover:text-foreground">{label}</Link>)}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Get in touch</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Book a demo</Link>
              <a href="mailto:support@wayneesolutions.com" className="text-muted-foreground hover:text-foreground">support@wayneesolutions.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-border px-5 py-5 text-xs text-muted-foreground md:px-8">© 2026 Regulars, a product of Wayne E Solutions. Made for local places.</div>
    </footer>
  </div>
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) { return <section className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28"><p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p><h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.02] md:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{body}</p></section> }

export function CTA() { return <section className="mx-auto max-w-7xl px-5 py-20 md:px-8"><div className="rounded-[2rem] bg-primary px-7 py-12 text-primary-foreground md:px-16 md:py-16"><p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">The next visit starts here</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">Make your best customers feel remembered.</h2><Link href="/contact" className="mt-8 inline-flex rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground hover:opacity-90">Book a demo <ArrowUpRight className="ml-2 size-4" /></Link></div></section> }

export function FeatureGrid({ items }: { items: { title: string; body: string }[] }) { return <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">{items.map((item, i) => <article key={item.title} className="bg-background p-7 md:p-9"><span className="font-mono text-sm text-primary">0{i + 1}</span><h3 className="mt-16 font-serif text-2xl">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p></article>)}</div> }
