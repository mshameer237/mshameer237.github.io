$(function(){
  $('.na-toggle, .ham-menu nav').click(function(){
    $('.na-toggle').toggleClass('navbar-on');
    $('.ham-menu nav').fadeToggle();
    $('.ham-menu nav').removeClass('nav-hide');
  });
});