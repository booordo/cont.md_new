var YTPlayer;

function onYouTubeIframeAPIReady() {
    var reviews = Array.prototype.slice.call(document.querySelectorAll(".reviews__video-box"));
    reviews.forEach(function(el) {
        new YT.Player(el.id);   
    });
}

(function () {
    var modal = document.getElementById('videoModal');

    window.addEventListener("load", function () {
        var openLinks = document.querySelectorAll(".js-video-open");
        var closeLinks = document.querySelectorAll(".js-video-close");
        openLinks = Array.prototype.slice.call(openLinks);
        closeLinks = Array.prototype.slice.call(closeLinks);
        openLinks.forEach(function (el) {
            el.addEventListener("click", onOpenLinkClick);
        });
        closeLinks.forEach(function (el) {
            el.addEventListener("click", onCloseLinkClick);
        });
    });

    function onOpenLinkClick(e) {
        if (!YTPlayer) return;
        disableScrolling();
        modal.classList.add('video_actived');
        YTPlayer.loadVideoById(e.target.getAttribute('data-target'));
        YTPlayer.playVideo();
        e.preventDefault();
    }

    function onCloseLinkClick(e) {
        if (!YTPlayer) return;
        enableScrolling();
        modal.classList.remove('video_actived');
        YTPlayer.pauseVideo();
        e.preventDefault();
    }

    function enableScrolling() {
        document.body.style.overflow = '';
    }

    function disableScrolling() {
        document.body.style.overflow = 'hidden';
    }

})();