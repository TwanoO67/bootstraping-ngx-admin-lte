#!/bin/bash
echo
echo "********************************************";
echo "              Ng2-Admin-LTE"
echo "********************************************";
echo
echo "  Building App with Docker..."
echo
docker run  --rm --name ng2-admin-lte-prod -v "$PWD":/usr/src/app -w /usr/src/app -it node:latest bash -c "npm install && npm run prod"
