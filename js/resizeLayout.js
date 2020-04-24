pieAndBarResize();
timelineResize();
window.onresize = function () {
    pieAndBarResize();
    timelineResize();
}

function pieAndBarResize(){
    if (window.innerWidth < 1280) {
        $(".pieAndBarResize").each(function () {
            $(this).removeClass();
            $(this).addClass("pieAndBarResize col-12");
        });
    } else {
        $(".pieAndBarResize").each(function () {
            $(this).removeClass();
            $(this).addClass("pieAndBarResize col-6");
        });
    }
}

function timelineResize() {
    if (window.innerWidth < 1920) {
        $(".timelineResize").each(function () {
            $(this).removeClass();
            $(this).addClass("timeline col-12");
        });
    } else {
        $(".timelineResize").each(function () {
            $(this).removeClass();
            $(this).addClass("timeline col-4");
        });
    }
}

