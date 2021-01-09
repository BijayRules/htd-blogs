$(window).scroll(function () {
    "use strict";
    var scroll = $(window).scrollTop();
  
    if (scroll >= 70) {
      $('.menubar').addClass('sticky');
    } else {
      $('.menubar').removeClass('sticky');
    }
  });