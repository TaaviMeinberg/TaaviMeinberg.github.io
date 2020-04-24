/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function getStartOfYearValue(historyJson, metric) {
    let currentYear = new Date().getFullYear();

    for (let i = 0; i < historyJson.length; i++) {
        if (historyJson[i].date == currentYear + "-01-01") {

            if (metric == "subsystems") {
                return historyJson[i].subsystems;
            }
            else if (metric == "members") {
                return historyJson[i].members;
            }
            else if (metric == "securityServers") {
                return historyJson[i].securityServers;
            }
        }
    }
}

function getCurrentValue(currentDataJson, metric) {
    if (metric == "subsystems") {
        return currentDataJson.subsystems;
    }
    else if (metric == "members") {
        return currentDataJson.members;
    }
    else if (metric == "securityServers") {
        return currentDataJson.securityServers;
    }
}

function displayYearlyChange(historyJson) {
    $.ajax({
        url: './environmentData.json',
        dataType: 'json',
        success: function (environmentData) {
            let currentYear = new Date().getFullYear();

            let beginningOfYearSubsystems = getStartOfYearValue(historyJson, "subsystems");
            let beginningOfYearMembers = getStartOfYearValue(historyJson, "members");
            let beginningOfYearServers = getStartOfYearValue(historyJson, "securityServers");

            let currentSubsystems = getCurrentValue(environmentData, "subsystems");
            let currentMembers = getCurrentValue(environmentData, "members");
            let currentServers = getCurrentValue(environmentData, "securityServers");

            //Subsystem yearly change
            $('#subsystemsBeginningValue').text("Beginning of "+currentYear+": "+beginningOfYearSubsystems);
            $('#subsystemsCurrentValue').text("Current value: "+currentSubsystems);
            if(currentSubsystems > beginningOfYearSubsystems){
                $("#subsystemsGrowthChange").removeClass();
                $("#subsystemsGrowthChange").addClass("growthMetricPositive");
                $("#subsystemsGrowthChange").text("Change: +"+(currentSubsystems-beginningOfYearSubsystems));
            }
            else if(currentSubsystems == beginningOfYearSubsystems){
                $("#subsystemsGrowthChange").removeClass();
                $("#subsystemsGrowthChange").addClass("growthMetricNeutral");
                $("#subsystemsGrowthChange").text("No change");
            }
            else {
                $("#subsystemsGrowthChange").removeClass();
                $("#subsystemsGrowthChange").addClass("growthMetricNegative");
                $("#subsystemsGrowthChange").text("Change: -"+(beginningOfYearSubsystems-currentSubsystems));
            }

            //Members yearly change
            $('#membersBeginningValue').text("Beginning of "+currentYear+": "+beginningOfYearMembers);
            $('#membersCurrentValue').text("Current value: "+currentMembers);
            if(currentMembers > beginningOfYearMembers){
                $("#membersGrowthChange").removeClass();
                $("#membersGrowthChange").addClass("growthMetricPositive");
                $("#membersGrowthChange").text("Change: +"+(currentMembers-beginningOfYearMembers));
            }
            else if(currentMembers == beginningOfYearMembers){
                $("#membersGrowthChange").removeClass();
                $("#membersGrowthChange").addClass("growthMetricNeutral");
                $("#membersGrowthChange").text("No change");
            }
            else {
                $("#membersGrowthChange").removeClass();
                $("#membersGrowthChange").addClass("growthMetricNegative");
                $("#membersGrowthChange").text("Change: -"+(beginningOfYearMembers-currentMembers));
            }

            //Servers yearly change
            $('#serversBeginningValue').text("Beginning of "+currentYear+": "+beginningOfYearServers);
            $('#serversCurrentValue').text("Current value: "+currentServers);
            if(currentServers > beginningOfYearServers){
                $("#serversGrowthChange").removeClass();
                $("#serversGrowthChange").addClass("growthMetricPositive");
                $("#serversGrowthChange").text("Change: +"+(currentServers-beginningOfYearServers));
            }
            else if(currentServers == beginningOfYearServers){
                $("#serversGrowthChange").removeClass();
                $("#serversGrowthChange").addClass("growthMetricNeutral");
                $("#serversGrowthChange").text("No change");
            }
            else {
                $("#serversGrowthChange").removeClass();
                $("#serversGrowthChange").addClass("growthMetricNegative");
                $("#serversGrowthChange").text("Change: -"+(beginningOfYearServers-currentServers));
            }
        }
    });
}