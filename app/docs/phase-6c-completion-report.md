# Phase 6C — Corporate completion, evidence integrity, residual routes

Continues `phase-6-production-report.md`. Nothing was reset; this is the same
working tree Phase 6 / 6A / 6B built.

The headline of this phase is not layout. It is that **a rendered content audit
that clicks things open found seventeen distinct fabrications that six previous
audits had walked past**, several of them on the two pages a diligence reader
opens first.

---

## 1 · The scanner, and why the previous "clean" result was wrong

`scripts/check-content.mjs` is new and committed. It renders all 29 routes,
**opens every collapsed disclosure**, reads `document.body.innerText`, and
requires that each candidate claim it finds is classified by a human in
`docs/content-integrity-register.md`.

Three bugs in its own first drafts are worth recording, because each one
produced a *false pass*:

| Bug | Symptom | Consequence if unfixed |
|---|---|---|
| Clicked every `[aria-expanded]`, including header nav | One click hit a link; every route then reported the text of `/solutions` | The scan would have audited one page 29 times and called the site clean |
| Read `innerText` once per pass | The FAQ accordion is single-open, so only the last answer was ever read | SOC 2 / ISO 27001 would still be undetected |
| No geography detector | "West Africa — Active — Nigeria, Ghana, Côte d'Ivoire" tripped nothing | A false deployment claim would have shipped |

A scanner that silently audits the wrong thing is worse than no scanner. The
first of those bugs is precisely how the previous session's run reported "no
suspect claims" over a page carrying five invented job vacancies.

**It does not decide what is true.** It finds claim-shaped text and forces a
human classification. That distinction is the design.

---

## 2 · Content integrity — what was found

Everything below was rendering in production-shaped output when this phase
began. Full detail, with provenance, in `docs/content-integrity-register.md`.

### Certifications and security (the most serious)

* **SOC 2 and ISO 27001** claimed on `/platform/security`, inside a collapsed
  FAQ answer: *"Heraja follows industry best practices including SOC 2, ISO
  27001, GDPR, and POPIA compliance frameworks."* None is held. The hedge
  ("follows … including") does not survive a procurement team asking for the
  report.
* **Multi-factor authentication** — claimed twice. Not implemented.
* **End-to-end encryption** — claimed on two pages. Untrue by definition: the
  platform reads the records it stores, which is what makes verification and
  audit possible.
* **"Built-in compliance for GDPR, POPIA"** — no assessment has been carried
  out against either regime.

The page now states what exists (role-based permissions checked per action, a
per-tenant boundary enforced at the query layer, an attributed audit trail, TLS
in transit) and states plainly that no certification is held. The FAQ answer to
"what certifications do you hold?" is now "None."

### Infrastructure claims that described a different system

* **"deployed across multiple cloud regions … auto-scaling, and high
  availability"** (`/resources/faq`) — the production estate is a single
  deployment.
* **"containers, microservices and auto-scaling from day one"**
  (`/platform/architecture`).
* **"Multi-Region Deployment — regional data residency"** (`/platform`) —
  replaced with multi-tenancy, which is real.

### A developer platform that does not exist

`/platform/apis` claimed official SDKs, GraphQL, an isolated sandbox,
interactive documentation, OAuth 2.0, usage analytics and dedicated support.
None is built, and the hero's "View Documentation" button pointed back at the
same page because `/documentation` was removed in Phase 2. This is the most
checkable class of false claim on the site — a developer searches for the SDK,
finds nothing, and revises their view of everything else. Rewritten to the API
that exists, with the absences stated.

### Commercial claims implying a customer base

* **"enterprise clients"** on four pages, plus the ecosystem explorer.
* **"Enterprise Client"** as the badge on `/evidence/zimo-clan` — the one thing
  a wholly-owned subsidiary is not.
* **"HAOS is used by … governments, cooperatives, agribusinesses, financial
  institutions … and enterprise clients"** — rewritten to who it is *for*.
* **`/evidence`** was titled "The Heraja Ecosystem" and opened *"Every
  enterprise client, technology partner, and pilot program running on Heraja"*,
  with cards for **Partners**, **Implementation Stories** ("Real deployment
  outcomes and metrics") and **Regional Programs**. None exists. All three
  linked to `/evidence` itself, which is why the link checker passed them. The
  closing CTA was "Become a Partner", pointing at the same page.
* **`/solutions`** carried an "Enterprise" card duplicating Agribusiness, and a
  "Technology Partners" card for an audience with no page. Five approved
  audiences remain.

### Geographic coverage

`/platform/roadmap` read **"West Africa — Active — Nigeria, Ghana, Côte
d'Ivoire"**, beside two "Planned" regions naming six more countries. Operations
are in Nigeria. The countries are kept — a roadmap may describe intent — but
under **Intended**, with "No deployment and no agreement in place" and
"Direction of travel, not a commitment" written on the page.

### Product claims contradicting the product

"Real-time production visibility" on `/platform/farm-intelligence` and
`/platform/haos`, on pages that also state reporting is twice daily. The
product is right; the marketing copy was wrong. Retained only for Logistics
position tracking, where it is accurate — and the standing prohibition on ETA
and traffic claims is unaffected.

### Invented applications, hidden behind a click

The interactive ecosystem explorer on `/` and `/platform/architecture` listed
**Marketplace Portal · Operations Dashboard · Buyer Portal · Analytics
Console** as "Enterprise Applications". None exists. They were only visible
after expanding a panel, which is why every earlier audit missed them. The
component is deleted: it also rendered a five-layer architecture directly below
a four-tier diagram of the same system, so the architecture page disagreed with
itself.

The architecture diagram itself named **Analytics** as an application and
omitted **e-Chimusika** — a product that does not exist listed in place of one
that does, on the page an evaluator opens to find out what is built.

---

## 3 · Careers — the decision, stated explicitly

Two rounds of fabrication have now been removed from this page.

**Five invented vacancies** (removed in the previous session) — "Senior
Platform Engineer — Lagos / Remote — Full-time" and four like it, each with an
Apply button. Not reintroduced, and no replacements invented.

**Six benefits** — `Competitive compensation · Health insurance · Flexible
working arrangements · Professional development budget · Meaningful equity
participation · Annual team retreats`.

These are classified **NEEDS VERIFICATION** (CI-063 → CI-068), not deleted and
not confirmed. They are preserved verbatim in the register and in a comment in
`Careers.tsx`, and **withheld from the public page** until someone confirms
them. The reasoning:

* Plausible is not verified. Nobody supplied these.
* "Health insurance" and "meaningful equity participation" are employment
  terms. A candidate forms an expectation about an offer from them, and the
  company has never agreed to it.
* Restoring them is a paste. Retracting a benefit someone accepted an interview
  over is not.

**What was not written instead:** "no current openings" and "no benefits" are
equally unsupported assertions. Even "We're hiring", which stood in the H1
block, claims more than is known. The page now says only what is true —
applications are read, terms are discussed directly — and gives a real way in.

---

## 4 · Corporate

| Route | State | Notes |
|---|---|---|
| `/` | Complete | §2 The problem and §3 HAOS implemented to Phase 5 §4.2 — see below |
| `/company/about` | Complete | Rebuilt on `ProseTemplate`. Value cards removed |
| `/company/careers` | Complete | See §3 above |
| `/company/contact` | Complete | Verified: six states, preserved input, fallback mailto |
| `/resources/corporate-brochure` | Complete, correctly degraded | Contents list removed |
| `/company/leadership` | Correctly withheld | Self-publishing, out of the sitemap |

### Homepage §2 / §3

Four sections stood where the approved order puts two: a metric strip, a
positioning banner, "Why Infrastructure, Not Software", and the ecosystem
explorer. The page opened with three assertions about Heraja before it had
described a problem.

Now, per Phase 5 §4.2: **§2 The problem** (charcoal, reading container, exactly
two sentences, nothing to look at — the one moment the page asks the reader to
think) flowing into **§3 HAOS** (charcoal continuing, visual container, the
architecture diagram, link to `/platform/haos`). One charcoal band with a change
of register inside it, which is the Phase 4 three-band budget.

No statistic was invented to make the problem look larger.

### The architecture diagram

Rewritten to Phase 5 §9.1: semantic HTML and CSS Grid, four tiers distinguished
by **shape rather than colour** (filled block · dense chips · dashed spanning
bands · solid linked cards), rectangles not circles, nothing animated, brand
green marking exactly one thing. Tone-aware so it works on the homepage's
charcoal band and the light `/platform` pages. Captioned, per the rule that a
diagram which cannot be captioned with what it explains is decoration.

### Brochure

Two states and no third, unchanged. What went was the **seven-item "What's
Inside" list describing the chapters of a PDF nobody has written**. It is a
fabrication that reads as administrative detail rather than as a claim, which is
why it survived. Replaced with links to material that exists and can be opened
now.

---

## 5 · Evidence

| Route | State |
|---|---|
| `/evidence` | Rebuilt around the six evidence categories |
| `/evidence/zimo-clan` | Rebuilt — disclosure is now structural |
| `/evidence/pilot` | Rebuilt to Phase 5 §8.3 |

**`/evidence`** now sorts what exists by *what kind of evidence it is* —
related-party deployment · pilot in progress · the software itself ·
architecture · roadmap — so a reader can weigh each piece rather than take the
set on trust. It closes with **"What this site does not evidence"**: no
independent validation, no customer references, no outcome statistics, no
certifications. An evaluator establishes that list anyway; publishing it is
cheaper for both sides.

**`/evidence/zimo-clan`** — the relationship is the eyebrow, the first line
under the H1, and a bordered diagram (Heraja → HAOS → Zimo Clan, ownership edge
labelled) that the reader passes before any description of the deployment. No
metrics. The removed figures (`500+ farms`, `₦2B+`, `24hrs`) are **not replaced
with other numbers** — the replacement for an unverifiable figure is a checkable
sentence. Two panels of equal weight: what this shows, and what it does not.

The four product names — Animal Tracker · Farmer Groups · Farm Logistics · Sell
& Earn — are **VERIFIED** against Zimo Clan's own product source
(`zimo-farmers/src/components/sections/FlowSection.tsx`), and attributed to Zimo
Clan on the page.

**`/evidence/pilot`** follows §8.3: sectors · what is tested · method · what is
measured · current status · **what is not yet known**. The last section has the
same container, heading level and type as the others, because shrinking it would
turn it into a disclaimer. Current status is deliberately structural — the
pilot is running, and no results are published, which is a deliberate omission
rather than an oversight.

Removed: "View Regional Programs" (a button label for a thing that does not
exist), an invitation to "join the pilots today" that nobody authorised, and the
stale `Ecosystem /` eyebrow from the pre-Phase-1 IA.

---

## 6 · Residual routes

All 29 checked. Every one is either complete or explicitly blocked below.

| Route | State |
|---|---|
| `/platform` | Corrected — 5 unsupported claims removed |
| `/platform/haos` | Corrected — acronym unified, roster claim and connector claim removed |
| `/platform/architecture` | Rebuilt — explorer removed, diagram rewritten, React duplicate-key collision fixed |
| `/platform/security` | Rebuilt — see §2 |
| `/platform/apis` | Rebuilt — see §2 |
| `/platform/innovation` | Section heading added (the grid had none) |
| `/platform/roadmap` | Corrected — geography, CTA, badge contrast |
| `/platform/farm-intelligence` | Corrected — "real-time" |
| `/platform/marketplace` · `/platform/echimusika` · `/platform/logistics` | Structurally correct; **content dependency stands** — see §11 |
| `/solutions` | Corrected — 7 cards → the 5 approved audiences |
| 5 × solution pages | Corrected — step-number contrast, heading level, copy |
| `/company/privacy` · `/company/terms` | Privacy security paragraph corrected |
| `/resources/faq` | Rebuilt — 4 of 8 answers were false |

**Removed routes stayed removed.** No `/technology`, `/verification`,
`/coordination`, `/supply-chain`, `/identity`, `/farmers`, `/insights`,
`/article` or `/documentation` was reintroduced.

### Financial Institutions path — verified end to end

Homepage audience router → `/solutions/financial-institutions` → CTA →
`/company/contact?enquiry=financial-institution` with the enquiry type
preselected. Present in the rendered DOM and confirmed by navigation at all five
viewports.

---

## 7 · Accessibility

WCAG 2.2 AA. Verified across 30 routes × 5 viewports.

**Fixed this phase:**

* **Heading hierarchy** — `h2 → h4` skips in `PlatformTemplate` and
  `SolutionTemplate` workflow steps (affecting ~20 routes); `h1 → h3` from the
  footer's column labels on any page whose only heading is the `h1` (the 404);
  a section with no heading at all on `/platform/innovation`.
* **Contrast 1.83:1** — the "Current" status badge on `/platform/roadmap`,
  `#F99D1C` on a 10% tint of itself. Now uses the `accent-warm` token
  (`#9A5B00`) that exists for exactly this.
* **Contrast 3.58:1** — challenge step numbers in `SolutionTemplate`,
  `#7AC142` on a tinted charcoal. Now white, at 7.88:1.

`#3A7F27` (light grounds) and `#7AC142` (dark surfaces) are unchanged.

**Two of the QA harness's own findings were its bugs, not the site's**, and are
recorded here because both would have caused wrong work:

* It reported 1.26:1 failures on five solution pages. It was reading
  `rgba(255,255,255,0.05)` — a 5% white veil over charcoal — as *white*. It now
  composites alpha through the ancestor chain.
* It reported a 16–64px prose misalignment on every page with prose. It was
  comparing a container inside a padded section against the hero's container,
  which has no section padding. Comparing content box to content box:
  **0px delta at every breakpoint.**

---

## 8 · Responsive and visual QA

**150/150** route × viewport (29 approved routes + 404, at 390 / 768 / 1280 /
1600 / 1920).

Per route/viewport: exactly one `h1`, no horizontal scroll, no element
overflowing outside a scroll region, one `main` landmark, no broken images, no
`img` without `alt`, no crowded sub-24px targets, heading hierarchy, composited
contrast, prose alignment, and no console errors.

**Diagnostic overflow pass (§42):** 145 route × viewport checks run with
non-essential `overflow-hidden` stripped — the technique that exposed the
clipped homepage H1 in Phase 3.5, where `scrollWidth === clientWidth` was
satisfied while text was being cut. **No content clipped.**

Two categories of apparent overflow at 390 were confirmed as intentional scroll
regions, not clipping: the product-evidence snap-scroll gallery (Phase 5 §4.5
specifies ~1.15 cards) and the breadcrumb, both inside `overflow-x: auto`.

**Visually inspected** at 1600/1920 and 390: `/`, `/company/about`,
`/company/careers`, `/evidence`, `/evidence/zimo-clan`,
`/platform/architecture`, `/platform/security`.

That inspection found one thing the automated checks could not: the audience
router and the closing CTA render at `opacity: 0` until an IntersectionObserver
fires. **A real visitor scrolling normally does see them** — that was checked
directly and the observer works, so this was not a live defect. But Phase 5 §4.6
rules out the scroll-reveal chain down sections 2–9, and it had never been
implemented. The homepage now renders both immediately. Other pages keep the
reveal: §4.6 is written about the homepage, and changing 25 other pages is wider
than the rule asks.

---

## 9 · Technical QA

| Check | Result |
|---|---|
| TypeScript | Clean |
| Production build | Passes |
| Route × viewport | 150/150 |
| Diagnostic overflow | 145 checks, 0 clipped |
| Dead internal links | 0 (267 references, 62 files) |
| Redirects | 30 permanent, no loops, no chains, every destination resolves |
| Sitemap | 28 routes; leadership correctly omitted |
| Console errors | 0 |
| Content integrity | 62 candidates: 54 approved/verified · 7 roadmap · 1 needs verification · **0 unsupported · 0 unclassified** |
| Evidence ordering | `dashboard → reports → livestock`, `adjacent=false` on both galleries |
| Screenshot integrity | All 10 product screenshots byte-identical to `HEAD` |

The 4 remaining link-checker notes are navigation entries pointing at
`/company` and `/resources`, which 301 to their destinations. Intentional: they
are section parents in the nav, and the redirect is the mechanism.

---

## 10 · Performance

| Asset | Raw | Gzipped |
|---|---|---|
| `index.js` | 429.4 kB | 136.6 kB |
| `index.css` | 43.8 kB | 8.1 kB |
| Product screenshots (10) | 1.75 MB | unchanged — byte-identical |

**Against the measured start of this phase** (433.4 kB / 138.1 kB, taken from
the first build of the session): **−4.0 kB raw, −1.5 kB gzipped.**

Against the ~423.2 kB / 134.9 kB figure quoted in the brief: +6.2 kB / +1.7 kB.
That earlier figure could not be reproduced by building this tree, so both
comparisons are given rather than picking the flattering one.

Deleting `EcosystemExplorer`, `AnimatedCounter` and `MetricCard` roughly offset
the new `ArchitectureDiagram` and `ProseTemplate`. No dependency was added.

---

## 11 · Genuine blockers

* **`/platform/marketplace`, `/platform/echimusika`, `/platform/logistics`** —
  structurally correct on the 6A template, but the per-audience content the
  template accepts is not written. Filling it requires product-verified copy;
  inventing it is what this phase exists to undo.
* **No generated imagery was produced.** Optional under §36. The site's whole
  argument is that it shows real software, and contextual stock-style imagery
  would sit oddly beside "no customer logos, no testimonials". Worth revisiting
  as a deliberate art-direction decision rather than as filler.

## 12 · Needs company confirmation

| ID | What | Why it is blocked |
|---|---|---|
| CI-063 → CI-068 | The six Careers benefits | Employment terms. Withheld, not deleted. See §3 |
| CI-025 | "Founded in Lagos, Nigeria" | The company's own pre-existing copy. Kept and flagged — deleting where a company was founded asserts something too |
| — | Leadership | Still unpublished. Adding people in the HAOS admin turns the page, footer link and sitemap entry on together |
| — | Corporate brochure PDF | Page degrades correctly to a request path |
| — | Social URLs, contact endpoint | Admin-managed, unchanged from Phase 6 |
| — | Real operating figures for Zimo Clan | Only if attributable, and phrased as Phase 1 §9 requires: "Zimo Clan achieved X on HAOS", never "Heraja facilitated X" |
| — | Authenticated captures for Marketplace, e-Chimusika, Logistics | Blocks §11 |
