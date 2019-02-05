(function () {
    window.addEventListener("load", function () {
        var elements = document.querySelectorAll(".js-accordion")
        elements = Array.prototype.slice.call(elements)
        elements.forEach(function (el) {
            el.addEventListener("click", onClick);
        });
    });

    function onClick(e) {
        var el = e.target;
	    var parentNode = el.parentNode;
	    if (!el.classList.contains('accordion__title')) return;
	    parentNode.classList.toggle('accordion__item_actived');
    }
})();