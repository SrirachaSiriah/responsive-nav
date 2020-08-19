console.log('js');
$('#para12, #close-btn1').hide();
$('#para22, #close-btn2').hide();
$('#para32, #close-btn3').hide();

// copy the wrapper from w3schools
// $ denotes jquery
// jquery wrapper is used to make sure that the elements get loaded first
$(document).ready(function(){

  $('.menu-icon').click(function(){
    $('.top-nav').toggleClass('active');
  });


//on clicking the read-more-btn, execute the function.
// $('#read-more-btn1').click(function(){
//   $('#para12,#close-btn1').show();
//   $('#read-more-btn1').hide();
// })

$('#close-btn1').click(function(){
  $('#para12,#close-btn1').hide();
  $('#read-more-btn1').show();
});


$('#read-more-btn2').click(function(){
  $('#para22,#close-btn2').show();
  $('#read-more-btn2').hide();
});

$('#close-btn2').click(function(){
  $('#para22,#close-btn2').hide();
  $('#read-more-btn2').show();
});

$('#read-more-btn3').click(function(){
  $('#para32,#close-btn3').show();
  $('#read-more-btn3').hide();
});

$('#close-btn3').click(function(){
  $('#para32,#close-btn3').hide();
  $('#read-more-btn3').show();
});

// Example 2
  // Toggle is hide and show
  $('#read-more-btn1').click(function(){
    $('#para12').toggle();
});

});
