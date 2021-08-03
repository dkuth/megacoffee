$(document).ready(function(){
  var check = $(".switch1 input[type='checkbox']");
  check.click(function(){
	$(".agree1 > p").toggle();
  });
  var check = $(".switch2 input[type='checkbox']");
  check.click(function(){
	$(".agree2 > p").toggle();
  });
});