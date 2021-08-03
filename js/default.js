$(document).ready(function(){
  var swiper = new Swiper(".slide1", {
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 4000,
    },
    loop: true
  });
  var swiper = new Swiper(".slide2", {
    direction: "vertical",
    slidesPerView: "auto",
    autoplay: {
      delay: 4000,
    },
    loop: true
  });
  $('.menu').click(function(){
    $('.gnb').addClass('active');
  })
  $('.close').click(function(){
    $('.gnb').removeClass('active');
  })
});