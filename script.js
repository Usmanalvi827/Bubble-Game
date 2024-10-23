let timer = 60; // Game time in seconds
let score = 0;
let hrN; // Hit number

function getNewHit() {
  hrN = Math.floor(Math.random() * 10); // Generate the hit number (0-9)
  document.querySelector("#hitValue").textContent = hrN;
}

function increaseScore() {
  score += 5;
  document.querySelector("#scoreValue").textContent = score;
}

function makeBubble() {
  let culter = "";

  // Ensure at least one bubble contains the hit number
  let hitPosition = Math.floor(Math.random() * 28); // Random position for the hit number
 
  for (let i = 0; i <= 27; i++) {
    let rN;

    // If this is the hit position, place the hit number
    if (i === hitPosition) {
      rN = hrN;
    } else {
      // Generate a random number for other bubbles
      rN = Math.floor(Math.random() * 10);
    }

    // Add the bubble to the grid
    culter += `<div class="bubble animated-bubble">${rN}</div>`;
  }

  // Inject the bubbles into the DOM
  let bubbles = document.querySelector("#pbtm");
  bubbles.innerHTML = culter;
}

function setTimer() {
  let timerStop = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerStop);
      endGame(); // End the game when the timer runs out
    }
  }, 1000);
}

function endGame() {
  // Remove all bubbles
  let bubbles = document.querySelector("#pbtm");
  bubbles.innerHTML = "";

  // Show "Game Over" message in a heading tag
  let gameOverMessage = document.createElement("h1");
  gameOverMessage.classList.add("game-over-message");
  gameOverMessage.textContent = "Game Over! Your Score: " + score;

  // Insert message into the panel
  document.querySelector("#panel").appendChild(gameOverMessage);

  // Disable further clicks on the bubbles
  document.querySelector("#pbtm").style.pointerEvents = "none";
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  let clickNum = Number(details.target.textContent);
  if (clickNum === hrN) {
    increaseScore();
    makeBubble(); // Generate new bubbles
    getNewHit(); // Generate new hit number
  }
});

// Start the game
getNewHit();
setTimer();
makeBubble();
