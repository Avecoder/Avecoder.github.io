$('.works__image').on('click',function(e){
  $('.plashka__works').removeClass('plashka__works__active');
  $(e.target.nextElementSibling).addClass('plashka__works__active');
});


$('.people__img').on('click',function(e){
  $('.plashka').removeClass('plashka__active');
  $(e.target.nextElementSibling).addClass('plashka__active');
});


$('.menu__button__wrap').on('click',menu);



function menu(){
  $('.menu__container').toggleClass('menu__container__active');
  $('.menu__button').toggleClass('menu__button__active');
}

function tabMenu(e){
  let href = ($(e.target).attr('href'));
  href = href.substring(1);
  let section = $('.'+href).offset().top;
  $(window).scrollTop(section+50);
}

$('.menu__inner ul li a').on('click',e=>{
  e.preventDefault();
  menu();
  tabMenu(e);
})

$('.menu__nav__ul ul li a').on('click',e=>{
  e.preventDefault();
  tabMenu(e);
})
