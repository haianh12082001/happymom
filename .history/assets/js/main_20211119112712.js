AOS.init();
$(function () {
    ///Page
    var recentRadius = $('.recent__radius');
    var recentItem = $('.recent__item');
    for (i = 0; i < 3; i++) {
        recentItem.clone().appendTo(recentRadius);
    }
    var tabNewsList = $('.tabNews__list');
    var tabNewsItem = $('.tabNews__item');
    for (i = 0; i < 7; i++) {
        tabNewsItem.clone().appendTo(tabNewsList);
    }
    // feedback
    var feedbackList = $('.feedback__list');
    var feedbackItem = $('.feedback__item');
    for (i = 0; i < 3; i++) {
        feedbackItem.clone().appendTo(feedbackList);
    }


    $(".photoLibrary__list").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        prevArrow: ('<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>'),
        nextArrow: ('<div class="slick-next"><i class="fas fa-chevron-right"></i></div>'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
        ]
    });
    //////Banner
    $(".banner__content").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,

    });

    ///Feedback
    $(".feedback__list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false,
                }
            },
        ]
    });

    ///news
    $(".news__list").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
        ]
    });
    ///// menu mobi
    $(".bar__mobi").click(function () {
        $('.header__list').toggleClass('active');
        $('.bar__mobi').toggleClass('fa-times');
        $('.opacity__menu').toggleClass('open__opacity');
    })
    $('.opacity__menu').click(function () {
        $('.header__list').toggleClass('active');
        $('.bar__mobi').toggleClass('fa-times');
        $('.opacity__menu').toggleClass('open__opacity');
    })

    ///search mobi{
    $('.search__mobi').click(function () {
        $('.header__form').toggleClass('active');

    })


})