$(document).ready(() => {
    window.onscroll = function() {                                                                                  // makes the function work
        scrollFunction();
    };

    let $navDropC = $('#drop1');
    let $navDropC2 = $('#drop2')
    $navDropC.on('click', event => {
        $(event.currentTarget).find('div').toggle();
    });
    $navDropC2.on('click', event => {
        $(event.currentTarget).find('div').toggle();
    });
    
    function scrollFunction() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            $('.header').addClass("scrolled");
        } else {
            $('.header').removeClass("scrolled");
        }
      };
});