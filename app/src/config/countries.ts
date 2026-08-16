/**
 * Countries for the contact form's country/region field.
 *
 * The approved contact specification collects country/region, so this exists
 * to serve that field and nothing else.
 *
 * WHY CODES RATHER THAN NAMES. Only the ISO 3166-1 alpha-2 codes are stored
 * here; the display names come from the browser's own `Intl.DisplayNames`.
 * That keeps this file small, means the list is rendered in the visitor's
 * language rather than only in English, and — the part that actually matters
 * for a site read across Africa and Europe — avoids this repository becoming
 * the place where somebody's country is spelled the way we happened to type
 * it. The code is also the better thing to submit: it is stable, whereas
 * country names change.
 *
 * Nigeria is listed first because it is where the deployed applications
 * operate, and a form that makes the most common answer the easiest one is
 * doing its job. The rest are alphabetical by rendered name.
 */

const PRIORITY = ['NG'];

/* ISO 3166-1 alpha-2, current as of the 2026 list. */
const CODES = [
  'AF','AL','DZ','AD','AO','AG','AR','AM','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ',
  'BT','BO','BA','BW','BR','BN','BG','BF','BI','CV','KH','CM','CA','CF','TD','CL','CN','CO','KM',
  'CG','CD','CR','CI','HR','CU','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','SZ',
  'ET','FJ','FI','FR','GA','GM','GE','DE','GH','GR','GD','GT','GN','GW','GY','HT','HN','HU','IS',
  'IN','ID','IR','IQ','IE','IL','IT','JM','JP','JO','KZ','KE','KI','KP','KR','KW','KG','LA','LV',
  'LB','LS','LR','LY','LI','LT','LU','MG','MW','MY','MV','ML','MT','MH','MR','MU','MX','FM','MD',
  'MC','MN','ME','MA','MZ','MM','NA','NR','NP','NL','NZ','NI','NE','NG','MK','NO','OM','PK','PW',
  'PS','PA','PG','PY','PE','PH','PL','PT','QA','RO','RU','RW','KN','LC','VC','WS','SM','ST','SA',
  'SN','RS','SC','SL','SG','SK','SI','SB','SO','ZA','SS','ES','LK','SD','SR','SE','CH','SY','TW',
  'TJ','TZ','TH','TL','TG','TO','TT','TN','TR','TM','TV','UG','UA','AE','GB','US','UY','UZ','VU',
  'VA','VE','VN','YE','ZM','ZW',
];

export interface Country {
  code: string;
  name: string;
}

function displayName(code: string): string {
  try {
    const names = new Intl.DisplayNames(undefined, { type: 'region' });
    return names.of(code) ?? code;
  } catch {
    // Very old browsers: the code is a worse label but still a usable one,
    // and it is what gets submitted either way.
    return code;
  }
}

/**
 * The full list, priority entries first, then alphabetical by display name in
 * the visitor's locale.
 */
export function countries(): Country[] {
  const named = CODES.map((code) => ({ code, name: displayName(code) }));
  const priority = PRIORITY.map((code) => named.find((c) => c.code === code)).filter(
    (c): c is Country => Boolean(c),
  );
  const rest = named
    .filter((c) => !PRIORITY.includes(c.code))
    .sort((a, b) => a.name.localeCompare(b.name));

  return [...priority, ...rest];
}
