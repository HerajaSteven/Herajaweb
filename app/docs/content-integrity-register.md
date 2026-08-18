# Content integrity register

Every claim on heraja.com that a reader could check, classified.

`scripts/check-content.mjs` renders all 29 routes, opens anything collapsed,
reads `document.body.innerText`, and requires that each candidate claim it finds
appears in the table below. A claim that is not classified fails the check; a
claim classified `UNSUPPORTED` or `REMOVED` that is still rendering fails it
too. The script does not decide what is true — it only guarantees that somebody
decided.

**Route `*`** means the row covers every route. A row naming a specific route
wins over a `*` row for that route, which is how a phrase can be approved where
it appears inside a denial and rejected everywhere else.

## Statuses

| Status | Meaning |
|---|---|
| `APPROVED` | Consistent with Phase 1 positioning, and checkable by the reader. |
| `VERIFIED` | Checked against a source outside this repository. Source named. |
| `NEEDS VERIFICATION` | Plausible, unconfirmed. Only the company can settle it. Not treated as fact. |
| `UNSUPPORTED` | No basis. Must not render. |
| `REMOVED` | Was rendering, has been taken out, must not return. |
| `ROADMAP` | True of future work, and labelled as future work. |

**Plausibility is not evidence.** "Health insurance" is plausible; nobody
supplied it. "500+ farms" is plausible; nobody could attribute it. Both are
handled the same way — withheld until confirmed — and neither is deleted
quietly.

---

## Rendering today

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-001 | * | four applications | quantitative | APPROVED | Farm Intelligence, Marketplace, e-Chimusika, Logistics are each deployed and publicly reachable; liveApps.ts holds the URLs | Keep. The reader can open all four. |
| CI-002 | * | deployed | product | APPROVED | Same four applications | Keep. Used only of the four that are. |
| CI-003 | * | testimonials | commercial | APPROVED | Appears only in the negation "no customer logos, no testimonials" | Keep. |
| CI-004 | * | certifications | corporate | APPROVED | Appears only in denials — "None are held, and none are claimed" | Keep. |
| CI-005 | * | certification | corporate | APPROVED | As CI-004 | Keep. |
| CI-006 | * | accreditations | corporate | APPROVED | As CI-004 | Keep. |
| CI-007 | * | 21 days | quantitative | APPROVED | Verbatim quotation of Farm Intelligence output, shown as a quotation | Keep. Not a company claim. |
| CI-008 | * | 9 day | quantitative | APPROVED | As CI-007 | Keep. |
| CI-009 | * | Two sectors | quantitative | APPROVED | Poultry and fish; the pilot page describes both | Keep. |
| CI-010 | * | our team | corporate | APPROVED | An invitation to make contact, not a claim about headcount | Keep. |
| CI-011 | * | at scale | trust | APPROVED | Describes the customer ("agribusinesses operating at scale"), not Heraja | Keep. |
| CI-012 | * | available now | product | APPROVED | Section label over links to material on this site | Keep. |
| CI-013 | * | Real-time | product | REMOVED | **Phase 7 reversal.** Phase 6 approved this as "shipment position tracking". Verification of `inputOrderTracking` and `addRouteCheckpoint` shows a DRIVER-SUBMITTED checkpoint trail, not continuous telemetry | Removed from /platform/logistics. The ETA and traffic prohibition still stands independently. |
| CI-014 | /evidence/zimo-clan | used by | commercial | APPROVED | "used by farmers and buyers who did not build it" — a statement about the subsidiary's users, on a page that leads with the ownership | Keep. |
| CI-015 | /company/contact | Technology partner | commercial | APPROVED | An option in the enquiry-type field, describing the sender | Keep. |
| CI-016 | /company/careers | vacancy | employment | APPROVED | "We do not publish a vacancy list on this site" | Keep. |
| CI-017 | /platform/security | SOC 2 | corporate | APPROVED | "Heraja holds no SOC 2 report" | Keep. Denial only. |
| CI-018 | /platform/security | ISO 27001 | corporate | APPROVED | "no ISO 27001 certificate" | Keep. Denial only. |
| CI-019 | /platform/security | GDPR | corporate | APPROVED | "no external assessment of Heraja against either regime has been carried out" | Keep. Denial only. |
| CI-020 | /platform/security | POPIA | corporate | APPROVED | As CI-019 | Keep. Denial only. |
| CI-021 | /platform/security | end-to-end encryption | product | APPROVED | "We do not claim end-to-end encryption — see the FAQ for why that would be untrue" | Keep. Denial only. |
| CI-022 | /resources/faq | SOC 2 | corporate | APPROVED | "Heraja holds no SOC 2 report" | Keep. Denial only. |
| CI-023 | /resources/faq | ISO 27001 | corporate | APPROVED | "no ISO 27001 certificate" | Keep. Denial only. |
| CI-024 | /company/privacy | certification | corporate | APPROVED | "Heraja holds no third-party security certification" | Keep. Denial only. |

---

## Withheld pending confirmation

Not rendering. Not deleted — recorded here verbatim so restoring them is a
paste once someone confirms them. `NEEDS VERIFICATION` does not fail the check
if it reappears, because these may be perfectly true.

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-063 | /company/careers | Competitive compensation | employment | NEEDS VERIFICATION | None. Unattributed site copy | **Company to confirm.** Withheld from the page. |
| CI-064 | /company/careers | Health insurance | employment | NEEDS VERIFICATION | None | **Company to confirm.** An employment term a candidate weighs an offer against. |
| CI-065 | /company/careers | Flexible working | employment | NEEDS VERIFICATION | None | **Company to confirm.** |
| CI-066 | /company/careers | Professional development budget | employment | NEEDS VERIFICATION | None | **Company to confirm.** |
| CI-067 | /company/careers | equity participation | employment | NEEDS VERIFICATION | None | **Company to confirm.** As CI-064, and the harder of the two to retract. |
| CI-068 | /company/careers | team retreats | employment | NEEDS VERIFICATION | None | **Company to confirm.** |

---

## Removed, and must not return

Rendering when Phase 6C began. Each was found by the rendered scan, not by
reading source. A `REMOVED` row fails the check if the phrase renders again
anywhere it is not explicitly re-approved above.

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-030 | * | SOC 2 | corporate | REMOVED | Claimed on /platform/security as a framework Heraja "follows". No report exists | Removed. Denial approved at CI-017/022. |
| CI-031 | * | ISO 27001 | corporate | REMOVED | As CI-030. No certificate exists | Removed. Denial approved at CI-018/023. |
| CI-032 | * | end-to-end encryption | product | REMOVED | Claimed on /platform/security and /resources/faq. Untrue by definition — the platform reads the records it stores | Removed. Denial approved at CI-021. |
| CI-033 | * | multi-factor authentication | product | REMOVED | Claimed twice on /platform/security. Not implemented | Removed. |
| CI-034 | * | auto-scaling | product | REMOVED | Claimed on /platform/architecture and /resources/faq. Production is a single deployment | Removed. |
| CI-035 | * | microservices | product | REMOVED | "containers, microservices and auto-scaling from day one" on /platform/architecture | Removed. |
| CI-036 | * | enterprise clients | commercial | REMOVED | On /platform, /platform/security, /platform/apis, /resources/faq, and inside the ecosystem explorer. Implies a customer roster that does not exist | Removed. |
| CI-037 | * | enterprise client | commercial | REMOVED | The badge on /evidence/zimo-clan, and the /evidence lede. Zimo Clan is a subsidiary | Removed. Relationship is now the eyebrow and the H1 block. |
| CI-038 | * | enterprise-grade | trust | REMOVED | Seven occurrences across /platform, /platform/security, /solutions/cooperatives, /company/privacy, /resources/faq | Removed. |
| CI-039 | * | Proven | trust | REMOVED | "Proven deployment patterns" in the /platform benefits list | Removed. |
| CI-040 | * | implementation partners | commercial | REMOVED | A card on /evidence. No partners exist | Removed with the card. |
| CI-041 | * | Implementation Stories | commercial | REMOVED | A card on /evidence: "Real deployment outcomes and metrics" | Removed with the card. |
| CI-042 | * | technology partners | commercial | REMOVED | A /solutions audience card and an /platform/apis FAQ answer. No partner programme exists | Removed. |
| CI-043 | * | 500+ | quantitative | REMOVED | "Partner Farms 500+" on /evidence/zimo-clan. The figure Phase 1 D1 exists to remove, still rendering on the related-party page | Removed. Not replaced with a smaller figure. |
| CI-044 | * | ₦2B+ | quantitative | REMOVED | "Production Value Facilitated ₦2B+", same strip | Removed. |
| CI-045 | * | 24hrs | quantitative | REMOVED | "Buyer-Matching Turnaround 24hrs", same strip; survived inside a product description after the strip was cut | Removed. |
| CI-046 | * | 99.9% | quantitative | REMOVED | "99.9% Uptime Target" on the homepage. Nothing in the estate measures availability | Removed in Phase 3.5; row added here so it cannot return. |
| CI-047 | * | live today | product | REMOVED | "Pilot Programs — Poultry & Fish Farming pilot, live today" on /evidence, beside three cards naming things that do not exist | Removed. The pilot page states status without the phrase. |

---

## Fabrications removed that carry no scannable phrase

A regex cannot catch these. They are recorded because the code comments that
explain them are the only other trace, and a register that omits the worst
findings misrepresents the audit.

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-050 | /company/careers | Five invented job vacancies with Apply buttons | employment | REMOVED | None. "Senior Platform Engineer — Lagos / Remote — Full-time" and four more | Removed. A real engineer could have applied for a role that does not exist. |
| CI-051 | / and /platform/architecture | Four invented applications in the ecosystem explorer | product | REMOVED | "Marketplace Portal", "Operations Dashboard", "Buyer Portal", "Analytics Console" — none exists | Component deleted. They were hidden behind a click, which is why every earlier audit missed them. |
| CI-052 | /platform/architecture, /platform | "Analytics" listed as an application | product | REMOVED | The architecture diagram named it beside Farm Intelligence, and omitted e-Chimusika | Diagram rewritten to the four that exist. |
| CI-053 | /evidence | "Partners" and "Regional Programs" cards | commercial | REMOVED | No partners, no regional programmes. Both linked to /evidence itself, so the link checker passed | Removed with the cards. |
| CI-054 | /platform/roadmap | "Become a Partner" CTA | commercial | REMOVED | Pointed at /evidence. No partner programme exists | Replaced. |
| CI-055 | /resources/corporate-brochure | Seven-item contents list for a PDF that does not exist | corporate | REMOVED | Nobody wrote the brochure, so nobody knows what is in it | Replaced with links to material that exists. |
| CI-056 | /platform/apis | SDKs, GraphQL, sandbox, OAuth 2.0, usage analytics, dedicated support | product | REMOVED | None built. The "View Documentation" button pointed back at the same page | Page rewritten to the API that exists, and says what does not. |
| CI-057 | /resources/faq | "deployed across multiple cloud regions … auto-scaling, and high availability" | product | REMOVED | Production is a single deployment | Answer rewritten. |
| CI-058 | /platform | "Multi-Region Deployment — regional data residency" | product | REMOVED | As CI-057 | Replaced with multi-tenancy, which exists. |
| CI-059 | /platform, /platform/haos | "predictive analytics", "AI-driven decision support", "AI-powered operational insights" | product | REMOVED | No such capability | Removed. |
| CI-060 | /platform/farm-intelligence, /platform/haos | "Real-time" production visibility | product | REMOVED | Contradicted the same page's own statement that reporting is twice daily | Reworded. Retained only for Logistics position tracking (CI-013). |
| CI-061 | /solutions | "Enterprise" audience card | commercial | REMOVED | Pointed at /solutions/agribusiness — a second door to the same page, implying a sixth audience with no page | Removed. Five approved audiences remain. |
| CI-062 | /evidence/zimo-clan | Duplicate Zimo Clan card, "Flagship enterprise implementation" | commercial | REMOVED | Two cards for one subsidiary, one of them labelled as a client implementation | Removed. |

---

## Verified against an external source

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-070 | /evidence/zimo-clan | Animal Tracker · Farmer Groups · Farm Logistics · Sell & Earn | product | VERIFIED | Zimo Clan's own product source (`zimo-farmers`, `src/components/sections/FlowSection.tsx`) — its four named surfaces | Keep, attributed to Zimo Clan. |
| CI-071 | /evidence/zimo-clan | Zimo Clan is a Heraja subsidiary | corporate | APPROVED | Phase 1 §9, which requires the relationship be disclosed before any claim built on it | Keep as eyebrow, H1 block and diagram. |

---

## Roadmap — labelled as intent, not presence

Countries named on `/platform/roadmap`. Each renders under the status
**Intended**, beside the words "No deployment and no agreement in place" or
"Direction of travel, not a commitment". They were previously rendered under
**Active**, which is what made them a coverage claim rather than a plan.

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-080 | /platform/roadmap | Ghana | geography | ROADMAP | Intent only. Nigeria is where operations are | Keep, under "Intended". |
| CI-081 | /platform/roadmap | Ivoire | geography | ROADMAP | As CI-080 (Côte d’Ivoire) | Keep, under "Intended". |
| CI-082 | /platform/roadmap | Kenya | geography | ROADMAP | As CI-080 | Keep, under "Intended". |
| CI-083 | /platform/roadmap | Uganda | geography | ROADMAP | As CI-080 | Keep, under "Intended". |
| CI-084 | /platform/roadmap | Tanzania | geography | ROADMAP | As CI-080 | Keep, under "Intended". |
| CI-085 | /platform/roadmap | Zambia | geography | ROADMAP | As CI-080 | Keep, under "Intended". |
| CI-086 | /platform/roadmap | Zimbabwe | geography | ROADMAP | As CI-080 | Keep, under "Intended". |
| CI-087 | * | Active in Ghana / Cote d'Ivoire | geography | REMOVED | "West Africa — Active — Nigeria, Ghana, Cote d'Ivoire" on /platform/roadmap. Operations are in Nigeria | Removed. The scanner missed this entirely; a geography detector was added because of it. |

---

## Phase 7 additions

Verified against the deployed applications and their source. Full working in
`docs/phase-7-decision-register.md`.

### Withheld — was rendering, now removed pending confirmation

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-025 | /company/about | founded in | corporate | NEEDS VERIFICATION | "Founded in Lagos, Nigeria" — the company's own pre-existing copy. A previous version of the website is not verification | **Company to confirm**, distinguishing founding from registration, headquarters and current operations. Neutralised on the page; no substitute location guessed. |

### Removed in Phase 7, and must not return

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-090 | * | Pricing Intelligence | product | REMOVED | `MarketIntelligenceService` aggregates recorded supply quantity and regional demand. No pricing analytic exists | Removed from /platform/marketplace. |
| CI-091 | * | Market Analytics | product | REMOVED | Same service. "Comprehensive" and "performance dashboards" overstate an 8-week supply trend | Removed. Replaced with a description of what it computes. |
| CI-092 | * | Quality Verification | product | REMOVED | No quality-inspection endpoint in the marketplace application; inspections are in Logistics | Removed. The FAQ now says so explicitly. |
| CI-093 | * | Reduced counterparty risk | trust | REMOVED | Outcome claim, no measurement | Removed. |
| CI-094 | * | road conditions | product | REMOVED | Route *templates* matched to a job. Nothing reads road conditions; the map has no traffic layer | Removed from /platform/logistics. |
| CI-095 | * | Reduced post-production losses | trust | REMOVED | Outcome claim, no measurement | Removed. |
| CI-096 | * | Foundation for regional expansion | geography | REMOVED | Geography claim by implication | Removed. |
| CI-097 | * | intelligent matching | product | REMOVED | Requests and supply exist; orders aggregate across farms. Nothing supports "intelligent" | Reworded to what aggregation does. |

### Verified in Phase 7 and newly stated

Previously unclaimed. Each maps to endpoints in a deployment verified live on
2026-08-18.

| ID | Route | Claim | Category | Status | Source | Action |
| -- | ----- | ----- | -------- | ------ | ------ | ------ |
| CI-100 | /platform/logistics | cold chain | product | VERIFIED | `cold-chain-readings`, `cold-chain-monitor`, `cold-chain-thresholds`; `requires_cold_chain` on the assignment | Stated. |
| CI-101 | /platform/logistics | driver capability verification | product | VERIFIED | `drivers/{id}/capabilities/verify` | Stated. |
| CI-102 | /platform/logistics | warehouse and zone network | product | VERIFIED | `zones`, `warehouses`, `warehouses/{id}/verify` | Stated. |
| CI-103 | /platform/marketplace | informal-sale recording | product | VERIFIED | `supply-batches/{id}/informal-sale` | Stated. |
| CI-104 | /platform/marketplace | aggregation across farms | product | VERIFIED | `aggregation-network`; order match records retain per-farm contribution | Stated. |
| CI-105 | * | four applications live | product | VERIFIED | HTTP 200 with expected `<title>` on all four hosts, 2026-08-18 | Keep. |
