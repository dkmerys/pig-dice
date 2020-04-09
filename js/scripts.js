// back-end
function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = "player1";
}

function Player(roundScore, totalScore){
  this.roundScore = 0;
  this.totalScore = 0;
}

var player1 = new Player();
var player2 = new Player();
var newGame = new Game(player1, player2);
console.log(newGame)
// var player1Total = new Game(0, 0);
// var player2Total = new Game(0, 0);


var roll = function() {
  var dieRoll = Math.floor(Math.random() * 6) +1;
  return dieRoll
}

Game.prototype.addRoll = function () {
  this.currentPlayer.roundScore = this.currentPlayer.roundScore + roll();
  console.log(this.currentPlayer.roundScore); 
};

Game.prototype.addRound = function () {
  
  this.player1.totalScore = this.totalScore + this.roundScore
  this.player2.totalScore = this.totalScore + this.roundScore
}


// write a function that goes through the steps of a player taking a turn
// roll the die
// check to see if the result is a 1
// if not 1, add to roundScore each time "roll" is clicked
// if 1, switch player
// bust or hold, run this guy. hold or die function
if(this.currentPlayer === "player1"){
  this.currentPlayer = "player2"
} else {
  this.currentPlayer = "player1"
}


// what happens when we hold?
// roundScore is added to totalScore
  // if >= 100, player wins
  // else, 
    // switch player



// UI Logic
$(document).ready(function() {
  $("#player1-roll").click(function(){
    Game.currentPlayer.addRoll();
    // $("#results").append(player1.roundScore);
  });

  $("#player1-hold").click(function(){
    Game.currentPlayer.addRound()
  });

  // $("#player2-roll").click(function() {
  //   player2Total.addRoll()
  // });

  // var player2Hold = $("#player2-hold").click();
  
 
  
});