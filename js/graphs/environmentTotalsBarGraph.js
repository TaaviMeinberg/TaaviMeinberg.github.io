/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let environmentTotalsChart;

function generateEnvironmentTotalsGraph(resultsJson) {
    let environmentTotalsData = [];


    if (resultsJson != null) {
        environmentTotalsData.push(resultsJson.subsystems);
        environmentTotalsData.push(resultsJson.members);
        environmentTotalsData.push(resultsJson.securityServers);
    }

    // if graph exist, delete them before creating new ones
    if (typeof environmentTotalsChart != "undefined"){
        environmentTotalsChart.destroy();
    }

    let ctx = document.getElementById('environmentTotalsBarCanvas').getContext('2d');
    environmentTotalsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Subsystems", "Members", "Security Servers"],
            datasets: [{
                label: "Environment total",
                data: environmentTotalsData,
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
        plugins: [ChartDataLabels],
        options: {
            indexAxis: 'y',
            plugins: {
                datalabels: {
                    font: {
                        weight: 'bold',
                        size: 20
                    },
                    clip: true
                },
                title: {
                    display: true,
                    text: 'Environment totals',
                    font:{
                        size: 16
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        beginAtZero: true
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    })

    // Chart JS has a bug where charts are only visible after resizing the window (https://stackoverflow.com/questions/48343189/). 
    // Workaround is to update the chart manually after it's been created.
    graphsArray.push(environmentTotalsChart);
    setTimeout(function () { environmentTotalsChart.update(); }, 250);
}