$(document).ready(function() {
    var t = $(".vanillatop");

    function e(n) {
        var o = window.pageYOffset,
            a = Math.floor(Date.now());
        ! function t() {
            Math.easeInOutQuad = function(t) {
                return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
            };
            var e = Math.min(1, (Math.floor(Date.now()) - a) / n);
            window.scroll(0, Math.ceil(Math.easeInOutQuad(e) * (0 - o) + o)), 0 === window.pageYOffset && callback(), requestAnimationFrame(t)
        }()
    }
    t.on("click", function() {
        window.requestAnimationFrame ? e(700) : window.scrollTo(0, 0)
    }), $(window).on("scroll", function() {
        280 < document.body.scrollTop || 280 < document.documentElement.scrollTop ? (t.removeAttr("style", "transform: translateX(120px);"), t.attr("style", "transform: translateX(0);")) : (t.removeAttr("style", "transform: translateX(0);"), t.attr("style", "transform: translateX(120px);"))
    });
});
