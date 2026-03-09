$jPath = "D:\Repos\Svellheim-Act2\data\director-journals\Act-2-The-Deep-Road-Director-Journal-Part-2.journal.json"
$j = Get-Content $jPath -Encoding UTF8 -Raw | ConvertFrom-Json
$p16 = $j.pages | Where-Object { $_.name -like "*Beat 16*" }
$c = $p16.text.content

$pmi  = '@UUID[Actor.aivOmszBHu2u7SzZ]{Pale Maw Inquisitor (Thrainn Ashward)}'
$pmz  = '@UUID[Actor.NDeWomcMb7Dl6UMf]{Pale Maw Zealot}'
$pms  = '@UUID[Actor.f7BSX7OW7MzGcqf7]{Pale Maw Soldier}'
$pmo  = '@UUID[Actor.bC9oas4cDR0K4aFv]{Pale Maw Operative}'
$pmv  = '@UUID[Actor.u9tQ3D5ds7c7ljjd]{Pale Maw Veteran}'
$dash = [char]0x2013
$x    = [char]0x00D7
$n    = "`n"

# === Replace Option 1: Combat section ===
# Cut from "Option 1: Combat</h4>" to the start of Option 2's opening <div
$opt1Marker = "Option 1: Combat</h4>"
$opt2DivStart = $c.LastIndexOf("<div ", $c.IndexOf("Option 2:"))
$opt1Start = $c.IndexOf($opt1Marker)
Write-Host "opt1Start=$opt1Start  opt2DivStart=$opt2DivStart"

if ($opt1Start -ge 0 -and $opt2DivStart -gt $opt1Start) {
    $newSection  = "Option 1: Combat</h4>${n}"
    $newSection += "<p>The party fights through a <strong>wave encounter</strong> (Hard-Extreme, EV 292, partyES 270). This is the most dangerous option but also the fastest route through Beinvaka.</p>${n}"
    $newSection += "<p><strong>Wave 1 ${dash} Harrier Screen</strong> (initial interception as the party enters the northern edge of Beinvaka):</p>${n}"
    $newSection += "<ul>${n}"
    $newSection += "<li>4 ${x} $pmz (Level 3 Harrier Elite, EV 20 each = 80)</li>${n}"
    $newSection += "<li>4 ${x} $pms (Level 3 Brute Elite, EV 20 each = 80)</li>${n}"
    $newSection += "</ul>${n}"
    $newSection += "<p><em>Wave 1 EV: 160</em></p>${n}"
    $newSection += "<p><strong>Wave 2 ${dash} Inquisitor Arrives</strong> (end of round 2, when the noise reaches the stronghold):</p>${n}"
    $newSection += "<ul>${n}"
    $newSection += "<li>1 ${x} $pmi (Level 5 Support Elite, EV 28)</li>${n}"
    $newSection += "<li>3 ${x} $pmz (Level 3 Harrier Elite, EV 20 each = 60)</li>${n}"
    $newSection += "<li>2 ${x} $pmo (Level 4 Brute Platoon, EV 12 each = 24)</li>${n}"
    $newSection += "<li>2 ${x} $pmv (Level 3 Defender Platoon, EV 10 each = 20)</li>${n}"
    $newSection += "</ul>${n}"
    $newSection += "<p><em>Wave 2 EV: 132</em></p>${n}"
    $newSection += "<p><strong>Total EV: 292</strong> (Hard-Extreme band, partyES 270). The party does NOT need to kill the Inquisitor ${dash} breaking through to the northern road ends the encounter. The Pale Maw will not pursue beyond the settlement boundary.</p>${n}"
    $newSection += "</div>${n}${n}"

    $c = $c.Substring(0, $opt1Start) + $newSection + $c.Substring($opt2DivStart)
    Write-Host "Option 1 section replaced (new block: $($newSection.Length) chars)"
} else {
    Write-Host "ERROR: markers not found"
}

# === Write back ===
$p16.text.content = $c
$json = $j | ConvertTo-Json -Depth 20 -Compress
[System.IO.File]::WriteAllText($jPath, $json, [System.Text.Encoding]::UTF8)
Write-Host "Journal saved."
