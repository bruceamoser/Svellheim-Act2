#!/usr/bin/env node
/**
 * Update Beat 10 — The Western Detour
 * Replaces the condensed placeholder HTML with the full runtime-ready content
 * derived from 04-Campaign/01-Restore-the-Flame/Act-2/10-The-Western-Detour.adoc
 */

const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal.journal.json');

const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

// Find the Beat 10 page by _id
const beat10Page = journal.pages.find(p => p._id === 'qg6HvKq25dQUH5l9');
if (!beat10Page) {
  console.error('ERROR: Could not find Beat 10 page (id: qg6HvKq25dQUH5l9)');
  process.exit(1);
}

// The full expanded HTML content for Beat 10
beat10Page.text.content = `<p><strong>Level:</strong> 3<br>
<strong>Duration:</strong> 1\u20132 sessions<br>
<strong>Location:</strong> Hrafnborg outskirts, coast road south/southwest, Singing Islands, Echoing Caves entrance<br>
<strong>Key NPCs:</strong> Kaelen (traumatized but resolved), Lew (guide), Gragnir (brief, off-scene intelligence)<br>
<strong>Type:</strong> Travel montage, tactical misdirection, environmental discovery, Grafvitnir Pressure check<br>
<strong>Tone:</strong> Escape and deception; the weight of responsibility; discovery of the old path</p>

<hr>

<h2>Overview</h2>

<p>The party leaves Hrafnborg with the knowledge that Dreyfus is out in the world, that Grafvitnir\u2019s network is hunting them, and that every northeastern road is being watched. They take a calculated risk: flee <strong>southwest</strong> toward the Singing Islands, the opposite direction from their true goal (Emberwell, far north). The idea is to buy time by misdirecting pursuit while they locate an ancient passage system\u2014underwater caves that connect beneath the landmass and emerge far to the east, near Rindgate.</p>

<p>This beat does three things:</p>

<ol>
<li><p><strong>Establishes the escape route</strong> and the party\u2019s tactical awareness.</p></li>
<li><p><strong>Introduces the Singing Islands geography</strong> and the mysterious Echoing Caves.</p></li>
<li><p><strong>Reveals that old paths exist below the world</strong>, hinting at Yggdrasil\u2019s architecture and the history that Rickety Frets will later explain.</p></li>
</ol>

<p>By the end of Beat 10, the party is preparing to descend into the underwater caves. They should feel they\u2019ve bought themselves time\u2014but also be uncertain whether they\u2019ve truly escaped or merely delayed their pursuers.</p>

<hr>

<h2>Part 1: The Departure and the Road South</h2>

<h3>Scene Setup: Breaking Siege</h3>

<p>The party leaves Hrafnborg in the chaos of post-siege recovery. There is no grand sendoff. Harald is occupied with the city\u2019s defense and with managing Kaelen\u2019s condition (post-ritual exhaustion). Gragnir appears briefly\u2014perhaps in a dream, perhaps as a figure glimpsed at the walls\u2014and provides a single piece of intelligence:</p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">\u26A0 Director Secret: Gragnir\u2019s Message</h4>
<p>Gragnir does not give detailed directions. He gives a riddle or a hint:</p>
<p><em>\u201CThe fire that sings is not the fire that burns. Where the earth remembers warmth, the roots remember too. The draugr walk southwest. Walk the opposite shore.\u201D</em></p>
<p>Or, more direct: <em>\u201CGo south and west. To the coast. Find the singing. The old tunnels are carved into stone older than the kingdoms.\u201D</em></p>
<p>This gives the party direction but not certainty. They must deduce that:</p>
<ol>
<li>Singing Islands = Singing (obvious)</li>
<li>\u201COpposite shore\u201D = where draugr are not (southwest coast, away from interior)</li>
<li>Old tunnels = underwater passages beneath the islands</li>
</ol>
<p>Gragnir does not travel with them. He remains with Harald, defending the last Ever-Ember in Hrafnborg.</p>
</div>

<h3>Kaelen\u2019s State</h3>

<p>Kaelen emerges from the ritual chamber pale, exhausted, and subtly changed.</p>

<ul>
<li><p>She has spoken to Yggdrasil. She has felt the tree\u2019s perspective: vast, dying, and not quite comprehending why it is dying. The tree does not blame. It simply fades.</p></li>
<li><p>She is quiet. She answers questions briefly. She does not volunteer information.</p></li>
<li><p>If pushed about what she felt in the ritual, she says: <em>\u201CThe tree is old. It is tired. It knows what is happening to it. And it\u2026 it seemed to recognize me. Like it had been waiting for someone to come.\u201D</em></p></li>
<li><p>She understands, at some level, that she is the person it was waiting for\u2014but she does not say this. Not yet.</p></li>
</ul>

<h3>The Coastal Road</h3>

<p>The party travels south/southwest from Hrafnborg along the coast road. The route goes:</p>

<ul>
<li><p><strong>Hrafnborg</strong> \u2192 <strong>Saltvik</strong>: 43 miles, 2\u20133 days</p></li>
<li><p><strong>Saltvik</strong> \u2192 <strong>Splinter Fjords</strong>: ~30 miles, 1\u20132 days</p></li>
<li><p><strong>Splinter Fjords</strong> \u2192 <strong>Singing Islands</strong>: ~48 miles, 2\u20133 days</p></li>
</ul>

<p>Total: 120+ miles of coastal travel, rough terrain, 5\u20138 days depending on conditions.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Distance Management</h4>
<p>Rather than play out every day, use 2\u20133 short scenes along this route:</p>
<ol>
<li><strong>Saltvik:</strong> A brief stop for supplies. The town is crowded with refugees but functional. No immediate Pale Maw interference (they\u2019re still orienting to the party\u2019s southwestern movement).</li>
<li><strong>Splinter Fjords coast:</strong> A night\u2019s shelter in a cave or a shepherder\u2019s stone hut. A sign that they\u2019re being followed (Pale Maw scouts on the road). Not a confrontation\u2014just awareness. A Grafvitnir Pressure roll.</li>
<li><strong>Approach to Singing Islands:</strong> The landscape becomes volcanic. Steam vents. The air tastes of sulfur. The sound of wind through stone arches grows louder as they approach.</li>
</ol>
</div>

<h3>Grafvitnir Pressure Check (Roll 1)</h3>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">\u26A0 Grafvitnir Pressure: Road Interference</h4>
<p><strong>Make a secret d6 roll.</strong> 1\u20132 = nothing yet; 3\u20135 = network interference; 6 = major intervention.</p>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#e0d0c0; background:#4a2a2a;">
<thead>
<tr style="background:#5a3a3a; color:#e0d0c0;">
<th style="padding:6px 10px; text-align:left;">Roll</th>
<th style="padding:6px 10px; text-align:left;">Result</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:6px 10px;"><strong>1\u20132</strong></td>
<td style="padding:6px 10px;">Nothing. The network has not yet oriented to the party\u2019s southwestern route.</td>
</tr>
<tr style="background:#5a2a2a;">
<td style="padding:6px 10px;"><strong>3\u20135</strong></td>
<td style="padding:6px 10px;">Pale Maw scouts spot them on the coast road. Word spreads via messenger. But the scouts report the party heading <em>southwest</em>, which makes the network think they\u2019re heading for the Singing Islands as a final refuge, not as a waystation on a longer journey. This buys the party time. An NPC in Saltvik or Splinter Fjords might pass along a warning: <em>\u201CThere\u2019s word on the road. Cloaked riders asking about a party heading south. They\u2019re saying something about heresy and a stolen woman.\u201D</em></td>
</tr>
<tr>
<td style="padding:6px 10px;"><strong>6</strong></td>
<td style="padding:6px 10px;">A Pale Maw operative is in Saltvik or Splinter Fjords, ready to intercept. See <strong>Grafvitnir Pressure: First Intervention</strong> below.</td>
</tr>
</tbody>
</table>
</div>

<h3>Flavor: Coastal Journey</h3>

<p>As the party travels south, the world changes:</p>

<ul>
<li><p>The towns grow smaller, more isolated, more desperate.</p></li>
<li><p>The sea is closer. Refugees camp on beaches, hoping for a ship that won\u2019t come.</p></li>
<li><p>The sky is cloudier; the sun is a pale disc that spends more time below the horizon.</p></li>
<li><p>The path becomes rockier. Vegetation is minimal\u2014salt-stunted shrubs, and the occasional stunted tree bent by wind.</p></li>
<li><p>At night, the wind carries the smell of ice and salt. The sound of waves is constant.</p></li>
</ul>

<p>This journey should feel like they are moving toward the edge of the world, not deeper into civilization.</p>

<hr>

<h2>Part 2: The Singing Islands Approach</h2>

<h3>Geography and Atmosphere</h3>

<p>The Singing Islands are a chain of volcanic islands off the southwestern coast. The islands are:</p>

<ul>
<li><p><strong>Geologically active:</strong> Hot springs, geothermal vents (the Vent-Gardens on Eld\u00F8y), occasional steam explosions.</p></li>
<li><p><strong>Aurally striking:</strong> Winds through stone arches create a constant, eerie singing\u2014not musical, but not random. It shifts with the weather and time of day.</p></li>
<li><p><strong>Home to Vanir circles:</strong> There are settlements here\u2014Eld\u00F8y is the largest\u2014but they are not Aesir towns. They are groves, meeting-places, and sacred sites. Different social structures.</p></li>
<li><p><strong>Partially submerged:</strong> The islands have extensive cave systems, many of which are flooded by tidal action or by natural channels that lead underground.</p></li>
</ul>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>As you approach the Singing Islands, the sound hits you first. It\u2019s not singing\u2014not exactly. It\u2019s the wind moving through stone arches, through caverns, through channels carved by water and time. It rises and falls, almost like breath. Almost like something vast is singing a note it doesn\u2019t know it\u2019s making.</p>
<p>The islands emerge from the gray water like the ribs of something long dead, picked clean by the sea. Volcanic stone, dark and jagged. Steam rises from cracks in the earth. There are no trees, but there are structures\u2014standing stones, carved pillars, some so old that ice has begun to smooth their edges.</p>
<p>The largest island, Eld\u00F8y, shows smoke rising from its summit. That\u2019s where the geothermal vents feed the Vent-Gardens, where the only vegetables in Svellheim still grow.</p>
<p>But you\u2019re not here for Eld\u00F8y. You\u2019re here for the caves.</p>
</div>

<h3>Discovering the Echoing Caves</h3>

<p>The Echoing Caves are to the west of the Singing Islands proper. They are not immediately obvious\u2014they are partially submerged, accessible only at certain tides, and their entrance is hidden behind a rocky outcrop.</p>

<p>The party needs to either:</p>

<ol>
<li><p><strong>Ask around</strong> (in Eld\u00F8y or a fishing settlement) about old routes and cave systems. A Vanir elder or a fisher might mention the caves and the fact that they \u201Cgo down deep, further than should be possible.\u201D</p></li>
<li><p><strong>Stumble upon them</strong> while exploring the coastline.</p></li>
<li><p><strong>Use Gragnir\u2019s hint</strong> (if they remember it: \u201Cthe old tunnels are carved into stone older than the kingdoms\u201D) to deduce that the Echoing Caves are likely candidates.</p></li>
</ol>

<p>A successful <strong>Reason test</strong> (moderate difficulty, or Intuition if they\u2019re using a skill like Lore or Navigation) lets them deduce that the caves are large, that they were historically important, and that they may connect other islands or regions underground.</p>

<h3>Environmental Discovery: The Underwater Passage</h3>

<p>The Echoing Caves entrance is a large, arched mouth of dark stone. At high tide, water fills the lower portion, obscuring the passage. At low tide, there is a path\u2014a few feet of stone beach before the water takes over.</p>

<p>The party will need to do some scouting:</p>

<ul>
<li><p>A <strong>Presence test</strong> (checking for spirits, wards, or signs of habitation) reveals no current occupants, but there are old carvings\u2014Vanir runes, some so weathered they are barely legible. They speak of \u201Cthe Deep Road\u201D and \u201Cthe Root Ways.\u201D</p></li>
<li><p>The passage descends. It is walkable for the first 50 feet, then it transitions to shallow water (waist-deep in places, chest-deep in others). The water is cold, clear, and perfectly still.</p></li>
<li><p>If they wade in, they will see that the water continues onward\u2014a flooded tunnel. The passage is wide enough for two people to walk side-by-side. The ceiling is high enough that there is air for breathing. But the path forward is entirely underwater\u2014or appears to be, until closer inspection reveals an air pocket every 30\u201340 feet, where the tunnel curves and the stone rises above the water line.</p></li>
</ul>

<p>This is ancient. Yggdrasil\u2019s roots don\u2019t create caves, but the architects of the First Kindling knew how to use them.</p>

<hr>

<h2>Montage: Cave Entrance and Preparation</h2>

<p>Run a <strong>Moderate Montage Test</strong> representing the preparation and initial descent into the underwater caves.</p>

<p><strong>Difficulty:</strong> Moderate</p>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<thead>
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:6px 10px; text-align:left;">Difficulty</th>
<th style="padding:6px 10px; text-align:left;">Success Limit</th>
<th style="padding:6px 10px; text-align:left;">Failure Limit</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:6px 10px;"><strong>Moderate (adjusted for 4 heroes)</strong></td>
<td style="padding:6px 10px;"><strong>4</strong></td>
<td style="padding:6px 10px;"><strong>2</strong></td>
</tr>
</tbody>
</table>

<p><strong>Rounds:</strong> 2 montage test rounds (each hero acts once per round; 8 total individual tests).</p>

<h3>Round 1 Sample Tests</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<thead>
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:6px 10px; text-align:left;">Challenge</th>
<th style="padding:6px 10px; text-align:left;">Characteristic</th>
<th style="padding:6px 10px; text-align:left;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:6px 10px;">Scout the entrance and tidal rhythm</td>
<td style="padding:6px 10px;">Intuition or Reason</td>
<td style="padding:6px 10px;">Study the cave mouth, understand how the tides move through it. Find supplies already here\u2014old rope, broken tools, fragments of past travelers\u2019 gear. Mark safe entry points.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;">Prepare gear for water travel</td>
<td style="padding:6px 10px;">Might or Agility</td>
<td style="padding:6px 10px;">Secure packs, test rope for strength, distribute weight so everything stays buoyant. Identify what can stay dry and what must be abandoned.</td>
</tr>
<tr>
<td style="padding:6px 10px;">Calm and ready the group</td>
<td style="padding:6px 10px;">Presence</td>
<td style="padding:6px 10px;">Speak to fears about the underwater passage. Ground the party in resolve. Someone is afraid; talk them through it.</td>
</tr>
</tbody>
</table>

<h3>Round 1 Interlude: The First Waters</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The cave entrance opens like a mouth, dark and wet. The water inside is so clear you can see the stone beneath\u2014carved deliberately, not by erosion. Someone shaped this passage long ago.</p>
<p>As you wade in, the temperature drops. The water is cold, shockingly so. But it\u2019s not numbing. It\u2019s alive. You can feel the current, faint and patient, pulling toward the deeper places.</p>
<p>The bioluminescent creatures drift past your feet, glowing faintly blue. They\u2019re moving with purpose, deeper in. Following the dark.</p>
</div>

<p>The party has crossed the threshold. There is no turning back now. The water grows deeper with each step.</p>

<h3>Round 2 Sample Tests</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<thead>
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:6px 10px; text-align:left;">Challenge</th>
<th style="padding:6px 10px; text-align:left;">Characteristic</th>
<th style="padding:6px 10px; text-align:left;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:6px 10px;">Wade through the first flooded sections</td>
<td style="padding:6px 10px;">Might or Agility</td>
<td style="padding:6px 10px;">Move through waist-deep water over treacherous stone. Keep footing, manage cold shock. The passage is slippery and the current tugs at your legs.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;">Navigate the first air pocket</td>
<td style="padding:6px 10px;">Reason or Intuition</td>
<td style="padding:6px 10px;">Find the chamber where stone rises above water. Reach it without panic. There are side passages here; one leads deeper (correct), one leads to a dead-end (wrong).</td>
</tr>
<tr>
<td style="padding:6px 10px;">Keep spirits up in the darkness</td>
<td style="padding:6px 10px;">Presence</td>
<td style="padding:6px 10px;">The lack of external light is disorienting. Encourage the party. Ration torches wisely. Keep hope alive.</td>
</tr>
</tbody>
</table>

<h3>Round 2 Interlude: The Stone Remembers</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>In the air pocket, you emerge gasping. Your breath comes in heavy clouds. The cold has numbed your feet.</p>
<p>On the wall above you, carvings gleam in torchlight. Not human work. The lines are too precise, too deliberate. They spiral in patterns that almost hurt to look at\u2014not painful, but <em>wrong</em>, as if your eyes are trying to interpret something that doesn\u2019t exist in normal geometry.</p>
<p>One carving stands out: a figure with water flowing from uplifted hands. Below it, in a language that predates the kingdoms, a single word is cut deep into stone:</p>
<p><strong>L\u00EDf.</strong></p>
<p>The Mother. The one who survived the ending. The one who brought renewal.</p>
<p>You are not the first to seek renewal. You are not the first to walk these old roads.</p>
</div>

<p>Kaelen traces the carving, understanding more than she reveals.</p>

<h3>Final Interlude: The Deep Song</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>By the time you reach your camp for the night, the sound of the caves has changed. It\u2019s not silence anymore. It\u2019s a sound\u2014so faint you\u2019re not sure if you\u2019re hearing it or feeling it\u2014like the stone itself is singing.</p>
<p>You are deeper now than any surface dweller is meant to go. The old roads are old for a reason. They remember times before kingdoms. Times before the Keepers.</p>
<p>And something in the darkness remembers you.</p>
</div>

<p>The party is committed now. There is no return. Only forward, into the deep.</p>

<h3>Montage Outcomes</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<thead>
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:6px 10px; text-align:left;">Result</th>
<th style="padding:6px 10px; text-align:left;">Outcome</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:6px 10px;"><strong>Hard Success</strong> (all successes)</td>
<td style="padding:6px 10px;">The party navigates smoothly through the initial passages. They find supplies: old rope, torches, preserved rations. They reach the first major air pocket in good condition, rested and ready to move deeper.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;"><strong>Success</strong> (more successes than failures)</td>
<td style="padding:6px 10px;">They make adequate progress with minor difficulties. The cold is manageable. They reach camp tired but unharmed. One supply is damaged (rope frays, some torches waterlogged).</td>
</tr>
<tr>
<td style="padding:6px 10px;"><strong>Failure</strong> (more failures than successes)</td>
<td style="padding:6px 10px;">They are soaked, exhausted, and struggling with the passage. Equipment is damaged. Heat expenditure is high. Cold is a persistent problem. They camp in a less-safe location, unsure of the way forward.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;"><strong>Hard Failure</strong> (all failures)</td>
<td style="padding:6px 10px;">Panic in the water. Someone nearly drowns and requires rescue. Supplies are largely ruined. Heat cost is extreme. They camp in fear, aware they may have made a terrible mistake.</td>
</tr>
</tbody>
</table>

<h3>The Passage Itself (Scene)</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The tunnel is ancient. The walls are smooth\u2014not from water alone, but from deliberate shaping. You can feel tool marks beneath your fingertips where the stone has been carved into channels. Are they decorative? Functional? It\u2019s hard to tell.</p>
<p>The water is so clear that you can see 20 feet ahead. Small bioluminescent things\u2014crustaceans, or something older\u2014glow faintly in the darkness. They cluster in patches, following some logic only they understand.</p>
<p>Every 30 or 40 feet, the tunnel rises. There\u2019s an air pocket where the stone ceiling breaks above the waterline. You can climb out, breathe, rest for a moment. But the water always returns. The tunnel always sinks again.</p>
<p>In one pocket, you notice something that makes Kaelen go very still: a carved figure on the wall. A woman, or something shaped like one, with water flowing from her hands. Below her, in a language that might be older than writing, a name:</p>
<p><strong>L\u00EDf.</strong></p>
<p>Kaelen recognizes it. It is the name of the woman in the old stories\u2014the one who survived Ragnar\u00F6k. The one who would repopulate the world when it woke again.</p>
<p><em>\u201CShe was an Ember-Keeper,\u201D</em> Kaelen whispers. <em>\u201COr\u2026 the Keepers were named after her. I\u2019m not sure anymore which came first.\u201D</em></p>
</div>

<p>This is a moment of lore discovery and character revelation. Kaelen is beginning to understand that the path beneath the world is much older than she thought. The Keepers did not invent these routes. They inherited them.</p>

<hr>

<h2>Part 3: The Warden\u2019s Corruption</h2>

<h3>Discovery</h3>

<p>The party arrives at the Vent-Gardens of Eld\u00F8y in late afternoon. The gardens occupy a terraced slope on the island\u2019s western face, where geothermal heat rises from deep vents and keeps a roughly circular radius warm enough for plants to grow. It is one of the only places in Svellheim where food still grows.</p>

<p>It is also wrong.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The gardens should smell of earth and growing things. Instead, the air tastes of metal and ash. The plants\u2014what remains of them\u2014are blackening from the roots outward, as if something is poisoning them from beneath the stone itself.</p>
<p>The terraces are cracked. One has collapsed entirely, a section of cultivation stone tumbling downward in a half-buried ruin. The irrigation channels, which should run with clean mineral water, are sluggish. What flows is dark, viscous, and when you touch it, it leaves a residue on your skin\u2014thin, oily, faintly warm even in the cold air. It smells wrong: not quite flesh, not quite stone, but something that has decayed beyond either state.</p>
<p>An islander is weeping beside the collapsed terrace. An older woman, her hands muddy. When she sees you, she does not move\u2014too exhausted, or too grief-stricken to care who approaches.</p>
<p><em>\u201CThey\u2019re gone,\u201D</em> she says, not looking at you. <em>\u201CAll of them. The vents died. The Warden killed them.\u201D</em></p>
</div>

<h3>Investigation</h3>

<p>Investigation reveals the tragedy:</p>

<ul>
<li><p>A <strong>Reason test</strong> (moderate difficulty, TN 14) uncovers what has happened. The geothermal vents that powered the gardens have become unstable\u2014some blocked by something seeping up from below, others producing steam that is tainted with a dark, necrotic substance. The islanders have been unable to tend the plants for two weeks. Everything is dying.</p></li>
<li><p>An <strong>Intuition test</strong> (moderate, TN 14) to speak with the grieving woman\u2014named <strong>Sigrid</strong>\u2014gets her to explain: The <em>Vent-Warden</em> is an ancient spirit that has guarded these gardens for centuries, perhaps longer. It was kind to the islanders, protective. Two weeks ago, it changed. It withdrew into the vents. It stopped emerging to tend them. Now the vents are poisoned. The plants are failing.</p></li>
<li><p>A <strong>Nature or Lore test</strong> (hard, TN 16) by Kaelen or someone with arcane knowledge reveals something Sigrid could not articulate: This is not the Warden\u2019s doing\u2014this is something <em>infecting</em> the Warden. The pattern of corruption, the dark seepage, the withdrawal from its duties\u2014these are symptoms of the Rot. The spirit is being consumed from within.</p></li>
</ul>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">\uD83D\uDCDD GM Notes: Reading the Signs</h4>
<p>If Kaelen makes the Nature test, she goes quiet and her hand moves to the ever-ember mark on her chest. She has felt the Rot before. She knows what corruption looks like from the inside.</p>
<p>If <strong>Lew</strong> is present and makes the test (Intuition), his eye pulses with that strange warmth. He looks at the dark water and says softly: <em>\u201CThis is the same poison. The same taste. It\u2019s here too. It\u2019s everywhere now.\u201D</em></p>
<p>The party may recognize that the mercy option exists at this point\u2014a perceptive or experienced player will realize something is being lost, not just destroyed\u2014but they should not feel guided toward it. That comes later.</p>
</div>

<h3>The Warden</h3>

<p>The Vent-Warden is known to the islanders by that name alone. No one remembers its true name, if they ever knew it. <em>Jar\u00F0v\u00E6ttr</em> is an old word, old enough that most Svellheimers would not recognize it: Earth-Wight, keeper of the ground, spirit of place.</p>

<p>It has been here since long before the towns were built. Sigrid\u2019s great-grandmother\u2019s stories mention it. The Vanir elders know it as one of the old ones\u2014not human, not quite a god, but a force of nature given something like consciousness. It shaped the heat of the vents, guided the mineral flow, ensured the gardens grew. It was territorial but not malicious. It would not allow the islanders to damage the vents or the gardens, but it did not prevent them from tending the growth.</p>

<p>It was, perhaps, happy in its way. Tending was its purpose.</p>

<p>Two weeks ago, something else began tending the vents instead.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The Warden emerges from the largest vent\u2014the central one, around which the highest terraces were built\u2014and for a moment you cannot understand what you are looking at.</p>
<p>It is shaped like nothing in the natural world. Large, perhaps twice the height of a man, with a form that shifts between solid and liquid. Its body is volcanic stone, rough and dark, but cracks run across it\u2014not fractures, but channels. Through those channels, something black flows. When the creature moves, the stone groans.</p>
<p>Its face is the worst part. It has a face\u2014a mouth, eyes, the suggestion of a nose\u2014but they are wrong. The mouth opens too wide. The eyes are pits of black ichor that seems to move independently of the skull. And yet, beneath the wrongness, you sense something else: an intelligence that is being ground beneath the corruption. A will that is not its own.</p>
<p>The creature makes a sound. Not a roar. It is almost like a name\u2014a name in a language older than words, a sound that tries to be speech and fails. Then it fixes its corrupted gaze on you.</p>
<p><em>\u201CThe heat\u2026 dies,\u201D</em> it says, and the voice is two things at once: the grinding of stone and the wet whisper of rot. <em>\u201CEverything\u2026 dies.\u201D</em></p>
</div>

<hr>

<h2>Combat: The Vent-Gardens</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">\u2694\uFE0F Combat Setup: The Warden\u2019s Corruption</h4>
<p><strong>Difficulty:</strong> Hard (Level 3 PCs, Level 4 Boss enemy)</p>
<p><strong>Enemy Count:</strong> 1 Jar\u00F0v\u00E6ttr (Level 4 Boss). No supporting enemies in Phase 1. Rot-Echoes spawn in Phase 2 (when Jar\u00F0v\u00E6ttr drops below 36 Stamina).</p>
<p><strong>Terrain:</strong></p>
<ul>
<li>Stone cultivation terraces: 1 square high. Movement costs 2 squares to climb; provides half-cover when crouching behind one.</li>
<li>Irrigation channels: 1-square-wide trenches of mineral-hot water between terraces. Crossing costs 1 extra movement; falling in causes 3 fire damage and the creature is slowed until it spends a move action to climb out.</li>
<li>Collapsed wall sections and scattered debris: difficult terrain.</li>
<li>4 active steam vents (place on map): each occupies 1 square, produces heavy steam (obscures line of sight through the vent square). In Phase 1, standing adjacent to a vent is safe. In Phase 2, standing adjacent to a vent at the start of your turn costs 3 fire damage.</li>
</ul>
<p><strong>Victory Conditions:</strong></p>
<ul>
<li><strong>Combat Victory:</strong> Reduce Jar\u00F0v\u00E6ttr to 0 Stamina. It collapses into stone and stops moving. The Rot dissipates.</li>
<li><strong>Mercy Victory</strong> (optional): Achieve 3 successful <em>Unwilling Vessel</em> attempts (see \u201CThe Mercy Option\u201D below). On the third success, the corruption tears free and dissipates. The Jar\u00F0v\u00E6ttr collapses, inert but alive.</li>
</ul>
<p><strong>Lighting:</strong> The steam vents provide dim light. The area is shadowy but not dark.</p>
<p><strong>Special Rules:</strong></p>
<ul>
<li><strong>Vents as Movement:</strong> The Jar\u00F0v\u00E6ttr can use its <em>Vent-Step</em> maneuver to move between vents (see stat block).</li>
<li><strong>Heat Hazard (Phase 2 only):</strong> Standing adjacent to a vent at the start of a creature\u2019s turn costs 3 fire damage. The corrupted vents are now dangerous.</li>
<li><strong>Mercy Condition:</strong> If the party is attempting a mercy victory, track <em>Mercy Counter</em>. Each successful T3 result on an <em>Unwilling Vessel</em> attempt advances it by 1. At 3, the encounter ends with the Warden freed.</li>
</ul>
</div>

<h3>Stat Blocks</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<p><strong>Rot-Echoes</strong> (Phase 2 spawns):</p>
<ul>
<li>@UUID[Actor.8G3EVP3A9Lze74D7]{Rot-Echo} (Level 2 Minion, 8 SP)</li>
</ul>
<p><em>Note: 1 Rot-Echo spawns adjacent to the Jar\u00F0v\u00E6ttr at the start of each of its turns once it drops to 36 SP or below.</em></p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">\u26A0 Entity Gap: Jar\u00F0v\u00E6ttr</h4>
<p>No Svellheim Entities module entry exists for the Jar\u00F0v\u00E6ttr. Use the stat block below until an entity is created.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">Jar\u00F0v\u00E6ttr \u2014 The Vent-Warden (Level 4 Boss)</h4>
<p><em>Spirit, Elemental, Corrupted | Large (2\u00D72) | Keywords: Spirit, Elemental, Corrupted</em></p>
<p><strong>Stamina:</strong> 72 &nbsp;|&nbsp; <strong>Speed:</strong> 5 &nbsp;|&nbsp; <strong>Size:</strong> L &nbsp;|&nbsp; <strong>Stability:</strong> 3</p>
<p><strong>Characteristics:</strong> Might +5, Agility +1, Reason \u22121, Intuition +3, Presence +2</p>
<p><strong>Defenses:</strong> Might 16 | Agility 13 | Reason 11 | Intuition 14 | Presence 13</p>

<h5>Main Actions (2 per round)</h5>
<p><strong>Scorching Grasp</strong> (Melee, Might): +6 vs. Might; 11 fire damage. Target is <strong>Burning</strong> (4 fire damage at start of each turn, save ends TN 12). The Jar\u00F0v\u00E6ttr can only have one target Burning at a time. Applying Burning to a new target ends it on the previous target.</p>
<p><strong>Vent-Blast</strong> (Ranged Area: 2\u00D73 line originating from any active steam vent, Might): +5 vs. Agility; 8 fire damage and target is <strong>knocked prone</strong>. Creatures that fail by 5 or more are also <strong>pushed 2 squares</strong> away from the vent. <em>Costs 1 Malice.</em></p>
<p><strong>Heaving Slam</strong> (Melee, Might; Phase 2 only, unlocks at \u226436 Stamina): +6 vs. Might; 14 damage (7 fire + 7 necrotic). Target is <strong>dazed</strong> (save ends TN 14). The ground within 1 square of the target becomes difficult terrain as Rot-ichor seeps upward.</p>

<h5>Maneuvers</h5>
<p><strong>Vent-Step</strong> (Maneuver): The Jar\u00F0v\u00E6ttr submerges into any active steam vent and emerges from any other active vent as part of the same maneuver. While submerged, it cannot be targeted or harmed. Unlimited range within the encounter area.</p>

<h5>Features</h5>
<p><em><strong>Steam Shroud:</strong></em> While within 1 square of an active steam vent, the Jar\u00F0v\u00E6ttr has concealment. Attacks against it have a bane.</p>
<p><em><strong>Volcanic Resilience:</strong></em> Immune to fire damage and resistant to all damage (reduce incoming damage by 3 before applying).</p>
<p><em><strong>Rot Corruption (Phase 2):</strong></em> When the Jar\u00F0v\u00E6ttr drops to 36 Stamina or below, the Rot takes fuller control. At the start of each of its turns, 1 Rot-Echo spawns in an adjacent square. Vent-Step now costs nothing (can be used before other actions). Steam vents emit black-tinged smoke.</p>
<p><em><strong>Unwilling Vessel:</strong></em> A hero adjacent to the Jar\u00F0v\u00E6ttr can spend their Main Action to attempt to reach the spirit inside (Nature, Lore, or Presence; Hard difficulty, TN 16). On a T3 power roll (17+), the Jar\u00F0v\u00E6ttr does not attack that hero this round and the Mercy Counter advances by 1. On a T2 roll (12\u201316), the Jar\u00F0v\u00E6ttr hesitates and loses its next maneuver. On a T1 roll (\u226411), no effect.</p>
<p><em><strong>Tragic Memory:</strong></em> The first time the Jar\u00F0v\u00E6ttr drops below 36 Stamina, read aloud the Phase 2 interlude text (see below).</p>

<h5>Malice Abilities</h5>
<p><strong>Geyser Eruption</strong> (3 Malice): One active vent erupts violently. All creatures within 2 squares make a Hard Agility test (TN 16). On failure, 14 fire damage; on success, 7 fire damage. The vent is inactive for the rest of the encounter.</p>
<p><strong>Choking Steam</strong> (2 Malice): All heroes in the encounter area are <strong>weakened</strong> (\u22122 to all power rolls) until the start of the Director\u2019s next turn. Heroes adjacent to a steam vent are weakened until the end of their next turn (save ends TN 12) instead.</p>
<p><strong>Rot Surge</strong> (5 Malice; Phase 2 only): All creatures in the encounter area take 5 necrotic damage. Every active steam vent emits Rot-ichor; any hero who starts their next turn adjacent to a vent takes an additional 3 necrotic damage.</p>
</div>

<h3>Phase 1 (72\u201337 Stamina)</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The creature emerges, and the ground beneath it trembles. Steam rises in a choking column. The air itself becomes hostile\u2014the heat warps vision, makes breathing difficult. The Warden\u2019s corrupted form shifts and flows. Black veins run through its stone body, spreading and retracting like a heartbeat that is no longer its own.</p>
<p><em>\u201CBurn,\u201D</em> it whispers, and flame erupts from the nearest vent. <em>\u201CEverything must burn.\u201D</em> But beneath the words, you hear something else: anguish. A consciousness still present enough to despair at what it has become.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">\uD83D\uDCDD Running Phase 1</h4>
<p>The encounter is a <strong>fire and positioning puzzle</strong>. The Jar\u00F0v\u00E6ttr uses the vents for mobility and concealment. Heroes must either hunt it through the terrain or burn through its high fire resistance and damage reduction. The <em>Scorching Grasp</em> forces target management (only one Burning target at a time; switching targets ends the previous condition). This phase should feel like fighting a primal force\u2014dangerous, but still comprehensible.</p>
</div>

<h3>Phase 2 (\u226436 Stamina)</h3>

<p>When the Jar\u00F0v\u00E6ttr drops below 36 Stamina, read:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>A sound rises from the creature\u2014not a roar, but something almost like a name. An old name, in a language that predates the kingdoms. The smoke changes colour for just a moment: clear and warm, the way steam should be. The gardens remember what they once were.</p>
<p>Then the black floods back.</p>
<p>The Rot surges through the creature\u2019s form, and Rot-Echoes begin to manifest around it\u2014shapes of shadow and corrupted water, spawning from the poisoned vents. The Warden is no longer fighting. It is being fought <em>through</em>. Its body is becoming a gateway.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">\uD83D\uDCDD Running Phase 2</h4>
<p>Phase 2 is <strong>horror meeting sacrifice</strong>. The Warden fights harder (Heaving Slam unlocks, phase-shifted movement), but it is no longer the primary threat. The spawning Rot-Echoes are\u2014they multiply each round. The encounter shifts from \u201Cdefeat the creature\u201D to \u201Csave the creature\u201D (for those attempting mercy) or \u201Cend its suffering before it becomes a vector for the Rot entirely.\u201D</p>
<p><strong>Director\u2019s Malice Track:</strong> The Director starts with 2 Malice per round (standard).</p>
<p><strong>Key Decisions for the GM:</strong></p>
<ul>
<li><strong>Encouraging Recognition:</strong> If no hero has made the Nature or Lore test yet, and they\u2019re not showing signs of understanding the Rot corruption, drop a hint in combat. Perhaps Kaelen\u2019s ember-mark pulses when the creature howls. Perhaps Lew\u2019s eye reacts to the black seepage. The mercy option should be discoverable, not hidden\u2014but also not obvious.</li>
<li><strong>Mercy Tracking:</strong> If heroes are attempting <em>Unwilling Vessel</em> rolls, keep a visible tally of Mercy Counter (0/3, 1/3, etc.). This gives them feedback that their approach is working without betraying the mechanics.</li>
<li><strong>Pacing Phase 2:</strong> Don\u2019t let Phase 2 drag. Rot-Echoes multiply quickly. After 2\u20133 rounds of Phase 2, the encounter should feel urgent\u2014either finish the killing blow, or commit fully to the mercy path.</li>
<li><strong>Ending Mercy:</strong> When the third <em>Unwilling Vessel</em> T3 success occurs, don\u2019t play it as anti-climactic. The Rot corruption visibly tears itself free\u2014describe black ichor fountaining upward, the Warden\u2019s form stabilizing and solidifying, its eyes clearing for just a moment. It collapses, exhausted, no longer hosting the parasite. The Rot dissipates like smoke. The encounter ends.</li>
</ul>
</div>

<hr>

<h2>The Mercy Option</h2>

<p>If the party recognises the Jar\u00F0v\u00E6ttr as a corrupted spirit (a <strong>Reason test TN 14</strong> during the first round of combat, or automatically if Kaelen succeeds on a <strong>Nature test TN 12</strong> at any point), they can pursue an alternative to killing the creature.</p>

<p>The <em>Unwilling Vessel</em> feature allows heroes to attempt to reach the spirit beneath the Rot. Each successful T3 roll (17+) advances a Mercy Counter. When the counter reaches 3, the Rot corruption tears itself free of the spirit\u2014a visible, cathartic moment\u2014and the Jar\u00F0v\u00E6ttr collapses, inert but alive and cleansed.</p>

<h3>Telegraphing Mercy (Without Forcing It)</h3>

<ul>
<li><p>After the first round of combat, if no hero has attempted <em>Unwilling Vessel</em>, have an islander (perhaps <strong>Sigrid</strong>, who followed the party out of desperation) shout from the safety of the terraces: <em>\u201CDon\u2019t kill it! Please! The Warden\u2014it didn\u2019t choose this! It\u2019s trapped!\u201D</em> This gives narrative permission to try mercy without making it obligatory.</p></li>
<li><p>If Kaelen recognised the Rot, she might say quietly during the fight: <em>\u201CThis isn\u2019t what it is. This is what was done to it. There might be another way.\u201D</em> This is a character-driven suggestion, not a mechanical push.</p></li>
<li><p>Each successful <em>Unwilling Vessel</em> attempt should be described narratively. Describe a moment of clarity in the creature\u2019s eyes. A flash of the garden as it once was. A memory of growth instead of decay. These descriptions reinforce that mercy is possible.</p></li>
</ul>

<h3>Combat During Mercy Attempt</h3>

<p>The Jar\u00F0v\u00E6ttr does not get a free pass. Even while the party is attempting mercy, the creature still acts\u2014it still uses Malice abilities, spawns Rot-Echoes in Phase 2, and threatens the party. Pursuing mercy is <em>harder</em>, not easier, because heroes are spending Main Actions on <em>Unwilling Vessel</em> instead of attacking.</p>

<p>This creates genuine tension: Do you damage the creature further, or risk the long mercy path while it continues to hurt you?</p>

<hr>

<h2>Rewards and Consequences</h2>

<div style="background:#2a1a1a; color:#e0c0c0; padding:10px 14px; margin:10px 0; border-radius:4px; border-left:4px solid #aa4444;">
<h4 style="margin-top:0; color:#ff6666;">\u2694\uFE0F Kill Path</h4>
<ul>
<li><strong>1 Victory</strong> (for defeating a Level 4 Boss).</li>
<li>Supplies: The islanders provide food, rope, and materials for the descent into the caves (standard amount).</li>
<li><strong>Word Economy:</strong> \u22121 reputation with Vanir communities. The islanders mourn the Warden. Even though it was corrupted, they grieve its loss. They knew it for generations. A simple \u201Cit was infected\u201D does not ease that grief.</li>
</ul>
</div>

<div style="background:#1a2a1a; color:#c0e0c0; padding:10px 14px; margin:10px 0; border-radius:4px; border-left:4px solid #44aa44;">
<h4 style="margin-top:0; color:#44ff44;">\uD83C\uDF3F Mercy Path</h4>
<ul>
<li><strong>2 Victories</strong> (for saving a corrupted spirit rather than destroying it).</li>
<li>Supplies: <strong>Double</strong> the standard amount. The islanders are profoundly grateful\u2014this was not just a victory, but a redemption.</li>
<li><strong>Word Economy:</strong> +1 reputation with Vanir communities. The islanders mark the party as friends of the Singing Islands. Stories of the deed will travel with them northward.</li>
<li><strong>Narrative Consequence:</strong> The Jar\u00F0v\u00E6ttr does not join the party. It collapses into a deep, healing rest within the largest vent. But before it closes itself away, it offers a gift\u2014a fragment of its own essence, imprinted with knowledge of the Singing Islands and the waters beneath them.</li>
<li><strong>Reward:</strong> @UUID[Item.3oc5b0bAOIjgSk2A]{Jar\u00F0v\u00E6ttr\u2019s Gift} \u2014 Any hero who touches the fallen creature gains an edge on Intuition or Reason tests related to navigation, ancient places, or the deep paths for the rest of the journey northward.</li>
</ul>
</div>

<h3>Both Paths</h3>

<p>The party leaves the Singing Islands knowing that the Rot is not just a northern problem. It has reached this far, into places as old as time. The gardens are not saved\u2014the Warden\u2019s corruption has poisoned the vents beyond simple healing. But there is hope: if a corrupted spirit can be cleansed, perhaps the Rot has limits. Perhaps it can be fought, not just endured.</p>

<p><strong>Sigrid</strong>\u2014or another islander\u2014gives the party a final gift: knowledge of the Echoing Caves\u2019 exit point. <em>\u201CThe caves go northeast, under the world. The old maps say they emerge near Rindgate, on the far side of the inland passes. It\u2019s a long journey through dark water. But you will come out where your hunters won\u2019t expect.\u201D</em></p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Pacing Note</h4>
<p>This beat is a gift before the darkness of the caves. The party has had a moment of genuine choice\u2014to fight or to save. The encounter is difficult (a Hard solo boss), but it is not impossible. The terrain is complex but navigable. Most importantly, it is <em>warm</em>.</p>
<p>Let the party take their time in the Vent-Gardens. Describe the heat, the residual memory of growing things, the sound of water that is not quite dead. If they choose mercy, celebrate that choice. If they choose to kill, do not punish them\u2014but let the islanders\u2019 grief hang in the air.</p>
<p>Either way, they have glimpsed something of Yggdrasil\u2019s ancient past. That knowledge will matter in the darkness ahead.</p>
</div>

<hr>

<h2>Part 4: The Decision to Descend</h2>

<p>By the end of this beat, the party has discovered the flooded cave passage. It is passable, but it requires commitment: a 3\u20134 day journey through water, dependent on air pockets and the maintenance of Light sources and Heat.</p>

<p>The question before them is simple: <em>Do they go down into the dark, or do they continue overland and risk the open roads where Grafvitnir\u2019s network is hunting them?</em></p>

<p>For maximum dramatic tension:</p>

<ul>
<li><p>Have them camp at one of the air pockets and discuss options.</p></li>
<li><p>One party member might argue for the caves (it\u2019s safer, faster if it works).</p></li>
<li><p>Another might argue for caution (unknown passage, risk of drowning, what if the caves lead nowhere?).</p></li>
<li><p>Kaelen might say: <em>\u201CThe old roads are still roads. Someone kept them passable. We should trust that.\u201D</em></p></li>
</ul>

<p>After they decide (and they will decide to go down), <strong>Gragnir\u2019s voice might echo in their memory</strong>, or Kaelen might recite a fragment of the old Keeper liturgy:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><em>\u201CWhere the roots remember the sun, the way is open to those who remember the roots.\u201D</em></p>
</div>

<p>The party descends into the darkness.</p>

<hr>

<h2>NPCs: Locals on the Coast</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">\uD83D\uDC64 Lysandre the Fishwife</h4>
<p>A Vanir elder who remembers the Singing Islands before Fimbulwinter. She can describe the Echoing Caves as <em>\u201Cthe old road, the deep road, the way the First Keepers walked before there were roads above.\u201D</em> She won\u2019t go down herself, but she can offer supplies and stories. She might exact a small price: a promise to remember her if the party survives the north.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">\uD83D\uDC64 Riku the Explorer</h4>
<p>A younger person obsessed with old maps and routes. He has a fragment of a map showing the underwater passage and the direction it leads (northeast). He wants to go with the party, but he\u2019s a liability in combat. The party can leave him behind or bring him (which costs them time and Heat).</p>
<p>If the party takes Riku, he becomes a minor NPC who might provide useful information later, but he is also <strong>Grafvitnir Pressure waiting to happen</strong>\u2014if captured, he knows everything about the underwater route and can betray them.</p>
</div>

<hr>

<h2>Grafvitnir Pressure: First Intervention</h2>

<p>If the d6 roll in Part 1 indicated major intervention (roll of 6), then a Pale Maw operative is waiting in Eld\u00F8y or the Singing Islands.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">\u2694\uFE0F Combat: The Pale Maw Operative\u2019s Watch</h4>
<p><strong>Difficulty:</strong> Easy (Level 3 PCs) &nbsp;|&nbsp; <strong>Party ES:</strong> 40</p>
<p><strong>Enemies:</strong> 1\u20132 @UUID[Actor.oB43PXxhrMlGnq7G]{Pale Maw Operative} (Level 3 Standard, ES 8 each)</p>
<p><strong>Terrain:</strong> Settlement or cave entrance; multiple escape routes available.</p>
<p><strong>Special Constraints:</strong> The party is in a settlement with nearby allies. Fighting risks collateral damage.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">\uD83D\uDCDD Negotiation Option</h4>
<p>The operative is a true believer, not a mercenary. They believe the party is heretics protecting a false Keeper. If the party can convince them that Kaelen is actually trying to end the world (a lie, but thematically rich), the operative might back down. <strong>Very Hard negotiation.</strong></p>
<p><strong>Motivations:</strong> Preventing heresy, ending false hopes.</p>
<p><strong>Pitfalls:</strong> Mentioning Kaelen as the Keeper (confirms their fears), defending the Ever-Embers (they believe those must be let to die).</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">\uD83D\uDCDD Evasion Option</h4>
<p>The party avoids the operative entirely. Stealth, disguise, or simply moving quickly through Eld\u00F8y without stopping. A <strong>Presence test</strong> to notice the operative following them; if successful, the party can shake them in the caves (the operative will not follow into the water).</p>
</div>

<hr>

<h2>Ending the Beat</h2>

<p>The beat ends with the party committed to the flooded caves. They have supplies: torches/Light sources, rope, a general understanding of where the passage leads (northeast, into the interior, possibly toward Rindgate).</p>

<p>They have left Hrafnborg\u2019s reach and entered the old world\u2014the deep roads that remember times before kingdoms.</p>

<p>What they don\u2019t know yet: the caves are older than they think. They are not natural. And as they progress deeper, they will discover that they are not alone in the darkness.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">\uD83D\uDCDD Director Guidance</h4>
<ul>
<li><p><strong>Pacing:</strong> This beat can be one session if the party moves quickly, or two sessions if they linger in Eld\u00F8y or Splinter Fjords for investigation and supply management.</p></li>
<li><p><strong>Mood:</strong> Shift the tone here from <em>siege horror</em> to <em>exploration and discovery</em>. There is a momentary sense of escape. That will change in Beat 11.</p></li>
<li><p><strong>Kaelen\u2019s development:</strong> End this beat with Kaelen somewhat more resolute. She has recognized her own history in the ancient carvings. She knows the path is real. She does not yet know what waits at the end.</p></li>
<li><p><strong>Foreshadowing:</strong> The name <em>L\u00EDf</em> on the wall, the reference to surviving Ragnar\u00F6k\u2014these plant seeds for Kaelen\u2019s eventual role as a living anchor, a root that can survive the winter and grow again. Subtle, not explicit.</p></li>
<li><p><strong>Resource tracking:</strong> This is a good moment to remind the party about Heat expenditure. The coastal journey consumed Heat. The caves will consume more. They are burning reserves.</p></li>
</ul>
</div>

<hr>

<h2>Player Handout</h2>

<p>Deliver <em>\u201CThe Echoing Caves Entrance\u201D</em> \u2014 the party\u2019s first sight of the cave opening behind the rocky outcrop.</p>`;

// Write the updated JSON back
fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 10 content updated (' + beat10Page.text.content.length + ' characters)');
