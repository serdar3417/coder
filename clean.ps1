$path = "c:\Users\soec\Desktop\kodlamason\data.js"
$content = Get-Content $path -Raw
$index = $content.IndexOf("const fs = require('fs');")
if ($index -ge 0) {
    $content = $content.Substring(0, $index)
    Set-Content -Path $path -Value $content -NoNewline
}
