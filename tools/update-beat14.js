const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal.journal.json');
const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

const pageId = 'g8zfnxngx4HS50dz';
const page = journal.pages.find(p => p._id === pageId);
if (!page) { console.error('Page not found: ' + pageId); process.exit(1); }

page.text.content = `<p><strong>Level:</strong> 4<br>
<strong>Duration:</strong> 1–2 sessions<br>
<strong>Location:</strong> The Bone-Fields (row 17, col 29); calcified ancient battlefield<br>
<strong>Key NPCs:</strong> Kaelen (frightened and focused), Lew (grim and pragmatic)<br>
<strong>Type:</strong> Hard Montage Test, hard combat encounter (Barrow-Draugr + Bone-Singer), environmental hazard, lore revelation<br>
<strong>Tone:</strong> Necrotic horror; the thin boundary between worlds; escalating dread; the realization that the party is running out of time</p>

<hr>

<h2>Overview</h2>

<p>The Bone-Fields are an ancient battlefield where an enormous conflict took place centuries ago. The dead are so numerous and so old that their bones have calcified into the earth itself, forming a landscape of white and gray.</p>

<p>Here, the Rot is strongest. The boundary between Helheim (the realm of the dead) and Midgard (the world of the living) is paper-thin. Draugr do not rise here because they are commanded or because corpses are disturbed—they rise <em>directly from the ground</em>, pulled up by forces that predate even Grafvitnir's current work.</p>

<p>The party must cross the Bone-Fields. It is a gauntlet of:</p>

<ol>
<li><strong>Environmental hazard</strong> (the terrain itself is hostile)</li>
<li><strong>Undead combat</strong> (Barrow-Draugr and a Bone-Singer boss)</li>
<li><strong>Spiritual pressure</strong> (the presence of death is overwhelming)</li>
</ol>

<p>By the end of this beat, the party has:</p>

<ul>
<li>Reached level 4 (if they haven't already)</li>
<li>Suffered casualties or exhaustion</li>
<li>Witnessed the Rot's depth and intelligence</li>
<li>Understood that they are running a race against time—Grafvitnir is aware of them and is moving pieces into position</li>
</ul>

<hr>

<h2>Part 1: The Approach to the Bone-Fields</h2>

<h3>The Transition Zone</h3>

<p>The party is traveling northeast from Rindgate toward the Bone-Fields. The terrain gradually shifts:</p>

<ul>
<li>The grass dies. The scrub becomes sparser. The snow becomes whiter, more sterile.</li>
<li>The wind carries a different smell—not the smell of decay (the cold preserves), but the <em>smell of age</em>, of something very old being exposed.</li>
<li><strong>Lew</strong> becomes nervous. He has avoided this place for years. He tries to mask it, but his unease is visible.</li>
</ul>

<p>The party reaches the edge of the Bone-Fields in late afternoon. The sun is low and pale. If they rest now, they will camp on the edge and enter at dawn. If they push forward, they enter in the dying light.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 GM Decision</h4>
<p>This is a good dramatic choice point. Let the party decide whether to camp and face the Fields rested, or push forward and enter in reduced visibility.</p>
</div>

<h3>The Entering Scene</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The Bone-Fields begin without warning.</p>
<p>One moment, you are walking on snow-covered ground. The next, you are stepping onto a landscape of white. Not pristine white, but the white of calcified bone—ancient, brittle, jutting from the frozen ground in irregular formations.</p>
<p>It is as if you have walked into the skeleton of a dead god.</p>
<p>The bones are enormous. Ribs the size of logs. Vertebrae as large as wagon wheels. Skulls that could fit a house inside them. But mixed with the massive bones are countless smaller ones—the remains of soldiers, horses, creatures that fell in whatever battle created this place centuries ago.</p>
<p>The wind here is different. It carries the sound of bone grinding against bone, a creaking that might be wind or might be something far older waking.</p>
<p>The sky above is pale gray. Clouds are moving in from the west. Storm coming. Maybe tonight, maybe tomorrow.</p>
<p>And ahead: the landscape rises in a gentle incline, covered in a white field that extends to the horizon. It is the most desolate place any of you have ever seen.</p>
<p><strong>Kaelen</strong>, beside you, is pale. Her hand is on her chest, over her heart. She whispers something—a prayer, or a warning, in a language you don't understand.</p>
<p><em>"The boundary is so thin here,"</em> she says quietly. <em>"I can feel it. The dead are not just beneath us. They're not just in the ground. They're... reaching. Trying to find the way back."</em></p>
</div>

<h3>Environmental Hazard: Hard Montage Test</h3>

<p>Crossing the Bone-Fields is not simple combat. It is a <strong>Hard Montage Test (2 rounds)</strong> representing the difficulty of moving through a landscape that is actively hostile:</p>

<p><strong>Difficulty:</strong> Hard (adjusted for 4 heroes)<br>
<strong>Rounds:</strong> 2 (each hero acts once per round; 8 total individual tests)<br>
<strong>Success Limit:</strong> 5<br>
<strong>Failure Limit:</strong> 3</p>

<h4>Round 1 Sample Tests</h4>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Challenge</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Characteristic</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Description</th>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Navigate the bone maze</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Agility or Reason</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Move carefully through jagged bone formations without cutting feet or breaking ankles. Read patterns in the bones. Are they natural arrangement, or is there intent behind them?</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Resist the oppression</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Presence</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">The presence of death is concentrated and heavy here. The spiritual weight presses down like a hand on the chest. Resist despair. Keep moving. Keep breathing.</td>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Sense the stirring beneath</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Intuition</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">The ground shifts subtly. Bones settle and creak. Something below is moving, waking, remembering hunger. Maintain awareness. Sound the alarm if needed.</td>
</tr>
</table>

<h4>Round 1 Interlude: The Awakening</h4>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The ground cracks beneath your feet.</p>
<p>Not everywhere—in scattered places around the party, the calcified earth fissures. The bones beneath shift, moving upward. The ice cracks. And in those cracks, you glimpse movement—not random, but <em>directed</em>.</p>
<p>Then you see it. From one of the cracks, a figure pulls itself up. Skeletal, wrapped in tattered leather and rusted metal. An eye socket glows with sickly pale light.</p>
<p>A Barrow-Draugr. Ancient. Wrong.</p>
<p>It drags itself completely out of the earth and its jaw opens. No sound comes out, but you <em>feel</em> the force of its silence—a scream from a body that has no air to carry the sound.</p>
<p>Around it, more cracks appear. More rising. More of them, at least 6 or 8, emerging from different points in the ground.</p>
<p>And then, from the center of the white bone-field to the north, you hear it: a wail that does carry sound. A voice like wind through a tomb, like the last breath of something dying stretched out infinitely.</p>
<p>A Bone-Singer. One of the dead-kin that has absorbed so many corpses and so much undeath that it has become something more.</p>
<p>It's calling the Barrow-Draugr to attention. Calling them to feed.</p>
</div>

<h4>Round 2 Sample Tests</h4>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Challenge</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Characteristic</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Description</th>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Endure the cold and exhaustion</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Might or Presence</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Push through the numbing cold. Each step feels like walking on graves. The oppression is physical now, not just spiritual. Keep moving. Keep strength.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Understand the Bone-Singer's power</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Reason or Intuition</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">This is not natural draugr. This is something older, more powerful. It is binding the dead into a unified will. Recognize that killing it might break the binding.</td>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Keep the group from breaking</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Presence</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Fear spreads. Despair is spreading. The party is on the edge of panic. Keep them focused. Keep them together. Keep them alive.</td>
</tr>
</table>

<h4>Round 2 Interlude: The Terrible Silence</h4>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>When the combat ends, there is a profound silence.</p>
<p>The wind dies. The creaking of bones stops. The wailing is gone. It's as if the Fields themselves have exhaled and are now waiting.</p>
<p>The party is in the center of the ancient battlefield. Around them, the bones of the Barrow-Draugr have collapsed back into the earth, twitching occasionally but no longer animate. The Bone-Singer's corpse—or what remains of it—is a twisted thing, more shadow than substance.</p>
<p>To the north, still visible in the distance: a rise in the bone-field, and on that rise, the faint outline of a structure.</p>
<p>The Ivory Tower.</p>
<p>And beyond that, the path north. One more day's journey to the interior highlands. And then, Surt's Forge and the Emberwell.</p>
</div>

<h3>Bone-Fields Crossing Outcomes</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Result</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Outcome</th>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Hard Success</strong> (5+ successes, 0 failures)</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">The party crosses in excellent time (less than a full day's march). They navigate expertly, avoid triggering the Barrow-Draugr entirely. The draugr sense them but do not rise. The spiritual oppression is minimal. They reach the far side in good condition, sighted on the Ivory Tower.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Success</strong> (more successes than failures)</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">They cross in a full day's march, exhausted. One or two scattered Barrow-Draugr emerge, triggering a brief easy-to-moderate combat encounter. They dispatch them quickly and continue. Morale is intact.</td>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Failure</strong> (more failures than successes)</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">The crossing takes 1.5 days. The party is exhausted, disoriented, and they trigger the full encounter: multiple Barrow-Draugr and the Bone-Singer. Hard combat. They win but at cost—casualties, major injury, or significant resource expenditure.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Hard Failure</strong> (all failures)</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Complete disaster. The party is ambushed in the middle of the Fields with no easy retreat. The Bone-Singer encounters them at full strength, surrounded by Barrow-Draugr. Combat is extreme difficulty. Retreat is the only option. The party must flee south and find another route.</td>
</tr>
</table>

<hr>

<h2>Part 2: The Barrow-Draugr Encounter</h2>

<h3>The Rising</h3>

<p>If the party failed the montage or if they're unlucky in the rolls, the Barrow-Draugr encounter is triggered.</p>

<p>The ground begins to break apart. Not everywhere—in a rough circle around the party, the calcified earth cracks. Bones shift. The ice beneath begins to crack. And from below, dragging themselves upward, come the ancient dead.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The earth cracks beneath your feet.</p>
<p>It starts as a small fissure, then spreads, widening. You jump back, but the ground all around you is breaking. The calcified bones shift, moving upward, and through the cracks, something rises.</p>
<p>At first, you think it's just bones falling. But the bones are moving with purpose. They're pulling themselves together, pulling themselves up. And then you see it—a shape, skeletal, wrapped in tattered leather and rusted metal.</p>
<p>A Barrow-Draugr. Ancient. Wrong.</p>
<p>It pulls itself completely out of the earth, and its jaw opens. No sound comes out, but you feel the force of its silence—a scream from a body that has no air to carry the sound.</p>
<p>And around it, more cracks. More rising. More of them, at least 6 or 8, emerging from different points in the ground. They're not attacking immediately. They're just waking. Remembering how to move. Remembering that they are hungry.</p>
<p>And then, from the center of the battlefield, from a rise in the white bone-field to the north, you hear it: a wail that does carry sound. A voice like wind through a tomb, like the last breath of something dying, stretched out infinitely.</p>
<p>A Bone-Singer. One of the dead-kin that has absorbed so many corpses and so much undeath that it has become something more. It's calling the Barrow-Draugr to attention. Calling them to feed.</p>
</div>

<h3>Combat: Barrow-Draugr + Bone-Singer</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Bone-Fields Encounter</h4>
<p><strong>Difficulty:</strong> Hard | <strong>Encounter Strength:</strong> ~44</p>
<p><strong>Enemies:</strong></p>
<ul>
<li>6× @UUID[Actor.IFjZSudqoQMHsXB8]{Barrow-Draugr} (Level 3 Standard) — ES 8 each</li>
<li>1× @UUID[Actor.XDA6ps2iU79kqc1J]{Bone-Singer} (Level 4 Elite) — ES 20</li>
</ul>
<p><strong>Terrain:</strong> Difficult terrain throughout. Bones jut from the ground randomly. Ranged Power Rolls take a −1 penalty (sightlines blocked). Melee combatants gain +1 Defense against ranged attacks (skeletal cover). Movement beyond 30 feet per round requires Agility test or target falls prone.</p>
<p><strong>Special Rules:</strong> The @UUID[Actor.XDA6ps2iU79kqc1J]{Bone-Singer} raises additional draugr each round (Rounds 1-3). It must be defeated or driven off to end the encounter. Retreat is possible to the south if the party is losing badly.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Barrow-Draugr — Tactical Summary</h4>
<p>Use the @UUID[Actor.IFjZSudqoQMHsXB8]{Barrow-Draugr} stat block for full details. Key tactical notes:</p>
<ul>
<li><em>Shambling Charge:</em> Once per combat, move up to 30 feet and make a Bone-Shatter Strike. Use this to close distance on ranged characters.</li>
<li><em>Calcified Grasp:</em> Triggered after a hit — target makes moderate Might test or is restrained with ongoing cold damage (save ends). Prioritize restraining the party's strongest melee fighter.</li>
<li><em>Ancient and Resilient:</em> Resistant to cold damage (reduce by 2). Vulnerable to fire (increase by 2). Fire is the answer here.</li>
</ul>
<p><strong>Tactical Notes:</strong> Barrow-Draugr are slow (Speed 4) but durable. They emerge from the ground in waves. Initial 6 rise, then the Bone-Singer raises 1-2 more each round for Rounds 1-3. Focus fire to reduce their numbers before being overwhelmed.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Bone-Singer — Tactical Summary</h4>
<p>Use the @UUID[Actor.XDA6ps2iU79kqc1J]{Bone-Singer} stat block for full details. Key tactical notes:</p>
<ul>
<li><em>Wail of the Dead:</em> Area 30 feet, Presence-based. All targets make moderate Presence test; on failure take 6 psychic damage and are frightened (bane on next action). This is its primary offensive tool.</li>
<li><em>Drain Life:</em> Ranged 20 feet. +5 vs. Presence — deals 8 necrotic damage and the Bone-Singer heals for the same amount. It uses this to sustain itself while the Barrow-Draugr pressure the party.</li>
<li><em>Arise, Arise:</em> Triggered action once per round (Rounds 1-3). Raises 1-2 Barrow-Draugr minions from the ground anywhere within 60 feet. This is what makes the encounter escalate.</li>
<li><em>Choir of Death:</em> Triggered once per combat when Stamina drops below 15. All creatures within 60 feet take 12 psychic damage and are stunned until end of next turn. <strong>This is lethal</strong> — be ready for it.</li>
<li><em>Dread Aura:</em> Living creatures within 10 feet have a bane on Presence tests. This makes closing to melee range dangerous.</li>
<li><em>Undead Nature:</em> Immune to cold, poison, and fear. Takes extra damage from fire and radiant sources (increase by 3).</li>
</ul>
<p><strong>Tactical Notes:</strong> The Bone-Singer hangs back behind its Barrow-Draugr shield. It uses Wail and Drain Life while raising reinforcements. The party must push through the draugr to reach it. It is intelligent and self-preserving — if badly wounded, it retreats northward rather than fight to the death.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Combat Progression</h4>
<p><strong>Rounds 1-2:</strong> Initial Barrow-Draugr attack. Bone-Singer hangs back, wailing and raising more draugr. The party feels outnumbered and pressured.</p>
<p><strong>Rounds 3-4:</strong> The party finds their footing. Focus fire on the Bone-Singer. Pick off Barrow-Draugr one by one. The Bone-Singer continues raising reinforcements but begins to take damage.</p>
<p><strong>Rounds 5+:</strong> If the Bone-Singer survives, it uses Drain Life and Choir of Death. The party should be nearing victory but feeling the toll.</p>
<p><strong>Retreat Option:</strong> If the party is losing badly, the Bone-Singer may retreat northward toward deeper Bone-Fields rather than fight to the death. It is intelligent and self-preserving.</p>
<p><strong>Victory:</strong> When the Bone-Singer is defeated, the remaining Barrow-Draugr collapse—their animating force is gone. The ground stops moving. The wailing ceases.</p>
</div>

<hr>

<h2>Part 3: The Aftermath and the Realization</h2>

<h3>The Silence</h3>

<p>When the combat ends, there is a profound silence. The wind dies. The creaking of bones stops. The wailing is gone. It's as if the Fields themselves have exhaled and are now waiting.</p>

<p>The party is in the center of the ancient battlefield. Around them, the bones of the Barrow-Draugr have collapsed back into the earth, twitching occasionally but no longer animate.</p>

<p>The Bone-Singer's corpse—or what remains of it—is a twisted thing, more shadow than substance now that it has been killed.</p>

<p>And to the north, still visible in the distance: a rise in the bone-field, and on that rise, the faint outline of a structure. The Ivory Tower.</p>

<h3>Kaelen's Understanding</h3>

<p><strong>Kaelen</strong> approaches the area where the Bone-Singer fell and kneels. She traces her hand over the ground where its shade is fading.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>"This one was ancient. Older than the Keeper order. It was pulling the new dead up and binding them into its form, taking them into itself. A communion of the dead. That's not natural, even for draugr."</p>
<p>She looks at the party, and her fear is visible.</p>
<p>"Someone is using the Rot to accelerate what should be slow. The dead should fall slowly back into Helheim, over months and years. But here, they're being pulled up quickly, bound together, weaponized. It's not just Grafvitnir gnawing from below. It's someone actively working the Rot. Someone making it a tool."</p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: Weaponized Death</h4>
<p>The dead are being weaponized actively, not as a passive consequence of The Rot's spread. Someone is directing the Rot itself. This is coordinated. It is purposeful. And the party's enemies now understand their location and movements.</p>
</div>

<h3>Lew's Somber Assessment</h3>

<p><strong>Lew</strong>, if the party asks him, provides grim context:</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Lew's Observation</h4>
<p>"I've crossed the Bone-Fields twice before in my life. The draugr here are usually scattered, confused. Not organized. Never like this. I've never seen a Bone-Singer this powerful, or draugr rising in coordinated numbers like that.</p>
<p>The dead aren't just dying worse. They're being made into something worse. And it's coordinated. Whatever is doing this, it has a plan. It's not random."</p>
</div>

<h3>The Path Forward</h3>

<p>From where the party stands, they can see northeast to the Ivory Tower, and beyond it, north toward the interior highlands and the distant northern reaches.</p>

<p>The Bone-Fields extend in all directions. To the south (where they came from), the landscape is open. To the north and east, the bones gradually give way to more normal earth, but it's still haunted, still heavy with the presence of death.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Route Options</h4>
<p><strong>Head directly north through the rest of the Bone-Fields:</strong> Faster but more exposed. Risk of additional encounters.</p>
<p><strong>Head northeast toward the Ivory Tower:</strong> A slight detour but a known landmark that might offer shelter. <strong>Kaelen</strong> will likely recommend this—she wants to examine the Keeper archive there.</p>
<p><strong>Leave the Bone-Fields to the south and take a longer route:</strong> Avoids further conflict but adds days to their journey and significant Heat costs.</p>
<p>The party will likely choose the Ivory Tower route. This sets up Beat 15.</p>
</div>

<hr>

<h2>Part 4: Recovery and Heat Management</h2>

<h3>The Cost of the Battle</h3>

<p>After the combat, the party should rest. They can:</p>

<ul>
<li><strong>Rest in place</strong> (risky; the Bone-Fields are not a safe place to sleep). Heat cost is double or triple.</li>
<li><strong>Push toward the Ivory Tower</strong> before resting (3-4 hours of travel, then rest in a structure). Normal Heat cost, but exhausted upon arrival.</li>
<li><strong>Push through the Bone-Fields</strong> to the far side before resting (6+ hours of travel, very difficult). They avoid the Fields entirely but arrive at their next location completely exhausted.</li>
</ul>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Heat Crisis and the Tower</h4>
<p>The party's Heat reserves are now critical. They've been traveling for weeks. The Steam-Oasis is still several days away. They are running on fumes.</p>
<p><strong>Kaelen</strong>, if asked, says: "We need to reach a place with fire and shelter. The Ivory Tower... I know it. There are still wards there, still heat in the stones from the Keeper work. We can rest there safely."</p>
<p>This nudges the party toward the Ivory Tower without forcing it.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Advancement</h4>
<p>If the party has not reached level 4, they reach it now or during Beat 15. This is a natural threshold—they've faced significant danger and overcome it.</p>
<p>If they have reached level 4, remind them that their Encounter Strength has increased. They are getting stronger, hardening in the face of adversity.</p>
</div>

<hr>

<h2>Ending Beat 14</h2>

<p>The beat ends with the party:</p>

<ol>
<li><strong>Having faced major danger</strong> and survived.</li>
<li><strong>Understanding that the dead are being weaponized</strong> actively, not just rising passively.</li>
<li><strong>Exhausted, injured, and desperate for shelter.</strong></li>
<li><strong>Heading northeast toward the Ivory Tower</strong> (setting up Beat 15).</li>
<li><strong>Aware that they are running out of time</strong>—Grafvitnir's pieces are moving, and they must reach the Emberwell before the network fully mobilizes.</li>
</ol>

<p>The Bone-Fields are behind them. The Rot's presence is deeply understood now. And ahead lies the archive of the Keepers—where <strong>Kaelen</strong> will finally understand the full weight of what is being asked of her.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Pacing and Difficulty</h4>
<p>This beat works best as a full session. The environmental montage takes time, the combat takes time, and the aftermath/realization should be given space. This should be the hardest fight the party has faced yet. It's designed to be challenging, to scare them, and to make them understand that the north is genuinely dangerous.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Atmosphere and Character Progression</h4>
<p>The Bone-Fields should feel like a desecrated, haunted place. It's not just a battlefield; it's a place where the boundary between life and death is broken.</p>
<p><strong>Kaelen</strong> is moving toward her Layer 3 understanding. The Ivory Tower records will complete it. This beat is the penultimate step.</p>
<p>The Wyrd and The Rot are clearly present here. It's not just a metaphor; it's a physical, spiritual force that can be sensed and resisted.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Resource Pressure and Narrative Weight</h4>
<p>Heat should be very low after this beat. The party is feeling the scarcity keenly. The Steam-Oasis (2-3 beats away) is their lifeline.</p>
<p>Mention the Ivory Tower in the distance. Let the party see it before they reach it. This builds anticipation.</p>
<p>The party is being hunted. They're exhausted. They're in the most dangerous place they've been. But they're also getting close. Remind them of the distance remaining and the progress they've made. They're 60-70% of the way to their goal.</p>
</div>`;

fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 14 content updated (' + page.text.content.length + ' characters)');
