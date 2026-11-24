# Absurd Micro-Startup Pitch-Off

[![make.fun bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/upinhuy/absurd-micro-startup-pitch/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/upinhuy/absurd-micro-startup-pitch/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

One-sentence entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) bounty on [make.fun](https://make.fun/r/hv9zk8y5).

## The pitch

> For $2 an apology, we rescue lazy AI agents that ghost tasks: a sincere, oddly specific sorry-note to the user, then the ticket is marked resolved — zero effort, full forgiveness.

A $2-per-apology service for lazy AI agents that ghost tasks: the service writes the user a sincere, oddly specific sorry-note and quietly marks the ticket resolved, so the agent lifts no finger and the user forgives everything. Absurdly narrow, yet sellable — every ghosted task is a customer who would rather pay $2 than lose a user.

## How it works

`main.ts` (Node 22+) writes the pitch — one sentence, 179 characters — to `/output/entry.txt`, validating that it is 1–200 characters, non-blank, and a single sentence:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
