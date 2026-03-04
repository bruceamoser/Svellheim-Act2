const fs = require('fs');
const path = require('path');

const journalPath = path.join(__dirname, '..', 'data', 'director-journals', 'Act-2-The-Deep-Road-Director-Journal.journal.json');
const journal = JSON.parse(fs.readFileSync(journalPath, 'utf-8'));

const pageId = '9gzRMxEZnsYyRaN5';
const page = journal.pages.find(p => p._id === pageId);
if (!page) { console.error('Page not found: ' + pageId); process.exit(1); }

page.text.content = `<p><strong>Level:</strong> 3–4<br>
<strong>Duration:</strong> 1–2 sessions<br>
<strong>Location:</strong> The inner chamber of the Echoing Caves; Rickety Frets's library sanctuary<br>
<strong>Key NPCs:</strong> Rickety Frets (ancient spirit historian), Kaelen (meeting her past), Lew (uneasy)<br>
<strong>Type:</strong> Exploration and discovery, moderate negotiation, atmospheric investigation, lore revelation<br>
<strong>Tone:</strong> Melancholy and eerie; the weight of history; a meeting between past and present</p>

<hr>

<h2>Overview</h2>

<p>Deep in the cave system, the party stumbles into the domain of <strong>Rickety Frets</strong>—Svellheim's oldest skald, a <em>spirit</em> who has been wandering the underwater caves for thousands of years, watching civilization rise and fall from beneath the world.</p>

<p>He is not hostile. He is not precisely friendly. He is old, wry, melancholic, and profoundly lonely. He has watched the dead organize for months, and it has disturbed him enough to break his perfect isolation.</p>

<p>The party discovers that Rickety Frets exists in a vast chamber filled with carved tablets, bone records, and the physical inscriptions of history itself. He is the archive. He is the witness to ages.</p>

<p>The negotiation here is <em>not</em> about convincing him to help through flattery or bribery. It's about reaching something in him that still cares whether the world continues. It's about offering him, perhaps for the first time in millennia, a reason to believe the story isn't over.</p>

<p>By the end of this beat, Rickety Frets becomes the party's guide through the rest of the cave system and provides critical intelligence about the draugr's destination.</p>

<hr>

<h2>Part 1: Discovery of the Library</h2>

<h3>Entering the Chamber</h3>

<p>The party is moving through passages that are becoming less flooded, more dry. They are approaching the eastern side of the cave system—where the water returns to underground streams and the caves open into larger, air-filled chambers.</p>

<p>In one such chamber—vast, columned, with a ceiling lost in darkness—they find it.</p>

<p><strong>Books.</strong> Carved tablets. Bone records. Thousands of them, covering every surface, stacked in careful piles, arranged in no obvious pattern except the pattern of time and obsessive care.</p>

<p>The walls are covered in handwriting—notes, marginalia, references, a scholar's chaos. The stone floor is covered in more tablets, bones inscribed with text, small carved wooden figures (historical records?), and in the center: a firepit, ancient, never quite dead, keeping the chamber at a survivable temperature.</p>

<p>It is, without question, a <em>library</em>. And it has been maintained with care for centuries.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>The chamber opens before you like a cathedral made of words.</p>
<p>Stone columns rise from floor to ceiling—perhaps 30 feet high. Every surface between them and on the walls is covered in inscriptions. Some are carved deeply and precisely. Some are scratched hastily, as if someone was running out of time. Some are so old that weather and water have worn them nearly away.</p>
<p>On the floor: tablets arranged in spirals and grids. Bone fragments with text on both sides. Small, intricate carvings—miniature figures, scenes of battles, hunts, rituals. Thousands of small histories, all contributing to something vast and incomprehensible.</p>
<p>And on the eastern wall, a figure.</p>
<p>It stands motionless, facing away from you, one hand resting on the carved stone. At first, you think it's a statue. Then it turns.</p>
<p>It is humanoid. Tall, too tall perhaps, with a frame that seems to flicker between solid and translucent. Its face is weathered—not like an old man's, but like a stone that has stood in wind and rain for centuries. Its eyes are bright and aware.</p>
<p>When it speaks, its voice is dry, paper-thin, like pages turning in wind:</p>
<p><strong>"I am Rickety Frets. I was Svellheim's historian when there was a Svellheim worth chronicling. Now I chronicle its ending. You are the first to find this place in... I have lost count of the years. Forgive me if I am not welcoming. I have not been a host in longer than anyone alive has lived."</strong></p>
</div>

<h3>The Spirit of Rickety Frets</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">NPC: Rickety Frets</h4>
<p>Rickety Frets is a <strong>spirit</strong>—not a draugr (he is conscious and whole), not a ghost (he was never bound to a location against his will), but something older and stranger. A <em>shade</em>, perhaps, or what happens when someone lives so long and so consciously that the boundary between living and dead becomes unclear.</p>
<p><strong>Appearance:</strong> Tall, thin, almost cadaverous. He wears robes that might once have been expensive, now faded to the color of old paper. His hands are stained with ink (or whatever spirits use for ink). His face is lined with the work of countless years. His eyes are the only thing that seem alive—sharp, observant, filled with a melancholy intelligence.</p>
<p><strong>Manner:</strong> He is not rude, but he is not warm. He speaks in complete sentences, with precision. He has not had conversation in a very long time and is slightly rusty at the art of smalltalk. He tends to make observations that are too honest, comments that reveal more about his solitude than courtesy dictates.</p>
<p><strong>His humor:</strong> Dry, self-aware, bitter. He makes jokes about the world ending, about how fitting it is that he would spend eternity in a library only to have the library's subject matter become increasingly focused on decline.</p>
</div>

<h3>What He Wants to Know</h3>

<p>Rickety Frets is <em>intensely</em> curious about the party, but not in a way they might expect. He doesn't care about their individual names or stories. He wants to know:</p>

<ol>
<li><em>What year is it?</em> (Not the literal year—he knows that. But what age are they in? The Age of Embers? How many years have the Fimbulwinter lasted?)</li>
<li><em>How is the world dying?</em> (He has heard the draugr organizing; he wants confirmation of what he suspects.)</li>
<li><em>Who are they, and why are they in his library?</em> (This is more curiosity than concern.)</li>
<li><em>Is there still a sky?</em> (This is asked half-seriously. He is genuinely uncertain whether the surface world still exists or whether it has been completely consumed by ice.)</li>
</ol>

<p>If the party answers his questions directly and honestly, he begins to warm—slightly. Not to friendship, but to something approximating professional interest.</p>

<hr>

<h2>Part 2: The Negotiation with Rickety Frets</h2>

<h3>Structure: A Conversation, Not a Formal Negotiation</h3>

<p>This is a <strong>Moderate Negotiation Encounter</strong>, but it should be played as a conversation, not a roll-by-roll exchange. The party and Rickety Frets are not enemies. They are scholars meeting across an impossible gulf of time.</p>

<h3>Setup</h3>

<p><strong>Interest:</strong> 3 (Melancholy Curiosity) — He is not hostile, but he is profoundly unmotivated. Thousands of years of watching things end have eroded his sense of urgency. He will engage, but he will not help unless given a reason that matters to someone who has outlasted everything.</p>

<p><strong>Patience:</strong> 3 — He has all the time in the world, but his patience is for <em>interesting</em> arguments. Small talk, flattery, and sentimentality bore him quickly.</p>

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
<p>With Patience 3 and Interest 3, the party needs to reach Interest 5 for Rickety Frets to agree to help (<em>"Yes—I will guide you and share what I know"</em>). Two successful Tier 2 motivation appeals will do it, or one Tier 3 appeal combined with a strong Tier 2. One pitfall invoked severely damages the negotiation. The party has room to maneuver, but wasted arguments quickly erode Patience.</p>
<p>Each motivation can only be successfully invoked <em>once</em>.</p>
</div>

<h3>Motivations (medium difficulty roll)</h3>

<ul>
<li><strong>The continuation of history:</strong> Appeal to Rickety Frets's role as a witness and keeper of records. Frame it as: "Historians record the present for the future. If there is a future, someone will need to know what happened. You've been waiting for someone to tell. We can be that witness." A historian without an audience is merely a custodian of a tomb. If the party can offer him that audience—the promise that his centuries of work will be read, witnessed, remembered—it speaks to something fundamental in him.</li>
<li><strong>Understanding what's happening:</strong> Appeal to his genuine curiosity about the draugr and the Rot. He has seen them organizing, and this disturbs him—it violates the covenant he has witnessed. The dead are not supposed to be mindless <em>and</em> organized. Something is breaking the rules. The party can help him solve this mystery, can help him understand a fundamental wrongness in the world he has chronicled.</li>
<li><strong>The possibility that the story isn't over:</strong> Appeal to hope, but do it carefully. Frame it not as naive optimism, but as a question worth asking: What if the world continues? What if there is a future? Rickety Frets has lived so long that he has despaired. But if the party can give him even a thin reason to believe that continuation is possible, that the story might have chapters left to write, it will move him.</li>
</ul>

<h3>Pitfalls (automatic failure — Interest −1, Patience −1)</h3>

<ul>
<li><strong>Pity:</strong> Treating him as a sad old man worthy of sympathy. "You poor, lonely spirit. Let us help you." Rickety Frets does not want pity. He is ancient, learned, and still fully conscious. Reducing him to an object of compassion insults him and closes him off immediately.</li>
<li><strong>Being treated as a tool:</strong> Using him without regard for his perspective or agency. "Help us, and then we're done with you" or "We need your knowledge; that's what matters." He sees through this instantly. He has been alone for millennia and knows the difference between conversation and transaction.</li>
<li><strong>Dismissing his library or his work:</strong> Any suggestion that his centuries of preservation don't matter or that his records are irrelevant. "This is all just ancient history" or "The past doesn't matter now." This is the quickest way to anger him. His work <em>is</em> his existence. Dismissing it dismisses him.</li>
</ul>

<h3>Negotiation Flow</h3>

<p>The PCs can discuss strategy between arguments (the "out of character planning" approach is explicitly supported by Draw Steel). Let them feel the weight of Patience 3—they have room to maneuver, but wasteful arguments add up.</p>

<p><strong>Reason:</strong> Logical arguments work well here. Frame historical continuity as an intellectual concept, appeal to his scholarly sensibilities, cite examples from the library's own records.</p>
<p><strong>Presence:</strong> Emotional appeals work if they avoid pity. Appeal to his isolation and the genuine relief of being heard and witnessed.</p>
<p><strong>Intuition:</strong> Reading Rickety Frets's responses mid-negotiation. He is honest—if an argument isn't landing, he will say so. Intuition can be used to pivot when a line of argument isn't resonating.</p>

<p><strong>Kaelen's potential contribution:</strong> If Kaelen has explored the Keeper records in the library and speaks about the continuity of the role, her voice carries weight. Rickety Frets respects someone who understands history deeply. If Kaelen makes an argument, she can add +1 to Reason or Presence tests.</p>

<h3>Reading Rickety Frets's Responses</h3>

<p>Use these to guide roleplay between arguments:</p>

<ul>
<li><strong>Interest goes up:</strong> He becomes quieter, more thoughtful. He may ask follow-up questions, showing that an idea has caught his attention. "You're right. I had not considered that angle." His ancient eyes brighten slightly—not with hope exactly, but with the recognition of something intellectually compelling.</li>
<li><strong>Interest stays flat (no-motivation argument):</strong> He sighs, frustrated. "You're repeating yourself" or "That's not an argument; that's a wish." He withdraws slightly, returning his attention to the tablets around him—a sign that you're losing him.</li>
<li><strong>Interest drops (pitfall):</strong> His voice becomes cold and distant. "I see. You don't understand what I am or what this place is." He turns away from the party, physically. The negotiation is on the edge of collapse.</li>
<li><strong>Patience at 1:</strong> He stands. He begins to walk toward the deeper chambers of the library. The sense of time running out becomes acute. "I have indulged you long enough, I think. The records need tending."</li>
</ul>

<h3>The First Exchange</h3>

<p>The party will likely ask: <em>Can you help us? Can you guide us through the caves?</em></p>

<p>Rickety Frets's initial answer is: <em>"I can. But why should I? I have guided no one in millennia. The world has moved on. Soon enough, the story ends—that is, it ends the way all stories end, in silence. Does it matter if you survive to see it?"</em></p>

<p>This is not a refusal. It's a test. He is genuinely asking them to convince him that survival, continuation, and the future matter.</p>

<h3>Approach Examples</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">💡 Approach: Appeal to His Role as Historian</h4>
<p><em>"You're a historian. Historians record the present for the future. If there is a future, someone will need to know what happened. You've been waiting for someone to tell. We can be that witness."</em></p>
<p><strong>On success:</strong> He begins to see the party as potentially valuable to his life's work.</p>
<p><strong>Example statement:</strong> <em>"Hmm. A future. I had... I suppose I had given up on the notion. But you're right. A historian without anyone to read his work is merely a keeper of a tomb. Very well. Continue."</em></p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">💡 Approach: Appeal to His Curiosity About the Draugr</h4>
<p><em>"You've seen them organizing. We've seen it too. Something is directing them. We're trying to reach the source. Help us understand what's happening—and maybe we can stop it."</em></p>
<p><strong>On success:</strong> Rickety Frets is disturbed by the draugr organizing, and he wants answers.</p>
<p><strong>Example statement:</strong> <em>"The dead were supposed to be mindless. That was the covenant. But they're not, are they? They march in columns. They carry tools. Something is teaching them, or teaching through them. Find me the answer, and I will help you. It will keep me sane during the last age."</em></p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">💡 Approach: Appeal to His Solitude</h4>
<p><em>"You've been alone for thousands of years. You're going to be alone whether we succeed or fail. Might as well have some company for the journey."</em></p>
<p><strong>On success (Presence roll):</strong> He acknowledges that yes, he has been alone, and yes, that has worn on him. He becomes less dismissive.</p>
<p><strong>On failure:</strong> He feels pitied, and he resents it. <em>"I don't need your company, child. I need a reason to believe the world hasn't already ended."</em></p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">💡 Approach: Ask Him About the Library</h4>
<p><em>"What is all this? What did you chronicle? What is your work?"</em></p>
<p><strong>Effect:</strong> This turns the conversation into something Rickety Frets genuinely wants to discuss. A montage of him explaining his library, his purpose. Less negotiation, more character building.</p>
<p><strong>Result:</strong> If the party listens respectfully and asks thoughtful questions, Interest naturally increases. He sees them as potential appreciators of his life's work.</p>
</div>

<h3>The Turning Point</h3>

<p>Regardless of which approach works, the turning point comes when Rickety Frets says something like:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><strong>"The draugr I've been watching... they're not going south. They're not congregating at Hrafnborg. They're moving east and north. Toward the Interior Belt, toward the deep mountains, toward... I don't know where exactly. But they're being gathered for something. Someone is collecting the dead for a purpose."</strong></p>
<p>He pauses, and his voice becomes quieter:</p>
<p><strong>"I was afraid, at first. Afraid that whatever is organizing them was coming for me. But it's not. It's not interested in a solitary old spirit muttering to himself in the dark. It's interested in something else. Something bigger.</strong></p>
<p><strong>"I believe... I believe it's trying to prevent someone from reaching the north. Someone important. Someone who might undo what has been done."</strong></p>
<p>At this point, you feel something shift. Rickety Frets is looking directly at you, and there's recognition in his ancient eyes.</p>
</div>

<p>Kaelen should feel <em>seen</em>. Rickety Frets is obliquely acknowledging that she is important, that her presence is significant, that her journey matters.</p>

<h3>The Oath</h3>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">📜 The Oath of Witness</h4>
<p>Once the negotiation has progressed (assuming at least one successful argument or exchange), Rickety Frets makes an offer:</p>
<p><em>"I will guide you through the rest of the caves. I will tell you what I know of the draugr's movements and their destination. I will give you what provisions I have hoarded in this place. And in return, you will do two things:</em></p>
<p><em>1. You will remember me. You will tell someone—anyone—that Rickety Frets existed, that he watched over history, that his work was not in vain.</em></p>
<p><em>2. If the world is not ending, if there is a future, you will ensure that word reaches back here. Someone will need to know what became of the age."</em></p>
<p>He pauses. His ancient expression shifts — something harder, something more desperate, surfaces beneath the scholarly composure.</p>
<p><em>"And there is a third thing. The dead took something from me. A tablet — the @UUID[Item.CBajVaiBXUskf4Wm]{Bundingsteinn}, the Binding Record. They reached into my home with impossible arms and stole it from the shelf where it had rested for six hundred years."</em></p>
<p><em>"If you find it on the road ahead — in the hands of the dead, in a ruin, in a place where the organized columns have gathered — you will bring it back. Not to me, necessarily. I may not survive to receive it. But you will ensure it is not used against the binding. You will destroy it before letting Grafvitnir's servants use the knowledge it contains."</em></p>
<p><em>"This I ask because I cannot ask anyone else. And because you are going where the dead are going."</em></p>
<p>This is not a transactional trade. It is an <strong>oath</strong> — and not a simple one. The party is swearing to be witnesses, messengers, and now <em>guardians of dangerous knowledge</em>. The @UUID[Item.CBajVaiBXUskf4Wm]{Bundingsteinn} contains the mechanism of the binding itself. In the wrong hands, it reveals how to <em>break</em> the locks rather than renew them.</p>
<p><strong>Oaths carry weight in Svellheim.</strong> If they make this oath and break it, they will feel the consequences (in Draw Steel terms, they lose Word permanently, and the Wyrd will hold them accountable).</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Director Note: The Third Demand's Weight</h4>
<p>The first two demands (remember me, send word) are emotional but low-cost. The third demand (protect or destroy the @UUID[Item.CBajVaiBXUskf4Wm]{Bundingsteinn}) is <em>material</em>. It gives the party a tangible obligation — an artifact to track, recover, or destroy — that will follow them through Acts 2-3.</p>
<p>If the party later recovers the tablet during the side quest in this same beat, the oath is partially fulfilled. But Rickety Frets's phrasing ("if you find it on the road ahead") implies the obligation extends beyond this cave. If copies exist, if the knowledge has already been transmitted to Grafvitnir's agents, the party's duty to protect that knowledge persists.</p>
<p>This creates a real decision point at the Ivory Tower (Beat 15) and potentially at the Emberwell (Beat 19): what do they do with dangerous Keeper knowledge?</p>
</div>

<p>If the party accepts all three demands, Rickety Frets's Interest maxes at 5. He becomes, not a friend, but an <em>ally</em>. And more importantly, he becomes a <em>witness</em>. His presence — metaphorical now — will follow them through the rest of Act 2.</p>

<hr>

<h2>Part 3: The Hollow Record</h2>

<h3>The Gap in the Archive</h3>

<p>As the party settles into Rickety Frets's library, exploring the vast expanse of carved tablets and bone records, an observant character (Intuition test TN 13) notices something odd: on one of the outer shelves, there is a precise rectangular impression in the dust. A tablet was resting here. Recently removed.</p>

<p>If the party asks about it, Rickety Frets becomes uncomfortable. He turns away. He is silent for a long moment before answering:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>"Three weeks ago. A column of the organized dead paused outside this chamber. They did not enter—they respected the threshold, as if something had taught them to. But one of them, larger than the others, more... <em>aware</em>... it came to the entrance. It stood there, motionless. And then it reached inside, without crossing the boundary. Its arm was impossibly long. It reached directly to that shelf."</p>
<p>He does not look at the party when he speaks.</p>
<p>"It took one tablet. The @UUID[Item.CBajVaiBXUskf4Wm]{Bundingsteinn}. The Binding Record. I have been trying not to think about what that means. I have been cataloging the consequences. It does not help."</p>
<p>He pauses, then adds, very quietly: "I made a copy, long ago. For the archive. I transcribed it from an older source that has since crumbled to dust. It should still be here, if you wish to see what was taken."</p>
</div>

<h3>The Bundingsteinn: The Binding Record</h3>

<p>If the party asks to see the copy, or if they insist on understanding what was taken, Rickety Frets retrieves a tablet from a sealed chamber deeper in the library. It is bone, carved with precise, ancient script. The writing is in Old Svellheimer, but the party's scholar (if they have one) or Kaelen can translate.</p>

<p>The tablet describes a clause from the First Binding—the original covenant that bound Grafvitnir beneath the roots. It is the only surviving copy of the specific mechanism:</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">📜 The Bundingsteinn Translation</h4>
<p>"When the root-heart fails, and the guardian-beast stirs, the binding may be renewed through the Ever-Flame. But the renewal is not simple rekindling. It is a <em>transference</em>. A living anchor must take root at the moment of the old binding's failure. The Keeper does not relight the flame. The Keeper becomes the flame. She takes the root into herself. She is bound as the beast is bound. When her light fails, so does the binding."</p>
<p><strong>Additional marginal notes in a different hand (possibly Rickety Frets himself):</strong></p>
<p>"The First Keepers understood this. The role was not a gift. It was a covenant with the roots themselves. Each Keeper was bound at the moment the previous Keeper's light failed. The world survived because the Keepers were willing to become something other than themselves. To be burned, slowly, for the world's sake."</p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: Kaelen's Layer 2 Revealed</h4>
<p>This is the moment when Kaelen fully understands the nature of her role. She reads the tablet. She reads it twice. Her face does not change, but something shifts in her eyes.</p>
<p>She does not share the realization with the party. Not yet. Not here.</p>
<p>But she now understands: When they reach the Emberwell, she will not light the flame and return home. The flame will light her. She will be bound as Grafvitnir is bound. She will become the anchor. And when her light fails, another Keeper must take her place, or the world ends.</p>
<p>The tablet is the intellectual precursor to the emotional revelation at the Ivory Tower. She has now seen the theory. She will feel its weight later.</p>
</div>

<h3>The Draugr Column</h3>

<p>Rickety Frets can trace the column through his knowledge of the cave network. The dead that took the tablet are still moving east—moving systematically, moving with purpose, carrying the @UUID[Item.CBajVaiBXUskf4Wm]{Bundingsteinn} deeper into the network. They are approximately 4–6 hours ahead of the party at current pace.</p>

<p>The column contains:</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">⚔️ The Draugr Column</h4>
<ul>
<li>6 × @UUID[Actor.ixwX07YuXtk6AzIE]{Draugr-Thrall} (Level 2 Standard) — organized, not mindless. They move in formation, guided by something that understands tactical movement.</li>
<li>1 × @UUID[Actor.sCrszDJhuSeWPmsz]{Wyrd-Draugr} (Level 3 Elite) — a former Keeper's scholar who died during the Long Night and rose with their scholarly compulsions corrupted and inverted. It knows what the tablet contains and why it matters. It carries the @UUID[Item.CBajVaiBXUskf4Wm]{Bundingsteinn} in a sealed leather case worn across its chest, protected from the elements.</li>
</ul>
</div>

<h3>Tactical Approaches: Three Paths Forward</h3>

<p>Rickety Frets explains that the party can pursue the column—if they wish to reclaim the tablet. But he offers no single solution. Each approach carries risk.</p>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">💡 Approach A: Combat Ambush (Hard Difficulty)</h4>
<p>Use Rickety Frets's knowledge to get ahead of the column via a flooded shortcut (a passage through partially submerged tunnels). Emerge ahead of the draugr and set an ambush in a narrow section of the cave system.</p>
<p><strong>Combat Difficulty:</strong> Moderate to Hard (4 level 2 Standard Draugr + 1 Level 3 Elite).</p>
<p><strong>Tactical Complication:</strong> The @UUID[Actor.sCrszDJhuSeWPmsz]{Wyrd-Draugr} is intelligent. It recognizes the party as a threat. Its primary concern is not fighting to the death—it is preserving the tablet. If the Wyrd-Draugr takes significant damage (10+ stamina lost in a single round, or half its total stamina), it will attempt to flee deeper into the network. Once it escapes, the party loses the tablet permanently (the Wyrd-Draugr will deposit it at the next waypoint in the network, far beyond reach).</p>
<p><strong>Reward:</strong> Immediate possession of the tablet. Control of the artifact. The draugr column is disrupted.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">💡 Approach B: Stealth Retrieval (Skill Challenge)</h4>
<p>Shadow the column at a distance. Identify which creature carries the tablet (Intuition test TN 14 to spot the leather case) without triggering an alarm. Execute a theft without combat.</p>
<p><strong>Skill Challenge:</strong> This requires 2 successful Agility or Intuition tests (Moderate difficulty TN 13), or 1 Agility Tier 3 success, or 1 Intuition Tier 3 success. A character can make the test once; assistance from another character grants edge or bane per Draw Steel rules.</p>
<p><strong>Failure:</strong> The attempted theft alerts the column. Combat begins immediately—but the @UUID[Actor.sCrszDJhuSeWPmsz]{Wyrd-Draugr} will attempt to flee with the tablet, creating a chase sequence rather than a stand-and-fight engagement.</p>
<p><strong>Reward:</strong> The party obtains the tablet without expending resources on combat. The draugr column continues east, unaware they've been stolen from, and the party can rest before moving on.</p>
</div>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#b8860b;">💡 Approach C: Decoy and Distraction (Creative Use of Resources)</h4>
<p>Kaelen's ember-mark radiates warmth that the dead are instinctively drawn to. She can deliberately amplify this signal, creating a false beacon in a side passage, causing the @UUID[Actor.sCrszDJhuSeWPmsz]{Wyrd-Draugr} and the majority of its column to investigate while the party extracts the tablet from the remaining guards.</p>
<p><strong>Requirements:</strong></p>
<ul>
<li>Kaelen must spend 1 Recovery (she exhausts herself amplifying the mark).</li>
<li>Kaelen makes a Presence test TN 13 to successfully "sell" the distraction (the dead must believe the signal is genuine, not a trick). On success, the Wyrd-Draugr and 4 of the 6 Thralls divert to investigate.</li>
</ul>
<p><strong>Combat Consequence:</strong> The remaining 2 @UUID[Actor.ixwX07YuXtk6AzIE]{Draugr-Thrall}s and the @UUID[Actor.sCrszDJhuSeWPmsz]{Wyrd-Draugr} (if it stays) are encountered. This is a Moderate combat (significantly easier than engaging the full column).</p>
<p><strong>Advantage:</strong> The Wyrd-Draugr is split between protecting the tablet and investigating the warmth signal. If the party defeats it (or pins it down), they obtain the tablet before it can flee.</p>
<p><strong>Disadvantage:</strong> Kaelen is exhausted after the amplification. The party loses a Recovery and Kaelen's full combat effectiveness for the encounter.</p>
</div>

<h3>Rickety Frets's Response Upon Return</h3>

<p>If the party retrieves the tablet (by any method), they return to Rickety Frets. He receives it with a complex expression—something between relief and renewed sorrow.</p>

<p>He examines it carefully, confirms its identity, and then sits down at a small stone desk. He begins to carve a new copy into a fresh tablet, working with practiced precision. This takes approximately one hour.</p>

<p>When he finishes, he hands the original tablet to Kaelen directly. He looks at her when he does so, holds her gaze for a long moment. He does not say: <em>"I think you already know what this means."</em> But the unspoken words hang in the air between them.</p>

<p>If Kaelen asks him to explain what it means, Rickety Frets will be reluctant, but he will answer:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p>"The First Keepers understood the covenant. They knew the role would consume them. The flame does not burn without fuel. The anchor does not hold without sacrifice. Each Keeper was bound knowing that their predecessor had been burned away. Knowing that they, too, would be burned. Knowing that another would come after them to be burned in turn."</p>
<p>He pauses, returning to his work, carving slowly.</p>
<p>"If you are asking whether I think you have understood what the Emberwell requires... yes. I think you understand. I think you have understood for some time. I think you are wondering whether to tell the others, and I think you have decided not to. Not yet. Not until you must."</p>
<p>He does not look up. "That is the burden of being the last. The knowledge comes alone. The choice comes alone. Everything else comes later."</p>
</div>

<h3>If the Party Fails to Retrieve the Tablet</h3>

<p>If the party decides not to pursue the column, or if their attempts all fail, the tablet is lost. Rickety Frets does not express anger, but there is a profound sadness in him.</p>

<p>He will still provide the copy he made, and he will still guide the party north. But something has shifted. He understands, more clearly now, that the forces moving against the party are organized, coordinated, and have knowledge of what matters.</p>

<p>He will warn them: <em>"Whatever is organizing the dead knows what you carry. It knows what Kaelen is. It is moving to prevent you from reaching the north. Be careful. Be very careful. The Rot does not move randomly. Someone is directing it. And that someone wants to ensure that the Emberwell stays dark."</em></p>

<hr>

<h2>Part 5: The Library and the Archive</h2>

<h3>Exploring the Collection</h3>

<p>If the party has time (and if they've made peace with Rickety Frets), they can explore his library. This serves several purposes:</p>

<ol>
<li><strong>Provides lore about Svellheim.</strong></li>
<li><strong>Gives Kaelen a chance to discover things she didn't know about her own tradition.</strong></li>
<li><strong>Builds atmosphere and a sense of the weight of history.</strong></li>
</ol>

<p>The library is organized, but only Rickety Frets fully understands the system. However, the party can identify broad sections:</p>

<p><strong>The histories:</strong> Tablets describing major events—the Age of Roots, the Silver Era, the Wolf Era, the Long Night. Carved in precise language, these are the "official" records.</p>

<p><strong>The personal accounts:</strong> Tablets and bones with more hastily carved text—individual stories, witness accounts, legends that didn't make the official histories. These are more human, more emotional. Some contradict the official record.</p>

<p><strong>The chronicles of the Keepers:</strong> A specific section, clearly maintained with even more care than the rest. Records of the Seven Ember-Keepers, their rites, their studies, their failures.</p>

<p><strong>The prophecies and warnings:</strong> Tablets that speak of a time when the roots would sicken, when the guardian-beasts would stir, when the world would need to be renewed. Some are vague. Some are specific enough to be unsettling.</p>

<h3>Kaelen's Discovery</h3>

<p>If Kaelen explores the Keeper section, she finds something that shakes her:</p>

<p>A record—carved in the hand of one of the First Keepers (perhaps 1500 years ago)—that describes the ritual of the Ever-Ember, and in particular, a note about the Keeper who first performed the rite:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><em>"Sigrid took the seed of the first flame and brought it into her body. The warmth was infinite, burning, divine. She did not survive the joining as we understand survival. She transformed. She became the conduit. Her life became the flame's life. Her death became the flame's death—eternal and slow, burning the whole of the world instead of burning in a single hearth. She was not remembered as she had been. She was remembered as the Eternal Flame itself."</em></p>
<p>You watch Kaelen read these words. She goes very quiet. She reads it twice. She traces the carved words with her finger as if she can read more through touch.</p>
<p>Then she says, barely audibly: <em>"The Keepers didn't keep the flame. They became the flame. And when they could no longer serve, they passed the role on. Not like a crown. Like a wound that could only be healed by someone new offering themselves."</em></p>
<p>She doesn't tell you the full implication. Not yet. But something has shifted in her understanding.</p>
</div>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: Kaelen's Realization</h4>
<p>Kaelen now understands: the Emberwell is not a destination where they will light a flame and return home. It is a place where the role is transferred. And if she is the last Keeper, and if Yggdrasil is expecting her...</p>
<p><em>The story is ending. And she is the ending.</em></p>
<p>She will not share this realization with the party until Beat 19.</p>
</div>

<h3>The Warning</h3>

<div style="background:#3a1a1a; color:#e0d0c0; padding:12px 16px; margin:12px 0; border-radius:4px; border-left:4px solid #cc3333;">
<h4 style="margin-top:0; color:#ff6666;">⚠ Director Secret: The Coordinated Defense</h4>
<p><em>"The draugr column I mentioned—the one moving east. It's not the only one. There are at least three major movements I've sensed through the Root-Ways. They're converging. Gathering at a place... somewhere in the eastern interior. A place with old magic. Old defenses. The undead are being positioned to guard something, or to prevent something from reaching somewhere."</em></p>
<p>He pauses, then adds: <em>"The woman who came with you—Kaelen. Is she the Keeper?"</em></p>
<p>Honest answer: Yes.</p>
<p><em>"Then the dead are moving to prevent her from reaching wherever she's going. Someone knows. Someone has planned this. And the plan is already in motion."</em></p>
<p>This is a heavy moment. The party is not simply being hunted. They are being <em>cordoned off</em>. Grafvitnir is trying to stop them from reaching the Emberwell.</p>
</div>

<hr>

<h2>Part 6: Supplies and Provisions</h2>

<h3>What Rickety Frets Offers</h3>

<p>The ancient historian has hoarded supplies over the centuries. Much of it is useless—dried food from ancient stores, weapons that have rusted beyond use, clothing that crumbles at a touch. But some remains:</p>

<ul>
<li><strong>Preserved fish and salted meat:</strong> Enough to provision the party for several more days.</li>
<li><strong>Sealed alchemical vials:</strong> Unknown contents, but clearly preserved with care. A character with Alchemy or Arcana can attempt to identify them (Moderate difficulty). Most contain medicines or stimulants—useful for recovering stamina or resisting cold.</li>
<li><strong>Maps:</strong> Old, inaccurate, but showing the cave system's general layout. These are worth something. They show that the caves extend far north and east, beyond the immediate chamber.</li>
<li><strong>A light source:</strong> @UUID[Item.5mM6huJQDr6keS0L]{Bioluminescent Lantern} — A magical lantern, ancient and faintly glowing with a blue-green bioluminescence. Unlike torches, it won't burn out, but it's dimmer and somehow unsettling to look at directly.</li>
<li><strong>A journal:</strong> Rickety Frets's own chronicle, from which he will not part, but from which he will read passages. These passages should be poignant, personal, and reinforce that he has watched the entire arc of civilization with meticulous attention.</li>
</ul>

<p><strong>Heat cost:</strong> These provisions cost the party nothing to take, but they gain a small amount of Heat (supplies improve rest efficiency by 1–2 points).</p>

<hr>

<h2>Part 7: The Departure</h2>

<h3>A Moment of Melancholy</h3>

<p>As the party prepares to leave, Rickety Frets becomes quiet. He looks around his library, at the thousands of tablets and records and the lifetime of work.</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><em>"If the world does end,"</em> he says, <em>"at least someone will have tried to stop it. That is what the best stories are—people trying, against all odds, to prevent the ending."</em></p>
<p>He walks with you to the exit of his chamber, and gives you one final piece of advice:</p>
<p><em>"The road ahead goes through the Bone-Fields. The dead rise there without guidance—there's something wrong with that place, something that predates Grafvitnir's work. Be careful. The boundary between the worlds is thin there, thinner than even here in the deep."</em></p>
<p>Then he returns to his library, to his work, to his solitude. You will not see him again.</p>
<p>But his presence—his oath-witness, his belief in continuity—becomes part of your journey. You carry the weight of his loneliness with you, and the weight of his hope.</p>
</div>

<h3>The Naming</h3>

<p>Before you go, Rickety Frets asks: <em>"What are your names? I have not had anyone to name since the Silver Era. It would be... it would be a courtesy if I knew who it is I'm sending into the dark."</em></p>

<p>The party should give their names. Rickety Frets repeats each one carefully, as if carving it onto a tablet in his memory:</p>

<div style="background:#2a2a3a; color:#e0d8c8; padding:14px 18px; margin:12px 0; border-radius:6px; border-left:4px solid #c4a03c; font-style:italic;">
<p><em>"[Name]. [Name]. [Name]. [Name]. I will add you to my chronicle. The party that sought the Emberwell. When the world remembers, it will remember you."</em></p>
<p>This is small, but it is significant. It is an acknowledgment that your names matter, that your quest matters, that you are not simply playing out a predetermined ending.</p>
</div>

<hr>

<h2>Ending Beat 12</h2>

<p>The beat ends with the party armed with new knowledge, supplies, and an oath that ties them to Svellheim's oldest history. They know the draugr are organized and being positioned to stop them. They know the Bone-Fields are next.</p>

<p>And Kaelen carries the weight of the discovery she made in the Keeper records—the knowledge that the Keepers did not keep the flame. They <em>became</em> the flame.</p>

<p>The path to understanding her role grows clearer, and more terrible.</p>

<hr>

<h2>GM Notes</h2>

<div style="background:#f5f0e6; color:#2a2a2a; border-left:4px solid #4a4a4a; padding:12px 16px; margin:12px 0; border-radius:4px;">
<h4 style="margin-top:0; color:#4a4a4a;">📝 Director Guidance</h4>
<ul>
<li><strong>Rickety Frets's voice:</strong> He should sound tired, wise, and slightly frustrated with the living world's business. His dialog should reflect someone who has had to become articulate through centuries of solitude, and who is slightly rusty at conversation. He might ramble, might go on tangents about history, might interrupt himself with asides.</li>
<li><strong>The negotiation difficulty:</strong> This should not be a hard negotiation. It's a test of whether the party can meet Rickety Frets on his terms—as people who care about continuity and history, not as people asking a convenient NPC for a favor. If the party approaches it with respect and genuine interest, Interest rises naturally.</li>
<li><strong>Kaelen's arc:</strong> This is where Layer 2 is fully revealed to her. She discovers the nature of the Keeper role and understands that she is meant to fulfill it. She does not share this with the party. Not yet. Not until Beat 19.</li>
<li><strong>Atmosphere:</strong> The library should feel vast, heavy with history, and deeply sad. It's a place where one person has preserved the entire memory of a civilization, alone, waiting for someone to read it. The tragedy of it should be palpable.</li>
<li><strong>Resource management:</strong> This is the last major supply opportunity before the Bone-Fields and the final stretch north. The party should feel that they are well-provisioned but running on limited reserves.</li>
<li><strong>The oath:</strong> This is important for later. The party has sworn to remember Rickety Frets and to ensure his work is witnessed. This is a Wyrd obligation that carries weight through the rest of the campaign.</li>
</ul>
</div>`;

fs.writeFileSync(journalPath, JSON.stringify(journal, null, 2), 'utf-8');
console.log('SUCCESS: Beat 12 content updated (' + page.text.content.length + ' characters)');
