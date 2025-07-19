$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('nav').toggleClass('open');
    });
    $('nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('nav').removeClass('open');
    });
});