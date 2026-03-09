$jPath = "D:\Repos\Svellheim-Act2\data\director-journals\Act-2-The-Deep-Road-Director-Journal-Part-2.journal.json"
$j = Get-Content $jPath -Encoding UTF8 -Raw | ConvertFrom-Json
$p19 = $j.pages | Where-Object { $_.name -like "*Beat 19*" }
$c = $p19.text.content

$rbd  = '@UUID[Actor.H571EB4pQN8xF4cn]{Rootbound Demolisher}'
$wl   = '@UUID[Actor.1vdJcDkeRFewA0tQ]{Wight-Lord}'
$gs   = '@UUID[Actor.fxoMdG35Ri6ZycOp]{Grave-Singer}'
$wc   = '@UUID[Actor.SrqOaBihqsBabzmG]{Wight-Commander}'
$rwl  = '@UUID[Actor.Jo7v6BrOOLXhM4rU]{Rot-Warped Landvaettr}'
$rt   = '@UUID[Actor.5EW8JOE9njruelKm]{Rot-Touched}'
$dash = [char]0x2013
$x    = [char]0x00D7
$n    = "`n"

# === Replace the main combat div (Emberwell Defense) ===
$divMark = "&#x2694; Combat: The Emberwell Defense"
$divStart = $c.LastIndexOf("<div ", $c.IndexOf($divMark))
$divEnd   = $c.IndexOf("</div>", $c.IndexOf($divMark)) + 6
Write-Host "Combat div: $divStart to $divEnd"

$newDiv  = "<div style=""background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;"">${n}"
$newDiv += "<h4 style=""margin-top:0; color:#b8860b;"">&#x2694; Combat: The Emberwell Defense (Wave Encounter, EV 392 Hard)</h4>${n}"
$newDiv += "<p><strong>Difficulty:</strong> Hard | <strong>Total Wave EV:</strong> 392 | <strong>Party ES Target:</strong> 372 (Level 4 party)</p>${n}"
$newDiv += "<p><strong>Wave 1 ${dash} Guardians of the Deep Root</strong> (as Kaelen enters the chamber; EV 208):</p>${n}"
$newDiv += "<ul>${n}"
$newDiv += "<li>2 ${x} $rbd (Level 4 Brute Elite, EV 24 each = 48) ${dash} root-bound constructs blocking the path to the seed</li>${n}"
$newDiv += "<li>2 ${x} $wl (Level 4 Elite, EV 24 each = 48) ${dash} undead champion guardians</li>${n}"
$newDiv += "<li>4 ${x} $gs (Level 2 Elite, EV 16 each = 64) ${dash} necromantic choir bolstering defenders</li>${n}"
$newDiv += "<li>4 ${x} $wc (Level 4 Platoon, EV 12 each = 48) ${dash} tactical undead coordinators</li>${n}"
$newDiv += "</ul>${n}"
$newDiv += "<p><em>Wave 1 EV: 208</em></p>${n}"
$newDiv += "<p><strong>Wave 2 ${dash} Root Eruption</strong> (triggered when Kaelen reaches the seed, approximately rounds 3${dash}4; EV 184):</p>${n}"
$newDiv += "<ul>${n}"
$newDiv += "<li>2 ${x} $wl (Level 4 Elite, EV 24 each = 48) ${dash} emerge from deeper within the chamber</li>${n}"
$newDiv += "<li>2 ${x} $rbd (Level 4 Brute Elite, EV 24 each = 48) ${dash} erupt from the root-tangles</li>${n}"
$newDiv += "<li>4 ${x} $rwl (Level 3 Platoon, EV 10 each = 40) ${dash} corrupted land-spirits of Yggdrasil pour in</li>${n}"
$newDiv += "<li>8 ${x} $rt (Level 4 Horde, EV 6 each = 48) ${dash} masses of undead swarming Kaelen</li>${n}"
$newDiv += "</ul>${n}"
$newDiv += "<p><em>Wave 2 EV: 184</em></p>${n}"
$newDiv += "<p><strong>Total EV: 392</strong> (Hard band 385${dash}408 ${x})</p>${n}"
$newDiv += "<h5>Objectives</h5>${n}"
$newDiv += "<ul>${n}"
$newDiv += "<li><strong>Party Goal:</strong> Keep Kaelen alive long enough for her to reach the seed and complete the rite of communion (approximately 5${dash}6 rounds).</li>${n}"
$newDiv += "<li><strong>Defenders&rsquo; Goal:</strong> Prevent the seed from being reached. Kill or disable Kaelen before the rite completes.</li>${n}"
$newDiv += "</ul>${n}"
$newDiv += "<p><strong>Terrain:</strong> Root-tangles, pillars of stone, varying elevation. Difficult terrain. The healthiest roots glow gold; the Rot-infected roots are blackened and treacherous.</p>${n}"
$newDiv += "</div>"

$c = $c.Substring(0, $divStart) + $newDiv + $c.Substring($divEnd)
Write-Host "Main combat div replaced"

# === Save ===
$p19.text.content = $c
$json = $j | ConvertTo-Json -Depth 20 -Compress
[System.IO.File]::WriteAllText($jPath, $json, [System.Text.Encoding]::UTF8)
Write-Host "Journal saved."
