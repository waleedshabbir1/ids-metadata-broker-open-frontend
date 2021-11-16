#!/bin/bash

if [ -n "$1" ]; then
        VERSION=$1
else
        echo -n "Enter version: "
        read VERSION
fi

# tag mongodb handler version
docker tag registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/mongodb-handler registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/mongodb-handler:$VERSION
echo "taged image: registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/mongodb-handler:$VERSION"

# tag frontend version
docker tag registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/frontend registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/frontend:$VERSION
echo "taged image: registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/frontend:$VERSION"

# push mongodb handler image
docker push registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/mongodb-handler

# push frontend image
docker push registry.gitlab.cc-asp.fraunhofer.de/eis-ids/broker/frontend
