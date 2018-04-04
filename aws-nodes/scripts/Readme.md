Include following lines in EC2 instance user data

Bastion Server
--------------
#!/bin/bash
wget -O - https://raw.githubusercontent.com/gireesh971/refer-arch-aws/master/aws-nodes/scripts/bastion-init.sh | bash

Web Server
----------
#!/bin/bash
wget -O - https://raw.githubusercontent.com/gireesh971/refer-arch-aws/master/aws-nodes/scripts/web-init.sh | bash

App Server
----------
#!/bin/bash
docker run --name consul --restart always -d -p 8300-8302:8300-8302 -p 8400:8400 -p 8500:8500 -p 8600:8600/udp progrium/consul -join 10.0.1.71 -advertise 10.0.1.251


