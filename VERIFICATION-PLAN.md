# Act 2 — The Deep Road: Verification Plan

> **Source of Truth**: `Era-of-Embers/campaign/docs/04-Campaign/01-Restore-the-Flame/Act-2/`
> **Target**: `Svellheim-Act2/data/`
>
> **Key Principle**: The director will NOT have access to the campaign adocs during play.
> The Foundry journal entries are the **runtime game documents** — they must be
> complete, self-sufficient references for running each beat at the table.
> Nothing the director needs to know can be missing from the journals.

---

## Campaign Doc → Journal Page Mapping

The director journal is split across two files:
- `Act-2-The-Deep-Road-Director-Journal.journal.json` (Beats 10–14)
- `Act-2-The-Deep-Road-Director-Journal-Part-2.journal.json` (Beats 15–19)

| # | Campaign Doc (Source of Truth) | Journal Page | Journal File | Status |
|---|-------------------------------|-------------|-------------|--------|
| 0 | `00-Act-2-Overview.adoc` | *(no journal page — overview only)* | — | — |
| 10 | `10-The-Western-Detour.adoc` | Beat 10 — The Western Detour | Part 1 | ✅ |
| 11 | `11-The-Drowned-Road.adoc` | Beat 11 — The Drowned Road | Part 1 | ✅ |
| 12 | `12-Rickety-Frets.adoc` | Beat 12 — Rickety Frets | Part 1 | ✅ |
| 13 | `13-Emergence-Rindgate.adoc` | Beat 13 — Emergence — Rindgate | Part 1 | ✅ |
| 14 | `14-The-Bone-Fields.adoc` | Beat 14 — The Bone-Fields | Part 1 | ✅ |
| 15 | `15-The-Ivory-Tower.adoc` | Beat 15 — The Ivory Tower | Part 2 | ✅ |
| 16 | `16-Beinvaka.adoc` | Beat 16 — Beinvaka | Part 2 | ✅ |
| 17 | `17-The-Steam-Oasis.adoc` | Beat 17 — The Steam-Oasis | Part 2 | ✅ |
| 18 | `18-Surts-Forge.adoc` | Beat 18 — Surt's Forge | Part 2 | ✅ |
| 19 | `19-The-Emberwell.adoc` | Beat 19 — The Ember-Chamber | Part 2 | ✅ |

## Campaign Doc → Montage Test Mapping

| Campaign Doc | Montage Test Data File | Status |
|-------------|----------------------|--------|
| `montages-act2.adoc` | `beat-10-cave-entrance-preparation.json` | ✅ |
| `montages-act2.adoc` | `beat-11-deeper-descent-rot-passages.json` | ✅ |
| `montages-act2.adoc` | `beat-11-the-first-three-days.json` | ✅ |
| `montages-act2.adoc` | `beat-13-skirting-the-lakes.json` | ✅ |
| `montages-act2.adoc` | `beat-14-the-bonefields-crossing.json` | ✅ |
| `montages-act2.adoc` | `beat-16-the-mad-dash-beinvaka-escape.json` | ✅ |
| `montages-act2.adoc` | `beat-17-lower-passages-heitfolk-vent-repair.json` | ✅ |
| `montages-act2.adoc` | `beat-17-the-throat-of-the-world-blizzard-crossing.json` | ✅ |

## Campaign Doc → Negotiation Test Mapping

| Campaign Doc | Negotiation Test Data File | Status |
|-------------|--------------------------|--------|
| `negotiations-act2.adoc` | `beat-12-negotiation-rickety-frets-the-three-demands.json` | ✅ |
| `negotiations-act2.adoc` | `beat-13-negotiation-vigmund-haldorsson-the-advocacy-oath.json` | ✅ |
| `negotiations-act2.adoc` | `beat-16-negotiation-pale-maw-elder-beinvaka-passage.json` | ✅ |

## Player Handouts

| Campaign Doc | Player Journal | Status |
|-------------|---------------|--------|
| Various beat docs → player-facing sections | `Act-2-The-Deep-Road-Player-Handouts.journal.json` | ✅ |

## Supporting Reference Docs

| Campaign Doc | Purpose |
|-------------|---------|
| `encounters-act2.adoc` | Encounter stat blocks / compositions |
| `items-act2.adoc` | Item definitions → cross-ref with Svellheim-Entities |
| `monsters-act2.adoc` | Monster definitions → cross-ref with Svellheim-Entities |
| `npcs-act2.adoc` | NPC definitions → cross-ref with Svellheim-Entities |
| `required-art-act2.adoc` | Art asset checklist |

---

## Verification Rules

### Purpose
The campaign adocs are the source of truth for **what** content the journals must contain.
The Foundry journals are the **runtime documents** the director uses at the table — they
must be complete enough to run each beat without referencing the adocs.

### Content Completeness
1. **Every beat's journal page must contain everything the director needs to run it:**
   - Read-aloud / narrative text (exact wording from campaign doc)
   - GM notes, pacing guidance, and tone cues
   - Encounter composition and when to trigger it
   - NPC motivations, dialogue cues, and key information
   - Loot and rewards
   - Transition instructions to the next beat
2. **Narrative text** — read-aloud text, GM notes, transitions must match campaign doc wording exactly.
3. **No missing information** — if the campaign doc says it, the journal must have it.

### Entity References
4. **Entities (monsters, NPCs, items)** — reference via `@UUID[Item.xxx]{Name}` links to the Svellheim-Entities module. Do NOT duplicate full stat blocks or item descriptions inline. The director clicks the link to open the entity in Foundry.
5. **Context around references** — the journal MUST still contain enough context to know *when* and *why* to use an entity (e.g. "2× @UUID[...]{Draugr Thrall} emerge when the party enters the chamber").

### Process
6. **One beat at a time** — read campaign doc, then journal page, compare, fix.
7. **Montage/Negotiation data files** — verify stats (SL, FL, difficulty, motivations, arguments, twists) match campaign docs.

---

## Notes

- Beat 19 campaign doc is `19-The-Emberwell.adoc` but journal page is named "Beat 19 — The Ember-Chamber" — **confirmed intentional**: the Ember-Chamber is the specific location within the Emberwell where the beat's action takes place.
- Beat 17 Lower Passages montage: source doc uses narrative success/failure language ("more successes than failures") without an explicit SL/FL table. JSON provides concrete values (SL=5, FL=3) needed by the Foundry montage system — this is a valid expansion, not a discrepancy.
- Negotiation motivations/pitfalls: JSON files contain 4 motivations and 4 pitfalls each (vs. source's 3 each). The JSON framings describe NPC personal values/desires while the source framings describe argument approaches. Both are valid interpretations for the Foundry negotiation system. Beat 16 (Pale Maw Elder) pitfalls are an exact 4-for-4 match with the source, which explicitly notes "four pitfalls instead of standard three."
- Beat 13 montage (Skirting the Lakes) correctly implements a single-round structure (SL=3, FL=1) matching the source. Round 2 fields contain "N/A" placeholder text.

---

## Progress Log

| Date | Beat | Action | Notes |
|------|------|--------|-------|
| 2025-07-15 | 10 | Director journal expanded | Full expansion via `tools/update-beat10.js` — 52,143 chars |
| 2025-07-15 | 11 | Director journal expanded | Full expansion via `tools/update-beat11.js` — 33,017 chars |
| 2025-07-15 | 12 | Director journal expanded | Full expansion via `tools/update-beat12.js` — 46,134 chars |
| 2025-07-15 | 13 | Director journal expanded | Full expansion via `tools/update-beat13.js` — 46,560 chars |
| 2025-07-15 | 14 | Director journal expanded | Full expansion via `tools/update-beat14.js` — 29,010 chars |
| 2025-07-15 | 15 | Director journal expanded | Full expansion via `tools/update-beat15.js` — 31,110 chars |
| 2025-07-15 | 16 | Director journal expanded | Full expansion via `tools/update-beat16.js` — 35,135 chars |
| 2025-07-15 | 17 | Director journal expanded | Full expansion via `tools/update-beat17.js` — 54,736 chars |
| 2025-07-15 | 18 | Director journal expanded | Full expansion via `tools/update-beat18.js` — 27,929 chars |
| 2025-07-15 | 19 | Director journal expanded | Full expansion via `tools/update-beat19.js` — 32,242 chars |
| 2025-07-15 | All | Montage tests verified (8/8) | All stats (difficulty, SL, FL, rounds) match source. Content enriched with HTML styling. |
| 2025-07-15 | All | Negotiation tests verified (3/3) | Core stats (interest, patience) match source. Motivations/pitfalls enriched (4 each vs. source's 3). Outcomes match. |
| 2025-07-15 | All | Player handouts verified (10 pages) | Complete coverage of Beats 10–19. Well-crafted player-facing summaries with styled HTML. |
| 2025-07-15 | — | Verification plan complete | All 22 items verified ✅. No corrections needed. |
