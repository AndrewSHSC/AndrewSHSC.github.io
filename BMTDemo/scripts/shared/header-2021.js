(function () {

    // Selectors
    var $body = $("body");
    var $header = $(".header-2021");
    //var $menuItemsWithMegaMenus = $header.find(".menu-item.-has-menu, .control.-has-menu");
    var $menuItems = $header.find(".menu-item, .control");
    var $menuBarsItem = $(".control--burger-icon");
    var $menuBars = $(".control--burger-icon .burger-icon");
    var $mobileNavigation = $(".mobile-nav");

    // Selectors - mega-menu
    var $levelOneItems = $(".mega-menu__2-level nav.level-1 > ul > li");
    console.log($levelOneItems.length);
    // State
    //var navigationOpen = false;
    var headerActive = false;
    var $openMegaMenu = null;
    var mobileMenuOpen = false;
    var isMobileView = function () {

        return window.matchMedia('(max-width: 1230px)').matches;

    }

    $(document).ready(function () {

        $header.on("mouseenter", function () {

            headerActive = true;
            update();

        });

        $header.on("mouseleave", function () {

            headerActive = false;
            $openMegaMenu = null;
            update();

        });

        $menuItems.on("mouseenter touchstart focus", function (e) {

            if (!isMobileView()) {

                var $target = $(e.target);
                $openMegaMenu = $target.closest(".menu-item, .control");
                update();

            }

        });

        $menuBarsItem.on("click", function () {

            if (isMobileView()) {

                if (mobileMenuOpen == false) {

                    headerActive = true;
                    mobileMenuOpen = true;

                } else {

                    headerActive = false;
                    mobileMenuOpen = false;

                }

                update();

            }

        });

        $levelOneItems.on("mouseenter focus", function (e) {

            var $target = $(e.target);

            // Remove active from all items in current nav
            var $currentMegaMenu = $target.closest(".mega-menu");
            var $menuItems = $currentMegaMenu.find("nav.level-1 > ul > li");
            $menuItems.removeClass("-active");

            console.log($menuItems.length);

            // Add active to current item            
            $openMenuItem = $target.closest("li");
            $openMenuItem.addClass("-active")

        });

    });

    function update() {

        if (headerActive) {

            $header.addClass("-active");

        } else {

            $header.removeClass("-active");

        }

        if (mobileMenuOpen) {

            $menuBars.addClass("-open");
            $header.addClass("-active");
            $body.addClass("-fixed");
            $mobileNavigation.addClass("-active")

        } else {

            $menuBars.removeClass("-open");            
            $body.removeClass("-fixed");
            $mobileNavigation.removeClass("-active");

            if (!headerActive) {

                $header.removeClass("-active");

            }

        }

        // Close any open mega menus
        $menuItems.removeClass("-active");

        // Open required mega menu
        if ($openMegaMenu != null && !$openMegaMenu.hasClass("-active")) {

            $openMegaMenu.addClass("-active");

            // Set first item as active
            $openMegaMenu.find(".level-1 > ul > li").removeClass("-active");
            $openMegaMenu.find(".level-1 > ul > li").first().addClass("-active");
            

        }   

    }

})()