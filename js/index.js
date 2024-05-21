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
            updateNavScroll();
        });
    fetch("/templates/footer.html")
        .then((response) => response.text())
        .then((data) => {
            $("footer").html(data);
        });

    // Menu Button Spin Animation
    $(".toggleImage").click(handleRotationEffect);

    function handleRotationEffect() {
        const isRotated = $(".toggleImage").data("rotated");
        $(".toggleImage")
            .css("transform", isRotated ? "rotate(0deg)" : "rotate(45deg)")
            .data("rotated", !isRotated);
    }
});

// Navbar Scroll Effect
function updateNavScroll() {
    if (window.location.href == "http://theguitarshop.co/" || window.location.href == "http://127.0.0.1:5500/") {
        var navOpen = false;
        $("#main-nav").css("transition", "background-color 100ms linear, nav-shadow 100ms linear");
        $("#main-nav").addClass("bg-transparent").removeClass("nav-shadow");

        $(window).scroll(function () {
            var atTop = $(window).scrollTop() <= 0;
            $("#main-nav").toggleClass("bg-transparent", atTop).toggleClass("nav-shadow", !atTop);
        });

        $("#main-nav")
            .mouseenter(function () {
                $("#main-nav").removeClass("bg-transparent").addClass("nav-shadow");
            })
            .mouseleave(function () {
                if ($(window).scrollTop() <= 0) {
                    $("#main-nav").addClass("bg-transparent").removeClass("nav-shadow");
                    $(".dropdown-menu").mouseleave(function () {
                        $(this).removeClass("show");
                    });
                }
            });

        $(document).on("click", ".navbar-toggler", function () {
            navOpen = !navOpen;
            if ($(window).scrollTop() <= 0) {
                $("#main-nav").toggleClass("bg-transparent", navOpen).toggleClass("nav-shadow", navOpen);
            }
            handleRotationEffect();
        });
    }
}

// google reviews
function fetchReviews() {
    fetch("https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews")
        .then((response) => console.log(response))
        .then((data) => {})
        .catch((error) => {});
}
