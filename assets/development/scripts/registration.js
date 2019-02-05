(function () {
    var curOrganizationType = "";

    window.addEventListener("load", function () {
        var elements = document.querySelectorAll(".js-change-auth-form")
        elements = Array.prototype.slice.call(elements)
        elements.forEach(function (el) {
            el.addEventListener("click", onClick);
        });
    });

    function onClick(e) {
        var el = e.target;
        var organizationType = el.attributes.for.value;
        if (curOrganizationType === organizationType) {
            return;
        }
        curOrganizationType = organizationType;
	    if (curOrganizationType == "individual") {
            document.getElementById("title_input_group").classList.add("auth-form__input-group_hidden");
            // document.getElementById("name_input_group").classList.remove("auth-form__input-group_hidden");
            // document.getElementById("last_name_input_group").classList.remove("auth-form__input-group_hidden");
        } else {
            document.getElementById("title_input_group").classList.remove("auth-form__input-group_hidden");
            // document.getElementById("name_input_group").classList.add("auth-form__input-group_hidden");
            // document.getElementById("last_name_input_group").classList.add("auth-form__input-group_hidden");
        }
    }
})();