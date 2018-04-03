#!/bin/bash
echo "Starting the init script execution" >> /home/ubuntu/init-trail.log
date  >> /home/ubuntu/init-trail.log
cd /home/ubuntu
git clone https://github.com/gireesh971/refer-arch-aws.git
git pull
cd /home/ubuntu/refer-arch-aws/aws-nodes/scripts/
#chmod +x bastion-init.sh
#./bastion-init.sh
echo "Completed the init script execution" >> /home/ubuntu/init-trail.log
date  >> /home/ubuntu/init-trail.log
