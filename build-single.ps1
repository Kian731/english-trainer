# Bundle index.html + style.css + all JS into a single portable HTML file.
# Run:  powershell -ExecutionPolicy Bypass -File .\build-single.ps1
# After editing anything in data\, run this again to refresh english-trainer.html

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

# Load order must match the <script> tags in index.html
$scripts = @(
  'data/basic-words.js',
  'data/basic-grammar.js',
  'data/basic-quiz.js',
  'data/basic-part6.js',
  'data/basic-part7.js',
  'data/inter-words.js',
  'data/inter-grammar.js',
  'data/inter-quiz.js',
  'data/inter-part6.js',
  'data/inter-part7.js',
  'data/adv-words.js',
  'data/adv-grammar.js',
  'data/adv-quiz.js',
  'data/adv-part6.js',
  'data/adv-part7.js',
  'data/part5-zh.js',
  'data/part6-zh.js',
  'data/part7-zh.js',
  'data.js',
  'app.js'
)

$html = Get-Content (Join-Path $root 'index.html') -Raw -Encoding UTF8
$css  = Get-Content (Join-Path $root 'style.css')  -Raw -Encoding UTF8
$html = $html.Replace('<link rel="stylesheet" href="style.css">', "<style>`n$css`n</style>")

foreach ($src in $scripts) {
  $path = Join-Path $root ($src -replace '/', '\\')
  if (-not (Test-Path $path)) { throw "File not found: $path" }
  $code = Get-Content $path -Raw -Encoding UTF8
  $tag  = '<script src="' + $src + '"></script>'
  if ($html.IndexOf($tag) -lt 0) { throw "Tag not found in index.html: $tag" }
  $html = $html.Replace($tag, "<script>`n$code`n</script>")
}

$out = Join-Path $root 'english-trainer.html'
[System.IO.File]::WriteAllText($out, $html, (New-Object System.Text.UTF8Encoding $false))

$kb = [math]::Round((Get-Item $out).Length / 1KB, 1)
Write-Host ("Built: {0} ({1} KB)" -f $out, $kb)
