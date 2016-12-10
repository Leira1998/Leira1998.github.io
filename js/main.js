var dir = '+';

$(document).ready(function() {

  $(".nav-b").on('click', function() {
    //$("*").animate({'left': dir + '=200px'}, 500);
    //$(".main").animate({'left': dir + '=200px'}, 500);

    if (dir === '+') {
      $(".nav-b img").attr('src', 'img/icons/cross.png');
      dir = '-';
    }
    else {
      $(".nav-b img").attr('src', 'img/icons/menu.png');
      dir = '+';
    }

  });

});
