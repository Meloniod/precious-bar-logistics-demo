'use client';

import Link from 'next/link';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, CircleDot, Compass, LockKeyhole, Network, PackageCheck, ShieldCheck, Truck, Users, WalletCards } from 'lucide-react';

const steps = [
  { n: '01', title: 'Tell us what you need', text: 'Share your role, route, handling needs and operating requirements. Keep sensitive shipment details out of the public demo.' },
  { n: '02', title: 'See potential fit', text: 'Explore illustrative matches by capability, geography and service model before starting a qualified introduction.' },
  { n: '03', title: 'Move to due diligence', text: 'Confirm identities, licences, provenance, insurance, security protocols and commercial terms directly before any engagement.' },
];

export default function Home() {
  return <main>
    <header className="wrap flex h-[78px] items-center justify-between border-b border-[#dfe3da]">
      <Link href="/" className="flex items-center gap-3" aria-label="Aurum Link home">
        <span className="grid h-10 w-10 place-items-center bg-[#173d31] text-[#c6a46b] text-lg font-bold">A</span>
        <span><span className="block text-[15px] font-bold tracking-[.14em]">AURUM LINK</span><span className="block mt-0.5 text-[9px] tracking-[.2em] text-[#69776e]">PRECIOUS METALS NETWORK</span></span>
      </Link>
      <nav className="hide-mobile flex items-center gap-8 text-[12px] font-semibold text-[#45564b]">
        <a href="#how-it-works" className="hover:text-[#173d31]">How it works</a><a href="#network">Who it serves</a><Link href="/matches">Explore sample matches</Link>
      </nav>
      <Link href="/join" className="btn btn-dark !px-4 !py-3">Join the network <ArrowRight size={15}/></Link>
    </header>

    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="wrap relative grid min-h-[620px] items-center gap-10 py-16 md:grid-cols-[1.04fr_.96fr] md:py-24">
        <div className="max-w-[610px]">
          <div className="eyebrow mb-7">A better way to make the connection</div>
          <h1 className="text-[44px] font-medium leading-[1.06] tracking-[-.055em] sm:text-[58px] md:text-[68px]">Where precious metals meet the <span className="text-[#557064]">right logistics.</span></h1>
          <p className="mt-7 max-w-[490px] text-[16px] leading-7 text-[#59665d]">A professional connection point for precious metal owners and specialist logistics providers. Find a potential fit, start a conversation and move forward with confidence.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link className="btn btn-dark" href="/join?side=owner">I own precious metals <ArrowRight size={16}/></Link><Link className="btn btn-light" href="/join?side=provider">I provide logistics <ArrowUpRight size={15}/></Link></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-semibold text-[#66736a]"><span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#557064]"/> Compliance-first introductions</span><span className="flex items-center gap-2"><LockKeyhole size={14} className="text-[#557064]"/> No public shipment details</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[490px]">
          <div className="absolute -right-2 top-4 h-36 w-36 rounded-full border border-[#c6a46b]/50" /><div className="absolute -right-7 top-11 h-36 w-36 rounded-full border border-[#c6a46b]/30" />
          <div className="relative border border-[#d9ded5] bg-[#fffefa] p-5 shadow-[0_24px_80px_rgba(23,61,49,.08)] sm:p-7">
            <div className="flex items-start justify-between border-b border-[#e4e6de] pb-5"><div><div className="eyebrow">Network preview</div><h2 className="mt-2 text-xl font-semibold">The right fit starts here.</h2></div><div className="grid h-11 w-11 place-items-center bg-[#e7eee6] text-[#173d31]"><Network size={21}/></div></div>
            <div className="my-6 grid grid-cols-[1fr_40px_1fr] items-center gap-2">
              <div className="border border-[#dce3d9] bg-[#f7f8f3] p-4"><div className="grid h-9 w-9 place-items-center bg-[#d8e6d9] text-[#173d31]"><PackageCheck size={18}/></div><p className="mt-4 text-sm font-bold">Metal owner</p><p className="mt-1 text-[11px] leading-4 text-[#68766b]">Supply, destination & handling needs</p></div>
              <div className="grid place-items-center text-[#b18d52]"><ArrowRight size={23}/></div>
              <div className="border border-[#dce3d9] bg-[#f7f8f3] p-4"><div className="grid h-9 w-9 place-items-center bg-[#eee5d4] text-[#75582b]"><Truck size={18}/></div><p className="mt-4 text-sm font-bold">Logistics partner</p><p className="mt-1 text-[11px] leading-4 text-[#68766b]">Route, capability & service model</p></div>
            </div>
            <div className="flex items-center gap-3 bg-[#173d31] p-4 text-white"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25"><Check size={17} className="text-[#d8c08f]"/></div><div><p className="text-sm font-semibold">A qualified introduction</p><p className="mt-1 text-[11px] text-white/70">Fit first. Verification before engagement.</p></div><ArrowDownRight className="ml-auto text-[#c6a46b]" size={19}/></div>
            <p className="mt-4 text-[10px] leading-4 text-[#81877f]">Illustrative concept only. Sample profiles are not verified providers or available capacity.</p>
          </div>
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 border border-[#e0e4dc] bg-white px-4 py-3 shadow-lg sm:flex"><span className="grid h-8 w-8 place-items-center bg-[#f0e8d8] text-[#8b6b36]"><Compass size={16}/></span><span><b className="block text-xs">Better-aligned introductions</b><small className="text-[10px] text-[#738076]">Route · service · requirements</small></span></div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#e0e4dc] bg-[#eef0e8] py-7">
      <div className="wrap grid gap-5 sm:grid-cols-3"><div className="flex items-center gap-3"><ShieldCheck className="shrink-0 text-[#557064]" size={20}/><div><p className="text-sm font-bold">Built around trust</p><p className="mt-1 text-xs text-[#69766d]">Verification before introductions progress</p></div></div><div className="flex items-center gap-3"><Network className="shrink-0 text-[#557064]" size={20}/><div><p className="text-sm font-bold">Both sides of the network</p><p className="mt-1 text-xs text-[#69766d]">Supply needs meet specialist capability</p></div></div><div className="flex items-center gap-3"><CircleDot className="shrink-0 text-[#557064]" size={20}/><div><p className="text-sm font-bold">Clearer requirements</p><p className="mt-1 text-xs text-[#69766d]">A structured start to a complex conversation</p></div></div></div>
    </section>

    <section id="network" className="wrap py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><div className="eyebrow">Two sides. One connection point.</div><h2 className="mt-5 max-w-[400px] text-4xl font-medium leading-tight tracking-[-.04em]">A network that works both ways.</h2></div><p className="max-w-[540px] text-sm leading-7 text-[#657167]">Whether you have precious metal that needs secure, compliant movement or you operate a specialist logistics business, the first step is to make your requirements clear and discover where there may be a fit.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="card p-7 sm:p-9"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center bg-[#e4ece2] text-[#173d31]"><WalletCards size={22}/></span><span className="text-xs font-bold tracking-widest text-[#8a7959]">01 / OWNERS</span></div><h3 className="mt-7 text-2xl font-semibold">You have a shipment to move.</h3><p className="mt-3 text-sm leading-6 text-[#66736a]">Describe your organisation, metal category, broad route, timing and service needs. We help identify the kind of logistics partner worth speaking to.</p><ul className="mt-6 space-y-3 text-sm text-[#435348]">{['Share your operating requirements','Find relevant provider capabilities','Request a structured introduction'].map(x=><li key={x} className="flex items-center gap-2"><Check size={15} className="text-[#557064]"/>{x}</li>)}</ul><Link href="/join?side=owner" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#173d31]">Join as a metal owner <ArrowRight size={16}/></Link></div>
        <div className="card p-7 sm:p-9"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center bg-[#f0e8d8] text-[#8b6b36]"><Truck size={22}/></span><span className="text-xs font-bold tracking-widest text-[#8a7959]">02 / PROVIDERS</span></div><h3 className="mt-7 text-2xl font-semibold">You have logistics capability.</h3><p className="mt-3 text-sm leading-6 text-[#66736a]">Introduce your company, coverage, specialist handling capabilities and operating credentials to connect with relevant enquiries.</p><ul className="mt-6 space-y-3 text-sm text-[#435348]">{['Show your service coverage','Describe specialist capabilities','Receive better-qualified enquiries'].map(x=><li key={x} className="flex items-center gap-2"><Check size={15} className="text-[#557064]"/>{x}</li>)}</ul><Link href="/join?side=provider" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#173d31]">Join as a logistics provider <ArrowRight size={16}/></Link></div>
      </div>
    </section>

    <section id="how-it-works" className="bg-[#173d31] py-20 text-white md:py-24"><div className="wrap"><div className="eyebrow !text-[#d6c08f]">A considered process</div><div className="mt-5 grid gap-8 md:grid-cols-[.7fr_1.3fr]"><h2 className="max-w-[340px] text-4xl font-medium leading-tight tracking-[-.04em]">From first details to a better introduction.</h2><div className="grid gap-7 sm:grid-cols-3">{steps.map(s=><div key={s.n} className="border-t border-white/20 pt-5"><div className="text-xs tracking-[.18em] text-[#d6c08f]">{s.n}</div><h3 className="mt-5 text-lg font-semibold">{s.title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{s.text}</p></div>)}</div></div><div className="mt-12 border border-white/20 bg-white/[.04] p-5 sm:flex sm:items-center sm:justify-between sm:p-7"><div><p className="font-semibold">See how the matching experience could work.</p><p className="mt-1 text-sm text-white/65">Explore fictional sample profiles before sharing your own requirements.</p></div><Link href="/matches" className="btn btn-brass mt-4 sm:mt-0">Explore sample matches <ArrowRight size={16}/></Link></div></div></section>

    <section className="wrap py-20 md:py-24"><div className="grid gap-10 md:grid-cols-2 md:items-center"><div><div className="eyebrow">Responsible by design</div><h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-.04em]">Trust is a process, not a tagline.</h2><p className="mt-4 max-w-[510px] text-sm leading-7 text-[#657167]">Precious metal movement requires rigorous due diligence. Aurum Link is a connection concept—not a carrier, custodian, broker of record, verification authority or guarantee of service. Each party must independently verify legal ownership and provenance, licences, insurance, security arrangements and applicable legal requirements.</p></div><div className="space-y-3">{[{icon:ShieldCheck,title:'Provenance & lawful ownership',text:'Establish source, ownership and transaction legitimacy.'},{icon:LockKeyhole,title:'Confidentiality by default',text:'Keep exact values, serials, routes and security details off public forms.'},{icon:Users,title:'Independent due diligence',text:'Verify each counterparty and agree terms before proceeding.'}].map(i=><div key={i.title} className="flex gap-4 border-b border-[#dfe3da] py-4"><div className="grid h-10 w-10 shrink-0 place-items-center bg-[#e4ece2] text-[#173d31]"><i.icon size={19}/></div><div><h3 className="text-sm font-bold">{i.title}</h3><p className="mt-1 text-xs leading-5 text-[#69766d]">{i.text}</p></div></div>)}</div></div></section>

    <section className="wrap pb-20"><div className="relative overflow-hidden bg-[#e7e9df] p-7 sm:p-12"><div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#c6a46b]/60"/><div className="relative max-w-[650px]"><div className="eyebrow">Start with the right details</div><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] sm:text-4xl">You bring the requirement. We help start the right conversation.</h2><p className="mt-4 text-sm leading-6 text-[#66736a]">Join as an owner or a logistics provider and help shape a more connected specialist network.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/join?side=owner" className="btn btn-dark">Join as an owner <ArrowRight size={15}/></Link><Link href="/join?side=provider" className="btn btn-light">Join as a provider <ArrowRight size={15}/></Link></div></div></div></section>

    <footer className="border-t border-[#dfe3da] py-7"><div className="wrap flex flex-col gap-4 text-xs text-[#758077] sm:flex-row sm:items-center sm:justify-between"><div><span className="font-bold tracking-[.14em] text-[#173d31]">AURUM LINK</span><span className="ml-3">Precious metals logistics network concept</span></div><div className="flex gap-5"><Link href="/matches" className="hover:text-[#173d31]">Sample matches</Link><Link href="/join" className="hover:text-[#173d31]">Join the network</Link><Link href="/portal" className="hover:text-[#173d31]">Demo lead desk</Link></div></div><div className="wrap mt-4 max-w-none text-[10px] leading-5 text-[#8a928a]">DEMO NOTICE: This prototype uses fictional sample profiles and browser-local form storage. It does not verify participants, make bookings, arrange transport, handle funds or precious metals, or provide legal, security or compliance services. Do not submit sensitive shipment or personal information.</div></footer>
  </main>;
}
