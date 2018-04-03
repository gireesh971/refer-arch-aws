Include following lines in EC2 instance user data

Bastion Server
--------------
#!/bin/bash
wget -O - https://raw.githubusercontent.com/gireesh971/refer-arch-aws/master/aws-nodes/scripts/bastion-init.sh | bash

Web Server
----------
#!/bin/bash
wget -O - https://raw.githubusercontent.com/gireesh971/refer-arch-aws/master/aws-nodes/scripts/web-init.sh | bash
