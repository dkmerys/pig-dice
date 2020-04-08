// back-end
function Counter(gameScore, roundScore, grScore){
  this.gamescore = gameScore;
  this.roundScore = roundScore
  this.grScore = game
}
var player1Total = new Counter(0, 0);
var player2Total = new Counter(0, 0);


var roll = function() {
  var dieRoll = Math.floor(Math.random() * 6) +1;
  return dieRoll
}

Counter.prototype.addRoll = function () {
  this.roundScore = this.roundScore + roll();
  console.log(this.roundScore)
  
}

Counter.prototype.addRound = function () {
  this.gameScore = this.gameScore
}


// UI Logic
$(document).ready(function() {
  $("#player1-roll").click(function(){
    player1Total.addRoll()
    $("#results").append(player1Total.roundScore);
  });

  $("#player1-hold").click(function(){
    player1Total.addRound()
  });

  $("#player2-roll").click(function() {
    player2Total.addRoll()
  });

  var player2Hold = $("#player2-hold").click();
  
 
  
});