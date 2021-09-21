#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -am 'deploy'
git push -f git@github.com:galabl/vue.pubg.report.git main:gh-pages


cd -