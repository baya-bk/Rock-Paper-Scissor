let user_score = 0;
let comp_score = 0;
playGame();

function getPlayer() {
  let choice = prompt("Rock, Paper, or Scissor");
  return choice ? choice.toLowerCase() : "";
}

function getComputer() {
  const choices = ["rock", "paper", "scissor"];
  const compChoice = Math.floor(Math.random() * choices.length);
  return choices[compChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Draw! Both chose ${playerSelection}`);
    return "draw";
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You win! Paper beats Rock");
      return "user";
    } else if (computerSelection === "scissor") {
      console.log("You lose! Scissor beats Paper");
      return "computer";
    }
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissor") {
      console.log("You win! Rock beats Scissor");
      return "user";
    } else if (computerSelection === "paper") {
      console.log("You lose! Paper beats Rock");
      return "computer";
    }
  }
  if (playerSelection === "scissor") {
    if (computerSelection === "paper") {
      console.log("You win! Scissor beats Paper");
      return "user";
    } else if (computerSelection === "rock") {
      console.log("You lose! Rock beats Scissor");
      return "computer";
    }
  }
  console.log("Invalid choice. Please choose Rock, Paper, or Scissor.");
  return "invalid";
}

function playGame() {
  for (let i = 0; i < 4; i++) {
    const playerSelection = getPlayer();
    const computerSelection = getComputer();
    const winner = playRound(playerSelection, computerSelection);
    if (winner === "user") {
      user_score += 1;
    } else if (winner === "computer") {
      comp_score += 1;
    }
  }
  declareWinner(user_score, comp_score);
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
