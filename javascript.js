function getComputerChoice() {
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
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      alert(`it\'s a tie!, human score: ${humanScore} | computer score: ${computerScore}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") 
      || (humanChoice === "paper" && computerChoice === "rock") 
      || (humanChoice === "scissors" && computerChoice === "paper")) {
      ++ humanScore;
      alert(`You Win! ${humanChoice} beats ${computerChoice}, human score: ${humanScore} | computer score: ${computerScore}.`);
    } else {
      ++ computerScore;
      alert(`You Lose! ${computerChoice} beats ${humanChoice}, human score: ${humanScore} | computer score: ${computerScore}.`);
    }
  }
  playRound(humanSelection, computerSelection);
}


function gameWinner () {
  playGame();
  playGame();
  playGame();
  playGame();
  playGame();

  if (humanScore > computerScore) {
    alert(`You Win the Game! human score is: ${humanScore} | computer score is: ${computerScore}.` );
  } else if (humanScore < computerScore) {
    alert(`You Lose the Game! human score is: ${humanScore} | computer score is: ${computerScore}.` );
  } else {
    alert(`No winner, No loser! human score is: ${humanScore} | computer score is: ${computerScore}.` );
  }
}

gameWinner();