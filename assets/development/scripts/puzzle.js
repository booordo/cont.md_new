(function () {
    window.addEventListener("load", function () {
        var sectors = Array.prototype.slice.call(document.getElementById("sectorGroup").children);
        sectors.forEach(function (el) {
            el.addEventListener("mouseover", onMouseOver);
            el.addEventListener("mouseout", onMouseOut);
        });
    });

    function onMouseOver(e) {
        var el = e.target.parentElement;
        if (el.id != "circle") setColor(el);
        scale(el, 1.2);
        document.getElementById("sectorGroup").append(el);
    }

    function onMouseOut(e) {
        var el = e.target.parentElement;
        if (el.id != "circle") resetColor(el);
        scale(el, 1);
    }

    function scale(el, k) {
        var bbox = el.getBBox();
        var x = bbox.x + bbox.width / 2;
        var y = bbox.y + bbox.height / 2;
        el.setAttribute("transform", `translate(${x} ${y}) scale(${k}) translate(-${x} -${y})`);  
    }

    function fillPaths(el, color) {
        var paths = Array.prototype.slice.call(el.querySelectorAll("path"));
        paths.forEach(function (el) {
            el.setAttribute("fill", color);
        });
    }

    function setColor(el) {
        fill(el, "path", "#8e44ad");
        fill(el, "text", "#ffffff");
    }

    function resetColor(el) {
        fill(el, "path", "rgba(255,255,255,0.4)");
        fill(el, "text", "#000000");
    }

    function fill(el, target, color) {
        var targets = Array.prototype.slice.call(el.querySelectorAll(target));
        targets.forEach(function (el) {
            el.setAttribute("fill", color);
        });   
    }
})();