// AVEC TABLEAU
// const choix = ["pierre", "feuille", "ciseaux"];

// function getComputerChoice() {
//   const random = Math.floor(Math.random() * choix.length);
//   console.log(choix[random]);
// }

// getComputerChoice();

// SANS TABLEAU

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  let computerChoice;
  if (random === 1) {
    computerChoice = "pierre";
  } else if (random === 2) {
    computerChoice = "feuille";
  } else {
    computerChoice = "ciseaux";
  }
  console.log(computerChoice);

  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Pierre, feuille, ciseaux ?");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice.toLowerCase() === "pierre" && computerChoice === "feuille") ||
    (humanChoice.toLowerCase() === "ciseaux" && computerChoice === "pierre") ||
    (humanChoice.toLowerCase() === "feuille" && computerChoice === "ciseaux")
  ) {
    console.log("Robot win");
    computerScore++;
  } else if (
    (humanChoice.toLowerCase() === "feuille" && computerChoice === "pierre") ||
    (humanChoice.toLowerCase() === "pierre" && computerChoice === "ciseaux") ||
    (humanChoice.toLowerCase() === "ciseaux" && computerChoice === "feuille")
  ) {
    console.log("Human win");
    humanScore++;
  } else {
    console.log("Egalité");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
