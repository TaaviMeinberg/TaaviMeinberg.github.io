/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function generateEnvironmentTotalsGraph(resultsJson) {
    let environmentTotalsData = [];

    // Push the specific data values from resultsJson file into a single array
    // Each index will be a separate bar
    if (resultsJson != null) {
        environmentTotalsData.push(resultsJson.subsystems);
        environmentTotalsData.push(resultsJson.members);
        environmentTotalsData.push(resultsJson.securityServers);
    }

    let ctx = document.getElementById('environmentTotalsBarCanvas').getContext('2d');

    // Create and customize the diagram
    let environmentTotalsChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            // determine the labels which are shown in the legend
            labels: ["Subsystems", "Members", "Security Servers"], 
            datasets: [{
                label: "Environment total",

                // Uses the array which holds the number of subsystems, members and security servers
                data: environmentTotalsData, 

                // Visual customization for the bars. Three rgba colour values for the three bars
                backgroundColor: [
                    'rgba(26, 163, 255, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],
                borderColor: [
                    'rgba(26, 163, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },

        // further, mostly visual, customization
        options: {
            plugins: {
                datalabels: {
                    font: {
                        weight: 'bold',
                        size: 20
                    },
                    clip: true
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false,
                labels: {
                    fontSize: 18
                }
            },
            title: {
                display: true,
                text: 'Environment totals',
                fontSize: 16
            }
        }
    })

    // Chart JS has a bug where charts are only visible after resizing the window (https://stackoverflow.com/questions/48343189/). 
    // Workaround is to update the chart manually after it's been created.
    graphsArray.push(environmentTotalsChart);
    setTimeout(function () { environmentTotalsChart.update(); }, 250);
}