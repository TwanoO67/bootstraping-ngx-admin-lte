#!/bin/bash
echo
echo "********************************************";
echo "              NgX-Admin-LTE"
echo "********************************************";
echo
echo "  Calling NPM with Docker..."
echo
docker run  --rm --name ngx-admin-lte-npm -v "$PWD":/usr/src/app -w /usr/src/app -it node:latest bash -c "npm $*"
