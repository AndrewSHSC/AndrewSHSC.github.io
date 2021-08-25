//JAVASCRIPT APPLIED TO ALL PAGES
//THIS SHOULD CONTAIN ANY ELEMENTS/COMPONENTS USED ACROSS MULTIPLE PAGES

// IIFE - Immediately Invoked Function Expression
(function ($, window, document) {
    $(function () {

        modifyCssCustomVariables();
        mobilenav();
        megamenu();
        searchbox();
        videoPopup();
        showmore();
        headerScroll();
        svg4everybody();

        $('.megamenu').css('display', 'none');

        $(window).on('resize', function () {
            if ($(window).width() > 1230) {
                clearmobnav();
            }

            deactivateViewMore();
            //modifyCssCustomVariables();
        });

        $(window).on('orientationchange', function () {
            deactivateViewMore();
            //modifyCssCustomVariables();
        });
    });

    function modifyCssCustomVariables() {

        document.documentElement.style.setProperty('--view-hight', `${window.innerHeight}px`);

    }

    function deactivateViewMore() {
        $('.js-viewmore').removeClass('active');
        $('.js-viewmore')
            .siblings('.e-more')
            .slideUp();
    }

    function headerScroll() {
        if (
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            ) &&
            $(window).width() > 1230
        ) {
            //SCROLL UP/DOWN
            var header = $('header'),
                headerHeight = header.outerHeight(),
                threshold = 0,
                lastScroll = 0;

            $(document).on('scroll', function () {
                var newScroll = $(document).scrollTop(),
                    diff = newScroll - lastScroll;
                if (newScroll > 0) {
                    // normalize threshold range
                    threshold =
                        threshold + diff > headerHeight ? headerHeight : threshold + diff;
                    threshold = threshold < 0 ? 0 : threshold;

                    header.css({
                        top: -threshold + 'px'
                    });
                    lastScroll = newScroll;
                } else if (newScroll <= 0) {
                    header.css({
                        top: 0
                    });

                    header.removeClass('fixed');
                }

                if (newScroll > headerHeight) {
                    if (!$('header').hasClass('no-fix')) {
                        header.addClass('fixed');

                        $('.mainnav .has-nav .open').removeClass('open');
                        $('.megamenu .e-sub').removeClass('active');
                        $('header').removeClass('active');
                        $('.megamenu').fadeOut();
                        $('.m-searchbox').slideUp();
                        $('.m-searchbox input').val('');
                    }
                }
            });
        }
    }

    function showmore() {
        $('.js-viewmore').on('click', function (e) {
            e.preventDefault();

            $(this)
                .stop()
                .toggleClass('active');
            $(this)
                .siblings('.e-more')
                .stop()
                .slideToggle();
        });
    }

    function videoPopup() {
        $('.popup').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }

    function clearmobnav() {
        //remove open/active states
        $('.e-mobnavtrigger').removeClass('open');
        $('header').removeClass('menu-open');
        $('header').removeClass('active');
        $('body').removeClass('show-overlay');

        //slide open navs up, remove all active states
        $('.n-mobilenav, .n-mobilenav .e-level3nav ul').slideUp();
        $('.n-mobilenav .active').removeClass('active');
    }

    function searchbox() {
        $('header .e-search').on('click', function () {
            $('.m-searchbox').fadeIn();
            $('.m-searchbox input').focus();
        });

        $('.m-searchbox .e-close').on('click', function () {
            $('.m-searchbox').fadeOut();
            $('.m-searchbox input').val('');
        });

        $('html, body').on('click', function () {
            $('.m-searchbox').fadeOut();
            $('.m-searchbox input').val('');
        });

        $('.m-searchbox').on('click', function (e) {
            e.stopPropagation();
        });
    }

    function megamenu() {
        $('header').on('mouseenter focus', function (e) {
            $(this).addClass('active');
        });

        $('header').on('mouseleave', function (event) {
            if (event.relatedTarget === null) {
            } else {
                $(this).removeClass('active');

                if ($('.mainnav .has-nav .open').hasClass('open')) {
                    $('.mainnav .has-nav .open').removeClass('open');
                    $('.megamenu').fadeOut();
                    $('.megamenu .e-inner .e-links > ul > li > a').removeClass('active');
                    $('body').removeClass('show-overlay');
                }
            }
        });

        $('.mainnav .has-nav > a').on('mouseenter touchstart focus', function () {
            $('.mainnav .has-nav > a').removeClass('open');
            $(this).addClass('open');

            $('.megamenu').hide();
            $(this)
                .siblings()
                .fadeIn();
            $('body').addClass('show-overlay');
        });

        $('.megamenu .e-inner .e-links > ul > li > a').on('focus click', function (e) {
            e.preventDefault();

            $('.megamenu .e-sub').removeClass('active');
            $(this)
                .siblings('.e-sub')
                .addClass('active');

            $('.megamenu .e-inner .e-links > ul > li > a').removeClass('active');
            $(this).addClass('active');
        });

        // hover variation
        $('.hover-variation .e-inner .e-links > ul > li > a').on('focus mouseenter', function (e) {
            $('.megamenu .e-sub').removeClass('active');
            $(this)
                .siblings('.e-sub')
                .addClass('active');

            $('.megamenu .e-inner .e-links > ul > li > a').removeClass('active');
            $(this).addClass('active');
        });

        $('.hover-variation .e-inner .e-links a').unbind('click');

        // map variation
        $('.map-fullwidth .e-inner .e-links a').unbind('click');

        // single column varition
        $('.single-column-list .e-inner .e-links a').unbind('click');

        //language selector megamenu
        $('.megamenu.language-selector .e-sub a').on('click', function (e) {
            e.preventDefault();

            $('.megamenu.language-selector .e-sub a').removeClass('active');
            $(this).addClass('active');
        });
    }

    function mobilenav() {
        //open nav
        $('.e-mobnavtrigger').on('click', function () {
            $(this).toggleClass('open');
            $('header').toggleClass('menu-open');
            $('html, body').toggleClass('fixed');
            $('.n-mobilenav')
                .stop()
                .slideToggle()
                .toggleClass('active');
            $('.n-mobilenav .active').removeClass('active');
        });

        //level 1
        $('.n-mobilenav .dropdown').on('click', function (e) {
            e.preventDefault();

            $(this)
                .siblings('.e-subnav')
                .toggleClass('active');
        });

        //level 2
        $('.n-mobilenav .e-subnav .e-back').on('click', function (e) {
            e.preventDefault();

            $(this)
                .parent()
                .removeClass('active');
            $('.n-mobilenav .e-level3nav ul').slideUp();
            $('.n-mobilenav .e-level3nav a').removeClass('active');
        });

        $('.n-mobilenav .e-level3nav > a').on('click', function (e) {
            e.preventDefault();

            $(this)
                .siblings('ul')
                .stop()
                .slideToggle();

            $(this)
                .stop()
                .toggleClass('active');
        });

        $('.n-mobilenav .no-sublinks a').unbind('click');

        $('header, nav').on('click', function (e) {
            e.stopPropagation();
        });

        $('html, body').on('click', function () {
            if ($('header').hasClass('menu-open')) {
                clearmobnav();
            }
        });

        // language Selector
        $('#js-language-selector').on('click', function (e) {
            e.preventDefault();

            $('.n-mobilenav .e-langselect').addClass('active');

            $('.n-mobilenav').animate(
                {
                    scrollTop: $('.n-mobilenav .inner').offset().top
                },
                300
            );
        });

        $('.n-mobilenav .e-langselect li').on('click', function () {
            $('.n-mobilenav .e-langselect li').removeClass('active');
            $(this).addClass('active');
        });
    }
})(window.jQuery, window, document);
