// Business Logic
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


Game.prototype.switchTurn = function () {
 // this.players[this.currentPlayerIndex].totalScore += this.players[this.currentPlayerIndex].roundScore;
  console.log(this.players[this.currentPlayerIndex].totalScore)
  this.players[this.currentPlayerIndex].roundScore = 0;  // turn roundscore to 0
  this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  this.currentPlayer = this.players[this.currentPlayerIndex];
}

var roll = function() {
  var dieRoll = Math.floor(Math.random() * 6) +1;
  return dieRoll
}
 
Game.prototype.addRoll = function () {
  var currentRoll = roll();
  if (currentRoll === 1) {
    this.currentPlayer.roundScore = 0
    this.switchTurn();
  } else {
    this.currentPlayer.roundScore = this.currentPlayer.roundScore + currentRoll;
  }
  console.log(this.currentPlayer.roundScore); 
};

Game.prototype.addRound = function () {
  this.currentPlayer.totalScore = this.currentPlayer.totalScore + this.currentPlayer.roundScore;
}


// what happens when we hold?
// roundScore is added to totalScore
  // if >= 100, player wins
  // else, 
    // switch player



// UI Logic
$(document).ready(function() {
  $("#roll").click(function(){
    newGame.addRoll();
    $("#round-score").text("" + newGame.currentPlayer.roundScore + "")
  });

  $("#hold").click(function(){
    newGame.addRound();
    newGame.switchTurn();
    $("#player1-score").text("" + newGame.r1.totalScore + "")
    $("#player2-score").text("" + newGame.Player2.totalScore + "")

  });
 
});