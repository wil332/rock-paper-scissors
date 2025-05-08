let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

rock.addEventListener("click", () => handleClick("rock"));
paper.addEventListener("click", () => handleClick("paper"));
scissors.addEventListener("click", () => handleClick("scissors"));

function handleClick(humanSelection) {
  const computerSelection = getComputerChoice();
  const roundResult = playRound(humanSelection, computerSelection);

  result.textContent = roundResult;
  score.textContent = `Your score : ${humanScore} | Computer score : ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    result.textContent += `${
      humanScore === 5 ? "You wins the game!" : "Computer wins the game!"
    }`;
  }
}

function playRound(humanChoice, computerChoice) {
  const player = humanChoice.trim().toLowerCase();
  const chooseStatement = choice(player, computerChoice);
  if (player === computerChoice) {
    return `${chooseStatement}. It\'s a tie!`;
  } else if (player === "rock") {
    return computerChoice === "scissors"
      ? (humanScore++, `${chooseStatement}. You win!`)
      : (computerScore++, `${chooseStatement}. You lose!`);
  } else if (player === "paper") {
    return computerChoice === "rock"
      ? (humanScore++, `${chooseStatement}. You win!`)
      : (computerScore++, `${chooseStatement}. You lose!`);
  } else if (player === "scissors") {
    return computerChoice === "paper"
      ? (humanScore++, `${chooseStatement}. You win!`)
      : (computerScore++, `${chooseStatement}. You lose!`);
  } else {
    return "Invalid input!";
  }
}

function choice(playerChoice, comChoice) {
  return `You chose ${playerChoice} and computer chose ${comChoice}`;
}

const getHumanChoice = () => {
  return prompt("Choose rock, paper, scissors!!!");
};

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() * 4);
  return randNum === 1 ? "rock" : randNum === 2 ? "paper" : "scissors";
};

if (humanScore === 5 || computerScore === 5) {
  result.textContent = humanScore === 5 ? "You win" : "Computer win!";
  disableButtons();
}
