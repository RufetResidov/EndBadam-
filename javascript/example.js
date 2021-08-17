'use strict'
//Animation OnlOad
$(window).on('load', function () {
    setTimeout(function () {
        $(".loadImg").hide()
        $("body").css("overflow-y", "scroll")
    }, 300);
});
//Animation OnlOad

//ScrollUp
var btn = $('#scrollUp');
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
//ScrollHeader
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#header').addClass('headeractive');
        } else {
            $('#header').removeClass('headeractive');

        }
    })
})
////////////////////////////////////////
$("#exampleModal").on("hidden.bs.modal", function () {
    $("body").css("overflow-y", "scroll")
});

//MobileHeader
$(".cate-btn").click(function (event) {
    event.stopPropagation();
    $(".mobile-nav").fadeToggle(300);
})
$(".exit").click(function (event) {
    event.stopPropagation();
    $(".mobile-nav").fadeOut(300);
})
$(document).ready(function () {

    var load_flag = true;
    $(document).scroll(function () {

        var mywindow = $(window);
        var mypos = mywindow.scrollTop();
        var up = false;
        var newscroll;
        mywindow.scroll(function () {
            newscroll = mywindow.scrollTop();
            if (newscroll > mypos && !up) {
                $('#mobile-header ').fadeOut();
                up = !up;
                console.log(up);
            } else if (newscroll < mypos && up) {
                $('#mobile-header ').fadeIn();
                up = !up;
            }
            mypos = newscroll;
        });
    });
});
//MobileHeader
//SLIDER
$('.slider').slick();
////////////////////////////////////////

//Start IndexCount 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2050) {
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
        }
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.counterr').each(function () {
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
        }
    })

})
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
        },
        {
            breakpoint: 300,
            settings: {
                dots: false,
                arrows: false,
                slidesToScroll: 2,
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
            breakpoint: 300,
            settings: {
                dots: false,
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 1
            }
        }

    ]
});
//Single Product//
$('.swiper-top').slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

});
$('.swiper-bottom').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
});
$('.swiper-offeryou').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToScroll: 2,
                slidesToShow: 3,
                dots: true

            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 2,
                dots: true
            }
        }
    ]
});
//TopProduct//
$('#tabs li a:not(:first)').addClass('inactive');
$('#tab2').hide();
$('#tab3').hide();
$('#tabs li a').click(function () {
    var t = $(this).attr('href');
    $('#tabs li a').addClass('inactive');
    $(this).removeClass('inactive');
    $('.topCategory').hide();
    $(t).fadeIn('slow');
    return false;
})

if ($(this).hasClass('inactive')) { //this is the start of our condition 
    $('#tabs li a').addClass('inactive');
    $(this).removeClass('inactive');
    $('.topCategory').hide();
    $(t).fadeIn('slow');
}

