#!/usr/bin/env bash
set -euo pipefail

npm run build

CITY_TOKENS='carlsbad|encinitas|san marcos|oceanside|del mar|solana beach|rancho santa fe'

if find dist/services -name 'index.html' -print0 | xargs -0 awk 'BEGIN{RS="</main>"} /<main/{sub(/.*<main[^>]*>/,""); print}' | rg -n "(${CITY_TOKENS})" -S; then
  echo "FAIL: city leakage found in pillar main content (dist/services)."
  exit 1
fi

echo "OK: no city leakage found in pillar main content (dist/services)."
