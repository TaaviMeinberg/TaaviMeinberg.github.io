/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function generateMembersDoughnutGraph(resultsJson) {
    let memberClassLabels = [];
    let memberClassData = [];

    // Sort the member counts so that it starts from the largest value
    if (resultsJson != null) {
        let sortedMemberClasses = resultsJson.memberClasses.sort(function (a, b) {
            return parseFloat(b.memberCount) - parseFloat(a.memberCount);
        })
        // turn COM, GOV, etc into more human readable labels
        for (let i in sortedMemberClasses) {
            switch(sortedMemberClasses[i].memberClass){
                case "COM":
                    memberClassLabels.push("Commercial members");
                    memberClassData.push(sortedMemberClasses[i].memberCount);
                    break;
                case "GOV":
                    memberClassLabels.push("Governmental members");
                    memberClassData.push(sortedMemberClasses[i].memberCount);
                    break;
                case "NGO":
                    memberClassLabels.push("Non-profit members");
                    memberClassData.push(sortedMemberClasses[i].memberCount);
                    break;
                case "NEE":
                    memberClassLabels.push("Non-Estonian members");
                    memberClassData.push(sortedMemberClasses[i].memberCount);
                    break;
            }
            
        }
    }

    let ctx = document.getElementById('membersPieCanvas').getContext('2d');
    let membersPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: memberClassLabels,
            datasets: [{
                label: 'Organization distribution',
                data: memberClassData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    font: {
                        weight: 'bold',
                        size: 20
                    },
                    offset: 15
                }
            },
            title: {
                display: true,
                text: 'Member class distribution',
                fontSize: 16
            },
            legend: {
                display: true,
                position: "top",
                labels: {
                    boxWidth: 20
                }
            }
        }
    })
    
    // Chart JS has a bug where charts are only visible after resizing the window (https://stackoverflow.com/questions/48343189/). 
    // Workaround is to update the chart manually after it's been created.
    graphsArray.push(membersPieChart);
    setTimeout(function () { membersPieChart.update(); }, 250);
}