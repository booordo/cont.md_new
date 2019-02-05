(function () {
	window.addEventListener("load", function () {
		var tooglers = document.querySelectorAll(".js-dropdown-toggler");
		var sublists = document.querySelectorAll(".navbar__item_top_multilevel");
		tooglers = Array.prototype.slice.call(tooglers);
		sublists = Array.prototype.slice.call(sublists);
		tooglers.forEach(function (el) {
			el.addEventListener("click", onTogglerClick);
		});
		sublists.forEach(function (el) {
			el.addEventListener("click", onSublistClick);
		});
	});

	function onTogglerClick(e) {
		var el = e.target;
		var target;
		if (el.classList.contains('js-dropdown-toggler')) {
			target = document.getElementById(el.attributes['data-target'].value);
		} else {
			el = el.parentElement;
			target = document.getElementById(el.attributes['data-target'].value);
		}
		if (el.classList.contains('navbar-toggler_actived')) {
			enableScrolling();
		} else {
			disableScrolling();
		}
		el.classList.toggle('navbar-toggler_actived');
		target.classList.toggle('header__navbar_actived');
	}

	function onSublistClick(e) {
		var el = e.target;
		var sublist = el.querySelector('.navbar__sublist_top');
		if (window.innerWidth < 901) {
			sublist.classList.toggle('navbar__sublist_top_actived');
		}
	}

	function enableScrolling() {
		document.body.style.overflow = '';
	}

	function disableScrolling() {
		document.body.style.overflow = 'hidden';
	}

})();