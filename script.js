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

    /* hamburguer btn */
    var flag = 0;
    let $hamburguer = $('#hamburguer');



   $hamburguer.on('click', function() {
        if(flag == 0) {
            $(this).attr('src', 'images/icon-close.svg');
            $('nav').addClass('active');
            flag = 1;
          /*  $('.navcontainer').css('display', 'block'); */
        } else if(flag == 1) {
          $(this).attr('src', './images/icon-hamburger.svg');
          $('nav').removeClass('active');
          flag = 0;
         /* $('.navcontainer').css('display', 'none'); */
        }
    }); 
});
