# X-Road Environment Dashboard

A simple dashboard for displaying the metrics of an X-tee environment.



## Feature history
| Date       |                                                Feature |
| ---------- | ----------------------------------------------------:  |
| 05.07.2019 |                                        Initial release |
| 17.07.2019 |                          Added support for history API |
| 23.07.2019 |                                        Added dark mode |
| 23.07.2019 |                            Added placeholder json data |
| 01.08.2019 |                              Added growth visualization|
| 30.01.2020 |  Added simple navigation between different environments|
| 24.04.2020 |                             Quality of Use improvements|

## Environment data

Data for each environment is read from the environmentData.json and history-${env}.json files which are located in the same folder as the specific environment's index.html file. By default, they contain placeholder data.

These files should be updated and overwritten using the: X-Road Simple Stats Collector script and the history API:
- [X-Road Simple Stats Collector ](https://github.com/petkivim/x-road-simple-stats-collector)
- [History API](https://app.swaggerhub.com/apis-docs/NIIS/x-road-statistics/1.0.0#/)