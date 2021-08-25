(function ($, window, document) {

    $(document).ready(function () {

        var $section = $("section.who-we-are");

        $section.one('inview', function (event, isInView) {
            if (isInView) {
                $section.addClass("-inview");

            }
        });

    });

})(window.jQuery, window, document);