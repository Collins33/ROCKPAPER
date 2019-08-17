$(document).ready(function() {
  /*event handler for the form*/
  $("form#playerinfo").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var year = 2017;
    if (year - age < 18) {
      swal("AGE LIMIT NOT MET", "CHANCES ARE YOU ARE TOO YOUNG");
    } else if (year - age > 18) {
      $(".maingame_row").show();
      $(".proceed_button").hide();
      $("#mainresult").show();
      $("#playername").text("");
      $("#playername").append(name);
      swal("Congratulations!!. Close modal to proceed to the game");
    }
    window.scrollTo(0, 2000);
  });

  var userscore = 0;
  var computerscore = 0;
  var userchoice = "";
  var computerchoice = parseInt("");

  var computerplay = function() {
    computerchoice = Math.floor(Math.random() * 9 + 1);
    if (computerchoice < 3) {
      computerchoice = "rock";
    } else if (computerchoice < 6) {
      computerchoice = "paper";
    } else {
      computerchoice = "scissors";
    }
  };
  var comparison = function() {
    if (userchoice === computerchoice) {
      userscore += 0;
      computerscore += 0;
    } else if (userchoice === "rock") {
      if (computerchoice === "scissors") {
        userscore += 1;
      } else {
        computerscore += 1;
      }
    } else if (userchoice == "paper") {
      if (computerchoice == "rock") {
        userscore += 1;
      } else {
        computerscore += 1;
      }
    } else if (userchoice == "scissors") {
      if (computerchoice == "paper") {
        userscore += 1;
      } else {
        computerscore += 1;
      }
    }
  };
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
  var verdict = function() {
    if (computerscore >= 30) {
      swal({
        title: "YOU LOOSE!!!!!!!!!!",
        text: "GO PLAY SOMETHING ELSE!!!!!",
        imageUrl:
          "http://i.huffpost.com/gen/2714370/images/o-POOP-EMOJI-ICE-CREAM-facebook.jpg"
      });
      $("#maingame").hide();
    } else if (userscore >= 30) {
      swal({
        title: "Sweet!!!!!!",
        text: "YOU ACTUALLY WON SOMETHING IN YOUR LIFE!!!",
        imageUrl:
          "https://thumbs.dreamstime.com/z/thumbs-up-emoticon-vector-design-showing-73992493.jpg"
      });

      $("#maingame").hide();
    }
  };
  /*click function for pictures and random number generator for computer*/
  $("#firstpic").click(function() {
    userchoice = "rock";
    computerplay();
    comparison();
    results();
    verdict();
  });
  $("#secondpic").click(function() {
    userchoice = "paper";
    computerplay();
    comparison();
    results();
    verdict();
  });
  $("#thirdpic").click(function() {
    userchoice = "scissors";
    computerplay();
    comparison();
    results();
    verdict();
  });
});
