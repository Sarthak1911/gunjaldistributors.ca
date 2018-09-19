$(document).ready(function(){
  $('.bxslider').bxSlider({
      speed: 400,
      infiniteLoop: true,
      captions: true,
      responsive: true,
      resize: true,
      touchEnabled: true,
      controls: true,
      keyboardEnabled: true
  });

  //Make the controls not overlap with the navbar
  $('.bx-next, .bx-prev').css('z-index','1');
});