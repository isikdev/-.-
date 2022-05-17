let menu = $('.menu');
    $('.btn').on("click", function(){
        menu.toggleClass('menu-active');
    });
$('.slider-block').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'linear',
    infinity: true
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 870,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ]
});
$('.material-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinity: true,
    responsive: [
        {
          breakpoint: 870,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ]
});
