#!/bin/bash
echo
echo "********************************************";
echo "              NgX-Admin-LTE"
echo "********************************************";
echo
echo "  Building App with Docker..."
echo
docker run  --rm --name ngx-admin-lte-prod -v "$PWD":/usr/src/app -w /usr/src/app -it node:latest bash -c "yarn install && yarn prod"
