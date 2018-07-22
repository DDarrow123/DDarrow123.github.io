//header title dropdown
//hide text on page load

$('.header-text').hide();

setTimeout(function(){
$('.header-text').slideDown();
}, 200);

setTimeout(function(){
$('.header-text').addClass('headerTextAnimate');
}, 600);


//typewriter functions

var timer
var i = 0;
var speed = 60;

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


$('#contact-letter').mouseover(function(){ typeWriter('GET IN TOUCH', 'contact-text') });
$('#contact-letter').mouseout(function(){ clearTypewriter('contact-text') })

$('#home-letter').mouseover(function(){ typeWriter('THERE\'S NO PLACE LIKE HOME', 'home-text') });
$('#home-letter').mouseout(function(){ clearTypewriter('home-text') })

$('#project-letter').mouseover(function(){ typeWriter('PROJECTS COMING SOON...', 'project-text') });
$('#project-letter').mouseout(function(){ clearTypewriter('project-text') })



$('.enhance').click(function (){

  $('#splash').addClass('exploded');
  $('#social-popup').show();

})

$('#return').click(function(){

  $('#splash').removeClass('exploded');
  $('#social-popup').hide();
  document.activeElement.blur();

})

//on page load - hide social media links
$('#social-popup').hide();
