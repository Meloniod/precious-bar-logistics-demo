# Aurum Link — Precious Metals Logistics Network

A polished conversion-oriented demo for a two-sided network concept connecting precious metal owners with specialist logistics providers.

## Product positioning

Aurum Link is positioned as a **professional matching and introduction layer**, not as a carrier, custodian, dealer, security operator or verification authority. The business model to validate is a transparent **facilitation / introduction fee** for legitimate, verified counterparties—not “fencing”, a term commonly associated with handling stolen goods.

## Demo routes

- `/` — public landing page and conversion CTAs.
- `/join?side=owner` — owner interest form.
- `/join?side=provider` — logistics-provider interest form.
- `/matches` — interactive sample matching based on broad category, coverage and service overlap.
- `/portal` — browser-local lead desk with status management and CSV export.

## Run locally

```bash
npm install
npm run dev
```

## Demo limitations

- All sample provider names and profiles are fictional.
- Signup entries are stored in the current browser's localStorage under `aurum-link-leads-v1`; no server, database, email, WhatsApp or CRM is connected.
- The lead desk is not authenticated. Do not use it with real confidential or sensitive information.
- The sample matcher is a simple illustrative rules-based score; it does not verify providers, credentials, licences, insurance, legal ownership, provenance, availability or suitability.
- The demo does not book transport, handle funds or metals, provide security advice, or guarantee an introduction or service.
- No real client, partner, transaction, route, performance, compliance or security claims are made.

## Before production

1. Validate the business model and willingness to pay on both sides of the market.
2. Define the fee model transparently (for example, a disclosed introduction fee, subscription or success fee), including who pays, when it is earned, refunds and conflicts of interest. Obtain appropriate legal/tax advice.
3. Establish onboarding and independent verification procedures for legal entity, beneficial ownership, licences, insurance, source/provenance, sanctions screening where applicable, and lawful trade/transport documentation.
4. Implement server-side storage (e.g. PostgreSQL/Supabase), authentication, role-based access, audit logging, access controls, backups, retention/deletion policies, consent records and privacy notices aligned with applicable South African POPIA requirements and other relevant laws.
5. Add abuse/spam protection, secure email notifications, operational monitoring and a documented incident response process.
6. Have qualified legal, security, insurance and compliance professionals review the service before facilitating real-world introductions or shipments.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, Lucide icons.
