# Phase 5 — High-Fidelity Website Design

The visual blueprint for implementing heraja.com. Translates the approved
positioning, IA, UX architecture and design system into page-level compositions.

**Design only.** No production file was modified in Phase 5.

**Markers.** **[APPROVED]** settled in Phases 1–4, not reopenable · **[SYSTEM]**
a Phase 5 design decision, binding but reviewable · **[RECOMMENDATION]**
guidance, adaptable with reason · **[CONTENT REQUIRED]** blocked on an asset ·
**[NEEDS APPROVAL]** blocked on a founder decision.

---

## 0 · Conflict register — read before designing anything

The Phase 5 brief's §10 page list names **nine pages that do not exist** in the
approved information architecture. The brief's own §1 sets the decision hierarchy
(Phase 4 → 3.5 → 3 → **Phase 2 IA** → 1 → 0) and its §9 says *"Do not restore
removed routes. Do not create routes that Phase 2 removed."* Those two
instructions conflict with §10's list, so §10 loses.

| §10 names | Reality | Resolution |
|---|---|---|
| Platform → Technology, Verification, Coordination, Supply Chain, Identity | None exist. Phase 2 merged Identity and Infrastructure Services into `/platform/architecture`, and Traceability + Operational Intelligence into `/platform/haos` | Designed as **sections within** their approved parent pages, not as routes |
| Solutions → **Farmers** | Phase 1 **D6** explicitly settled that farmers are users of deployed applications, **not a corporate-website audience**. `/farmers` was specifically not built | **Not designed.** Reversing D6 is a positioning decision — **[NEEDS APPROVAL]** if genuinely wanted |
| Solutions → Agricultural Organizations, Agricultural Businesses | Approved names are Cooperatives and Agribusiness | Designed under the approved names |
| Resources → Insights, Article, Documentation | None exist. Phase 1 **D4** records the corporate brochure as the only confirmed document; Phase 3.5 **P1-2** removed cards advertising a whitepaper, documentation and research | **Not designed.** Designing them would re-create the defect Phase 3.5 removed |
| §10 → "Coordination" under Platform, while §10 also forbids reintroducing "Coordination Network" | Self-contradictory. Coordination Network is built but **not deployed** | Appears only on `/platform/roadmap` as **Building**, per Phase 1 §8 |

**What is designed:** the approved **29 routes**, plus 404. Nothing added, nothing
restored.

Two further conflicts inherited from Phase 4 §20, which Phase 5 resolves because
they are composition decisions:

| # | Conflict | Phase 5 resolution |
|---|---|---|
| A | `.container-heraja` is a single 1280 container | Adopts the three-container model (§2). **This is the mechanism that fixes large desktop** |
| B | Section rhythm is 80/120; Phase 4 specifies 64/96/128 | Adopts 64/96/128. Visible density change across every page — **[NEEDS APPROVAL]** |

---

## 1 · Design overview

### 1.1 What the site has to do

A first-time institutional visitor — a ministry programme lead, a lender's risk
team, a development organisation — must be able to establish, without trusting a
single unsupported claim: what Heraja builds, that it exists, how the platform
works, what the products look like, who is accountable, what Zimo Clan is to
Heraja, and how to make contact.

### 1.2 The one compositional idea

**Argument by demonstration.** Every page answers its central question with
something checkable — a screenshot of the running product, an architecture
element, a launchable link — before it explains anything in prose. Phase 3.5
found the homepage doing the opposite: zero images, a fabricated node diagram,
and nine cards asserting that applications and capabilities were the same kind of
thing.

### 1.3 Register

Engineered, operational, restrained. Borders rather than shadows. Charcoal used
deliberately, three times per page at most. One accent per view. Whitespace as
structure, not as filler.

---

## 2 · Container application **[APPROVED — Phase 4 §5]**

The rule that makes large desktop work. Which container a section uses is a
design decision, not a default.

| Container | Width | Used by |
|---|---|---|
| **Reading** | 720 | Problem statements, prose sections, About, Privacy, Terms, FAQ answers, Innovation, Careers |
| **Content** | 1280 | Navigation, cards, grids, forms, metrics, footer, CTA |
| **Visual** | 1600 | Hero media, evidence galleries, architecture diagrams, maps, screenshot compositions |
| **Canvas** | 1920 cap | Charcoal bands, full-bleed grounds. Inner content still uses one of the above |

**Forms and CTA blocks never widen past content.** A 1600px-wide form is worse at
every width than a 640px one.

---

## 3 · Page-family architecture

Five templates cover 29 routes. Per-route variation is content, not layout.

| Family | Routes | Template |
|---|---|---|
| **Home** | `/` | Unique |
| **Application** | `/platform/farm-intelligence` · `/marketplace` · `/echimusika` · `/logistics` | `ApplicationTemplate` |
| **Platform concept** | `/platform` · `/haos` · `/architecture` · `/security` · `/apis` · `/innovation` · `/roadmap` | `ConceptTemplate` |
| **Solution** | `/solutions` + 5 audience routes | `SolutionTemplate` |
| **Evidence** | `/evidence` · `/zimo-clan` · `/pilot` | `EvidenceTemplate` |
| **Corporate / utility** | `/company/*` · `/resources/*` · 404 | `ProseTemplate` + `ContactTemplate` |

---

## 4 · Homepage **[the primary design]**

### 4.1 Purpose and user

Establish **Heraja → HAOS → infrastructure → real operations** without a long
explanation. Primary user: an institutional evaluator who has never heard of
Heraja and has about forty seconds.

### 4.2 Section order **[APPROVED — Phase 1 §13]**

| # | Section | Ground | Container |
|---|---|---|---|
| 1 | Proposition (hero) | paper | content + visual media |
| 2 | The problem | **charcoal** | reading |
| 3 | HAOS | **charcoal** (continuous with 2) | visual |
| 4 | Applications | paper | content |
| 5 | **Product evidence** | `surface-elevated` | visual |
| 6 | Who it is for | paper | content |
| 7 | Proof | paper | content |
| 8 | Technology & trust | `surface-elevated` | content |
| 9 | CTA | **charcoal** | reading |

Three charcoal bands exactly — the Phase 4 budget. Sections 2 and 3 read as one
band with a change of register inside it.

### 4.3 Hero — mobile 390 first

```
├ 16px gutter ─────────────────────────────┤
  [56px header]

  HERAJA AGRO TECHNOLOGIES        ← eyebrow, DM Mono 12px, brand-accent
                                     space-4 below

  The Operating                   ← display, Syne 800, clamp floor 2rem
  Infrastructure                     4 lines at 390. min-w-0 on this item.
  for Modern                         Longest word 336px in a 358px column
  Agriculture                        space-5 below

  Heraja builds the digital       ← body-large, Inter 400, ≤68ch
  backbone that connects…            space-6 below

  ┌───────────────────────────┐   ← primary, full-width, 44px
  │ Explore the platform  →   │
  └───────────────────────────┘      space-2
  ┌─────────────────┐             ← secondary, auto-width
  │ Talk to us      │
  └─────────────────┘                space-6

  ┌───────────────────────────┐   ← fi-livestock, 62% viewport width,
  │  [ product screenshot ]   │      right-aligned, bleeding to the right
  │                           │      edge. Phone frame, 6px bezel.
  └───────────────────────────┘      Top third visible above the fold
```

**Above the fold at 390×844:** eyebrow, full headline, sub-line, primary CTA, and
the top of the screenshot. The visitor sees the proposition *and* evidence that a
product exists before scrolling.

### 4.4 Hero — progressive enhancement

| Width | Composition |
|---|---|
| **768** | Same stack, media 70% width, section padding → space-7 |
| **1280** | 12-col. Copy cols 1–7, media cols 8–12. `items-center`. Media in content container. Padding space-8 |
| **1600** | **Asymmetric.** Copy cols 2–7, media cols 8–12 at **visual container** width, bleeding into the right gutter. Left margin becomes deliberate negative space, not dead space |
| **1920** | As 1600, gutter 64px, padding space-9. Media reaches full visual width. Composition centres in the 1920 canvas |

**The asymmetry is earned by the media.** Phase 4 §7.3: a text-only section stays
symmetric at every width.

### 4.5 Sections 2–9

**2 · The problem** — charcoal, reading container, centred. Eyebrow "The
challenge". h2 6–10 words. **Exactly two sentences.** No CTA, no media. The only
section on the site with nothing to look at, deliberately: it is the one moment
the page asks the reader to think rather than check.

**3 · HAOS** — charcoal continuing, visual container. The architecture diagram
(§9.1) full width. Eyebrow "The platform", h2 expanding the acronym once, 25–40
words, link → `/platform/haos`. Mobile: tiers stack as labelled rows, no
horizontal scroll — the tier relationship *is* the message.

**4 · Applications** — paper, content container. Four `ApplicationCard`s, **2-up
maximum at every width above mobile**. Four across makes each screenshot
unreadable. Section intro ≤20 words. Every card launchable.

**5 · Product evidence** — `surface-elevated`, visual container. Three screens:
**dashboard → reports → livestock** (§6.3). Captions do the work: each names what
the screen proves in 12–20 words. Mobile snap-scroll at 1.15 cards; 3-up from
`lg`; frames ~20% larger at 1600+.

**6 · Who it is for** — paper, content. Five `SolutionCard`s, 2/2/1 at desktop,
1-col mobile. Each states that audience's problem in their language, ≤12 words.
No icons.

**7 · Proof** — paper, content. Two `EvidenceCard`s, equal weight. The Zimo Clan
card **leads with the relationship** ("A Heraja subsidiary and client") above any
description of the deployment — Phase 1 §9 makes this structural, not editorial.
The pilot card leads with "in progress". **No metrics.**

**8 · Technology & trust** — `surface-elevated`, content. Three bordered link
blocks: Architecture · Security · APIs. One line each ≤15 words. No cards, no
icons — this section routes, it does not persuade.

**9 · CTA** — charcoal, reading container. h2 Syne 700 white, one supporting line,
primary (green on dark) + ghost secondary.

### 4.6 Motion

**One** page-load sequence: copy fades up 12px over 400ms, hero media follows at
+120ms. **Nothing else on the homepage animates on load.** No scroll-reveal chain
down sections 2–9 — content that appears on scroll cannot be found with Ctrl+F
and reads as decoration by the third repetition. Under `prefers-reduced-motion`
the sequence does not run at all.

---

## 5 · Application pages

`/platform/farm-intelligence` · `/marketplace` · `/echimusika` · `/logistics`

### 5.1 Structure **[APPROVED — Phase 1 §16]**

| # | Section | Container | Ground |
|---|---|---|---|
| 1 | What it is — hero, **launch CTA above the fold** | content + visual | paper |
| 2 | Who uses it — two columns: organisation, end user | content | paper |
| 3 | The problem | reading | **charcoal** |
| 4 | How it works — numbered workflow | content | paper |
| 5 | **Product evidence** | visual | `surface-elevated` |
| 6 | Data & verification | reading | paper |
| 7 | Place in HAOS — architecture fragment | visual | paper |
| 8 | Integration → APIs *(omitted where not evidenced)* | content | paper |
| 9 | Implementation | reading | paper |
| 10 | CTA — Launch + Talk to us | reading | **charcoal** |

**No availability state anywhere.** All four are live, so no badge, no "coming
soon", no disabled button. Sticky bottom CTA bar on mobile carrying the launch
action.

### 5.2 Terminology lock **[APPROVED — Phase 1 §16]**

Enforced by CI over the content files, not by review. **Feed served / Water
served** — never "used" or "consumed". **Feed Conversion (as served)** — never
"efficiency". **Morning report / Evening report** — never one "daily report".
**Production unit** — never "farm unit". **Outdoor temperature** — never "house
temperature". **Batch request** with a `BR-` reference.

Copy that contradicts a screenshot on the same page is worse than no copy.

### 5.3 Farm Intelligence — the strongest page **[APPROVED — Phase 1]**

Six authenticated screens make this the only page that shows a product working
end to end. Evidence order and what each caption must name:

| # | Screen | Crop | Caption names |
|---|---|---|---|
| 1 | Dashboard | **band** | The system computing an overdue vaccination against a species-specific interval |
| 2 | Daily Report | full | *"Which round is this? Morning / Evening"* and *"Feed served (kg)"* — the measurement-honesty argument |
| 3 | Livestock | full | Growth from logged weigh-ins; *Feed Conversion (as served)* 1.392; 2.6% mortality on day 24 |
| 4 | Vaccinations | full | Named vaccines, route, batch lot — a record built for audit |
| 5 | Profile | full | Farm identity and size as recorded |
| 6 | Wallet | full | Settlement is a platform service, not a farm feature |

Treated **larger** than the other three applications' evidence. Depth follows what
was captured; the thinner pages are not padded and this one is not held back.

### 5.4 The other three

One signed-out screen each, single `ProductScreenshot` in a phone frame. Their
evidence sections are visibly shorter and that is correct. **[CONTENT REQUIRED]**
Authenticated captures would roughly triple the site's evidence base — a few
hours per application using the same method.

---

## 6 · Product evidence system **[APPROVED — Phase 4 §9]**

### 6.1 Rules

Never retouch, recolour or redraw. **Crop is the only editorial control.** No
perspective, no 3D tilt, no float. No annotation drawn over the image — the
caption does that in text where a screen reader reaches it. Every screenshot
carries a caption naming what it proves. Alt text describes content, not medium.

### 6.2 Framing

Phone: 6px charcoal bezel, 20px outer / 14px inner radius. No notch, no speaker,
no home indicator, no reflection. `shadow-frame` — the one place elevation is
meaningful. Browser: 32px bar, three 8px dots, URL field showing the **real
hostname**, itself a small piece of evidence.

### 6.3 The contradiction pattern **[APPROVED — Phase 3.5]**

Two Farm Intelligence screens disagree on mortality (2.6% vs 0.82%) and batch day
(24 vs 25). This is a **product defect** (`docs/product-defects.md`), not a design
problem. Presentation pattern:

1. **Crop the contradicting figure out of frame** — load-bearing. With the figure
   not rendered, no layout at any width can juxtapose them.
2. **Order so they are never adjacent** — dashboard → reports → livestock.
3. **Assert it in code** — `assertEvidenceOrdering()` fails in development.

**Never edit the asset.** Verified at 390/768/1280/1440/1920.

### 6.4 Gallery responsive

| Width | Behaviour |
|---|---|
| 390 | Horizontal snap-scroll, 1.15 cards visible so the cut edge signals more. Native scroll, `tabIndex={0}` + `role="region"` + label — without it keyboard users cannot reach past the first screen |
| 768 | 2-col grid |
| 1280 | 3-col grid, content container |
| 1600 | 3-col, **visual container**, frames ~20% larger |
| 1920 | As 1600, wider gaps (space-6) |

**No lightbox.** Enlarging a phone screenshot adds nothing and costs a focus trap.

---

## 7 · Platform concept pages

`/platform` · `/haos` · `/architecture` · `/security` · `/apis` · `/innovation` · `/roadmap`

### 7.1 `/platform` — the conceptual correction

Its job is to make **services / capabilities / applications** read as three
different *kinds* of thing. Three bands, and density decreases while visual weight
increases as you descend — the shape itself says "these are foundations, these are
properties, these are products":

| Band | Treatment |
|---|---|
| Platform services (7) | Dense bordered chips, equal size, **no links** — they are not pages |
| Capabilities (2) | Two wide outlined bands spanning full width, dashed side edges — they run *across* applications |
| Applications (4) | Tall solid cards with screenshots, **linked** |

### 7.2 `/platform/haos`

Definition (acronym expanded once, prominently) · problem · multi-tenancy ·
shared services · the two capabilities · data & audit model · integration · CTA.
Carries `#traceability` and `#operational-intelligence` anchors so the Phase 1
redirects land on the right section rather than the page top.

**The only interactive diagram on the site**, and only because a nested structure
genuinely benefits. Radio-group semantics, arrow-navigable, all panels in the
DOM, fully readable without JS.

### 7.3 `/platform/architecture`

Absorbs Identity and Infrastructure Services as `#identity` and
`#infrastructure-services` sections. Must visually explain multi-tenancy,
identity, shared services, data flow, audit, APIs. **Only components evidenced in
the codebase appear** — a labelled box with no elaboration is honest; an invented
sub-component is not.

### 7.4 `/platform/security`

Reading container, bordered panels, 40–70 words each: access control · identity ·
permissions · audit trails · data governance · machine authorization ·
verification. **No badges, no certification marks, no "bank-grade" language.**

### 7.5 `/platform/apis`

Full-width code panel per section, dark ground, DM Mono, copy control — **rendered
as a designed empty state** reading "Reference documentation is published to
partners on request", with a CTA. No fabricated endpoints, no fake curl.

### 7.6 `/platform/innovation`

**Deliberately the plainest page on the site.** Reading container, prose, bordered
sub-heads. No research-paper facsimiles, no model names, no accuracy figures, no
neural-net graphics. Innovation pages fail by looking exciting; the credibility of
R&D copy is inverse to its decoration.

### 7.7 `/platform/roadmap`

Three states, unmistakable (Phase 4 §8.6): **Live** solid accent border, filled
dot, links · **Building** solid grey, half dot, **no link, no date** · **Future**
dashed, hollow dot, muted. Coordination Network sits in Building — the only place
it appears on the site. Three-column board at `lg`, stacked with sticky state
headers on mobile. **No timeline axis, no quarters.**

---

## 8 · Solutions, Evidence, Corporate

### 8.1 Solution pages — avoiding five identical pages

The failure mode of an audience template is five pages differing only in a noun.
Three **structural** mechanisms prevent it:

1. **Different applications per page.** Government → Farm Intelligence +
   Marketplace + Logistics; Financial Institutions → Farm Intelligence + the
   verification model; Cooperatives → all four with mobile emphasis.
2. **Different evidence emphasis.** A per-audience field selects pilot /
   Zimo Clan / product screenshots / architecture. Government leads with
   governance; Cooperatives leads with a phone screenshot.
3. **Different CTA verb**, which pre-selects the contact form's enquiry type:
   *Discuss a programme* · *Discuss data & risk* · *See how it works* ·
   *Talk to us*.

Layout: 8/4 at desktop — content plus a sticky sidebar holding the CTA and a
three-line relevant-applications list. At 1600+ the sidebar becomes a **secondary
rail** on cols 10–12. Mobile: single column, sticky bottom CTA bar.

### 8.2 `/evidence/zimo-clan` — disclosure is structural

The relationship statement is the **page eyebrow and the first line of the H1
block**, above any description of the deployment. Not a footnote, not a panel at
the bottom, not smaller type.

Immediately under the H1: a bordered relationship diagram —
`Heraja Agro Technologies → HAOS → Zimo Clan` — with the subsidiary edge
labelled. The reader cannot reach the deployment description without passing the
relationship. **No metrics.** Never "client" unqualified.

### 8.3 `/evidence/pilot`

Sectors · what is being tested · methodology · what is measured · current status ·
**what is not yet known**. That last section is a designed, prominent panel of
equal weight — not a disclaimer. A pilot page that lists its own open questions is
more credible than one that does not, and this audience knows what a pilot is.

### 8.4 `/company/leadership` — not designed as a live page

**[CONTENT REQUIRED]** The page is built and self-publishing: it renders the 404
while the admin has no leadership entered, stays out of the sitemap, and the
footer link is absent. Adding people in the HAOS admin turns all three on
together. **Phase 5 deliberately does not design it as a live page** — an empty
leadership page is worse than none, because the visitor most likely to open it is
checking whether the company is real.

### 8.5 `/company/contact`

Two-column desktop: form 7 cols, context 5 cols. Single column mobile, form
first. Fields: Name · Work email · Organisation · Enquiry type · Country/region ·
Message. **Not collected:** phone, budget, timeline.

Six states designed (§11.3). Failure **preserves input** and offers retry plus a
prefilled mailto where a fallback address is configured — never a dead end, never
a cleared form.

### 8.6 `/resources/corporate-brochure`

**[CONTENT REQUIRED]** No PDF exists. Designed with two states and no third:
either a real download, or a request path to Contact. **No disabled button** — it
advertises something the visitor cannot have and leaves them nowhere to go.

### 8.7 Prose and utility

About, Careers, Privacy, Terms, FAQ: reading container, `ProseTemplate`,
numbered sections, visible "last updated" on legal pages. **Legal pages that look
designed look like marketing** — plain, dense, unstyled beyond the type system.

**404:** plain and useful. What happened, links to the four sections, link to
Contact. No illustration. It will take real traffic from 25 removed URLs.

---

## 9 · Data and infrastructure visual language **[APPROVED — Phase 4 §10]**

### 9.1 Architecture diagram

Semantic HTML + CSS Grid, **not SVG** — the tiers are lists of labelled things,
and HTML gives text selection, real links, screen-reader order and reflow for
free. Four tiers distinguished by **shape, not colour**:

```
Heraja Agro Technologies Limited          plain text, no container
        │
        └── HAOS                          one wide filled block, green on charcoal
              │
              ├── PLATFORM SERVICES       small equal chips, dense row, no links
              │   Identity · Verification · Notifications · Multi-tenancy
              │   Audit trail · APIs · Security
              │
              ├── CAPABILITIES            wide outlined bands, full width,
              │   Traceability            dashed side edges — they span
              │   Operational intelligence
              │
              └── APPLICATIONS            tall solid cards, named, linked
                  Farm Intelligence · Marketplace · e-Chimusika · Logistics
```

Mobile: chips wrap to 2-col, capability bands stay full width, application cards
stack. **No horizontal scroll** — the tier relationship is the message.

### 9.2 Everything else

1px solid `#D8D6D5` for structure, 1px dashed for optional. **Never animated,
never glowing.** Nodes are rectangles with 4px radius — **not circles**, which
imply orbit. Single 6px arrowheads only where flow direction is real information.
Status is **text label + shape, never colour alone**. Maximum 7 nodes per tier.
Structural grey by default; brand green marks exactly one thing per diagram.

**Every diagram must answer a question a reader actually has.** If it cannot be
captioned with what it explains, it is decoration and does not ship.

### 9.3 Maps

Muted greyscale base, brand markers, real coordinates only. A map answers a
question or it is not used. **Never an ETA or traffic claim.**

---

## 10 · Component variants

All from Phase 4 §8. Phase 5 introduces **no new components**. Variants used:

| Component | Variants |
|---|---|
| Navigation | desktop inline + 2 dropdown panels · mobile overlay + accordions |
| Button | primary · primary-on-dark · secondary · tertiary · launch |
| Card | application · solution · evidence · metric · standard |
| ProductScreenshot | phone · browser · frameless (in cards); crops full · top · band |
| Gallery | snap-scroll (mobile) · grid (tablet+) |
| Diagram | static · interactive (HAOS only) · fragment (application pages) |
| Template | Application · Concept · Solution · Evidence · Prose · Contact |

**Justification for any new component** must state: name, purpose, why existing
components cannot support it, variants, responsive behaviour. Phase 5 needed none.

---

## 11 · Interaction states

### 11.1 Buttons

Default · hover · active · focus (3px `#3A7F27` outline, 2px offset; `#7AC142` on
charcoal) · disabled (50% opacity, `pointer-events: none`, `aria-disabled`) ·
loading (label → "Sending…", spinner, `aria-busy`, fields stay readable).

**No `active:scale`** — consumer-playful, and a transform that should not fire
under reduced motion.

### 11.2 Navigation

| State | Treatment |
|---|---|
| Default | `neutral-700` |
| Hover | `brand-primary`, **no underline** — competes with the active marker |
| Active section | 600 weight + 2px accent underline 6px below baseline, on all child routes |
| Focus | 3px accent ring |
| Expanded | Active + chevron 180° over 150ms; `aria-expanded` |

### 11.3 Forms

Default · focus (accent border + ring) · populated · **error** (on blur after
first interaction, then live on change — never on first focus; `aria-invalid` +
`aria-describedby`) · **submitting** · **success** (replaces form in place,
`role="status"`, focus to heading, **no redirect** — it loses the back button and
the analytics attribution) · **failure** (input preserved, retry, mailto
fallback) · disabled.

### 11.4 Accordion

Closed · hover · focus · open. All collapsed on load. **Answers complete in the
DOM at load**, not injected on expand, or structured data and in-page search both
break.

### 11.5 Mobile navigation — full interaction

Trigger 44×44 hamburger → X. Overlay fades + 8px translateY over 200ms — **full
screen, not a drawer**. Groups expand as accordions **in place**, one level, no
drill-in, both may be open at once. CTA pinned at the bottom with safe-area
inset. Body scroll locked with position restored on close. **Focus trapped**;
first focusable receives focus on open; trigger regains it on close. Escape
closes. `history.pushState` on open so **browser back closes the menu before
navigating**. Dismiss also on backdrop tap and route change. Targets ≥44×44,
≥8px apart.

**Not a compressed desktop nav:** no dropdown panels, no hover, no multi-column.

---

## 12 · Accessibility **[APPROVED — Phase 4 §14]**

WCAG 2.2 AA. Normal text ≥4.5:1 · large ≥3:1 · UI and focus ≥3:1 (**2.4.11**,
new at AA in 2.2). Contrast measured against the **composited** ground where
alpha is involved.

Focus: `3px solid #3A7F27`, `outline-offset: 2px` — **`outline`, not
`box-shadow`**, because an outline is not clipped by an ancestor's
`overflow: hidden`. **Never `#7AC142` on a light ground** (2.20:1).

Targets ≥44×44px. One `h1`, no skipped levels. Landmarks + skip link first in tab
order. `aria-expanded`/`aria-controls` on disclosures. Overlays trap focus and
return it; dropdowns do not. Body ≥16px, captions ≥13px. **No information by
colour alone.** Reduced motion removes transforms, not merely shortens them.

**Not claimed:** formal conformance. Screen-reader testing with NVDA/VoiceOver
has not been done.

---

## 13 · Large-desktop composition **[APPROVED — Phase 4 §7]**

| Width | What changes |
|---|---|
| **1280** | Baseline. Content 1280, gutter 48, everything symmetric |
| **1440** | Media and diagrams begin exceeding the content column. Section padding → space-9 |
| **1600** | **Asymmetry begins.** Hero copy cols 2–7, media cols 8–12 at visual width bleeding into the gutter. Reading blocks stay 720 and **left-align to the content column**, not centre. Solution pages gain a secondary rail |
| **1920** | Gutter 64. Media at full visual width. Evidence frames ~20% larger. Composition centres in the canvas |
| **>1920** | **Canvas capped.** Symmetric margin only. No 2560 composition exists |

**Four rules:** never add content to fill space · reading width never exceeds 720
· forms and CTA never widen · **asymmetry is earned by media**, so text-only
sections stay symmetric at every width.

---

## 14 · Imagery **[APPROVED — Phase 4 §11]**

The site ships **no photography** and that is honest — no suitable owned assets
exist, and product screenshots plus architecture carry the visual weight.

**[NEEDS APPROVAL]** If commissioned, priority order: leadership portraits (blocks
a page today) · deployment environments · engineering · field operations with
staff *and* farmers.

**Prohibited:** stock agriculture of any kind · staged smiling farmer holding
produce · poverty framing · Western farmland standing in for Africa · decorative
Africa outlines · drone shots without operational purpose · futuristic
agriculture renders.

Where product evidence communicates better than photography, use the evidence.

---

## 15 · Content dependencies

| Item | Blocks | Degraded state |
|---|---|---|
| Leadership | `/company/leadership` | Route 404s, absent from sitemap and footer. Self-publishing from admin |
| Corporate brochure PDF | Download control | Request path to Contact |
| Social URLs | Footer icons | Nothing rendered |
| `AWS_URL` (R2 public address) | Admin uploads | Uploads save then 401 — admin warns and steers to URL fields |
| Authenticated captures for 3 apps | Evidence depth | Single signed-out screen each, honestly thinner |
| Verified per-application copy | Application pages | Minimal defensible copy |

**Ship rule:** a section whose required input is missing renders the placeholder
in development and **omits the section entirely in production**. Never a
plausible-sounding substitute; never an empty heading.

---

## 16 · Needs-approval register

| # | Decision | Why it needs you |
|---|---|---|
| 1 | **Section rhythm 80/120 → 64/96/128** | Visible density change on every page |
| 2 | **Three-container adoption** | Fixes large desktop; touches ~60 `.container-heraja` call sites |
| 3 | **Farmers as a website audience** | §10 of the brief asks for it; Phase 1 **D6** settled the opposite. Reversing D6 is a positioning decision |
| 4 | Photography budget and shoot scope | Blocks the honest alternative to stock |
| 5 | Leadership content | Blocks the highest-value credibility page |
| 6 | Brochure PDF · social URLs · `AWS_URL` | Each blocks a designed degraded state |
| 7 | Authenticated captures for the other three applications | Would roughly triple the evidence base |

---

## 17 · Developer handoff

**Build order.** Containers and section rhythm → templates → homepage → application
pages → solutions → evidence → corporate/utility.

**Non-negotiable at implementation:**

- `min-w-0` on every grid item containing a heading. Without it the item refuses
  to shrink below its longest word and an ancestor `overflow-hidden` clips the
  text *while hiding it from `scrollWidth` overflow tests*.
- `display`/`h1`/`h2`/`h3` stay **out** of Tailwind `fontSize`. Utilities outrank
  components, and the fixed size beats the `clamp()`.
- **Do not re-add `screens`.** Tailwind defaults.
- Focus uses `outline`, never `box-shadow`.
- Evidence ordering assertion stays.
- Verify overflow **with `overflow-hidden` temporarily disabled** — it hides
  clipping from the very test meant to find it.

**Verification widths:** 320 · 390 · 430 · 768 · 1024 · 1280 · 1440 · 1600 · 1920.

---

## 18 · Design QA checklist

**Strategy** ☐ Positioning legible in 40 seconds ☐ Evidence before assertion on every page ☐ Nothing appears invented

**IA** ☐ 29 approved routes, no more ☐ No removed route restored ☐ Leadership not designed as live ☐ Coordination Network only on the roadmap as Building

**Visual system** ☐ Phase 4 tokens only ☐ `#7AC142`/`#F99D1C` never text on light ☐ Syne display only ☐ Eyebrows DM Mono accent ☐ Correct container per section

**Mobile-first** ☐ Composed at 390 first ☐ Longest word checked at 390 ☐ `min-w-0` on heading grid items ☐ Targets ≥44px ☐ Nothing meaningful hidden below `lg`

**Large desktop** ☐ 1600/1920 composed, not stretched ☐ Reading ≤720 ☐ Forms/CTA not widened ☐ Asymmetry earned by media ☐ Capped at 1920

**Evidence** ☐ Unretouched; crop only ☐ Caption names what it proves ☐ Alt describes content ☐ dashboard → reports → livestock ☐ Contradicting figures never co-visible ☐ Depth honest

**Accessibility** ☐ AA measured on composited grounds ☐ Focus `outline`, correct green per surface ☐ Keyboard-operable incl. scroll containers ☐ One `h1` ☐ Errors announced ☐ Reduced motion removes transforms ☐ 200% zoom clean

**Motion** ☐ One load sequence per page ☐ No scroll-reveal chains, counters or loops

**Content integrity** ☐ No invented metric, customer, partner, certification, price ☐ Product terminology preserved ☐ Zimo Clan relationship above the claim ☐ Every CTA resolves ☐ Nothing advertised that does not exist

---

## 19 · Validation

| Width | Result |
|---|---|
| 390 | Hero verified: 4-line headline, no clipping, no mid-word break, single primary CTA, screenshot peeks above fold |
| 768 | Two-column card grids; nav still overlay — four items + CTA + two dropdown triggers do not fit at 768 without shrinking targets below 44px |
| 1280 | 12-col baseline, 7/5 hero, symmetric |
| 1600 | Asymmetric hero, visual container, reading blocks left-aligned |
| 1920 | Media at full visual width, gutter 64, composition centred |

Checked against: horizontal overflow · clipped headings · broken grid items ·
unreadable text · CTA collisions · oversized screenshots · whitespace balance ·
component consistency · control accessibility · hierarchy · contradictory
evidence placement.

**Measured, not assumed:** the 390 hero and the evidence ordering were verified
against the running build during Phase 3.5 and Phase 4. **The 1600 asymmetric
composition is specified but not yet built** — its first real test is Phase 6.
