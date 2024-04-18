let choice = prompt("Rock, Paper or Scissor");

const playerSelection = choice.toLowerCase();

function getComputer(Rock, Paper, Scissor) {
  var choice = ["rock", "paper", "scissor"];
  var compChoice = Math.floor(Math.random() * choice.length);
  return choice[compChoice];
}
const computerSelection = getComputer();
console.log("You chose:" + playerSelection);
console.log("Computer chose:" + computerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Draw");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win!");
    return "user";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("You win!");
    return "user";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("You win!");
    return "user";
  } else {
    console.log("Computer win");
    return "computer";
  }
}

function playGame() {
  var user_score = 0;
  var comp_score = 0;
  for (let i = 0; i < 5; i++) {
    let winner = playRound(playerSelection, computerSelection);
    if (winner === "user") {
      user_score += 1;
    } else comp_score += 1;
  }
  console.log("Final Score:");
  console.log("You: " + user_score);
  console.log("Computer: " + comp_score);

  if (user_score > comp_score) {
    console.log("Congrats! You Won!");
  } else if (user_score < comp_score) {
    console.log("Computer Won. Try again :(");
  } else {
    console.log("It's a tie game!");
  }
}
playGame();
