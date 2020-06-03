#!/bin/sh

#Collect environment data
wget -O /var/www/html/stats/EE/environmentData.json https://api.stats.x-road.global/v1/instances/EE
wget -O /var/www/html/stats/ee-test/environmentData.json https://api.stats.x-road.global/v1/instances/ee-test
wget -O /var/www/html/stats/ee-dev/environmentData.json https://api.stats.x-road.global/v1/instances/ee-dev

#Collect environment history for timeline
wget -O /var/www/html/stats/EE/history.json https://api.stats.x-road.global/v1/instances/EE/history
wget -O /var/www/html/stats/ee-test/history.json https://api.stats.x-road.global/v1/instances/ee-test/history
wget -O /var/www/html/stats/ee-dev/history.json https://api.stats.x-road.global/v1/instances/ee-dev/history