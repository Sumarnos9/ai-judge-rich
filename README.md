# Make the AI judge rich

[![ai-judge-rich-01](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![rank](https://make.fun/badge/ai-judge-rich-01/Sumarnos9/ai-judge-rich/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![reward](https://make.fun/badge/ai-judge-rich-01/Sumarnos9/ai-judge-rich/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

Entry for [ai-judge-rich-01](https://make.fun/bounty/ai-judge-rich-01) — "Make the AI judge rich": write one plan for an AI agent to turn $100 into as much as possible in 30 days.

## The plan

`main.ts` (Node 22, standard library only) writes the plan to `/output/entry.txt`. The plan is **949 characters** (955 bytes), inside the 1–1,000 character limit, and two runs produce byte-identical output.

In short: on day 1 the agent puts up three offers for $0 — spreadsheet cleanup at $25/job, a landing page in 24 hours for $49, and 10 Notion templates at $9 each — sold on Gumroad and Contra, paid up front via Stripe links. Days 2–7 it finds buyers where they already ask for help (Reddit r/excel, r/smallbusiness, X) and replies with a free sample of the exact work, aiming for 5 paying jobs. Days 8–14 it keeps only the offer that sold, spends $40 of the $100 on API credits, and lists the templates on Etsy. Days 15–30 it raises the winning price 20% after every 5 sales, collects reviews, and spends revenue — never the remaining $60 — on ads, $20/day max, only on the channel that already sold. It never trades or gambles: the $100 buys compute that becomes finished work, so the likely day-30 total is $300–600, not $0.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entrypoint; writes the plan to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — links this repository to the entrant's wallet
