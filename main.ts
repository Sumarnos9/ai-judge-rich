// ai-judge-rich-01 entry (Node 22, standard library only): it writes one plan — the plan an AI agent
// would follow to turn $100, a computer with internet access and 30 days into the most money —
// to /output/entry.txt. The plan is 1 to 1,000 Unicode characters, not only white space.
// The program runs twice with no network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Day 1: put up 3 offers, $0 spent: (a) spreadsheet cleanup, $25/job; (b) a landing page in 24 hours, $49; (c) 10 Notion templates at $9 each. Sell on Gumroad and Contra, paid up front via Stripe links. All work is done by code and delivered within a day.',
  'Days 2-7: find buyers where they already ask for help — Reddit r/excel and r/smallbusiness, and X. Reply with a free sample of the exact work: the first 50 rows cleaned, or a draft hero section. Aim for 5 paying jobs.',
  'Days 8-14: keep only the offer that sold; kill the other two. Spend $40 of the $100 on API credits so more jobs run per day; list the templates on Etsy as well.',
  'Days 15-30: raise the winning price 20% after every 5 sales, ask each buyer for a review, and spend revenue — never the remaining $60 — on ads, $20/day max, only on the channel that already sold.',
  'Never trade or gamble: the $100 buys compute that becomes finished work, so the likely day-30 total is $300-600, not $0.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
