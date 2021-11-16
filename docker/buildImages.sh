#!/bin/bash

# build mongodb handler
docker build ../mongodb-handler/ -t registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/mongodb-handler

# build searchfrontend
cd ../searchfrontend/ && npm install && npm run build
docker build ../searchfrontend/ -t registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/frontend
