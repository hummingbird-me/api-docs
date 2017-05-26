#!/bin/bash

set -e

if [ "$TRAVIS_BRANCH" != "source" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd dist

git init
git config user.name "$GH_USERNAME"
git config user.email "$GH_EMAIL"

git remote add upstream "https://$GH_TOKEN@github.com/hummingbird-me/api-docs.git"
git fetch upstream
git reset upstream/master

touch .

git add -A .
git commit -a -m "chore: deploy ${rev}"
git push -q upstream HEAD:master > /dev/null 2>&1