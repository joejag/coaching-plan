#!/usr/bin/env bash
set -euo pipefail

rm -rf gitlab alice bob || true

mkdir gitlab 
cd gitlab 
git init --bare 
cd .. 

git clone gitlab alice
cd alice
git config user.name Alice
echo '# README' > README.md
git add README.md && git commit -m 'Add README' && git push origin master
cd ..
rm -rf alice
git clone gitlab alice
cd alice
git config user.name Alice
cd ..

git clone gitlab bob
cd bob
git config user.name Bob
cd ..
