$(document).ready(function () {
    /*
    Inject Head, Nav, and Footer
    */
    fetch("/templates/head.html")
        .then((response) => response.text())
        .then((data) => {
            $("head").prepend(data);
            $("nav").addClass("sticky-top");
        });
    fetch("/templates/nav.html")
        .then((response) => response.text())
        .then((data) => {
            $("nav").html(data);

            var currentFile = window.location.pathname.split("/")[1];
            if (currentFile == "index.html") {
                $("#nav-home").addClass("active");
            } else {
                $("#nav-" + currentFile).addClass("active");
            }
        });
    fetch("/templates/footer.html")
        .then((response) => response.text())
        .then((data) => {
            $("footer").html(data);
        });
    /*
    Navbar Scroll Effect
    */
    $(window).scroll(function () {
        if (window.location.href.includes("index.html")) {
            if ($(window).scrollTop() > $(".landing-video").offset().top + $(".landing-video").outerHeight() * 0.75) {
                $("#main-nav").addClass("bg-black").css({ "text-shadow": "none" }).addClass("nav-shadow");
                $(".dropdown-menu").addClass("bg-black").removeClass("bg-transparent").addClass("nav-shadow");

                $(".navbar-toggler").on("click", function () {
                    $("#main-nav").addClass("bg-black");
                });
            } else {
                $("#main-nav").removeClass("bg-black").css({ "text-shadow": "black 0px 0 20px" }).removeClass("nav-shadow");
                $(".dropdown-menu").removeClass("bg-black").addClass("bg-transparent").removeClass("nav-shadow");
            }
        } else {
            $("#main-nav").addClass("bg-black").css({ "text-shadow": "none" });
            $(".dropdown-menu").addClass("bg-black").removeClass("bg-transparent");
        }
    });

    /*
    Menu Button Spin Animation
    */
    $(".toggleImage").click(function () {
        const isRotated = $(this).data("rotated");
        $(this)
            .css("transform", isRotated ? "rotate(0deg)" : "rotate(45deg)")
            .data("rotated", !isRotated);
    });

    /*
    Alter landing video scale 
    $("#video-cover").height($(".landing-video").height() - $("#main-nav").height());

    if ($(window).width() < 768) {
        $(".landing-video").removeClass("img-fluid");
    }
    */
});
