# Phase 7 — decision register

Every unresolved item from Phase 6, plus everything Phase 7 verification turned
up. Produced **before** any content was changed, per the Phase 7 brief §3.

Classification is one of `VERIFIED` · `NEEDS VERIFICATION` · `ROADMAP` ·
`REMOVED`. Nothing here is resolved silently.

**Evidence standard used.** Source code alone is not proof a product exists —
but source code *plus* a verified live deployment is reasonable evidence of what
that deployment does. Where a capability is implemented but its behaviour is
narrower than the marketing word for it, the narrower fact wins. That rule
changed three claims below, one of which Phase 6 had already approved.

---

## A · Application deployment status — re-verified 2026-08-18

Phase 6 relied on a check dated 2026-08-16. Re-run for release.

| Host | HTTP | `<title>` | Classification |
|---|---|---|---|
| `marketplace.heraja.com` | 200 | HAOS Marketplace | **VERIFIED** live |
| `echimusika.heraja.com` | 200 | e-Chimusika | **VERIFIED** live |
| `farm-web.heraja.com` | 200 | Heraja Farm Intelligence | **VERIFIED** live |
| `logistics.heraja.com` | 200 | HAOS Logistics | **VERIFIED** live |
| `coordination-web.heraja.com` | 404 | — | **ROADMAP** — correctly absent from the site |

Two false negatives during verification, recorded because acting on either
would have produced wrong work:

* A rapid sequential sweep returned `000` (connection failure) for all five
  hosts. `000` is not a 404 — it is curl failing to connect. Retried with
  spacing, four returned 200.
* `farm-web.heraja.com` failed to resolve on the local resolver but resolves
  correctly via 8.8.8.8 (`216.198.79.1`) and returns 200 with the expected
  title. A DNS timeout and a missing host are indistinguishable without
  checking, which is the same trap recorded in `liveApps.ts` about
  `farm.heraja.com`.

**Action:** none. `liveApps.ts` is accurate. The "four applications, deployed
and publicly reachable" claim is re-confirmed.

---

## B · Careers benefits

| Field | Detail |
|---|---|
| **Item** | Competitive compensation · Health insurance · Flexible working · Professional development budget · Meaningful equity participation · Annual team retreats |
| **Route** | `/company/careers` |
| **Current public state** | Withheld. Not rendering. |
| **Evidence available** | None. No HR document, offer letter, handbook or owner statement in the repository or this session. |
| **Evidence source** | — |
| **Classification** | **NEEDS VERIFICATION** (all six) |
| **Action required** | Company confirmation. Until then they stay withheld and stay recorded verbatim in `content-integrity-register.md` CI-063 → CI-068. |

The Phase 7 brief did not supply verification, so nothing is restored. No
replacement benefit was invented, and no contrary claim ("no benefits", "no
current openings") was written — both would be equally unsupported.

`"We're hiring"` stays out of the H1 for the same reason: there are no verified
active vacancies, so a phrase implying active hiring is not available.

---

## C · "Founded in Lagos, Nigeria"

| Field | Detail |
|---|---|
| **Item** | "Heraja Agro Technologies was founded in Lagos, Nigeria" |
| **Route** | `/company/about` |
| **Current public state** | Rendering |
| **Evidence available** | Pre-existing company copy carried from the site Phase 0 audited. No incorporation record, registry entry or owner statement available. |
| **Evidence source** | The company's own prior website — which the Phase 7 brief explicitly states is *not* automatically verification. |
| **Classification** | **NEEDS VERIFICATION** |
| **Action required** | Company confirmation, distinguishing founding location from registration, headquarters and current operating location — the brief §5 is right that these are four different claims. |

**Decision: neutralised, not deleted.** The brief §5 says if not verified,
"remove or neutralize the claim". The sentence is rewritten so it no longer
asserts a founding *event location* while keeping the observation that motivated
the company, which is not a factual claim about corporate history. Nigeria as
the operating context is separately supported — the pilot, the geography data
and Zimo Clan are all Nigerian.

No substitute founding location was guessed.

---

## D · Leadership

| Field | Detail |
|---|---|
| **Item** | Named leadership profiles |
| **Route** | `/company/leadership` |
| **Current public state** | Withheld. Route renders 404, omitted from sitemap, footer link absent. |
| **Evidence available** | `src/content/site-content.json` → `"leadership": []` |
| **Evidence source** | HAOS admin, fetched at build time |
| **Classification** | **NEEDS VERIFICATION** |
| **Action required** | Enter people in the HAOS admin. The next build turns the page, the footer link and the sitemap entry on together. |

Nothing was inferred from commits, email addresses, filenames or drafts. The
About page's leadership link remains behind `hasLeadership`.

---

## E · Corporate brochure PDF

| Field | Detail |
|---|---|
| **Item** | Downloadable corporate brochure |
| **Route** | `/resources/corporate-brochure` |
| **Current public state** | Two-state degrade: no download control, a request path to Contact instead |
| **Evidence available** | `site-content.json` → `brochure.available: false`, `url: ""` |
| **Evidence source** | HAOS admin |
| **Classification** | **NEEDS VERIFICATION** (the artefact does not exist) |
| **Action required** | Upload a real PDF in the admin. Availability is derived from the URL, so the download appears on the next build. |

The fabricated seven-item "What's Inside" list stays deleted. No contents are
described, because nobody knows what the document contains.

---

## F · Social URLs

| Field | Detail |
|---|---|
| **Item** | Official social profile links |
| **Route** | Footer, all routes |
| **Current public state** | Omitted |
| **Evidence available** | `site-content.json` → `"social": {}` |
| **Evidence source** | HAOS admin |
| **Classification** | **NEEDS VERIFICATION** |
| **Action required** | Exact official URLs, entered in the admin. |

No handle was guessed and no platform search URL substituted. A missing social
link is preferable to a false official one.

---

## G · Zimo Clan figures

| Field | Detail |
|---|---|
| **Item** | `500+ partner farms` · `₦2B+ production value` · `24hr buyer-matching turnaround` |
| **Route** | `/evidence/zimo-clan` |
| **Current public state** | Removed. No metrics on the page. |
| **Evidence available** | None attributable |
| **Evidence source** | — |
| **Classification** | **REMOVED** |
| **Action required** | Only restorable with a source, provenance, context and current validity. If restored, phrased as Phase 1 §9 requires — "Zimo Clan achieved X on HAOS", never "Heraja facilitated X". |

The relationship itself — Heraja owns Zimo Clan — is **VERIFIED** and is
structural on the page: eyebrow, first line under the H1, and a diagram with the
ownership edge labelled.

The four product names (Animal Tracker · Farmer Groups · Farm Logistics · Sell &
Earn) remain **VERIFIED** against Zimo Clan's own product source.

---

## H · Authenticated application captures

| Field | Detail |
|---|---|
| **Item** | In-product screenshots for Marketplace, e-Chimusika, Logistics |
| **Route** | The three product pages |
| **Current public state** | One unauthenticated home capture each, already committed and byte-identical to `HEAD` |
| **Evidence available** | `marketplace-home.png`, `echimusika-home.png`, `logistics-home.png` |
| **Evidence source** | Repository, verified unmodified |
| **Classification** | **VERIFIED** for what they show — the deployed application's entry screen. **NEEDS VERIFICATION** for anything deeper. |
| **Action required** | Authenticated captures, if in-product evidence is wanted. |

No screenshot was generated, mocked or borrowed. Captions describe the entry
screen and do not imply users, volume or functionality beyond it.

---

## I · Marketplace content — the main content task

**Classification: VERIFIED**, from `routes/gateway/haos-marketplace.php` (41
endpoints) and `Applications/HaosMarketplace/`, against a deployment verified
live above.

| Capability | Evidence | Verdict |
|---|---|---|
| Supply batches — register, list, update, retire | `supply-batches` CRUD | VERIFIED |
| Record a sale that happened off-platform | `supply-batches/{id}/informal-sale` | VERIFIED |
| Buyer procurement requests | `requests` CRUD | VERIFIED |
| Browse available supply | `supply` | VERIFIED |
| Orders — status progression, cancel, reorder, rate | `orders/{id}/status`, `cancel`, `reorder`, `rate` | VERIFIED |
| Settlement | `orders/{id}/settle` | VERIFIED |
| Wallet — balance, history, transfer, swap, withdraw, bank accounts, funding | 14 `wallet/*` endpoints | VERIFIED |
| Aggregation across farms into one order | `aggregation-network`, order match records | VERIFIED |
| Delivery addresses | `delivery-addresses` CRUD | VERIFIED |

### Claims the page currently makes that verification does **not** support

| Current claim | Finding | Classification |
|---|---|---|
| "Pricing Intelligence — market data and pricing analytics for informed negotiations" | `MarketIntelligenceService` aggregates **recorded supply quantity and regional demand**, week over week. There is no pricing analytic. | **REMOVED** |
| "Market Analytics — comprehensive market intelligence and performance dashboards" | Same service. "Comprehensive" and "performance dashboards" overstate an 8-week supply trend and a regional demand comparison. | **REMOVED** |
| "Quality Verification — quality inspection workflows integrated into every transaction" | No quality-inspection endpoint exists in the marketplace application. | **REMOVED** |
| "Demand Matching — intelligent matching of verified supply with authenticated demand" | Requests and supply exist and orders aggregate across farms; nothing supports "intelligent". | **REMOVED** (reworded to what aggregation does) |
| "Reduced counterparty risk" | An outcome claim with no measurement behind it. | **REMOVED** |

Worth recording: `MarketIntelligenceService`'s own docblock states it is
*"deliberately NOT a forecast … per the platform owner's explicit instruction to
build real historical aggregation now rather than fabricate predictive
numbers"*, and that a trend without prior-period data returns `null`, not a
guess. The product already holds the standard the marketing copy had drifted
from.

---

## J · Logistics content

**Classification: VERIFIED**, from `routes/gateway/logistics.php` (76 endpoints)
plus `LogisticsController`, against a deployment verified live above.

| Capability | Evidence | Verdict |
|---|---|---|
| Driver and vehicle registration | `drivers`, `vehicles` | VERIFIED |
| Vehicle readiness, condition, maintenance issues raised and resolved | `vehicles/readiness`, `maintenance-issues` | VERIFIED |
| Assignments — dispatch queue, driver assignment, stage progression | `assignments/*` | VERIFIED |
| Per-phase inspections | `assignments/{id}/inspection/{phase}` | VERIFIED |
| **Cold chain — readings, history, live monitor, configurable thresholds** | `cold-chain-readings`, `cold-chain-monitor`, `cold-chain-thresholds` | VERIFIED — **currently unclaimed on the page** |
| Driver-logged route checkpoints with coordinates | `assignments/{id}/checkpoints` | VERIFIED |
| Route templates, matched to a job | `route-templates`, `route-templates/match` | VERIFIED |
| Zones, warehouses, warehouse verification | `zones`, `warehouses`, `warehouses/{id}/verify` | VERIFIED |
| Carrier options, rates, dispatch rules | `carrier-options`, `carrier-rates`, `dispatch-rules` | VERIFIED |
| Driver capabilities — declared, then verified | `drivers/{id}/capabilities/verify` | VERIFIED |
| Order tracking — stage, pickup/delivery times, checklist | `input-orders/{id}/tracking` | VERIFIED |
| Receipt confirmation and driver rating | `confirm-receipt`, `rate-driver` | VERIFIED |
| Incidents | `incidents` | VERIFIED |
| Earnings and statements, wallet | `earnings`, `wallet/*` | VERIFIED |
| Map | `map-config` | VERIFIED |

### Claims the page currently makes that verification does **not** support

| Current claim | Finding | Classification |
|---|---|---|
| "Route Planning — routing that accounts for aggregation points, **road conditions**, and delivery windows" | Route **templates** are matched to a job. Nothing reads road conditions, and the map carries no traffic data. | **REMOVED** |
| "Live Tracking — **real-time** visibility into where a shipment is" | `inputOrderTracking` returns stage, `picked_up_at`, `delivered_at` and checklist items. Position points come from `addRouteCheckpoint`, which a **driver submits** with a `recorded_at`. This is a recorded event trail, not continuous telemetry. | **REMOVED** |
| "Logistics Intelligence — performance data on routes, carriers and delivery times" | `analytics/mine` and `analytics/fleet` exist. Retained but described concretely rather than as "intelligence". | Reworded |
| "Reduced post-production losses in transit" | An outcome claim with no measurement behind it. | **REMOVED** |
| "Foundation for regional expansion" | Geography claim by implication. | **REMOVED** |

### This overturns a Phase 6 decision

`content-integrity-register.md` **CI-013** approved the word "Real-time" on
`/platform/logistics` as "shipment position tracking". Closer verification does
not support it: the position points are driver-submitted checkpoints. CI-013 is
**re-classified to REMOVED**.

Phase 6 was right to look, and landed one notch too generous. Recording it
rather than quietly amending it, because the register is only worth anything if
its own corrections are visible.

---

## K · e-Chimusika content

| Field | Detail |
|---|---|
| **Current public state** | Deliberately restrained page written in Phase 6 |
| **Evidence available** | Deployment verified live. `routes/gateway/zimo.php` exists in the estate, but the mapping between it and the e-Chimusika deployment is not established in this session. |
| **Classification** | **VERIFIED** for what the page currently says (live, an application, shares platform services). **NEEDS VERIFICATION** for product-specific workflow detail. |
| **Action required** | Product owner sign-off on the trading workflow before the page is deepened. |

**No change.** The page is honest and shorter than its siblings on purpose.
Lengthening it to match them is exactly the failure this programme exists to
correct — and the Phase 7 brief §25 says whitespace is acceptable.

---

## L · Architecture diagram

| Field | Detail |
|---|---|
| **Current state** | Four applications: Farm Intelligence · Marketplace · e-Chimusika · Logistics |
| **Evidence** | All four verified live at section A |
| **Classification** | **VERIFIED** |
| **Action required** | None. |

Checked against the verified inventory per brief §13: no application is named
that does not exist, "Analytics" stays removed, e-Chimusika is present, and
Coordination Network is absent because it is not deployed. No box was added for
visual balance.

---

## Summary of actions taken in Phase 7

| Action | Count |
|---|---|
| Verified and kept | Application status ×4, Zimo Clan relationship, Zimo product names, architecture inventory |
| Verified and **added** (previously unclaimed) | Cold-chain monitoring, warehouse/zone network, driver capability verification, informal-sale recording, order aggregation |
| **Removed** as unsupported | 10 claims across Marketplace and Logistics, plus CI-013 re-classified |
| Neutralised | "Founded in Lagos, Nigeria" |
| Left withheld | Careers benefits ×6, leadership, brochure, social URLs, Zimo figures |
| Left unchanged | e-Chimusika |

---

## M · Admin closure — items B, C and G moved out of code

Three of the withheld items were blocked on a developer rather than on a fact.
They are now entered in the HAOS admin, which changes what "unresolved" means
for them: the block was never that the answer was unknowable, only that
recording it required an edit and a deploy.

| Item | Was | Now |
|---|---|---|
| Careers benefits (CI-063 → CI-068) | Hardcoded, withheld | `site.careers.benefits` |
| Careers vacancies | Hardcoded, removed | `site.careers.vacancies` |
| Founding location (CI-025) | Hardcoded prose | `site.company.founded_location` + `founded_year` |
| Zimo Clan figures (CI-043 → CI-045) | Hardcoded, removed | `site.zimo_metrics` |

### Why an admin entry counts as verification

These claims were `NEEDS VERIFICATION` because *nobody at the company had
supplied them* — someone else had written them into a repository. When the
entry is made in the HAOS admin, the person typing works for the company. The
act of entering it is the confirmation, and provenance is the entry.

That is a real change in evidential status, not a relabelling.

### Two rules enforced in the data layer, not in templates

**Zimo Clan figures require a source and an as-of date.** `SiteContent::
zimoMetrics()` drops any row missing either, and the controller validates
`required_with:metrics.*.value`. It is not possible to store an unattributed
figure through this screen. That rule lives in the data layer on purpose: a
template can be edited by someone who does not know why attribution mattered,
and four surfaces could render this. The page then writes "as reported by X,
March 2026" rather than stating a bare number.

**Company facts are four fields, not one sentence.** "Founded in Lagos,
Nigeria" conflated founding, registration, headquarters and current operations
— four claims checked against four different sources. The form splits them, and
the site states only the ones answered.

### A defect this uncovered, before it shipped

Populating the admin with a realistic, properly attributed figure **broke the
content gate**:

* `500+` tripped the `REMOVED` guard for CI-043 — the figure taken down for
  being *unattributed* — even though the admin form had just forced an
  attribution onto it.
* A vacancy typed as `Full-time` failed as an unclassified employment claim.

The company would have done exactly what it was asked to do and broken the
build. `check-content.mjs` now reads `site-content.json`, treats text that
arrived that way as `VERIFIED — admin-supplied`, and **lists each one in the
output** rather than clearing it silently, so the audit still shows what was
entered.

Verified both ways: with the admin empty, all three sections are absent and the
gate reports 0 admin-supplied; with it populated, the sections render with
attribution intact and the gate reports 4.

### What is still genuinely blocked

| Item | Why the admin cannot close it |
|---|---|
| Leadership | Already admin-managed. Needs the people. |
| Social URLs | Already admin-managed. Needs the exact official URLs. |
| Brochure PDF | Already admin-managed. Needs the file. |
| Authenticated captures | Not admin-managed. Screenshots carry captions, alt text, crop settings and an ordering constraint that keeps the two contradicting Farm Intelligence screens apart — a larger job, deliberately deferred. |
