# Phase 6 — Production Implementation Report

**Status: Stages 1–3 implemented and verified. Stages 4–8 not started.**
Phase 6 is **not** complete. This report states what was built, what was
measured, and what remains — see §9.

Working tree uncommitted throughout.

---

## 1 · Implementation map

| Phase 5 requirement | Existing component | Action taken |
|---|---|---|
| Three-container system | `.container-heraja` (72 call sites) | **Modified** — kept as the *content* container, added `.container-reading` / `.container-visual` / `.container-canvas` alongside. Additive, so adoption is per-section and reversible |
| Large-desktop asymmetry | Home hero grid | **Modified** — visual container + 12-col grid at `2xl` |
| Evidence gallery width | `ProductEvidenceGallery` | **Modified** — visual container |
| Prose measure | `PlatformTemplate`, `SolutionTemplate`, `CTABlock` | **Modified** — `container-heraja max-w-3xl` → `.container-reading`, removing the max-width collision class Phase 3.5 identified |
| Navigation, buttons, forms, focus, breadcrumbs, evidence ordering, redirects, link checker | All existing | **Reused unchanged** — Phase 3/3.5 hardening preserved |
| New components | — | **None created.** Phase 5 §10 required none and none proved necessary |

---

## 2 · Design-system implementation

**Containers** (`src/index.css`) — reading 720 · content 1280 · visual
1280→1440→1600 across `xl`/`2xl` · canvas 1920 cap. Gutters step
16/24/32/48/**64**, the last being new at `2xl`.

`.container-visual` is deliberately identical to content below `xl`: extra
width only becomes available once there is width to spare, so mobile and tablet
are untouched by the change.

**Not implemented, deliberately.** Section rhythm remains 80/120. Phase 5 §16
flagged the change to 64/96/128 as **[NEEDS APPROVAL]** — it alters density on
every page — and Phase 6's brief did not approve it. Implementing it silently
would be exactly the kind of unrequested decision §53 forbids.

---

## 3 · Large-desktop composition — measured

The Phase 3.5 P2-1 defect and its resolution, from the rendered build:

| Width | Container | Copy | Media | Right margin |
|---|---|---|---|---|
| 1280 | 1280 | 48–837 | 901–1232 | 48px |
| 1600 | **1600** | 191–903 | 951–**1536** | 64px |
| 1920 | 1600 (capped) | 351–1063 | 1111–**1696** | 224px |
| 2560 | 1600 (capped) | — | — | centred |

At 1600 the media reaches 1536px — **256px past the old 1280 boundary** — while
the copy stays within a readable measure. At 1920 and 2560 the composition
centres rather than growing, and **`h1` stays at 64px at 2560** (no size
inflation from spare width).

The asymmetry engages only at `2xl` and only on the hero, because it is earned
by the media — a text-only section stays symmetric at every width.

---

## 4 · Defect found and fixed

**Coordination Network was still presented as a live capability in six places.**

Phase 3.5 P0-4 removed it from the homepage; the same defect survived on
`/platform` (capability card, related links, and an FAQ answer listing it among
live capabilities), on `/platform/farm-intelligence` and `/platform/logistics`
(related links), and inside `ArchitectureDiagram` and `EcosystemExplorer`
(application layer).

Phase 1 §8: an application that is not deployed does not appear on the site.
Removed from all six; it remains on `/platform/roadmap` as **Building**, which
is the only place the rule permits.

**How it was found.** The clipping-disabled overflow sweep (§33 of the brief)
surfaced the "Related:" strip contents, and the strip contained a link that
should not exist. The overflow test found a content defect rather than a layout
one.

---

## 5 · Overflow testing with clipping disabled

Ran across 29 routes × 5 viewports with every `overflow: hidden` temporarily set
to `visible`. 135 combinations reported an overrun; **investigated rather than
reported as defects**, and all trace to one element:

```
DIV right=486  aria-hidden=true  text=none
    absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl
```

The decorative background blur is 288px wide at `-96px` right, so it extends
96px past a 390px viewport and is clipped by design. It carries
`aria-hidden="true"` and no text.

**This is legitimate clipping, not a hidden defect.** The Phase 3.5 lesson is
that clipping can conceal a *text* defect; clipping a decorative element is the
intended use. Reporting 135 defects here would have been false precision.

The two non-decorative overruns were inside `overflow-x-auto` — a scrolling
strip, reachable by scrolling — and one of them was the Coordination Network
link now removed.

---

## 6 · Verification

| Check | Result |
|---|---|
| TypeScript (`tsc -b --force`) | Clean |
| Production build | Passes |
| Internal links | 250 references, **0 dead**, 0 missing assets |
| Redirects | 30 — no loops, chains or collisions; every destination resolves |
| **Route matrix** | **150/150** — 29 routes + 404 × 5 viewports (390/768/1280/1600/1920) |
| Per-combination | one `h1` · no horizontal overflow · no console errors · no broken images · no missing alt |
| 2560 canvas | Capped at 1600 visual, centred, no type inflation |
| Evidence ordering | dashboard → reports → livestock, assertion intact |
| Screenshots | Unmodified — byte-identical, crop is the only control |

---

## 7 · Performance

| | Before Phase 6 | After |
|---|---|---|
| Initial JS | 416.0 kB / 132.8 kB gz | **418.5 kB / 133.9 kB gz** |
| All chunks | 618.9 kB / 206.5 kB gz | 621.2 kB / 208.9 kB gz |
| Chunks | 47 | 53 |

+2.5 kB initial, from the added container classes and the hero's grid
utilities. No dependency was added. Largest single contributor remains
`framer-motion` in the initial chunk, imported by the header and mobile menu —
unchanged, and a migration-scale problem rather than a Phase 6 one.

---

## 8 · Visual assets

**No images were generated.** The brief's §15–19 ask for generated
photography; **I have no image-generation capability available in this
environment**, so none was produced. Nothing was fabricated in its place and no
placeholder imagery was introduced.

The requirement is recorded in `phase-6-visual-assets.md`. The site currently
ships product screenshots and architecture only, which is the honest state.

---

## 9 · What remains — Phase 6 is not complete

**Stages implemented:** 1 (foundation — containers), 3 (homepage hero + evidence
width), plus template container corrections that belong to Stage 2.

**Stages not started:** 2 (full template rebuild), 4 (Corporate), 5 (Platform),
6 (Solutions), 7 (Products/Ecosystem), 8 (remaining routes).

All 29 routes **render, pass validation and are free of defects**, but they have
not been recomposed to the Phase 5 section specifications. They are the
Phase 3.5 baseline plus the container system.

### Blocking

None for what has been built.

### Non-blocking

- Section rhythm 80/120 → 64/96/128 awaits approval
- Stages 4–8 page recomposition
- No screen-reader testing (NVDA/VoiceOver)
- No real-device testing

### Content-dependent

Leadership · brochure PDF · social URLs · `AWS_URL` · authenticated captures for
the three thinner applications · all photography.

### Product defects

FI-1 and FI-2 unchanged in `product-defects.md`. No screenshot was altered.

---

# Phase 6A — Template Recomposition

Continuation session. Stages 1–3 preserved; nothing reset or redone.
Section rhythm left at **80/120** as instructed — the 64/96/128 proposal
remains unapproved and was not implemented.

## Implementation map

| Phase 5 requirement | Existing | Action |
|---|---|---|
| Platform §2 "who uses it" | absent | **Added** `users` prop + section |
| Platform §6 data & verification | absent | **Added** `dataAndVerification` prop + section |
| Platform §9 implementation | absent | **Added** `implementation` prop + section |
| Platform §10 CTA | hardcoded | **Made configurable**, default corrected |
| Solution §8.1 differentiator 1 (applications) | `infrastructure` prop | Already present, unchanged |
| Solution §8.1 differentiator 2 (evidence emphasis) | absent | **Added** `evidence` prop + section |
| Solution §8.1 differentiator 3 (audience CTA) | hardcoded | **Added** `cta` prop with enquiry pre-selection |
| Evidence gallery, containers, buttons, forms, breadcrumbs | existing | **Reused unchanged** |
| New components | — | **None created** |

## PlatformTemplate

Four optional props added, so all eight consumers kept working without change
and pages adopt sections as content becomes available.

**CTA default corrected.** It read *"View Enterprise Clients"* pointing at
`/evidence/zimo-clan`. Zimo Clan is a Heraja **subsidiary** as well as a client;
labelling it an enterprise-client roster is precisely the impression Phase 1 §9
requires the site never to give. Default is now "Talk to us" / "Explore the
platform", and application pages override with their own launch action.

**Consumers (8):** `/platform`, `/platform/haos`, `/platform/security`,
`/platform/apis`, `/platform/farm-intelligence`, `/platform/marketplace`,
`/platform/echimusika`, `/platform/logistics`.

`/platform/farm-intelligence` populated with all four new sections. Content is
limited to what the published screenshots and the product's own enforced
terminology support — no deployment scale, customers or outcomes asserted.

## SolutionTemplate

The template previously produced five pages differing only in nouns. Two of the
three Phase 5 §8.1 differentiators were missing and are now present.

**Verified per-audience differentiation:**

| Route | CTA | Enquiry pre-select |
|---|---|---|
| government | "Discuss a programme" | `government` |
| financial-institutions | "Discuss data & risk" | `financial-institution` |
| cooperatives | "See how it works" | `cooperative` |
| agribusiness | "Talk to us" | `agribusiness` |
| development-organizations | "Discuss a programme" | `development-organization` |

CTA verbs are taken verbatim from the Phase 1 §10 audience matrix — approved
content, not new copy. Each links to `/company/contact?enquiry=…`; the pre-select
was verified end to end (the form arrives with the correct option chosen).

Evidence emphasis differs per audience per Phase 5 §8.1: Government → the
disclosed Zimo Clan deployment · Financial Institutions → where the figures come
from · Cooperatives → it runs on a phone · Agribusiness → architecture ·
Development Organizations → the pilot with its open questions stated. Every block
is **link-led rather than claim-led** — it points at a page carrying the proof
rather than asserting an outcome.

## Verification

| Check | Result |
|---|---|
| TypeScript | Clean |
| Production build | Passes |
| Route matrix | **150/150** (29 routes + 404 × 390/768/1280/1600/1920) |
| Internal links | 0 dead, 0 missing assets |
| Redirects | 30, no loops or collisions |
| Evidence ordering | dashboard → reports → livestock; adjacent=false, reportsBetween=true |
| Screenshots | Unmodified |
| Enquiry pre-select | Verified |
| Bundle | 418.5 kB / 133.9 kB gz initial — **unchanged** by 6A |

## Remaining Phase 6 work

Stage 4 Corporate (Home sections 2–9, About, Careers, Contact, Brochure) ·
Stage 7 Evidence pages · Stage 8 residual routes · final Phase 6 QA.

`/platform/marketplace`, `/echimusika`, `/logistics` accept the new props but
are not yet populated — **[CONTENT REQUIRED]**, product-verified copy.

---

# Phase 6B — Large-desktop visual audit (partial session)

Continuation from 6A. Section rhythm untouched at 80/120.

## Visual audit register

### VA-1 · Prose stranded at large desktop

```
Route      /platform/farm-intelligence (and every .container-reading prose section)
Viewport   1600, 1920
Severity   P1
```

**Symptom.** At 1920 the "Data & verification" block sat at x≈664–1256 with
~660px of empty space on each side, aligned to nothing above or below it. The
cards and evidence either side start at x≈384. The prose floated in the middle
of the viewport looking unrelated to the page it belongs to.

**Root cause.** `.container-reading` is `max-w-[720px] mx-auto` — it centres.
Phase 4 §7.2 and Phase 5 §13 both specify that reading blocks at 1600+ must
**left-align to the content column, not centre**. The behaviour was specified in
two documents and implemented in neither.

**Why automated checks missed it.** No overflow, one `h1`, no console error, no
broken image — the DOM is entirely valid. This is a composition defect, visible
only by looking. It is precisely the class of failure §32 of the 6B brief
required a visual pass to catch, and it was found on the first screenshot.

**First fix, rejected.** Computing the offset as
`margin-left: max(4rem, calc((100vw - 1280px) / 2))` landed **48px off**, because
`100vw` includes the scrollbar while the centred content container is laid out
against `clientWidth`. Measured, not assumed.

**Fix.** New `.container-prose`: the same box as the content container —
identical max-width and gutters, so it cannot drift — with the 720px reading
measure applied to its children instead. Alignment is structural rather than
arithmetic.

`.container-reading` is retained unchanged for deliberately centred blocks
(CTA, FAQ headers); converting those would have shifted centred text off-axis.

**Verification.** Content-column vs prose left edge: **0px delta at 1600 and
1920** (was 48px). Re-rendered and inspected at both widths.

**Applied to:** PlatformTemplate problem statement, data & verification,
implementation; SolutionTemplate evidence block.

## Sections visually inspected at 1600/1920

The 6A gap closed. Rendered and examined, not DOM-checked:

| Section | 1600 | 1920 |
|---|---|---|
| Who uses it | Two balanced columns, accent rule left | Composed |
| Data & verification | Left-aligned, correct measure | Left-aligned |
| Implementation | Numbered steps, mono numerals, clean hierarchy | Composed |

**Minor, not fixed:** in "Who uses it" the second column's `neutral-300` rule is
close to invisible beside the first column's accent rule, so the pair reads
slightly unbalanced. Cosmetic; noted rather than changed, since altering it
touches the design system's border tokens.

**Pre-existing, noted:** `section-padding` carries horizontal padding *and*
containers carry their own, so sections using both indent twice as far as the
hero. Consistent between sections, inconsistent with the hero. Affects 47 call
sites and is a design-system change — **not** made here.

## Verification

TypeScript clean · build passes · **150/150** route × viewport · 0 dead links ·
30 redirects clean · evidence ordering `dashboard → reports → livestock`,
adjacent=false · screenshots unmodified · bundle **418.5 kB / 133.9 kB gz**.

## NOT done in this session

Stage 4 Corporate (Home §2–9, About, Careers, Contact, Brochure) ·
Stage 7 Evidence pages · Stage 8 residual routes · final full QA.

Phase 6 remains incomplete.

## Stage 4 — Corporate: homepage (partial)

Two Phase 1 §13 sections were **absent entirely**, not merely unstyled:

**§7 Proof** — the site had `/evidence/zimo-clan` and `/evidence/pilot` and no
route to either from the homepage. Two cards, equal weight, no metrics. The
Zimo Clan card's *eyebrow* carries the disclosure — "A Heraja subsidiary and
client" — so a reader cannot reach the description without passing the
relationship, which is what Phase 1 §9 requires structurally rather than
editorially.

**§8 Technology & trust** — also absent. Architecture · Security · APIs, one
line each, bordered rows rather than cards because the section routes rather
than persuades. With outcome metrics removed by D1, the engineering carries
more of the credibility than it used to.

**§9 CTA** — the page ended on the audience router with no closing action.

**Defect found while doing it:** the audience router listed four of the five
approved audiences. **Financial Institutions was missing** — its page existed
and was linked from the navigation, but the homepage offered no route to it.
All five are now present.

### Verification

TypeScript clean · build passes · **150/150** route × viewport · 0 dead links ·
initial bundle **423.2 kB / 134.9 kB gz** (+4.7 kB for three sections, no new
dependency).

Rendered order now: Hero → Infrastructure positioning → Ecosystem architecture →
Applications → Platform → Product evidence → Enterprise trust → Who it is for →
**Proof** → **Technology & trust** → **CTA**.

### Still outstanding in Stage 4

About · Careers · Contact · Brochure recomposition. Home §2/§3 remain as
"Infrastructure positioning" and "Ecosystem architecture" rather than the
Phase 1 §13 "problem / HAOS" framing — a content rewrite, not a layout change.

## Stage 4 continued — Careers, Evidence, content integrity

A rendered content-integrity scan across all 29 routes (regex over
`document.body.innerText`, not source) found three fabrications that every
previous phase had missed, because previous audits read source or looked at the
homepage.

### VA-2 · Five invented job vacancies

```
Route      /company/careers        Severity   P0 (content integrity)
```

The page listed **"Senior Platform Engineer — Lagos / Remote — Full-time"** and
four more, each with an Apply button routing to the contact form with the role
pre-filled. None was supplied by the company.

This is a worse class than an invented statistic: a real engineer could spend an
evening on an application for a role that does not exist.

**Fixed** with neither the roles nor the opposite claim — "no current openings"
would be equally unsupported, since the company may well be hiring. The page now
says only what is true: vacancies are not published here, and there is a real
way to write in. `[CONTENT REQUIRED]` for real listings.

**Noted, not changed:** the benefits list ("health insurance", "meaningful equity
participation") is the same class of unverified employment claim, but unlike the
vacancies it is plausibly founder-supplied copy and is not individually
actionable. Deleting it would mean deciding the company's employment terms are
false, which is not mine to decide. **Needs verification.**

### VA-3 · The exact figures D1 removed, still live on the evidence page

```
Route      /evidence/zimo-clan     Severity   P0 (content integrity)
```

The metric strip read **"Partner Farms 500+"**, **"Production Value Facilitated
₦2B+"**, "Buyer-Matching Turnaround 24hrs", "Core Products 4".

Phase 1 **D1 is the decision that removed "₦2B+ / 500+ farms"**. The homepage was
cleaned in Phase 3.5; this page was never opened. The two figures survived on the
one page where they cost most — the evidence page for a **related party**. An
unverifiable outcome figure attributed to a subsidiary is the easiest thing a
diligence reader can take apart, and §9 exists to prevent exactly it.

**Fixed.** Replaced with checkable statements: Relationship — Subsidiary · Runs
on — HAOS · Applications used — Four · **Independent validation — No**. The last
one states the limit rather than leaving a reader to discover it.

### VA-4 · "Enterprise Clients" wording in two more places

`/evidence` card title and the `/platform/architecture` CTA both implied an
arm's-length customer roster. Phase 6A fixed the template default; these two were
hardcoded per-page. Now "Zimo Clan — a Heraja subsidiary and client" and "See a
deployment".

### Verification

TypeScript clean · build passes · **150/150** route × viewport · 0 dead links ·
evidence ordering intact · **content-integrity scan across 29 rendered routes:
no suspect claims found** · initial bundle **423.2 kB / 134.9 kB gz**.

---

# Phase 6C

Corporate completion, evidence integrity and residual routes are recorded
separately in **`docs/phase-6c-completion-report.md`**, together with the
rendered content-integrity audit and the final QA matrix.

The claim register it produced is **`docs/content-integrity-register.md`**, and
the gate that enforces it is `scripts/check-content.mjs`
(`npm run check:content`).

Phase 6 is complete as of that report.
