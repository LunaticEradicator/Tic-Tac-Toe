/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */
import "./sass/style.scss";

const cell = document.querySelectorAll(".cell");
const startBtnDiv = document.querySelector(".start");
const startBtn = document.querySelector(".startBtn");
const menuBtn = document.querySelector(".menuBtn");
const section = document.querySelector(".section");
const scoreOne = document.querySelector(".scoreOne");
const scoreTwo = document.querySelector(".scoreTwo");
const span = document.querySelectorAll("span");

const zerothCell = document.getElementById("1");
const firstCell = document.getElementById("2");
const secondCell = document.getElementById("3");
const thirdCell = document.getElementById("4");
const fourthCell = document.getElementById("5");
const fifthCell = document.getElementById("6");
const sixthCell = document.getElementById("7");
const seventhCell = document.getElementById("8");
const eightCell = document.getElementById("9");

const OpponentSelection = document.querySelector(".OpponentSelection");
const selectionMenu = document.querySelector(".selectionMenu");
const PVP = document.querySelector(".PVP");
const PVE = document.querySelector(".PVE");
const winnerUi = document.createElement("div");

const game = {
  gameBoard: ["x", "o"], // change this on PvP
  // swapElement(array) {
  //   // to swap the value using destructor
  //   [this.gameBoard[0], this.gameBoard[1]] = [
  //     this.gameBoard[1],
  //     this.gameBoard[0],
  //   ];
  // },
  arrayPVE: [],
  idSignArray: [],
  predefinedArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  cellPosition: 0,
  playerDraw: 0, // reset a round for PVP
  roundPlayed: 0, // condition for checking gameOver
  isPVP: false, // check if player pressed PVP button
  isPVE: false, // check if player pressed PVE button
  isRoundOver: false,
  isDraw: false, // Check for draw
  isOver: false, // Check for gameOver
};

const createPlayer = function (name) {
  return { name };
};

const player = {
  playerOne: createPlayer("Player One"),
  playerTwo: createPlayer("Player Two"),
  isSwitchSign: false,
  playerOneScore: 0,
  playerTwoScore: 0,
};

function ticTacToe() {
  winnerUi.classList.add("winnerUi");
  section.append(winnerUi);
  startGame();
  playPVP();
  playPVE();
}
ticTacToe();

function startGame() {
  startBtn.addEventListener("click", (e) => {
    selectionMenu.style.visibility = "visible";
    selectionMenu.style.opacity = "100";
    OpponentSelection.style.visibility = "visible";
    OpponentSelection.style.opacity = "100";
    PVP.style.visibility = "visible";
    PVP.style.opacity = "100";
    PVE.style.visibility = "visible";
    PVE.style.opacity = "100";
  });
}
function startButtonHide() {
  selectionMenu.style.visibility = "hidden";
  selectionMenu.style.opacity = "0";
  startBtnDiv.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  for (const spans of span) {
    spans.style.opacity = 0;
  }
  OpponentSelection.style.visibility = "hidden";
  OpponentSelection.style.opacity = "0";
  PVP.style.visibility = "hidden";
  PVP.style.opacity = "0";
  PVE.style.visibility = "hidden";
  PVE.style.opacity = "0";
  section.style.visibility = "visible";
  section.style.opacity = 100;
}

function playPVP() {
  menu();
  PVP.addEventListener("click", (e) => {
    game.isPVP = true;
    game.isPVE = false;
    startButtonHide();
    cell.forEach((cells) => {
      cells.addEventListener("click", playPVPFnc, { once: true }); // Third Parameter - Makes selection once per player
    });
  });
}
function playPVPFnc(e) {
  // this = cells
  game.playerDraw++; // for draw condition
  game.cellPosition = e.target.id; // id of the html element
  game.cellPosition = +game.cellPosition; // + converts the string to int
  game.idSignArray[game.cellPosition] = game.cellPosition; // insert the value to array at specific position

  // Player Switching
  if (!player.isSwitchSign) {
    // Player One
    player.isSwitchSign = true;
    this.textContent = game.gameBoard[0]; // select the first sign item and then flips it
    player.playerOne.sign = this.textContent;
    game.arrayPVE[game.cellPosition] = player.playerOne.sign; // insert the value to array at specific position
    gameLogic(player.playerOne, scoreOne);
    this.style.color = "rgb(90, 90, 230)";

    console.log("First Player Position");
    console.log(game.arrayPVE);
    console.log(
      "------------------------------------------------------ PLayer One "
    );
  } else {
    // Player Two
    player.isSwitchSign = false;
    this.textContent = game.gameBoard[1];
    player.playerTwo.sign = this.textContent;
    game.arrayPVE[game.cellPosition] = player.playerTwo.sign;
    gameLogic(player.playerTwo, scoreTwo);
    this.style.color = "rgb(228, 72, 72)";

    console.log("Second Player Position");
    console.log(game.arrayPVE);
    console.log(
      "------------------------------------------------------ player Two"
    );
  }
}
//  !!!!!!!!!!!!!!!!!!!

function playPVE() {
  menu();
  PVE.addEventListener("click", (e) => {
    game.isPVE = true;
    game.isPVP = false;
    startButtonHide();
    cell.forEach((cells) => {
      cells.addEventListener("click", playPVEFnc, { once: true }); // Third Parameter - Makes selection once per player
    });
  });
}
function removeDuplicateCellIndexFromArray(cellArray) {
  // removes the number from predefinedArray,
  // so that the number won't repeat or be overwritten by AI
  const userSelectedCellPosition = game.predefinedArray.indexOf(cellArray);
  if (userSelectedCellPosition > -1) {
    game.predefinedArray.splice(userSelectedCellPosition, 1);
  }
}
function playPVEFnc(e) {
  if (this.textContent === "" && AIDrawFnc) {
    game.playerDraw++; // for draw condition
    // console.log(`Game Played ${Game.gamePlayed} in PVE`);
    // ------------------------Player One  ------------------------ //
    console.log("Player One -------------");
    game.cellPosition = e.target.id; // id of the html element
    this.style.color = "rgb(90, 90, 230)"; // blue color for userInput
    this.classList.add = "anim"; // select "o" sign

    // this.style.transition = "all 1s"; // blue color for userInput
    game.cellPosition = parseInt(game.cellPosition); //  converts the string to int
    const userSelectedCellPosition = game.predefinedArray.indexOf(
      game.cellPosition
    );
    removeDuplicateCellIndexFromArray(game.cellPosition);
    this.textContent = game.gameBoard[0]; // select "x" sign
    player.playerOne.sign = this.textContent;
    game.arrayPVE[game.cellPosition] = player.playerOne.sign; // insert "x" at specific position to array
    gameLogic(player.playerOne, scoreOne);
    console.log(userSelectedCellPosition);

    //  ------------------------ AI ------------------------ //
    // stop generating randomNumPosition creating after game draw [stop AI from Drawing after round reset]
    if (game.playerDraw < 5 && game.isRoundOver === false) {
      cell.forEach((cells) => {
        cells.removeEventListener("click", playPVEFnc, { once: true }); // Third Parameter - Makes selection once per player
      });
      console.log(game.isRoundOver);
      // if (game.isRoundOver === false) {
      winnerUi.classList.add("winnerUi__visible");
      winnerUi.textContent = "Waiting For AI Draw";
      setTimeout(removeAIDrawText, 600);
      setTimeout(AIDrawFnc, 1000);
      // }
    }
  }

  function removeAIDrawText() {
    winnerUi.classList.remove("winnerUi__visible");
  }

  function AIDrawFnc() {
    console.log("AI ----------------");
    const randomAIIndex =
      game.predefinedArray[
        Math.floor(Math.random() * game.predefinedArray.length)
      ];
    removeDuplicateCellIndexFromArray(randomAIIndex);

    const drawAI = document.querySelector(`.cell:nth-child(${randomAIIndex})`);
    console.log(`This is AI : ${randomAIIndex}`);

    let AICellPosition = drawAI.id;
    drawAI.textContent = game.gameBoard[1]; // select "o" sign
    AICellPosition = parseInt(AICellPosition); //  converts the string to int
    player.playerTwo.sign = drawAI.textContent;
    game.arrayPVE[AICellPosition] = player.playerTwo.sign; // insert "o" at specific position to array

    cell.forEach((cells) => {
      cells.addEventListener("click", playPVEFnc, { once: true }); // Third Parameter - Makes selection once per player
    });
    gameLogic(player.playerTwo, scoreTwo);

    // console.log(`playerTwo.sign is ${playerTwo.sign}`);
    // console.log(signArray)
    // console.log(Game.playerSignArray);
    // console.log("-----------------------------------------------------");

    console.log(game.arrayPVE);
    console.log(game.playerDraw);
    console.log(`--------------------------------${game.playerDraw}`);
  }
}
//  !!!!!!!!!!!!!!!!!!!!

function gameLogic(selectedPlayer, playerUI) {
  if (game.isDraw === false) {
    // Horizontal Chance
    if (
      game.arrayPVE[1] === selectedPlayer.sign &&
      game.arrayPVE[2] === selectedPlayer.sign &&
      game.arrayPVE[3] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(zerothCell, firstCell, secondCell);
    } else if (
      game.arrayPVE[4] === selectedPlayer.sign &&
      game.arrayPVE[5] === selectedPlayer.sign &&
      game.arrayPVE[6] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(thirdCell, fourthCell, fifthCell);
    } else if (
      game.arrayPVE[7] === selectedPlayer.sign &&
      game.arrayPVE[8] === selectedPlayer.sign &&
      game.arrayPVE[9] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;

      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(sixthCell, seventhCell, eightCell);
    }

    // Vertical Chance
    else if (
      game.arrayPVE[1] === selectedPlayer.sign &&
      game.arrayPVE[4] === selectedPlayer.sign &&
      game.arrayPVE[7] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;

      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(zerothCell, thirdCell, sixthCell);
    } else if (
      game.arrayPVE[2] === selectedPlayer.sign &&
      game.arrayPVE[5] === selectedPlayer.sign &&
      game.arrayPVE[8] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;

      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(firstCell, fourthCell, seventhCell);
    } else if (
      game.arrayPVE[3] === selectedPlayer.sign &&
      game.arrayPVE[6] === selectedPlayer.sign &&
      game.arrayPVE[9] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;

      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(secondCell, fifthCell, eightCell);
    }

    // Diagonal Chance
    else if (
      game.arrayPVE[1] === selectedPlayer.sign &&
      game.arrayPVE[5] === selectedPlayer.sign &&
      game.arrayPVE[9] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;

      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(zerothCell, fourthCell, eightCell);
    } else if (
      game.arrayPVE[7] === selectedPlayer.sign &&
      game.arrayPVE[5] === selectedPlayer.sign &&
      game.arrayPVE[3] === selectedPlayer.sign
    ) {
      game.isRoundOver = true;

      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(sixthCell, fourthCell, secondCell);
    }
    // Draw the round if all rows are filled
    else if (game.playerDraw === 9 && game.isPVP === true) {
      game.isRoundOver = true;
      game.isDraw = true;
      roundStatus(selectedPlayer);
    } else if (game.playerDraw === 5 && game.isPVE === true) {
      game.isRoundOver = true;

      game.isDraw = true;
      roundStatus(selectedPlayer);
    }
  }
}
function roundStatus(selectedPlayer) {
  console.clear();
  game.roundPlayed += 1; // to stop game when any player reaches 5 points
  console.log(`Game Played ${game.roundPlayed} `);

  for (const cells of cell) {
    if (game.isPVP === true) {
      cells.removeEventListener("click", playPVPFnc, { once: true }); // stops the game
    }
    if (game.isPVE === true) {
      cells.removeEventListener("click", playPVEFnc, { once: true }); // stops the game
    }
  }

  // ! change to 5
  if (game.isDraw && game.roundPlayed !== 5) {
    winnerUi.textContent = `Round Ended in a Draw`;
    setTimeout(reset, 1300); // dynamic restart
  } else if (game.roundPlayed !== 5) {
    winnerUi.textContent = `Round Winner : ${selectedPlayer.name}`;
    setTimeout(reset, 1300); // dynamic restart
  } else if (game.roundPlayed === 5) {
    // alert("Reached 5");
    if (player.playerOneScore > player.playerTwoScore) {
      winnerUi.textContent = `Congratulations,Player One won.`;
      winnerUi.classList.add("gameOverUI");
    } else if (player.playerOneScore === player.playerTwoScore) {
      winnerUi.textContent = `Game Draw.`;
      winnerUi.classList.add("gameOverUI");
    } else {
      winnerUi.textContent = `Congratulations Player Two won.`;
      winnerUi.classList.add("gameOverUI");
    }
    restartGameManually();
  }
  winnerUi.classList.add("winnerUi");
  winnerUi.classList.add("winnerUi__visible");
}
function reset() {
  for (const cells of cell) {
    cells.textContent = "";
    game.playerDraw = 0;
    game.arrayPVE = [];
    game.idSignArray = [];
    player.isSwitchSign = false;
    game.isDraw = false;
    game.isRoundOver = false;
    game.gameBoard = ["x", "o"];
    game.predefinedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // winnerUi.textContent = ""; // transition won't work

    // reset cell color
    cell.forEach((cells) => {
      cells.style.backgroundColor = "white";
      cells.style.color = "red";
    });

    scoreOne.style.color = "white";
    scoreOne.classList.remove("scoreScale");
    scoreTwo.classList.remove("scoreScale");

    scoreTwo.style.color = "white";
    winnerUi.classList.remove("winnerUi__visible");
    winnerUi.classList.remove("gameOverUI");

    // console.log(game.arrayPVE);
    if (game.isPVP === true) {
      cells.addEventListener("click", playPVPFnc, { once: true });
    }
    if (game.isPVE === true) {
      cells.addEventListener("click", playPVEFnc, { once: true });
    }
  }
}

function menu() {
  menuBtn.addEventListener("click", (e) => {
    selectionMenu.style.visibility = "visible";
    selectionMenu.style.opacity = "100";
    startBtnDiv.style.visibility = "visible";
    startBtn.style.visibility = "visible";
    for (const spans of span) {
      // startButton Styling
      spans.style.opacity = 100;
    }
    section.style.visibility = "hidden";
    section.style.opacity = 0;
    section.style.transition = "0.1s !important";

    for (const cells of cell) {
      cells.removeEventListener("click", playPVPFnc, { once: true });
    }
    for (const cells of cell) {
      cells.removeEventListener("click", playPVEFnc, { once: true });
    }
    reset();
    restartGame();
  });
}
function restartGame() {
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  player.playerOneScore = 0;
  player.playerTwoScore = 0;
  game.roundPlayed = 0;
  game.isPVP = false;
  game.isPVE = false;
}
function restartGameManually() {
  for (const cells of cell) {
    game.isOver = false; // reset Game Over to false     // manual restart
    cells.addEventListener("click", (e) => {
      if (!game.isOver) {
        if (game.isPVP === true) {
          playPVP();
        }
        if (game.isPVE === true) {
          playPVE();
        }
        scoreOne.textContent = 0;
        scoreTwo.textContent = 0;
        player.playerOneScore = 0;
        player.playerTwoScore = 0;
        game.roundPlayed = 0;
        reset();
        game.isOver = true;
      }
    });
  }
}

function roundScore(selectPlayer, playerUI) {
  if (selectPlayer === player.playerOne) {
    player.playerOneScore++;
    playerUI.textContent = player.playerOneScore;
    scoreOne.style.color = "springgreen";
    scoreOne.classList.add("scoreScale");
    console.log(`PlayerOne: ${player.playerOneScore} `);
  } else if (selectPlayer === player.playerTwo) {
    player.playerTwoScore++;
    playerUI.textContent = player.playerTwoScore;
    scoreTwo.style.color = "springgreen";
    scoreTwo.classList.add("scoreScale");
    console.log(`PlayerTwo: ${player.playerTwoScore} `);
  }
}

function winnerBackgroundColorChange(a, b, c) {
  a.style.backgroundColor = "rgb(184, 228, 148)";
  b.style.backgroundColor = "rgb(184, 228, 148)";
  c.style.backgroundColor = "rgb(184, 228, 148)";
}
