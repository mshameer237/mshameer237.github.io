$(document).ready(function () {


    $('ul.tab-name li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tab-name li').removeClass('active');
        $('.tab-details').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })

    $('ul.clients li').hover(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.clients li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })

    $('[data-toggle="popover"]').popover({
        trigger: "hover"
    })


    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar-default").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".navbar-default").removeClass("active");
        }
    });


   
})
