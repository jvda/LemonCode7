#!/bin/bash

HOST="3.249.186.238"
USER="ec2-user"
KEY="../../lemoncode7.pem"

ssh -i $KEY $USER@$HOST \
  "sudo yum install docker -y && sudo service docker start && sudo docker run --rm -d -p 80:8888 --name lm7 jav1vda/lemoncode7_cloud"
