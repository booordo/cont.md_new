(function () {
    window.addEventListener("load", function () {
        var elements = document.querySelectorAll(".js-image-swap");
        elements = Array.prototype.slice.call(elements)
        elements.forEach(function (el) {
            el.addEventListener("mouseenter", onMouseEnter);
        });
        elements.forEach(function (el) {
            el.addEventListener("mouseleave", onMouseLeave);
        });
    });

    function onMouseEnter(e) {
        var el = e.target;
        var curSrc = el.getAttribute('src');
        var newSrc = el.getAttribute('data-src');
        el.setAttribute('src', newSrc);
        el.setAttribute('data-src', curSrc);
    }

    function onMouseLeave(e) {
        var el = e.target;
        var curSrc = el.getAttribute('src');
        var newSrc = el.getAttribute('data-src');
        el.setAttribute('src', newSrc);
        el.setAttribute('data-src', curSrc);
    }

})();