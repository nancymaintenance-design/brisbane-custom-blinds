$ErrorActionPreference = 'Stop'

$node = 'C:\Users\Windows pc\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
$vite = 'node_modules\vite\bin\vite.js'
$workingDirectory = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$port = 4177
$stdoutLog = Join-Path $env:TEMP 'brisbane-curtains-preview.stdout.log'
$stderrLog = Join-Path $env:TEMP 'brisbane-curtains-preview.stderr.log'

$process = Start-Process `
  -FilePath $node `
  -ArgumentList @($vite, 'dev', '--host', '127.0.0.1', '--port', $port) `
  -WorkingDirectory $workingDirectory `
  -WindowStyle Hidden `
  -RedirectStandardOutput $stdoutLog `
  -RedirectStandardError $stderrLog `
  -PassThru

try {
  $ready = $false
  for ($attempt = 0; $attempt -lt 20; $attempt++) {
    try {
      Invoke-WebRequest -Uri "http://127.0.0.1:$port/" -UseBasicParsing -TimeoutSec 2 | Out-Null
      $ready = $true
      break
    }
    catch {
      Start-Sleep -Milliseconds 250
    }
  }

  if (-not $ready) {
    if (Test-Path $stdoutLog) { Get-Content $stdoutLog }
    if (Test-Path $stderrLog) { Get-Content $stderrLog }
    throw 'Preview server did not become ready.'
  }

  $slugs = @(
    's-fold-curtains-brisbane',
    'sheer-blockout-curtains-brisbane',
    'curtain-tracks-headings-brisbane',
    'roller-blinds-brisbane',
    'dual-roller-blinds-brisbane',
    'roman-venetian-blinds-brisbane',
    'motorised-curtain-tracks-brisbane',
    'motorised-blinds-brisbane',
    'curtain-control-options-brisbane',
    'curtain-track-repairs-brisbane',
    'blind-mechanism-repairs-brisbane',
    'curtain-alterations-care-brisbane'
  )

  $results = foreach ($slug in $slugs) {
    $response = Invoke-WebRequest -Uri "http://127.0.0.1:$port/services/$slug" -UseBasicParsing -TimeoutSec 10
    $html = $response.Content
    $titleMatch = [regex]::Match($html, '<title>(.*?)</title>', 'Singleline')
    $descriptionMatch = [regex]::Match($html, '<meta\s+name="description"\s+content="([^"]+)"', 'IgnoreCase')

    [pscustomobject]@{
      slug = $slug
      status = [int]$response.StatusCode
      h1 = ([regex]::Matches($html, '<h1\b')).Count
      main = ([regex]::Matches($html, '<main\b')).Count
      decision = $html.Contains('Selection and diagnosis')
      quote = $html.Contains('What shapes the written quote')
      evidence = $html.Contains('Evidence and verification')
      canonical = $html.Contains("/services/$slug")
      title = if ($titleMatch.Success) { $titleMatch.Groups[1].Value } else { '' }
      description = if ($descriptionMatch.Success) { $descriptionMatch.Groups[1].Value } else { '' }
    }
  }

  $sitemap = (Invoke-WebRequest -Uri "http://127.0.0.1:$port/sitemap.xml" -UseBasicParsing -TimeoutSec 10).Content
  $missingFromSitemap = @($slugs | Where-Object { -not $sitemap.Contains("/services/$_") })

  $unknownStatus = 0
  try {
    Invoke-WebRequest -Uri "http://127.0.0.1:$port/services/not-a-real-service" -UseBasicParsing -TimeoutSec 10 | Out-Null
  }
  catch {
    $unknownStatus = [int]$_.Exception.Response.StatusCode
  }

  $failures = @(
    $results | Where-Object {
      $_.status -ne 200 -or
      $_.h1 -ne 1 -or
      $_.main -ne 1 -or
      -not $_.decision -or
      -not $_.quote -or
      -not $_.evidence -or
      -not $_.canonical -or
      [string]::IsNullOrWhiteSpace($_.title) -or
      [string]::IsNullOrWhiteSpace($_.description)
    }
  )

  [pscustomobject]@{
    routes_tested = $results.Count
    routes_passed = $results.Count - $failures.Count
    route_failures = $failures
    sitemap_missing = $missingFromSitemap
    unknown_route_status = $unknownStatus
    unique_titles = @($results.title | Sort-Object -Unique).Count
    unique_descriptions = @($results.description | Sort-Object -Unique).Count
  } | ConvertTo-Json -Depth 5
}
finally {
  if ($process -and -not $process.HasExited) {
    Stop-Process -Id $process.Id -Force
  }
}
