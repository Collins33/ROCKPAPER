$(document).ready(function(){
  $("form#playerinfo").submit(function(event){
    event.preventDefault();
    var name=$("input#name").val();
    var age=parseInt($("input#age").val());
    var year=2017;
    if(year-age<18){
      alert("cannot play")
    }
    $("#playername").append(name);

  })







  var userscore=0;
  var computerscore=0;
  var userchoice="";
  $("#firstpic").click(function(){
  userchoice="rock";

  });
  $("#secondpic").click(function(){
    userchoice="paper";
  });
  $("#thirdpic").click(function(){
    userchoice="scissors"
  });
});
