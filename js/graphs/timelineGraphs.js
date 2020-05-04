/* eslint-disable for-direction */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Get max and min values for y-axis scale 
function getMaxValue(inputArray) {
    return Math.max.apply(Math, inputArray);
}
function getMinValue(inputArray) {
    return Math.min.apply(Math, inputArray);
}

// Get X number of entries from the data
// This determines how many data points are shown in the timeline
function getXLatestEntries(inputArray, numberOfEntries, interval) {
    let resultArray = [];
    let length = inputArray.length;
    let index = length - 1;
    for (let i = 0; i < numberOfEntries && index >= 0; i++) {
        resultArray.push(inputArray[index]);
        index -= interval;
    }
    return resultArray.reverse();
}

function generateSubsystemsTimelineGraph(metricsJson) {
    let allMetricsDates = [];
    let allMetricsSubsystemsData = [];
    let latestDates = [];
    let latestData = [];


    for (let i in metricsJson) {
        allMetricsDates.push(metricsJson[i].date);
        allMetricsSubsystemsData.push(metricsJson[i].subsystems);
    }

    latestDates = getXLatestEntries(allMetricsDates, 12, 1);
    latestData = getXLatestEntries(allMetricsSubsystemsData, 12, 1);

    let dataMaxValue = getMaxValue(latestData);
    let dataMinValue = getMinValue(latestData);
    let ctx = document.getElementById('subsystemsTimelineCanvas').getContext('2d');
    let subsystemsTimelineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: latestDates,
            datasets: [{
                data: latestData,
                label: "Subsystems",
                borderColor: "rgb(26, 163, 255)",
                fill: true,
                backgroundColor: "rgba(26, 163, 255, 0.2)"
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Subsystems timeline',
                fontSize: 16
            },
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: dataMaxValue + dataMaxValue * 0.2,
                        suggestedMin: dataMinValue - dataMinValue * 0.2
                    },
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 14
                }
            },
            plugins: {
                datalabels: {
                    align: 100,
                    anchor: 'start',
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        }
    })
    
    // Chart JS has a bug where charts are only visible after resizing the window (https://stackoverflow.com/questions/48343189/). 
    // Workaround is to update the chart manually after it's been created.
    graphsArray.push(subsystemsTimelineChart);
    setTimeout(function () { subsystemsTimelineChart.update(); }, 250);
}

function generateMembersTimelineGraph(metricsJson) {
    let allMetricsDates = [];
    let allMetricsMembersData = [];
    let latestDates = [];
    let latestData = [];

    if (metricsJson != null) {
        for (let i in metricsJson) {
            allMetricsDates.push(metricsJson[i].date);
            allMetricsMembersData.push(metricsJson[i].members);
        }
    }

    latestDates = getXLatestEntries(allMetricsDates, 12, 1);
    latestData = getXLatestEntries(allMetricsMembersData, 12, 1);

    let dataMaxValue = getMaxValue(latestData);
    let dataMinValue = getMinValue(latestData);
    let ctx = document.getElementById('membersTimelineCanvas').getContext('2d');
    let membersTimelineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: latestDates,
            datasets: [{
                data: latestData,
                label: "Members",
                borderColor: "rgb(255, 99, 132)",
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)"
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Members timeline',
                fontSize: 16
            },
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: dataMaxValue + dataMaxValue * 0.2,
                        suggestedMin: dataMinValue - dataMinValue * 0.2
                    },
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 14
                }
            },
            plugins: {
                datalabels: {
                    align: 100,
                    anchor: 'start',
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        }
    })

    // Chart JS has a bug where charts are only visible after resizing the window (https://stackoverflow.com/questions/48343189/). 
    // Workaround is to update the chart manually after it's been created.
    graphsArray.push(membersTimelineChart);
    setTimeout(function () { membersTimelineChart.update(); }, 250);
}

function generateSecurityServersTimelineGraph(metricsJson) {
    let allMetricsDates = [];
    let allMetricsSecurityServersData = [];
    let latestDates = [];
    let latestData = [];

    if (metricsJson != null) {
        for (let i in metricsJson) {
            allMetricsDates.push(metricsJson[i].date);
            allMetricsSecurityServersData.push(metricsJson[i].securityServers);
        }
    }

    latestDates = getXLatestEntries(allMetricsDates, 12, 1);
    latestData = getXLatestEntries(allMetricsSecurityServersData, 12, 1);

    let dataMaxValue = getMaxValue(latestData);
    let dataMinValue = getMinValue(latestData);
    let ctx = document.getElementById('securityserversTimelineCanvas').getContext('2d');
    let securityServersTimelineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: latestDates,
            datasets: [{
                data: latestData,
                label: "Security Servers",
                borderColor: "rgb(255, 206, 86)",
                fill: true,
                backgroundColor: "rgba(255, 206, 86, 0.2)"
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Security Servers timeline',
                fontSize: 16
            },
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: dataMaxValue + dataMaxValue * 0.2,
                        suggestedMin: dataMinValue - dataMinValue * 0.2
                    },
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                labels: {
                    fontSize: 14
                }
            },
            plugins: {
                datalabels: {
                    align: 100,
                    anchor: 'start',
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                }
            }
        }
    })

    // Chart JS has a bug where charts are only visible after resizing the window (https://stackoverflow.com/questions/48343189/). 
    // Workaround is to update the chart manually after it's been created.
    graphsArray.push(securityServersTimelineChart);
    setTimeout(function () { securityServersTimelineChart.update(); }, 250);
}