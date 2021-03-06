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

# Commented out following line because of the grub file error on AWS
#sudo apt-get -yq upgrade

# Web server specific
echo "Web server specific"
sudo apt-get -y install nginx

sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig

sudo mkdir -p /var/www/html/apps/admin
sudo mkdir -p /var/www/html/apps/login
sudo mkdir -p /var/www/html/apps/config
sudo chmod +666 /var/www/html
sudo chmod +666 /var/www/html/apps
sudo chmod +666 /var/www/html/apps/admin
sudo chmod +666 /var/www/html/apps/login
sudo chmod +666 /var/www/html/apps/config

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
sleep 10s
consul kv put mykey "This is a configuration read from consul and this gets the sample Go Health service work"
sleep 10s

echo "Completed the init script execution"
date
