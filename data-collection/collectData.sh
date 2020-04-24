#!/bin/sh

#Collect environment data
wget -O /var/www/html/dashboard/EE/environmentData.json https://api.stats.x-road.global/v1/instances/EE
wget -O /var/www/html/dashboard/ee-test/environmentData.json https://api.stats.x-road.global/v1/instances/ee-test
wget -O /var/www/html/dashboard/ee-dev/environmentData.json https://api.stats.x-road.global/v1/instances/ee-dev

#Collect environment history for timeline
wget -O /var/www/html/dashboard/EE/history-prod.json https://api.stats.x-road.global/v1/instances/EE/history
wget -O /var/www/html/dashboard/ee-test/history-test.json https://api.stats.x-road.global/v1/instances/ee-test/history
wget -O /var/www/html/dashboard/ee-dev/history-dev.json https://api.stats.x-road.global/v1/instances/ee-dev/history