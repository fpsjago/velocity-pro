#!/bin/bash
BASE="https://fpsjago.github.io/velocity-pro"
PAGES=(
  "/"
  "/features/"
  "/pricing/"
  "/about/"
  "/contact/"
  "/faq/"
  "/blog/"
  "/case-studies/"
  "/changelog/"
  "/login/"
  "/signup/"
  "/docs/getting-started/"
)

echo "Testing all pages with trailing slashes..."
PASS=0
FAIL=0

for page in "${PAGES[@]}"; do
  URL="$BASE$page"
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
  if [ "$STATUS" = "200" ]; then
    echo "✅ $page - $STATUS"
    ((PASS++))
  else
    echo "❌ $page - $STATUS"
    ((FAIL++))
  fi
done

echo ""
echo "Results: $PASS passed, $FAIL failed"
