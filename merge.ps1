$p1 = Get-Content c:\Users\soec\Desktop\kodlamason\exams_payload1.js -Raw
$p2 = Get-Content c:\Users\soec\Desktop\kodlamason\exams_payload2.js -Raw
$p3 = Get-Content c:\Users\soec\Desktop\kodlamason\exams_payload_builder.js -Raw

Add-Content -Path c:\Users\soec\Desktop\kodlamason\data.js -Value "`n$p1`n$p2`n$p3" -NoNewline

Remove-Item c:\Users\soec\Desktop\kodlamason\exams_payload1.js
Remove-Item c:\Users\soec\Desktop\kodlamason\exams_payload2.js
Remove-Item c:\Users\soec\Desktop\kodlamason\exams_payload_builder.js
Remove-Item c:\Users\soec\Desktop\kodlamason\strip.ps1
