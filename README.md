# api-protos-node
Protobufs in nodejs

## Build
```shell
# Generate js files
$ docker build -t dopltechnologies/api-protos-node --build-arg CACHEBUST="$(curl https://api.github.com/repos/dopl-technologies/api-protos/commits/main 2>&1 | grep '"date"' | tail -n 1)" -f build.Dockerfile .

# Copy generated files to local dir
$ docker cp $(docker create --rm dopltechnologies/api-protos-node:latest):/output/. ./src/protos
```