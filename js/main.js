function show_menu() {
  $(".h-nav").fadeIn('fast');
  $("header").animate({height: '+=60px',}, 500);
  $(".nav-b").animate({height: '+=60px',}, 500);
  $(".nav-b img").attr('src', 'img/icons/cross.png');
}

function hide_menu() {
  $(".h-nav").fadeOut('fast');
  $("header").animate({height: '-=60px',}, 500);
  $(".nav-b").animate({height: '-=60px',}, 500);
  $(".nav-b img").attr('src', 'img/icons/menu.png');
}

var dir = '+';

$(document).ready(function() {

  $(".h-nav").hide();

  $(".nav-b").on('click', function() {

    if (dir === '+') {
      show_menu();
      dir = '-';
    }
    else {
      hide_menu();
      dir = '+';
    }

  });

  $(".page-link").on('click', function() {

    hide_menu();
    dir = '+';

  });

});
