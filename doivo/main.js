



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
            slideBy:3,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        }
    }
})



$('.faq_btn_icon').on('click',function(event){
    console.log(event)
    event.next().children('p').slideDown();
})
