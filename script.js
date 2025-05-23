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
    result.textContent += ` ${
      humanScore === 5 ? "You win the game!" : "Computer wins the game!"
    }`;

    // disable buttons
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

function playRound(humanChoice, computerChoice) {
  const player = humanChoice.trim().toLowerCase();
  const chooseStatement = choice(player, computerChoice);

  if (player === computerChoice) {
    return `${chooseStatement}. It's a tie!`;
  }

  if (
    (player === "rock" && computerChoice === "scissors") ||
    (player === "paper" && computerChoice === "rock") ||
    (player === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `${chooseStatement}. You win!`;
  } else {
    computerScore++;
    return `${chooseStatement}. You lose!`;
  }
}

function choice(playerChoice, comChoice) {
  return `You chose ${playerChoice} and computer chose ${comChoice}`;
}

const getHumanChoice = () => {
  return prompt("Choose rock, paper, scissors!!!");
};

const getComputerChoice = () => {
  const arr = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * arr.length);
  return arr[randNum];
};
