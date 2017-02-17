#!/bin/bash
echo
echo "********************************************";
echo "              Ng2-Admin-LTE"
echo "********************************************";
echo
echo "  Launching App with Docker..."
echo
docker run  --rm --name ng2-admin-lte-start -v "$PWD":/usr/src/app -w /usr/src/app -p 4200:4200 -it node:latest bash -c "npm install && npm start"
