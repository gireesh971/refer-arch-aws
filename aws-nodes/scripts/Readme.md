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

Run consul on host network
--------------------------
#!/bin/bash
docker run --name consul --restart always --net=host -d progrium/consul -join 10.0.1.71

Run registrator on host network
-----------------------------
docker run -d \
    --name=registrator \
    --net=host \
    --restart always \
    -ip 10.0.1.105
    --volume=/var/run/docker.sock:/tmp/docker.sock \
    gliderlabs/registrator:latest \
    consul://localhost:8500
