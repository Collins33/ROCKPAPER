$(document).ready(function() {
  /*event handler for the form*/
  $("form#playerinfo").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var year = 2017;
    if (year - age < 18) {
      alert("cannot play")
    }
    else{
      $("#maingame").show();
      $("#mainresult").show();
      $("#playername").text("");
      $("#playername").append(name);

    }
    window.scrollTo( 0, 2000 );


  });

  var userscore = 0;
  var computerscore = 0;
  var userchoice = "";
  var computerchoice = parseInt("");

  var computerplay = function() {
    computerchoice = Math.floor((Math.random() * 9) + 1);
    if (computerchoice < 3) {
      computerchoice = "rock";
    } else if (computerchoice < 6) {
      computerchoice = "paper";
    } else {
      computerchoice = "scissors";
    };
  }
  var comparison = function() {
    if (userchoice === computerchoice) {
      userscore += 0;
      computerscore += 0;
    } else if (userchoice === "rock") {
      if (computerchoice === "scissors") {
        userscore += 1;
      } else {
        computerscore += 1;
      };
    } else if (userchoice == "paper") {
      if (computerchoice == "rock") {
        userscore += 1;
      } else {
        computerscore +=1;
      };
    } else if (userchoice == "scissors") {
      if (computerchoice == "paper") {
        userscore += 1;
      } else {
        computerscore += 1;
      };
    };
  }
  var results = function() {
    $("#choice1").text("");
    $("#choice1").append(userchoice);
    $("#choice2").text("");
    $("#choice2").append(computerchoice);
    $("#playerscore").text("");
    $("#playerscore").append(userscore);
    $("#computerscore").text("");
    $("#computerscore").append(computerscore);
  };
  /*click function for pictures and random number generator for computer*/
  $("#firstpic").click(function() {
    userchoice = "rock";
    computerplay();
    comparison();
    results();
  });
  $("#secondpic").click(function() {
    userchoice = "paper";
    computerplay();
    comparison();
    results();
  });
  $("#thirdpic").click(function() {
    userchoice = "scissors";
    computerplay();
    comparison();
    results();

  });






});
