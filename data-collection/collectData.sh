#!/bin/sh

OUTPUT_DIR=$1

#Collect environment data
wget -O $OUTPUT_DIR/EE/environmentData.json https://api.stats.x-road.global/v1/instances/EE
wget -O $OUTPUT_DIR/ee-test/environmentData.json https://api.stats.x-road.global/v1/instances/ee-test
wget -O $OUTPUT_DIR/ee-dev/environmentData.json https://api.stats.x-road.global/v1/instances/ee-dev

#Collect environment history for timeline
wget -O $OUTPUT_DIR/EE/history.json https://api.stats.x-road.global/v1/instances/EE/history
wget -O $OUTPUT_DIR/ee-test/history.json https://api.stats.x-road.global/v1/instances/ee-test/history
wget -O $OUTPUT_DIR/ee-dev/history.json https://api.stats.x-road.global/v1/instances/ee-dev/history