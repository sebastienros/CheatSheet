(function ($) {

    $("[data-highlight]").hover(function () {
        var self = $(this);
        var target = self.data("highlight");
        $(target).addClass("highlight");
    }, function () {
        var self = $(this);
        var target = self.data("highlight");
        $(target).removeClass("highlight");
    });

})(jQuery);