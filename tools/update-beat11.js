const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal.journal.json');
const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

const pageId = 'eaepWoooUaDSM0up';
const page = journal.pages.find(p => p._id === pageId);
if (!page) { console.error('Page not found: ' + pageId); process.exit(1); }

page.text.content = `<p><strong>Level:</strong> 3<br>
<strong>Duration:</strong> 1–2 sessions<br>
<strong>Location:</strong> Underwater flooded cave complex; bioluminescent grotto; root chamber; ancient archive<br>
<strong>Key NPCs:</strong> Kaelen (discovering and frightened), Lew (practical and observant)<br>
<strong>Type:</strong> Hard Montage Test, exploration and investigation, two moderate-to-hard combat encounters, discovery scene, lore reveal<br>
<strong>Tone:</strong> Claustrophobia and wonder; the creeping realization that the dead are organized; the Rot's presence</p>

<hr>

<h2>Overview</h2>

<p>The party descends into the flooded caves that stretch beneath the landmass. What they discover is that the caves are no simple natural formation—they are ancient, deliberately carved, and they carry the marks of Yggdrasil's roots and the civilization that served it.</p>

<p>More disturbing: the caves are occupied. Not by Vanir spirits or peaceful landvaettir, but by <strong>undead</strong>, moving in organized columns, working with purpose, heading <em>east</em> toward the interior and beyond. This is the first concrete sign that the dead are not simply wandering or driven by hunger. Something is directing them.</p>

<p>Kaelen recognizes some of the carvings and symbols—fragments of old Keeper knowledge. This frightens her more than the undead do.</p>

<p>By the end of this beat, the party understands:</p>

<ol>
<li>There are <strong>old roads beneath the world</strong>.</li>
<li>The <strong>dead are using them</strong>.</li>
<li>The <strong>Rot</strong> is visible here—spreading from deep roots, poisoning the stone itself.</li>
<li>The <strong>Keepers were not the first</strong> to use these caves. They inherited them.</li>
</ol>

<hr>

<h2>Part 1: The Deep Descent</h2>

<h3>Days 1–2: The Routine of Passage</h3>

<p>The first two days in the caves are almost mundane. The party walks and wades through a flooded tunnel. The bioluminescent creatures provide faint, eerie light. They rest in air pockets, eat cold rations, manage their Heat carefully.</p>

<p><strong>Lew</strong> is steady. He has guided people through worse places (in his own mind, probably exaggerating). He keeps everyone focused on the practical: distance covered, supplies consumed, next rest point.</p>

<p><strong>Kaelen</strong> is quiet but observant. She traces her fingers along carved symbols on the walls, some of which she recognizes. She doesn't share what they mean. Not yet. They make her more pale.</p>

<p>Establish routine and rhythm:</p>

<ul>
<li><strong>Each day's journey</strong> is 8–12 hours of walking/wading, depending on conditions.</li>
<li><strong>Each night</strong> they camp in an air pocket. Heat is consumed for warmth (the caves are cold—probably 40–50 degrees Fahrenheit). They use torches for light. Water is available but cold.</li>
<li><strong>The bioluminescence</strong> provides constant, faint, alien light—never quite bright enough to see clearly, making everything seem slightly dreamlike.</li>
</ul>

<h3>Montage: The First Three Days (Hard Montage Test)</h3>

<p>This is a good place for a <strong>Hard Montage Test</strong> (2 rounds) representing the journey through the flooded caves as the party descends deeper and the true nature of the passages begins to reveal itself:</p>

<p><strong>Difficulty:</strong> Hard<br>
<strong>Party Size Adjustment (4 heroes):</strong></p>

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
<td style="padding:6px 10px;"><strong>Hard (adjusted)</strong></td>
<td style="padding:6px 10px;"><strong>6</strong></td>
<td style="padding:6px 10px;"><strong>3</strong></td>
</tr>
</tbody>
</table>

<p><strong>Rounds:</strong> 2 montage test rounds (each hero acts once per round; 8 total individual tests).</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">📖 Rules Reference</h4>
<p>See <strong>Montage Tests</strong> and <strong>Assists</strong> in the Rules Reference.</p>
</div>

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
<td style="padding:6px 10px;"><strong>Navigate the bifurcating passage</strong></td>
<td style="padding:6px 10px;">Intuition or Reason</td>
<td style="padding:6px 10px;">The tunnel splits. One path is newer (carved with tool marks), one is older (walls are glass-smooth, possibly melted). Choose correctly. The wrong path leads to collapse and requires backtracking.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;"><strong>Manage the early descent and cold</strong></td>
<td style="padding:6px 10px;">Might or Presence</td>
<td style="padding:6px 10px;">Push through the initial shock of deep water. Ration body heat. Help others stay strong as the cave deepens and the cold intensifies.</td>
</tr>
<tr>
<td style="padding:6px 10px;"><strong>Read the bioluminescent patterns</strong></td>
<td style="padding:6px 10px;">Intuition or Reason</td>
<td style="padding:6px 10px;">The creatures are not randomly distributed. They follow the carved paths. Understand the pattern. Are they guides, or warnings?</td>
</tr>
</tbody>
</table>

<h3>Round 1 Interlude: The Carved Passage</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The tunnel branches, and you choose. The correct path opens into something vast—a chamber easily 100 feet across. The ceiling rises into shadow, perhaps 40 feet high. Every inch of stone is carved.</p>
<p>Not random. Not decay. Deliberate.</p>
<p>Spirals intertwine. Geometric patterns repeat. Figures humanoid and animal, symbols that look almost like writing in a language older than kingdoms. And the bioluminescence is dense here, clustered in thick patches that glow blue and green and sickly yellow, following the carved lines as if reading a map written for eyes that see in darkness.</p>
<p>The water here is still. It's a cathedral made by something that died long ago.</p>
<p>And on the wall, clear as morning: a figure with water flowing from uplifted hands. Below it, in a language Kaelen recognizes but does not know:</p>
<p><strong>Líf.</strong></p>
<p>The Mother. The one who survived the ending. The one who brought renewal.</p>
</div>

<p>Kaelen recognizes the Root-Runes. She knows now that the Keepers were not the first. Someone older came before, carved these paths, left these marks. The weight of that knowledge settles on her shoulders.</p>

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
<td style="padding:6px 10px;"><strong>Manage deepening cold and exposure</strong></td>
<td style="padding:6px 10px;">Might or Presence</td>
<td style="padding:6px 10px;">The water grows colder as they descend. Torches burn faster. The air in the passages is thin, difficult to breathe. Keep the group from succumbing to hypothermia and despair.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;"><strong>Navigate the changing cave system</strong></td>
<td style="padding:6px 10px;">Reason or Agility</td>
<td style="padding:6px 10px;">The passages change character. Some sections are tight, forcing them to squeeze through. Others open wide. Find the main tunnel among the side chambers. Keep direction when landmarks blur together.</td>
</tr>
<tr>
<td style="padding:6px 10px;"><strong>Sense disturbances in the water and air</strong></td>
<td style="padding:6px 10px;">Intuition or Presence</td>
<td style="padding:6px 10px;">Something feels wrong. The water currents are unusual. There are sounds from deeper down—not echoes, but movement. Is something else in these caves?</td>
</tr>
</tbody>
</table>

<h3>Round 2 Interlude: The Silence and the Weight</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>By the end of Day 2, the cold has seeped into your bones. You are soaked despite efforts to stay dry. Your breath clouds in the weak light of the bioluminescence. The torches sputter and burn faster, consuming themselves in the thin air.</p>
<p>The silence in these caves is profound. No wind, no bird song, no distant water. Just the sound of your own breathing and the slow drip of water somewhere in the darkness.</p>
<p>And then, something changes. The water grows warmer—not warm, but less freezing. The creatures shift their patterns, suddenly moving faster, flowing toward deeper passages like water going down a drain.</p>
<p>Kaelen watches them go, her face pale.</p>
<p><strong>"Something is calling them,"</strong> she whispers. <strong>"Something deeper. Something that the Keepers wrote about but did not describe."</strong></p>
<p>The caves remember a purpose older than the Keepers. That purpose still echoes.</p>
</div>

<p>The party is deep now. Committed. The boundary between the known world and the ancient deep is blurring.</p>

<h3>Post-Montage Interlude: The Organized Dead</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>On Day 3, exhaustion takes hold. Your thoughts move slowly. The cold numbs even thought.</p>
<p>Then, ahead, movement.</p>
<p>Not the bioluminescent creatures. Something larger. Shapes in the water, moving with purpose. They emerge from the darkness moving in columns—slow, deliberate, organized.</p>
<p>Draugr. Perhaps 30 or 40 of them. Moving east-southeast. Some carry tools. Some carry bundles. All move in perfect silence, as if they are following a path carved into their rotting minds.</p>
<p>The party manages to conceal themselves in a side passage. The draugr column passes, unseeing, unhearing. They march with direction and will. Something is orchestrating them. Something with intelligence, with purpose.</p>
<p>When they are gone, the caves are silent again. But the silence is no longer empty. It is <em>full</em>—pregnant with intention.</p>
<p>The old roads are being used. Someone is building something in the deep.</p>
</div>

<p>The party comprehends now: the dead are not random. The dead are <strong>organized</strong>. This is not a natural catastrophe. This is being directed by something intelligent, something aware, something that dwells in the deepest places.</p>

<h3>Outcomes (Round 1–2)</h3>

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
<td style="padding:6px 10px;">The party completes the three days smoothly and safely. They navigate well, manage supplies efficiently, avoid the worst of the cold, and reach the next major chamber in good condition. They gather supplies: preserved rations, dried fish, alchemical vials. They understand that the Keepers' knowledge still shapes these caves.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;"><strong>Success</strong> (more successes than failures)</td>
<td style="padding:6px 10px;">They complete the three days with minor complications. One complication (difficult passage, unusual cold, or unsettling encounter) costs them supplies or time, but nothing serious. They reach camp tired but functional.</td>
</tr>
<tr>
<td style="padding:6px 10px;"><strong>Failure</strong> (more failures than successes)</td>
<td style="padding:6px 10px;">They make it through, but with costs. Heat expenditure is high. Someone is injured or exhausted. A portion of supplies is damaged. They arrive at the next chamber shaken by what they've seen in the organized draugr column.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;"><strong>Hard Failure</strong> (all failures)</td>
<td style="padding:6px 10px;">They are turned around, confused by the passages. They spend 4–5 days instead of 3. Heat is a critical problem. They camp in the Rot (black veins on stone, the sense of infection spreading). When the draugr column passes, they are nearly discovered.</td>
</tr>
</tbody>
</table>

<hr>

<h2>Part 2: The Bioluminescent Grotto</h2>

<h3>Scene: Wonder and Discovery</h3>

<p>On Day 3 or 4, the tunnel opens into a vast chamber. This is not a natural cave—the ceiling is too regular, the walls too smooth, and there is clearly a pattern to the carvings that cover every surface.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The chamber takes your breath away.</p>
<p>It is easily 100 feet across and twice that in length. The ceiling is lost in shadow, but it's high—probably 40 feet or more. And the walls...</p>
<p>Every inch of stone is carved. Not haphazardly, but with deliberation. There are spirals that intertwine, geometric patterns that repeat, and figures—humanoid shapes, animal shapes, symbols that look almost like writing but in a language older than any you know.</p>
<p>And the light. The bioluminescence is intense here, almost blinding after days in the dim passages. The creatures have clustered on the walls in thick patches. They glow in shades of blue, green, and sickly yellow. They follow patterns carved into the stone, as if they're reading a map written for eyes that see in darkness.</p>
<p>The water here is still. It's like walking into a cathedral made by something that died long ago.</p>
<p>Kaelen stops at the entrance. She doesn't move. Her hand is on the stone wall, tracing one of the carvings. When she speaks, her voice is barely a whisper:</p>
<p><strong>"These are Root-Runes. Old Keeper marking. But I… I've never seen this version. This is older. This is the version that the Keepers learned from, not the other way around."</strong></p>
<p>She looks at you, and there's fear in her eyes.</p>
<p><strong>"Someone was here before the Keepers. Someone taught us how to read the roots."</strong></p>
</div>

<h3>Investigation: The Chamber's Purpose</h3>

<p>A successful <strong>Reason test</strong> (moderate difficulty) or a character with Lore skill can determine several things about the chamber:</p>

<ol>
<li><strong>It was a library or archive.</strong> The carvings are too organized to be decoration. They follow thematic groupings—sections of wall seem to have different "topics."</li>
<li><strong>It was maintained.</strong> The carvings are clear, sharp. They haven't been worn away or damaged by time. Someone kept this place.</li>
<li><strong>It is/was sacred.</strong> The geometry is too precise, the symbols too particular. This was a place of ritual significance.</li>
<li><strong>It might still be in use.</strong> The bioluminescent creatures aren't randomly placed. They follow the carved paths. Is this intentional? Are they being "guided" to specific locations?</li>
</ol>

<h3>Kaelen's Recognition</h3>

<p>Kaelen recognizes the Root-Runes because she was trained in them. She spent years in the Keeper archives learning the language of Yggdrasil. But she has never seen them in this form.</p>

<p>The oldest Keeper texts spoke of "learning the Root-Tongue from the first writings." She always assumed this was metaphorical—a poetic way of saying the Keepers studied nature. She now realizes it was literal. The Keepers found <em>written knowledge</em> already here, already carved, and they <em>learned</em> a language that was not invented by humans.</p>

<p>If pressed, she admits: <em>"The Keepers were not the originators. We were… inheritors. Guardians of something we only half-understood."</em></p>

<p>This should shake the party. It raises the question: <em>Who carved these runes? Who were the "first writers"?</em></p>

<p>The answer (hinted at, not stated): These were carved by something that came before the current age. Possibly by Yggdrasil itself, in a form that could interact with the physical world. Or by the Vanir, or another civilization. The truth is lost.</p>

<h3>The Unsettling Detail: The Bioluminescence Pattern</h3>

<p>Have a character with high Intuition or Perception make a <strong>Presence test</strong> (hard difficulty).</p>

<p>If they succeed: They notice that the bioluminescent creatures are not randomly arranged. They follow the carved paths on the walls. More: they seem to be <em>flowing</em> in a specific direction—following a pattern that spirals deeper into the chamber, toward a specific wall section.</p>

<p><em>What are they following?</em> It's not clear. But it suggests intelligence, or at minimum, a response to something.</p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ GM Secret: Bioluminescence and the Rot</h4>
<p>The creatures are being drawn by the Rot. The Rot spreads through the Root-Ways like a disease, and these creatures are attracted to it, or are being manipulated by it. This is the first sign that the Rot has a presence even this deep in the world.</p>
</div>

<hr>

<h2>Part 3: The First Encounter — Undead Wolf Pack</h2>

<h3>Transition: The Ritual Interruption</h3>

<p>As the party is exploring or resting in the grotto, <em>something disturbs the water</em>.</p>

<p>Low in the chamber, at the far end, the water begins to move. It's not a current. It's something <em>beneath</em> the surface, moving with purpose.</p>

<p>A <strong>Presence test</strong> gives warning. Otherwise, it's a surprise.</p>

<p>The undead wolf pack emerges. These are not normal draugr. They are corpses of ancient sea-wolves—creatures that drowned when the caves flooded, centuries ago. They have risen as undead, but their state is worse than human draugr. Their fur is matted with slime and ice. Their eyes are white and sightless. They are <em>blind</em>, and therefore they hunt by sound and smell.</p>

<p>The party's noise in the grotto has drawn them.</p>

<h3>Combat: Undead Wolf Pack</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">⚔️ Combat Setup: Undead Wolf Pack</h4>
<p><strong>Difficulty:</strong> Hard (Level 3 PCs) &nbsp;|&nbsp; <strong>Party ES:</strong> 40</p>
<p><strong>Enemies:</strong></p>
<ul>
<li>6 × @UUID[Actor.QFFZ5iHxHjgtr7Yn]{Blind Draugr Wolf} (Level 2 Standard) — ES 6 each = 36 total</li>
<li>1 × @UUID[Actor.MAuyKNADyEShV23S]{Dire Draugr Wolf} (Level 4 Elite) — ES 20</li>
</ul>
<p><strong>Terrain:</strong></p>
<ul>
<li>Bioluminescent grotto with slippery stone, water varying from waist to chest-deep in places. Difficult terrain.</li>
<li>Melee attacks suffer −1 penalty.</li>
<li>Magic attacks gain +1 (bioluminescence resonates with Wyrd).</li>
</ul>
<p><strong>Lighting:</strong> Bright bioluminescence from the creatures clustered on the walls. Vision is adequate.</p>
<p><strong>Special Constraints:</strong></p>
<ul>
<li><strong>Objectives:</strong> The wolves want to kill and eat. They attack the nearest and weakest-looking target first. They won't stop until they're dead or driven back into the water.</li>
<li><strong>Environmental Escape:</strong> If the party is heavily outnumbered, a secondary collapse occurs. Part of the chamber's ceiling fails (the Rot has weakened the stone). Large chunks of limestone fall, crushing a few wolves and creating a wall between combatants. The wolves retreat into the water and the party wins by default.</li>
</ul>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Combat Pacing and Aftermath</h4>
<p><strong>Round 1:</strong> The wolves emerge from the water. Describe the horror of seeing them rise—corpses of magnificent animals, now twisted and wrong.</p>
<p><strong>Round 2–4:</strong> Combat proper. The wolves are relentless and quick.</p>
<p><strong>Round 5+:</strong> The party should be winning by now, or things should be dire.</p>
<p><strong>Aftermath:</strong></p>
<p>The party is bloodied. Healing will be needed. The presence of undead wolves here is disturbing. <em>How did they get this deep? How long have they been here?</em></p>
<p>One wolf's corpse bears a wound that looks too old to be natural—perhaps a bite, or a claw mark that has been festering for years. This suggests the wolves have been fighting something, or have been infected by something.</p>
</div>

<hr>

<h2>Part 4: The Draugr Column</h2>

<h3>Transition: Resting After Combat</h3>

<p>After defeating the wolves, the party will want to rest, heal, and recover. Let them. They've earned it.</p>

<p>They rest in the grotto for several hours (or a full night if needed). Kaelen tends wounds. Lew scouts for better water or additional supplies.</p>

<h3>The Observation</h3>

<p>As the party is resting or preparing to move deeper, they hear something that freezes their blood: <em>marching</em>. Not the sound of animals or chaos, but of <em>organized, rhythmic movement</em>.</p>

<p>Footsteps. Slow. Regular. Like a column of soldiers, or an army of the dead, moving with purpose.</p>

<p>A <strong>Presence test</strong> (moderate difficulty) allows the party to hear it coming from <em>deeper in the caves</em>, moving from east to west. The sound grows louder, then fades.</p>

<p><strong>The party has three options:</strong></p>

<ol>
<li><strong>Hide and observe.</strong> The party can conceal themselves in the grotto's side passages and watch the column pass. This is Safe but requires good stealth checks.</li>
<li><strong>Investigate and follow.</strong> The party can shadow the column, trying to understand what it is.</li>
<li><strong>Confront.</strong> The party can step out and demand explanation (unwise, but possible).</li>
</ol>

<h3>The Column: What They See</h3>

<p>If the party successfully hides and observes, read:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>They emerge from the deeper passages like a flood, but silent. Draugr. Maybe 30 or 40 of them, moving in formation. Not chaos. Not the random wandering you've seen on the surface.</p>
<p>They march in columns of four or five. They carry tools—picks, spades, ropes. Some carry crude weapons. Some carry bundles wrapped in cloth. They move with <em>direction</em>.</p>
<p>And they're not shambling or groaning. There's no sound except the sound of their feet on stone and the occasional metallic clink of a tool.</p>
<p>More: they move as if <em>following a path</em>. Their footsteps are exact, precise. They're not searching. They <em>know where they're going</em>.</p>
<p>The undead in the column are varied. Some are fresh—corpses from the last few months. Some are ancient—so degraded that it's amazing they still move. All of them are moving with the same purpose.</p>
<p>A few are clearly larger, stronger. Directing the column with gestures and guttural sounds that might once have been speech.</p>
<p>And as the column passes, Kaelen grabs your arm. Her hand is shaking.</p>
<p><strong>"They're organized. The dead are… they're being directed. This isn't Níðhöggr's hunger. This is someone. Something. Someone is building an army."</strong></p>
</div>

<h3>Kaelen's Recognition</h3>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: The Keeper Binding</h4>
<p>This moment is crucial for Kaelen's character. She has theorized about the undead organizing, but seeing it concretely shakes her.</p>
<p><em>"The Keepers wrote about this. There was a binding that was supposed to prevent the dead from maintaining consciousness after rising. The binding was placed in the Root-Ways themselves. But if the binding is failing…</em></p>
<p><em>"The dead would retain will. Intent. Purpose. They could be directed. They could work. They could think."</em></p>
<p>She looks at you with genuine fear: <em>"If the dead can think, they can plan. And if they're being organized, then something with greater will than Níðhöggr's hunger is doing the organizing. Something intelligent. Something that wants the dead to act, not just consume."</em></p>
<p>This is a major realization. The dead are not a natural disaster. They are a <strong>tool</strong>. And Grafvitnir, trapped in the root-chamber, is using them.</p>
</div>

<h3>The Direction Question</h3>

<p>If the party can determine the column's direction safely, they realize it's moving <strong>east-southeast</strong>. Toward Rindgate. Toward the interior.</p>

<p><em>Why east? What's there?</em></p>

<p>The party doesn't know yet, but it's unsettling. The draugr aren't just migrating or spreading randomly. They're being <em>sent somewhere</em>.</p>

<p><strong>Lew</strong>, if asked, might say: <em>"East from here… that's toward the Interior Belt. Toward the mountains, and beyond. Toward Bone-Fields and beyond that. There's not much out there. A few settlements. Lot of dead places."</em></p>

<p><strong>Kaelen</strong> might add: <em>"Unless… unless it's not the settlements they're going for. Unless they're being sent to guard something. Or to protect something. Or to gather something."</em></p>

<p>The party is beginning to understand that their personal quest is not the only thing happening in Svellheim. Grafvitnir has his own plan, and it's moving on multiple fronts.</p>

<hr>

<h2>Part 5: The Deeper Passage</h2>

<h3>Continuing Into the Rot</h3>

<p>As the party decides to move deeper into the caves (toward the exit that will eventually lead to Rindgate), the character of the caves changes.</p>

<p>The walls, which were clean stone before, now show <strong>signs of infection</strong>. Black veins spread across the carvings. The stone itself is weeping—a dark, oily substance that smells like decay and sulfur.</p>

<p>Kaelen recognizes this: <strong>The Rot</strong>.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>It's not just a metaphor in the texts. It's real. Yggdrasil's roots are literally rotting, infected from the inside, spreading corruption outward.</p>
<p>The Root-Runes on the walls—the ancient carvings—are being obscured, overwritten by this spreading blight. Where it touches, the carefully carved symbols become corrupted, distorted.</p>
<p>If you're sensitive to the Wyrd, you feel it: the carvings are <em>screaming</em>. Silently, but the feeling is undeniable—anguish, despair, a fundamental wrongness spreading through the stone itself.</p>
</div>

<h3>Environmental Montage: The Deeper Descent</h3>

<p>This is a good opportunity for a <strong>Hard Montage Test</strong> (2 rounds) to represent the difficulty of moving through a rotting cave system:</p>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<thead>
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:6px 10px; text-align:left;">Test</th>
<th style="padding:6px 10px; text-align:left;">Characteristic</th>
<th style="padding:6px 10px; text-align:left;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:6px 10px;"><strong>Navigate hazardous, unstable terrain</strong></td>
<td style="padding:6px 10px;">Agility or Might</td>
<td style="padding:6px 10px;">Move carefully through collapsed sections and weakened stone. Avoid falling debris.</td>
</tr>
<tr style="background:#f5f0e6;">
<td style="padding:6px 10px;"><strong>Resist the Rot's spiritual oppression</strong></td>
<td style="padding:6px 10px;">Presence or Reason</td>
<td style="padding:6px 10px;">Push through despair, lethargy, and the weight of spreading corruption. Stay sane and determined.</td>
</tr>
</tbody>
</table>

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
<td style="padding:6px 10px;"><strong>Hard</strong></td>
<td style="padding:6px 10px;"><strong>4</strong></td>
<td style="padding:6px 10px;"><strong>2</strong></td>
</tr>
</tbody>
</table>

<p><strong>Complications:</strong></p>
<ul>
<li><strong>Round 1:</strong> The stone is becoming unstable. Collapsed sections. Falling debris. Unstable footing tests their agility and strength.</li>
<li><strong>Round 2:</strong> The Rot is draining hope and will. It's not physical—it's a weight on the spirit that makes it hard to move forward.</li>
</ul>

<p><strong>Success outcomes:</strong> They make good progress and emerge from the worst of the Rot near the cave exit.</p>

<p><strong>Failure outcomes:</strong> They are slowed. They encounter Rickety Frets's domain sooner than they would have otherwise (because they're lost). Or they camp in the Rot for a night, which is very unpleasant and costs extra Heat.</p>

<hr>

<h2>Ending Beat 11</h2>

<p>The beat ends with the party having:</p>

<ol>
<li><strong>Discovered the ancient cave system</strong> and its purpose (a library or archive of the Root-Ways).</li>
<li><strong>Encountered undead in organized formation</strong>, which shakes their understanding of what they're fighting.</li>
<li><strong>Seen The Rot</strong> spreading through the root-chamber, corrupting even ancient carvings.</li>
<li><strong>Realized that Grafvitnir is directing the dead</strong>, not just unleashing them.</li>
</ol>

<p>They are deep in the caves, moving toward the passage that will lead them out near Rindgate. They are exhausted, wounded possibly, and growing afraid.</p>

<p>And ahead of them, in the deepest chamber (which they have not yet reached), someone very old is watching and waiting.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Director Guidance</h4>
<ul>
<li><strong>Pacing:</strong> This beat is best split into two sessions: one for the descent and grotto discovery, one for the wolf combat and draugr column observation.</li>
<li><strong>Horror tone:</strong> Emphasize the wrongness of the organized draugr. It's more unsettling than a simple undead horde would be. Intelligence plus hunger is far scarier.</li>
<li><strong>Kaelen's arc:</strong> She's beginning to understand that the Keepers were not the first, and that she carries knowledge of an ancient system she doesn't fully comprehend. This feeds into her eventual realization in Beat 15 that she is meant to be a <em>living anchor</em> to that system.</li>
<li><strong>Foreshadowing:</strong> The Rot spreading through the Root-Runes. The dead moving east. Grafvitnir directing from the depths. All of this sets up the later encounters and the climax.</li>
<li><strong>Resource reminder:</strong> Heat is being consumed. They're 4–5 days into caves. The Steam-Oasis is still many days north. Supplies are getting lower. The party should feel the pressure of scarcity.</li>
<li><strong>Wyrd and magic:</strong> If your table uses magic or Wyrd-sense, make it resonate here. The ancient carvings, the bioluminescence, the anguished screams of the Root-Runes—these are all Wyrd infrastructure failing.</li>
</ul>
</div>`;

fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 11 content updated (' + page.text.content.length + ' characters)');
