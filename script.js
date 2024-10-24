let timer = 60; 
let score = 0;
let hrN; 

function getNewHit() {
  hrN = Math.floor(Math.random() * 10); 
  document.querySelector("#hitValue").textContent = hrN;
}

function increaseScore() {
  score += 5;
  document.querySelector("#scoreValue").textContent = score;
}

function makeBubble() {
  let culter = "";

  let hitPosition = Math.floor(Math.random() * 28); 
  for (let i = 0; i <= 27; i++) {
    let rN;

    if (i === hitPosition) {
      rN = hrN;
    } else {
      rN = Math.floor(Math.random() * 10);
    }
    culter += `<div class="bubble animated-bubble">${rN}</div>`;
  }
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
      endGame(); 
    }
  }, 1000);
}

function endGame() {
  let bubbles = document.querySelector("#pbtm");
  bubbles.innerHTML = "";
  let gameOverMessage = document.createElement("h1");
  gameOverMessage.classList.add("game-over-message");
  gameOverMessage.textContent = "Game Over! Your Score: " + score;

  document.querySelector("#panel").appendChild(gameOverMessage);

  document.querySelector("#pbtm").style.pointerEvents = "none";
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  let clickNum = Number(details.target.textContent);
  if (clickNum === hrN) {
    increaseScore();
    makeBubble(); 
    getNewHit(); 
  }
});

getNewHit();
setTimer();
makeBubble();
