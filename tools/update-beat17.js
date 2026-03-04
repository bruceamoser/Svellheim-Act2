const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal-Part-2.journal.json');
const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

const pageId = 'n8GxuzfV23Hl5rti';
const page = journal.pages.find(p => p._id === pageId);
if (!page) { console.error('Page not found: ' + pageId); process.exit(1); }

page.text.content = `<p><strong>Level:</strong> 5<br>
<strong>Duration:</strong> 1–2 sessions<br>
<strong>Location:</strong> The Steam-Oasis (row 12, col 27); Throat of World passage (row 9, col 23)<br>
<strong>Key NPCs:</strong> Optional: survivors living at the Oasis (create characters), Kaelen (deepening resolve)<br>
<strong>Type:</strong> Environmental discovery and rest, social encounter (optional), Hard Montage Test (blizzard passage), atmospheric preparation<br>
<strong>Tone:</strong> Respite and temptation; the last warm place; the transition from known land to the frozen north; mounting dread and resolve</p>

<hr>

<h2>Overview</h2>

<p>The Steam-Oasis is the last place of real warmth before the Throat of World and the approach to Emberwell. It is a geothermal vent complex in the northern interior (row 12, col 27), where the ground itself is warm enough to melt snow and grow twisted, hardy flora.</p>

<p>This beat serves several purposes:</p>

<ol>
<li><strong>Provides the party a final rest and resupply opportunity</strong> before the climactic final beats.</li>
<li><strong>Offers a moment of strange beauty and temptation</strong> in a world of cold and ice.</li>
<li><strong>Allows for a Hard Montage Test</strong> representing the dangerous blizzard crossing of the Throat of World.</li>
<li><strong>Builds atmosphere and anticipation</strong> for the final approach to the Emberwell.</li>
</ol>

<p>By the end of this beat, the party has rested, resupplied, and committed to the final push. They have faced the Throat of World and are standing at the entrance to Surt's Forge, visible in the distance.</p>

<hr>

<h2>Part 1: The Approach to the Steam-Oasis</h2>

<h3>The Transition Zone</h3>

<p>The party is traveling north from Beinvaka. The landscape is becoming increasingly barren and cold:</p>

<ul>
<li>Snow is deeper here—2-3 feet in places.</li>
<li>Vegetation has disappeared almost entirely.</li>
<li>The sun, even at midday, hangs low and provides little heat.</li>
<li>The wind is constant and brutal.</li>
</ul>

<p>This is the transition into the true north.</p>

<p>Heat is critical now. The party should feel they are approaching the limit of what their supplies can sustain.</p>

<p>Then, after a day of hard travel, they begin to notice something:</p>

<ul>
<li>The air is warmer, very slightly.</li>
<li>The snow is melting in patches.</li>
<li>There are green things—actual living plants, twisted and small, but <em>alive</em>.</li>
<li>Steam rises from the ground in places, carrying a mineral smell.</li>
</ul>

<h3>The Oasis Itself</h3>

<p>The Steam-Oasis is a circular area about 200 yards across, centered on a geothermal vent complex. The geological features include:</p>

<ul>
<li><strong>Central vent:</strong> A large opening in the ground where steam rises constantly. The ground around it is too hot to touch.</li>
<li><strong>Mineral pools:</strong> Circles of water warmed by the vent, colored strange shades of blue, yellow, and rust by dissolved minerals. The water is drinkable but has a strong mineral taste.</li>
<li><strong>Flora:</strong> Bizarre, alien plants have adapted to this place. Stunted trees with bark the color of rust. Shrubs with leaves of deep blue and silver. Grasses that grow in twisted spirals. A few flowers, impossibly delicate.</li>
<li><strong>Shelter:</strong> There may or may not be structures here (GM choice). Either the party finds a natural cave or lean-to, or they find abandoned structures (old stone buildings or shelter-huts) that previous inhabitants left behind.</li>
</ul>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The warmth hits you like a physical thing.</p>
<p>For the first time in weeks, the cold is not the dominant sensation. Your breath doesn't immediately freeze. Your fingers don't burn with frostbite pain.</p>
<p>The landscape is alien. Living green grows here—real, living plants—in a landscape where everything else has been brown and white and gray for hundreds of miles. It's beautiful and deeply wrong at the same time.</p>
<p>The ground steams. Water bubbles up from cracks in the earth, carrying minerals and heat. The smell is sharp, iron-rich, almost unbearable at first. But after a moment, it smells like something alive. Like the earth has a heartbeat.</p>
<p>And the light here is strange. The steam catches the pale sun and refracts it, creating halos and prisms. It's dreamlike. It's easy to imagine that you've left the real world and entered something from myth.</p>
<p><strong>Kaelen</strong> stands at the edge of the warm zone, feeling the warmth on her face. She closes her eyes.</p>
<p><em>"This is what the north felt like, before the Fimbulwinter. My grandmother told me stories. This is what she described."</em></p>
<p>Then her eyes open again, and the realization returns:</p>
<p><em>"This can't last. It's geothermal. The heat will fail within a few years, maybe less. And when it does... this place will be gone. Everything that lives here will die."</em></p>
</div>

<h3>Inhabitants (Optional)</h3>

<p>The Steam-Oasis is small. It cannot support a large population. But a small community may have gathered here—people who chose to stay in the warmth rather than flee south.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">The Oasis Community</h4>
<p>A small community of 20-50 people, mostly refugees from the interior. They have made a deliberate choice to stay here, knowing the resource is finite. They are not hostile, but they are deeply suspicious of outsiders.</p>
<p><strong>Social interaction:</strong></p>
<ul>
<li>They welcome respectful visitors cautiously and offer shelter, warm food, and information about Surt's Forge.</li>
<li>If <strong>Kaelen</strong> is identified as a Keeper, they recognize her and react with fear, hope, or desperation.</li>
</ul>
<p><strong>Their dilemma:</strong> They might ask: "What are you doing going north? Why would anyone go north?" Or, if they sense what <strong>Kaelen</strong> is, they understand: "You're going to try to end the Fimbulwinter. We hope you succeed. But we know you might fail."</p>
<p><strong>Tone:</strong> This should be a scene (30-45 minutes of table time) that adds emotional weight and creates a genuine moral dilemma.</p>
</div>

<h3>The Oath of Silence</h3>

<p>Once the party has been welcomed and fed, the community's leader — a grey-haired woman called @UUID[Actor.PjIcqf3pfBREHqV4]{Elder Thyra} — draws them aside. She speaks plainly.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><strong>Thyra</strong>'s hands are callused from work, not from weapons. She is not a warrior. She is a farmer who learned to lead because someone had to.</p>
<p><em>"You are welcome here. You may rest, eat, resupply. We will tell you what we know about the forge to the north and the dead that walk the passes. This costs you nothing."</em></p>
<p>She pauses. Her eyes are steady.</p>
<p><em>"But I need something from you in return. Not payment. An oath."</em></p>
<p><em>"You will not tell anyone — not your King, not your allies, not the refugees on the road — where this place is. You will not describe the route. You will not draw maps. You will not mention the steam, the warmth, or the water. If someone asks where you rested, you say 'a cave.' If they press, you say nothing."</em></p>
<p>She leans forward.</p>
<p><em>"I have forty-three people here. Twenty of them are children. The geothermal vents will keep us alive for three years, maybe four, if we are careful. If word spreads — if refugees come in numbers — we will be overrun in months. Not by enemies. By desperate, starving, freezing people who need exactly what we have. And when they come, the food runs out in weeks. The water becomes fouled. The children die first, because they always do."</em></p>
<p><em>"So I am asking you to let us survive. Swear silence, and everything we have is open to you. Refuse, and you may still rest here tonight — I am not cruel — but you leave at dawn with nothing but what you carried in."</em></p>
</div>

<p><strong>If the party accepts the Oath of Silence:</strong> They gain full hospitality — rest, resupply (5 days' rations, warm gear repairs, medicine), and detailed intelligence about the route to Surt's Forge. @UUID[Actor.PjIcqf3pfBREHqV4]{Elder Thyra} also shares a critical piece of information: there is a <em>second</em> geothermal source near the forge itself, which may be relevant to the Emberwell.</p>

<p><strong>If the party refuses:</strong> They rest one night (recovering Stamina), but gain no supplies, no intelligence, and no special information. @UUID[Actor.PjIcqf3pfBREHqV4]{Elder Thyra} is not angry — she is resigned. <em>"I understand. You have other promises to keep. I hope they are worth more than ours."</em></p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Warning: The Oath Conflict with Vigmund</h4>
<p><strong>This is the campaign's first genuinely painful oath collision.</strong> Read carefully.</p>
<p>If the party swore Vigmund's refugee advocacy oath in Beat 13, they are now trapped:</p>
<ul>
<li><strong>Vigmund's oath:</strong> The party swore to advocate for Rindgate's refugees — to argue for their shelter and survival at Hrafnborg. Knowledge of the Steam-Oasis (a warm, habitable, self-sustaining refuge) would be the single most valuable thing they could offer Vigmund's people. The Oasis could save hundreds of lives.</li>
<li><strong>Thyra's oath:</strong> The party swears never to reveal the Oasis's location. Keeping this oath means <em>deliberately withholding survival information</em> from the refugees they promised to help.</li>
</ul>
<p>There is no clean resolution:</p>
<ul>
<li><strong>Keep the silence oath, break the advocacy oath:</strong> Vigmund's refugees may die or suffer unnecessarily because the party knows about a refuge and said nothing. The party loses 1 Word permanently for failing Vigmund.</li>
<li><strong>Break the silence oath, keep the advocacy oath:</strong> Thyra's community is overrun. Forty-three people — twenty of them children — lose their only chance at survival. The party loses 1 Word permanently for betraying Thyra's trust.</li>
<li><strong>Try to find a middle path:</strong> The party might argue for relocating Vigmund's refugees to Hrafnborg (as originally promised) while keeping the Oasis secret. This is the most ethical path, but it is also the hardest — Hrafnborg is under siege, resources are scarce, and the party will be arguing for admission to a city that may not want more mouths to feed.</li>
</ul>
<p>Do not resolve this for the players. Let them sit with it. The Word economy enforces the cost either way. This is what oaths <em>mean</em> in Svellheim.</p>
</div>

<p><strong>Alternatively:</strong> The Oasis is empty. No one has come here in months. The shelter is abandoned, but useful. The party rests in silence, alone in a place of warmth and wonder.</p>

<p>Either way, the tone is bittersweet: warmth and beauty in a dying world.</p>

<hr>

<h2>Part 2: Rest and Resupply</h2>

<h3>Heat and Healing</h3>

<p>The Oasis is warm. Resting here reduces Heat cost to nearly zero—the geothermal warmth does most of the work.</p>

<p>The party can recover Stamina fully with a night's rest. This is their last opportunity to do so before the final beats.</p>

<h3>Supplies</h3>

<p>The Oasis has:</p>

<ul>
<li><strong>Fresh water:</strong> In abundance, warm and mineral-rich.</li>
<li><strong>Flora:</strong> The local plants are edible (bitter, mineral-tasting, but nutritious). The party can harvest enough for several days of rations.</li>
<li><strong>Fuel:</strong> Dead wood from fallen trees. Easy to gather.</li>
</ul>

<p>The party can resupply and prepare adequately for the final push.</p>

<h3>A Quiet Moment</h3>

<p>The party has settled in to rest. The warmth of the geothermal vents surrounds them for the first time in weeks. As evening settles, one of the party members might notice something quiet happening near one of the larger thermal vents.</p>

<p><strong>Kaelen</strong> is sitting near the warm stone, her hands tracing something into the mineral dust on the ground. Root-runes, maybe. An old habit from her training. Her movements are careful, meditative—not prayer, exactly, but something like remembrance.</p>

<p><strong>Lew</strong> is nearby. Not sitting with her, just… nearby. Close enough to see clearly, close enough to respond if something goes wrong, far enough to give her space. His attention, when it settles on her, is steady and complete.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>If anyone notices, it is because they are paying very close attention. <strong>Lew</strong> is not watching her in the way you might expect a companion to watch a companion. He is watching her the way you might watch something precious and fragile that you know you are going to lose.</p>
<p>When he sees that he has been noticed, he does not deflect. He simply says, <em>"Making sure she doesn't wander. She does that."</em> It is not a lie, exactly. But it is not the whole truth either.</p>
</div>

<p>If <strong>Kaelen</strong> is asked directly, she will glance at <strong>Lew</strong> with complete affection and say: <em>"Lew worries about everyone. It's one of his more exhausting qualities."</em> She says it with no self-consciousness whatsoever.</p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ GM Secret: Watching What He Cannot Keep</h4>
<p>This is a small moment. A man noticing that someone matters to him, and allowing his notice to be visible to a stranger—because he does not know when he will have another chance to simply watch her, alive and warm and present. He will not speak of this to <strong>Kaelen</strong>. He will not cross any lines. But the watching is its own kind of goodbye, even though goodbye is not yet.</p>
</div>

<h3>Temptation (Optional GM Move)</h3>

<p>The Oasis is warm. Safe. Stable. A character might suggest: <em>"We could stay here. Hole up. Wait for spring. It's coming, eventually."</em></p>

<p>This is temptation. <strong>Kaelen</strong>, if asked, will say firmly:</p>

<p><em>"No. The Oasis is warming because of geothermal activity, not because the Fimbulwinter is ending. In a year, maybe less, this place will start to fail. And Svellheim can't wait. The Keepers are dead. Hrafnborg is starving. The Emberwell has to be renewed now, or the world ends in a few years."</em></p>

<p>She pauses, then adds:</p>

<p><em>"Besides, if we stop here, we've come all this way for nothing. We've already paid the price in lives, in sacrifice, in oaths sworn. We can't stop now."</em></p>

<p>The party will choose to continue (because the narrative momentum demands it, and because they know the cost of stopping).</p>

<hr>

<h2>Part 2.5: The Heitfolk (Optional Side Quest)</h2>

<h3>The Scout's Approach</h3>

<p>As the party travels north from the Steam-Oasis, moving through the mountain foothills toward the Throat of World, they notice movement on a high ledge—a small, compact figure watching them from perhaps 40 feet above. The figure does not flee, but neither does it approach. It is clearly observing the party, deciding whether they are a threat or potential allies.</p>

<p>If the party acts non-threateningly (sheathing weapons, speaking calmly, showing no aggression), the figure will eventually descend. This is @UUID[Actor.EqbUegeprUzE1G7R]{Bolverkt} (literally "trouble-work" in the old tongue—she was named this because she was expected to cause problems and has exceeded all expectations).</p>

<p><strong>Bolverkt</strong> is a <strong>Djúpdvergr</strong> (Deep-Dwarf) of perhaps 45 years old—young to middle-aged for her people. She is compact and dark-featured, with skin the color of deep umber, her features weathered by decades in firelight. She carries a forged axe of obvious quality and wears armor that, while ancient, is meticulously maintained.</p>

<p>Her accent is thick, her manner blunt to the point of rudeness, but there is no malice in her—only impatience.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><em>"You're headed north. That's stupid. But you're moving with purpose and you've got an ember-mark with you, and that's not stupid, so maybe you're just locally stupid rather than cosmically stupid."</em></p>
<p>She studies <strong>Kaelen</strong> with frank intensity.</p>
<p><em>"You're a Keeper, aren't you? Or what's left of them. We thought your kind was all dead in the Long Night."</em></p>
<p>She doesn't wait for an answer before continuing.</p>
<p><em>"I'm Bolverkt. I scout for Djúphol—that's the Deep-Hall, under the northern mountains, and the only place north of here that isn't trying actively to kill you. The Heitfolk live there. We've lived there for centuries while the surface world forgot we existed."</em></p>
<p>She pauses, and something that might almost be a smile crosses her face.</p>
<p><em>"The problem is, we're dying. Slowly. And if you're going north to do what I think you're going to do, you might be the solution. Or the last witnesses to our ending. Either way, you should come."</em></p>
</div>

<h3>The Offer and the Conditions</h3>

<p>@UUID[Actor.EqbUegeprUzE1G7R]{Bolverkt} will guide the party to <strong>Djúphol</strong> (the Deep-Hall) if they agree to two conditions:</p>

<ol>
<li><strong>No weapons drawn inside the settlement.</strong> The Heitfolk are not used to outsiders. A drawn sword will trigger panic and possibly violence. The party must trust that they are safe.</li>
<li><strong>They speak only to Hildvarð Bruneson, the Forgemaster.</strong> The settlement is not prepared for open contact. <strong>Bolverkt</strong> doesn't want rumors spreading or chaos. The Forgemaster will decide what information is shared.</li>
</ol>

<p>If the party agrees, <strong>Bolverkt</strong> leads them via hidden mountain passages (bypassing both the Throat of World and the worst of the surface crossing). The journey takes approximately 4-5 hours of steady travel through carved tunnels that are clearly ancient and carefully maintained.</p>

<h3>Djúphol: The Deep-Hall</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The tunnel opens into warmth.</p>
<p>Not gradually—suddenly. You step from cold stone passage into air that is <em>warm</em>, thick with moisture, heavy with the smell of hot metal and deep stone. The light changes too. Forge-light—orange and flickering, casting dancing shadows on carved stone walls. It smells alive.</p>
<p>The tunnel opens into a vast chamber, perhaps 200 feet across and 60 feet high, its ceiling lost in darkness above the reach of the firelight. The floor is carved smooth by countless feet, and structures line the walls: workshops, homes carved into the stone itself, all arranged in careful, precise order.</p>
<p>In the center of the chamber: three massive geothermal vents, heat rising in visible waves. The floor around them is scorched black. And in the center of the chamber: the <strong>Forge-Hall</strong>—a vast forge-complex, equipped with ancient tools and equipment of obvious mastercraft. Anvils. Bellows. Equipment for work that will never be completed.</p>
<p>People emerge to watch you pass. They are compact, dark-featured, their skin ranging from deep umber to grey-blue. Children cling to adults. The adults' expressions range from curiosity to fear. They recognize the ember-mark. They know what it means.</p>
<p>The warmth is incredible. For the first time since leaving Hrafnborg, the party is genuinely <em>warm</em>. The cold, which has been a constant companion, is absent. The comfort of it is almost painful—a reminder of what the world was like before the Fimbulwinter.</p>
<p>At the far end of the chamber, before the largest forge, stands a single figure. Massive by dwarf standards, with a face lined by age and grief. His eyes are focused and certain. This is @UUID[Actor.VDWwMniqZfw6wdMm]{Hildvarð} Bruneson, Forgemaster of Djúphol.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Hildvarð Bruneson</h4>
<p><strong>Age:</strong> 140 years old (middle-aged for a dwarf, but carrying the weight of decades of loss)</p>
<p><strong>Appearance:</strong> Massive and quiet. Wears the practical clothes of a smith—apron stained with decades of work, hands calloused and scarred by fire. His face is lined but not weak. His eyes are the most alive thing about him—observant, clear, forming conclusions that he acts on without explanation.</p>
<p><strong>Manner:</strong> Speaks rarely. When he does, it is with precision and authority. He does not waste words. He treats the party with respect but no warmth. This is not coldness, but practicality.</p>
<p><strong>Secret Grief:</strong> His son Bruni died three years ago when a lower vent collapsed—a cave-in he is directly responsible for failing to prevent. No one speaks of this, but it explains the bleakness that lives in his eyes. It explains why he will help the party—because he has already lost everything that mattered, and helping might give that loss meaning.</p>
</div>

<h3>The Greeting</h3>

<p>@UUID[Actor.VDWwMniqZfw6wdMm]{Hildvarð} approaches the party without ceremony. He does not bow or offer greeting gestures. He simply stops before them, regarding <strong>Kaelen</strong> directly.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><em>"You are the ones heading north. The ember-mark told us you were coming. We have felt you moving toward us through the deep places. The roots carry your warmth like a signal."</em></p>
<p>He pauses, his eyes never leaving <strong>Kaelen</strong>'s face.</p>
<p><em>"We have a problem. Your presence here suggests you have a solution. This is an exchange, not charity. I prefer exchanges. Charity implies pity, and I have no use for pity."</em></p>
<p>He gestures to the Forge-Hall, to the settlement beyond.</p>
<p><em>"The Heitfolk have survived by staying invisible. We have survived by maintaining what the First Keepers built—the vent-network, the warmth-ways that thread through the deep mountain. But the warmth is failing. The roots are failing. Something is poisoning them from deeper down. We call it the Rot. We have no idea what it truly is, only that it is consuming the deep places, and if it reaches the primary vents, Djúphol will become a tomb."</em></p>
<p>He continues, his voice never wavering.</p>
<p><em>"I believe you know what the Rot is. I believe you are going north to confront it. I have records—iron-plate records, carved by the First Keepers themselves—that describe how the old Keepers could redirect the root-warmth, could guide the deep fires away from corruption. You have the mark. You have the ability. That is what I see."</em></p>
<p>He steps closer, and when he speaks, his voice is very quiet.</p>
<p><em>"If you use that ability to help us, I will give you safe passage through the Heitfolk tunnel network. The tunnels emerge 12 miles north of where the Throat of World exits. On the sheltered side. This reduces your crossing time and spares you the worst of the blizzard. You will arrive at the threshold of Surt's Forge rested instead of broken."</em></p>
<p>He waits, then adds: <em>"But the work will exhaust you. The Keeper who walks the lower passages will need to spend Recoveries to complete the task. I will not lie about the cost. If you agree, understand what you are agreeing to."</em></p>
</div>

<h3>The Lower Passages: A Montage Test (Moderate Difficulty)</h3>

<p>If the party agrees, <strong>Kaelen</strong> will lead them into the lower passages of Djúphol, into the infected sections where the Rot is thick and active. This is presented as a <strong>Montage Test (Moderate, 2 rounds)</strong> with different character mechanics than typical survival montages—this is <em>repair and restoration</em> under pressure.</p>

<p>The Heitfolk provide maps carved into iron plates. The party must follow these maps, help <strong>Kaelen</strong> navigate the corrupted sections, protect her while she does dangerous work, and help her redirect the root-warmth back into healthy vent channels.</p>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Challenge</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Characteristic</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Description</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Clearing blockages</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Might or Reason</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The Rot has created physical blockages in the vent passages—tangled, blackened root-matter that is actively resisting. Physically clear the blockage or reason out a way to redirect flow around it. The work is heavy and repulsive.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Reading the vent network</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Reason or Intuition</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The iron-plate maps show the vent system, but the Rot has warped things. Understand the network's geometry, predict flow, anticipate where the blockages will create dangerous pressure buildups. One mistake could collapse a passage with everyone inside it.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Guiding Kaelen around the worst corruption</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Intuition or Agility</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The Rot is thick in some places, thin in others. Sense where it is thickest and guide <strong>Kaelen</strong> around it. The ember-mark hurts when exposed to concentrated corruption. Keep her path as clear as possible.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Keeping Kaelen grounded and focused</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Intuition</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The work is painful. The corruption tries to pull her attention, tries to make her falter. Keep her steady. Keep her focused. Keep her believing that the work will succeed. Speak to her strength, not her fear.</td>
</tr>
</table>

<h3>Round 1: Descending Into Corruption</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The lower passages are nothing like the Forge-Hall. The air here is thick, almost liquid, and it tastes wrong—sulfurous and sweet and rotten all at once. The light from your torches seems to be absorbed here, creating shadows that seem deeper than they should be.</p>
<p>The walls are scarred with black. The root-matter that lines the passages has turned black, and it writhes slightly—not with life, but with something that mimics life. It's obscene to look at directly.</p>
<p><strong>Kaelen</strong> steps forward, and her ember-mark flares. It's a reaction of instinct, a rejection of what surrounds her. She closes her eyes for a moment, gathering herself, then continues.</p>
<p><em>"This is what I can feel. This is what the world tastes like from inside the roots. This is the Rot working, consuming, replacing living wood with this... this mockery."</em></p>
<p>She opens her eyes, and they burn with amber light.</p>
<p><em>"Let's get to work."</em></p>
</div>

<p>Round 1 successes mean the party clears the first major blockage and establishes a safe working area. Round 1 failures mean the passage becomes unstable, forcing a careful retreat and choosing an alternate route (losing time and resources).</p>

<h3>Interlude: The Forge-Shrine</h3>

<p>Deep in the second passage, far from the Forge-Hall, the party finds a small shrine. The Heitfolk place these throughout their tunnels—offerings to the heat, to the deep powers, to the stone itself.</p>

<p>This one is still warm. An offering rests at its center: a small iron figure, crudely made, clearly the work of a child. It is still here. The Rot has not reached this place. Not yet.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>Someone made this. A child, by the look of it. Someone in this mountain took time, in a place where time might be running out, to make something beautiful. Something small and imperfect and full of hope.</p>
<p>And it's still here. Still warm. Still offered.</p>
<p>It breaks something in the silence of the moment.</p>
</div>

<h3>Round 2: Rerouting the Flow</h3>

<p>The final stage of the work: <strong>Kaelen</strong> must place her hands on the corrupted root-channels and <em>pull</em> the warmth away from the Rot-infected sections, guiding it into clean channels, back toward the healthy vents.</p>

<p>This is painful. Her ember-mark burns white-hot. The party witnesses her gasping, her hands trembling, but her will holding firm.</p>

<p>On success (more successes than failures), she reroutes 2 of the 3 critical warmth-channels. The Heitfolk's vents will run warm for approximately another year—buying them time to either find a permanent solution or prepare to abandon the settlement.</p>

<p>On failure (more failures than successes), she manages only 1 channel. The Heitfolk will have months, not years. @UUID[Actor.VDWwMniqZfw6wdMm]{Hildvarð}'s expression hardens further, but he honors the agreement nonetheless. He is, above all, practical.</p>

<h3>The Cost</h3>

<p><strong>Kaelen</strong> spends <strong>2 Recoveries</strong> to complete this work. When the montage ends, she is exhausted—drained in a way that normal rest will not immediately repair. She will recover, but not until after a full night's sleep in a place of safety.</p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ GM Secret: Kaelen's Growing Understanding</h4>
<p>Each time <strong>Kaelen</strong> uses her ember-mark to do difficult work, she understands more clearly what the Binding means. She has felt the world through the roots. She has felt the corruption and resisted it. She understands, more than ever, that the Keeper's role is not to manage flame, but to <em>become</em> the boundary between corruption and continuation.</p>
<p>She will not speak of this understanding to the party until Beat 19.</p>
</div>

<h3>Hildvarð's Farewell</h3>

<p>When the party emerges from the lower passages, exhausted and shaken, @UUID[Actor.VDWwMniqZfw6wdMm]{Hildvarð} greets them at the threshold. He looks at <strong>Kaelen</strong> with something that is almost—not quite—emotion.</p>

<p>He grips her arm. This is the closest the Heitfolk come to showing deep gratitude or respect. No words. Just the grip, firm and certain, then released.</p>

<p>He turns to the rest of the party and says simply: <em>"You carried her down. You brought her back. That is all that can be asked. The tunnels ahead are safe. They emerge on the northern approach. Bolverkt will guide you to the exit. Beyond that is Surt's Forge. Beyond that is whatever you are going to do."</em></p>

<p>Then he adds, as an afterthought: <em>"When you reach the Forge, know that the Heitfolk are watching. Not with eyes. But through the deep places. We will know if you succeed. We will know if you fail."</em></p>

<h3>The Tunnel Passage and the Gift</h3>

<p>@UUID[Actor.EqbUegeprUzE1G7R]{Bolverkt} guides the party through the Heitfolk tunnels toward the northern exit. The journey is warm, safe, and fast—a stark contrast to the surface crossing they will soon undertake.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The tunnels are ancient and maintained with meticulous care. The walls are carved with precision, the floor smooth and level. Torches burn in sconces, fed by oil that <strong>Bolverkt</strong> explains is rendered from deep-dwelling fungi that the Heitfolk cultivate.</p>
<p>You pass through chambers where families work—smithing, weaving, preserving food. Children stop and stare at you. Adults nod respectfully. There is no fear here, only quiet observation.</p>
<p>The air is warm throughout. The stone thrums with a deep, distant vibration—the heartbeat of the mountain, the pulse of the vents that keep this place alive.</p>
<p>As you walk, <strong>Bolverkt</strong> speaks more freely than she did before.</p>
<p><em>"Does the sun really shine like the old stories say? We have records, carved on plates, but no one alive has seen it. My grandmother's grandmother saw it once, before the Fimbulwinter. She couldn't describe it well enough for it to mean anything to us. How do you describe light without shadow to people who have lived their whole lives in firelight?"</em></p>
<p>She glances back at the party, and there is something almost vulnerable in her expression.</p>
<p><em>"If you succeed, if the Fimbulwinter truly ends, will you come back and tell us about the sun? So we can tell our children?"</em></p>
</div>

<p>The party exits the tunnels approximately 12 miles north of the Throat of World's exit point, and on the sheltered side of the mountain ridge. The weather is harsh, but not as brutal as it would have been on the exposed pass.</p>

<h3>The Gift From Hildvarð</h3>

<p>Before the party departs the Deep-Hall, @UUID[Actor.VDWwMniqZfw6wdMm]{Hildvarð} presents them with a final gift: @UUID[Item.2d3nqTnvxREshnZ2]{Hildvarð's Sealed Iron Canteen}, forged-welded shut, containing concentrated geothermal heat.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Hildvarð's Sealed Iron Canteen</h4>
<p><strong>Properties:</strong></p>
<ul>
<li>Contains enough warmth to keep one person comfortable through a full night in the open without consuming any Heat resource.</li>
<li>When opened (only at a moment of dire need), releases enough heat to warm an entire small space (a shelter, a cave, a tent) for several hours.</li>
<li>Once opened, the seal cannot be reforged. It is a one-use resource.</li>
<li>Forged with Heitfolk craftsmanship. It is beautiful, even sealed. Carved with symbols of hearth-fires and deep places.</li>
</ul>
<p><strong>The Gift:</strong> @UUID[Actor.VDWwMniqZfw6wdMm]{Hildvarð} places it directly into <strong>Kaelen</strong>'s hands. He says nothing except: <em>"For the keeper. When you need to remember what warmth is, when you need to remember what you're fighting for."</em></p>
</div>

<hr>

<h2>Part 3: The Throat of World Passage</h2>

<h3>The Geography</h3>

<p>The Throat of World (row 9, col 23) is a mountain pass that connects the interior plateau to the far northern reaches where the White Waste begins. It is:</p>

<ul>
<li><strong>Narrow:</strong> Perhaps 200 yards across at its widest point, between two ridges that rise to 40+ feet high.</li>
<li><strong>Exposed:</strong> No shelter, no protection from wind.</li>
<li><strong>Notorious for blizzards:</strong> The pass channels wind and creates localized whiteout conditions.</li>
<li><strong>The last barrier:</strong> Beyond the Throat lies the true north—Surt's Forge, the Emberwell, and the highest reaches of Svellheim.</li>
</ul>

<h3>The Blizzard Montage (Hard Montage Test)</h3>

<p>Crossing the Throat of World is a <strong>Hard Montage Test</strong> (2 rounds) representing the danger of the blizzard crossing:</p>

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

<h3>Round 1 Sample Tests</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Challenge</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Characteristic</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Description</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Entering the maelstrom</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Intuition</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Stay calm and keep direction as the blizzard hits suddenly, without warning. Visibility drops to 10 feet. Resist panic. Maintain bearing. Do not separate from the group.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Resist the initial shock</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Might or Presence</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The cold hits like a physical blow. The wind tries to knock you off your feet. Push through the shock. Plant yourself. Keep moving forward, not backward.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Tether the group together</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Reason</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Rope everyone together. Establish signals. Prepare for conditions where you cannot see the person next to you. Keep cohesion. Keep bonds strong.</td>
</tr>
</table>

<h3>Round 1 Interlude: The Blizzard Closes In</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The blizzard hits like a hand closing.</p>
<p>One moment, you can see the path ahead, the dark rocks of the Throat of World visible against the white sky. The next moment, snow is everywhere, moving horizontally, driven by wind that tries to tear you backward.</p>
<p>Visibility drops to arm's length. Then to chest-length. Then you're walking blind, feeling your way forward by rope and faith.</p>
<p>The wind screams. It's not wind. It sounds like something vast and hungry, trying to swallow you whole.</p>
<p>Your breath freezes in your chest. Your eyes water—ice crystals form on your eyelashes. Your fingers, even in gloves, burn with cold that feels like fire.</p>
<p>And all around you: white. Nothing but white. The world has ended and been replaced with this—this killing cold, this endless storm, this place where no living thing is meant to go.</p>
</div>

<p>The blizzard is not a simple difficulty. It is a malevolent force, trying to separate, freeze, and kill the party. Minute by minute, the cold is draining warmth, draining strength, draining hope.</p>

<h3>Round 2 Sample Tests</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Challenge</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Characteristic</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Description</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Navigate blind through the white-out</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Reason or Intuition</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The landscape is invisible. The sky is invisible. Direction becomes meaningless. Navigate by instinct, by memory of the path, by the faint wind patterns. One mistake means walking off a cliff or going in circles.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Remember your purpose and push forward</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Might</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Exhaustion and cold-sickness are setting in. The mind wants to sleep. The body wants to stop. Push through it. Remember why you're doing this. Refuse to quit. Refuse to lie down in the snow.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Maintain the group's psychological state</strong></td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Presence or Intuition</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">Despair is spreading. Someone wants to stop, to find shelter, to give up. Keep them moving. Give them a reason to believe they can survive this. Speak to their hope. Speak to their fear of what stops here means for those waiting at home.</td>
</tr>
</table>

<h3>Round 2 Interlude: The False Clarity</h3>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>For five minutes—maybe less, maybe more, time is meaningless in the white—the storm lifts.</p>
<p>It's not gone. It's still howling around you. But the snow parts, and suddenly you can see.</p>
<p>You're on the high plateau. Visible in the distance: Surt's Forge. The structure of dark stone, built into the side of a plateau, glowing with warmth. Even from this distance—a mile, maybe more—you can see the shimmering air around it, the way the snow melts nearby, the faint amber glow visible even in daylight.</p>
<p>It's real. It's <em>there</em>. Within reach.</p>
<p>Then the snow comes back. The white closes in again. The visibility drops. But now you know you're close. Surt's Forge is real. The Emberwell is not a myth. You're so close that you can almost feel its warmth.</p>
<p>That knowledge gives you strength. Or it breaks your will with false hope. Either way, you push onward.</p>
</div>

<p>The party is halfway through. They can see the goal. But the Throat still has teeth, and they haven't fully escaped yet.</p>

<h3>Montage Outcomes</h3>

<table style="width:100%; border-collapse:collapse; margin:12px 0; color:#2a2a2a; background:#faf8f2;">
<tr style="background:#e8e0d0; color:#2a2a2a;">
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Result</th>
<th style="padding:8px 10px; text-align:left; border-bottom:2px solid #c4a03c;">Outcome</th>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Hard Success</strong> (5+ successes, 0 failures)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The party crosses the Throat in excellent time (2–3 hours). The blizzard barely touches them. They arrive at the plateau exit tired but unharmed, with strength reserves intact. <strong>Kaelen</strong> feels the Forge's warmth immediately—a sign of favor.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Success</strong> (more successes than failures)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The party crosses in 4–6 hours, fighting the blizzard. Minor injuries (frostbite, cold damage) and exhaustion, but they're through. They emerge onto the plateau shaken but alive.</td>
</tr>
<tr style="background:#f5f0e6; color:#2a2a2a;">
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Failure</strong> (more failures than successes)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The party spends most of a full day in the Throat. Exhausted, injured (cold damage applies to all), and losing significant Heat. One party member is at risk of succumbing to exposure. They reach the plateau exit barely conscious.</td>
</tr>
<tr>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;"><strong>Hard Failure</strong> (all failures)</td>
<td style="padding:8px 10px; border-bottom:1px solid #ddd;">The party is lost in the blizzard for 1–2 days, on the edge of freezing to death. They find shelter in a cave or crevasse and must rest. Critical healing and supplies are consumed to keep anyone alive. They reach the plateau exit days later, weak and desperate.</td>
</tr>
</table>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Failure Consequence: Trapped in the Throat</h4>
<p>If the party fails to cross the Throat of World, they are caught in a whiteout with limited visibility and crushing wind. Use this as a turning point: they must find shelter or risk death. The landscape becomes hostile. Grafvitnir's servants may pursue, taking advantage of the chaos.</p>
</div>

<h3>Breaking Through the Throat</h3>

<p>When the party finally exits the Throat of World and sees what lies beyond, read:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The blizzard suddenly stops.</p>
<p>Not gradually—<em>suddenly</em>. As if you've passed through an invisible barrier. The wind drops. The snow stops swirling. And you can see.</p>
<p>You are standing on a high plateau, looking down on a landscape that is alien even by the standards of the far north.</p>
<p>To the south: the Throat of World behind you, a dark pass in the white-covered mountains.</p>
<p>To the north: a wasteland of white and gray. The White Waste—a truly barren glacial plain, unmarked by geography or life.</p>
<p>But in between: Surt's Forge. A structure of dark stone, built into the side of a plateau a mile north of where you stand. Even from this distance, you can see that it is vast. Ancient. And there is warmth radiating from it—visible in the shimmering air, in the way the snow melts slightly nearby, in the faint amber glow visible even in daylight.</p>
<p><strong>Kaelen</strong> steps forward. Her hand is at her chest, over her heart.</p>
<p><em>"Surt's Forge,"</em> she whispers. <em>"I can feel it. The old wards are still active. There is flame there—real flame, older than the Ever-Embers, from the time before time was properly counted."</em></p>
<p>She turns to you, and there are tears on her face—though whether from cold or emotion is unclear.</p>
<p><em>"We're here. We've made it."</em></p>
<p>And ahead, just visible through the amber haze: deeper north, beyond Surt's Forge, the landscape descends. That is where the Emberwell lies. 24 miles away. One final day's journey.</p>
</div>

<hr>

<h2>Part 4: The Final Preparation</h2>

<h3>Resting at the Plateau</h3>

<p>The party likely needs to rest before moving on to Surt's Forge. The Throat crossing has been exhausting.</p>

<p>They can camp at the plateau's edge. The warmth from Surt's Forge provides some Heat, though not as much as the Oasis.</p>

<h3>Kaelen's Final Moment</h3>

<p>As the party rests at the plateau edge, <strong>Kaelen</strong> goes to look down at Surt's Forge. She speaks, softly at first:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><em>"The First Keepers built Surt's Forge as an approach station. A place where Keepers could rest before descending to the Emberwell. There is fire there that has burned for millennia without being tended. It is the last of the old works, the last place where the Keepers' will still shapes the world."</em></p>
<p>She pauses, then:</p>
<p><em>"When I walk down to Surt's Forge, when I cross that threshold, I will be entering the Keeper-domain. The places where the oaths were sworn, where the rituals were learned, where the knowledge was kept."</em></p>
<p>Her voice becomes very steady:</p>
<p><em>"I know what I have to do. I've known since the Ivory Tower. I just didn't want to believe it."</em></p>
<p>She looks at the party, and her eyes are clear:</p>
<p><em>"When we reach the Emberwell, I will need you to trust me. Whatever happens—however it looks, however it seems—you have to trust that I know what I'm doing."</em></p>
</div>

<p>This is <strong>Kaelen</strong>'s final hint before Beat 19. She is not asking for permission. She is asking for faith.</p>

<hr>

<h2>Ending Beat 17</h2>

<ol>
<li><strong>Rested and resupplied</strong> for the final push.</li>
<li><strong>Having crossed the Throat of World</strong> and survived the blizzard.</li>
<li><strong>Able to see Surt's Forge ahead</strong>, visible and real.</li>
<li><strong>Understanding that Kaelen knows something they don't</strong>, and that she is committed to something beyond their full comprehension.</li>
<li><strong>One day's journey from the Emberwell.</strong></li>
</ol>

<p>The party is on the threshold of the climax. Everything they have done has led to this moment. The world is watching, in the form of Rickety Frets's oath, the Jarl's hope, Gragnir's sacrifice, and <strong>Kaelen</strong>'s burden.</p>

<p>The final two beats will determine the fate of Svellheim.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Pacing and Tone Shift</h4>
<p>This beat can be broken into two sessions: one for the Oasis (rest and preparation), one for the Throat of World and the final approach. The mood should shift from "escape and survival" to "approaching destiny" and "mounting dread about what comes next."</p>
<p>After this beat, Heat should be nearly irrelevant. The party is at the final destination. Heat will stop being a concern and will be replaced by narrative and emotional pressure.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Kaelen's Isolation and Burden</h4>
<p>She is carrying the weight of her knowledge alone. The party senses something is wrong, but they don't understand. This tension should be palpable. Make it clear through her words and actions that she has already accepted something the party has not yet grasped.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 The Beauty of the Oasis and Foreshadowing</h4>
<p>Use the Oasis to create a moment of respite and wonder. The campaign has been grim and dark. A moment of warmth and beauty can make the final tragedy more poignant. Make Surt's Forge visible and real. Make the Emberwell a concept the party can now envision. Make it feel close.</p>
<p>If you include inhabitants at the Oasis, give them a moment of humanity before the party leaves. They are people trying to survive in an impossible world, and the party's success or failure affects their fate.</p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Oaths Come Due</h4>
<p>The full weight of the party's oaths is now visible. Review the complete list with your players:</p>
<ul>
<li><strong>Gragnir's Root-Oath (Beat 8):</strong> Serve the roots above the crown. Conflicts with Konungs-ferð loyalty.</li>
<li><strong>Rickety Frets's Three Demands (Beat 12):</strong> Witness. Word. The Bundingsteinn.</li>
<li><strong>Vigmund's Advocacy Oath (Beat 13):</strong> Send word. Advocate for Rindgate's refugees at Hrafnborg.</li>
<li><strong>The Archive Oath (Beat 15):</strong> Keeper knowledge only for restoration, not weaponized against the living.</li>
<li><strong>Thyra's Oath of Silence (Beat 17):</strong> Never reveal the Oasis's location — directly conflicting with Vigmund's refugee oath.</li>
</ul>
<p>The Silence-Advocacy collision is the sharpest conflict. The party knows about a warm refuge that could save Vigmund's people, and they have sworn not to speak of it. There is no clean way through. Let the players feel the weight.</p>
</div>`;

fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 17 content updated (' + page.text.content.length + ' characters)');
