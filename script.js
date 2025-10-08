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

  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Pierre, feuille, ciseaux ?");
  return humanChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice.toLowerCase() === "pierre" &&
        computerChoice === "feuille") ||
      (humanChoice.toLowerCase() === "ciseaux" &&
        computerChoice === "pierre") ||
      (humanChoice.toLowerCase() === "feuille" && computerChoice === "ciseaux")
    ) {
      console.log("Robot win");
      computerScore++;
    } else if (
      (humanChoice.toLowerCase() === "feuille" &&
        computerChoice === "pierre") ||
      (humanChoice.toLowerCase() === "pierre" &&
        computerChoice === "ciseaux") ||
      (humanChoice.toLowerCase() === "ciseaux" && computerChoice === "feuille")
    ) {
      console.log("Human win");
      humanScore++;
    } else {
      console.log("Egalité");
    }
  }

  let manche = 0;

  while (manche < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    manche++;
  }

  if (humanScore < computerScore) {
    console.log("Le grand gagnant est Computer");
  } else if (computerScore < humanScore) {
    console.log("Le grand gagnant est Human ");
  } else {
    console.log("EGALITE");
  }
  console.log(
    `Score humain = ${humanScore}, Score Computer = ${computerScore}`
  );
}

playGame();
