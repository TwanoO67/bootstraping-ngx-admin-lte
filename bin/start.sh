#!/bin/bash
echo
echo "********************************************";
echo "              NgX-Admin-LTE"
echo "********************************************";
echo
echo "  Launching App with Docker..."
echo
docker run  --rm --name ngx-admin-lte-start -v "$PWD":/usr/src/app -w /usr/src/app -p 4200:4200 -it node:latest bash -c "yarn install && yarn start"
