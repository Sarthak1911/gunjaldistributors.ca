$(document).ready(function(){

    //Get reference to all constants here...
    const NAV = $('nav');
    const NAV_A = $('nav a');

    //Get the nav height before hand
    var navHeight = $(NAV).outerHeight();

    $(NAV_A).click(function(e){


        e.preventDefault();

        $(NAV_A).css('color', '#FF4447');

        var anchorElement = $(this);

        $(anchorElement).css('color', '#EF9A9A');

        var pageLink = anchorElement.attr('href');

        
        
        $('html, body').animate({
            scrollTop: $(pageLink).offset().top - navHeight
        });

    });

});