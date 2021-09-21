#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git remote add origin git@github.com:galabl/pubg.report.git
git push -d origin gh-pages
git branch -M gh-pages
git add .
git commit -am 'deploy'
git push origin gh-pages


cd -