$(document).ready(function() {
  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1076) {
      $('contact-a').addClass('page-link-a');
    }
    else if (scroll_pos > 0) {
      $("header").css('background-color', '#fff');
      $("header").css('box-shadow', '2px 2px 2px #888');
      $("header").css('padding', '25px 30px 5px');
      $("header a").css('color', '#555');
    }
    else {
      $("header").css('background-color', 'transparent');
      $("header").css('box-shadow', '0px 0px 0px #888');
      $("header").css('padding', '35px 30px 20px');
      $("header a").css('color', '#fff');
    }
    //console.log(scroll_pos);
  });
});
