$(function(){
  //주메뉴
  $('.qna dt').click(function(){
    $(this).next().toggleClass('on');
    $(this).next().siblings('dd').removeClass('on');
  });
  //서브메뉴
  $('.qna dd li').click(function(){
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).find('ul.answer').toggleClass('on');
    $(this).siblings().find('ul.answer').removeClass('on');
  });
});