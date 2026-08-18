# Phase 3.5 — Production Visual Audit

Audit of the rendered production build against the approved Phase 1 positioning,
Phase 2 information architecture and Phase 3 UX architecture.

**Method.** The built site was served and rendered at 390 / 430 / 768 / 1280 /
1440 / 1920 across 14 routes, above-the-fold and full-page. Findings come from
inspecting what a visitor sees, plus measurement of the rendered DOM. Source was
read only to locate causes.

**Headline conclusion.** Phase 3 restructured the *routes* correctly and left the
*homepage content* expressing the pre-Phase-1 architecture. Navigation, route
tree, redirects and accessibility all hold. The homepage does not.

---

## Specification conflicts found (not silently resolved)

| # | Conflict | Resolution taken |
|---|---|---|
| C1 | The Phase 3.5 brief lists `/company`, `/platform/ecosystem` and "case-study routes" as routes to audit. None exist — Phase 1 removed or merged them. | Audited the real 29-route tree, as the brief's own instruction directs. No routes added. |
| C2 | Phase 1 §13 defines a nine-section homepage hierarchy. The implemented homepage has a different nine sections. | Recorded as P0-2. Not silently rewritten — see "Deferred" for the part that exceeds Phase 3.5. |

---

## Defect register

### P0-1 · Homepage H1 is clipped at mobile widths

```
ID                 P0-1
Page               / (and every page using .text-display in a grid)
Viewport           390, 430
Category           Responsive / layout
Severity           P0
```

**Observed.** At 390px the H1 content box measures L=16 → R=394 inside a 390px
viewport. The word "Infrastructure" runs to the viewport edge with no gutter and
is visually cut. The grid track is correctly 358px; the grid *item* is 378px.

**Root cause.** CSS Grid items default to `min-width: auto`, which refuses to
shrink below the content's min-content width. The longest word in the H1 at 36px
Syne is ~378px, so the item expands past its track. This also explains why the
`overflow-wrap: break-word` added in Phase 4 never fired — grid widened the
available space, so the word never needed to break.

**Why the automated tests missed it.** The hero carries `overflow-hidden` (added
for the decorative background blurs). That clips the overrun, so
`scrollWidth === clientWidth` is satisfied and the Phase 4 overflow check passes
while the text is being cut.

**Why it matters.** Phase 3 mandates mobile-first and no clipped content. This is
the first thing a mobile visitor sees.

**Requirement affected.** Phase 3 mobile-first; Phase 2 responsive system.

**Correction.** `min-w-0` on the hero grid item.

**Status.** Fixed · **Verified.** Yes — re-measured at 390/430.

---

### P0-2 · Homepage does not implement the approved Phase 1 §13 hierarchy

```
ID                 P0-2
Page               /
Viewport           all
Category           Information architecture / positioning
Severity           P0
```

**Observed.** Phase 1 §13 specifies: Proposition · The problem · HAOS ·
Applications · **Product evidence** · Who it is for · Proof · Technology & trust ·
CTA. The rendered page is: Hero · Metrics · Positioning statement · Why
Infrastructure · How the Ecosystem Works · Infrastructure Modules · Built for
Every Organization · Featured Resources · Choose Your Pathway.

**Why it matters.** The route restructure landed; the page that carries the
positioning did not. Every specific defect below is a symptom of this one.

**Requirement affected.** Phase 1 §13.

**Correction.** Symptoms P0-3 → P0-6 corrected in place. Full re-composition to
the §13 order is a larger content exercise — see "Deferred".

**Status.** Partially corrected · **Verified.** Symptom-level.

---

### P0-3 · Homepage carries no product evidence at all

```
ID                 P0-3
Page               /
Viewport           all
Category           Credibility / evidence
Severity           P0
```

**Observed.** `main img` returns **zero images**. The hero visual is a
hand-drawn node diagram — a dark "HAOS" hub with API / Secure / Market / Trace /
AI / Identity nodes on dashed orbit rings, on a mint-green panel.

**Why it matters.** Ten real screenshots of the running products are committed to
this repository and none appears on the homepage. Phase 1 §17 ranks product
screenshots as the highest-value Tier-1 evidence; Phase 2 §12 requires the hero
to use real product evidence and explicitly prohibits fabricated dashboards and
"glowing network diagrams". The page currently argues by assertion on the one
surface where it could argue by demonstration.

**Requirement affected.** Phase 1 §13.5, §17 Tier 1; Phase 2 §5, §12.

**Correction.** Replace the fabricated hero diagram with `fi-livestock`, and add
the Phase 1 §13.5 product-evidence section using the existing
`ProductEvidenceGallery`.

**Status.** Fixed · **Verified.** Yes.

---

### P0-4 · Coordination Network presented as a live module

```
ID                 P0-4
Page               /
Viewport           all
Category           Content integrity
Severity           P0
```

**Observed.** "Infrastructure Modules" lists Coordination Network as a peer of
Farm Intelligence, Marketplace and Logistics, linking to `/platform/roadmap`.

**Why it matters.** Phase 1 §8: *"if it is not live, it has no application page —
no 'coming soon', no disabled state. Coordination Network … does not appear on the
site until it is."* A visitor reads it as an available product. The redirect
target does not undo the claim the card makes.

**Requirement affected.** Phase 1 §8 availability rule.

**Correction.** Remove from the module grid. It remains on the roadmap as
"building", which is where Phase 2 §E places it.

**Status.** Fixed · **Verified.** Yes.

---

### P0-5 · Capabilities still presented as deployable modules

```
ID                 P0-5
Page               /
Viewport           all
Category           Positioning / conceptual model
Severity           P0
```

**Observed.** "Infrastructure Modules" mixes applications (Farm Intelligence,
Marketplace, Logistics) with capabilities (Traceability, Operational Intelligence)
and platform services (Identity & Security, API & Integrations) in one uniform
grid of nine identical cards.

**Why it matters.** This is the exact blur Phase 1 §8 was written to correct:
*"it presents Traceability, Operational Intelligence and Identity beside
Marketplace and Logistics as if all were deployable."* Separating them is
described there as making both halves more credible. Nine identical cards assert
that all nine are the same kind of thing.

**Requirement affected.** Phase 1 §8; Phase 2 §13 (services / capabilities /
applications must be visually distinct).

**Correction.** Split into "Applications" (four, live, launchable) and "Platform
capabilities" (distinct treatment, no launch affordance).

**Status.** Fixed · **Verified.** Yes.

---

### P0-6 · Two contradictory application counts on one page

```
ID                 P0-6
Page               /
Viewport           all
Category           Content integrity
Severity           P0
```

**Observed.** The metric bar reads **"6 — Integrated Platform Applications"**.
Further down the same page: **"Four applications — deployed and publicly
reachable today"**.

**Why it matters.** Two different answers to "how many products do you have?" on
one screen. Phase 1 D1 removed outcome metrics and §2c specifically recommended
dropping the application count. A diligence reader who notices this stops
trusting the rest.

**Requirement affected.** Phase 1 D1, §2c.

**Correction.** Remove the count. Retain "2 — sectors in pilot", which is factual.

**Status.** Fixed · **Verified.** Yes.

---

### P1-1 · "Book Demo" advertises a booking flow that does not exist

```
ID                 P1-1
Page               / (hero)
Viewport           all
Category           CTA
Severity           P1
```

**Observed.** The hero offers "Explore Platform" + "Book Demo". The header offers
"Talk to us". Both CTAs resolve to `/company/contact`.

**Why it matters.** Three problems in one control: it implies a scheduling flow
that does not exist; it competes with the header CTA for the same action under a
different name; and Phase 1 §5 settled on a single CTA precisely because "Book
Demo" and "Get Started" were doing this in the navigation. The nav was corrected
in Phase 3; the hero was missed.

**Requirement affected.** Phase 1 §5; Phase 2 §D (one primary CTA per screen).

**Correction.** Hero becomes "Explore the platform" (primary) + "Talk to us"
(secondary), matching the header's language.

**Status.** Fixed · **Verified.** Yes.

---

### P1-2 · "Featured Resources" advertises three documents that do not exist

```
ID                 P1-2
Page               /
Viewport           all
Category           Content integrity
Severity           P1
```

**Observed.** Cards for "HAOS Whitepaper", "Platform Documentation" and "Research
Insights", plus "View All Resources". All redirect to the corporate brochure, the
API page or the innovation page.

**Why it matters.** Phase 1 removed these because they do not exist; D4 records
the corporate brochure as the only confirmed document. The redirects stop a 404
but the cards still promise three deliverables. A reader who clicks "HAOS
Whitepaper" and lands on a brochure page draws a conclusion about the company.

**Requirement affected.** Phase 1 D4, §17 rule 5 ("absence is stated, never
implied").

**Correction.** Section removed. The brochure is linked from the footer and from
the pages that need it.

**Status.** Fixed · **Verified.** Yes.

---

### P1-3 · Audience pathways include two audiences Phase 1 removed

```
ID                 P1-3
Page               / ("Choose Your Pathway")
Viewport           all
Category           Information architecture
Severity           P1
```

**Observed.** Six pathways including "Enterprise Client" and "Technology
Partner". Phase 1 §4 merged Enterprise into Agribusiness and Technology Partners
into `/platform/apis`, leaving five audiences.

**Why it matters.** The homepage advertises an audience taxonomy the rest of the
site no longer uses; both cards deep-link to pages written for a different reader.

**Requirement affected.** Phase 1 §4, §10 audience matrix.

**Correction.** Reduced to the five approved audiences.

**Status.** Fixed · **Verified.** Yes.

---

### P2-1 · 1920px composition is a stretched 1280px layout

```
ID                 P2-1
Page               / and all template pages
Viewport           1920
Category           Grid / composition
Severity           P2
```

**Observed.** At 1920 the hero holds a 1200px container with ~360px of empty
margin each side, ~250px of dead vertical space above the eyebrow and ~200px
below the CTA row. Ink coverage above the fold is roughly 40%.

**Why it matters.** Phase 3.5 §7 explicitly warns against desktop being a
stretched 1280 layout. It reads as an unfinished page rather than a composed one.

**Correction.** Not corrected here. Content width, section rhythm and large-desktop
composition are design-system decisions — Phase 4 Part B/C. Correcting them now
would pre-empt that and risk a second pass.

**Status.** Deferred to Phase 4 · **Verified.** N/A.

---

### P2-2 · Section heading language is inconsistent with the approved vocabulary

```
ID                 P2-2
Page               /
Viewport           all
Category           Content
Severity           P2
```

**Observed.** "How the Ecosystem Works" and "Infrastructure Modules" use
"ecosystem" and "modules"; Phase 1 renamed the Ecosystem section to Evidence and
established services / capabilities / applications as the vocabulary.

**Correction.** Headings for the corrected sections updated to the approved terms.
A full copy pass is out of scope (Phase 3.5 §17).

**Status.** Partially corrected · **Verified.** Section-level.

---

### P1-4 · Display headline breaks mid-word once clipping is fixed

```
ID                 P1-4
Page               / (and any .text-display headline)
Viewport           390
Category           Typography
Severity           P1
```

**Observed.** With P0-1 corrected, the H1 no longer overruns — and
`overflow-wrap: break-word` correctly engaged instead, rendering
"Infrastructur / e" across two lines.

**Why it matters.** A hard mid-syllable break in the primary headline is a
visible defect, and only surfaced because the clipping that hid it was removed.

**Correction.** `.text-display` mobile floor 2.25rem → 2rem, bringing the longest
word to ~336px inside a 358px column so it never needs to break. `hyphens: auto`
added ahead of `overflow-wrap` so any future break lands on a syllable with a
hyphen rather than mid-word.

**Deliberately not done.** The type scale itself is Phase 4. This changes only the
floor that stops a defect.

**Status.** Fixed · **Verified.** Yes — 390/430 re-rendered and inspected.

---

## Findings that passed

| Area | Result |
|---|---|
| Route tree | 29 approved routes; matches Phase 1 §3 exactly |
| Redirects | 30, no loops, chains or collisions |
| Internal links | 250 references scanned, 0 dead |
| Navigation IA | Platform / Solutions / Evidence / Company + one CTA, as Phase 1 §5 |
| Contrast | 0 nodes below WCAG AA |
| Focus visibility | 20/20 tabbed elements show a ring; not clipped |
| Mobile menu | Focus trapped, Escape returns focus, body locked |
| Reduced motion | 0 elements animating above 50ms |
| Zoom 200% | No overflow at 640px |
| Evidence ordering | dashboard → reports → livestock preserved at all six widths |
| Screenshot integrity | Unedited; dashboard crop still excludes the contradicting metric strip |
| 404 | Renders, useful, links back into the site |
| Post-correction regression | 120/120 route/viewport checks; contrast, focus, reduced motion, zoom all unchanged |

---

## Product defects (not marketing-site work)

Unchanged from `docs/product-defects.md`: **FI-1** (dashboard/livestock disagree on
mortality and batch day) and **FI-2** (farmer with no tenant membership sees an
empty application). Neither was worked around by editing evidence.

---

## Deferred

**To Phase 4 (design system).** Large-desktop composition (P2-1); content width
and section rhythm; the type scale itself; whether `.text-display` should be
smaller at mobile.

**Blocked on business input.** Leadership content — the page is built and stays
unpublished until real people are named. Corporate brochure PDF. Verified social
URLs. Real photography of field operations and deployment environments, which
Phase 3.5 §13 identifies as the honest alternative to stock agricultural imagery.

**Exceeds Phase 3.5.** Full re-composition of the homepage into the Phase 1 §13
section order. The symptoms have been corrected and product evidence added, but
reordering and rewriting all nine sections is a content exercise, not a visual
correction, and Phase 3.5 §17 explicitly forbids turning this into a copywriting
project.
