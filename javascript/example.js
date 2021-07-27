'use strict'
//SLIDER
$('.slider').slick();
// $(".slick-next").click(IsActive)
// $(".slick-prev").click(IsActive)

// function IsActive() {
//     $(".image-slider").removeClass("active")
//     setTimeout(() => {
//         $(".image-slider").addClass("active")
//     }, 2000);
// }

//ScrollHeader
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('headeractive');
            $('#headerUp').css("display", "none")
        } else {
            $('#header').removeClass('headeractive');
            $('#headerUp').css("display", "block")

        }
    })
})
////////////////////////////////////////
var btn = $('#scrollUp');
//StartScrollUp
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
//EndScrollUp
////////////////////////////////////////

//Plus Minus//
$(function () {
    $('.increment').click(function () {
        var valueElement = $('#' + $(this).siblings('input').attr('id'));

        if ($(this).hasClass('plus')) {
            valueElement.val(Math.max(parseInt(valueElement.val()) + 1));
        } else if (valueElement.val() > 0) // Stops the value going into negatives
        {
            valueElement.val(Math.max(parseInt(valueElement.val()) - 1));
        }

        return false;
    });

});
//Plus Minus//
////////////////////////////////////////

//Start IndexCount 
$(document).ready(function () {
    $('.counter').each(function () {
        var cnt = $(this);
        var countTo = cnt.attr('data-count');

        $({
            countNum: cnt.text()
        }).animate({
                countNum: countTo
            }, {

                duration: 2000,
                easing: 'linear',
                step: function () {
                    cnt.text(Math.floor(this.countNum))
                },
                complete: function () {
                    cnt.text(this.countNum);
                }
            }

        )
    })
})
//End IndexCount 
////////////////////////////////////////



////////////////Slick-Slider///////////////////////
$('.singleProductSlider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [

        {
            breakpoint: 1360,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 2
            }
        }
        ,
        {
            breakpoint: 400,
            settings: {
                dots:false,
                arrows: false,
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});
//End newProduct 
$('.newProductSlider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [

        {
            breakpoint: 1360,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                dots:false,
                arrows: false,
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
        
    ]
});
//Single Product//
$('.swiper-top').slick({
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

});
$('.swiper-bottom').slick({
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
});