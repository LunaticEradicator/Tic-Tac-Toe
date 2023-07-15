/* eslint-disable radix */
import { forEach } from "lodash";
import "./sass/style.scss";

const cell = document.querySelectorAll(".cell");
const startBtn = document.querySelector(".startBtn");
const startBtnDiv = document.querySelector(".startBtnDiv");
const menuBtn = document.querySelector(".menuBtn");
const menuDiv = document.querySelector(".menuDiv");
const section = document.querySelector(".section");
const display = document.querySelector(".display");
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
const PVP = document.querySelector(".PVP");
const PVE = document.querySelector(".PVE");

const game = {
  gameBoard: ["x", "o"], // change this on PvP
  swapElement(array) {
    // to swap the value using destructor
    [this.gameBoard[0], this.gameBoard[1]] = [
      this.gameBoard[1],
      this.gameBoard[0],
    ];
  },
  arrayPVE: [],
  idSignArray: [],
  predefinedArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  cellPosition: 0,
  playerDraw: 0,
  roundPlayed: 0,
  playerOneScore: 0,
  playerTwoScore: 0,
  isPVP: false,
  isPVE: false,
};

const createPlayer = function (name) {
  return { name };
};

const playerOne = createPlayer("Player One");
const playerTwo = createPlayer("Player Two");
let isSwitchSign = false; // Check player switch
let isDraw = false; // Check for draw
let isOver = false; // Manual Game restart
const winnerUi = document.createElement("div");
winnerUi.classList.add("winnerUi");
section.append(winnerUi);

function ticTacToe() {
  startGame();
  playPVP();
  playPVE();
}
ticTacToe();
function startGame() {
  startBtn.addEventListener("click", (e) => {
    OpponentSelection.style.visibility = "visible";
    OpponentSelection.style.opacity = "100";
    PVP.style.visibility = "visible";
    PVP.style.opacity = "100";
    PVE.style.visibility = "visible";
    PVE.style.opacity = "100";
  });
}
function startButtonHide() {
  startBtnDiv.style.visibility = "hidden";
  startBtn.style.visibility = "hidden";
  for (const spans of span) {
    // startButton Styling
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

//  !!!!!!!!!!!!!!!!!!!!
function playPVP() {
  PVP.addEventListener("click", (e) => {
    game.isPVP = true;
    game.isPVE = false;
    startButtonHide();
    menu();
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
  if (!isSwitchSign) {
    // Player One
    isSwitchSign = true;
    this.textContent = game.gameBoard[0]; // select the first sign item and then flips it
    playerOne.sign = this.textContent;
    game.arrayPVE[game.cellPosition] = playerOne.sign; // insert the value to array at specific position
    gameLogic(playerOne, scoreOne);
    this.style.color = "rgb(90, 90, 230)";

    console.log("First Player Position");
    console.log(game.arrayPVE);
    console.log(
      "------------------------------------------------------ PLayer One "
    );
  } else {
    // Player Two
    isSwitchSign = false;
    this.textContent = game.gameBoard[1];
    playerTwo.sign = this.textContent;
    game.arrayPVE[game.cellPosition] = playerTwo.sign;
    gameLogic(playerTwo, scoreTwo);
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
  PVE.addEventListener("click", (e) => {
    game.isPVE = true;
    game.isPVP = false;
    startButtonHide();
    menu();
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
  if (this.textContent === "") {
    game.playerDraw++; // for draw condition
    // console.log(`Game Played ${Game.gamePlayed} in PVE`);
    // ------------------------Player One  ------------------------ //
    console.log("Player One -------------");
    game.cellPosition = e.target.id; // id of the html element
    this.style.color = "rgb(90, 90, 230)"; // blue color for userInput
    game.cellPosition = parseInt(game.cellPosition); //  converts the string to int
    const userSelectedCellPosition = game.predefinedArray.indexOf(
      game.cellPosition
    );
    removeDuplicateCellIndexFromArray(game.cellPosition);
    this.textContent = game.gameBoard[0]; // select "x" sign
    playerOne.sign = this.textContent;
    game.arrayPVE[game.cellPosition] = playerOne.sign; // insert "x" at specific position to array
    gameLogic(playerOne, scoreOne);
    console.log(userSelectedCellPosition);

    //  ------------------------ AI ------------------------ //
    // stop generating randomNumPosition creating after game draw
    if (game.playerDraw < 5) {
      console.log("AI ----------------");
      const randomAIIndex =
        game.predefinedArray[
          Math.floor(Math.random() * game.predefinedArray.length)
        ];
      removeDuplicateCellIndexFromArray(randomAIIndex);

      const drawAI = document.querySelector(
        `.cell:nth-child(${randomAIIndex})`
      );
      console.log(`This is AI : ${randomAIIndex}`);
      let AICellPosition = drawAI.id;
      drawAI.textContent = game.gameBoard[1]; // select "o" sign
      AICellPosition = parseInt(AICellPosition); //  converts the string to int
      playerTwo.sign = drawAI.textContent;
      game.arrayPVE[AICellPosition] = playerTwo.sign; // insert "o" at specific position to array
      gameLogic(playerTwo, scoreTwo);

      // console.log(`playerTwo.sign is ${playerTwo.sign}`);
      // console.log(signArray)
      // console.log(Game.playerSignArray);
      // console.log("-----------------------------------------------------");
    }
    console.log(game.arrayPVE);
    console.log(game.playerDraw);
    console.log(`--------------------------------${game.playerDraw}`);
  }
}
//  !!!!!!!!!!!!!!!!!!!!

function gameLogic(player, playerUI) {
  if (isDraw === false) {
    // Horizontal Chance
    if (
      game.arrayPVE[1] === player.sign &&
      game.arrayPVE[2] === player.sign &&
      game.arrayPVE[3] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(zerothCell, firstCell, secondCell);
    } else if (
      game.arrayPVE[4] === player.sign &&
      game.arrayPVE[5] === player.sign &&
      game.arrayPVE[6] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(thirdCell, fourthCell, fifthCell);
    } else if (
      game.arrayPVE[7] === player.sign &&
      game.arrayPVE[8] === player.sign &&
      game.arrayPVE[9] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(sixthCell, seventhCell, eightCell);
    }

    // Vertical Chance
    else if (
      game.arrayPVE[1] === player.sign &&
      game.arrayPVE[4] === player.sign &&
      game.arrayPVE[7] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(zerothCell, thirdCell, sixthCell);
    } else if (
      game.arrayPVE[2] === player.sign &&
      game.arrayPVE[5] === player.sign &&
      game.arrayPVE[8] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(firstCell, fourthCell, seventhCell);
    } else if (
      game.arrayPVE[3] === player.sign &&
      game.arrayPVE[6] === player.sign &&
      game.arrayPVE[9] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(secondCell, fifthCell, eightCell);
    }

    // Diagonal Chance
    else if (
      game.arrayPVE[1] === player.sign &&
      game.arrayPVE[5] === player.sign &&
      game.arrayPVE[9] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(zerothCell, fourthCell, eightCell);
    } else if (
      game.arrayPVE[7] === player.sign &&
      game.arrayPVE[5] === player.sign &&
      game.arrayPVE[3] === player.sign
    ) {
      roundScore(player, playerUI);
      roundStatus(player);
      winnerBackgroundColorChange(sixthCell, fourthCell, secondCell);
    }
    // Draw the round if all rows are filled
    else if (game.playerDraw === 9 && game.isPVP === true) {
      isDraw = true;
      roundStatus(player);
    } else if (game.playerDraw === 5 && game.isPVE === true) {
      isDraw = true;
      roundStatus(player);
    }
  }
}
function roundStatus(player) {
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

  if (isDraw && game.roundPlayed !== 5) {
    winnerUi.textContent = `Level Ended in a Draw`;
    setTimeout(reset, 1300); // dynamic restart
  } else if (game.roundPlayed !== 5) {
    winnerUi.textContent = `${player.name} is the Winner`;
    setTimeout(reset, 1300); // dynamic restart
  } else if (game.roundPlayed === 5) {
    alert("Reached 5");
    if (game.playerOneScore > game.playerTwoScore) {
      winnerUi.textContent = `Congratulations,Player One won.`;
      winnerUi.classList.add("gameOverUI");
    } else if (game.playerOneScore === game.playerTwoScore) {
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
    // if (Game.isPVP === true) {
    //   cells.removeEventListener("click", playPVEFnc, { once: true });
    // }
    // if (Game.isPVE === true) {
    //   cells.removeEventListener("click", playPVPFnc, { once: true });
    // }
    cells.textContent = "";
    game.playerDraw = 0;
    game.arrayPVE = [];
    game.idSignArray = [];
    isSwitchSign = false;
    isDraw = false;
    game.gameBoard = ["x", "o"];
    game.predefinedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // winnerUi.textContent = ""; // transition won't work

    // reset cell color
    cell.forEach((cells) => {
      cells.style.backgroundColor = "white";
      cells.style.color = "red";
    });

    scoreOne.style.color = "white";
    scoreOne.style.transform = "scale(1)";
    scoreTwo.style.color = "white";
    scoreTwo.style.transform = "scale(1)";

    winnerUi.classList.remove("winnerUi__visible");
    winnerUi.classList.remove("gameOverUI");

    console.log(game.arrayPVE);

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
  game.playerOneScore = 0;
  game.playerTwoScore = 0;
  game.roundPlayed = 0;
  game.isPVP = false;
  game.isPVE = false;
}
function restartGameManually() {
  for (const cells of cell) {
    isOver = false; // reset Game Over to false     // manual restart
    cells.addEventListener("click", (e) => {
      if (!isOver) {
        if (game.isPVP === true) {
          playPVP();
        }
        if (game.isPVE === true) {
          playPVE();
        }
        scoreOne.textContent = 0;
        scoreTwo.textContent = 0;
        game.playerOneScore = 0;
        game.playerTwoScore = 0;
        game.roundPlayed = 0;
        reset();
        isOver = true;
      }
    });
  }
}

/// /---------Common Function//---------
function roundScore(player, playerUI) {
  if (player === playerOne) {
    game.playerOneScore++;
    playerUI.textContent = game.playerOneScore;
    scoreOne.style.color = "springgreen";
    scoreOne.style.transform = "scale(3.5)";
    console.log(`PlayerOne: ${game.playerOneScore} `);
  } else if (player === playerTwo) {
    game.playerTwoScore++;
    playerUI.textContent = game.playerTwoScore;
    scoreTwo.style.color = "springgreen";
    scoreTwo.style.transform = "scale(3.5)";
    console.log(`PlayerTwo: ${game.playerTwoScore} `);
  }
}
function winnerBackgroundColorChange(a, b, c) {
  a.style.backgroundColor = "rgb(184, 228, 148)";
  b.style.backgroundColor = "rgb(184, 228, 148)";
  c.style.backgroundColor = "rgb(184, 228, 148)";
}
