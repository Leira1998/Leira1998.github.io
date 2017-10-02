$(document).ready(function() {
  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("header").css('background-color', '#fff');
      $("header a").css('color', '#555');
    }
    else {
      $("header").css('background-color', 'transparent');
      $("header a").css('color', '#fff');
    }
  });
});
