$('.dropdown').mouseenter(function () {
    if (!$('.navbar-toggle').is(':visible')) { // disable for mobile view
        if (!$(this).hasClass('open')) { // Keeps it open when hover it again
            $('.dropdown-toggle', this).trigger('click');
        }
    }
});

$('.news_container').hover(
    function () { $(this).children().slideDown(); },
    function () { $(this).children().slideUp(); }
)


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        },
        786: {
            items: 3,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        }
    }
})
