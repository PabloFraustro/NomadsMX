$(document).ready(function(){

   $(window).scrollTop(0);

  // Entrance effects
  $('#title').animate({
    'top': '60px',
    'opacity' : '1'
  },1000);

$('#about').animate({
    'right' :'0',
    'opacity' : '1'
},1000);

$('#menu').animate({
    'left' :'0',
    'opacity' : '1'
},1000);

// Scroll down animation before scrolling

$(window).on("scroll",function(){
  if($(window).scrollTop() > 0){
    $('#arrows').css({'visibility':'hidden'})
  }
  else{
    $('#arrows').css({'visibility':'visible'})
  }
})


});
