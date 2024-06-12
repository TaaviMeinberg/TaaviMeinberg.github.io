/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

let darkModeEnabled = false;
let graphsArray = []; // When a new graph is created, it will be pushed into this array
let paragraphsArray = [];
let h2Array = [];

function darkModeOn() {
    $(document.body).css({ "background-color": "#262626", "transition": "background-color 0.5s ease" });
    $("#title").css({ "color": "white" });
    $("#gatheredDate").css({ "color": "white" });
    $("#environmentTag").css({ "color": "white" });
    paragraphsArray = document.getElementsByTagName("p");
    h2Array = document.getElementsByTagName("h2");

    for (let i = 0; i < paragraphsArray.length; i++) {
        if (paragraphsArray[i].classList == 0) {
            paragraphsArray[i].style.color = "white";
        }
    }

    for (let i = 0; i < h2Array.length; i++) {
        h2Array[i].style.color = "white";
    }

    $("#horizontalLine").css({ "border-top": "1px solid #404040" });
    $("#darkModeButton").removeClass("btn-dark");
    changeButtonClasses("on")
    $("#darkModeButton").addClass("btn-light");
    $("#darkModeButton").html("Light mode");

    chartsDarkmodeToggle(graphsArray, true);

    localStorage.setItem("darkModeEnabled", "true");
}

function darkModeOff() {
    $(document.body).css({ "background-color": "white", "transition": "background-color 0.5s ease" });
    $("#title").css({ "color": "black" });
    $("#gatheredDate").css({ "color": "black" });
    $("#environmentTag").css({ "color": "black" });
    paragraphsArray = document.getElementsByTagName("p");
    h2Array = document.getElementsByTagName("h2");

    for (let i = 0; i < paragraphsArray.length; i++) {
        if (paragraphsArray[i].classList == 0) {
            paragraphsArray[i].style.color = "black";
        }
    }

    for (let i = 0; i < h2Array.length; i++) {
        h2Array[i].style.color = "black";
    }

    $("#horizontalLine").css({ "border-top": "1px solid #e6e6e6" });
    $("#darkModeButton").html("Dark mode");

    changeButtonClasses("off");

    chartsDarkmodeToggle(graphsArray, false);

    localStorage.setItem("darkModeEnabled", "false");
}

// HELPERS

function changeButtonClasses(enableDarkMode) {
    buttonsArray = $('.btn')
    if (enableDarkMode == "off") {
        $('.btn').removeClass("btn-light");
        $('.btn').addClass("btn-dark");
    }
    else {
        $('.btn').removeClass("btn-dark");
        $('.btn').addClass("btn-light");
    }

}

function toggleDarkMode() {
    darkModeEnabledValue = localStorage.getItem("darkModeEnabled");

    if (darkModeEnabledValue == "false" || darkModeEnabledValue == null) {
        darkModeOn();
    } else if (darkModeEnabledValue == "true") {
        darkModeOff();
    }
}

function checkDarkMode() {
    darkModeEnabledValue = localStorage.getItem("darkModeEnabled");

    if (darkModeEnabledValue == "true") {
        darkModeOn();
    } else if (darkModeEnabledValue == "false") {
        darkModeOff();
    }
}

function chartsDarkmodeToggle(arrayOfGraphs, toggleOn) {
    arrayOfGraphs.forEach(graph => {

        if (toggleOn == true) {
            // DARKMODE ON, make text light coloured
            graph.options.plugins.datalabels.color = "white";
            graph.options.plugins.legend.labels.color = "white";
            graph.options.plugins.title.color = "white";

            if (graph.options.type == "bar") {
                graph.options.scales["xAxes"].ticks.color = "white";
                graph.options.scales["xAxes"].grid.color = "#404040";
                graph.options.scales["yAxes"].ticks.color = "white";
                graph.options.scales["yAxes"].grid.color = "#404040";

            } else if (graph.options.type == "line") {
                graph.options.scales["x"].ticks.color = "white";
                graph.options.scales["x"].grid.color = "#404040";
                graph.options.scales["yAxes"].ticks.color = "white";
            }
        } else {
            // DARKMODE OFF, make text dark coloured
            graph.options.plugins.datalabels.color = "#666666";
            graph.options.plugins.legend.labels.color = "#666666";
            graph.options.plugins.title.color = "#666666";

            if (graph.options.type == "bar") {
                graph.options.scales["xAxes"].ticks.color = "#737373";
                graph.options.scales["xAxes"].grid.color = "#e6e6e6";
                graph.options.scales["yAxes"].ticks.color = "#737373";
                graph.options.scales["yAxes"].grid.color = "#e6e6e6";

            } else if (graph.options.type == "line") {
                graph.options.scales["x"].ticks.color = "#737373";
                graph.options.scales["x"].grid.color = "#e6e6e6";
                graph.options.scales["yAxes"].ticks.color = "#737373";
            }
        }
        graph.update();
    });
}