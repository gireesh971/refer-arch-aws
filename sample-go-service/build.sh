#!/bin/bash

docker build -t sample-go-service .
docker tag sample-go-service:latest 984394691287.dkr.ecr.us-east-1.amazonaws.com/sample-go-service:latest
docker push 984394691287.dkr.ecr.us-east-1.amazonaws.com/sample-go-service:latest