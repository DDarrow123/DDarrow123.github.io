
var imageFiles = [
  'coffee.png',
  'nyc.png',
  'friends_final.png',
  'travel.png',
  'women_march.jpg',
  'reading.png',
  'art.png',
  'exploring.png',
  'eating.png',
  'fashion.png',
  'music.png',
  'summer.png',
];


//$('.interest-para').mouseover(imagePopulate);
//$('.interest-para').mouseover(imagePopulate);

function imageChange(index) {
  $(".tick-image").attr("src", `tick_images/${imageFiles[index]}`);
}

//first function
function setMouseOver(index, listElement) {

  listElement.onmouseover = function(){ imageChange(index) };

}

$('#listOfImageItems').children().each(setMouseOver);



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


$('#middle-letter').mouseover(function(){ typeWriter('MY MISSION IS TO BE A LEADER', 'mission-text') });
$('#middle-letter').mouseout(function(){ clearTypewriter('mission-text') })

$('#home-letter').mouseover(function(){ typeWriter('THERE\'S NO PLACE LIKE HOME', 'home-text') });
$('#home-letter').mouseout(function(){ clearTypewriter('home-text') })

$('#interests-letter').mouseover(function(){ typeWriter('A LITTLE ABOUT ME RIGHT BELOW...', 'interests-text') });
$('#interests-letter').mouseout(function(){ clearTypewriter('interests-text') })



//header title dropdown
//hide text on page load

$('.header-text').hide();

setTimeout(function(){
$('.header-text').slideDown();
}, 600);

setTimeout(function(){
$('.header-text').addClass('headerTextAnimate');
}, 1000);


$('.enhance').click(function (){
  $('#splash').addClass('exploded');
  $('#social-popup').show();
  $('#hide-content').hide();


})

$('#return').click(function(){
  $('#splash').removeClass('exploded');
  $('#social-popup').hide();
  $('#hide-content').show();
  document.activeElement.blur();

})

//on page load - hide social media links
$('#social-popup').hide();
