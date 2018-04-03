#!/bin/bash

# Redirect stdout ( > ) into a named pipe ( >() ) running "tee"
exec > >(tee -ia /home/ubuntu/init-trail.log)
exec 2>&1

echo "Starting the init script execution"
date
# Standard git pull
cd /home/ubuntu
git clone https://github.com/gireesh971/refer-arch-aws.git
cd /home/ubuntu/refer-arch-aws/aws-nodes
git pull
cd /home/ubuntu/refer-arch-aws/aws-nodes/scripts/

sudo apt-get update

# Web server specific
sudo apt-get -y install nginx

# Consul setup
cd /home/ubuntu/refer-arch-aws/aws-nodes/scripts
chmod +x consul.sh
./consul.sh server

echo "Completed the init script execution"
date
