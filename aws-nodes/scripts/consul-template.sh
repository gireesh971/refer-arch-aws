#!/bin/bash
Consul template setup
cd /home/ubuntu/
sudo apt-get -y install unzip
wget https://releases.hashicorp.com/consul-template/0.19.4/consul-template_0.19.4_linux_386.zip
unzip consul-template_0.19.4_linux_386.zip
sudo mv consul-template /usr/local/bin
sudo cp /home/ubuntu/refer-arch-aws/aws-nodes/scripts/consul-template.service /etc/systemd/system/consul-template.service
sudo systemctl daemon-reload
sudo systemctl start consul-template.service
sudo systemctl enable consul-template.service
