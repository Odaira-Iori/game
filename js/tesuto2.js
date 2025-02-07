window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
        blackBg.classList.toggle('active');

        // ゲームの一時停止・再開をトグルする
        togglePause();
    });

    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
        blackBg.classList.remove('active');
    });
};