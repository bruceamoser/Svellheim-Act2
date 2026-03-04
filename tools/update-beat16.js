const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal-Part-2.journal.json');
const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

const pageId = 'S8x4rA1A54gM7dfp';
const page = journal.pages.find(p => p._id === pageId);
if (!page) { console.error('Page not found: ' + pageId); process.exit(1); }

page.text.content = `<p><strong>Level:</strong> 5<br>
<strong>Duration:</strong> 1 session<br>
<strong>Location:</strong> Beinvaka (row 15, col 25); Pale Maw stronghold in the interior<br>
<strong>Key NPCs:</strong> Pale Maw Inquisitor (fanatical leader), Pale Maw cultists, optional elder (less fanatical)<br>
<strong>Type:</strong> Hard Montage Test (evasion/deception) OR Moderate-Hard Negotiation OR combat encounter, chase scene<br>
<strong>Tone:</strong> Escalating tension; ideological enemies; the network is aware and coordinated; time pressure</p>

<hr>

<h2>Overview</h2>

<p>Beinvaka is no longer a neutral trading post. It has become a stronghold of the Pale Maw—the cult that believes the Fimbulwinter is correct, that the world <em>should</em> end, and that anyone trying to prevent it is committing heresy.</p>

<p>The party must pass through or around Beinvaka's territory. This is a challenging encounter because:</p>

<ol>
<li><strong>The Pale Maw here are true believers</strong>, not mercenaries or network operatives. They cannot be bribed or reasoned with through appeals to survival or profit.</li>
<li><strong>They know the party is coming.</strong> Dreyfus's intelligence has propagated. Grafvitnir's network has had time to position defenders.</li>
<li><strong>They want Kaelen specifically.</strong> She is the Keeper, the heretic, the one trying to prevent the "correct" ending.</li>
</ol>

<p>The beat presents the party with a choice: fight through, negotiate a passage, deceive the cultists, or go around (which costs time and Heat they can't afford).</p>

<p>By the end of this beat, the party is through Beinvaka's territory and heading north toward the Throat of World. They are exhausted, possibly injured, and keenly aware that Grafvitnir's pieces are in position.</p>

<hr>

<h2>Part 1: Approaching Beinvaka</h2>

<h3>The Settlement</h3>

<p>Beinvaka (row 15, col 25) is described in the Atlas as "a nomad gathering-point on the western Bone-Fields, where Firekeepers light signal cairns during the new moon. It's not a town in any permanent sense, but there are always people here."</p>

<p>Before Fimbulwinter, it was neutral ground—a place where trade happened, where different groups could meet without hostility.</p>

<p>Now, it is a <strong>Pale Maw enclave</strong>. The signal cairns have been repurposed as watchtowers. The gathering-point has become a fortified camp.</p>

<p>As the party approaches, they see:</p>

<ul>
<li><strong>Defensive structures:</strong> Stone walls (partial), watchtowers, a central fire-pit that burns with an inverted flame (the Pale Maw believe in fire-worship, but they are heretical—they burn backwards, inverted, as if trying to negate warmth instead of create it).</li>
<li><strong>Pale Maw cultists:</strong> Dozens of them, moving with purpose. They wear robes marked with symbols of entropy—spirals that collapse inward, stars with missing points, the signs of ending.</li>
<li><strong>Refugees:</strong> A few people are camped outside the walls—locals who are trapped, waiting for shelter. They look terrified. Some are being "converted" to the Pale Maw ideology. Others are simply trying to survive.</li>
<li><strong>Absence of normalcy:</strong> No markets, no friendly gathering. No music or laughter. This is a place of grim focus.</li>
</ul>

<h3>Detection and Approach</h3>

<p>The party will be spotted. There is no way to approach Beinvaka without being seen.</p>

<p>The question is: <em>What does the party do when they are spotted?</em></p>

<p>A <strong>Grafvitnir Pressure Check</strong> should have been made at the start of Beat 16. The roll determines the Pale Maw's readiness:</p>

<ul>
<li><strong>1 = nothing:</strong> Pale Maw presence, but they're not specifically ready for the party. The party has a chance to bluff or negotiate without immediate pressure.</li>
<li><strong>2–4 = interference:</strong> Pale Maw are alert. A Pale Maw Inquisitor is here, with orders to intercept the party. But the response is not coordinated yet—the party has a window to act.</li>
<li><strong>5–6 = major intervention:</strong> Full mobilization. Pale Maw forces are positioned to intercept. The party's presence is expected. This becomes a hard fight or a very difficult evasion.</li>
</ul>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Recommendation</h4>
<p>Roll a 4–6 here. By Beat 16, Grafvitnir's network should be ahead of the party, not scrambling to catch up.</p>
</div>

<hr>

<h2>Part 2: The Confrontation</h2>

<h3>Initial Encounter with the Pale Maw</h3>

<p>When the party is spotted, a delegation of Pale Maw come out to meet them. The delegation is led by <strong>Þráinn Ashward, Pale Maw Inquisitor</strong>.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Boss Encounter: Pale Maw Inquisitor</h4>
<ul>
<li>@UUID[Actor.OdxMlD7osKrRaOOG]{Pale Maw Inquisitor Thráinn} (Level 5 Boss)</li>
</ul>
<p><strong>Appearance:</strong> Tall, gaunt, with a visible scar across one eye (which they've made no effort to hide or heal). Robes of deep purple with silver thread depicting entropy symbols. Their manner is calm, certain, and completely uninterested in mercy.</p>
<p><strong>Key Abilities:</strong></p>
<ul>
<li><em>Zealot's Judgment</em> — Melee attack, marks target (next attack gains edge)</li>
<li><em>Voice of Entropy</em> — Area 30ft, psychic damage + frightened (2 Malice)</li>
<li><em>Despair Aura</em> — 20ft aura, allies +1 to Power Rolls, enemies test or −1 to next action</li>
<li><em>Absolute Conviction</em> — Immune to fear and charm, edge on Presence tests vs mental effects</li>
<li><em>Heresy-Sense</em> — Senses Kaelen within 60ft, edge on attacks targeting her</li>
<li><em>Final Requiem</em> (3 Malice, below 15 Stamina) — 40ft, 2d6 psychic + stun</li>
</ul>
<p><strong>Personality:</strong> Clinical, analytical, certain in their purpose. Views the party as obstacles to be removed or converted. Kaelen they view as a heretic whose death would be a mercy.</p>
</div>

<p>When they meet the party, the Inquisitor speaks:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>A figure steps forward from the fortified camp. Tall, scarred, draped in purple robes that seem to absorb light. Their eye—the one not covered by the scar—is fixed on the party with absolute certainty.</p>
<p>"I am Inquisitor Þráinn Ashward. You are the heretics sent to prevent the proper ending. You carry with you the last Keeper, the one who would kindle the false flame, who would deny the world its rest."</p>
<p>They pause, and their voice becomes almost gentle:</p>
<p>"I will make you an offer. Leave the Keeper with us. You may go. We will let you pass. You need not die for a losing cause."</p>
<p>Then, the smile fades:</p>
<p>"If you refuse, we will take her. And you will all die in the taking."</p>
</div>

<h3>The Party's Options</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Option 1: Combat</h4>
<p>The party fights their way through. This is <strong>hard to extreme difficulty</strong>. The Pale Maw number at least 20-30 cultists, plus the Inquisitor (boss level 5). A frontal assault will get the party killed or severely damaged.</p>
<p>However, the party doesn't need to defeat all of them. They just need to break through and keep moving north. A combat encounter here should be designed as a <strong>desperate melee</strong>, not a stand-and-fight.</p>
<p><strong>Combat design:</strong> The Pale Maw are protecting the northern road. If the party can fight their way through the outer guards, they reach the road and can begin moving north quickly. The Pale Maw will pursue but will not chase beyond a certain distance (they're protecting the settlement, not patrolling).</p>
<p>For the Inquisitor, use the @UUID[Actor.OdxMlD7osKrRaOOG]{Pale Maw Inquisitor Thráinn} stat block. For cultist combatants, use @UUID[Actor.Jiu5smA5x98TRiLt]{Pale Maw Zealot} stat blocks.</p>
<p>This is a last-resort option. It's possible, but costly.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Option 2: The Mad Dash (Hard Montage Test)</h4>
<p>The party attempts to evade, deceive, or bluff their way through or around Beinvaka. This is a <strong>Hard Montage Test</strong> (2 rounds) representing the dangerous passage through the Pale Maw stronghold:</p>
<p><strong>Difficulty:</strong> Hard<br>
<strong>Party Size Adjustment (4 heroes):</strong></p>
<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Difficulty</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Success Limit</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Failure Limit</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Hard (adjusted)</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>5</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>2</strong></td>
</tr>
</table>
<p><strong>Rounds:</strong> 2 montage test rounds (each hero acts once per round; 8 total individual tests).</p>
</div>

<h3>Round 1 Sample Tests</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Challenge</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Characteristic</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Description</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Deception or disguise</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Reason</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Convince the Pale Maw guards you are merchants, new converts, or travelers. The Inquisitor is watching—small mistakes reveal your true nature. Maintain the lie under pressure.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Navigate the settlement layout</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Intuition or Agility</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Scout the settlement mentally or physically. Find the northern exit. Identify where guards are posted. Plan a route that avoids the center fire-pit where the Inquisitor stands.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Keep Kaelen hidden or disguised</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Reason</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The Inquisitor has heresy-sense—they can feel Kaelen's presence. Mask her, hide her, make her seem unremarkable. The Inquisitor's attention is everything.</td>
</tr>
</table>

<h3>Round 1 Interlude: The Wrongness of Beinvaka</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>You move through the settlement, trying to seem unremarkable.</p>
<p>The Pale Maw cultists move with purpose, wearing robes marked with symbols of entropy—spirals that collapse inward, stars with missing points, the signs of ending. No music. No laughter. No market. This is a place of grim focus.</p>
<p>And the fire. The central fire-pit burns with an inverted flame—cold blues and sickly purples, as if the Pale Maw are trying to negate warmth instead of create it. The Inquisitor stands before it, their scar catching the unnatural light, their eye fixed on the party with absolute certainty.</p>
<p>You move quickly. Too quickly? No. No one stops you. Not yet.</p>
<p>But the Inquisitor's gaze follows. They sense something.</p>
</div>

<p>The Pale Maw are alert, but not yet mobilized. The party must move faster, push deeper into the settlement before alarms spread.</p>

<h3>Round 2 Sample Tests</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Challenge</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Characteristic</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Description</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Misdirection and speed</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Agility or Intuition</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Move quickly through the settlement toward the northern exit. Avoid direct sight lines. Use structures for cover. Move like you belong here, even as you hurry.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Appeal to doubt or pragmatism</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Reason</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">One of the Pale Maw younger recruits looks uncertain. A word in the right moment might slow pursuit. Plant doubt without revealing yourselves.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Keep the group moving together</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Might</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Cohesion is failing under pressure. Someone is afraid, slowing down. Push the group forward. Keep them moving. Keep them together.</td>
</tr>
</table>

<h3>Round 2 Interlude: Almost Caught</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>A guard looks directly at you.</p>
<p>Not a casual glance—a <em>direct</em> look, registering presence, beginning to question. Your heart stops.</p>
<p>Then, something miraculous happens.</p>
<p>The guard's gaze slides away. Their attention drifts. They turn and look in another direction—toward the southern approach, as if distracted by a sound that doesn't exist.</p>
<p>Did someone make a noise? Did <strong>Lew</strong> intentionally cause a distraction? Did luck simply favor you?</p>
<p>Behind you, the Inquisitor hasn't moved, but they're listening. Their scarred head turns slightly. They know something is happening. They just don't know what yet.</p>
<p>You have seconds. Maybe a minute.</p>
<p>The northern exit is visible now. 50 yards. Just 50 yards between you and the open road.</p>
</div>

<p>The party is almost clear. The Inquisitor is suspicious, but not yet certain. One more push could take them to safety.</p>

<h3>Post-Montage Interlude: Escape and Pursuit</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>You run.</p>
<p>The Pale Maw don't chase immediately—they're shocked, uncertain. But the Inquisitor's voice rises, a psychic wail that echoes across the settlement:</p>
<p><em>"The heretic flees! The Keeper runs north! Mobilize! Mobilize!"</em></p>
<p>Cultists turn. Horns sound. But the party is already breaking through the northern gate, already at the edge of the settlement, already moving into the wilderness.</p>
<p>Behind you, figures move to pursue. A small team of riders begins to ride after you. But they won't chase far into open country—they're protecting the settlement, not the roads.</p>
<p>You're free. Bleeding. Exhausted. But free.</p>
<p>Ahead, the landscape opens into white and gray. The path north is clear. Surt's Forge is 2–3 days away.</p>
<p>And the Inquisitor's voice fades, but does not disappear. It echoes in your mind:</p>
<p><em>"We know where you're going. We will be waiting at the end."</em></p>
</div>

<p>The party has escaped, but the Pale Maw have sent word north. Grafvitnir knows they're coming. The net is closing.</p>

<h3>Montage Test Outcomes</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Result</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Outcome</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Hard Success</strong> (5+ successes, 0 failures)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The party exits Beinvaka undetected. The Pale Maw are completely fooled. The party gains several hours of head start before pursuit becomes coordinated. The Inquisitor does not sense Kaelen. No message is sent north immediately.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Success</strong> (more successes than failures)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The party breaks through. A brief melee as they flee (easy combat, 1–2 rounds with pursuing cultists). They escape with minor injuries. The Inquisitor suspects but does not confirm Kaelen's identity.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Failure</strong> (more failures than successes)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Combat is unavoidable. The party fights a hard encounter against the Inquisitor and multiple Pale Maw cultists in the settlement (constrained space, multiple enemies). They win but at cost. A messenger is sent north immediately.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Hard Failure</strong> (all failures)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Full mobilization and discovery. Combat is extreme difficulty. The party is forced to flee without defeating the Inquisitor. They escape but barely, with casualties. The Inquisitor sends a clear message north: the Keeper is confirmed heading for the Emberwell.</td>
</tr>
</table>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Option 3: Negotiation with the Pale Maw Elder (Moderate-Hard)</h4>
<p><em>Only if the party is very creative or if they roleplay creatively from the start, or if they fail the Montage Test and seek an alternative.</em></p>
<p>There may be a <strong>Pale Maw elder</strong>—someone less fanatical than the Inquisitor, someone who joined the movement for protection rather than ideology. If the party can reach this person (away from the Inquisitor's direct sight) and make the right appeals, they might negotiate passage or create a distraction.</p>
<p>This is a <em>Moderate-Hard Negotiation Encounter</em>.</p>
</div>

<h3>Negotiation Setup</h3>

<p><strong>Interest:</strong> 1 (Exhausted) — The elder has joined the Pale Maw for survival and protection, not ideology. They are weary, conflicted, and beginning to doubt whether the end of the world is truly desirable. They see the party as an unexpected complication.</p>

<p><strong>Patience:</strong> 2 — The elder is frightened of the Inquisitor and cannot afford to be seen speaking at length with outsiders. Their time is limited. If the party cannot make a compelling case quickly, the elder will withdraw.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Draw Steel Negotiation Mechanics</h4>
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
<p>With Patience 2 and Interest 1, the party is negotiating from a very weak position. They need to reach Interest 3 to get meaningful help (passage or a distraction). One Tier 3 appeal and one Tier 2 appeal can do it, or two consecutive Tier 3s. One pitfall severely damages chances of success. This is a narrow window, and the elder is terrified—speed and precision matter.</p>
<p>Each motivation can only be successfully invoked <em>once</em>.</p>
</div>

<h3>Motivations (medium difficulty)</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Motivation</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Appeal</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Survival</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Appeal to the elder's desire to live. Frame it not as ideology, but pragmatism: "The world continues if we succeed. Your world continues. You can have a life after this, a real life, not one lived in fear of the Inquisitor's judgment." The elder joined the Pale Maw because the Fimbulwinter seemed inevitable, a protection against despair. If the party can offer a concrete alternative—a future worth living in—it speaks to something the elder thought was dead.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Doubt About the Movement</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The elder is already conflicted. They can sense that true belief, real conviction, eluded them when they joined. Appeal to this doubt directly: "The Fimbulwinter cannot be stopped by faith alone. If renewal is possible, don't you want to see it? Don't you want to know if there's a chance?" The elder is not a zealot. They are a frightened person who made a survival choice. Validation of that doubt is powerful.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Pragmatism</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Appeal to cold reason and self-interest. "The Inquisitor serves a god that may not exist. We serve a world that does. If the world continues, your life continues. Isn't that worth something?" The elder respects logic over emotion. A practical argument—that their own life is better if the party succeeds—can move them.</td>
</tr>
</table>

<h3>Pitfalls (automatic failure — Interest −1, Patience −1)</h3>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Negotiation Pitfalls</h4>
<ul>
<li><strong>Defending the Ever-Ember or attacking the Pale Maw faith directly:</strong> "Your god is a lie" or "The Fimbulwinter is wrong." The elder is not ready for this. They are frightened and half-committed. A direct assault on their beliefs makes them defensive and likely to call for the Inquisitor.</li>
<li><strong>Claiming the Fimbulwinter should be stopped:</strong> "We're going to stop the Fimbulwinter." The elder hears this as naive heresy. They see you as exactly the kind of dangerous idealist the Inquisitor warned about.</li>
<li><strong>Mentioning saving the world:</strong> "We're going to save the world." The elder dismisses this as fantasy. "That's not possible. You don't understand what you're facing." The elder withdraws, confidence shaken.</li>
<li><strong>Revealing Kaelen's identity:</strong> If the party reveals Kaelen is the Keeper, or the Inquisitor learns of the conversation, the elder must inform the Inquisitor or face punishment. Negotiation fails immediately. The Inquisitor will move to intercept the party.</li>
</ul>
</div>

<h3>Negotiation Flow</h3>

<p>The party must reach the elder discreetly, away from the Inquisitor's sight. This might involve finding them in the settlement, perhaps during a moment when they are isolated. The elder is nervous and will speak quickly, aware of the danger.</p>

<ul>
<li><strong>Presence:</strong> Emotional appeals and empathy work if they avoid preaching. Appeal to the elder's humanity, their desire to live, their fatigue with ideology.</li>
<li><strong>Reason:</strong> Logical arguments about self-interest and pragmatism. The elder respects someone who cuts through moral posturing.</li>
<li><strong>Intuition:</strong> Reading the elder's state of mind. They are terrified and conflicted. Intuition can help identify which motivations will resonate most strongly.</li>
</ul>

<h3>Reading the Elder's Responses</h3>

<p>Use these to guide roleplay between arguments:</p>

<ul>
<li><strong>Interest goes up:</strong> The elder's shoulders relax slightly. They look around nervously, then back at the party. "You're... you're right about that." Their voice becomes quieter, more earnest. Hope flickers—dangerous, but real.</li>
<li><strong>Interest stays flat (no-motivation argument):</strong> The elder shakes their head. "That doesn't help me. That's just words." They look over their shoulder. The fear returns. "I don't have time for this."</li>
<li><strong>Interest drops (pitfall):</strong> The elder's face hardens. They step back. "No. I won't listen to heresy. I can't." They look around for the Inquisitor, panicked. The negotiation is collapsing.</li>
<li><strong>Patience at 1:</strong> The elder stands abruptly. "I have to go. The Inquisitor will notice. I'm sorry." They are about to leave. If the party has made <em>any</em> progress (Interest 2 or higher), the elder will return after dark or agree to a quick distraction. If Interest is still 1, they flee and will not engage again.</li>
</ul>

<h3>Negotiation Outcome: Success</h3>

<p>If the party succeeds in raising the elder's Interest to 3 or higher, the elder offers help:</p>

<blockquote style="border-left:4px solid #c4a03c; padding:8px 14px; font-style:italic; color:#e0d8c8; background:#2a2a3a;">
<p>"I will... I will create a distraction when you try to leave. Not much. A fire in the eastern stables, perhaps, or a false alarm. It won't hold for long, but it will give you time to reach the northern road. That's all I can do. After that, you're on your own."</p>
</blockquote>

<p>This gives the party a concrete advantage—a brief window to break through or slip away. It's not a guarantee of success, but it significantly improves their odds.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Option 4: Going Around (Costs Heat and Time)</h4>
<p>The party can abandon the direct northern route and go around Beinvaka—east through the foothills, then north. This adds 40+ miles and 2-3 days to their journey.</p>
<p>The Heat cost is severe (extreme cold, difficult terrain, no shelter).</p>
<p>The party might choose this if they are exhausted and want to avoid combat entirely. It's an option, but it costs them time they don't have.</p>
</div>

<hr>

<h2>Part 3: Grafvitnir Pressure Resolution</h2>

<p>Regardless of how the party gets through Beinvaka, the outcome is the same:</p>

<p><strong>Grafvitnir's network is now fully coordinated.</strong></p>

<p>The Pale Maw here will send a message north (via courier or Wyrd-channel) that the party is coming, that they did not stop them, and that the party is heading for Surt's Forge and the Emberwell.</p>

<p>Grafvitnir now knows, with certainty, that the party is 2-3 days from their goal.</p>

<p>The defenses at the Emberwell will be ready.</p>

<h3>Kaelen's Hardening</h3>

<p>After the confrontation at Beinvaka, <strong>Kaelen</strong> becomes very quiet. She has faced the ideology that wants her dead—or worse, wants her to accept that her life's work is wrong, that the Keepers are heretics, that the Fimbulwinter is correct.</p>

<p>As the party moves north, away from Beinvaka, <strong>Kaelen</strong> speaks softly:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>"Whatever I become at the Emberwell, it will be the opposite of what they want. They want the world to end. I will make sure it continues."</p>
<p>She pauses, her hand touching the ember-mark on her forehead.</p>
<p>"That is what the Keeper-oath is—a defiance of the Fimbulwinter. A commitment to warmth and life, no matter the cost."</p>
<p>Her voice becomes steady, almost grim:</p>
<p>"I do not know what waits for me at the Emberwell. But I know that I am not afraid anymore. Not of the Pale Maw. Not of the Fimbulwinter. Not even of what I might become."</p>
<p>She looks at the party:</p>
<p>"Thank you for believing in me. When we reach the Emberwell, you will understand why that matters."</p>
</div>

<p>She is more resolved now. More hardened. More willing to accept what comes next.</p>

<hr>

<h2>Part 4: The Path North</h2>

<h3>Exiting Beinvaka Territory</h3>

<p>Once the party gets through or around Beinvaka, they are on the northern road. The terrain begins to change:</p>

<ul>
<li>The interior plateau gives way to lower hills.</li>
<li>The landscape becomes more barren.</li>
<li>The air is colder, sharper.</li>
<li>In the distance, mountains become visible—the northern reaches, the high plateaus that lead to the White Waste.</li>
</ul>

<p>The party is now 2-3 days from Surt's Forge.</p>

<p>Heat is extremely low. They cannot afford to rest long or to take detours.</p>

<h3>Optional Encounter: Pale Maw Pursuit (Brief)</h3>

<p>If the party fought or evaded dramatically, a small Pale Maw pursuit team (4-6 riders/walkers) might follow them for a few hours. But they will not chase too far into the wilderness. They retreat to Beinvaka after a few miles.</p>

<p>This can be a brief combat encounter (easy to moderate) or simply a scene where the party sees them falling behind and feels a moment of triumph that they survived.</p>

<hr>

<h2>Ending Beat 16</h2>

<p>The beat ends with the party:</p>

<ol>
<li><strong>Having escaped Beinvaka and Pale Maw opposition.</strong></li>
<li><strong>Aware that Grafvitnir is now fully aligned and ready.</strong></li>
<li><strong>2-3 days from Surt's Forge.</strong></li>
<li><strong>Heat reserves critically low.</strong></li>
<li><strong>Kaelen more resolved, more willing to accept her fate.</strong></li>
</ol>

<p>The party is in the final stretch. The Throat of World lies ahead (Beat 17). Then Surt's Forge (Beat 18). Then the Emberwell (Beat 19).</p>

<p>The journey is almost over. The real cost is about to become apparent.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Pacing and Tone</h4>
<p>This beat can be quick (30 minutes) if the party bluffs through, or a full session if combat erupts or negotiation is attempted. The Pale Maw are not mercenaries—they cannot be bought or reasoned with. They are true believers. Treat them with the gravitas of an ideological enemy.</p>
<p>Make it clear that Grafvitnir's network is working as a unified force now. The Pale Maw, the undead, the scouts—they are all moving together.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Ideal Outcome</h4>
<p>The party should get through with costs (exhaustion, injuries, or resources spent) but without total victory. They should feel that they escaped, but barely. Kaelen's hardening is crucial: she's moving from reluctant questioner to determined leader.</p>
<p>Time pressure is critical. This is the last major obstacle before the final two beats. The party should feel that time is running out.</p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Oaths Come Due</h4>
<p>The party's oaths are accumulating weight. Remind the players of their growing obligations:</p>
<ul>
<li><strong>Gragnir's Root-Oath (Beat 8):</strong> Serve Yggdrasil's renewal above all other obligations — above kings, councils, and politics. This conflicts with their Konungs-ferð commitment to Harald.</li>
<li><strong>Rickety Frets's Three Demands (Beat 12):</strong> Remember him. Send word back. Protect or destroy the Bundingsteinn if they find it.</li>
<li><strong>Vigmund's Advocacy Oath (Beat 13):</strong> Send word back. Advocate for Rindgate's refugees at Hrafnborg — fight for their shelter at the council table.</li>
<li><strong>The Archive Oath (Beat 15):</strong> Keeper knowledge used only to restore the Ever-Embers. Not as a weapon against the living. Not shared with those who serve the Grave-Wolf.</li>
</ul>
<p>These oaths are not decorative. The Word economy enforces each one, and several pull in different directions. When the party reaches the Emberwell, they will be tested.</p>
</div>`;

fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 16 content updated (' + page.text.content.length + ' characters)');
