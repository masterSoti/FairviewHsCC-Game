$(document).ready(function(){
  $("body").click(function(){
    $(this).css("background-color", "rgb(95, 140, 230)");
  });
  $("#main").hover(
    function(){
      $(this).animate({"width": main.width+100000}, 50);
    },function(){
    }
  );
});
