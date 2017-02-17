#!/bin/bash
echo
echo "********************************************";
echo "              Ng2-Admin-LTE"
echo "********************************************";
echo
echo "  Calling NPM with Docker..."
echo
docker run  --rm --name ng2-admin-lte-npm -v "$PWD":/usr/src/app -w /usr/src/app -it node:latest bash -c "npm $*"
