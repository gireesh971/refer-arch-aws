#!/bin/bash

cd ./admin
npm install
ng build --base-href=/apps/admin/
cd ../login
npm install
ng build --base-href=/apps/login/
cd ..
rm -rf ./dist
mkdir -p dist/apps/admin
mkdir -p dist/apps/login
cp ./admin/dist/* dist/apps/admin
cp ./login/dist/* dist/apps/login
cd ./dist
zip -r apps.zip apps/*
scp -i ~/.aws/ec2-keypair-1.pem ./apps.zip ubuntu@$1:/home/ubuntu
cd ..
