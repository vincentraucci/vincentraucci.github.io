var scripts = [];
var loaded = false;

function _RRR() {
    loaded = false;
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

function applyFilters() {
    console.log(filteredListings.attr("data-reverb-search-sort"));
    $("#reverb-listings").empty().replaceWith(filteredListings);
    _RRR();
}
