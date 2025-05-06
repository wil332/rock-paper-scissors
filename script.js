let humanScore = 0;
let computerScore = 0;

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
  return `You choose ${playerChoice} and computer choose ${comChoice}`;
}

const getHumanChoice = () => {
  return prompt("Choose rock, paper, scissors!!!");
};

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() * 4);
  return randNum === 1 ? "rock" : randNum === 2 ? "paper" : "scissors";
};

for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);
  console.log(`Round ${i + 1}: ${result}`);
}

if (humanScore > computerScore) {
  console.log(
    `You win the game! Final score - Your score: ${humanScore}, Computer score: ${computerScore}`
  );
} else if (humanScore < computerScore) {
  console.log(
    `Computer wins the game! Final score - Your score: ${humanScore}, Computer score: ${computerScore}`
  );
} else {
  console.log(
    `It's a tie game! Final score - Your score: ${humanScore}, Computer score: ${computerScore}`
  );
}
