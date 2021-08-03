$(function(){
  //탭스크립트
  $('.t-menu').click(function(){
  var gift_menu = $(this).attr('data-tab');

  //현재탭의 스타일제거
  $('.t-menu').removeClass('current');
  $('.t-menu-content').removeClass('current');

  //자신의 것만 스타일지정
  $(this).addClass('current');
  $('#'+gift_menu).addClass('current');

  }) /* .t-menu end */
  
  $('.t-menu2').click(function(){
  var gift_menu2 = $(this).attr('data-tab');

  $('.t-menu2').removeClass('current');
  $('.t-menu2-content').removeClass('current');

  $(this).addClass('current');
  $('#'+gift_menu2).addClass('current');

  }) /* .t-menu2 end */

  $('.t-menu3').click(function(){
    var gift_menu3 = $(this).attr('data-tab');
  
  $('.t-menu3').removeClass('current');
  $('.t-menu3-content').removeClass('current');
  
  $(this).addClass('current');
  $('#'+gift_menu3).addClass('current');
  
  }) /* .t-menu3 end */
});/* script end */
$(document).ready(function(){
  var swiper = new Swiper(".slide1", {
    slidesPerView: 3,
    spaceBetween: 30,
  });
  var swiper = new Swiper(".slide2", {
    slidesPerView: "auto",
  });
});