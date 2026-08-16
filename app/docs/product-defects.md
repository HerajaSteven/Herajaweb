# Product defects observed from the marketing site

Defects found in the **HAOS product applications** while capturing evidence for
heraja.com. They are recorded here because this repository is where they were
found, but they are **not marketing-site work** — each one belongs to the team
that owns the application.

Nothing here has been worked around by editing a screenshot. Where a defect
affects what the site can safely publish, the site's handling is described so
the two can be untangled once the underlying issue is fixed.

---

## FI-1 — Inconsistent batch day and mortality across dashboard and livestock views

| Field | Value |
|---|---|
| **ID** | FI-1 |
| **Affected product** | Farm Intelligence (`haos-frontend/apps/farm-web`) |
| **Found** | 2026-08-16, while capturing authenticated screenshots for heraja.com |
| **Severity** | Medium — not a crash, but it undermines trust in reported figures |
| **Status** | Open — not yet raised with the product team |
| **Recommended owner** | Farm Intelligence engineering. Owner: TBD |
| **Evidence** | `app/public/assets/product/fi-dashboard.png`, `app/public/assets/product/fi-livestock.png` (unedited captures, same session) |

### Affected screens

| Screen | Route | Reported |
|---|---|---|
| Dashboard | `/dashboard` | **Batch Day 25** · **Mortality 0.82%** |
| Livestock | `/livestock` | **Day 24 of 41** · **13 (2.6%) Mortality** |

### Observation

Both screens were captured in the same browser session, minutes apart, for the
same farm and the same livestock batch. They disagree on two derived figures:

- **Batch day** differs by one (25 vs 24).
- **Mortality rate** differs by a factor of roughly three (0.82% vs 2.6%).

The underlying seeded data was 500 birds placed 24 days before capture with 487
remaining — 13 deaths, which is 2.6% of 500. The livestock figure matches that
directly. The dashboard's 0.82% corresponds to roughly 4 birds against the same
500, so it appears to be computing over a different window or a different
denominator, but **the codebase was not traced to confirm this and the root
cause should not be assumed from the numbers alone.**

### Expected relationship

Two screens showing the same derived quantity for the same batch at the same
moment should agree. Specifically:

- Batch day should have one definition (inclusive vs exclusive of placement
  day) applied everywhere.
- Mortality rate should have one definition — cumulative-to-date or
  windowed — and if both are genuinely wanted, each screen should say which
  it is showing rather than both calling it "Mortality".

### Why it matters beyond cosmetics

Farm Intelligence's value proposition is that its figures are derived from
recorded events rather than asserted. Two screens deriving different answers
from the same events weakens that specific claim, and it is the claim the
product is otherwise unusually careful about — the same product deliberately
says "feed served" rather than "feed consumed" because it will not assert a
measurement it did not make.

A lender or programme evaluator comparing these two screens draws a conclusion
about the data model, not about a formatting bug.

### How the marketing site handles it

The site does **not** edit or conceal the screenshots. Instead:

1. `fi-dashboard` is cropped to its vaccination-alert band, which frames the
   strongest content on that screen and leaves the metric strip outside the
   visible region — so the contradicting figure is not rendered at all.
2. The evidence gallery orders the screens so `fi-dashboard` and `fi-livestock`
   are never adjacent, with the Daily Report screen between them.
3. `assertEvidenceOrdering()` in `src/config/productEvidence.ts` fails in
   development if that ordering is broken.

Once the product defect is fixed and the screens agree, all three measures can
be relaxed — recapture the screenshots and the constraint becomes unnecessary.

### Reproduction

1. Seed a demonstration farm with a livestock batch (see the seeding script
   used for the 2026-08-16 capture).
2. Sign in to Farm Intelligence as that farmer.
3. Compare the batch day and mortality figures on Dashboard and Livestock.

---

## FI-2 — A farmer with no tenant membership sees an empty application

| Field | Value |
|---|---|
| **ID** | FI-2 |
| **Affected product** | Farm Intelligence / HAOS platform (tenant membership resolution) |
| **Found** | 2026-08-16, while seeding the demonstration farm |
| **Severity** | Medium — silent empty state rather than an error |
| **Status** | Open — not yet raised with the product team |
| **Recommended owner** | HAOS platform / tenancy. Owner: TBD |
| **Evidence** | Reproduced locally: farmer rows returned nothing until a `tenant_users` row existed. No production instance was touched. |

### Observation

A seeded farmer was invisible to Farm Intelligence until a `tenant_users` row
was added. Before that row existed:

- wallet and catalog data loaded normally;
- farm profiles returned nothing;
- livestock batches returned nothing;
- daily reports returned nothing.

The application rendered as though the farmer simply had no data, rather than
signalling that something was wrong with their account.

### Why it matters

The failure is indistinguishable, from the user's side, from a correctly
configured empty account. A real farmer onboarded without tenant membership
would see a working application with none of their own records in it, and would
have no way to tell that from "the app has lost my data".

Row-level tenant scoping was **not** enabled in the local environment where this
was observed, which suggests the behaviour is in membership resolution rather
than in query scoping — but this was not traced to a root cause and should be
confirmed rather than assumed.

### Suggested direction

Onboarding should either guarantee tenant membership as part of creating a
farmer, or the application should distinguish "no records yet" from "this
account is not attached to a tenant" and say so.

This is unrelated to the marketing site, which makes no claim about tenant
behaviour.
