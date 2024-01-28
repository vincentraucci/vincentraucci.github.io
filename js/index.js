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
    if (window.location.href.includes("index.html")) {
        var navOpen = false;
        $("#main-nav").addClass("bg-transparent");
        console.log($("#main-nav").classList.value);

        $(window).scroll(function () {
            if ($(window).scrollTop() <= 0) {
                $("#main-nav").toggleClass("bg-transparent", navOpen);
            }
        });

        $(document).on("click", ".navbar-toggler", function () {
            navOpen = !navOpen;
            if ($(window).scrollTop() <= 0) {
                $("#main-nav").toggleClass("bg-black", navOpen);
            }
            handleRotationEffect();
        });
    }

    // Menu Button Spin Animation
    $(".toggleImage").click(handleRotationEffect);

    function handleRotationEffect() {
        const isRotated = $(".toggleImage").data("rotated");
        $(".toggleImage")
            .css("transform", isRotated ? "rotate(0deg)" : "rotate(45deg)")
            .data("rotated", !isRotated);
    }
});
