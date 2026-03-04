const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal.journal.json');
const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

const pageId = 'Kc0Nso1CrdkfmE14';
const page = journal.pages.find(p => p._id === pageId);
if (!page) { console.error('Page not found: ' + pageId); process.exit(1); }

page.text.content = `<p><strong>Level:</strong> 4<br>
<strong>Duration:</strong> 1 session<br>
<strong>Location:</strong> Rindgate (eastern frontier settlement); Hornvatn and Urdvatn region<br>
<strong>Key NPCs:</strong> Jarl Vigmund Haldorsson, refugees, scouts<br>
<strong>Type:</strong> Settlement scene, social encounter, environmental reconnaissance, Grafvitnir Pressure check<br>
<strong>Tone:</strong> Isolation and desperation; the frontier mentality; the sense that they have crossed into a new region with new dangers</p>

<hr>

<h2>Overview</h2>

<p>The party emerges from the cave system near Rindgate (row 19, col 35)—a frontier settlement at the eastern foot of Midgard's Shield. They are exhausted from the caves, soaked, covered in bioluminescence residue, and bewildered by daylight.</p>

<p>Rindgate is not a warm welcome. The town is overcrowded with refugees from the interior, the Pale Maw has been raiding from the north, and trust is a luxury nobody can afford. The party arrives as mysterious strangers from the west, claiming to have come through an underground passage.</p>

<p>This beat is brief and atmospheric. It serves primarily to:</p>

<ol>
<li><strong>Orient the party geographically</strong> to a new region (the eastern interior).</li>
<li><strong>Establish the isolation and desperation</strong> of frontier settlements.</li>
<li><strong>Provide reconnaissance opportunities</strong> for what lies ahead (particularly Hornvatn and Urdvatn, which are wrong in ways the party should be suspicious of).</li>
<li><strong>Generate Grafvitnir Pressure</strong> as the network becomes aware of their location.</li>
</ol>

<p>By the end of Beat 13, the party has gathered supplies, gathered intelligence about the interior, and formed a clearer picture of what lies ahead: the Bone-Fields (east-southeast), the route north, and the gathering storm.</p>

<hr>

<h2>Part 1: The Emergence</h2>

<h3>Exit from the Caves</h3>

<p>The underwater passage eventually leads to a series of air-filled tunnels that ascend. The party climbs, gradually leaving the waterlogged darkness behind.</p>

<p>The final chamber opens onto a rocky promontory overlooking an inland valley. The caves exit here, high enough that the party has a view of the surrounding landscape.</p>

<p>It is afternoon, and the sun is low and pale. The sky is white with cloud and the promise of more snow. The wind is sharp, carrying the smell of stone and ice.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>You emerge from darkness into a world of white.</p>
<p>The day is fading. The sun, pale and distant, hangs low in the southern sky. The land around you is a stark white punctuated by exposed gray stone. A few scrubby plants—ancient, dwarfed by cold—cling to crevices in the rock.</p>
<p>Below you, a town sprawls on a hillside. Rindgate. The name comes to you from Lew's teachings months ago. The eastern frontier. The pass-town where the interior roads converge before they brave the mountains or turn north.</p>
<p>The walls are good stone and well-kept. The watchtowers are manned. But around the town, outside the walls, you see camps. Tents. Crude shelters. People huddled around small fires, their possessions piled beside them. Refugees. Hundreds of them, or more.</p>
<p>The mountain rises beyond the town—Midgard's Shield, the great barrier. To the east, the land descends into a valley, then rises again into distant foothills.</p>
<p>And there, in the middle distance: two lakes. One is frozen solid, smooth as glass. The other... the other has strange patches where the ice does not quite hold, where steam rises, where something beneath the surface seems to move.</p>
<p>Hornvatn and Urdvatn. And something is wrong with them.</p>
<p>Kaelen, beside you, makes a small sound—not quite a gasp, but close. She's looking at the frozen lake. Her hand is gripping your shoulder.</p>
<p><strong>"Feel that?"</strong> she whispers. <strong>"That pull? Like something down there is... aware. Watching."</strong></p>
</div>

<h3>The Descent into Town</h3>

<p>The party makes their way down from the caves toward Rindgate. This descent is not difficult (it's mostly a walk down the hillside), but it draws attention.</p>

<p>A watch-post on the eastern wall of Rindgate spots them approaching—six strangers, emerging from the wilderness, covered in cave-slime and looking half-drowned.</p>

<p>By the time the party reaches the town gates, they are met by armed men and women. Not hostile, not yet, but alert. Hands are on weapons. Eyes are measuring.</p>

<p><strong>The initial challenge:</strong> <em>"State your business. What brings you to Rindgate from the east? The mountains are closed to commerce. The caves to the west are not a trade route."</em></p>

<p>This is where the party's story matters. They can be honest (came through the caves from the coast), can lie (traders from the interior), or can be vague (refugees seeking shelter). Depending on their answer, they will face different levels of suspicion.</p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Grafvitnir Pressure Check (Roll 2)</h4>
<p>Make a secret d6 roll:</p>
<ul>
<li><strong>1 = nothing yet.</strong> The town is suspicious but not hostile. They'll let the party in for the night.</li>
<li><strong>2–4 = network interference.</strong> A Pale Maw informant is in town. Word is spreading that the party is here. Not immediate danger, but tension is rising.</li>
<li><strong>5–6 = major intervention.</strong> A @UUID[Actor.oB43PXxhrMlGnq7G]{Pale Maw Operative} is waiting in Rindgate, expecting the party to arrive from this direction. They will attempt to intercept or identify the party before the party can resupply and leave.</li>
</ul>
</div>

<hr>

<h2>Part 2: Rindgate Settlement</h2>

<h3>The Town Layout and Atmosphere</h3>

<p>Rindgate is a frontier town in slow collapse:</p>

<ul>
<li>The walls are well-built stone, but undermanned. There are maybe 20-30 guards total, stretched thin.</li>
<li>The interior is wooden buildings, packed tightly. There's no zoning—homes, trading posts, forges, all mixed together. The streets are narrow, made narrower by the press of people.</li>
<li>Outside the walls, hundreds of people have gathered seeking shelter or passage south. They are from interior settlements—Beinvaka, settlements in the Bone-Fields, people fleeing from the draugr organizing. They have nowhere else to go.</li>
<li>A central plaza serves as the market where trade happens. Food is expensive and sparse. A loaf of bread costs 2-3 times what it did in Hrafnborg. Fuel costs even more.</li>
</ul>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">NPC: Jarl Vigmund Haldorsson</h4>
<p><strong>Pragmatic frontier leader, 50s-60s.</strong></p>
<p>The town is commanded by Jarl <strong>Vigmund</strong> Haldorsson. Practical armor bearing the wear of real use, iron-grey beard, world-weary eyes. He has held Rindgate together not by being heroic but by being practical, day after day.</p>
<p><strong>Current Crisis:</strong> Refugees are overwhelming the town's resources. There isn't enough food. The Pale Maw has been raiding from the north. The mountain passes to the east are becoming unreliable.</p>
<p><strong>Role:</strong> Vigmund is stretched thin, holding a town against impossible odds. Strangers are a complication, not a welcome.</p>
</div>

<h3>Entering the Town</h3>

<p>When the party enters, the town does not roll out a red carpet. They are locked in with a garrison member and escorted to <strong>Vigmund</strong>'s headquarters—a stone building that serves as both command center and mead hall.</p>

<p><strong>Vigmund</strong>'s first questions are practical:</p>

<ol>
<li><em>Where are you from?</em></li>
<li><em>Where are you going?</em></li>
<li><em>Do you carry food? Do you carry weapons? Do you carry coin?</em></li>
<li><em>Are you diseased? Are you cursed? Are you draugr-touched?</em></li>
</ol>

<p>The last question is asked seriously. People in the far north have learned that sometimes the dead move like the living, speak like the living. They take precautions.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 GM Notes: Reading Vigmund</h4>
<p>A Presence test (moderate) reveals <strong>Vigmund</strong>'s genuine concern: this is someone trying to hold a town together against impossible odds, and strangers are a complication. Do not play him as hostile—only as defensive and exhausted.</p>
</div>

<hr>

<h2>Part 3: Intelligence and Preparation</h2>

<h3>What the Party Can Learn</h3>

<p>If the party spends time in Rindgate (an hour or more, a night if they rest), they can gather intelligence:</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Local Intelligence</h4>
<p><strong>From the refugees:</strong></p>
<ul>
<li>The draugr are moving. Organized columns marching northeast.</li>
<li>Settlements in the Bone-Fields have been abandoned or overrun.</li>
<li>Something is directing the dead. It's not natural.</li>
<li>A few refugees mention seeing "markers" placed in the Bone-Fields—piles of stone, carved symbols—that seem to guide the draugr.</li>
</ul>
<p><strong>From the garrison:</strong></p>
<ul>
<li>The Pale Maw has been raiding from the north, from Beinvaka direction.</li>
<li>The lakes (Hornvatn and Urdvatn) are both wrong. Hornvatn is solid ice but something moves beneath. Urdvatn's ice is unreliable—thin patches where steam rises.</li>
<li>The town tries not to go near either lake. There's no gain. It's just waste.</li>
<li>The route north from Rindgate goes through the Bone-Fields, then toward the interior highlands. It's cold, haunted, and increasingly dangerous.</li>
</ul>
<p><strong>From Vigmund (if negotiation is successful):</strong></p>
<ul>
<li>The Pale Maw operatives who have been raiding are different from the ones reported from the south. These are true believers, not mercenaries.</li>
<li>Word is spreading that a Keeper and a group of companions are heading north. The Pale Maw wants to intercept them.</li>
<li><strong>Vigmund</strong> has heard rumors (from scouts, refugees) that the dead are being gathered for a purpose. They're not just spreading. They're being <em>collected</em>.</li>
</ul>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">🐦 Dreyfus Thread: The Raven on the Wall</h4>
<p>Traders arriving from the south mention a large, strange raven that has been circling Rindgate's walls for the past few days. It never lands, never feeds, and never calls — it simply watches. The garrison has tried to shoot it down twice; both arrows passed clean through. If the party asks further, one refugee swears they saw the bird perch on a rooftop and its shadow looked wrong — too large, and shaped like a dog.</p>
<p><em>Director note: This is pure thread-maintenance. Dreyfus (in raven form) is tracking the party's progress but will not intervene until Beat 24. No mechanical consequences — just a reminder that something is watching.</em></p>
</div>

<h3>Grafvitnir Pressure Resolution</h3>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Pressure Outcomes</h4>
<p><strong>If the roll was 1 (nothing):</strong> No immediate danger. The party can rest, resupply, and prepare.</p>
<p><strong>If the roll was 2–4 (interference):</strong> A Pale Maw informant is in town. They may approach the party directly (a disguised operative asking questions), or they may report back to their superiors that the party is here. The party can discover this with a good Perception test (spotting someone watching them, overhearing a conversation). If discovered, the operative will deny everything, but word will spread that the party is here. <strong>Vigmund</strong> may suggest they leave quickly.</p>
<p><strong>If the roll was 5–6 (major intervention):</strong> A Pale Maw strike team (3-4 @UUID[Actor.oB43PXxhrMlGnq7G]{Pale Maw Operative}s + a leader) is in town waiting for the party. They will attempt to identify the party and either capture or kill them. This becomes a combat encounter or a tense social scene, depending on how the party handles it.</p>
<p><strong>Combat Option:</strong> The Pale Maw try to grab the party quietly in their lodgings or on the street. The party must fight their way out and leave town.</p>
<p><strong>Social Option:</strong> The party notices the operatives before being directly confronted. They can negotiate, disguise themselves, or slip out of town using back routes.</p>
</div>

<hr>

<h2>Part 4: The Lakes and Local Concerns</h2>

<h3>Hornvatn and Urdvatn</h3>

<p><strong>Kaelen</strong> felt something when she saw the lakes. The party should investigate this, or at least ask about them.</p>

<p><strong>Hornvatn (the frozen lake):</strong> This lake is solid ice. It has been solid for months, unbroken. Except for one detail: if the party looks closely, or if they scout near it, they will see that there are depressions in the ice—regular, spaced intervals, as if something has been walking across the lake, over and over, in the exact same path. There are no footprints (the ice is too hard, the wind has scoured them), just the wear marks of repeated passage. Something is crossing Hornvatn. Regularly. With purpose.</p>

<p><strong>Urdvatn (the uncertain lake):</strong> This lake has patches of thin ice, places where steam rises. It's not safe to cross. But if scouts or the party investigate, they will see movement beneath the water—not the random motion of fish, but the deliberate movements of <em>something large</em>. Something that responds to stimulus (if the party breaks through the ice, they can hear it moving, responding to the sound).</p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ The Lakes Are Wrong</h4>
<p>These lakes are wrong. They are both placeholders for something, signposts that mark the eastern interior as different from the western and southern lands.</p>
</div>

<h3>Kaelen's Recognition</h3>

<p>When <strong>Kaelen</strong> learns about the lakes (from refugees, from <strong>Vigmund</strong>, from her own sensing), she becomes troubled:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>"These lakes aren't normal. I can feel the Rot in them. The boundary between the worlds... it's thin here. Very thin. Whatever is in the water, whatever is walking on the ice—it's not entirely in our world. It's not entirely out of it."</p>
<p>She looks at the party seriously:</p>
<p>"We don't go near the lakes. We go around them, carefully, and we don't look back. If what's in them realizes we've seen it, it will follow. I'm sure of that."</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Kaelen's Growing Connection</h4>
<p>This is a moment of character revelation. <strong>Kaelen</strong> is learning to trust her connection to the Wyrd, to the world-tree's systems. She is warning the party that there are powers at work that are older and stranger than the merely undead.</p>
</div>

<h3>Skirting the Lakes (Short Montage)</h3>

<p><strong>Kaelen</strong> insists: they go <em>around</em> the lakes, not between them. But "around" is not safe either. The terrain between Rindgate and the northeastern road forces the party close to both shorelines. The ice groans. The wind carries sounds that aren't wind.</p>

<p><strong>Difficulty:</strong> Hard (adjusted for 4 heroes)<br>
<strong>Rounds:</strong> 1 (this is a short, tense passage — a few hours, not days)<br>
<strong>Success Limit:</strong> 3<br>
<strong>Failure Limit:</strong> 1</p>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Challenge</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Characteristic</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Description</th>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Move quietly across frozen ground</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Agility</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">The ice near the shore amplifies sound. Every footstep rings. Move carefully, distribute weight, avoid cracking the surface.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Navigate the safest path</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Reason or Intuition</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">The direct route passes too close to Hornvatn's wear-marks. Read the terrain. Find the path that keeps maximum distance from both lakes.</td>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Endure the cold and the pull</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Might or Presence</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">The air near the lakes is unnaturally cold — colder than the surrounding landscape. And there's a pull, a low pressure in the chest, as if the lakes want the party to look. Resist.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Keep Kaelen focused</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Presence</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Kaelen's connection to the Wyrd makes her sensitive to the wrongness here. She stumbles, stops, stares at the water. She needs someone to ground her, to keep her moving.</td>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;"><strong>Watch for movement</strong></td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Intuition</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Something is moving on Hornvatn. Regular, rhythmic, patient. Spot the Lakewalkers early and adjust course before they notice the party.</td>
</tr>
</table>

<p><strong>Outcomes:</strong></p>
<ul>
<li><strong>Total Success (3 successes, 0 failures):</strong> The party passes both lakes without incident. The Lakewalkers continue their patrol. Skip the combat encounter below — the party earns a clean passage and a sense of dread. (The Urdvatn foreshadowing still occurs.)</li>
<li><strong>Success (3 successes before failure limit):</strong> The party gets past Hornvatn but draws the attention of the Lakewalkers. Proceed to the combat encounter. The party is not surprised.</li>
<li><strong>Failure (failure limit reached):</strong> The party stumbles too close to Hornvatn's shore. The Lakewalkers deviate from their patrol and intercept. Proceed to the combat encounter. The Lakewalkers gain a free movement toward the party at the start of combat (they are already close).</li>
</ul>

<h3>Combat: Hornvatn Lakewalkers</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 GM Notes: Running This Encounter</h4>
<p>This encounter is triggered by the montage result (unless Total Success was achieved). The Lakewalkers are ancient draugr frozen into a patrol loop — they have walked the same path across Hornvatn for centuries, wearing grooves into the ice. They are not servants of Grafvitnir. They predate his work. They are something older, something tied to the thin boundary between Helheim and Midgard in this region.</p>
<p>They do not speak. They do not react to threats, pain, or attempts at communication. They simply <em>walk</em> — and destroy anything between them and their path. This should be unsettling. They are not angry. They are not hunting. They are <em>executing a route</em>, and the party is in the way.</p>
</div>

<p><strong>Enemies:</strong></p>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Enemy</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Level</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Role</th>
<th style="padding:8px 12px; text-align:left; border:1px solid #d0c8b8;">Count</th>
</tr>
<tr>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">@UUID[Actor.aow6GGeUHfWB2tJE]{Lakewalker Draugr}</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">3</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">Standard</td>
<td style="padding:8px 12px; border:1px solid #d0c8b8;">3</td>
</tr>
</table>

<p><strong>Difficulty:</strong> Moderate | <strong>EV Target:</strong> ~24 | <strong>Party Level:</strong> 4</p>

<p><strong>Terrain:</strong></p>
<ul>
<li>Frozen lakeshore (slippery — difficult terrain within 2 squares of the waterline)</li>
<li>Ice ridges (half cover, 1 square high)</li>
<li>Hornvatn's surface (solid ice, but crossing it puts a character in the Lakewalkers' patrol path — any character on the lake at the end of a round takes 4 cold damage from the ice's supernatural chill)</li>
<li>Snowdrifts (concealment, 3 squares deep in places)</li>
</ul>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Lakewalker Draugr — Tactical Summary</h4>
<p>Use the @UUID[Actor.aow6GGeUHfWB2tJE]{Lakewalker Draugr} stat block for full details. Key tactical notes:</p>
<ul>
<li><em>Relentless Patrol:</em> If not engaged in melee at the start of its turn, it moves toward its patrol path (the nearest point on Hornvatn's ice). It attacks anything in its way but does not pursue creatures that step aside.</li>
<li><em>Ice-Bound:</em> Resistant to cold damage. Vulnerable to fire damage (takes double damage from fire).</li>
<li><em>Unresponsive:</em> Immune to fear, charm, and any effect that requires communication or comprehension. Cannot be negotiated with, intimidated, or reasoned with.</li>
<li><em>Frozen Shell:</em> When reduced to 0 Stamina, the Lakewalker freezes in place and becomes a statue of ice. It does not collapse. It simply stops, mid-stride, and remains standing. (This is cosmetic but deeply unsettling.)</li>
</ul>
<p><strong>Tactical Notes:</strong> These are not clever combatants. They march. They attack what's in front of them. They don't flank, don't retreat, don't coordinate. Their danger is their <em>inevitability</em> — they will keep coming until destroyed. Use their straight-line movement to force the party to reposition.</p>
</div>

<p><strong>Special Rules:</strong></p>
<ul>
<li>If the montage resulted in <em>Failure</em>, each Lakewalker begins 2 squares closer to the party than normal starting positions.</li>
<li>If a Lakewalker reaches Hornvatn's surface during combat, it resumes its patrol loop and ignores the party unless they re-enter its path.</li>
</ul>

<p><strong>Objective:</strong> Destroy or evade the Lakewalkers. The party does not need to kill them — retreating out of their patrol zone also works.</p>

<h3>Aftermath: Urdvatn Stirs</h3>

<p>Whether the party fought the Lakewalkers or passed unnoticed, this moment occurs as they move past Urdvatn:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>You are past the worst of it. Hornvatn is behind you — the frozen figures either destroyed or still marching their endless route. The wind is quieter here.</p>
<p>Then Kaelen stops.</p>
<p>She is staring at Urdvatn. The uncertain lake. Its surface is a patchwork of thin ice and dark water, steam rising from cracks where the heat below meets the cold above.</p>
<p>Something moves beneath the surface. Not fish. Not current. Something <em>large</em>, deliberate, and aware. It shifts under the ice like a whale rolling in its sleep — a shadow the size of a longship, darker than the water around it.</p>
<p>It passes directly beneath a patch of thin ice. The ice bows upward. Does not break. Bows, and settles.</p>
<p>Then it is gone.</p>
<p>Kaelen says nothing. She turns away from the lake and walks faster.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 GM Notes: The Urdvatn Entity</h4>
<p>Do not explain this. Do not give it a name. Do not have Kaelen explain what she sensed. This is foreshadowing — something ancient lives in Urdvatn, something that is aware of the party but chose not to act. Whether this entity becomes relevant later in the campaign is up to you. For now, it is a mystery and a source of dread.</p>
<p>If the party investigates (breaks ice, casts abilities, tries to communicate), they get nothing conclusive — ripples, cold, the sense of being watched, and then silence. The entity does not engage. It simply <em>knows they are there</em>.</p>
</div>

<hr>

<h2>Part 5: Supplies and Preparation</h2>

<h3>A Familiar Caravan</h3>

<p>When the party enters Rindgate's market area, they find a surprise: <strong>Söldís</strong> Glóðfari's caravan, camped at the edge of the town square. The wagons are arranged in their usual careful circle, but this time they've taken on a semi-permanent quality — canvas awnings extended, trade goods displayed, a small repair station set up beneath the central wagon.</p>

<p>The caravan cannot follow the party north. The children — Einar and Svanhildr — cannot survive the road ahead. But <strong>Söldís</strong> has positioned herself at the last safe point, helping Rindgate's people with trade and supplies.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>You see her before she sees you — or at least, that's what you think. <strong>Söldís</strong> is standing at a makeshift trade counter, negotiating with a Rindgate merchant over a bolt of heavy wool. She looks exactly the same as the last time you saw her: copper-brown braid, patchwork coat, the sealed clay pot glowing faintly at her throat.</p>
<p>Then she turns, and you realize she knew you were there the whole time.</p>
<p>"I was wondering when you'd catch up," she says. The smile is genuine. "You look worse than last time. That's progress — it means you haven't stopped moving."</p>
</div>

<p><strong>The Caravan's Rindgate Role:</strong></p>

<p><strong>Söldís</strong> has been trading fairly with <strong>Vigmund</strong>'s people — bringing in goods from the south in exchange for what can be spared. Her presence has stabilized Rindgate's supply situation slightly. <strong>Vigmund</strong> trusts her, which is rare for him.</p>

<h3>Individual Caravan Moments</h3>

<p><strong>Ketil</strong> (the blacksmith) has set up a repair forge near the caravan. He's working steadily on tools and weapons for the town. If the party has damaged equipment, he can repair or improve one weapon or piece of armour: "I don't take coin. Bring me something to mend. That's all I know how to do anymore." His hands are sure, his voice isn't. His wife Ástríðr watches from the wagon, one hand on Svanhildr's shoulder.</p>

<p><strong>Hallur</strong> (the former Chainwarden) approaches the party quietly, away from the others. He has intelligence about the road north — Chainwarden patrol routes, checkpoint schedules, which passes are watched and which are abandoned. "I know the routes because I used to run them," he says. "Don't ask me more than that. But if you're going through the Bone-Fields, go at first light. The patrols change shifts at dawn and there's a forty-minute gap." This grants +1 edge on one navigation or stealth test in Beat 14.</p>

<p><strong>Dagur</strong> (the merchant) has connections with the broader trade network. If the party wants to know about supply conditions further north — what settlements are still standing, what roads are passable, what the Pale Maw's supply lines look like — he provides information grudgingly, as if doing the party a personal favour. "I don't do this for free, normally," he says. "But Söldís asked, so here we are."</p>

<p><strong>Óttar</strong> is restless and visibly jealous of the party's journey. He has tried twice to follow the party's rumoured route north without permission. The second time, <strong>Söldís</strong> stopped him — and the caravan saw her genuinely angry for the first time: <em>"You do not follow people on roads you cannot read."</em> If the party talks to him, he asks pointed questions about the north. He's not stupid. He's just young enough to think courage and curiosity are the same thing.</p>

<p><strong>Svanhildr</strong> (6, the "lucky" child) has not been sick once since joining the caravan. The other caravan members have started treating her like a blessing. When she sits by the party's fire, the warmth seems a little more reliable, the shadows a little more distant. This is probably coincidence. Probably.</p>

<h3>What Söldís Asks</h3>

<p>Before the party leaves, she repeats the question from their first meeting: "If you find a flame that shouldn't still be burning — don't put it out."</p>

<p>This time, if the party has context to ask better questions, she offers a fragment more: "I've been carrying a fire for longer than I can explain. I know what it means when a flame shouldn't exist but does. Don't make the mistake of thinking because something is impossible, it deserves to die."</p>

<p>She will not say more than this. She touches her sealed pot. The glow inside it seems to pulse, once, in time with something far away.</p>

<h3>Mechanical Benefits</h3>

<ul>
<li>Ketil repairs or improves one piece of equipment (free)</li>
<li>Hallur's intelligence: +1 edge on one navigation or stealth test in Beat 14</li>
<li>Dagur's trade network: +1 edge on one knowledge test about northern conditions</li>
<li><strong>Söldís</strong> provides supplies at fair prices (bypassing Rindgate's inflated rates for up to 3 days of rations)</li>
</ul>

<h3>What Rindgate Offers</h3>

<p>The town has supplies, but they are expensive and limited:</p>

<ul>
<li>Food is available, but prices are high. A week's rations (for 4 people) costs roughly 3x normal price.</li>
<li>Fuel is even more expensive. A day's worth of fuel (for heat and cooking) for 4 people costs 2-3 coin.</li>
<li>Rope, tools, and basic gear are available at normal prices.</li>
<li>Weapons and armor are available, but limited selection and high prices.</li>
<li>Healing supplies are scarce. A character can purchase one potion of healing or equivalent (costs 1-2 coin). More than that, and <strong>Vigmund</strong> will refuse—the town needs to keep its own supplies.</li>
</ul>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Heat and Word Costs</h4>
<p>Resting in Rindgate costs normal Heat (the town has fire, shelter, and warmth). But Word is strained. <strong>Vigmund</strong> will help the party, but every favor costs Word—asking for discounted supplies, asking for information, asking for protection. The party can spend Word to reduce Heat costs or to gain better information.</p>
</div>

<h3>Vigmund's Negotiation (Optional)</h3>

<p>If the party is friendly and <strong>Vigmund</strong> takes a liking to them, he might propose an offer. This is a <strong>Moderate Negotiation Encounter</strong>.</p>

<h4>Setup</h4>

<p><strong>Interest:</strong> 4 (Hopeful) — Vigmund is a pragmatic leader who respects the party's presence and capability. He is not hostile, but he is testing whether they have the fortitude to succeed.<br>
<strong>Patience:</strong> 4 — Vigmund has time to discuss, but he has a town to run. Too much dithering, and he will move on to other matters.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 GM Notes: Draw Steel Negotiation Mechanics</h4>
<p>Under Draw Steel rules, each argument is a power roll using Reason, Intuition, or Presence (with any applicable interpersonal skill). Motivations require a <em>medium</em> difficulty roll; arguments with no motivation or pitfall require a <em>difficult</em> roll.</p>
<p><strong>Motivation appeal (medium difficulty):</strong></p>
<ul>
<li><strong>Tier 1 (11 or lower):</strong> Patience −1. No Interest change.</li>
<li><strong>Tier 2 (12–16):</strong> Interest +1, Patience −1.</li>
<li><strong>Tier 3 (17+):</strong> Interest +1, Patience unchanged.</li>
</ul>
<p><strong>No motivation or pitfall (difficult):</strong></p>
<ul>
<li><strong>Tier 1:</strong> Patience −1, Interest −1.</li>
<li><strong>Tier 2:</strong> Patience −1 only.</li>
<li><strong>Tier 3:</strong> Interest +1, Patience −1. (Natural 19–20: Patience unchanged.)</li>
</ul>
<p><strong>Pitfall invoked:</strong> Automatic failure. Interest −1, Patience −1.</p>
<p>With Patience 4 and Interest 4, Vigmund is already favorably inclined. The negotiation is less about convincing him and more about cementing an oath. The party only needs to reach Interest 5 to secure his full support (maps, supplies, and the oath). A single successful Tier 2 motivation appeal does it. Pitfalls are rare here—Vigmund is not hostile. The main risk is the party saying something that makes him doubt their sincerity.</p>
<p>Each motivation can only be successfully invoked <em>once</em>.</p>
</div>

<h4>Motivations (medium difficulty roll)</h4>

<ul>
<li><strong>Shared responsibility for the future:</strong> <strong>Vigmund</strong> has spent his whole life holding Rindgate together, protecting his people. Frame the party's quest as a continuation of that same work: "You're trying to save your town. We're trying to save the world. It's the same commitment, just at different scales. If we succeed, your people survive. If we fail, you lose everything anyway." <strong>Vigmund</strong> respects people who understand the weight of duty. This appeals to his sense of kinship with the party.</li>
<li><strong>The power of witness and word:</strong> Appeal to his desire to be remembered, to matter. "You're holding a town together against the end of the world. That's a story worth telling. We will tell it. We will carry word of Jarl Vigmund—how he held his ground, how he made hard choices, how he believed there was a future." <strong>Vigmund</strong> is isolated and exhausted. The promise that his work will be witnessed and remembered is powerful.</li>
<li><strong>Practical self-interest:</strong> The simplest appeal. "If we reach the Emberwell and the Fimbulwinter breaks, Rindgate becomes a refuge, a center of resettlement. You become a leader of the renewal, not just a keeper of a dying town. Your authority grows. Your people survive better." <strong>Vigmund</strong> is pragmatic. This argument speaks directly to his long-term interests.</li>
</ul>

<h4>Pitfalls (automatic failure)</h4>

<ul>
<li><strong>False promises or bravado:</strong> "We will definitely win. The Fimbulwinter is as good as broken." <strong>Vigmund</strong> has lived through enough wars and crises to know when someone is lying to him. False confidence insults his intelligence. He closes off immediately.</li>
<li><strong>Dismissing the plight of Rindgate:</strong> "Your refugees are not our concern" or "Rindgate is too far south to matter." <strong>Vigmund</strong> will see this as callous and selfish. He respects people who care about their communities, not people who use others as stepping stones.</li>
<li><strong>Refusing or hesitating on the oath:</strong> If the party seems reluctant to swear to remember Rindgate and send word back, <strong>Vigmund</strong> will interpret this as disrespect. "You want my supplies and my support, but you won't commit to honoring what we've done here?" This breaks the negotiation.</li>
</ul>

<h4>Negotiation Flow</h4>

<p>This negotiation should feel less like a combat of words and more like a conversation between people who respect each other. <strong>Vigmund</strong> is testing whether the party is sincere and whether they truly understand what they're undertaking.</p>

<p><strong>Presence:</strong> Personal connection. Appeal to <strong>Vigmund</strong>'s humanity and his burden as a leader.<br>
<strong>Reason:</strong> Strategic arguments about survival, renewal, and the practical benefits of the party's success.<br>
<strong>Intuition:</strong> Reading <strong>Vigmund</strong>'s state of mind. He is tired and carries the weight of his people. Understanding his emotional state helps the party pitch their appeal effectively.</p>

<h4>Reading Vigmund's Responses</h4>

<ul>
<li><strong>Interest goes up:</strong> <strong>Vigmund</strong> nods slowly. He leans forward slightly. "You understand what you're saying. I can tell." His voice becomes warmer. "Go on."</li>
<li><strong>Interest stays flat (no-motivation argument):</strong> He frowns slightly. "That's a fair point, I suppose, but it doesn't change my immediate concerns." He glances toward the window, thinking of his town. "Try again."</li>
<li><strong>Interest drops (pitfall):</strong> His jaw hardens. "That's not what I expected to hear from you." He stands and walks to the window, turning his back to the party. "I'm reconsidering whether helping you is worth the risk to my people."</li>
<li><strong>Patience at 1:</strong> He checks the time. "I have other business. If you have something else to say, say it quickly. Otherwise, we're done here."</li>
</ul>

<h4>Outcome: Success</h4>

<p>If the party succeeds (reaching Interest 5 or making a convincing argument despite lower rolls), <strong>Vigmund</strong> agrees:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><strong>"I will give you maps of the route north. I will give you warnings about the Bone-Fields. I will give you fresh supplies — as much as I can spare without threatening the town. And you will swear two things to me."</strong></p>
<p><strong>"First: if you succeed, word will be sent back. I want to know if the Fimbulwinter can be beaten, or if we're all just buying time before the end."</strong></p>
<p>He pauses. His jaw works for a moment, as if the next words cost him something.</p>
<p><strong>"Second: I have three hundred refugees in this town. Families. Children. Old people who should have died warm in their beds. If you reach Hrafnborg — if Hrafnborg still stands — you will speak for us. You will tell the King, or whoever holds the walls, that Rindgate's people deserve shelter inside those walls. You will advocate for my refugees as if they were your own kin. You will not let them be turned away because some council decided that the walls are already full enough."</strong></p>
<p>He meets the party's eyes.</p>
<p><strong>"I know what I'm asking. Hrafnborg is under siege. Resources are thin. Every mouth you bring inside the walls is a mouth that eats what the defenders need. But my people cannot survive another winter here. Rindgate is dying. If you won't swear to fight for them at the council table, then I'll give you the maps and the warnings for free — but the supplies stay here. My people need them more than you do."</strong></p>
</div>

<p>This goes further than Rickety Frets's witness-oath. The party is not merely swearing to carry a message — they are swearing to <em>advocate</em> for a political cause. When they reach Hrafnborg (Act 3), they will need to spend political capital, argue at councils, and potentially alienate other factions to honor this oath.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Director Note: The Advocacy Oath's Cost</h4>
<p>Vigmund's second demand creates a genuine tension that pays off in Act 3:</p>
<ul>
<li>At Hrafnborg, resources are scarce. The city is under siege. Every refugee admitted means less food for defenders.</li>
<li>Other factions (the military council, local merchants, potential dwarven allies) may oppose admitting Rindgate's refugees.</li>
<li>The party must choose: honor the oath and spend their political influence on refugees, or break the oath and preserve their standing with Hrafnborg's power structure.</li>
</ul>
<p>If the party accepts and later advocates successfully, they gain significant Word (reputation as people who keep promises under pressure). If they accept and fail to advocate — or never try — they lose 1 Word permanently and <strong>Vigmund</strong>'s name becomes a weight rather than a credential.</p>
<p>The supplies <strong>Vigmund</strong> withholds if the party refuses the second oath are substantial: 5 days' rations for 4 people, cold-weather gear patches, and a sealed medicine kit. Refusing costs the party real resources heading into the Bone-Fields.</p>
</div>

<p>If they accept both oaths, they gain supplies and <strong>Vigmund</strong>'s full support, but they add another obligation to their growing list — and this one has teeth. The Wyrd will hold them accountable.</p>

<hr>

<h2>Part 6: The Departure</h2>

<h3>Leaving Rindgate</h3>

<p>The party rests, resupplies, gathers intelligence, and prepares for the next leg of the journey.</p>

<p><strong>Vigmund</strong> walks them to the gates (if friendly) or escorts them out (if they've caused trouble). Either way, there is a moment of final words:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>"The Bone-Fields are directly northeast of here. Hard country. The dead walk there freely. Go during daylight hours and keep moving. Don't camp in the Fields if you can help it. The Ivory Tower is on the eastern edge—if you're clever, you can use it as a shelter and a landmark."</p>
<p>(This is foreshadowing Beat 15. Vigmund is unaware the party will visit the tower, but he is giving practical advice.)</p>
<p>Then: "And whatever you're running from or running toward, I hope you find it. This town could use a sign that the world isn't doomed."</p>
</div>

<p>The party leaves Rindgate heading northeast toward the Bone-Fields.</p>

<hr>

<h2>Ending Beat 13</h2>

<p>The beat ends with the party:</p>

<ol>
<li><strong>Oriented geographically</strong> to the eastern interior.</li>
<li><strong>Supplied for the next leg</strong> of the journey (though Heat reserves are still limited).</li>
<li><strong>Aware of local dangers:</strong> the Hornvatn/Urdvatn wrongness, the draugr movements, the Pale Maw presence.</li>
<li><strong>Carrying another oath</strong> (if they accepted <strong>Vigmund</strong>'s request).</li>
<li><strong>Kaelen deepening her connection to the Wyrd</strong>, recognizing the Rot's presence in the land itself.</li>
</ol>

<p>The party is now in the eastern interior, moving toward the Bone-Fields and (eventually) the Ivory Tower. They are closing the distance to Surt's Forge and the Emberwell.</p>

<p>They are also moving closer to Grafvitnir's defenses.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Pacing and Atmosphere</h4>
<p>This beat can be quick (30 minutes to an hour of table time) if the party moves through it efficiently, or extended (full session) if they rest and investigate thoroughly. Shift the tone from "exploration and wonder" (caves, Rickety Frets) to "military tension and frontier hardship." Rindgate should feel like a town under siege, holding a line against overwhelming pressure.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Character and Campaign Notes</h4>
<ul>
<li><strong>Kaelen's growth:</strong> She is learning to sense the Wyrd directly, beyond what the texts taught her. This is preparation for her eventual role as a living anchor.</li>
<li><strong>Resource pressure:</strong> Heat is becoming a serious concern. The party is many days north of warm places. The Steam-Oasis (Beat 17) is still 3+ days away. Every Heat point matters now.</li>
<li><strong>Grafvitnir Pressure:</strong> This is a good moment to remind the party that they are being hunted. The network is following them. The Pale Maw is ahead of them, preparing defenses. Every settlement they pass through puts them at risk of being identified and intercepted.</li>
<li><strong>The lakes:</strong> These are creepy and unexplained. The party should feel that something is wrong but not be certain what. This is good. Uncertainty creates tension.</li>
<li><strong>The oath to Vigmund:</strong> This is optional, but it reinforces the theme that the party's actions matter, that their journey is being witnessed, and that they carry the hopes of people left behind.</li>
</ul>
</div>`;

fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 13 content updated (' + page.text.content.length + ' characters)');
