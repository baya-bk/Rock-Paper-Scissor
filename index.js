let user_score = 0;
let comp_score = 0;
playGame();

function getPlayer() {
  let choice = prompt("Rock, Paper or Scissor");

  return choice.toLowerCase();
}

function getComputer(Rock, Paper, Scissor) {
  var choice = ["rock", "paper", "scissor"];
  var compChoice = Math.floor(Math.random() * choice.length);
  return choice[compChoice];
}

function playRound() {
  const playerSelection = getPlayer();
  const computerSelection = getComputer();
  if (playerSelection === computerSelection) {
    console.log("Draw");
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You win!");
      return "user";
    } else if (computerSelection === "scissor") {
      console.log("You Lose! Scissor beats Paper");
      return "computer";
    }
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissor") {
      console.log("You win!");
      return "user";
    } else if (computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
      return "computer";
    }
  }
  if (playerSelection === "scissor") {
    if (computerSelection === "paper") {
      console.log("You win!");
      return "user";
    } else if (computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissor");
      return "computer";
    }
  }
}

function playGame() {
  let playerSelection = getPlayer();
  let computerSelection = getComputer();
  for (let i = 0; i < 4; i++) {
    let winner = playRound(playerSelection, computerSelection);
    if (winner === "user") {
      user_score += 1;
    } else comp_score += 1;
    if (i === 3) {
      break;
    }
  }
  console.log(declareWinner(user_score, comp_score));
}

function declareWinner(user_score, comp_score) {
  if (user_score > comp_score) {
    console.log("Congrats! You Won!");
  } else if (user_score < comp_score) {
    console.log("Computer Won. Try again :(");
  } else {
    console.log("It's a tie game!");
  }
}
