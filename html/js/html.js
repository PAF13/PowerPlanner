let menuOpen = 0;
$(function(){
  //onclick for menu
  $(".console div i").on('click', function() {
    if (menuOpen == 0) {
      $(".console").css({"left":"150px","right":"-150px", "border-radius": "10px 0px 0px 10px", "transition":"0.5s"});
      menuOpen = 1;
    }
    else {
      $(".console").css({"left":"0px","right":"0px","border-radius": "0px 0px 0px 0px", "transition":"0.5s"});
      menuOpen = 0;
    }
  });

  $(".menu div").on('click', function() {
    $(".console div span").html($(this).html());
  });

});
