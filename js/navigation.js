/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function changeEnvironment(environment) {
    switch (environment) {
        case "ee-dev":
            window.location.href  = "../ee-dev/";
            break;

        case "ee-test":
            window.location.href = "../ee-test/";
            break;
        case "EE":
            window.location.href = "../EE/";
            break;
    }
}