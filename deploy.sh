#!/usr/bin/env sh

# abort on errors
set -e

# delete dist
rm -rf dist

# build
yarn build


# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:derdem/design-and-animations.git main:gh-pages

cd -
