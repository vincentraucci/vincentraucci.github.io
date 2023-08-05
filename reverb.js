function _RRR() {
    var e = document.createElement("script");
    (e.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"),
        (e.onload = function () {
            var e = document.createElement("script");
            (e.src = "https://static.reverb-assets.com/assets/webpack/reverb-embed.js"), document.body.appendChild(e);
        }),
        document.body.appendChild(e);
}
window.addEventListener ? window.addEventListener("load", _RRR, !1) : window.attachEvent ? window.attachEvent("onload", _RRR) : (window.onload = _RRR);
