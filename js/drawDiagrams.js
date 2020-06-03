function drawDiagrams(env) {
    $.ajax({
        url: env + '/environmentData.json',
        dataType: 'json',
        success: function (resultsJson) {
            getDateAndInstance(resultsJson);
            generateMembersDoughnutGraph(resultsJson);
            generateEnvironmentTotalsGraph(resultsJson);
        }
    });

    $.ajax({
        url: env + '/history.json',
        dataType: 'json',
        success: function (historyJson) {
            generateSubsystemsTimelineGraph(historyJson);
            generateSecurityServersTimelineGraph(historyJson);
            generateMembersTimelineGraph(historyJson);
            displayYearlyChange(env, historyJson);

            $(document).ready(function () {
                checkDarkMode();
            });
        }
    });
    setEnvButton(env)
}

function setEnvButton(env) {
    switch (env) {
        case "ee-dev":
            $(".btn-env").each(function (index) {
                $(this).removeClass("isActive");
            });
            $("#devButton").addClass("isActive");
            break;

        case "ee-test":
            $(".btn-env").each(function (index) {
                $(this).removeClass("isActive");
            });
            $("#testButton").addClass("isActive");
            break;

        case "EE":
            $(".btn-env").each(function (index) {
                $(this).removeClass("isActive");
            });
            $("#prodButton").addClass("isActive");
            break;
    }
}