#!/bin/bash

sudo apt-get update

# this line gives issue with dialog prompt on aws
sudo apt-get -yq upgrade

echo "Installing and configure npm, node, angul cli"

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get -y install nodejs
sudo chmod +w /usr/lib/node_modules
sudo npm install -g @angular/cli

# Compile and deploy apps
echo "Compile and deploy web apps"
cd /home/ubuntu/refer-arch-aws/apps/admin
npm install
ng build --base-href=/apps/admin/
cd /home/ubuntu/refer-arch-aws/apps/login
npm install
ng build --base-href=/apps/login/
