const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal-Part-2.journal.json');
const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

const pageId = '7V852nX76rY6WurW';
const page = journal.pages.find(p => p._id === pageId);
if (!page) { console.error('Page not found: ' + pageId); process.exit(1); }

page.text.content = `<p><strong>Level:</strong> 4–5<br>
<strong>Duration:</strong> 1–2 sessions<br>
<strong>Location:</strong> The Ivory Tower (row 17, col 31); the Keepers' archive<br>
<strong>Key NPCs:</strong> Kaelen (discovering her destiny), ancient Keeper spirits (optional), Dreyfus's lingering presence<br>
<strong>Type:</strong> Exploration and investigation, minor encounter (guardian construct or Wyrd-haunting), lore revelation, character revelation, preparation<br>
<strong>Tone:</strong> Awe and dread; the weight of knowledge; a meeting with the past; the moment Kaelen understands what is being asked of her</p>

<hr>

<h2>Overview</h2>

<p>The Ivory Tower is an ancient, bone-white structure built from the bones of some long-dead creature (a Jotun? A proto-world entity?). It stands at the edge of the Bone-Fields, a solitary landmark of pale stone against the white snow.</p>

<p>It was built by the original Keepers as an archive—a repository of their knowledge, their rites, their understanding of how to work with Yggdrasil and the Ever-Embers.</p>

<p>The tower is abandoned now. One room shows evidence of violence—one of the Six Keepers died here months ago, killed by Dreyfus before he went after the rest. The archive is partially corrupted by the Rot, partially preserved by the Keepers' wards.</p>

<p>Most importantly, the tower contains records that will make <strong>Kaelen</strong> understand what the Emberwell requires of her. Not all the details—the party cannot piece together the full picture—but enough for Kaelen to suspect, and enough for her to become quietly terrified.</p>

<p>By the end of this beat, <strong>Kaelen</strong> knows (or strongly suspects) that she is meant to become the new Ever-Ember. She will not share this knowledge fully. She will carry it alone, as the weight grows heavier with every mile north.</p>

<hr>

<h2>Part 1: The Approach to the Tower</h2>

<h3>Geography and Appearance</h3>

<p>The Ivory Tower rises from a rocky prominence about 3 miles northeast of the party's position in the Bone-Fields. From a distance, it is pale—almost white—against the dark sky. As the party approaches, they can see:</p>

<ul>
<li>The tower itself is a single, elegant spiraling structure, perhaps 60 feet tall. It has no windows in the lower half, only stone. Higher up, small apertures suggest windows or vents. At the very top, a flat platform with what might be a beacon.</li>
<li>The tower is clearly built from enormous bones—ribs, vertebrae, other structures the party doesn't immediately recognize. They've been worked, carved, fitted together with precision. It's architecture made from a corpse.</li>
<li>At the base is a small enclosure—walls of fitted stone, perhaps a few rooms or storage chambers. These are more recent (built within the last 500 years), not as ancient as the tower itself.</li>
<li>Smoke has not risen from this place in months. But as the party approaches, they can feel something—a presence, a lingering warmth in the stones themselves, a sense that this place is not entirely dead.</li>
</ul>

<h3>Entering the Tower</h3>

<p>The door is carved from stone and is heavy. It's not locked, but it's stiff from disuse. Once the party pushes it open, they are in a small vestibule. The air here is cool but not cold. The party will need to use torches or light sources.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The door opens onto darkness.</p>
<p>But as you step inside, something shifts. The stone beneath your feet is warm. Not hot, but warmth—real, felt warmth—spreading through the soles of your boots. And if you look closely, you can see faint lines carved into the floor, glowing with a soft blue light. Wards. Ancient wards, still active, still burning with something that might be the last spark of Keeper magic.</p>
<p>The vestibule is small, octagonal, with passages leading in four directions. Above, the tower rises. You can see spiral stairs ascending into shadow.</p>
<p>And on the floor, in the center of the room: scorch marks. Black, charred stone. And bones—human bones, scattered and broken. Some of them show the marks of violence—claw marks, burn marks, the kind of damage that comes from a fierce struggle.</p>
<p>Someone died here. Not long ago. Within the last few months, perhaps.</p>
<p><strong>Kaelen</strong> approaches the bones slowly. She kneels beside them and is very still.</p>
<p><em>"She was a Keeper,"</em> Kaelen says quietly. <em>"I can feel it. The wards are responding to her death. They're still mourning. The tower itself is mourning."</em></p>
</div>

<h3>Guardian Encounter (Optional)</h3>

<p>The party may encounter a guardian construct or a Wyrd-haunting here. This should be minor—not a full combat, but a test or a challenge that can be overcome through negotiation, understanding, or a single combat encounter.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Option 1: Guardian Construct Encounter</h4>
<p><em>Minor Encounter</em></p>
<p>A stone figure, humanoid, carved in the style of ancient Keeper craftsmanship. It was created to defend the archive. It is half-corrupted by the Rot—part of its stone face is blackened and cracking.</p>
<p>It does not attack immediately. It simply bars the way, watching. A moderate Presence test will reveal that it is asking a question—not in words, but in the pressure of its gaze: <em>"Are you a Keeper? Are you a friend of the Keepers?"</em></p>
<ul>
<li><strong>If answered truthfully (Kaelen is a Keeper):</strong> The construct steps aside. Passage is granted.</li>
<li><strong>If deceived:</strong> The construct attacks (easy combat, 1 round, then the party can retreat or overcome it).</li>
</ul>
<p>Use the @UUID[Actor.pCvMQr6nRUKsXK8F]{Keeper Guardian Construct} stat block if combat occurs.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Option 2: Wyrd-Haunting Encounter</h4>
<p><em>Atmospheric Encounter</em></p>
<p>A trapped emotional echo. The last moments of the slain Keeper, replaying.</p>
<p>The party sees, in translucent form, a woman (Keeper Soren) being attacked by something with golden eyes and terrible claws (Dreyfus in his true form). The vision is not violent toward the party—it's simply replaying over and over.</p>
<p>A moderate Presence test will allow the party to understand what they're witnessing and to move past it without harm. <strong>Kaelen</strong>, if she witnesses this, becomes very still. She recognizes the form attacking—it matches Gragnir's description of Dreyfus.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Recommendation</h4>
<p>Use Option 1 or 2. They add atmosphere and poignancy without requiring a full combat. They also emphasize that the tower is a place of loss.</p>
</div>

<hr>

<h2>Part 2: Exploring the Archive</h2>

<h3>The Tower's Layout</h3>

<p>The tower has several levels:</p>

<p><strong>Ground level:</strong> The vestibule (where they entered). Passages lead to:</p>
<ul>
<li><strong>West passage:</strong> Storage rooms. Mostly empty. Some ancient sealed containers (unopened for centuries).</li>
<li><strong>North passage:</strong> The violence chamber. Evidence of Dreyfus's attack. The bones of the slain Keeper.</li>
<li><strong>East passage:</strong> Stairs descending to an underground chamber (flooded, not accessible without swimming or wading through cold water).</li>
<li><strong>South passage:</strong> Stairs spiraling upward into the tower.</li>
</ul>

<p><strong>Upper levels:</strong> (Accessed by the spiral stairs)</p>
<ul>
<li><strong>Second level:</strong> More storage. Shelves lined with tablets, scrolls (mostly preserved, some damaged).</li>
<li><strong>Third level:</strong> A reading chamber. Desks, tablets organized by theme. Windows here provide light (if the party arrives during daylight).</li>
<li><strong>Fourth level:</strong> The primary archive. This is the heart of the tower. Thousands of tablets. Careful organization. Records of Keeper knowledge, rites, histories.</li>
<li><strong>Fifth level:</strong> The beacon chamber. An open platform. A view of the surrounding land. It is very cold here.</li>
</ul>

<h3>The Violence Chamber (North Passage)</h3>

<p>The party will likely encounter this first. It is disturbing and informative.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The north passage opens into a larger chamber—perhaps 20 feet across, round, with a domed ceiling. The floor is covered in scorch marks, blackened stone, and debris.</p>
<p>In the center, scattered across the floor: bones. Human bones, but also something else. Claw marks gouged into the stone itself—deep, deliberate claw marks that suggest something with strength far beyond human.</p>
<p>There are tablets here, scattered and broken. Some are inscribed with text that <strong>Kaelen</strong> recognizes as Keeper runes.</p>
<p>And on one wall, written in ash or soot: a symbol. A claw mark, so large that it must have been made by something standing 8+ feet tall. It's a message, or a claim. A mark left by something that wanted to be known.</p>
<p><strong>Kaelen</strong> kneels beside the scattered bones. Her hand shakes as she picks up a tablet—one of the few that's still relatively intact.</p>
<p>She reads it silently, her face growing paler with each moment. When she sets it down, she doesn't look at the party.</p>
<p><em>"Dreyfus was here. He killed her—Soren, her name was. Soren Keeper. She came to the archive to hide the records, to preserve them from something. But Dreyfus found her. He tracked her here."</em></p>
<p><strong>Kaelen</strong>'s voice is very quiet.</p>
<p><em>"He carved his mark on the wall. A message to whoever came after. 'I was here. I know what you're protecting.'"</em></p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: Evidence of Dreyfus's Knowledge</h4>
<ol>
<li><strong>Dreyfus was here months ago</strong> (when he was killing the other Keepers—consistent with Act 1 lore).</li>
<li><strong>Soren died defending the archive</strong>, though she failed to stop Dreyfus.</li>
<li><strong>Dreyfus knows what's in the tower.</strong> He's seen the records. He's told Grafvitnir everything.</li>
<li><strong>The tower was a sanctuary,</strong> but it wasn't safe. Nowhere is safe from Grafvitnir's agents.</li>
</ol>
</div>

<h3>The Ward-Oath (Fourth Level Threshold)</h3>

<p>The staircase to the fourth level is intact, but the landing at the top is not empty. The air here is different — warmer, drier, and it hums with a low vibration that <strong>Kaelen</strong> recognizes immediately.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The stairs end at a broad landing. The door to the fourth level is open — it has no physical lock, no bar, no mechanism. But the air in front of it shimmers like heat-haze over summer stone.</p>
<p><strong>Kaelen</strong> stops. She raises a hand, not to touch the shimmer, but to feel it.</p>
<p><em>"Keeper wards. Active ones."</em> Her voice carries a mixture of relief and dread. <em>"The archive has been sealed since Soren died. The wards survived because they don't need a living Keeper to maintain them — they were carved into the stone itself, powered by the tower's residual heat."</em></p>
<p>As the party approaches, the shimmer intensifies. A sound fills the landing — not a voice, exactly, but the impression of words, like reading text carved in light:</p>
<p><strong><em>I who enter this archive swear that the knowledge within shall be used only to restore and defend the Ever-Embers. I shall not bear this knowledge as a weapon against the living. I shall not share what I learn with those who serve the Grave-Wolf or his agents. What I take from this place, I carry as a trust, not a tool.</em></strong></p>
<p>The words hang in the air. Waiting.</p>
</div>

<p><strong>Kaelen</strong> recognizes the protocol. <em>"The old Keepers built this into every major archive. You cannot enter without speaking the oath aloud. The wards will know if you're lying — they read intent, not just words."</em></p>

<p><strong>If the party speaks the oath aloud and means it:</strong> The shimmer parts like a curtain. The archive opens.</p>

<p><strong>If the party refuses or tries to deceive the wards:</strong> The shimmer solidifies into a barrier of pale heat. No passage. Kaelen can still access fragments from the lower levels — scattered tablets, incomplete records — but the full archive, including the First Kindling rite, remains sealed.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Director Note: The Archive Oath's Constraints</h4>
<p>This oath has teeth. It constrains the party in specific, meaningful ways:</p>
<ul>
<li><strong>"Not as a weapon against the living":</strong> The Pale Maw's soldiers are living people — not undead, not monsters. If the party learns tactical information from the archive (troop movements, supply routes, Grafvitnir's plans), the oath prevents them from using it to harm living soldiers. They can defend themselves if attacked, but they cannot weaponize Keeper intelligence against mortal armies. This forces creative problem-solving in Act 3.</li>
<li><strong>"Not share with those who serve the Grave-Wolf":</strong> Straightforward, but note — the party may not always know who serves Grafvitnir. Dreyfus fooled them once. The oath punishes carelessness as well as betrayal.</li>
<li><strong>Word economy:</strong> Breaking the archive oath costs 2 Word permanently and causes the knowledge itself to become unreliable — facts blur, details shift, as if the wards are reaching across distance to reclaim what was taken in bad faith. This is a <em>narrative</em> consequence, not just a mechanical one.</li>
</ul>
<p>If the party swore Gragnir's Root-Oath in Beat 8, the archive oath reinforces it — both prioritize Yggdrasil's renewal over political advantage. If they didn't swear the Root-Oath, the archive oath stands alone as a check on how they use Keeper knowledge.</p>
</div>

<h3>The Primary Archive (Fourth Level)</h3>

<p>This is where <strong>Kaelen</strong> makes her discovery.</p>

<p>The fourth level is a vast circular chamber — the inside of the tower is larger than the outside suggests, which means it extends partway underground or has some spatial oddity created by Keeper craft.</p>

<p>The walls are lined with shelves. The shelves are covered with tablets: thousands of them, organized by theme and by era. Some are ancient (carved in archaic Keeper runes that Kaelen barely recognizes). Some are recent (within the last 100 years).</p>

<p>There is a writing desk in the center of the chamber. Recent work is scattered there — tablets in progress, notes, a half-finished chronicle.</p>

<h3>Kaelen's Discovery</h3>

<p>If the party gives <strong>Kaelen</strong> time to explore (at least an hour), she will find something specific.</p>

<p>She will locate a section labeled—in careful script—<em>The First Kindling: The Original Rite</em>.</p>

<p>This is a text that Kaelen has only read in abbreviated form. But here, in the archive, is the full version. Original, carved by one of the First Keepers.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">Archive Fragment: The Willing Anchor</h4>
<p><em>From The First Kindling: The Original Rite</em></p>
<p>The original rite describes the process of creating the Ever-Embers. It requires:</p>
<ol>
<li>A source of flame—something from Muspelheim itself, or touched by Muspelheim's fire.</li>
<li>A living anchor—a human being who is willing to join with the flame, to become its vessel.</li>
<li>A binding oath—witnessed by the World-Tree and the spirits of the land.</li>
</ol>
<p>The text describes what happens to the anchor:</p>
<blockquote style="border-left:4px solid #c4a03c; padding:8px 14px; font-style:italic; color:#5a5a3a; background:#ede8d8; margin:8px 0;">
<p>"The one who takes the flame into their body becomes the Ever-Ember. They do not die, but they do not live as others live. They become the hearth itself—their warmth is the world's warmth. Their breath is the fire's breath. If they are wounded, the fire flickers. If they are desperate, the world grows cold. Their life is not their own; it belongs to all who shelter by the flame."</p>
<p>"The anchor does not leave their post. The first anchor, Sigrid, remained in the deep chambers of the first tower for 300 years. She did not age. She did not weaken. She simply was. She was the Ever-Ember, and as long as she stood at her post, the world was warm.</p>
<p>"When at last Sigrid could no longer maintain the flame—whether from weariness or from choice, the records do not say—she released the fire to a successor. And she transformed. Her body became stone. Her warmth became the warmth of the hearth-chamber itself. She gave everything to the anchor that followed."</p>
<p>"A Keeper must understand this from the first day of training: you are learning to be a witness and a guardian, not a wielder. The flame does not serve the Keeper. The Keeper serves the flame. And when the time comes, if it comes, you may be asked to give more than your service. You may be asked to give yourself."</p>
</blockquote>
<p><em>Marginal note in recent hand:</em></p>
<blockquote style="border-left:4px solid #cc3333; padding:8px 14px; font-style:italic; color:#5a3a3a; background:#ede0d8; margin:8px 0;">
<p>"Kaelen came to us with the false shame of warming one village. But she does not understand what she was created for. The tree has marked her. The fire knows her name. She will understand, in time, that her exile was not a punishment. It was a preparation. When the Emberwell calls, she must answer. Not because we ask. But because she is the last. And the last must give everything."</p>
</blockquote>
</div>

<h3>Kaelen's Reaction</h3>

<p>When <strong>Kaelen</strong> finishes reading this, she is quiet for a very long time.</p>

<p>Her hands are shaking. Her face is pale. She sets the tablet down very carefully, as if it might shatter.</p>

<p>Then she stands, and without speaking, she goes to the window and looks out toward the north. Toward Surt's Forge. Toward the Emberwell.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>If the party asks her what she's found, she does not answer immediately. When she does, her voice is measured but tight:</p>
<p>"The Keeper training texts say that the anchor—the one who becomes the Ever-Ember—doesn't leave their post. They stay, and they keep the world warm. I thought they meant it metaphorically. I thought it was ritual."</p>
<p>She turns back to the party.</p>
<p>"But they meant it literally. The first Keeper, Sigrid, stood in the same place for 300 years. Without moving. Her body became stone. She became the hearth itself."</p>
<p><strong>Kaelen</strong>'s voice is very steady now, but underneath there is fear:</p>
<p>"That's what the Emberwell is. It's not a place where you light a flame and it burns forever. It's a place where someone stands, and as long as they stand there, the flame burns. And when they can't anymore... they give it to someone else."</p>
<p>She does not say the next part explicitly. But it hangs in the air:</p>
<p><em>And I am the last Keeper. And Yggdrasil is dying. So when I reach the Emberwell, I will have to be the one who stands.</em></p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: Kaelen's Layer 2 Realization</h4>
<p>Kaelen does NOT tell the party the full implication. She suspects. She understands. But she does not share what she now knows. She carries this knowledge alone, as her burden.</p>
<p>If the party presses her, she might say: "I need to think about what I've read. I need to understand the rite completely before we go further. But everything I've been trained for... I think I finally understand what I've been trained for."</p>
<p>And then she becomes quiet, withdrawn. She may not sleep well that night.</p>
<p>This is the moment when Kaelen transitions from reluctant guide to someone carrying an impossible burden. The party should sense the change but not fully understand it.</p>
</div>

<hr>

<h2>Part 3: Other Discoveries in the Archive</h2>

<h3>Maps and Records</h3>

<p>The archive contains:</p>

<ol>
<li><strong>Maps of the Emberwell approach:</strong> Detailed maps showing the route from Surt's Forge down into the Emberwell chamber. This is useful for Beats 18-19. The party can copy or memorize these.</li>
<li><strong>Records of previous Keepers:</strong> Biographical sketches of the Seven Keepers, going back centuries. Kaelen will recognize some of their names from her training. She will realize that the tradition goes much deeper and longer than she thought.</li>
<li><strong>The administrative history:</strong> Records of how the Keepers maintained their order, how they trained successors, how they kept the rites alive. This is useful context but not immediately actionable.</li>
<li><strong>Evidence of Dreyfus's presence:</strong> Claw marks on some tablets, scorch marks on others. A few tablets are destroyed beyond reading. Kaelen can determine that Dreyfus read the archive before destroying parts of it. He took knowledge. He learned.</li>
</ol>

<h3>The Unfinished Chronicle</h3>

<p>The writing desk holds a half-finished chronicle written in what appears to be Soren Keeper's hand. It dates from the weeks before her death.</p>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: Soren's Final Words</h4>
<p><em>Excerpts from the unfinished chronicle:</em></p>
<blockquote style="border-left:4px solid #cc3333; padding:8px 14px; font-style:italic; color:#e0d0c0; margin:8px 0;">
<p>"The Rot spreads faster now. I have felt it moving through the deep roots. It is not random. There is intelligence directing it. Grafvitnir's work, surely.</p>
<p>"I came to the archive to preserve the records of the First Kindling. If the end comes—if the Keepers fall and the flame dies—someone must know how it was done. Someone must know what was sacrificed.</p>
<p>"There is a note in the oldest texts, written by Sigrid herself: 'When the world needs renewal, the last Keeper will know what to do.' Sigrid lived 300 years. I wonder if she knew she was the last.</p>
<p>"Kaelen is still in exile in her grove. I have not told her the truth—that we do not blame her, that she was not as broken as she believed. I wanted her to have peace for at least a few more years.</p>
<p>"But if Grafvitnir continues to move as he is moving, we may not have years. The root-anchor in the north may fall within months. And if the northern anchor fails, the Emberwell will open.</p>
<p>"That is Kaelen. It has always been Kaelen. She is the last. The tree chose her. And she must choose what comes next."</p>
</blockquote>
<p><strong>What the party understands:</strong></p>
<ol>
<li>Soren knew the end was coming.</li>
<li>Soren knew that Kaelen was destined for something.</li>
<li>Soren died trying to preserve knowledge for whoever would come after.</li>
</ol>
<p>This is heavy. This is funeral rites for someone the party never met, but who died trying to help them.</p>
</div>

<hr>

<h2>Part 4: Rest and Preparation</h2>

<h3>The Warmth of the Tower</h3>

<p>The tower, despite being abandoned, is warm. The Keeper wards maintain a temperature that is, while cold by summer standards, genuinely heated compared to the outside world.</p>

<p>The party can rest here safely. Heat cost is reduced significantly (the tower provides natural warmth). If they rest for the night, they can recover Stamina and prepare for the final push north.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">What the Tower Provides</h4>
<ul>
<li><strong>Preserved food:</strong> In sealed containers in the storage rooms. Dried fish, salted meat, dried fruits. Enough to provision the party for several more days.</li>
<li><strong>Alchemical preparations:</strong> Medicines, stimulants, potions. Useful for recovery and for pushing through exhaustion.</li>
<li><strong>Writing materials:</strong> If anyone wants to leave a message or a record.</li>
<li><strong>Historical texts:</strong> The party can take tablets if they wish, but weight becomes an issue.</li>
</ul>
<p>The Keepers were prepared for long-term isolation. They left provisions.</p>
</div>

<h3>Optional: Leaving a Message</h3>

<p>The party might decide to leave a message in the archive. If they do, make it meaningful. What do they want to tell whoever comes after?</p>

<p>Some possibilities:</p>

<ul>
<li><em>"Kaelen Keeper has passed this way. She carries the hope of Svellheim north. If she succeeds, the world continues. If she fails... remember that she tried."</em></li>
<li><em>"We have read Soren's chronicle. We understand what she died trying to preserve. Kaelen knows now. The burden is heavy, but she is strong."</em></li>
</ul>

<p>Messages can be brief or detailed. They become part of the historical record of the campaign.</p>

<hr>

<h2>Part 5: The Departure</h2>

<h3>Kaelen's Final Words</h3>

<p>As the party prepares to leave the tower and continue north, <strong>Kaelen</strong> may take a moment at the threshold to look back.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>"The Keepers spent their lives guarding these records, guarding the knowledge. They died, one by one, and no one came. Until now. Until us."</p>
<p>She pauses, then:</p>
<p>"We have to succeed. Not just for Hrafnborg. Not just for the people of Svellheim. For them. For Soren, for the ones who came before her, for everyone who ever stood at the hearth and kept the flame alive. We have to reach the Emberwell. We have to renew the spark."</p>
<p>This is as close as she comes to admitting what she now knows—that the renewal might cost her everything.</p>
</div>

<h3>Pointing North</h3>

<p>From the tower's height, the party can see north. The landscape gradually rises, becoming more mountainous. In the distance (if the weather is clear), they might see the distant glow of Surt's Forge—a warm amber light in the frozen darkness.</p>

<p>Surt's Forge is perhaps 40-50 miles away. 3-4 days of hard travel.</p>

<p>Beyond it, hidden, is the Emberwell.</p>

<p>The party's journey is entering its final phase.</p>

<hr>

<h2>Ending Beat 15</h2>

<p>The beat ends with the party:</p>

<ol>
<li><strong>Understanding the depth of Keeper history</strong> and sacrifice.</li>
<li><strong>Realizing that they are part of a much larger story</strong>—not just a quest, but a continuation of something sacred.</li>
<li><strong>Aware that Kaelen is carrying a terrible knowledge</strong>, though she is not sharing it.</li>
<li><strong>Rested and supplied</strong> for the final push.</li>
<li><strong>Pointing north toward Surt's Forge and the Emberwell</strong>, which is now visible in the distance.</li>
</ol>

<p><strong>Kaelen</strong> is no longer a reluctant guide. She is the inheritor of a tradition, the last of the Keepers, and she is walking toward her destiny.</p>

<p>The party may not fully understand this yet. But they understand that something has changed in her. She is more resolved, more focused, and more afraid.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Kaelen's Arc: Layer 2</h4>
<p>This is Layer 2—Kaelen now knows (or strongly suspects) that she is meant to become the Ever-Ember. This knowledge isolates her from the party. She carries it alone.</p>
<p>The discovery should be atmospheric. The archive is a place of learning and loss. Soren died here. The records are sacred. Treat this moment with weight.</p>
<p>Avoid being too explicit. The party should not fully understand Kaelen's revelation. She should drop hints, but not spell it out. This keeps the mystery alive until Beat 19.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Atmosphere and Foreshadowing</h4>
<p>The tower itself is a character. The Keeper wards, the warmth, the sense that knowledge and care still linger even in abandonment—these create a place that feels alive in its own way.</p>
<p>Mention Surt's Forge visibly. Make the distance feel manageable but urgent. The party should feel that they are close, but also that time is running out.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Resources and Emotional Weight</h4>
<p><strong>Heat and resources:</strong> This is the last major resupply point before the final push. After this, Heat costs will increase significantly as the party moves into the mountains and the approaches to the Emberwell.</p>
<p><strong>Word and Oaths:</strong> Remind the party of their oaths—to Rickety Frets, to the Jarl of Rindgate, possibly to others. These oaths are about to become very real. When the party succeeds (or fails), they will have to account for them.</p>
<p><strong>The emotional toll:</strong> By this point in the campaign, the players should feel exhausted and emotionally heavy. They've lost people, seen horrors, and now they're carrying the weight of knowledge that Svellheim's fate rests on them. This is intentional. Let that weight sit.</p>
</div>`;

fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 15 content updated (' + page.text.content.length + ' characters)');
