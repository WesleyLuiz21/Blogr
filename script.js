$(document).ready(() => {
    window.onscroll = function() {                                                                                  // makes the function work
        scrollFunction();
    };

    let $navDropC = $('.navdrop');
    $navDropC.on('click', event => {
        $(event.currentTarget).find('ul').toggle();
        $(event.currentTarget).find('li').css('display', 'block');
        $(event.currentTarget).find('img').toggleClass('rotate');
    
    }).on('mouseleave', event => {
        $(event.currentTarget).find('ul').hide();
        $(event.currentTarget).find('img').removeClass('rotate');
    });
 
    
    function scrollFunction() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            $('.header').addClass("scrolled");
        } else {
            $('.header').removeClass("scrolled");
        }
    };

});