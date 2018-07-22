


var timer
var i = 0;
var speed = 50;

function typeWriter(txt, textId) {
  if (i < txt.length) {

    document.getElementById(textId).innerHTML += txt.charAt(i);
    i++;
    timer = setTimeout(function(){ typeWriter(txt, textId) }, speed);

  }
}

function clearTypewriter(textId){
  clearTimeout(timer);
  document.getElementById(textId).innerHTML = '';
  i = 0;
}


$('#about-letter').mouseover(function(){ typeWriter('ABOUT ME RIGHT THIS WAY', 'about-text') });
$('#about-letter').mouseout(function(){ clearTypewriter('about-text') })

$('#portfolio-letter').mouseover(function(){ typeWriter('A PORTFOLIO PREVIEW...', 'portfolio-text') });
$('#portfolio-letter').mouseout(function(){ clearTypewriter('portfolio-text') })



$('.enhance').click(function (){
  $('#splash').addClass('exploded');
  $('#hide-content').hide();
  $('#social-popup').show();

})

$('#return').click(function(e){
  $('#splash').removeClass('exploded');
  $('#hide-content').show();
  //unfocuses the return element
  document.activeElement.blur();

})

//on page load - hide social media links
$('#social-popup').hide();
