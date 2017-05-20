$(document).ready(function(){


  if($(window).scrollTop() > 175){
    $('#header').css("height","40px");
    $('#menu').css("margin-top","60px");
  }
  else{
    $('#header').css("height","60px");
    $('#menu').css("margin-top","80px");
  }

  // ----------MENU-------------
  //Menu should be hidden
  $('#menu').hide();
  // When user clicks menu button
  $('#btn').click(function(){
    $('#menu').slideToggle("fast");
  });

  //scrolling
  $(window).scroll(function(){
    if($(window).scrollTop() > 175){
      $('#header').css("height","40px");
      $('#menu').css("margin-top","60px");
    }
    else{
      $('#header').css("height","60px");
      $('#menu').css("margin-top","80px");
    }
  })

});
