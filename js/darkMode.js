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

    graphsArray.forEach(graph => {
        graph.options.plugins.datalabels.color = "white";
        graph.options.legend.labels.fontColor = "white";
        graph.options.title.fontColor = "white";

        // if graph's scales property uses x and y axis
        if (typeof graph.options.scales !== 'undefined' && graph.options.scales !== 'undefined') {
            graph.options.scales.yAxes[0].ticks.minor.fontColor = "white";
            graph.options.scales.yAxes[0].gridLines.color = "#404040";
            graph.options.scales.xAxes[0].ticks.minor.fontColor = "white";
            graph.options.scales.xAxes[0].gridLines.color = "#404040";
        }
        graph.update();
    });

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
    //$("#darkModeButton").removeClass("btn-light");
    //$("#darkModeButton").addClass("btn-dark");
    $("#darkModeButton").html("Dark mode");
    changeButtonClasses("off")

    graphsArray.forEach(graph => {
        graph.options.plugins.datalabels.color = "#666666";
        graph.options.legend.labels.fontColor = "#666666";
        graph.options.title.fontColor = "#666666";

        // if graph's scales property uses x and y axis
        if (typeof graph.options.scales !== 'undefined' && graph.options.scales !== 'undefined') {
            graph.options.scales.yAxes[0].ticks.minor.fontColor = "#737373";
            graph.options.scales.yAxes[0].gridLines.color = "#e6e6e6";
            graph.options.scales.xAxes[0].ticks.minor.fontColor = "#737373";
            graph.options.scales.xAxes[0].gridLines.color = "#e6e6e6";
        }
        graph.update();
    });

    localStorage.setItem("darkModeEnabled", "false");
}

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