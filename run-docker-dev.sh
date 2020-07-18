#!/bin/sh
docker-compose -p ricimon_com-dev -f docker-compose.dev.yml up -d && docker exec -it ricimon.com-dev sh -c "yarn start"
