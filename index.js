$(window).scroll(function () {
    if ($(window).scrollTop() > $(".landing-video").offset().top + $(".landing-video").outerHeight() * 0.75) {
        $("#main-nav").addClass("bg-black").css({ "text-shadow": "none" });
        $(".dropdown-menu").addClass("bg-black").removeClass("bg-transparent");

        $(".navbar-toggler").on("click", function () {
            $("#main-nav").addClass("bg-black");
        });
    } else {
        $("#main-nav").removeClass("bg-black").css({ "text-shadow": "black 0px 0 20px" });
        $(".dropdown-menu").removeClass("bg-black").addClass("bg-transparent");
    }
});

if ($(window).width() < 768) {
    $(".landing-video").removeClass("img-fluid");
} else {
}

$("#video-cover").height($(".landing-video").height() - $("#main-nav").height());
