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
cd ..

git clone gitlab bob
cd bob
git config user.name Bob
cd ..
