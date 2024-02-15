# Dokcerize a rest api

This guide demonstrates how to containerize a REST API built with Express and PostgreSQL using Docker and Docker Compose.

## requirements

- Docker
- Docker Compose

## build the docker image

1. Clone the repo

   ```
   git clone https://github.com/rishawraj/docker-rest.git
   ```

1. Navigate to the root of your project and build the Docker image:

   ```
   docker build -t my-node-app .
   ```

1. Run Docker Compose to start the containers:

   ```
   docker compose up
   ```

## rest api

1. Set up the database:

   ```
   curl --location 'http://localhost:13000/setup'
   ```

1. Create users:

   ```
   curl --location 'http://localhost:13000/' \
   --header 'Content-Type: application/json' \
   --data '{
    "name":"rajesh",
    "location":"L.A"
   }'
   ```

1. Query users:

   ```
   curl --location 'http://localhost:13000/'
   ```

## Docker image on DockerHub

[docker image](https://hub.docker.com/repository/docker/rishawraj/my-node-app/general)
