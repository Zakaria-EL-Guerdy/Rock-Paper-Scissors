function getComputerChoice() {
  // Math.random() is a js method that returns a number greater than or equal to zero and strictly less than 1
  let randomNumber = Math.random();

  if (randomNumber <= 0.3) {
    return "rock";
  } else if (randomNumber <= 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter rock, paper or scissors");
  // !humanChoice return true if user enters an empty string or canceled the input
  if (!humanChoice) { 
    alert("ERROR!");
  } else {
    return humanChoice;
  }
}


let humanScore = 0;
let computerScore = 0;

function playGame() {

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      ++ humanScore;
      ++ computerScore;
      alert(`it\'s a tie!\n\nyour score ${humanScore} | computer score ${computerScore}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") 
      || (humanChoice === "paper" && computerChoice === "rock") 
      || (humanChoice === "scissors" && computerChoice === "paper")) {
      ++ humanScore;
      alert(`You Win! ${humanChoice} beats ${computerChoice}\n\nyour score ${humanScore} | computer score ${computerScore}.`);
    } else {
      ++ computerScore;
      alert(`You Lose! ${computerChoice} beats ${humanChoice}\n\nyour score ${humanScore} | computer score ${computerScore}.`);
    }
  }
  playRound(humanSelection, computerSelection);
}

for (let i;; i++) {
  playGame();
  if (humanScore === 5) {
    alert(`You Win the Game!`);
    break;
  } else if (computerScore === 5) {
    alert(`You Lose the Game!` );
    break;
  } else {
    continue;
  }
}


