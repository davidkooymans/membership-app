FROM node:alpine

RUN deluser --remove-home node

RUN addgroup --gid 1500 docker
RUN adduser --disabled-password --uid 1500 docker -G docker
 
WORKDIR /usr/src/app

# update user access
RUN chown -R docker:docker /usr/src/app

#change over to the docker user
USER docker

COPY --chown=docker:docker package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
#COPY --chown=docker:docker . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the server with dev build
CMD ["sleep", "10000"]