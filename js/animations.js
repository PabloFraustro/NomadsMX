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


// add interval to show arrows for scrolling
var arrows_delay = setInterval(function(){
  var arrows_int = setInterval(function(){
  $("#arrows").toggleClass("display");
},2000);
clearInterval(arrows_delay);
},4000);


$(window).one("scroll",function(){
    if(typeof arrows_int == 'undefined'){
      clearInterval(arrows_int);
      $("#arrows").removeClass("display");
    }
    else{
      clearInterval(arrows_int);
      clearInterval(arrows_delay);
      $("#arrows").removeClass("display");
    }

});


});
