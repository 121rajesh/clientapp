#!/bin/bash

# download the node modules
# npm install

# remove the container if exists or running 
if [ $(docker container ls -q -a --filter name=client) != '' ]; then
    docker container stop client
    docker container rm client
fi

# remove the image if exists
if [ $(docker image ls -q --filter reference=client) != '' ]; then
    docker image rm client
fi

# build the image
docker build . -t client

# start the container
docker container run -itd -p 4200:80 --name client client