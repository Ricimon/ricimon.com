#!/bin/sh

docker_compose_down() {
  echo "Running docker-compose down. Press CTRL-C again to kill."
  docker-compose -p ricimon_com-dev -f docker-compose.dev.yml down
}

trap docker_compose_down INT TERM

docker-compose -p ricimon_com-dev -f docker-compose.dev.yml up --build
