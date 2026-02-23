#!/usr/bin/env bash
set -euo pipefail

npm run build

CITY_TOKENS='carlsbad|encinitas|san marcos|oceanside|del mar|solana beach|rancho santa fe'

if find dist/services -name 'index.html' -print0 \
  | xargs -0 perl -0777 -ne 'while (/<main[^>]*>(.*?)<\/main>/sg) { print "$1\n" }' \
  | sed -E 's|https?://[^"[:space:]]+||g' \
  | sed -E 's/<script[\s\S]*?<\/script>/ /g; s/<style[\s\S]*?<\/style>/ /g; s/<[^>]+>/ /g' \
  | tr '[:upper:]' '[:lower:]' \
  | rg -n "(${CITY_TOKENS})" -S; then
  echo "FAIL: city leakage found in pillar main content text (dist/services)."
  exit 1
fi

echo "OK: no city leakage found in pillar main content text (dist/services)."
