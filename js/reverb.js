window.addEventListener ? window.addEventListener("load", _RRR, !1) : window.attachEvent ? window.attachEvent("onload", _RRR) : (window.onload = _RRR);

var filteredListings = $("<div>", {
    id: "reverb-listings",
    "data-reverb-embed-listings": "",
    "data-reverb-search-shop": "theguitarshopnj",
    "data-reverb-search-per-page": "200",
    "data-reverb-currency": "USD",
    "data-reverb-search-sort": "",
    style: "display: block;",
});

noItems = false;
addObserver();

function _RRR() {
    scripts = [];
    for (var i = 0; i < scripts.length; i++) {
        scripts[i].remove();
    }
    var e = document.createElement("script");
    e.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
    scripts.push(e); // Track the added script
    e.onload = function () {
        var er = document.createElement("script");
        er.src = "https://static.reverb-assets.com/assets/webpack/reverb-embed.js";
        scripts.push(er); // Track the added script
        document.body.appendChild(er);
    };
    document.body.appendChild(e);
}

function applyFilters() {
    $("#reverb-error").text("Loading items...");
    if (filteredListings) {
        $("#reverb-listings").empty().replaceWith(filteredListings);
        _RRR();
    }
}

// event listener for item list
function addObserver() {
    var $div = $("#reverb-content");
    var config = { childList: true, subtree: true, characterData: true };

    var callback = function (mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.type === "childList" || mutation.type === "characterData") {
            }

            if (noItems) {
                const message = $("#reverb-listings").children(0).children().length != 0 ? "" : "Regrettably, no items matching these filters are currently available online. We invite you to visit us in person to explore our full selection.";
                $("#reverb-error").text(message);
                noItems = false;
            } else {
                //$("#reverb-error").text("Loading items...");
                noItems = true;
            }
        }
    };

    var observer = new MutationObserver(callback);
    observer.observe($div[0], config);
}
