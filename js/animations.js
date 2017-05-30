$(document).ready(function(){

  $(this).scrollTop(0);

  // Title effect
  $('#title').animate({
    'top': '60px',
    'opacity' : '1'
  },1000);

  $('#menu').animate({
    'left' : '0'
  },1000);

  $("#garibaldi").click(function(){
    window.scrollBy(0, 100);
  });


});
