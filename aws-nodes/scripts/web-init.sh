#!/bin/bash

# Redirect stdout ( > ) into a named pipe ( >() ) running "tee"
exec > >(tee -ia /home/ubuntu/init-trail.log)
exec 2>&1

echo "Starting the init script execution"
date
# Standard git pull
echo "Standard git pull"
cd /home/ubuntu
git clone https://github.com/gireesh971/refer-arch-aws.git
cd /home/ubuntu/refer-arch-aws/aws-nodes
git pull
cd /home/ubuntu/refer-arch-aws/aws-nodes/scripts/

sudo apt-get update

#sudo apt-get -y upgrade

# Web server specific
echo "Web server specific"
sudo apt-get -y install nginx

sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig

echo "Installing and configure npm, node, angul cli"

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get -y install nodejs
sudo npm install -g @angular/cli

# Compile and deploy apps
echo "Compile and deploy web apps"
cd /home/ubuntu/refer-arch-aws/apps/admin
npm install
ng build --base-href=/apps/admin/
cd /home/ubuntu/refer-arch-aws/apps/login
npm install
ng build --base-href=/apps/login/

# Consul setup
echo "Consul setup"
cd /home/ubuntu/refer-arch-aws/aws-nodes/scripts
chmod +x consul.sh

# Consul template setup
echo "Consul template setup"
./consul.sh server
chmod +x consul-template.sh
./consul-template.sh
sleep 30s
consul kv put foo "`date`"

echo "Completed the init script execution"
date
