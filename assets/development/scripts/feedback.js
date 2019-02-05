(function () {
    window.addEventListener("load", function () {
        var elements = document.querySelectorAll("input[type=tel]")
        elements = Array.prototype.slice.call(elements)
        elements.forEach(function (el) {
            el.addEventListener("keypress", onKeyPress);
        });
    });

    function onKeyPress(e) {
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        var chr = getChar(e);
        if (chr == null) return;
        if ((chr < '0' || chr > '9') && (chr !== "+" && chr !== "(" && chr !== ")" && chr !== " ")) {
            e.preventDefault();
        }
    }
    
    function getChar(e) {
        if (e.which == null) {
            if (e.keyCode < 32) return null;
            return String.fromCharCode(e.keyCode) // IE
        }
        if (e.which != 0 && e.charCode != 0) {
            if (e.which < 32) return null;
            return String.fromCharCode(e.which) // остальные
        }
        return null; // специальная клавиша
    }

})();