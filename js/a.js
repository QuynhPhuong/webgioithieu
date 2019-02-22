$(function(){

    var owl = $(".banner");
    owl.owlCarousel({
        items: 1,
        nav : false,
        navText : ["", ""],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoplay : 100,
        stopOnHover : false,
        dots: false,
        loop: true
    });

    var owl = $(".client__slider");
    owl.owlCarousel({
        items: 1,
        nav : false,
        navText : ["", ""],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoPlay : 500,
        stopOnHover : false,
        loop: true
    });

    var owl = $(".four-post__slider");
    owl.owlCarousel({
        items: 1,
        nav : false,
        dots : true,
        navText : ["", ""],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoplay : 200,
        stopOnHover : false,
        loop: true
    });
    var owl = $(".news__slider");
    owl.owlCarousel({
        items: 3,
        nav : false,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoplay : 200,
        stopOnHover : false,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: true,
                margin: 0,
                dots: false,
            },
            600: {
                items: 3,
                nav: true,
                margin: 30,
                dots: false,
            },
        }
    });
    var owl = $(".feature-project__slider");
    owl.owlCarousel({
        items: 3,
        nav : false,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: true,
        singleItem : true,
        transitionStyle : "fade",
        lazyLoad: true,
        autoplay : 200,
        stopOnHover : false,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: true,
                margin: 0,
                dots: false,
            },
            600: {
                items: 3,
                nav: true,
                margin: 30,
                dots: false,
            },
        }
    });

    var owl = $(".gallery__slider");
    owl.owlCarousel({
        items: 1,
        nav : true,
        navText : ["", ""],
        pagination: true,
        singleItem : true,
        animateOut: 'fadeOut',
        stopOnHover : false,
        loop: true
    });

    $('.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 500,
    });

    $('.navigation-button').click(function(){
        $('body').toggleClass('navigation-mobile__js-open');
    });

    $('.open-search').click(function (e) {
        e.stopPropagation();
        $('body').toggleClass('form-search__js-open');
    });

    $('body').click(function () {
        var $this = $(this);
        $this.removeClass('form-search__js-open');
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('body').addClass('head--fix');
        }else{
            $('body').removeClass('head--fix');
        }
    });
    $('.two-post__intro').waypoint(function() {
        $('.two-post__intro').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.feature-project__headline ').waypoint(function() {
        $('.feature-project__headline').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.news__headline').waypoint(function() {
        $('.news__headline').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.two-post__title').waypoint(function() {
        $('.two-post__title').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.four-post__headline').waypoint(function() {
        $('.four-post__headline').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.banner__headline').waypoint(function() {
        $('.banner__headline').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.video__headline').waypoint(function() {
        $('.video__headline').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.email__headline').waypoint(function() {
        $('.email__headline').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.feature-project__item').waypoint(function() {
        $('.feature-project__item').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
    $('.news__item--first').waypoint(function() {
        $('.news__item--first').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.four-post__item:nth-child(1) .four-post__slider--image').waypoint(function() {
        $('.four-post__item:nth-child(1) .four-post__slider--image').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.four-post__item:nth-child(2) .four-post__slider--image').waypoint(function() {
        $('.four-post__item:nth-child(2) .four-post__slider--image').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.four-post__item:nth-child(1) .news__title').waypoint(function() {
        $('.four-post__item:nth-child(1) .news__title').addClass('animated slideInDown');
    }, {
        offset: '75%'
    });
    $('.four-post__item:nth-child(1) .four-post__description').waypoint(function() {
        $('.four-post__item:nth-child(1) .four-post__description').addClass('animated slideInUp');
    }, {
        offset: '75%'
    });
    $('.four-post__item:nth-child(2) .news__title').waypoint(function() {
        $('.four-post__item:nth-child(2) .news__title').addClass('animated slideInDown');
    }, {
        offset: '75%'
    });
    $('.four-post__item:nth-child(2) .four-post__description').waypoint(function() {
        $('.four-post__item:nth-child(2) .four-post__description').addClass('animated slideInUp');
    }, {
        offset: '75%'
    });
    $('.feature-project__list').waypoint(function() {
        $('.feature-project__list').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 500,
    });


    $('.pulsation').waypoint(function() {
        $('.pulsation').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
$('.navigation-mobile__list > li > button').click(function() {
        var checkElement = $(this).next().next();
        console.log(checkElement);
        $('.navigation-mobile__list li').removeClass('active');
        $(this).closest('li').addClass('active');
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('.navigation-mobile__list ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
     $('ul.news__list-category > li > button').click(function() {
        var checkElement = $(this).next().next();
        console.log(checkElement);
        $('ul.news__list-category li').removeClass('active');
        $(this).closest('li').addClass('active');
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('ul.news__list-category ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });
    $('ul.nav2 > li > button').click(function() {
        var checkElement = $(this).next().next();
        $('ul.nav2 li').removeClass('active');
        $(this).closest('li').addClass('active');
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('ul.nav2 ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if (checkElement.is('ul')) {
            return false;
        } else {
            return true;
        }
    });

});