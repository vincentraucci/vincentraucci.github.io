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
    var $mainNav = $("#main-nav");
    var $dropdownMenu = $(".dropdown-menu");
    var navOpen = false;

    function updateNavOnScroll() {
        console.log(navOpen);
        if (window.location.href.includes("index.html")) {
            if ($(window).scrollTop() === 0 && !navOpen) {
                $mainNav.removeClass("bg-black").removeClass("nav-shadow");
                $dropdownMenu.removeClass("bg-black").addClass("bg-transparent").removeClass("nav-shadow");
            } else {
                $mainNav.addClass("bg-black").addClass("nav-shadow");
                $dropdownMenu.addClass("bg-black").removeClass("bg-transparent").addClass("nav-shadow");
            }
        }
    }
    updateNavOnScroll();
    $(window).scroll(updateNavOnScroll);

    $(".navbar-toggler").click(function () {
        navOpen = !navOpen;
        console.log("clicled");
        if ($(window).scrollTop() === 0) {
            $mainNav.addClass("bg-black");
            if (!navOpen) {
                $mainNav.removeClass("bg-black");
            }
        }
        $(".toggleImage").click();
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
});
