#!/bin/bash
echo "Starting the init script execution" >> /home/ubuntu/init-trail.log
date  >> /home/ubuntu/init-trail.log
cd /home/ubuntu
git clone https://github.com/gireesh971/refer-arch-aws.git
cd /home/ubuntu/refer-arch-aws/aws-nodes
git pull
cd /home/ubuntu/refer-arch-aws/aws-nodes/scripts/
sudo apt-get update
sudo apt-get install tinyproxy
sudo cp tinyproxy.conf /etc/tinyproxy.conf
sudo /etc/init.d/tinyproxy restart
echo "Completed the init script execution" >> /home/ubuntu/init-trail.log
date  >> /home/ubuntu/init-trail.log
