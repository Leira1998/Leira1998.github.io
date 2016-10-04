/*var fade_intro = function (var $item, time) {
  $item.hide();
  $item.fadeIn(time);
}*/

var main = function(){
  var $logo = $('.logo');
  $logo.hide();

  $('.header').click(function() {
    $logo.fadeIn('slow');
  });
}

$(document).ready(main);
