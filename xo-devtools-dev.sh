#!/bin/bash
# 🧪 Dev CLI for XO DevTools

set -e

echo "📦 Building XO DevTools UMD bundle..."
npm run build:cdn

echo "📁 Copying to docs/"
mkdir -p docs/
cp dist/xo-dev-tools.* docs/
cp docs/*.html docs/

echo "🌐 Starting local preview on http://localhost:8080/"
cd docs && python3 -m http.server 8080
