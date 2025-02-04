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

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    ++ humanScore;
    ++ computerScore;
    return `it\'s a tie!\nyour score ${humanScore} | computer score ${computerScore}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") 
    || (humanChoice === "paper" && computerChoice === "rock") 
    || (humanChoice === "scissors" && computerChoice === "paper")) {
    ++ humanScore;
    return `You Win! ${humanChoice} beats ${computerChoice}\nyour score ${humanScore} | computer score ${computerScore}.`;
  } else {
    ++ computerScore;
    return `You Lose! ${computerChoice} beats ${humanChoice}\nyour score ${humanScore} | computer score ${computerScore}.`;
  }
}


const body = document.querySelector('body');
const results = document.querySelector('div');

// body.addEventListener('click', e => {
//   const humanSelection = e.target.id;
//   results.innerText = playRound(humanSelection, computerSelection);
// });

const rock = document.querySelector('#rock');
rock.addEventListener('click', e => {
  const humanSelection = e.target.id;
  results.innerText = playRound(humanSelection, computerSelection);
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', e => {
  const humanSelection = e.target.id;
  results.innerText = playRound(humanSelection, computerSelection);
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', e => {
  const humanSelection = e.target.id;
  results.innerText = playRound(humanSelection, computerSelection);
})


body.appendChild(results);


