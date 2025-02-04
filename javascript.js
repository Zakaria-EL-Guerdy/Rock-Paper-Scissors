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
  let humanChoice = prompt("Enter rock, paper, or scissors");

  // !humanChoice return true if user enters an empty string or canceled the input
  if (!humanChoice) { 
    alert("ERROR! You must enter a choice.");
    return getHumanChoice(); // Ask again if input is invalid
  }

  humanChoice = humanChoice.toLowerCase(); 

  if (["rock", "paper", "scissors"].includes(humanChoice)) {
    return humanChoice; 
  } else {
    alert("Invalid choice! Enter rock, paper, or scissors.");
    return getHumanChoice(); // Ask again if input is incorrect
  }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    alert(`Round ${i + 1}\n\nit\'s a tie! you both choses ${humanChoice}\n\nscore: you ${humanScore} | computer ${computerScore}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") 
    || (humanChoice === "paper" && computerChoice === "rock") 
    || (humanChoice === "scissors" && computerChoice === "paper")) {
    ++ humanScore;
    alert(`Round ${i + 1}\n\nYou Win! ${humanChoice} beats ${computerChoice}\n\nscore: you ${humanScore} | computer ${computerScore}.`);
  } else {
    ++ computerScore;
    alert(`Round ${i + 1}\n\nYou Lose! ${computerChoice} beats ${humanChoice}\n\nscore: you ${humanScore} | computer ${computerScore}.`);
  }
}

let i = 0;
while (i < 5) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  i++;
}

if (humanScore === computerScore) {
  alert(`It\'s a tie!\n\nFinal score: you ${humanScore} | computer ${computerScore}`);
} else if (humanScore > computerScore){
  alert(`You win the game\n\nFinal score: you ${humanScore} | computer ${computerScore}`);
} else {
  alert(`You lose the game\n\nFinal score: you ${humanScore} | computer ${computerScore}`);
}
