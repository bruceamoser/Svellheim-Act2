$jPath = "D:\Repos\Svellheim-Act2\data\director-journals\Act-2-The-Deep-Road-Director-Journal-Part-2.journal.json"
$j = Get-Content $jPath -Encoding UTF8 -Raw | ConvertFrom-Json
$p18 = $j.pages | Where-Object { $_.name -like "*Beat 18*" }
$c = $p18.text.content

$pmi  = '@UUID[Actor.aivOmszBHu2u7SzZ]{Pale Maw Inquisitor (Thrainn Ashward)}'
$pmz  = '@UUID[Actor.NDeWomcMb7Dl6UMf]{Pale Maw Zealot}'
$pms  = '@UUID[Actor.f7BSX7OW7MzGcqf7]{Pale Maw Soldier}'
$pmo  = '@UUID[Actor.bC9oas4cDR0K4aFv]{Pale Maw Operative}'
$pmv  = '@UUID[Actor.u9tQ3D5ds7c7ljjd]{Pale Maw Veteran}'
$pma  = '@UUID[Actor.pKfo4mdY94QNMo8H]{Pale Maw Acolyte}'
$yrsa = '@UUID[Actor.lHELdSKbVYsHOjGQ]{Pale Maw Strike Leader Yrsa Frostbane}'
$dash = [char]0x2013
$x    = [char]0x00D7
$aac  = [char]0x00E1
$n    = "`n"

# === Step 1: Replace Strike Team Composition div ===
$strikeMark = "Strike Team Composition"
$strikeDivStart = $c.LastIndexOf("<div ", $c.IndexOf($strikeMark))
$strikeDivEnd   = $c.IndexOf("</div>", $c.IndexOf($strikeMark)) + 6
Write-Host "Strike div: $strikeDivStart to $strikeDivEnd"

$newStrike  = "<div style=""background:#f5f0e6; color:#2a2a2a; border-left:4px solid #b8860b; padding:12px 16px; margin:12px 0; border-radius:4px;"">${n}"
$newStrike += "<h4 style=""margin-top:0; color:#b8860b;"">&#x2694; Strike Team Composition (Wave Encounter, EV 384 Hard)</h4>${n}"
$newStrike += "<p><strong>Wave 1 ${dash} The First Wave</strong> (combat opens, round 1 of ritual; EV 188):</p>${n}"
$newStrike += "<ul>${n}"
$newStrike += "<li>1 ${x} $pmi (Level 5 Support Elite, EV 28) ${dash} see Beat 16 for stat block</li>${n}"
$newStrike += "<li>4 ${x} $pmz (Level 3 Harrier Elite, EV 20 each = 80)</li>${n}"
$newStrike += "<li>4 ${x} $pms (Level 3 Brute Elite, EV 20 each = 80)</li>${n}"
$newStrike += "</ul>${n}"
$newStrike += "<p><em>Wave 1 EV: 188</em></p>${n}"
$newStrike += "<p><strong>Wave 2 ${dash} Strike Leader Arrives</strong> (start of round 2; EV 100):</p>${n}"
$newStrike += "<ul>${n}"
$newStrike += "<li>1 ${x} $yrsa (Level 4 Support Platoon, EV 12)</li>${n}"
$newStrike += "<li>4 ${x} $pmo (Level 4 Brute Platoon, EV 12 each = 48)</li>${n}"
$newStrike += "<li>4 ${x} $pmv (Level 3 Defender Platoon, EV 10 each = 40)</li>${n}"
$newStrike += "</ul>${n}"
$newStrike += "<p><em>Wave 2 EV: 100</em></p>${n}"
$newStrike += "<p><strong>Wave 3 ${dash} Final Push</strong> (start of round 3, as Kaelen speaks the final words; EV 96):</p>${n}"
$newStrike += "<ul>${n}"
$newStrike += "<li>4 ${x} $pmz (Level 3 Harrier Elite, EV 20 each = 80)</li>${n}"
$newStrike += "<li>1 ${x} $pma (Level 2 Ambusher Elite, EV 16)</li>${n}"
$newStrike += "</ul>${n}"
$newStrike += "<p><em>Wave 3 EV: 96</em></p>${n}"
$thrinnNote = "If Thr" + [string]$aac + "inn was killed in Beat 16, replace Wave 1" + [char]0x2019 + "s Inquisitor slot with " + $yrsa + " " + [string]$dash + " EV remains 384."
$newStrike += "<p><strong>Total EV: 384</strong> (Hard band 373${dash}396 ${x}). $thrinnNote</p>${n}"
$newStrike += "</div>"

$c = $c.Substring(0, $strikeDivStart) + $newStrike + $c.Substring($strikeDivEnd)
Write-Host "Step 1: Strike Team Composition div replaced"

# === Step 2: Update VP block "Moderate to Hard" → "Hard (EV 384)" ===
$c = $c.Replace("Moderate to Hard", "Hard (EV 384)")
Write-Host "Step 2: VP difficulty updated"

# === Step 3: Update Combat: Defending Kaelen's Ritual div (difficulty line only) ===
$c = $c.Replace("<p><strong>Difficulty:</strong> Moderate-Hard | <strong>Party ES Target:</strong> 48 (level 4 party)</p>",
    "<p><strong>Difficulty:</strong> Hard | <strong>Total Wave EV:</strong> 384 | <strong>Party ES Target:</strong> 360 (Level 4 party)</p>")
Write-Host "Step 3: Ritual div header updated"

# === Step 4: Also update the Inquisitor UUID reference in Combat Notes section ===
$c = $c.Replace("@UUID[Actor.OdxMlD7osKrRaOOG]{Pale Maw Inquisitor Thr", "@UUID[Actor.aivOmszBHu2u7SzZ]{Pale Maw Inquisitor Thr")
Write-Host "Step 4: Inquisitor UUID updated"

# === Save ===
$p18.text.content = $c
$json = $j | ConvertTo-Json -Depth 20 -Compress
[System.IO.File]::WriteAllText($jPath, $json, [System.Text.Encoding]::UTF8)
Write-Host "Journal saved."
