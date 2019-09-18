/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function getDateAndInstance(resultsJson) {
    let dateShown = document.getElementById("gatheredDate");
    let environmentShown = document.getElementById("environmentTag");
    let dateGathered;
    let instanceIdentifier;

    if (resultsJson != null) {
        dateGathered = resultsJson.date;
        instanceIdentifier = resultsJson.instanceIdentifier;

        dateShown.textContent = "Data gathered: " + dateGathered;
        environmentShown.textContent = "Environment: " + instanceIdentifier;
    }

}