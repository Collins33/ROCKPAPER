$(document).ready(function(){
  /*event handler for the form*/
  $("form#playerinfo").submit(function(event){
    event.preventDefault();
    var name=$("input#name").val();
    var age=parseInt($("input#age").val());
    var year=2017;
    if(year-age<18){
      alert("cannot play")
    }
    $("#playername").append(name);

  });

  var userscore=0;
  var computerscore=0;
  var userchoice="";
  var computerchoice=parseInt("");
  /*click function for pictures and random number generator for computer*/
  $("#firstpic").click(function(){
  userchoice="rock";
  computerchoice=Math.floor((Math.random() * 9) + 1);
  if (computerchoice <3) {
    computerchoice = "rock";
  } else if (computerchoice <6) {
    computerchoice = "paper";
  } else {
    computerchoice = "scissors";
  };
  $("#choice1").text("");
  $("#choice1").append(userchoice);
  $("#choice2").text("");
  $("#choice2").append(computerchoice);

  });
  $("#secondpic").click(function(){
    userchoice="paper";
    computerchoice=Math.floor((Math.random() * 9) + 1);
    if (computerchoice <3) {
      computerchoice = "rock";
    } else if (computerchoice <6) {
      computerchoice = "paper";
    } else {
      computerchoice = "scissors";
    };
    $("#choice1").text("");
    $("#choice1").append(userchoice);
    $("#choice2").text("");
    $("#choice2").append(computerchoice);
  });
  $("#thirdpic").click(function(){
    userchoice="scissors";
    computerchoice=Math.floor((Math.random() * 9) + 1);
    if (computerchoice <3) {
      computerchoice = "rock";
    } else if (computerchoice <6) {
      computerchoice = "paper";
    } else {
      computerchoice = "scissors";
    };
    $("#choice1").text("");
    $("#choice1").append(userchoice);
    $("#choice2").text("");
    $("#choice2").append(computerchoice);
  });
  if (userchoice === computerchoice) {
      userscore+=0;computerscore+=0;
  } else if (userchoice === "rock") {
      if (computerchoice === "scissors") {
           userscore+=1;
      } else {
           computerscore+=1;
      };
  } else if (userchoice == "paper") {
      if (computerchoice == "rock") {
           userscore+=1;
      } else {
          computerscore+1;
      };
  } else if (userchoice == "scissors") {
      if (computerchoice == "paper") {
          userscore+=1;
      } else {
          computerscore+=1;
      };
  };





});
