// back-end
function Counter(gameScore, roundScore){
  this.gamescore = gameScore;
  this.roundScore = roundScore
}
var player1Total = new Counter(0, 0);
var player2Total = new Counter(0, 0);


var roll = function() {
  console.log(Math.floor(Math.random() * 6) +1);
  
}

Counter.prototype.addRoll = function () {
  this.roundScore = this.roundScore + roll();
  console.log(this.roundScore)
}

// Counter.prototype.hold = function {
//   player1GameTotal.score + 
// };

// UI Logic
$(document).ready(function() {
  var player1Roll = 0;
  $("#player1-roll").click(function(){
    player1Total.addRoll()
    $("#results").text(this.roundScore);
  });
  $("#player2-roll").click(roll);
  var player1Hold = $("#player1-hold").click();
  var player2Hold = $("#player2-hold").click();
  
  console.log("Player1Roll: " + player1Roll);
  
});