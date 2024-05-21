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

// google reviews
function fetchReviews() {
    fetch("https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews")
        .then((response) => console.log(response))
        .then((data) => {})
        .catch((error) => {});
}
