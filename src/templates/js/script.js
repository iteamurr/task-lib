$(document).ready(function() {
  $('.header__home__list').click(function(event) {
    $('.header__nav').toggleClass('active');
    $('.content').toggleClass('active');
    $('.header__home__list').children('i').toggleClass('bi bi-x');
  });
});