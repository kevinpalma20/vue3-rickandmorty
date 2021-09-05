#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "Deploy 1.0 Github pages"
git push -f git@github.com:kevinpalma20/vue3-rickandmorty.git master:gh-pages

cd -
