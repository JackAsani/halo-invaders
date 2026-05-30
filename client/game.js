var songChanged = false;
function update() {
  if (gameStarted) {
    if (halo.health <= 0) {
      gameOver = true;
    }
    if (gameOver) {
      updateToGameOverState();
      function updateToGameOverState() {
        if (!songChanged) {
          ChangeSong("./audio/never-forget-2.mp3");
          songChanged = true;
        }
        // stopped = true;

        // I want to only call these once
        enlargeInvaders();
        portal.enlarge();
        halo.fade();
        clearIntervals();
      }
    }

    updateHealthPacks();
    updateAmmoPacks();
    updateBullets();
    updateInvaders();
    updatePlayer();
  }
}

function draw() {
  if (!gameStarted) {
    drawLandingScreen();
  } else {
    drawGameScreen();
  }
}

function StartGame() {
  // If you assign a value to a variable that has not been declared,
  // it will automatically become a GLOBAL variable.
  portal = new Portal();
  // if (!portal.isAnimated) {
  //   portal.animate();
  //   alert("dbl");
  // } else {
  //   portal.resetAnimation();
  // }
  ChangeSong("./audio/theme.mp3");
  // songChanged = true;

  healthBar = new HealthBar();
  halo = new Halo();
  player = new Player();
  bullets = [];
  invaders = [];
  healthPacks = [];
  ammoPacks = [];
  score = 0;
  textTransparency = 1;

  if (intervalsAreRunning) {
    clearIntervals();
  }
  // tmpsol
  // if (portalAnimationInterval) {
  //   clearInterval(portalAnimationInterval);
  // }
  startIntervals();

  // portal.animate();

  gameStarted = true;
  gameOver = false;
}

function init() {
  input = new inputHandeler();
  halo = new Halo();

  gameLoop = setInterval(function () {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    update();
    draw();
  }, 1000 / FPS);

  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  document.body.appendChild(canvas);
}

// function RestartGame() {
//   portal = new Portal();
//   halo.health = 10;
//   bullets = [];
//   invaders = [];
//   healthPacks = [];
//   ammoPacks = [];
//   score = 0;
//   songChanged = false;
//   gameOver = false;
// }
