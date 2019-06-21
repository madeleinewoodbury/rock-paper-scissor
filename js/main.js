// Global variables
const rps = ['ROCK', 'PAPER', 'SCISSOR'];
let playerHand;
let computerHand;
let playerScore;
let computerScore;
const playerDisplay = document.querySelector('#player-score');
const computerDisplay = document.querySelector('#computer-score');
const gameContainer = document.querySelector('.game-container');

//
// FUNCTIONS
//

// Initialize a new game
const initGame = () => {
  playerScore = 0;
  computerScore = 0;

  updateScore();
};

const compareHands = (playerHand, compareHand) => {
  if (playerHand != compareHand) {
    if (playerHand == 'ROCK') {
      if (computerHand != 'PAPER') {
        playerWins();
      } else {
        computerWins();
      }
    } else if (playerHand == 'PAPER') {
      if (computerHand != 'SCISSOR') {
        playerWins();
      } else {
        computerWins();
      }
    } else {
      if (computerHand != 'ROCK') {
        playerWins();
      } else {
        computerWins();
      }
    }
  } else {
    tie();
  }
};

const computerWins = () => {
  console.log('Computer Wins!');
  computerScore += 1;
  updateScore();
};

const playerWins = () => {
  console.log('Player Wins!');
  playerScore += 1;
  updateScore();
};

const tie = () => {
  console.log("It's a tie!!!");
};

const updateScore = () => {
  playerDisplay.textContent = playerScore;
  computerDisplay.textContent = computerScore;
};

// Event listeners
gameContainer.addEventListener('click', e => {
  const handClicked = e.target.classList;

  // Determine if hand clicked
  if (handClicked.contains('fas')) {
    if (handClicked.contains('fa-hand-rock')) {
      playerHand = rps[0]; // ROCK
    } else if (handClicked.contains('fa-hand-paper')) {
      playerHand = rps[1]; // PAPER
    } else {
      playerHand = rps[2]; // SCISSOR
    }

    // Randomly select hand for computer
    computerHand = rps[Math.floor(Math.random() * rps.length)];

    console.log(`Computer: ${computerHand}, Player: ${playerHand}`);
    compareHands(playerHand, computerHand);
  }
});

initGame();
