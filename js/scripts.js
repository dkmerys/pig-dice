// back-end

var roll = function() {
  console.log(Math.floor(Math.random() * 6) +1);
  // var result = Math.floor(Math.random() * 6) +1; 
  var result = 2; 
  return result;
}


// UI Logic
$(document).ready(function() {
  var player1Roll = 0;
  $("#player1-roll").click(roll);
  $("#player2-roll").click(roll);
  var player1Hold = $("#player1-hold").click();
  var player2Hold = $("#player2-hold").click();
  
  console.log("Player1Roll: " + player1Roll);

  // var total = new Counter(totalScore);
  // var runningTotal = new Counter(roundTotal);
  
});