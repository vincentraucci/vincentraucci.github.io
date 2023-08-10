$(window).scroll(function () {
    if (window.location.href.includes("index.html")) {
        if ($(window).scrollTop() > $(".landing-video").offset().top + $(".landing-video").outerHeight() * 0.75) {
            $("#main-nav").addClass("bg-black").css({ "text-shadow": "none" }).addClass("nav-shadow");
            $(".dropdown-menu").addClass("bg-black").removeClass("bg-transparent");

            $(".navbar-toggler").on("click", function () {
                $("#main-nav").addClass("bg-black");
            });
        } else {
            $("#main-nav").removeClass("bg-black").css({ "text-shadow": "black 0px 0 20px" }).removeClass("nav-shadow");
            $(".dropdown-menu").removeClass("bg-black").addClass("bg-transparent");
        }
    } else {
        $("#main-nav").addClass("bg-black").css({ "text-shadow": "none" });
        $(".dropdown-menu").addClass("bg-black").removeClass("bg-transparent");
    }
});

$(".toggleImage").click(function () {
    const isRotated = $(".toggleImage").data("rotated");
    $(".toggleImage").css("transform", isRotated ? "rotate(0deg)" : "rotate(45deg)");
    $(".toggleImage").data("rotated", !isRotated);
});

$("#video-cover").height($(".landing-video").height() - $("#main-nav").height());

if ($(window).width() < 768) {
    $(".landing-video").removeClass("img-fluid");
}

$(function () {
    $(".pop").on("click", function () {
        $(".imagepreview").attr("src", $(this).attr("src"));
        $("#imagemodal").css("display: block;");
    });
});
