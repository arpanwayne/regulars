'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowRight, Check, Coffee, MessageCircle, QrCode, Sparkles } from 'lucide-react'

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
}

function QRVisual() {
  return (
    <div className="qr-art" aria-label="Illustration of a Regulars QR code invitation">
      <div className="qr-window"><QrCode size={106} strokeWidth={1.4} /><small>SCAN TO JOIN</small></div>
      <span className="qr-dot qr-dot-one" /><span className="qr-dot qr-dot-two" /><span className="qr-dot qr-dot-three" />
      <div className="qr-caption"><MessageCircle size={16} /> <span>Your next visit<br /><b>just got easier.</b></span></div>
    </div>
  )
}

function PhoneVisual() {
  return (
    <div className="phone-wrap" aria-label="Phone conversation showing a helpful Regulars reminder">
      <div className="phone">
        <div className="phone-top"><span>9:41</span><span>● ◔ ▮</span></div>
        <div className="chat-head"><span className="mini-avatar">R</span><span><b>Regulars</b><small>always here</small></span><span className="chat-more">•••</span></div>
        <div className="chat-body"><small className="date-pill">TODAY</small><div className="bubble bubble-in">Hey Maya, it&apos;s been a minute. Fancy your usual?</div><div className="bubble bubble-out">Actually yes. Tomorrow at 10?</div><div className="bubble bubble-in">You&apos;re on. See you then.</div></div>
        <div className="phone-input"><span>Type a message</span><ArrowRight size={15} /></div>
      </div>
      <span className="phone-label label-one">PERSONAL<br /><b>NOT PUSHY</b></span><span className="phone-label label-two">SIMPLE<br /><b>RELEVANT</b></span>
    </div>
  )
}

function Timeline() {
  return <div className="timeline" aria-label="Three step customer return timeline"><div className="timeline-line" /><div className="timeline-step"><span className="timeline-icon"><QrCode size={20} /></span><small>01</small><b>They scan</b><p>One quick moment at the counter.</p></div><div className="timeline-step"><span className="timeline-icon"><MessageCircle size={20} /></span><small>02</small><b>They hear from you</b><p>A useful message, when it matters.</p></div><div className="timeline-step"><span className="timeline-icon timeline-heart">✦</span><small>03</small><b>They come back</b><p>Because you stayed top of mind.</p></div></div>
}

export function RegularsSite() {
  const [sent, setSent] = useState(false)
  const [business, setBusiness] = useState<'restaurant' | 'salon'>('restaurant')

  return <main className="regulars-site">
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> A softer way to grow</p><h1>Your best<br /><em>customers</em><br />are already here.</h1><p className="hero-dek">Regulars helps local businesses stay close to the people who already love what they do. Thoughtful reminders, sent on WhatsApp.</p><div className="hero-actions"><a className="button button-dark" href="#demo">Get started <ArrowRight size={16} /></a><a className="text-link" href="#how-it-works">See how it works <ArrowDownRight size={16} /></a></div></div><div className="hero-art"><div className="sun-disc" /><div className="hero-card"><span className="tiny-label">A little nudge</span><span className="hero-message">Still thinking<br />about that <i>cacio e pepe?</i></span><span className="hero-send"><MessageCircle size={14} /> sent via WhatsApp</span></div><div className="hero-cup">☕</div><div className="hero-table-line" /><span className="art-note">THE GOOD<br /><b>STUFF</b> STAYS.</span></div></section>

    <section className="manifesto"><p className="eyebrow">THE REGULARS WAY</p><h2>Not more noise.<br /><span>More of the right moments.</span></h2><p className="manifesto-copy">The best businesses don&apos;t need to shout. They need a simple way to remember who walks through their door — and a gentle reason for them to return.</p></section>

    <section className="journey section-pad" id="how-it-works"><div className="section-intro"><p className="eyebrow">HOW IT WORKS</p><h2>Three small steps.<br /><em>A lasting habit.</em></h2><p>Regulars turns a great visit into an ongoing relationship, without adding another app to anyone&apos;s life.</p></div><Timeline /></section>

    <section className="split-section peach-section" id="product"><div className="split-copy"><p className="eyebrow">THE PRODUCT</p><h2>Feels like a thoughtful text.<br /><em>Works like a growth engine.</em></h2><p>Meet your new quiet achiever. Regulars gives you the tools to build loyalty naturally, while your customers get messages that feel like they came from you.</p><a href="#demo" className="text-link">Meet Regulars <ArrowRight size={16} /></a></div><PhoneVisual /></section>

    <section className="split-section dark-section"><QRVisual /><div className="split-copy"><p className="eyebrow eyebrow-light">START WITH A SCAN</p><h2>A tiny gesture<br /><em>goes a long way.</em></h2><p>Put your Regulars QR code where the goodbyes happen. Your customer scans, joins in seconds, and you&apos;ve got a direct line to the people who matter most.</p><div className="check-list"><span><Check size={15} /> No app to download</span><span><Check size={15} /> No awkward sign-up</span><span><Check size={15} /> Just your voice, closer</span></div></div></section>

    <section className="business-section section-pad" id="businesses"><div className="section-intro"><p className="eyebrow">MADE FOR THE INDEPENDENT</p><h2>Your place has<br /><em>its own rhythm.</em></h2><p>Regulars adapts to the way your business already works.</p></div><div className="business-toggle"><button className={business === 'restaurant' ? 'active' : ''} onClick={() => setBusiness('restaurant')}>Restaurants & cafés</button><button className={business === 'salon' ? 'active' : ''} onClick={() => setBusiness('salon')}>Salons & studios</button></div><div className="business-card"><div className={`business-art ${business}`}><div className="business-sun" /><span className="business-stamp">{business === 'restaurant' ? <>GOOD FOOD<br />GOOD PEOPLE</> : <>TAKE<br />YOUR TIME</>}</span><div className="business-object">{business === 'restaurant' ? <Coffee size={112} strokeWidth={1.4} /> : '✺'}</div></div><div className="business-card-copy"><p className="eyebrow">{business === 'restaurant' ? 'FOR RESTAURANTS & CAFÉS' : 'FOR SALONS & STUDIOS'}</p><h3>{business === 'restaurant' ? 'Bring back the table people talk about.' : 'Make every appointment feel personal.'}</h3><p>{business === 'restaurant' ? 'Remind guests about the dish they loved, the corner table they claimed, and the next evening they haven&apos;t planned yet.' : 'Help clients remember their next visit, fill a quiet spot, and keep the relationship warm between appointments.'}</p><a className="text-link" href="#demo">Explore for {business === 'restaurant' ? 'restaurants' : 'salons'} <ArrowRight size={15} /></a></div></div></section>

    <section className="about-strip" id="about"><div className="about-mark"><Sparkles size={23} /></div><div><p className="eyebrow">BUILT BY WAYNE E SOLUTIONS</p><h2>Technology with<br /><em>good manners.</em></h2></div><p>We make digital tools for the people who make places worth returning to. Regulars is our belief that growth can feel more like care.</p></section>

    <section className="cta-section" id="demo"><div className="cta-inner"><p className="eyebrow eyebrow-light">READY WHEN YOU ARE</p><h2>Keep the good<br /><em>going.</em></h2>{sent ? <div className="success-message"><Check size={18} /> Thanks — we&apos;ll be in touch soon.</div> : <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}><input aria-label="Your email address" type="email" placeholder="Your email address" required /><button className="button button-peach" type="submit">Show me Regulars <ArrowRight size={16} /></button></form>}<p className="fine-print">No pressure. No pitch deck. Just a conversation.</p></div><span className="cta-scribble">good things<br /><b>come back.</b></span></section>

  </main>
}

export default RegularsSite

/* Keep the visual system in app/globals.css so the page can stay component-focused. */

