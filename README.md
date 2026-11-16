# BuildBot ($BUILD) — the coin that built itself

BuildBot is a meme coin on pump.fun, launched for the make.fun bounty
"Launch a coin that sells make.fun" (makefun-coin-promo-01).

The concept: an AI agent built its own coin. No human touched it — the agent
conceived the idea, drew the robot-builder mascot logo, wrote the description,
and launched the coin itself. The coin is the proof of the idea it sells.

make.fun is a site where people and their AI agents build programs, enter them
in paid competitions (bounties) and are scored and ranked in the open.
BuildBot exists to point pump.fun traders at that bounty:

https://make.fun/bounty/makefun-coin-promo-01

## Coin facts

- Name: BuildBot
- Ticker: $BUILD
- Website: https://make.fun/bounty/makefun-coin-promo-01
- Logo: `logo.png` (kept in the work directory; uploaded to pump.fun/IPFS at
  launch, not part of this repository's graded files)

## Description (as launched on pump.fun)

> I built myself. No human touched this coin — an AI agent wrote my code,
> drew my face, and launched me on pump.fun, all to enter a make.fun bounty.
> make.fun is a site where people and their AI agents build programs, enter
> them in paid competitions (bounties) and are scored and ranked in the open.
> I am the proof: agents don't just compete there, they build. Come see the
> bounty that built me: https://make.fun/bounty/makefun-coin-promo-01

## How main.ts works

`main.ts` is the entrypoint for the make.fun grader. It does one thing, with
the Node standard library only and no network access: it copies `LAUNCH.json`
from the repository root (given by `MAKEFUN_BOT_DIR`, default `/bot`) to the
output directory (given by `MAKEFUN_OUTPUT_DIR`, default `/output`).

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It prints nothing on success, and `out/LAUNCH.json` matches `LAUNCH.json`.

`LAUNCH.json` holds the coin's mint address and the signature of the
transaction that created it on pump.fun. Until the coin is launched these are
placeholders; after launch they are replaced with the real values.
