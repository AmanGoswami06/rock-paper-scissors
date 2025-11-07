let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const resultDiv = document.getElementById("result");

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `😐 It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `🎉 You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultDiv.textContent = `💀 You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;

  if (humanScore === 5 || computerScore === 5) {
    setTimeout(() => {
      if (humanScore > computerScore) {
        alert("🏆 You won the game!");
      } else {
        alert("💻 Computer won the game!");
      }
      humanScore = 0;
      computerScore = 0;
      document.getElementById("humanScore").textContent = 0;
      document.getElementById("computerScore").textContent = 0;
      resultDiv.textContent = "";
    }, 100);
  }
}
