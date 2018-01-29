$(document).ready(function() {
  //var panel = $("#mainArea");
  var index = 0;
  var countdownTimer = {
    time : 20,
    reset: function() {
      this.time = 20;
      $(".timer").html("<h3>" + this.time + " seconds remaining</h3>");
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);  
    },
    stop: function() {
      clearInterval(counter);
      $()
    },
    count: function() {
        countdownTimer.time--;
        

      if (countdownTimer.time >= 0) {
        $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
      }
      else {
        console.log("<h2>Out of Time!</h2>");
        //load out of time message and gif
        //call separate method for handling and pausing game
          //panel.append('<h3>The Correct Answer was: ' + q1.question[index].answer);
          //panel.append('<img src="' + q1.question[this.index].image + '" />');

          //HAVENT GOT THIS TO WORK YET! so game keeps going without displaying the gif

    //sssetTimeout('document.getElementById("mainArea").style.display="none"', 5000);  // 5 seconds

        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
};

var correct = 0;
var wrong = 0;
var q1 = {
  question : "Who directed The Big Lebowski?",
  possibleAnswers : ["A. Tim Conway",
         "B. Martin Scorsese",
         "C. Joel and Ethan Coen",
         "D. Paris Hilton"],
  flags : [false, false, true, false],
  answer : "C. Joel and Ethan Coen",
  image : "assets/images/coen.jpg"
};

var q2 = {
  question: "Which actor loved to tell Donnie to shut the fuck up?",
  possibleAnswers: ["Jeff Bridges",
         "B. Phillip Seymore Hoffman",
         "C. Carol Burnett",
         "D. John Goodman"],
  flags : [false, false, false, true],
  answer : "D. John Goodman"
};

var q3 = {
  question : "Why did those jerks urinate on the dude's carpet?",
  possibleAnswers : ["A. They were jealous of his KB",
         "B. They were actually cats",
         "C. Mistaken Identity",
         "D. They had not been laid in a long time"],
  flags : [false, false, true, false],
  answer : "C. Mistaken Identity"
};

var q4 = {
  question : "What was The Dude's favorite sport?",
  possibleAnswers : ["A. Rugby",
         "B. Crickett",
         "C. Bowling",
         "D. Tallywackin"],
  flags : [true, false, true, false],
  answer : "C. Bowling"
};

var q5 = {
  question : "How did Donny die?",
  possibleAnswers : ["A. Gunshot",
         "B. Cardiac Arrest",
         "C. Rolling Too Hard",
         "D. OTC OD"],
  flags : [false, true, false, false],
  answer : "B. Cardiac Arrest"
};

var q6 = {
  question : "Did The Dude Abide?",
  possibleAnswers : ["A. Never",
         "B. Only on Shabbos",
         "C. Of Course He Did!",
         "D. If he wanted to"],
  flags : [false, false, true, false],
  answer : "C. Of Course He Did!"
};


//panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
//    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');



var questionArray = [q1, q2, q3, q4, q5, q6];

function loadQuestion(questionSelection) {
  console.log(questionSelection);
  countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
  index = 0;
  $('.question').append('<button id="startButton">Start</button>');
  $('#startButton').on('click', function() {
    $(this).hide();
    countdownTimer.start();
    loadQuestion(index);
  });
}   

function getAnswer() {

//  nextQuestion();
  $('.answerchoice').on('click', function() {
      index++;
    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    loadQuestion();
  })
}

function answerCorrect() {
  correct++;
  }

function answerWrong() {
  wrong++;
  }

function showScore() {
  $('.question').empty();
  $('.question').append("<h2><p>" + "Correct: " + correct + "</p></h2>");
  $('.question').append("<h2><p>" + "Incorrect: " + wrong + "</p></h2>");
  countdownTimer.stop();
  $('.timer').empty();

}

function resetGameScore() {
  correct = 0;
     wrong = 0;
}
     

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
  var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
  answerChosen = 'B';
 } else if (this.id == 'buttonC') {
  answerChosen = 'C';
 } else if (this.id == 'buttonD') {
  answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
  answerCorrect();
 } else if (answerChosen == 'A') {
  answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
  answerCorrect();
 } else if (answerChosen == 'B') {
  answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
  answerCorrect();
 } else if (answerChosen == 'C') {
  answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
  answerCorrect();
 } else if (answerChosen == 'D') {
  answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
  loadQuestion(index);
 } else {
  $(".answerchoice").hide();
  showScore();
  resetGameScore();
  setup();
 }
});


});