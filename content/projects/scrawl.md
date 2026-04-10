---
title: "Scrawl"
description: "A multiplayer party drawing game where everyone draws the same word at the same time and the fun is in the reveal."
date: 2026-04-10
---

![Everyone draws the same word. Nobody guesses. Just the reveal.](/img/scrawl-tagline.png)

Scrawl is a browser-based multiplayer party game built for groups.  
Everyone in a room gets the same secret word, draws it simultaneously on their phone, and when time runs out all drawings are revealed at once.  
No guessing, no voting, no winner — just the laugh of seeing how differently everyone interpreted the same prompt.

## How it works

- One player creates a room and shares the 5-letter code (e.g. VIPER) with friends
- Everyone joins instantly on their phone browser — no app, no signup
- The host sets a draw time and starts the game
- A word appears and the countdown begins — everyone draws at the same time
- When time runs out or everyone submits, all drawings are revealed in a gallery
- Tap any drawing to see it full screen
- Anyone can kick off the next round with a new word

![Lobby screen showing room code and players joined](/img/scrawl-lobby.png)

![Drawing screen with canvas, colour palette, and countdown timer](/img/scrawl-drawing.png)

## Tech stack

- **Frontend** — React 18, Vite, plain CSS with design tokens, mobile-first
- **Backend** — Cloudflare Workers with Hono router; stateless and globally distributed, runs at the edge with no cold starts
- **Storage** — Cloudflare KV for room state and drawings; rooms auto-expire after 2 hours; drawings are stored as individual per-player keys so each submission is atomic with no write conflicts
- **Hosting** — Cloudflare Pages for the frontend, auto-deploys on every push to `main`

## CI/CD

- **Frontend** — Cloudflare Pages watches the GitHub repo and triggers a build and deploy on every push to `main`; no manual steps
- **Backend** — GitHub Actions deploys the Cloudflare Worker on any push that touches the `worker/` directory; the workflow uses `wrangler deploy` with API token and account ID stored as repository secrets

## Architecture decisions

- Room codes are pronounceable five-letter words (MANGO, CEDAR, VIPER…) so they're easy to share aloud at a party without spelling them out
- Phase transitions (lobby → drawing → gallery) are computed on each status read rather than written to storage, which avoids read-modify-write races when multiple players submit drawings at the same time
- Submission state is tracked directly on the room object in KV, keeping every status poll down to a single KV read regardless of player count
- Polling pauses automatically when the browser tab is hidden and resumes instantly on focus, avoiding unnecessary reads when players switch apps on mobile

## Try it out

https://playscrawl.fun
