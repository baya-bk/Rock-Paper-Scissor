const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

let user_score = 0;
let comp_score = 0;

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

function getComputer() {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = Math.floor(Math.random() * choices.length);
  return choices[compChoice];
}
const container = document.querySelector(".game-container");
const bigDiv = document.createElement("div");
bigDiv.classList.add("bigDiv");

const innerPara = document.createElement("h1");
innerPara.classList.add("innerPara");

bigDiv.appendChild(innerPara);
container.appendChild(bigDiv);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    innerPara.textContent = `Draw! Both chose ${playerSelection}`;
    return "draw";
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      innerPara.textContent = "You win! Paper beats Rock";
      return "user";
    } else if (computerSelection === "scissors") {
      innerPara.textContent = "You lose! Scissors beats Paper";
      return "computer";
    }
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      innerPara.textContent = "You win! Rock beats Scissors";
      return "user";
    } else if (computerSelection === "paper") {
      innerPara.textContent = "You lose! Paper beats Rock";
      return "computer";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      innerPara.textContent = "You win! Scissors beats Paper";
      return "user";
    } else if (computerSelection === "rock") {
      innerPara.textContent = "You lose! Rock beats Scissors";
      return "computer";
    }
  }
  innerPara.textContent =
    "Invalid choice. Please choose Rock, Paper, or Scissors.";
  return "invalid";
}

function playGame(playerSelection) {
  const computerSelection = getComputer();
  const winner = playRound(playerSelection, computerSelection);
  if (winner === "user") {
    user_score += 1;
  } else if (winner === "computer") {
    comp_score += 1;
  }
  declareWinner(user_score, comp_score);
}
function declareWinner(user_score, comp_score) {
  if (user_score > comp_score) {
    innerPara.textContent = "Congrats! You Won!";
  } else if (user_score < comp_score) {
    innerPara.textContent = "Computer Won. Try again :(";
  } else {
    innerPara.textContent = "It's a tie game!";
  }
}
