// Global variables
const rps = ['rock', 'paper', 'scissors'];
let playerHand;
let computerHand;
let playerScore;
let computerScore;
let restartBtn = document.querySelector('#restart-btn');
const playerDisplay = document.querySelector('#player-score');
const computerDisplay = document.querySelector('#computer-score');
const gameContainer = document.querySelector('.game-container');
let modal = document.querySelector('.modal');
let modalContent = document.querySelector('#modal-content');
let modalTitle = document.querySelector('#modal-title');
let closeModal = document.querySelector('.close');
let playerModalHand = document.querySelector('#modal-player-hand');
let computerModalHand = document.querySelector('#modal-computer-hand');

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
    if (playerHand == 'rock') {
      if (computerHand != 'paper') {
        playerWins();
      } else {
        computerWins();
      }
    } else if (playerHand == 'paper') {
      if (computerHand != 'scissors') {
        playerWins();
      } else {
        computerWins();
      }
    } else {
      if (computerHand != 'rock') {
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
  computerScore += 1;
  updateScore();

  modalTitle.textContent = 'You Lose...';
  modalContent.className = 'bg-loose';
  displayModal();
};

const playerWins = () => {
  playerScore += 1;
  updateScore();

  modalTitle.textContent = 'You Win!!!';
  modalContent.className = 'bg-win';
  displayModal();
};

const tie = () => {
  modalTitle.textContent = "It's a tie!";
  modalContent.className = 'bg-tie';
  displayModal();
};

const displayModal = () => {
  playerModalHand.className = `fas fa-hand-${playerHand} fa-7x`;
  computerModalHand.className = `fas fa-hand-${computerHand} fa-7x`;

  modal.style.display = 'block';
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

// Close the modal
modal.onclick = e => {
  if (
    e.target.classList.contains('modal-container') ||
    e.target.classList.contains('close')
  ) {
    modal.style.display = 'none';
  }
};

// Restart Game
restartBtn.onclick = e => {
  // window.location.reload(true);
  initGame();
};

initGame();
