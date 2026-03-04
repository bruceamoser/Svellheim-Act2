# Svellheim: Act 2 — The Deep Road

A **Foundry VTT** module for the [Draw Steel](https://mcdmproductions.com) system.  
Contains montage tests, negotiation tests, player journals, and director journals for **Act 2** of the Svellheim campaign.

## Installation

1. In Foundry VTT, go to **Add-on Modules → Install Module**.
2. Paste the manifest URL:
   ```
   https://github.com/bruceamoser/Svellheim-Act2/releases/latest/download/module.json
   ```
3. Click **Install**.

## Dependencies

| Module | Required |
|---|---|
| [Draw Steel](https://github.com/MetaMorphic-Digital/draw-steel) (system) | Yes |
| [Svellheim: Entities](https://github.com/bruceamoser/Svellheim-Entities) | Yes |

## Compendium Packs

| Pack | Type | Contents |
|---|---|---|
| Svellheim Act 2: Montage Tests | Item | Montage test definitions (beats 10–17) |
| Svellheim Act 2: Negotiation Tests | Item | Negotiation definitions (beats 12–16) |
| Svellheim Act 2: Player Journals | JournalEntry | Player handout journals |
| Svellheim Act 2: Director Journals | JournalEntry | GM-facing director journals |

## Repository Structure

```
data/                 Source JSON files
  montage-tests/      Montage test definitions
  negotiation-tests/  Negotiation definitions
  player-journals/    Player handout journals
  director-journals/  Director (GM) journals
module/packs/         Compiled Foundry VTT LevelDB packs
tools/                Build scripts
```

## Version

Current release: **v0.1.1**  
Compatibility: Foundry VTT v11 – v13

## Author

Bruce A. Moser
