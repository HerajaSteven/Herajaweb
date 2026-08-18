# Heraja Design System

The production design system for **heraja.com**. Authoritative for Phase 5
implementation and for anyone — human or agent — building on this codebase.

**Status of this document.** Specification only. No production code was changed
in Phase 4. Every value below was checked against the current implementation
(`tailwind.config.js`, `src/index.css`) and either matches it, or is flagged in
§20 as a change Phase 5 must make deliberately.

**How to read the provenance markers.** Three kinds of statement appear here and
they carry different authority:

| Marker | Meaning |
|---|---|
| **[APPROVED]** | Settled in Phase 1–3.5. Do not reopen. |
| **[SYSTEM]** | A Phase 4 design-system decision. Binding, but reviewable. |
| **[RECOMMENDATION]** | Implementation guidance. Phase 5 may adapt with reason. |
| **[NEEDS APPROVAL]** | Requires a founder decision — listed in §21. |

---

## 1 · Design principles

Eight principles. Each carries an implementation implication, because a
principle that cannot be checked against a component is decoration.

### 1.1 Evidence outranks assertion **[APPROVED — Phase 1 §17, Phase 3.5 P0-3]**

Where a claim can be replaced with a screenshot, an architecture element, or a
named person, it is replaced. Phase 3.5 found the homepage rendering zero images
while ten screenshots of the running products sat in the repository; that
inversion is the failure this principle exists to prevent.

*Implication.* Every page-level section that makes a capability claim must sit
within one scroll of something demonstrable. Product evidence gets the strongest
visual treatment on any page it appears — larger than adjacent cards, never
smaller.

### 1.2 Restraint is the credibility signal **[SYSTEM]**

The audience is a ministry official, a lender's risk team, a development
programme. Their question is "is this real?", and every decorative flourish
spends a little of the answer.

*Implication.* One accent per view. Default to a border rather than a shadow.
Emptiness is acceptable; overstatement is not.

### 1.3 The product's language wins **[APPROVED — Phase 1 §16]**

"Feed served", not "feed consumed". "Morning report" and "Evening report", not
one "daily report". These are enforced by tests inside the product because it
refuses to claim a measurement it did not make.

*Implication.* Captions, labels and diagram nodes quote the product. Marketing
copy adapts to it; it never softens it.

### 1.4 Engineered, not futuristic **[APPROVED — Phase 3.5 §2.2]**

Heraja's differentiator is that its products exist and are running. Speculative
visual language argues the opposite.

*Implication.* No orbital node graphics, no glow, no gradient meshes, no
particle fields. A diagram earns its place by explaining a real structure. See
§18.

### 1.5 Operational, not agricultural-decorative **[APPROVED — Phase 3.5 §2.1]**

The subject is infrastructure that agriculture runs on, not agriculture.

*Implication.* Green is a brand colour, not a theme. No leaves, crops, tractors
or field textures as ornament. Agricultural imagery appears only as evidence of
a real operation.

### 1.6 Mobile is the design; desktop has more room **[APPROVED — Phase 1 §21]**

Much of this audience opens a link on a mid-range Android on mobile data.

*Implication.* Compose at 390 first. Desktop adds room, not new information.
Nothing that carries meaning may be hidden below `lg`.

### 1.7 Large screens are composed, not stretched **[SYSTEM — resolves Phase 3.5 P2-1]**

Phase 3.5 deferred this and it is the single largest gap this document closes.
At 1920 the current hero holds a 1280 container with ~320px of dead margin each
side and roughly 40% ink coverage.

*Implication.* Three container widths, not one. See §7 and §17.

### 1.8 African operating reality, without stereotype **[APPROVED — Phase 3.5 §13]**

*Implication.* Real farms, real field teams, real deployment environments, real
dashboards. Never staged smiling-farmer stock, never poverty framing, never a
decorative continent outline. Where no honest asset exists, the requirement is
recorded rather than filled. See §12.

---

## 2 · Colour system

### 2.1 The rule that organises the palette **[APPROVED — Phase 3]**

Brand green measures **2.20:1 on white** and **7.40:1 on charcoal**. Brand orange
measures **2.13:1 on white**. Both are **dark-surface colours**. This single fact
determines the entire palette and must not be regressed — it was the site's most
widespread accessibility failure, reaching every page through `*:focus-visible`.

> **Light ground → `#3A7F27` / `#9A5B00`.  Dark ground → `#7AC142` / `#F99D1C`.**

The logo keeps `#7AC142` because it is a graphic, and graphics carry no contrast
requirement.

### 2.2 Brand

| Token | Hex | Usage | Allowed on | Forbidden on | Contrast |
|---|---|---|---|---|---|
| `brand-primary` | `#231F20` | Body text, dark bands, primary button | Any light surface | — | **16.3:1** on white |
| `brand-secondary` | `#7AC142` | Logo; text/accents on charcoal; large non-text fills | Charcoal, `#000` | **Never text on white** | 7.40:1 on charcoal · *2.20:1 on white ✗* |
| `brand-tertiary` | `#F99D1C` | Attention on charcoal only | Charcoal | **Never text on white** | 8.06:1 on charcoal · *2.13:1 on white ✗* |
| `brand-accent` | `#3A7F27` | Green text, links, eyebrows, focus ring on light | White, paper, `#F6F7F5` | Charcoal (3.30:1 — UI only, not body text) | **4.95:1** on white |
| `brand-accent-warm` | `#9A5B00` | Orange text/UI on light | White, paper | Charcoal | **5.43:1** on white |

### 2.3 Neutrals

Warm, not grey — biased toward the charcoal, which is `#231F20` rather than
`#000`. A pure `#F5F5F5` beside this charcoal reads cold and unrelated.

| Token | Hex | Usage | Contrast on white |
|---|---|---|---|
| `neutral-900` | `#231F20` | Headings, primary text | 16.3:1 |
| `neutral-700` | `#4A4546` | Secondary prose | 9.4:1 |
| `neutral-500` | `#6B6A6A` | Captions, meta. **Min 13px** | 5.3:1 |
| `neutral-300` | `#D8D6D5` | Borders, dividers | 1.4:1 — **decorative only, never text** |
| `neutral-100` | `#F3F3F2` | Recessed fills | — |

**On charcoal**, secondary text is `neutral-300`, never `neutral-500` — Phase 3
found `neutral-500` on the dark footer at 3.02:1, a real AA failure.

### 2.4 Surfaces

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#FFFFFF` | Cards, panels, form fields |
| `surface-elevated` | `#F6F7F5` | Page ground, recessed sections |
| `surface-dark` | `#231F20` | Charcoal bands |

**Dark-band budget [SYSTEM].** Charcoal bands do exactly three jobs on any page:
the problem statement, the architecture, and the closing CTA. A fourth use
dilutes all three.

### 2.5 Semantic

| Role | Light | Dark | Rule |
|---|---|---|---|
| Success / live | `#3A7F27` | `#7AC142` | Live-application state only. Never decorative |
| Warning / building | `#9A5B00` | `#F99D1C` | Roadmap "building"; nothing else |
| Error | `#C0392B` (5.4:1) | `#E8705F` | Validation, contact failure |
| Information | `#4A4546` | `#B3ADA6` | **Deliberately not blue** — a fourth hue dilutes a three-colour brand |
| Focus | `#3A7F27` | `#7AC142` | See §15.2 |

### 2.6 Which colours may carry text

**May:** `brand-primary`, `brand-accent`, `brand-accent-warm`, `neutral-900/700/500`,
`error`, and on charcoal only: `brand-secondary`, `brand-tertiary`, `#F2F0EC`, `neutral-300`.

**May not, ever, as text on a light ground:** `brand-secondary`, `brand-tertiary`,
`neutral-300`, any `*/20` alpha tint.

**Alpha tints.** A `bg-*/20` fill composites over its ground; text on it must be
measured against the *composited* result, not the base colour. Phase 4 found
`#3A7F27` on a 20% green tint at **4.27:1** — under AA at 14px. Charcoal is the
safe foreground on any brand tint.

### 2.7 The `infra-*` palette **[SYSTEM]**

Six concept colours (`haos`, `marketplace`, `traceability`, `ai`, `identity`,
`api`), all darkened in Phase 3 to clear 4.5:1. **Frozen, not extended.** They
exist because ~74 call sites use them as capability-icon tints. Do not add a
seventh; do not use them for text or state. Phase 5 may retire them as component
migration removes call sites.

---

## 3 · Typography

### 3.1 Families **[APPROVED — Phase 3]**

| Role | Family | Why |
|---|---|---|
| Display — h1–h3, metrics | **Syne** 600/700/800 | The display face of the HAOS product estate. Screenshots published here look native to the page rather than borrowed |
| Body — prose, UI, nav | **Inter** 400/500/600/700 | Holds up at 14–16px on the low-DPI Android screens much of this audience uses |
| Utility — eyebrows, data, code | **DM Mono** 400/500 | The product's mono. Setting structural labels in it distinguishes them from content at a glance |

Self-hosted (18 woff2, latin + latin-ext). **No font CDN** — a Phase 4 regression
run caught `fonts.gstatic.com` 404ing under load, and the display face carries
the brand.

### 3.2 Scale

Fluid via `clamp()`. **Display through h3 must not be declared as Tailwind
`fontSize` keys** — Tailwind emits those into the utilities layer, which outranks
the components layer where the clamp rules live. That collision made every
heading render at desktop size on mobile and was the true cause of site-wide
horizontal scrolling.

| Token | Family / weight | Size | LH | Tracking | Max width |
|---|---|---|---|---|---|
| `display` | Syne 800 | `clamp(2rem, 5vw, 4rem)` | 1.05 | −0.03em | 19ch |
| `h1` | Syne 700 | `clamp(1.75rem, 4vw, 3rem)` | 1.12 | −0.025em | 22ch |
| `h2` | Syne 700 | `clamp(1.5rem, 3vw, 2.25rem)` | 1.18 | −0.02em | 26ch |
| `h3` | Syne 600 | `clamp(1.25rem, 2vw, 1.5rem)` | 1.3 | −0.015em | 34ch |
| `h4` | Inter 600 | `1.25rem` | 1.4 | 0 | 40ch |
| `body-large` | Inter 400 | `1.125rem` | 1.6 | 0 | **68ch** |
| `body` | Inter 400 | `1rem` | 1.65 | 0 | **72ch** |
| `body-small` | Inter 400 | `0.875rem` | 1.55 | 0 | 72ch |
| `eyebrow` | DM Mono 500 | `0.75rem` | 1.4 | 0.12em, uppercase | — |
| `caption` | Inter 400 | `0.8125rem` (**13px floor**) | 1.5 | 0 | 60ch |
| `nav` | Inter 500 | `0.9375rem` | 1.2 | 0 | — |
| `button` | Inter 600 | `0.9375rem` | 1 | 0.005em | — |
| `metric` | Syne 700 | `clamp(1.75rem, 3vw, 2.5rem)` | 1 | −0.02em | tabular-nums |
| `data` | DM Mono 400 | `0.8125rem` | 1.5 | 0 | tabular-nums |

### 3.3 The long-word rule **[SYSTEM — prevents Phase 3.5 P0-1 / P1-4]**

Syne is materially wider than Inter. At 390px the content column is 358px, and
"Infrastructure" — the longest word the site actually uses — measures ~378px at
36px Syne. Two defects came from this and both must be prevented structurally:

1. **`min-w-0` on every grid item containing a heading.** Grid items default to
   `min-width: auto` and refuse to shrink below their longest word, so the item
   grows past its track. Combined with an ancestor `overflow-hidden` this clips
   text *and* hides itself from `scrollWidth` overflow tests.
2. **Display floor is `2rem`, not `2.25rem`.** At 32px the same word measures
   ~336px and fits without breaking.

Backstop, in this order: `hyphens: auto` (document is `lang="en"`, so a break
lands on a syllable with a hyphen) then `overflow-wrap: break-word`. Both are
floors that engage only when a word genuinely cannot fit — never a layout choice.

**Any new headline word longer than ~14 characters must be checked at 390px
before merge.**

---

## 4 · Spacing

4px base. Ten steps, no more — an eleventh means a component is negotiating
rather than composing.

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Icon-to-label |
| `space-2` | 8px | Inline gaps; **minimum gap between touch targets** |
| `space-3` | 16px | Mobile gutter; card padding (mobile) |
| `space-4` | 24px | Card padding (desktop); grid gap |
| `space-5` | 32px | Heading-to-content; card grid gap (desktop) |
| `space-6` | 48px | Sub-section separation |
| `space-7` | 64px | Section padding (mobile) |
| `space-8` | 96px | Section padding (desktop) |
| `space-9` | 128px | Major band separation (wide, sparing) |
| `space-10` | 160px | Reserved. Hero only, ≥1600px |

### 4.1 Section rhythm **[SYSTEM — change from current]**

| Tier | Vertical padding |
|---|---|
| mobile | `space-7` (64) |
| `lg` | `space-8` (96) |
| `xl`+ | `space-9` (128) |

Current implementation is `py-20 lg:py-[120px]` (80/120). **80px on mobile is too
loose** for a site with this much to say, and 120px arrives at `lg` rather than
`xl`. See §20.

---

## 5 · Containers and grid

### 5.1 Three containers, not one **[SYSTEM — resolves Phase 3.5 P2-1]**

The single most important structural decision in this document. One container
width cannot serve both a paragraph and a dashboard: the width that makes prose
readable makes a screenshot small, and the width that makes a screenshot legible
makes prose unreadable.

| Container | Max width | Holds |
|---|---|---|
| **Reading** | **720px** | Paragraphs, prose sections, legal, FAQ answers, problem statements |
| **Content** | **1280px** | Cards, grids, navigation, forms, most sections |
| **Visual** | **1600px** | Screenshots, architecture diagrams, maps, evidence galleries, hero media |
| **Canvas** | 100vw | Charcoal bands, full-bleed backgrounds. Inner content still uses one of the above |

Reading width is capped by `ch` on the text element (§3.2), *and* by the reading
container — belt and braces, because a 72ch cap on a 1600px container still
leaves text stranded in the middle of a wide band.

### 5.2 Gutters

| Tier | Gutter |
|---|---|
| < 640 | 16px |
| `sm` 640 | 24px |
| `lg` 1024 | 32px |
| `xl` 1280 | 48px |
| `2xl` 1536+ | 64px |

### 5.3 Grid

12 columns from `lg`. Below `lg`, layout is flow-based, not grid-based — a
12-column grid at 390px is a fiction that costs a mental model.

Gaps: `space-4` (24) to `lg`, `space-5` (32) at `lg`, `space-6` (48) at `2xl`.

### 5.4 Breakpoints **[APPROVED — Phase 3, must not regress]**

**Tailwind defaults, un-overridden.** `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 ·
`2xl` 1536.

These were previously renamed one tier off the defaults, so every idiomatic
utility fired a tier late. Verified in Phase 4: `screens` is not overridden.
**Do not re-introduce it.**

---

## 6 · Responsive composition

Per-component transformation rules. "Stacks on mobile" is not a rule.

| Component | < 640 | 768 | 1024–1280 | 1440+ | 1920+ |
|---|---|---|---|---|---|
| **Hero** | Copy, then media below. Media 62% width, bleeding right | Same, larger | 7/5 split, media right | 7/5, media in visual container, bleeds into right gutter | Asymmetric: copy on cols 2–7, media cols 8–12 at visual width |
| **Product evidence** | Horizontal snap-scroll, 1.15 cards visible | 2-col grid | 3-col grid | 3-col, visual container | 3-col, larger frames, visual container |
| **Metrics** | 1 col, stacked | 3 col | 3 col | 3 col + rule above | 3 col, wider tracking |
| **Application cards** | 1 col full-width | 2 col | 2 col (**never 4** — screenshots become unreadable) | 2 col | 2 col, larger media |
| **Capability list** | 1 col | 2 col | 3 col | 3 col | 3 col, wider gaps |
| **Solution page** | 1 col + sticky bottom CTA | Same | 8/4 content + sticky sidebar | 8/4 | 8/4 with wider rail |
| **Architecture diagram** | Vertical stack, tiers as rows | Vertical, wider | Vertical, horizontal service rows | Visual container | Visual container, larger type |
| **CTA block** | Full-width, stacked buttons | Centred, inline buttons | Centred, reading width | Same | Same — **does not widen** |
| **Forms** | 1 field per row | 1 per row | Two-up for name/email, org/country | Same | Same — **does not widen** |
| **Footer** | Accordion groups | 2 col | 4 col + identity | 5 col | 5 col, content container |
| **Nav** | Overlay + accordions | Overlay | Inline + dropdowns | Same | Same |

### 6.1 What disappears, and what may not

**May disappear below `lg`:** decorative background blurs, section-header icons,
the "Related:" strip, hover-reveal affordances.

**May never disappear at any width:** any screenshot, any architecture tier, any
evidence, any CTA, any form field.

---

## 7 · Large-desktop composition **[SYSTEM — the deferred Phase 3.5 item]**

### 7.1 The problem being solved

At 1920 the current hero renders a 1280 container inside a 1920 viewport: ~320px
of dead margin per side, ~250px of empty vertical space above the eyebrow, ~40%
ink coverage. It reads as an unfinished page.

The instinct — widen the container — is wrong: it makes prose unreadable. The fix
is that **different content types stop scaling at different widths.**

### 7.2 Behaviour by width

| Width | Container | Grid | What changes |
|---|---|---|---|
| **1280** | content 1280, gutter 48 | 12 col | Baseline desktop. Everything symmetric |
| **1440** | content 1280, **visual 1440** | 12 col | Media and diagrams begin exceeding the content column. Section padding → `space-9` |
| **1600** | content 1280, **visual 1600** | 12 col, gap 48 | Hero becomes asymmetric: copy on cols 2–7, media cols 8–12 at visual width, bleeding into the right gutter. Reading blocks stay at 720 and are **left-aligned to the content column**, not centred |
| **1920** | content 1280, visual 1600, gutter 64 | 12 col | Hero media reaches full visual width. Evidence gallery frames grow ~20%. A **secondary rail** may appear on Solution and Application pages (cols 10–12) carrying the sticky CTA and related links |
| **2560+** | **canvas capped at 1920** | — | The whole composition centres in a 1920 canvas. Beyond this, growth adds nothing — a 2560 layout is a 1920 layout with symmetric margin |

### 7.3 Rules that keep it honest

1. **Never add content to fill space.** If a section has nothing more to say at
   1920, it uses whitespace deliberately — asymmetry, not padding.
2. **Reading width never exceeds 720px** at any viewport.
3. **Forms and CTA blocks never widen** past the content container. A 1600px-wide
   form is worse at every width than a 640px one.
4. **Asymmetry is earned by media.** A section becomes asymmetric only when it
   holds something visual worth the extra width. Text-only sections stay
   symmetric at every width.
5. **The cap is 1920.** Stated explicitly so nobody designs a 2560 layout.

---

## 8 · Components

Anatomy, states, responsive behaviour and anti-patterns. Dimensions are
minimums, not suggestions.

### 8.1 Navigation

**Desktop (`lg`+).** 72px, reducing to 60px scrolled. White ground, no
transparency — a transparent header over a hero costs legibility for fashion.
Border appears only after 8px scroll. Logo 32px. Items Inter 500 15px
`neutral-700`, 24px apart. One CTA, right.

| State | Treatment |
|---|---|
| Default | `neutral-700` |
| Hover | `brand-primary`. **No underline** — it competes with the active marker |
| Active section | `brand-primary` 600 + 2px `brand-accent` underline, 6px below baseline. Applies on all child routes |
| Focus | 3px `brand-accent` ring, 2px offset |
| Open | Active treatment + chevron rotated 180° over 150ms |

**Dropdowns.** Platform (520px, two columns) and Solutions (280px, one) only.
Evidence and Company are direct links. Opens on hover after 100ms intent delay
*and* on click. Closes on leave +200ms, Escape (focus returns to trigger), Tab
out, route change. `aria-expanded` + `aria-controls`; `role="group"`, **not**
`menu` — these are links, and menu semantics mislead a screen reader.
Focus is **not** trapped; Tab must be able to leave.

**Mobile.** 56px bar, logo + 44×44 trigger. Full-screen overlay, not a drawer.
Accordion groups expand in place — one level, no drill-in. CTA pinned at the
bottom. Focus **is** trapped. Escape closes and returns focus. Body scroll locked.
Browser back closes the menu before navigating.

*Anti-patterns.* Transparent header. Two CTAs. A search control with no index
behind it. Hover as the only route to a dropdown.

### 8.2 Buttons

44px mobile / 40px desktop, 20px horizontal padding, 4px radius, Inter 600 15px.
Full-width below `md` when it is a section's primary action.

| Variant | Default | Hover | Active | Use |
|---|---|---|---|---|
| Primary | `#231F20` bg, white | `#3D3738` | `#151213` | One per screen |
| Primary on dark | `#7AC142` bg, `#231F20` | `#8ACD54` | `#6BAF38` | Charcoal bands |
| Secondary | Transparent, 1px `#C9C6BF` | Border `#231F20`, bg `#F6F7F5` | bg `#D8D6D5` | Paired with primary |
| Tertiary | `#3A7F27`, no chrome | Underline appears | — | Inline |
| Launch | Primary + `↗` | As primary | — | External to a live app; always `target="_blank" rel="noopener noreferrer"` |

Disabled: 50% opacity, `pointer-events: none`, `aria-disabled`.
Loading: label → "Sending…", spinner, `aria-busy`, fields stay readable.

*Anti-patterns.* `active:scale` — consumer-playful, and a transform that should
not fire under reduced motion. Any hover colour outside the token set (the
navy `#1a3a5c` and teal `#00E0B5` removed in Phase 3/3.5 were both this).

### 8.3 Links

| Kind | Treatment |
|---|---|
| Inline | `brand-accent`, underline on hover. Underline always present in running prose |
| Navigation | §8.1 |
| Arrow | Label + `→`, translates 4px on hover. Arrow `aria-hidden` |
| External | `↗` suffix, `rel="noopener noreferrer"`, and the destination host named in the label or nearby |

*Anti-pattern.* `href="#"`. If there is no destination there is no link — Phase 3
removed two social icons and a newsletter form for exactly this.

### 8.4 Cards

Border `1px #D8D6D5`, radius 6px, **no resting shadow**. Hover: border →
`brand-accent`, no `translateY`.

| Card | Anatomy |
|---|---|
| Standard | Heading (h4) · body-small · optional arrow link |
| Application | Screenshot 4:3 top crop · name (Syne 600 19px) · role · 2-line description · `Launch ↗` + `Learn more →`. **Whole card is not a link** — two destinations |
| Solution | Audience name (Syne 600 17px) · their problem in ≤12 words, in their language · `→`. **No icon.** Whole card links |
| Metric | Value (metric token, tabular-nums) · label (body-small `neutral-500`). No border, no card chrome — it is a figure, not an object |
| Evidence | Eyebrow (relationship disclosure where related-party) · title · 2–3 line summary · `Read →`. Whole card links |

*Anti-patterns.* Icon on a card whose heading already carries the meaning.
Uniform card grids that flatten different kinds of thing into one — Phase 3.5
P0-5 found nine cards asserting that applications, capabilities and services
were the same kind of object.

### 8.5 Forms

| Element | Spec |
|---|---|
| Label | Above field, always. Inter 500 14px `brand-primary`. **Never placeholder-as-label** |
| Input | 44px min, 1px `#C9C6BF`, 4px radius, **16px text** (below this iOS zooms on focus), 12px padding |
| Focus | Border `brand-accent` + 3px ring at 2px offset |
| Optional | Marked "(optional)" in the label. Required fields carry **no asterisk** — most fields are required, so marking the minority is less noise |
| Error | Border `#C0392B`, message below in `#C0392B` 14px + 16px icon. `aria-invalid` + `aria-describedby` |
| Error timing | On blur after first interaction, then live on change. **Never on first focus** |
| Summary | On failed submit, a focused summary above the form, each error anchored to its field |
| Success | Replaces the form in place. `role="status"`, focus moves to the heading. **No redirect** — it loses the back button and the analytics attribution |
| Failure | Form **stays populated**, retry offered, plus fallback where one is configured |

### 8.6 Content components

**CTA block.** One per page, at the end. Charcoal, `space-8` padding, centred,
reading width. h2 Syne 700 white, one supporting line `#B3ADA6`, primary + ghost
secondary. No decorative background. **Does not widen past the content container.**

**Breadcrumbs.** 40px band, `surface-elevated`, DM Mono 12px, `/` separator in
`#C9C6BF`. **Labels from a title map, never the URL slug** — "Platform / Apis"
tells a visitor the site was assembled carelessly. Current page `aria-current="page"`,
not a link. A segment that is not itself a page renders as text, not a link.
`BreadcrumbList` JSON-LD.

**Accordion.** All items collapsed on load. Answers **complete in the DOM** at
load, not injected on expand, or structured data and in-page search both break.
`aria-expanded` on a `<button>` header.

**Timeline / roadmap.** Three states, unmistakable: **Live** (solid `brand-accent`
border, filled dot, links); **Building** (solid `#C9C6BF`, half dot, **no link, no
date**); **Future** (dashed, hollow dot, muted, no date). Three-column board at
`lg`, stacked with sticky state headers on mobile. **No timeline axis, no
quarters** — a dated roadmap that slips is a liability with this audience.

**Statistic section.** Metric token, tabular-nums, label beneath. Every figure
must be checkable. No animated counters (see §14).

**Case study / testimonial.** Specified but **not to be used** until a real,
attributable one exists. Related-party evidence discloses the relationship
*above* the claim, at equal or larger type.

### 8.7 Technical visualisation

**Architecture diagram.** Semantic HTML + CSS Grid, **not SVG** — the tiers are
lists of labelled things, and HTML gives text selection, real links, screen-reader
order and reflow for free. Four tiers distinguished by **shape, not colour** (a
four-colour legend is a legend nobody reads):

| Tier | Shape | Why |
|---|---|---|
| Company | Plain text, no container | Not a system component |
| HAOS | One wide filled block, brand green on charcoal | The floor everything rests on |
| Platform services | Small equal bordered chips, dense row, **no links** | Interchangeable foundations, not pages |
| Capabilities | Wide outlined bands spanning full width, dashed side edges | They run *across* applications — the span is literal |
| Applications | Tall solid cards, named, **linked** | Discrete products you can open |

**Workflow / process.** Numbered steps — numbering is legitimate here because it
is a real sequence. Vertical on mobile, horizontal from `lg`. Each step names a
product term.

**Map block.** OpenStreetMap tiles via Leaflet; tile URL is a server setting. Muted
base, brand markers, no 3D, no heat overlays without real data. **Never an ETA or
traffic claim.**

*Anti-pattern.* See §18.1 — the orbital node diagram, explicitly rejected.

---

## 9 · Product evidence system

Ten screenshots of the running applications are the site's strongest asset and
the easiest thing to ruin.

### 9.1 Rules **[APPROVED — Phase 2 §F, Phase 3]**

1. **Never retouch, recolour or redraw.** Edited evidence is not evidence.
2. **Crop is the only editorial control.** Cropping to the informative region is
   legitimate; compositing two screens is not.
3. **No perspective, no 3D tilt, no float.** A tilted device mockup is the
   signature of a company selling an idea.
4. **No annotation drawn over the image.** The caption does that in text, where a
   screen reader reaches it.
5. **Every screenshot carries a caption naming what it proves**, 12–20 words. A
   decorative caption means the screenshot is decoration.
6. **Alt text describes content, not medium** — "…487 birds alive of 500 placed on
   day 24, with a growth chart and a feed conversion figure of 1.392", not
   "screenshot of app".

### 9.2 Framing

**Phone frame.** 6px charcoal bezel, 20px outer radius, 14px inner. No notch, no
speaker, no home indicator, no reflection. Shadow `0 12px 32px -12px rgb(35 31 32 / .22)`
— the one place elevation is meaningful.

**Browser frame.** 32px bar, three 8px `#C9C6BF` dots, URL field showing the real
hostname — itself a small piece of evidence, since the reader can type it in.

**Crops.** `full` (9:19.5, top-anchored) · `top` (4:3, top) · `band` (4:3,
centre 58% — for isolating a region).

### 9.3 The contradiction pattern **[APPROVED — Phase 3]**

Two Farm Intelligence screens disagree about mortality (2.6% vs 0.82%) and batch
day (24 vs 25). This is a **product defect**, recorded in `docs/product-defects.md`.
The design system's job is a safe presentation pattern, never an altered image:

1. **Crop the contradicting figure out of frame.** Load-bearing — with the figure
   not rendered, no layout at any width can juxtapose the two.
2. **Order so they are never adjacent** — `dashboard → reports → livestock`.
3. **Assert it in code.** `assertEvidenceOrdering()` fails in development if the
   order breaks. A comment survives as long as the next person reads it; this runs.

**Generalised rule [SYSTEM].** Where evidence exposes a product defect: crop to
exclude, separate in sequence, assert the constraint in code, and file the defect.
Never edit the asset.

### 9.4 Gallery

Mobile: horizontal snap-scroll, 1.15 cards visible so the cut edge signals more.
Native scroll, **not** a JS carousel — native is keyboard-operable, respects
reduced motion, and costs no JavaScript. The scroll container is
`tabIndex={0}` + `role="region"` + labelled, or keyboard users cannot reach past
the first screen. Tablet 2-col, desktop 3-col, visual container at 1440+.

**No lightbox.** Enlarging a phone screenshot adds nothing and costs a focus trap,
a close affordance and a keyboard contract.

### 9.5 Evidence depth is uneven, and stays visible

Farm Intelligence has six authenticated screens; the other three applications
have one each. **Do not pad the thin ones or hold the deep one back.** Depth
follows what has been captured. A template that requires equal counts is wrong.

---

## 10 · Data and infrastructure visual language

The register is **operational intelligence**, not decorative technology.

| Element | Specification |
|---|---|
| Lines | 1px solid `#D8D6D5` for structure; 1px dashed `#C9C6BF` for optional/implied. **Never animated, never glowing** |
| Nodes | Rectangles with 4px radius. **Not circles** — circles imply orbit, which was rejected |
| Direction | Single arrowhead, 6px, `neutral-700`. Only where flow direction is real information |
| Labels | DM Mono 12px uppercase for structure; Inter 14px for description |
| Status | Text label + shape, **never colour alone**: Live (filled dot + "Live"), Building (half dot + "Building"), Planned (hollow dot + "Planned") |
| Density | Maximum 7 nodes per tier. Beyond that, group |
| Colour | Structural grey by default. Brand green marks exactly one thing per diagram — the element under discussion |
| Maps | Muted greyscale base, brand markers, real coordinates only |

**Every diagram must answer a question a reader actually has.** If it cannot be
captioned with what it explains, it is decoration and does not ship.

---

## 11 · Imagery

### 11.1 Current state

The site ships **no photography**. This is honest — no suitable owned assets
exist — and product screenshots plus architecture carry the visual weight.

### 11.2 Direction, when commissioned **[NEEDS APPROVAL — budget]**

Priority order, highest value first:

1. **Leadership portraits** — blocks a page today. 4:5, consistent crop, neutral
   ground, natural light, no corporate backdrop
2. **Deployment environments** — a real Zimo Clan site, real infrastructure
3. **Engineering** — the team working, screens visible
4. **Field operations** — staff *with* farmers, working; never farmers posed alone

### 11.3 Treatment

| Property | Rule |
|---|---|
| Aspect | 4:5 portraits · 3:2 environment · 16:9 wide only in a visual container |
| Radius | 6px, matching cards |
| Overlay | None. If text must sit on an image, it sits beside it instead |
| Caption | Required. Names what and where. Never a mood line |
| Colour | No filters, no duotone, no brand-colour wash |

### 11.4 Prohibited **[APPROVED — Phase 3.5 §13]**

Stock agriculture of any kind · staged smiling farmer holding produce · poverty
framing · Western farmland standing in for Africa · decorative continent outlines
or maps of Africa as ornament · drone shots without operational purpose ·
futuristic agriculture renders · any image Heraja did not take of an operation
Heraja is not part of.

---

## 12 · Iconography

**Lucide**, single family, no mixing. 1.5px stroke. 16px inline · 20px body ·
24px section headers. `currentColor` only — icons never carry their own hue.
Decorative icons take `aria-hidden="true"`; an icon that is the only label needs
an accessible name.

**No icon on a card whose heading already carries the meaning.** Decorative icons
add visual noise per card and no information.

---

## 13 · Motion

| Token | Value | Use |
|---|---|---|
| `duration-instant` | 100ms | Colour, opacity |
| `duration-fast` | 200ms | Hover, focus, buttons |
| `duration-normal` | 300ms | Dropdowns, accordions |
| `duration-slow` | 500ms | Page-load sequence only |

Easing: `ease-out` `cubic-bezier(0, 0, 0.2, 1)` entering · `ease-in`
`cubic-bezier(0.4, 0, 1, 1)` leaving · `ease-default` `cubic-bezier(0.4, 0, 0.2, 1)`
for anything else. **No spring, no bounce.**

**Permitted:** one page-load sequence per page (copy fades up 12px over 400ms,
hero media follows at +120ms); dropdown/accordion open; hover colour; button
press; image fade on load.

**Prohibited:** scroll-triggered reveals repeated down a page (content that
appears on scroll cannot be found with Ctrl+F, and reads as decoration by the
third repetition) · parallax · floating/orbiting elements · **animated counters**
(a number that counts up is a number performing, and this audience is checking
figures) · animated diagram connectors · anything looping.

**`prefers-reduced-motion: reduce`** — all animation and transition duration to
0.01ms; transforms removed, not merely shortened; card hover keeps its border and
shadow cue and drops the lift; the page-load sequence does not run.

---

## 14 · Accessibility

Target **WCAG 2.2 AA**. Verified state at Phase 3.5: 0 contrast failures across
130 measured nodes, 20/20 tabbed elements show a ring, reduced motion clean, 200%
zoom clean at 640px.

### 14.1 Contrast

Normal text ≥4.5:1 · large text (≥24px, or ≥18.66px bold) ≥3:1 · UI components
and focus indicators ≥3:1 (**2.4.11 Focus Appearance**, new at AA in 2.2).
Measure against the **composited** background where alpha is involved (§2.6).

### 14.2 Focus **[APPROVED — must not regress]**

`3px solid #3A7F27`, `outline-offset: 2px`, 2px radius. On charcoal it switches to
`#7AC142`. **`outline`, not `box-shadow`** — an outline is not clipped by an
ancestor's `overflow: hidden`, which is what makes rings silently vanish inside
scroll containers and cropped cards.

`#3A7F27` measures 4.58:1 on paper and 3.30:1 on charcoal — one value clears 3:1
on both. **Never `#7AC142` on a light ground** (2.20:1). Focus is never removed.

### 14.3 Targets and structure

Touch targets ≥44×44px, ≥8px apart. One `h1` per page, no skipped levels.
Landmarks: `header`, `nav`, `main`, `footer`; skip link first in tab order.
`aria-expanded` + `aria-controls` on every disclosure. Overlays trap focus and
return it; dropdowns do not trap. Form errors programmatically associated and
announced. Body text never below 16px; captions never below 13px. No information
conveyed by colour alone.

### 14.4 Not claimed

**Formal WCAG conformance is not claimed.** Automated and keyboard verification
has been done; screen-reader testing with NVDA/VoiceOver has not.

---

## 15 · Content and visual hierarchy

Priority order for any page: **positioning → evidence → capabilities → products →
solutions → infrastructure → trust → CTA.**

| Device | Rule |
|---|---|
| Eyebrow | DM Mono uppercase `brand-accent`. Names the section's *kind*, not its content. One per section |
| Headline | One h2 per section. 6–12 words. `text-wrap: balance` |
| Lede | One `body-large` per section, max 68ch. Never two |
| Paragraph | `body`, max 72ch. Three sentences or fewer on mobile |
| Metric | Only where the figure is checkable |
| Media | Largest element in any section that contains one |
| Whitespace | Separates *kinds* of content. Equal spacing between unequal things flattens hierarchy |
| Transition | Ground change (paper → surface → charcoal) marks a change of register, not merely a new section |

**Structural devices must encode something true.** Numbered markers only where
order carries information — a real sequence or a typed timeline. Numbering three
unordered benefits `01 / 02 / 03` is decoration.

---

## 16 · Design tokens

Implementation-ready. Names align with the existing codebase where it already has
one; **[NEW]** marks additions Phase 5 introduces.

### Colour
```
--color-brand-primary        #231F20
--color-brand-secondary      #7AC142   /* dark grounds + logo only */
--color-brand-tertiary       #F99D1C   /* dark grounds only */
--color-brand-accent         #3A7F27   /* light-ground green */
--color-brand-accent-warm    #9A5B00   /* light-ground orange */
--color-surface              #FFFFFF
--color-surface-elevated     #F6F7F5
--color-surface-dark         #231F20
--color-neutral-900          #231F20
--color-neutral-700          #4A4546
--color-neutral-500          #6B6A6A
--color-neutral-300          #D8D6D5
--color-neutral-100          #F3F3F2
--color-text-primary         var(--color-neutral-900)          [NEW alias]
--color-text-secondary       var(--color-neutral-700)          [NEW alias]
--color-text-muted           var(--color-neutral-500)          [NEW alias]
--color-text-inverse         #F2F0EC                           [NEW]
--color-border               var(--color-neutral-300)          [NEW alias]
--color-border-strong        #C9C6BF                           [NEW]
--color-success              #3A7F27
--color-warning              #9A5B00
--color-error                #C0392B
--color-info                 #4A4546
--color-focus-ring           #3A7F27
--color-focus-ring-on-dark   #7AC142
```

### Typography
```
--font-display   'Syne', 'Inter', system-ui, sans-serif
--font-body      'Inter', system-ui, -apple-system, sans-serif
--font-mono      'DM Mono', ui-monospace, SFMono-Regular, monospace

--text-display    clamp(2rem, 5vw, 4rem)          /* 800 · lh 1.05 · ls -0.03em */
--text-h1         clamp(1.75rem, 4vw, 3rem)       /* 700 · lh 1.12 · ls -0.025em */
--text-h2         clamp(1.5rem, 3vw, 2.25rem)     /* 700 · lh 1.18 · ls -0.02em */
--text-h3         clamp(1.25rem, 2vw, 1.5rem)     /* 600 · lh 1.30 · ls -0.015em */
--text-metric     clamp(1.75rem, 3vw, 2.5rem)     [NEW]
--text-h4         1.25rem
--text-body-lg    1.125rem
--text-body       1rem
--text-body-sm    0.875rem
--text-caption    0.8125rem                       [NEW]
--text-label      0.75rem
```

### Spacing · Radius · Shadow · Border
```
--space-1 4px    --space-6 48px
--space-2 8px    --space-7 64px
--space-3 16px   --space-8 96px
--space-4 24px   --space-9 128px
--space-5 32px   --space-10 160px

--radius-sm 4px      /* buttons, inputs, tags */
--radius-md 6px      /* cards, panels, dropdowns, images */
--radius-frame 20px  /* phone frame outer */          [NEW]
--radius-none 0      /* full-bleed bands */

--shadow-dropdown  0 8px 24px -8px rgb(35 31 32 / .18)   [NEW]
--shadow-header    0 1px 3px rgb(35 31 32 / .07)         [NEW]
--shadow-frame     0 12px 32px -12px rgb(35 31 32 / .22) [NEW]
/* no resting card shadow — borders instead */

--border-width 1px
--border-width-strong 2px
```

### Containers · Breakpoints · Motion · Z-index
```
--container-reading 720px    [NEW]
--container-content 1280px
--container-visual  1600px   [NEW]
--container-canvas  1920px   [NEW]

--gutter-mobile 16px  --gutter-sm 24px  --gutter-lg 32px
--gutter-xl 48px      --gutter-2xl 64px                  [NEW]

/* Tailwind defaults — do not override */
sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536

--duration-instant 100ms  --duration-fast 200ms
--duration-normal 300ms   --duration-slow 500ms
--ease-out cubic-bezier(0,0,.2,1)
--ease-in  cubic-bezier(.4,0,1,1)
--ease-default cubic-bezier(.4,0,.2,1)

--z-header 50  --z-dropdown 60  --z-overlay 70  --z-skiplink 9999
```

---

## 17 · Tailwind / CSS mapping

**Contract for Phase 5. Not implemented in Phase 4.**

| System concept | Where it lives | Note |
|---|---|---|
| Colour tokens | `:root` in `index.css`, mirrored in `tailwind.config.js` `colors` | Both must agree. Phase 3 found `error` declared as two different reds |
| `display`/`h1`/`h2`/`h3` sizes | **`index.css` `@layer components` only** | Must **not** be `fontSize` keys — utilities outrank components and the fixed size wins over the clamp |
| `h4`, body, label sizes | `tailwind.config.js` `fontSize` | No CSS counterpart, so no collision |
| `screens` | **Absent from config** | Tailwind defaults. Do not re-add |
| Containers | `.container-reading` `.container-heraja` `.container-visual` `@layer components` | `.container-heraja` keeps its name — ~60 call sites |
| Section rhythm | `.section-padding` | `py-16 lg:py-24 xl:py-32` |
| Buttons | `.btn-primary` etc. `@layer components` | Hover values from tokens, never literals |
| Focus | Global `*:focus-visible` + `.section-dark *:focus-visible` | `outline`, never `box-shadow` |
| Long-word guard | Global on `h1–h6` + display classes | `hyphens: auto` then `overflow-wrap: break-word` |
| Grid items with headings | `min-w-0` utility at call site | Cannot be global; must be applied per grid item |

**Phase 5 must not:** re-introduce `screens`; add `display`/`h1`/`h2`/`h3` to
`fontSize`; set `visibility` on the R2 disk; use `box-shadow` for focus.

---

## 18 · What Heraja must never look like

Mandatory negative constraints. Each was either rejected in a prior phase or
found in production.

### 18.1 The orbital node diagram — explicitly rejected

A dark "HAOS" hub orbited by API / Secure / Market / Trace / AI / Identity nodes
on animated dashed rings, on a mint-green panel. Shipped as the homepage hero and
removed in Phase 3.5 (P0-3). It illustrated nothing that exists, on the one
surface where a real product screenshot could have. **Do not reintroduce it in any
form**: no orbits, no radial hub-and-spoke, no animated connectors, no glow.

### 18.2 The rest

| Rejected | Why |
|---|---|
| Generic green farming site | Heraja builds infrastructure; agriculture is the domain, not the theme |
| Crypto / Web3 landing page | Glow, gradients, tokens, neon. Heraja's differentiator is that its products exist |
| Generic SaaS dashboard aesthetic | Fabricated dashboard illustrations — self-defeating when real ones are available |
| Glassmorphism / neon gradients | Fashion with a short half-life on a site arguing for durability |
| Decorative AI graphics | Neural-net motifs with no informational content |
| Excessive rounded cards | Large radii read as consumer-friendly; this asks to be trusted with a government programme |
| Green-on-white text | `#7AC142` at 2.20:1. The single most widespread accessibility failure found |
| Stretched 1920 layout | A 1280 composition with dead margins. §7 exists for this |
| Arbitrary spacing | Values outside the scale. Ten steps is enough |
| Fabricated claims | Invented metrics, customers, partners, certifications, testimonials, leadership, pricing. "99.9% uptime" and "6 applications" were both found and removed |
| Dead affordances | `href="#"`, a form that discards input, a download with no file, "Book Demo" with no booking flow. All four were found in production |

---

## 19 · Quality checklist

Before a component or page is considered complete.

**Brand** ☐ No colour outside the token set ☐ `#7AC142`/`#F99D1C` only on charcoal, logo, or non-text fill ☐ No orbital/glow/gradient decoration ☐ One accent per view

**Typography** ☐ Syne on display only, not below h3 ☐ Eyebrows DM Mono uppercase `brand-accent` ☐ Prose ≤72ch ☐ **Longest word checked at 390px** ☐ `min-w-0` on grid items holding headings ☐ No `display`/`h1`–`h3` in `fontSize`

**Layout** ☐ Correct container (reading / content / visual) ☐ Spacing from the scale ☐ Section rhythm 64/96/128 ☐ Forms and CTA do not widen past content

**Responsive** ☐ 320 · 390 · 430 · 768 · 1024 · 1280 · 1440 · 1920 checked ☐ `scrollWidth === clientWidth` at every width ☐ **Verified with `overflow-hidden` temporarily disabled** — it hides clipping from that test ☐ Nothing meaningful hidden below `lg` ☐ Touch targets ≥44px

**Accessibility** ☐ Contrast measured against the composited ground ☐ Focus ring `outline`, 3px, correct green for the surface ☐ Keyboard-reachable and operable, including scroll containers ☐ One `h1`, no skipped levels ☐ Labels associated, errors announced ☐ Reduced motion removes transforms ☐ 200% zoom clean

**Imagery / evidence** ☐ Screenshots unretouched; crop the only edit ☐ Caption names what it proves ☐ Alt describes content ☐ Contradiction pattern applied where relevant ☐ No stock agriculture ☐ Evidence depth honest

**Motion** ☐ One load sequence per page ☐ No scroll-reveal chains, no counters, no loops ☐ Reduced motion honoured

**Large desktop** ☐ 1440/1600/1920 composed, not stretched ☐ Reading width still ≤720 ☐ Asymmetry only where media earns it ☐ Capped at 1920

**Content integrity** ☐ No invented metric, customer, partner, certification or price ☐ Product terminology preserved ☐ Related-party evidence disclosed above the claim ☐ Every CTA resolves ☐ Nothing advertised that does not exist

---

## 20 · Conflicts with the current implementation

Found during the §25 consistency check. **Phase 5 must resolve each deliberately.**

| # | Current | System says | Severity |
|---|---|---|---|
| 1 | `.container-heraja` = 1280, single container | Three containers (720 / 1280 / 1600) | **High** — the mechanism resolving Phase 3.5 P2-1 |
| 2 | `.section-padding` = `py-20 lg:py-[120px]` (80/120) | 64 / 96 / 128 at mobile / `lg` / `xl` | Medium |
| 3 | `maxWidth.full-bleed` = 1440, unused | Superseded by `--container-visual` 1600 | Low — remove |
| 4 | Gutters `px-4 sm:px-6 lg:px-8 xl:px-12` (16/24/32/48) | Adds `2xl:` 64px | Low |
| 5 | `infra-*` — six concept colours, ~74 call sites | Frozen; retire as components migrate | Low |
| 6 | No `--container-*`, `--text-caption`, `--text-metric`, shadow or gutter-2xl tokens | Introduced in §16 | Medium — additive |
| 7 | `text-wrap: balance` on all headings incl. h4–h6 | Display levels only | Low |

**No conflicts** on: breakpoints (defaults confirmed un-overridden), font families,
the light/dark green rule, focus implementation, error colour, the long-word
guard, or the evidence ordering assertion.

---

## 21 · Requires founder approval

1. **Photography budget and shoot scope** (§11.2). Blocks the honest alternative
   to stock imagery.
2. **Leadership content** — names, roles, photographs, biographies. The page is
   built and stays unpublished until supplied.
3. **Corporate brochure PDF**.
4. **Verified social URLs**.
5. **`AWS_URL`** — the R2 public read address. Without it, admin uploads save and
   then 401 for visitors.
6. **Section rhythm change** (§20 item 2) — a visible density change across every
   page. Worth a look before Phase 5 applies it.

---

## 22 · Validation against prior phases

| Check | Result |
|---|---|
| Contradicts Phase 1 positioning | No — §1 derives from it |
| Contradicts Phase 2 IA | No — no route, nav or section-order change |
| Contradicts Phase 3 | No — accessibility, breakpoints, fonts preserved |
| Contradicts Phase 3.5 | No — resolves the deferred P2-1 |
| Colour accessibility preserved | Yes — §2.1 and §14.2 restate it as binding |
| Syne / DM Mono / Inter preserved | Yes |
| Tailwind default breakpoints preserved | Yes — verified un-overridden |
| 320–390px addressed | Yes — §3.3, §5.2, §6 |
| 1280 / 1440 / 1600 / 1920 / 2560+ addressed | Yes — §7.2 |
| Implementation-ready tokens | Yes — §16 |
| Component states | Yes — §8 |
| Anti-patterns | Yes — §18 |
| Unapproved business claims introduced | None |
| Production code changed | **None** |
