$(function(){
    $('.slider__inner-box').slick({
        prevArrow: '<img src="images/arrow-left.svg" alt="" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="" class="slider__arrow slider__arrow-right">',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                arrows: false
              }
            }
        ]
    });
    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active'); 
    });
});