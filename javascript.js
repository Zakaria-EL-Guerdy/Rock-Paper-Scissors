let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `\nit\'s a tie! you both choses ${humanChoice}\n\nscore: you ${humanScore} | computer ${computerScore}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") 
    || (humanChoice === "paper" && computerChoice === "rock") 
    || (humanChoice === "scissors" && computerChoice === "paper")) {
    ++ humanScore;
    return `\nYou Win! ${humanChoice} beats ${computerChoice}\n\nscore: you ${humanScore} | computer ${computerScore}.`;
  } else {
    ++ computerScore;
    return `\nYou Lose! ${computerChoice} beats ${humanChoice}\n\nscore: you ${humanScore} | computer ${computerScore}.`;
  }
}


const buttons = document.querySelector('#buttons');
buttons.addEventListener('click', e => {
  let humanSelection = e.target.id;
  let computerSelection = getComputerChoice();
  results.innerText = playRound(humanSelection, computerSelection);

  if (humanScore === 5) {
    alert('You Win the Game!');
  } else if (computerScore === 5) {
    alert('You Lose the Game!');
  } else if (humanScore === 5 && computerScore === 5) {
    alert('it\'s a tie!');
  }
});
const body = document.querySelector('body');
const results = document.querySelector('#results');

body.appendChild(results);
