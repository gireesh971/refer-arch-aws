#!/bin/bash
Consul server setup
cd /home/ubuntu/
sudo apt-get -y install unzip
wget https://releases.hashicorp.com/consul/0.8.5/consul_0.8.5_linux_amd64.zip
unzip consul_0.8.5_linux_amd64.zip
sudo mv consul /usr/local/bin
sudo cp /home/ubuntu/refer-arch-aws/aws-nodes/scripts/consul.$1.service /etc/systemd/system/consul.service
sudo mkdir /etc/consul.d/
sudo cp /home/ubuntu/refer-arch-aws/aws-nodes/scripts/ui.json /etc/consul.d/ui.json
sudo systemctl daemon-reload
sudo systemctl start consul.service
sudo systemctl enable consul.service
