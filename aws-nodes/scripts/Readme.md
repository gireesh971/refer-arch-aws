Include following lines in EC2 instance user data

#!/bin/bash
wget -O - https://raw.githubusercontent.com/gireesh971/refer-arch-aws/master/aws-nodes/scripts/bastion-init.sh | bash

