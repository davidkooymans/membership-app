FROM node:alpine

RUN deluser --remove-home node

RUN addgroup --gid 1500 docker
RUN adduser --disabled-password --uid 1500 docker -G docker
USER docker

WORKDIR /usr/src/app

COPY --chown=docker:docker package*.json ./

RUN npm install
 
EXPOSE 5173