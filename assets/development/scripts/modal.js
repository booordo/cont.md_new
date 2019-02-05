(function() {
    window.addEventListener("load", function() {
        var modals = Array.prototype.slice.call(document.querySelectorAll(".modal"));
        var btnsOpen = Array.prototype.slice.call(document.querySelectorAll(".js-open-modal"));
        var btnsClose = Array.prototype.slice.call(document.querySelectorAll(".modal__close"));
        var btnsControl = Array.prototype.slice.call(document.querySelectorAll(".modal__button"));
        modals.forEach(function(el) { el.addEventListener("click", onModalClick) });
        btnsOpen.forEach(function(el) { el.addEventListener("click", onOpenButtonClick) });
        btnsClose.forEach(function(el) { el.addEventListener("click", onCloseButtonClick) });
        btnsControl.forEach(function(el) { el.addEventListener("click", onControlButtonClick) });
        window.addEventListener("hashchange", onHashChange);
    })

    function onModalClick(e) {
        if (e.target.classList.contains("modal")) window.history.back(); 
    }

    function onOpenButtonClick(e) {
        open(e.target.getAttribute("data-src")); 
    }

    function onCloseButtonClick() {
        window.history.back();    
    }

    function onControlButtonClick() {
        window.history.back();    
    }

    function onHashChange() {
        if (window.location.hash !== "") return;
        Array.prototype.slice.call(document.querySelectorAll(".modal")).forEach(close);
    }

    function open(id) {
        window.location.hash = id;
        document.getElementById(id).classList.add("modal_active");
        disableScrolling();
    }

    function close(modal) {
        modal.classList.remove("modal_active");
        enableScrolling();
    }

    function enableScrolling() {
        document.body.style.overflow = '';
    }

    function disableScrolling() {
        document.body.style.overflow = 'hidden';
    }
})()