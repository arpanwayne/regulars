'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, Clock, Heart, MessageCircle, QrCode, Sparkles, Store, Users, Zap } from 'lucide-react'
import { CTA, PageHero } from './site-shell'
import { legalDocs, type LegalKind } from '@/lib/legal-content'

type Kind = 'product' | 'how' | 'businesses' | 'about'

const TEAM = [
  { initials: 'PK', name: 'Pankaj Kumar', role: 'Founder & Director' },
  { initials: 'PN', name: 'Pavnoor Kaur', role: 'Co-founder' },
  { initials: 'PM', name: 'Piyush Mehndiratta', role: 'Marketing Head' },
  { initials: 'SM', name: 'Surbhi Mehndiratta', role: 'Graphic Designer' },
  { initials: 'BK', name: 'Baljeet Kaur', role: 'Graphic Designer' },
  { initials: 'AS', name: 'Arpan Saini', role: 'Software Developer' },
  { initials: 'SK', name: 'Sant Kaur', role: 'Senior Software Developer' },
  { initials: 'MK', name: 'Mandeep Kaur', role: 'Senior Web Developer' },
]

export function ProductPage() {
  return <>
    <PageHero eyebrow="The product" title="A quieter way to stay close." body="Regulars turns the moment after a great visit into a relationship that keeps growing." />
    <main className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="relative min-h-[400px] md:min-h-[520px] rounded-3xl overflow-hidden order-2 md:order-1">
          <Image src="/images/regulars-cafe.png" alt="Barista serving coffee" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 45vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="text-background">
              <p className="text-xs uppercase tracking-wider opacity-70">Field notes</p>
              <p className="font-serif text-2xl mt-2">Built on warmth.</p>
            </div>
            <div className="p-3 rounded-full bg-background/20 backdrop-blur-sm text-background"><Sparkles size={20} /></div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"><Sparkles size={18} className="text-primary" /></div>
                <p className="text-sm text-primary font-semibold">Three simple pieces</p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-5">Everything your customers need to feel remembered.</h2>
            </div>
            <div className="space-y-6">
              {[
                { icon: MessageCircle, title: 'Your voice, remembered', desc: 'Write messages that sound like you, not a bot.' },
                { icon: QrCode, title: 'One-tap connection', desc: 'A QR code that feels like a natural extension of your place.' },
                { icon: Heart, title: 'A living list', desc: 'See who loves what, and when they might return.' }
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{title}</h3>
                    <p className="text-muted-foreground text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold hover:opacity-90">See it in action <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </div>
    </main>
    <CTA />
  </>
}

export function HowItWorksPage() {
  return <>
    <PageHero eyebrow="How it works" title="From one good visit to a habit." body="A simple three-part rhythm that fits into the way your team already works." />
    <main className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="relative min-h-[420px] md:min-h-[480px] rounded-3xl overflow-hidden">
            <Image src="/images/regulars-shop.png" alt="Neighborhood shop" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
          </div>
          <div className="space-y-12">
            {[
              { num: '01', icon: QrCode, title: 'Invite', desc: 'A QR code gives every happy customer a gentle way to stay connected.' },
              { num: '02', icon: MessageCircle, title: 'Remember', desc: 'Regulars keeps the context that makes a message feel human.' },
              { num: '03', icon: Heart, title: 'Return', desc: 'The right nudge at the right time makes the next visit natural.' }
            ].map(({ num, icon: Icon, title, desc }, i) => (
              <div key={i} className="pb-8 md:pb-0">
                <span className="font-mono text-sm text-primary font-bold">{num}</span>
                <div className="mt-4 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-6">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 mt-8">
      <div className="rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/20 p-8 md:p-12 border border-primary/10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl mb-3">Works with your rhythm</h3>
            <p className="text-muted-foreground max-w-xl">Takes 5 minutes to set up. Keeps working in the background. No meetings required.</p>
          </div>
          <Zap size={32} className="text-primary flex-shrink-0" />
        </div>
      </div>
    </section>
    <CTA />
  </>
}

export function BusinessesPage() {
  return <>
    <PageHero eyebrow="For independent places" title="Growth that feels like care." body="Made for restaurants, salons, studios, and shops that make neighborhoods worth visiting." />
    <main className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
      <div className="grid gap-8 md:gap-12 md:grid-cols-3">
        <div className="md:col-span-2 relative min-h-[300px] md:min-h-[420px] rounded-3xl overflow-hidden">
          <Image src="/images/regulars-salon.png" alt="Salon interior" fill className="object-cover" sizes="(max-width: 768px) 100vw, 65vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Users size={20} className="text-primary" />
            </div>
            <h3 className="font-serif text-2xl mb-2">Built around your people</h3>
            <p className="text-muted-foreground text-sm">No growth hacks. No dark patterns. Just a direct line to your regulars.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground font-medium hover:opacity-90 w-fit">Learn more <ArrowUpRight size={16} /></Link>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { icon: Store, title: 'Restaurants & Cafés', desc: 'Bring back the table, dish, and moments your guests remember.' },
          { icon: Heart, title: 'Salons & Studios', desc: 'Keep appointments warm and your quiet moments filled.' },
          { icon: Sparkles, title: 'Local Shops', desc: 'Give regulars a reason to choose you again and again.' }
        ].map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="rounded-2xl border border-border bg-secondary/30 p-6 hover:border-primary/50 transition-colors">
            <Icon size={28} className="text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </main>
    <CTA />
  </>
}

export function AboutPage() {
  return <>
    <PageHero eyebrow="About Regulars" title="Made for operators with good taste." body="We build small, considerate tools for the people who make places worth returning to." />
    <main className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="relative min-h-[400px] md:min-h-[520px] rounded-3xl overflow-hidden">
          <Image src="/images/regulars-team.png" alt="Regulars team" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-5">Made by people who care</h2>
            <p className="text-muted-foreground leading-7">We started Regulars because we got tired of tools that treat customers like numbers. Every product decision starts with one question: would this feel good to receive?</p>
          </div>
          <div className="space-y-5">
            {[
              { title: 'Thoughtful by design', desc: 'Every interaction should respect attention and feel worth opening.' },
              { title: 'Independent at heart', desc: 'We build for real operators, not abstract growth charts.' },
              { title: 'Made to last', desc: 'Simple systems create the strongest habits.' }
            ].map(({ title, desc }, i) => (
              <div key={i} className="flex gap-3">
                <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-3xl bg-secondary/50 p-8 md:p-12 border border-primary/10">
        <h3 className="font-serif text-3xl mb-4">Want to know more?</h3>
        <p className="text-muted-foreground mb-6 max-w-xl">We're always happy to chat about local business, good design, or why we think the next visit matters more than the first.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold hover:opacity-90">Get in touch <ArrowUpRight size={18} /></Link>
      </div>
    </main>
    <CTA />
  </>
}

export function TeamPage() {
  return <>
    <PageHero eyebrow="The people behind Regulars" title="Meet the team." body="Regulars is built by Wayne E Solutions — a small team based in Ludhiana, Punjab, building the quiet system behind the places people keep coming back to." />
    <main className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <div key={m.name} className="rounded-3xl border border-border bg-secondary/30 p-8 text-center hover:border-primary/50 transition-colors">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-2xl">
              {m.initials}
            </div>
            <div className="mt-5 font-serif text-xl">{m.name}</div>
            <div className="mt-1 text-sm leading-6 text-muted-foreground">{m.role}</div>
          </div>
        ))}
      </div>
    </main>
    <CTA />
  </>
}

export function ContactPage() {
  return <>
    <PageHero eyebrow="Book a demo" title="Let's make the next visit easy." body="Tell us about your place. We'll show you how Regulars fits into the rhythm you already have." />
    <main className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <form className="flex flex-col gap-6 rounded-3xl border border-border bg-secondary/30 p-8 md:p-10 h-fit" onSubmit={e => {
          e.preventDefault()
          const form = e.currentTarget
          form.innerHTML = `<div class="min-h-72 flex flex-col justify-center"><div class="mb-5 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg></div><h2 class="font-serif text-3xl mb-2">You're on the list.</h2><p class="text-sm text-muted-foreground">We'll be in touch soon.</p></div>`
        }}>
          <div>
            <label className="text-sm font-semibold block mb-3">Your name</label>
            <input required className="w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-3">Email address</label>
            <input required type="email" className="w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="hello@yourplace.com" />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-3">What kind of place?</label>
            <input required className="w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Café, salon, shop..." />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity">Show me Regulars <ArrowUpRight size={18} /></button>
        </form>
        <div className="relative min-h-[400px] md:min-h-[520px] rounded-3xl overflow-hidden">
          <Image src="/images/regulars-shop.png" alt="Local shop" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-background">
            <Clock size={24} className="mb-3 text-primary" />
            <p className="text-sm opacity-80">Usually replies within one working day.</p>
          </div>
        </div>
      </div>
    </main>
  </>
}

export function LegalPage({ kind }: { kind: LegalKind }) {
  const doc = legalDocs[kind]
  return <>
    <PageHero eyebrow={doc.eyebrow} title={doc.title} body={`Effective ${doc.effectiveDate} · Regulars (a product of Wayne E Solutions)`} />
    <article className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
      <div className="rounded-3xl bg-secondary/50 p-8 md:p-12 border border-border space-y-8">
        <p className="leading-8 text-muted-foreground">{doc.intro}</p>
        {doc.sections.map((section, i) => (
          <div key={i} className={section.heading ? 'border-t border-border pt-8' : ''}>
            {section.heading && <h2 className="font-serif text-2xl md:text-3xl mb-4">{section.heading}</h2>}
            {section.paragraphs.map((p, j) => <p key={j} className="leading-8 text-muted-foreground mb-3 last:mb-0">{p}</p>)}
            {section.bullets && (
              <ul className="mt-3 space-y-2 list-disc pl-5">
                {section.bullets.map((b, k) => <li key={k} className="leading-7 text-muted-foreground">{b}</li>)}
              </ul>
            )}
          </div>
        ))}
        <div className="border-t border-border pt-8">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Questions?</h2>
          <p className="leading-8 text-muted-foreground">Reach out through our <Link href="/contact" className="text-primary hover:underline font-semibold">contact page</Link> or email <a href="mailto:support@wayneesolutions.com" className="text-primary hover:underline font-semibold">support@wayneesolutions.com</a> and our team will help.</p>
        </div>
      </div>
    </article>
  </>
}
