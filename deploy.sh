#!/bin/bash
set -e
cd /Users/cc3po/system4-astro
echo "Building..."
npx astro build
echo "Deploying to Netlify..."
npx netlify deploy --prod --dir=dist
echo "Done!"