// back-end
function Game(player1, player2){
  this.players = [player1, player2];
  this.currentPlayerIndex = 0;
  this.currentPlayer = this.players[0];
}



function Player(){
  this.roundScore = 0;
  this.totalScore = 0;
}

var player1 = new Player();
var player2 = new Player();
var newGame = new Game(player1, player2);
var currentPlayer = newGame.currentPlayer[newGame.currentPlayerIndex];
console.log(newGame)
//console.log(rrentPlayer);
//console.log(currentPlayerIndex);

Game.prototype.switchTurn = function () {
this.currentPlayerIndex.roundScore += this.currentPlayerIndex.totalScore;
this.currentPlayerIndex.roundScore = 0;  // turn roundscore to 0
this.currentPlayerIndex = 1 - this.currentPlayerIndex;
this.currentPlayer = this.players[this.currentPlayerIndex];
}

var roll = function() {
  var dieRoll = Math.floor(Math.random() * 6) +1;
    return dieRoll
}

  
Game.prototype.addRoll = function () {
  this.currentPlayer.roundScore = this.currentPlayer.roundScore + roll();
    if (roll === 1) {
      this.currentPlayer.roundScore = 0
      newGame.switchTurn()
    }
  console.log(this.currentPlayer.roundScore); 
};
// Game.prototype.addRoll = function () {
//   this.currentPlayer.roundScore = this.currentPlayer.roundScore + roll();
//   console.log(this.currentPlayer.roundScore); 
      
// };

Game.prototype.addRound = function () {
  this.currentPlayer.totalScore = this.currentPlayer.totalScore + this.currentPlayer.roundScore;
}


// write a function that goes through the steps of a player taking a turn
// roll the die
// check to see if the result is a 1
// if not 1, add to roundScore each time "roll" is clicked
// if 1, switch player
// bust or hold, run this guy. hold or die function


// what happens when we hold?
// roundScore is added to totalScore
  // if >= 100, player wins
  // else, 
    // switch player



// UI Logic
$(document).ready(function() {
  $("#player1-roll").click(function(){
    newGame.addRoll();
    // $("#results").append(player1.roundScore);
  });

  $("#player1-hold").click(function(){
    newGame.addRound();
    newGame.switchTurn();
  });
 
});