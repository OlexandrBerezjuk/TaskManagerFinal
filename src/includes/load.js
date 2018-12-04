window.addEventListener('load', function () {
    f_hideMenu();
    f_buildSlider();
});
window.addEventListener('resize', function () {
    f_hideMenu();
    f_buildSlider();
});

window.addEventListener('scroll', function (e) {
    let scrollTopFix = function () {
        if ('scrollingElement' in document) {
            return document.scrollingElement;
        }

        if (navigator.userAgent.indexOf('WebKit') != -1) {
            return document.body;
        }
        return document.documentElement;
    }

    var distTop = scrollTopFix().scrollTop;

    var bar = document.querySelector('.headerMenuScrollable');

    if (distTop > 300) {
        bar.classList.add('headerMenuScrollableFixed');
    }

    if (distTop < 50) {
        if (distTop == 0) {
            bar.classList.remove('headerMenuScrollableFixed');
        }
    }
});