# Docker

Tutorial [paid] - https://learn.piyushgarg.dev/learn/docker?COUPON=DOCKER

## What is docker ?
Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.

## Download & Install
Visit docker.com and download and install docker based upon your OS.

## Container
Containers are an isolated environment to run any code. Sometimes called a sandbox, in which applications and their dependencies can live.

## Image's

### To check if installed
`sudo docker run hello-world`
This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits.

## Signin to docker-desktop
Docker Desktop for Linux relies on pass to store credentials in GPG-encrypted files. Before signing in to Docker Desktop with your Docker ID, you must initialize pass. Docker Desktop displays a warning if pass is not configured.

Generate a GPG key. You can initialize pass by using a gpg key. To generate a gpg key, run:


` gpg --generate-key
Enter your name and email once prompted.`

Once confirmed, GPG creates a key pair. Look for the pub line that contains your GPG ID, for example:


```...
pubrsa3072 2022-03-31 [SC] [expires: 2024-03-30]
 3ABCD1234EF56G78
uid          Molly <molly@example.com>
```

Copy the GPG ID and use it to initialize pass

` pass init <your_generated_gpg-id_public_key>`

You should see output similar to:
```
mkdir: created directory '/home/molly/.password-store/'
Password store initialized for <generated_gpg-id_public_key>
```
Once you initialize pass, you can sign in and pull your private images.


## General Management
| Command | Description |
|---------|-------------|
| `docker version` | Displays the Docker client and server version. |
| `docker info` | Shows detailed information about the Docker environment. |
| `docker search <image_name>` | Searches for images in Docker Hub. |
| `docker pull <image_name>` | Downloads an image from a registry. |
| `docker run <image_name>` | Creates and starts a new container. |
| `docker ps` | Lists running containers. |
| `docker ps -a` | Lists all containers, including stopped ones. |
| `docker stop <container_id>` | Stops a running container. |
| `docker start <container_id>` | Starts a stopped container. |
| `docker restart <container_id>` | Restarts a container. |
| `docker kill <container_id>` | Forcefully kills a container. |
| `docker rm <container_id>` | Removes a stopped container. |
| `docker rmi <image_name>` | Removes an image. |
| `docker exec -it <container_id> <command>` | Executes a command within a running container. |
| `docker logs <container_id>` | Displays the logs of a container. |

## Image Management
| Command | Description |
|---------|-------------|
| `docker images` | Lists local images. |
| `docker image build <path_to_dockerfile>` | Builds a Docker image from a Dockerfile. |
| `docker image inspect <image_name>` | Displays detailed information about an image. |
| `docker image save -o <output_file> <image_name>` | Saves an image to a file. |
| `docker image load -i <input_file>` | Loads an image from a file. |
| `docker image tag <source_image> <target_image>` | Tags an image with a new name. |
| `docker tag <source_image> <registry>/<username>/<image_name>:<tag>` | Tags an image for pushing to a registry. |
| `docker push <image_name>` | Pushes an image to a registry. |
| `docker login` | Logs in to a Docker registry. |
| `docker logout` | Logs out of a Docker registry. |
| `docker run -it 'IMAGE name'` | (ex: docker run -it ubuntu) - creates and runs a container with 'IMAGE' image|
| `docker pull 'IMAGE name'` | (ex: docker pull ubuntu) - installs a new 'IMAGE' locally but doesnt create any container with it. |


## Container Management
| Command | Description |
|---------|-------------|
| `docker create <image_name>` | Creates a container without starting it. |
| `docker commit <container_id> <new_image_name>` | Creates a new image from the changes in a container. |
| `docker cp <container_path> <host_path>` | Copies files between the host and a container. |


## Network and Volume Management
| Command | Description |
|---------|-------------|
| `docker network ls` | Lists all Docker networks. |
| `docker network create <network_name>` | Creates a new network. |
| `docker network connect <network_name> <container_id>` | Connects a container to a network. |
| `docker network disconnect <network_name> <container_id>` | Disconnects a container from a network. |
| `docker volume ls` | Lists all Docker volumes. |
| `docker volume create <volume_name>` | Creates a new volume. |
| `docker volume rm <volume_name>` | Removes a volume. |
| `docker volume inspect <volume_name>` | Displays information about a volume. |


## Other Useful Commands
| Command | Description |
|---------|-------------|
| `docker history <image_name>` | Shows the history of an image. |
| `docker system prune` | Removes unused resources. |
| `docker system df` | Displays disk usage information. |
| `docker stats` | Displays resource usage statistics for running containers. |
| `docker top <container_id>` | Shows the processes running inside a container. |


## Info
1) Containers can have a base image like Ubuntu, kali linux or just node, python etc
2) We can create a container and install ubuntu image using `docker run -it ubuntu`
3) Then we can run (start) that container using same command above
4) We then can install node and any other packages normally
5) Then we can packup the above container with ubuntu base image along with installed npm packages or any other applications and build a docker image

## Creating docker file
1) In our project root folder, create `Dockerfile` file with no extensions.
2) Inside that file write below:
    ```
    FROM 'image name'
    COPY 'file you want to copy' 'path from inside image where you want to copy your file to'
    CMD ['command','file to apply command on']
    ```
3) Then, to create a build, type `docker build -t 'your image name' 'path to that Dockerfile'`
4) When running express apps we can use below config inside Dockerfile before building it:
    ```
    FROM 'image name'
    (ex: FROM node)

    COPY 'file you want to copy' 'path from inside image where you want to copy your file to'
    (ex: COPY index.js /home/app/index.js )

    WORKDIR 'path to working directory, like the root of the project. When this is set, all the commands we run next will run from that path'
    (ex: WORKDIR /home/app/)

    RUN 'command' (ex: npm install) 
    CMD ['command','file to apply command on'] (ex: ['node','index'])
    ```
5) Then with above config, suppose if our express server is running on port `3000` we need to run `docker run -it -p 3000:3000 'image name'`. Where left 3000 is the port we want the express to listen to in our local from 3000(right) which is the port inside the container. Its like, map 3000 port from container to 3000 port in my local machine.
6) Now, to push this image to docker hub, do the following:
    ```
    1) Sign in to docker website and create a respository.
    2) Tag our app to the repository created
    Example: `docker tag node-app preethamweb3/node-app` where 'node-app' is the name of the image in local and preethamweb3/node-app is the repository we created in docker.
    3) Then push it using `docker push preethamweb3/node-app`
    ```
