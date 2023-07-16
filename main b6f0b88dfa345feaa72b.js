"use strict";
(self["webpackChunktic_tac_toe"] = self["webpackChunktic_tac_toe"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */

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
  gameBoard: ["x", "o"],
  // change this on PvP
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
  playerDraw: 0,
  // reset a round for PVP
  roundPlayed: 0,
  // condition for checking gameOver
  isPVP: false,
  // check if player pressed PVP button
  isPVE: false,
  // check if player pressed PVE button
  isRoundOver: false,
  isDraw: false,
  // Check for draw
  isOver: false // Check for gameOver
};

const createPlayer = function (name) {
  return {
    name
  };
};
const player = {
  playerOne: createPlayer("Player One"),
  playerTwo: createPlayer("Player Two"),
  isSwitchSign: false,
  playerOneScore: 0,
  playerTwoScore: 0
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
  startBtn.addEventListener("click", e => {
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
  PVP.addEventListener("click", e => {
    game.isPVP = true;
    game.isPVE = false;
    startButtonHide();
    cell.forEach(cells => {
      cells.addEventListener("click", playPVPFnc, {
        once: true
      }); // Third Parameter - Makes selection once per player
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
    console.log("------------------------------------------------------ PLayer One ");
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
    console.log("------------------------------------------------------ player Two");
  }
}
//  !!!!!!!!!!!!!!!!!!!

function playPVE() {
  menu();
  PVE.addEventListener("click", e => {
    game.isPVE = true;
    game.isPVP = false;
    startButtonHide();
    cell.forEach(cells => {
      cells.addEventListener("click", playPVEFnc, {
        once: true
      }); // Third Parameter - Makes selection once per player
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
    const userSelectedCellPosition = game.predefinedArray.indexOf(game.cellPosition);
    removeDuplicateCellIndexFromArray(game.cellPosition);
    this.textContent = game.gameBoard[0]; // select "x" sign
    player.playerOne.sign = this.textContent;
    game.arrayPVE[game.cellPosition] = player.playerOne.sign; // insert "x" at specific position to array
    gameLogic(player.playerOne, scoreOne);
    console.log(userSelectedCellPosition);

    //  ------------------------ AI ------------------------ //
    // stop generating randomNumPosition creating after game draw [stop AI from Drawing after round reset]
    if (game.playerDraw < 5 && game.isRoundOver === false) {
      cell.forEach(cells => {
        cells.removeEventListener("click", playPVEFnc, {
          once: true
        }); // Third Parameter - Makes selection once per player
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
    const randomAIIndex = game.predefinedArray[Math.floor(Math.random() * game.predefinedArray.length)];
    removeDuplicateCellIndexFromArray(randomAIIndex);
    const drawAI = document.querySelector(`.cell:nth-child(${randomAIIndex})`);
    console.log(`This is AI : ${randomAIIndex}`);
    let AICellPosition = drawAI.id;
    drawAI.textContent = game.gameBoard[1]; // select "o" sign
    AICellPosition = parseInt(AICellPosition); //  converts the string to int
    player.playerTwo.sign = drawAI.textContent;
    game.arrayPVE[AICellPosition] = player.playerTwo.sign; // insert "o" at specific position to array

    cell.forEach(cells => {
      cells.addEventListener("click", playPVEFnc, {
        once: true
      }); // Third Parameter - Makes selection once per player
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
    if (game.arrayPVE[1] === selectedPlayer.sign && game.arrayPVE[2] === selectedPlayer.sign && game.arrayPVE[3] === selectedPlayer.sign) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(zerothCell, firstCell, secondCell);
    } else if (game.arrayPVE[4] === selectedPlayer.sign && game.arrayPVE[5] === selectedPlayer.sign && game.arrayPVE[6] === selectedPlayer.sign) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(thirdCell, fourthCell, fifthCell);
    } else if (game.arrayPVE[7] === selectedPlayer.sign && game.arrayPVE[8] === selectedPlayer.sign && game.arrayPVE[9] === selectedPlayer.sign) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(sixthCell, seventhCell, eightCell);
    }

    // Vertical Chance
    else if (game.arrayPVE[1] === selectedPlayer.sign && game.arrayPVE[4] === selectedPlayer.sign && game.arrayPVE[7] === selectedPlayer.sign) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(zerothCell, thirdCell, sixthCell);
    } else if (game.arrayPVE[2] === selectedPlayer.sign && game.arrayPVE[5] === selectedPlayer.sign && game.arrayPVE[8] === selectedPlayer.sign) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(firstCell, fourthCell, seventhCell);
    } else if (game.arrayPVE[3] === selectedPlayer.sign && game.arrayPVE[6] === selectedPlayer.sign && game.arrayPVE[9] === selectedPlayer.sign) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(secondCell, fifthCell, eightCell);
    }

    // Diagonal Chance
    else if (game.arrayPVE[1] === selectedPlayer.sign && game.arrayPVE[5] === selectedPlayer.sign && game.arrayPVE[9] === selectedPlayer.sign) {
      game.isRoundOver = true;
      roundScore(selectedPlayer, playerUI);
      roundStatus(selectedPlayer);
      winnerBackgroundColorChange(zerothCell, fourthCell, eightCell);
    } else if (game.arrayPVE[7] === selectedPlayer.sign && game.arrayPVE[5] === selectedPlayer.sign && game.arrayPVE[3] === selectedPlayer.sign) {
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
      cells.removeEventListener("click", playPVPFnc, {
        once: true
      }); // stops the game
    }

    if (game.isPVE === true) {
      cells.removeEventListener("click", playPVEFnc, {
        once: true
      }); // stops the game
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
    cell.forEach(cells => {
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
      cells.addEventListener("click", playPVPFnc, {
        once: true
      });
    }
    if (game.isPVE === true) {
      cells.addEventListener("click", playPVEFnc, {
        once: true
      });
    }
  }
}
function menu() {
  menuBtn.addEventListener("click", e => {
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
      cells.removeEventListener("click", playPVPFnc, {
        once: true
      });
    }
    for (const cells of cell) {
      cells.removeEventListener("click", playPVEFnc, {
        once: true
      });
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
    cells.addEventListener("click", e => {
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.PVP:hover,
.PVE:hover, .startBtn:hover {
  transform: scale(1.05);
  color: ghostwhite;
  background-color: black;
  border: 4px solid rgb(255, 255, 255);
  transition: 0.1s;
}

span {
  font-size: 12rem;
  font-family: "Courier New", Courier, monospace;
}
@media (max-width: 90em) {
  span {
    font-size: 10rem;
  }
}
@media (max-width: 56.25em) {
  span {
    font-size: 8rem;
  }
}
@media (max-width: 43.75em) {
  span {
    font-size: 5rem;
  }
}

.selectionMenu {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.start {
  display: flex;
  justify-content: center;
  align-items: center;
}
.startX {
  color: rgb(135, 135, 252);
}
.startO {
  color: rgb(248, 115, 115);
}
.startBtn {
  font-size: 7rem;
  border-radius: 20px;
  padding: 5px 20px;
  margin: 5px;
  border: 4px solid rgb(10, 10, 10);
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s;
  /* background-color: rgb(61, 233, 147); */
}
@media (max-width: 90em) {
  .startBtn {
    font-size: 6rem;
    padding: 5px 15px;
  }
}
@media (max-width: 56.25em) {
  .startBtn {
    font-size: 5rem;
    padding: 5px 10px;
  }
}
@media (max-width: 43.75em) {
  .startBtn {
    font-size: 4rem;
    padding: 5px 5px;
  }
}
.OpponentSelection {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition-Time);
}

.PVP,
.PVE {
  font-size: 3rem;
  border-radius: 20px;
  padding: 20px;
  border: 4px solid rgb(10, 10, 10);
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s;
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition-Time);
}
@media (max-width: 90em) {
  .PVP,
  .PVE {
    font-size: 2rem;
    padding: 20px;
  }
}
@media (max-width: 56.25em) {
  .PVP,
  .PVE {
    font-size: 1.5rem;
    padding: 15px;
  }
}
@media (max-width: 43.75em) {
  .PVP,
  .PVE {
    font-size: 1rem;
    padding: 5px;
  }
}
h2 {
  margin: 0;
  margin-bottom: 5px;
  font-size: 2.5rem;
  color: var(--font-color);
}
@media (max-width: 90em) {
  h2 {
    font-size: 2.2rem;
  }
}
@media (max-width: 1024px) {
  h2 {
    font-size: 1.8rem;
  }
}
@media (max-width: 56.25em) {
  h2 {
    font-size: 1.5rem;
  }
}
@media (max-width: 43.75em) {
  h2 {
    font-size: 1.2rem;
  }
}

.section {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition-Time);
}

.menuDiv {
  transition: var(--transition-Time);
  display: flex;
  justify-content: flex-start;
}
.menuBtn {
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 20px;
  padding: 5px;
  border: 2px solid rgb(15, 15, 15);
  transition: all 0.3s;
  margin: 5px;
}

.display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
@media (max-width: 90em) {
  .display {
    display: flex;
    gap: 40px;
  }
}
@media (max-width: 1024px) {
  .display {
    display: flex;
    gap: 40px;
  }
}
@media (max-width: 56.25em) {
  .display {
    display: flex;
    gap: 10px;
  }
}
@media (max-width: 43.75em) {
  .display {
    display: grid;
    gap: 10px;
  }
}

.playerOneScore,
.playerTwoScore {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scoreOne {
  font-size: 2rem;
  color: var(--font-color);
  transition: var(--transition-Time);
}
.scoreTwo {
  font-size: 2rem;
  color: var(--font-color);
  transition: var(--transition-Time);
}
.scoreScale {
  transform: scale(2.2);
}
@media (max-width: 90em) {
  .scoreScale {
    transform: scale(1.8);
  }
}

.gameBoard {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  background-color: rgb(82, 74, 74);
}
@media (max-width: 1024px) {
  .gameBoard {
    grid-template-columns: repeat(3, minmax(180px, 1fr));
    width: 600px;
  }
}
@media (max-width: 56.25em) {
  .gameBoard {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    width: 460px;
  }
}
@media (max-width: 43.75em) {
  .gameBoard {
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    margin: 0 auto;
    width: 300px;
  }
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 7rem;
  height: 200px;
  color: rgb(228, 72, 72);
  opacity: 100;
  transition: all 0.3s;
}
@media (max-width: 1024px) {
  .cell {
    height: 180px;
    font-size: 6rem;
  }
}
@media (max-width: 56.25em) {
  .cell {
    height: 150px;
    font-size: 5rem;
  }
}
@media (max-width: 43.75em) {
  .cell {
    height: 140px;
    font-size: 4rem;
  }
}
.cell:hover {
  border-left: none;
  border-top: none;
  transform: scale(0.9);
}
.cell:active {
  transition: all 1s;
}

.anim {
  animation: transitionIn 1s;
}

@keyframes transitionIn {
  from {
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to {
    opacity: 1;
    transform: rotateX(0);
  }
}
.winnerUi {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 6rem;
  color: var(--font-color);
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition-Time);
}
@media (max-width: 90em) {
  .winnerUi {
    font-size: 5rem;
  }
}
@media (max-width: 1024px) {
  .winnerUi {
    font-size: 4rem;
  }
}
@media (max-width: 56.25em) {
  .winnerUi {
    font-size: 3rem;
  }
}
@media (max-width: 43.75em) {
  .winnerUi {
    font-size: 1.5rem;
  }
}
.winnerUi__visible {
  visibility: visible;
  opacity: 100;
}

.gameOverUI {
  visibility: visible;
  opacity: 100;
  color: black;
  background: rgb(255, 255, 255);
  border: 2px solid black;
  border-radius: 20px;
  margin: 50px auto;
  width: 90%;
  font-size: 4rem;
}
@media (max-width: 90em) {
  .gameOverUI {
    font-size: 4rem;
  }
}
@media (max-width: 1024px) {
  .gameOverUI {
    font-size: 3rem;
  }
}
@media (max-width: 56.25em) {
  .gameOverUI {
    font-size: 2.3rem;
  }
}
@media (max-width: 43.75em) {
  .gameOverUI {
    font-size: 1.2rem;
    padding: 5px;
  }
}

:root {
  --transition-Time: 0.6s;
  --font-color: aliceblue;
}

body {
  background-color: rgb(59, 58, 58);
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  display: inline-flexbox;
  text-align: center;
  font-size: 4rem;
  margin: 0;
  color: var(--font-color);
}

.root {
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
}

.playerDrawColor {
  color: rgb(90, 90, 230);
}

.menuBtn:hover {
  transform: scale(1.05);
  color: ghostwhite;
  background-color: black;
  border: 2px solid rgb(255, 255, 255);
  transition: 0.1s;
}`, "",{"version":3,"sources":["webpack://./src/sass/components/start.scss","webpack://./src/sass/style.scss","webpack://./src/sass/utilities/breakPoints.scss","webpack://./src/sass/components/section.scss"],"names":[],"mappings":"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","sourcesContent":["@use \"../utilities/\" as ut;\r\n\r\n%buttonHover {\r\n  transform: scale(1.05);\r\n  color: ghostwhite;\r\n  background-color: black;\r\n  border: 4px solid rgb(255, 255, 255);\r\n  transition: 0.1s;\r\n}\r\n\r\nspan {\r\n  font-size: 12rem;\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 10rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 8rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 5rem;\r\n  }\r\n}\r\n\r\n.selectionMenu {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.start {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  &X {\r\n    color: rgb(135, 135, 252);\r\n  }\r\n  &O {\r\n    color: rgb(248, 115, 115);\r\n  }\r\n  &Btn {\r\n    font-size: 7rem;\r\n    border-radius: 20px;\r\n    padding: 5px 20px;\r\n    margin: 5px;\r\n    border: 4px solid rgb(10, 10, 10);\r\n    font-family: \"Courier New\", Courier, monospace;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: 0.1s;\r\n    @include ut.breakpoint(xLarge) {\r\n      font-size: 6rem;\r\n      padding: 5px 15px;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      font-size: 5rem;\r\n      padding: 5px 10px;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      font-size: 4rem;\r\n      padding: 5px 5px;\r\n    }\r\n    /* background-color: rgb(61, 233, 147); */\r\n    &:hover {\r\n      @extend %buttonHover;\r\n    }\r\n  }\r\n}\r\n\r\n.OpponentSelection {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all var(--transition-Time);\r\n}\r\n\r\n.PVP,\r\n.PVE {\r\n  font-size: 3rem;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 4px solid rgb(10, 10, 10);\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: 0.1s;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all var(--transition-Time);\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 2rem;\r\n    padding: 20px;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 1.5rem;\r\n    padding: 15px;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n  }\r\n  &:hover {\r\n    @extend %buttonHover;\r\n  }\r\n}\r\n","@forward \"components\";\r\n@forward \"utilities\";\r\n:root {\r\n  --transition-Time: 0.6s;\r\n  --font-color: aliceblue;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(59, 58, 58);\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  display: inline-flexbox;\r\n  text-align: center;\r\n  font-size: 4rem;\r\n  margin: 0;\r\n  color: var(--font-color);\r\n}\r\n\r\n.root {\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n.playerDrawColor {\r\n  color: rgb(90, 90, 230);\r\n}\r\n\r\n.menuBtn:hover {\r\n  transform: scale(1.05);\r\n  color: ghostwhite;\r\n  background-color: black;\r\n  border: 2px solid rgb(255, 255, 255);\r\n  transition: 0.1s;\r\n}\r\n","$breakpoints: (\r\n  \"xSmall\": 320px,\r\n  \"small\": 375px,\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"larger\": 1024px,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../utilities/\" as ut;\r\n\r\n@mixin gameBoardHeight($height) {\r\n  height: $height;\r\n}\r\n\r\nh2 {\r\n  margin: 0;\r\n  margin-bottom: 5px;\r\n  font-size: 2.5rem;\r\n  color: var(--font-color);\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 2.2rem;\r\n  }\r\n  @include ut.breakpoint(larger) {\r\n    font-size: 1.8rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 1.5rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\n.section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all var(--transition-Time);\r\n}\r\n\r\n.menu {\r\n  &Div {\r\n    transition: var(--transition-Time);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n  }\r\n  &Btn {\r\n    cursor: pointer;\r\n    font-family: \"Courier New\", Courier, monospace;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    border-radius: 20px;\r\n    padding: 5px;\r\n    border: 2px solid rgb(15, 15, 15);\r\n    transition: all 0.3s;\r\n    margin: 5px;\r\n  }\r\n}\r\n\r\n.display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 40px;\r\n  @include ut.breakpoint(xLarge) {\r\n    display: flex;\r\n    gap: 40px;\r\n  }\r\n  @include ut.breakpoint(larger) {\r\n    display: flex;\r\n    gap: 40px;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    display: grid;\r\n    gap: 10px;\r\n  }\r\n}\r\n\r\n.playerOneScore,\r\n.playerTwoScore {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.score {\r\n  &One {\r\n    font-size: 2rem;\r\n    color: var(--font-color);\r\n    transition: var(--transition-Time);\r\n  }\r\n  &Two {\r\n    font-size: 2rem;\r\n    color: var(--font-color);\r\n    transition: var(--transition-Time);\r\n  }\r\n  &Scale {\r\n    transform: scale(2.2);\r\n    @include ut.breakpoint(xLarge) {\r\n      transform: scale(1.8);\r\n    }\r\n  }\r\n}\r\n\r\n.gameBoard {\r\n  display: grid;\r\n  gap: 5px;\r\n  grid-template-columns: repeat(3, minmax(200px, 1fr));\r\n  background-color: rgb(82, 74, 74);\r\n  @include ut.breakpoint(larger) {\r\n    grid-template-columns: repeat(3, minmax(180px, 1fr));\r\n    width: 600px;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    grid-template-columns: repeat(3, minmax(150px, 1fr));\r\n    width: 460px;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    grid-template-columns: repeat(3, minmax(50px, 1fr));\r\n    margin: 0 auto;\r\n    width: 300px;\r\n  }\r\n}\r\n\r\n.cell {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgb(255, 255, 255);\r\n  cursor: pointer;\r\n  font-size: 7rem;\r\n  height: 200px;\r\n  color: rgb(228, 72, 72);\r\n  opacity: 100;\r\n  transition: all 0.3s;\r\n  @include ut.breakpoint(larger) {\r\n    height: 180px;\r\n    font-size: 6rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    height: 150px;\r\n    font-size: 5rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    height: 140px;\r\n    font-size: 4rem;\r\n  }\r\n  &:hover {\r\n    border-left: none;\r\n    border-top: none;\r\n    transform: scale(0.9);\r\n  }\r\n  &:active {\r\n    transition: all 1s;\r\n  }\r\n}\r\n\r\n.anim {\r\n  animation: transitionIn 1s;\r\n}\r\n\r\n@keyframes transitionIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: rotateX(-10deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    transform: rotateX(0);\r\n  }\r\n}\r\n\r\n.winnerUi {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-top: 50px;\r\n  font-size: 6rem;\r\n  color: var(--font-color);\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all var(--transition-Time);\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 5rem;\r\n  }\r\n  @include ut.breakpoint(larger) {\r\n    font-size: 4rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 3rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.5rem;\r\n  }\r\n  &__visible {\r\n    visibility: visible;\r\n    opacity: 100;\r\n  }\r\n}\r\n\r\n.gameOverUI {\r\n  visibility: visible;\r\n  opacity: 100;\r\n  color: black;\r\n  background: rgb(255 255 255);\r\n  border: 2px solid black;\r\n  border-radius: 20px;\r\n  margin: 50px auto;\r\n  width: 90%;\r\n  font-size: 4rem;\r\n  @include ut.breakpoint(xLarge) {\r\n    font-size: 4rem;\r\n  }\r\n  @include ut.breakpoint(larger) {\r\n    font-size: 3rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    font-size: 2.3rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    font-size: 1.2rem;\r\n    padding: 5px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFPQUFxTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxPQUFPLFVBQVUsVUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLFlBQVksVUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFX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Q0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xyXG5pbXBvcnQgXCIuL3Nhc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcclxuY29uc3Qgc3RhcnRCdG5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xyXG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRCdG5cIik7XHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVCdG5cIik7XHJcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rpb25cIik7XHJcbmNvbnN0IHNjb3JlT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zY29yZU9uZVwiKTtcclxuY29uc3Qgc2NvcmVUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlVHdvXCIpO1xyXG5jb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIik7XHJcblxyXG5jb25zdCB6ZXJvdGhDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIxXCIpO1xyXG5jb25zdCBmaXJzdENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjJcIik7XHJcbmNvbnN0IHNlY29uZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjNcIik7XHJcbmNvbnN0IHRoaXJkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiNFwiKTtcclxuY29uc3QgZm91cnRoQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiNVwiKTtcclxuY29uc3QgZmlmdGhDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCI2XCIpO1xyXG5jb25zdCBzaXh0aENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjdcIik7XHJcbmNvbnN0IHNldmVudGhDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCI4XCIpO1xyXG5jb25zdCBlaWdodENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjlcIik7XHJcblxyXG5jb25zdCBPcHBvbmVudFNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuT3Bwb25lbnRTZWxlY3Rpb25cIik7XHJcbmNvbnN0IHNlbGVjdGlvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGlvbk1lbnVcIik7XHJcbmNvbnN0IFBWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUFZQXCIpO1xyXG5jb25zdCBQVkUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlBWRVwiKTtcclxuY29uc3Qgd2lubmVyVWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuY29uc3QgZ2FtZSA9IHtcclxuICBnYW1lQm9hcmQ6IFtcInhcIiwgXCJvXCJdLCAvLyBjaGFuZ2UgdGhpcyBvbiBQdlBcclxuICAvLyBzd2FwRWxlbWVudChhcnJheSkge1xyXG4gIC8vICAgLy8gdG8gc3dhcCB0aGUgdmFsdWUgdXNpbmcgZGVzdHJ1Y3RvclxyXG4gIC8vICAgW3RoaXMuZ2FtZUJvYXJkWzBdLCB0aGlzLmdhbWVCb2FyZFsxXV0gPSBbXHJcbiAgLy8gICAgIHRoaXMuZ2FtZUJvYXJkWzFdLFxyXG4gIC8vICAgICB0aGlzLmdhbWVCb2FyZFswXSxcclxuICAvLyAgIF07XHJcbiAgLy8gfSxcclxuICBhcnJheVBWRTogW10sXHJcbiAgaWRTaWduQXJyYXk6IFtdLFxyXG4gIHByZWRlZmluZWRBcnJheTogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLFxyXG4gIGNlbGxQb3NpdGlvbjogMCxcclxuICBwbGF5ZXJEcmF3OiAwLCAvLyByZXNldCBhIHJvdW5kIGZvciBQVlBcclxuICByb3VuZFBsYXllZDogMCwgLy8gY29uZGl0aW9uIGZvciBjaGVja2luZyBnYW1lT3ZlclxyXG4gIGlzUFZQOiBmYWxzZSwgLy8gY2hlY2sgaWYgcGxheWVyIHByZXNzZWQgUFZQIGJ1dHRvblxyXG4gIGlzUFZFOiBmYWxzZSwgLy8gY2hlY2sgaWYgcGxheWVyIHByZXNzZWQgUFZFIGJ1dHRvblxyXG4gIGlzUm91bmRPdmVyOiBmYWxzZSxcclxuICBpc0RyYXc6IGZhbHNlLCAvLyBDaGVjayBmb3IgZHJhd1xyXG4gIGlzT3ZlcjogZmFsc2UsIC8vIENoZWNrIGZvciBnYW1lT3ZlclxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlUGxheWVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICByZXR1cm4geyBuYW1lIH07XHJcbn07XHJcblxyXG5jb25zdCBwbGF5ZXIgPSB7XHJcbiAgcGxheWVyT25lOiBjcmVhdGVQbGF5ZXIoXCJQbGF5ZXIgT25lXCIpLFxyXG4gIHBsYXllclR3bzogY3JlYXRlUGxheWVyKFwiUGxheWVyIFR3b1wiKSxcclxuICBpc1N3aXRjaFNpZ246IGZhbHNlLFxyXG4gIHBsYXllck9uZVNjb3JlOiAwLFxyXG4gIHBsYXllclR3b1Njb3JlOiAwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdGljVGFjVG9lKCkge1xyXG4gIHdpbm5lclVpLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJVaVwiKTtcclxuICBzZWN0aW9uLmFwcGVuZCh3aW5uZXJVaSk7XHJcbiAgc3RhcnRHYW1lKCk7XHJcbiAgcGxheVBWUCgpO1xyXG4gIHBsYXlQVkUoKTtcclxufVxyXG50aWNUYWNUb2UoKTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcclxuICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNlbGVjdGlvbk1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgc2VsZWN0aW9uTWVudS5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgIE9wcG9uZW50U2VsZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIE9wcG9uZW50U2VsZWN0aW9uLnN0eWxlLm9wYWNpdHkgPSBcIjEwMFwiO1xyXG4gICAgUFZQLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIFBWUC5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgIFBWRS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICBQVkUuc3R5bGUub3BhY2l0eSA9IFwiMTAwXCI7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc3RhcnRCdXR0b25IaWRlKCkge1xyXG4gIHNlbGVjdGlvbk1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgc2VsZWN0aW9uTWVudS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgc3RhcnRCdG5EaXYuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgZm9yIChjb25zdCBzcGFucyBvZiBzcGFuKSB7XHJcbiAgICBzcGFucy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICB9XHJcbiAgT3Bwb25lbnRTZWxlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgT3Bwb25lbnRTZWxlY3Rpb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gIFBWUC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBQVlAuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gIFBWRS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICBQVkUuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gIHNlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIHNlY3Rpb24uc3R5bGUub3BhY2l0eSA9IDEwMDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheVBWUCgpIHtcclxuICBtZW51KCk7XHJcbiAgUFZQLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZ2FtZS5pc1BWUCA9IHRydWU7XHJcbiAgICBnYW1lLmlzUFZFID0gZmFsc2U7XHJcbiAgICBzdGFydEJ1dHRvbkhpZGUoKTtcclxuICAgIGNlbGwuZm9yRWFjaCgoY2VsbHMpID0+IHtcclxuICAgICAgY2VsbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlQVlBGbmMsIHsgb25jZTogdHJ1ZSB9KTsgLy8gVGhpcmQgUGFyYW1ldGVyIC0gTWFrZXMgc2VsZWN0aW9uIG9uY2UgcGVyIHBsYXllclxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcGxheVBWUEZuYyhlKSB7XHJcbiAgLy8gdGhpcyA9IGNlbGxzXHJcbiAgZ2FtZS5wbGF5ZXJEcmF3Kys7IC8vIGZvciBkcmF3IGNvbmRpdGlvblxyXG4gIGdhbWUuY2VsbFBvc2l0aW9uID0gZS50YXJnZXQuaWQ7IC8vIGlkIG9mIHRoZSBodG1sIGVsZW1lbnRcclxuICBnYW1lLmNlbGxQb3NpdGlvbiA9ICtnYW1lLmNlbGxQb3NpdGlvbjsgLy8gKyBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGludFxyXG4gIGdhbWUuaWRTaWduQXJyYXlbZ2FtZS5jZWxsUG9zaXRpb25dID0gZ2FtZS5jZWxsUG9zaXRpb247IC8vIGluc2VydCB0aGUgdmFsdWUgdG8gYXJyYXkgYXQgc3BlY2lmaWMgcG9zaXRpb25cclxuXHJcbiAgLy8gUGxheWVyIFN3aXRjaGluZ1xyXG4gIGlmICghcGxheWVyLmlzU3dpdGNoU2lnbikge1xyXG4gICAgLy8gUGxheWVyIE9uZVxyXG4gICAgcGxheWVyLmlzU3dpdGNoU2lnbiA9IHRydWU7XHJcbiAgICB0aGlzLnRleHRDb250ZW50ID0gZ2FtZS5nYW1lQm9hcmRbMF07IC8vIHNlbGVjdCB0aGUgZmlyc3Qgc2lnbiBpdGVtIGFuZCB0aGVuIGZsaXBzIGl0XHJcbiAgICBwbGF5ZXIucGxheWVyT25lLnNpZ24gPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgZ2FtZS5hcnJheVBWRVtnYW1lLmNlbGxQb3NpdGlvbl0gPSBwbGF5ZXIucGxheWVyT25lLnNpZ247IC8vIGluc2VydCB0aGUgdmFsdWUgdG8gYXJyYXkgYXQgc3BlY2lmaWMgcG9zaXRpb25cclxuICAgIGdhbWVMb2dpYyhwbGF5ZXIucGxheWVyT25lLCBzY29yZU9uZSk7XHJcbiAgICB0aGlzLnN0eWxlLmNvbG9yID0gXCJyZ2IoOTAsIDkwLCAyMzApXCI7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJGaXJzdCBQbGF5ZXIgUG9zaXRpb25cIik7XHJcbiAgICBjb25zb2xlLmxvZyhnYW1lLmFycmF5UFZFKTtcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQTGF5ZXIgT25lIFwiXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBQbGF5ZXIgVHdvXHJcbiAgICBwbGF5ZXIuaXNTd2l0Y2hTaWduID0gZmFsc2U7XHJcbiAgICB0aGlzLnRleHRDb250ZW50ID0gZ2FtZS5nYW1lQm9hcmRbMV07XHJcbiAgICBwbGF5ZXIucGxheWVyVHdvLnNpZ24gPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgZ2FtZS5hcnJheVBWRVtnYW1lLmNlbGxQb3NpdGlvbl0gPSBwbGF5ZXIucGxheWVyVHdvLnNpZ247XHJcbiAgICBnYW1lTG9naWMocGxheWVyLnBsYXllclR3bywgc2NvcmVUd28pO1xyXG4gICAgdGhpcy5zdHlsZS5jb2xvciA9IFwicmdiKDIyOCwgNzIsIDcyKVwiO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU2Vjb25kIFBsYXllciBQb3NpdGlvblwiKTtcclxuICAgIGNvbnNvbGUubG9nKGdhbWUuYXJyYXlQVkUpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYXllciBUd29cIlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuLy8gICEhISEhISEhISEhISEhISEhISFcclxuXHJcbmZ1bmN0aW9uIHBsYXlQVkUoKSB7XHJcbiAgbWVudSgpO1xyXG4gIFBWRS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGdhbWUuaXNQVkUgPSB0cnVlO1xyXG4gICAgZ2FtZS5pc1BWUCA9IGZhbHNlO1xyXG4gICAgc3RhcnRCdXR0b25IaWRlKCk7XHJcbiAgICBjZWxsLmZvckVhY2goKGNlbGxzKSA9PiB7XHJcbiAgICAgIGNlbGxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5UFZFRm5jLCB7IG9uY2U6IHRydWUgfSk7IC8vIFRoaXJkIFBhcmFtZXRlciAtIE1ha2VzIHNlbGVjdGlvbiBvbmNlIHBlciBwbGF5ZXJcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZUNlbGxJbmRleEZyb21BcnJheShjZWxsQXJyYXkpIHtcclxuICAvLyByZW1vdmVzIHRoZSBudW1iZXIgZnJvbSBwcmVkZWZpbmVkQXJyYXksXHJcbiAgLy8gc28gdGhhdCB0aGUgbnVtYmVyIHdvbid0IHJlcGVhdCBvciBiZSBvdmVyd3JpdHRlbiBieSBBSVxyXG4gIGNvbnN0IHVzZXJTZWxlY3RlZENlbGxQb3NpdGlvbiA9IGdhbWUucHJlZGVmaW5lZEFycmF5LmluZGV4T2YoY2VsbEFycmF5KTtcclxuICBpZiAodXNlclNlbGVjdGVkQ2VsbFBvc2l0aW9uID4gLTEpIHtcclxuICAgIGdhbWUucHJlZGVmaW5lZEFycmF5LnNwbGljZSh1c2VyU2VsZWN0ZWRDZWxsUG9zaXRpb24sIDEpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBwbGF5UFZFRm5jKGUpIHtcclxuICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gXCJcIiAmJiBBSURyYXdGbmMpIHtcclxuICAgIGdhbWUucGxheWVyRHJhdysrOyAvLyBmb3IgZHJhdyBjb25kaXRpb25cclxuICAgIC8vIGNvbnNvbGUubG9nKGBHYW1lIFBsYXllZCAke0dhbWUuZ2FtZVBsYXllZH0gaW4gUFZFYCk7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1QbGF5ZXIgT25lICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIE9uZSAtLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgZ2FtZS5jZWxsUG9zaXRpb24gPSBlLnRhcmdldC5pZDsgLy8gaWQgb2YgdGhlIGh0bWwgZWxlbWVudFxyXG4gICAgdGhpcy5zdHlsZS5jb2xvciA9IFwicmdiKDkwLCA5MCwgMjMwKVwiOyAvLyBibHVlIGNvbG9yIGZvciB1c2VySW5wdXRcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCA9IFwiYW5pbVwiOyAvLyBzZWxlY3QgXCJvXCIgc2lnblxyXG5cclxuICAgIC8vIHRoaXMuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDFzXCI7IC8vIGJsdWUgY29sb3IgZm9yIHVzZXJJbnB1dFxyXG4gICAgZ2FtZS5jZWxsUG9zaXRpb24gPSBwYXJzZUludChnYW1lLmNlbGxQb3NpdGlvbik7IC8vICBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGludFxyXG4gICAgY29uc3QgdXNlclNlbGVjdGVkQ2VsbFBvc2l0aW9uID0gZ2FtZS5wcmVkZWZpbmVkQXJyYXkuaW5kZXhPZihcclxuICAgICAgZ2FtZS5jZWxsUG9zaXRpb25cclxuICAgICk7XHJcbiAgICByZW1vdmVEdXBsaWNhdGVDZWxsSW5kZXhGcm9tQXJyYXkoZ2FtZS5jZWxsUG9zaXRpb24pO1xyXG4gICAgdGhpcy50ZXh0Q29udGVudCA9IGdhbWUuZ2FtZUJvYXJkWzBdOyAvLyBzZWxlY3QgXCJ4XCIgc2lnblxyXG4gICAgcGxheWVyLnBsYXllck9uZS5zaWduID0gdGhpcy50ZXh0Q29udGVudDtcclxuICAgIGdhbWUuYXJyYXlQVkVbZ2FtZS5jZWxsUG9zaXRpb25dID0gcGxheWVyLnBsYXllck9uZS5zaWduOyAvLyBpbnNlcnQgXCJ4XCIgYXQgc3BlY2lmaWMgcG9zaXRpb24gdG8gYXJyYXlcclxuICAgIGdhbWVMb2dpYyhwbGF5ZXIucGxheWVyT25lLCBzY29yZU9uZSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyU2VsZWN0ZWRDZWxsUG9zaXRpb24pO1xyXG5cclxuICAgIC8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQUkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbiAgICAvLyBzdG9wIGdlbmVyYXRpbmcgcmFuZG9tTnVtUG9zaXRpb24gY3JlYXRpbmcgYWZ0ZXIgZ2FtZSBkcmF3IFtzdG9wIEFJIGZyb20gRHJhd2luZyBhZnRlciByb3VuZCByZXNldF1cclxuICAgIGlmIChnYW1lLnBsYXllckRyYXcgPCA1ICYmIGdhbWUuaXNSb3VuZE92ZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgIGNlbGwuZm9yRWFjaCgoY2VsbHMpID0+IHtcclxuICAgICAgICBjZWxscy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheVBWRUZuYywgeyBvbmNlOiB0cnVlIH0pOyAvLyBUaGlyZCBQYXJhbWV0ZXIgLSBNYWtlcyBzZWxlY3Rpb24gb25jZSBwZXIgcGxheWVyXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhnYW1lLmlzUm91bmRPdmVyKTtcclxuICAgICAgLy8gaWYgKGdhbWUuaXNSb3VuZE92ZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgIHdpbm5lclVpLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJVaV9fdmlzaWJsZVwiKTtcclxuICAgICAgd2lubmVyVWkudGV4dENvbnRlbnQgPSBcIldhaXRpbmcgRm9yIEFJIERyYXdcIjtcclxuICAgICAgc2V0VGltZW91dChyZW1vdmVBSURyYXdUZXh0LCA2MDApO1xyXG4gICAgICBzZXRUaW1lb3V0KEFJRHJhd0ZuYywgMTAwMCk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUFJRHJhd1RleHQoKSB7XHJcbiAgICB3aW5uZXJVaS5jbGFzc0xpc3QucmVtb3ZlKFwid2lubmVyVWlfX3Zpc2libGVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBSURyYXdGbmMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFJIC0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICBjb25zdCByYW5kb21BSUluZGV4ID1cclxuICAgICAgZ2FtZS5wcmVkZWZpbmVkQXJyYXlbXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZS5wcmVkZWZpbmVkQXJyYXkubGVuZ3RoKVxyXG4gICAgICBdO1xyXG4gICAgcmVtb3ZlRHVwbGljYXRlQ2VsbEluZGV4RnJvbUFycmF5KHJhbmRvbUFJSW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGRyYXdBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jZWxsOm50aC1jaGlsZCgke3JhbmRvbUFJSW5kZXh9KWApO1xyXG4gICAgY29uc29sZS5sb2coYFRoaXMgaXMgQUkgOiAke3JhbmRvbUFJSW5kZXh9YCk7XHJcblxyXG4gICAgbGV0IEFJQ2VsbFBvc2l0aW9uID0gZHJhd0FJLmlkO1xyXG4gICAgZHJhd0FJLnRleHRDb250ZW50ID0gZ2FtZS5nYW1lQm9hcmRbMV07IC8vIHNlbGVjdCBcIm9cIiBzaWduXHJcbiAgICBBSUNlbGxQb3NpdGlvbiA9IHBhcnNlSW50KEFJQ2VsbFBvc2l0aW9uKTsgLy8gIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gaW50XHJcbiAgICBwbGF5ZXIucGxheWVyVHdvLnNpZ24gPSBkcmF3QUkudGV4dENvbnRlbnQ7XHJcbiAgICBnYW1lLmFycmF5UFZFW0FJQ2VsbFBvc2l0aW9uXSA9IHBsYXllci5wbGF5ZXJUd28uc2lnbjsgLy8gaW5zZXJ0IFwib1wiIGF0IHNwZWNpZmljIHBvc2l0aW9uIHRvIGFycmF5XHJcblxyXG4gICAgY2VsbC5mb3JFYWNoKChjZWxscykgPT4ge1xyXG4gICAgICBjZWxscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheVBWRUZuYywgeyBvbmNlOiB0cnVlIH0pOyAvLyBUaGlyZCBQYXJhbWV0ZXIgLSBNYWtlcyBzZWxlY3Rpb24gb25jZSBwZXIgcGxheWVyXHJcbiAgICB9KTtcclxuICAgIGdhbWVMb2dpYyhwbGF5ZXIucGxheWVyVHdvLCBzY29yZVR3byk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coYHBsYXllclR3by5zaWduIGlzICR7cGxheWVyVHdvLnNpZ259YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzaWduQXJyYXkpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhHYW1lLnBsYXllclNpZ25BcnJheSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGdhbWUuYXJyYXlQVkUpO1xyXG4gICAgY29uc29sZS5sb2coZ2FtZS5wbGF5ZXJEcmF3KTtcclxuICAgIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSR7Z2FtZS5wbGF5ZXJEcmF3fWApO1xyXG4gIH1cclxufVxyXG4vLyAgISEhISEhISEhISEhISEhISEhISFcclxuXHJcbmZ1bmN0aW9uIGdhbWVMb2dpYyhzZWxlY3RlZFBsYXllciwgcGxheWVyVUkpIHtcclxuICBpZiAoZ2FtZS5pc0RyYXcgPT09IGZhbHNlKSB7XHJcbiAgICAvLyBIb3Jpem9udGFsIENoYW5jZVxyXG4gICAgaWYgKFxyXG4gICAgICBnYW1lLmFycmF5UFZFWzFdID09PSBzZWxlY3RlZFBsYXllci5zaWduICYmXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbMl0gPT09IHNlbGVjdGVkUGxheWVyLnNpZ24gJiZcclxuICAgICAgZ2FtZS5hcnJheVBWRVszXSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnblxyXG4gICAgKSB7XHJcbiAgICAgIGdhbWUuaXNSb3VuZE92ZXIgPSB0cnVlO1xyXG4gICAgICByb3VuZFNjb3JlKHNlbGVjdGVkUGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgIHJvdW5kU3RhdHVzKHNlbGVjdGVkUGxheWVyKTtcclxuICAgICAgd2lubmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlKHplcm90aENlbGwsIGZpcnN0Q2VsbCwgc2Vjb25kQ2VsbCk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBnYW1lLmFycmF5UFZFWzRdID09PSBzZWxlY3RlZFBsYXllci5zaWduICYmXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbNV0gPT09IHNlbGVjdGVkUGxheWVyLnNpZ24gJiZcclxuICAgICAgZ2FtZS5hcnJheVBWRVs2XSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnblxyXG4gICAgKSB7XHJcbiAgICAgIGdhbWUuaXNSb3VuZE92ZXIgPSB0cnVlO1xyXG4gICAgICByb3VuZFNjb3JlKHNlbGVjdGVkUGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgIHJvdW5kU3RhdHVzKHNlbGVjdGVkUGxheWVyKTtcclxuICAgICAgd2lubmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlKHRoaXJkQ2VsbCwgZm91cnRoQ2VsbCwgZmlmdGhDZWxsKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbN10gPT09IHNlbGVjdGVkUGxheWVyLnNpZ24gJiZcclxuICAgICAgZ2FtZS5hcnJheVBWRVs4XSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnbiAmJlxyXG4gICAgICBnYW1lLmFycmF5UFZFWzldID09PSBzZWxlY3RlZFBsYXllci5zaWduXHJcbiAgICApIHtcclxuICAgICAgZ2FtZS5pc1JvdW5kT3ZlciA9IHRydWU7XHJcblxyXG4gICAgICByb3VuZFNjb3JlKHNlbGVjdGVkUGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgIHJvdW5kU3RhdHVzKHNlbGVjdGVkUGxheWVyKTtcclxuICAgICAgd2lubmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlKHNpeHRoQ2VsbCwgc2V2ZW50aENlbGwsIGVpZ2h0Q2VsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVydGljYWwgQ2hhbmNlXHJcbiAgICBlbHNlIGlmIChcclxuICAgICAgZ2FtZS5hcnJheVBWRVsxXSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnbiAmJlxyXG4gICAgICBnYW1lLmFycmF5UFZFWzRdID09PSBzZWxlY3RlZFBsYXllci5zaWduICYmXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbN10gPT09IHNlbGVjdGVkUGxheWVyLnNpZ25cclxuICAgICkge1xyXG4gICAgICBnYW1lLmlzUm91bmRPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJvdW5kU2NvcmUoc2VsZWN0ZWRQbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgcm91bmRTdGF0dXMoc2VsZWN0ZWRQbGF5ZXIpO1xyXG4gICAgICB3aW5uZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoemVyb3RoQ2VsbCwgdGhpcmRDZWxsLCBzaXh0aENlbGwpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgZ2FtZS5hcnJheVBWRVsyXSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnbiAmJlxyXG4gICAgICBnYW1lLmFycmF5UFZFWzVdID09PSBzZWxlY3RlZFBsYXllci5zaWduICYmXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbOF0gPT09IHNlbGVjdGVkUGxheWVyLnNpZ25cclxuICAgICkge1xyXG4gICAgICBnYW1lLmlzUm91bmRPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJvdW5kU2NvcmUoc2VsZWN0ZWRQbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgcm91bmRTdGF0dXMoc2VsZWN0ZWRQbGF5ZXIpO1xyXG4gICAgICB3aW5uZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoZmlyc3RDZWxsLCBmb3VydGhDZWxsLCBzZXZlbnRoQ2VsbCk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBnYW1lLmFycmF5UFZFWzNdID09PSBzZWxlY3RlZFBsYXllci5zaWduICYmXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbNl0gPT09IHNlbGVjdGVkUGxheWVyLnNpZ24gJiZcclxuICAgICAgZ2FtZS5hcnJheVBWRVs5XSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnblxyXG4gICAgKSB7XHJcbiAgICAgIGdhbWUuaXNSb3VuZE92ZXIgPSB0cnVlO1xyXG5cclxuICAgICAgcm91bmRTY29yZShzZWxlY3RlZFBsYXllciwgcGxheWVyVUkpO1xyXG4gICAgICByb3VuZFN0YXR1cyhzZWxlY3RlZFBsYXllcik7XHJcbiAgICAgIHdpbm5lckJhY2tncm91bmRDb2xvckNoYW5nZShzZWNvbmRDZWxsLCBmaWZ0aENlbGwsIGVpZ2h0Q2VsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlhZ29uYWwgQ2hhbmNlXHJcbiAgICBlbHNlIGlmIChcclxuICAgICAgZ2FtZS5hcnJheVBWRVsxXSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnbiAmJlxyXG4gICAgICBnYW1lLmFycmF5UFZFWzVdID09PSBzZWxlY3RlZFBsYXllci5zaWduICYmXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbOV0gPT09IHNlbGVjdGVkUGxheWVyLnNpZ25cclxuICAgICkge1xyXG4gICAgICBnYW1lLmlzUm91bmRPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgIHJvdW5kU2NvcmUoc2VsZWN0ZWRQbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgcm91bmRTdGF0dXMoc2VsZWN0ZWRQbGF5ZXIpO1xyXG4gICAgICB3aW5uZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UoemVyb3RoQ2VsbCwgZm91cnRoQ2VsbCwgZWlnaHRDZWxsKTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIGdhbWUuYXJyYXlQVkVbN10gPT09IHNlbGVjdGVkUGxheWVyLnNpZ24gJiZcclxuICAgICAgZ2FtZS5hcnJheVBWRVs1XSA9PT0gc2VsZWN0ZWRQbGF5ZXIuc2lnbiAmJlxyXG4gICAgICBnYW1lLmFycmF5UFZFWzNdID09PSBzZWxlY3RlZFBsYXllci5zaWduXHJcbiAgICApIHtcclxuICAgICAgZ2FtZS5pc1JvdW5kT3ZlciA9IHRydWU7XHJcblxyXG4gICAgICByb3VuZFNjb3JlKHNlbGVjdGVkUGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgIHJvdW5kU3RhdHVzKHNlbGVjdGVkUGxheWVyKTtcclxuICAgICAgd2lubmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlKHNpeHRoQ2VsbCwgZm91cnRoQ2VsbCwgc2Vjb25kQ2VsbCk7XHJcbiAgICB9XHJcbiAgICAvLyBEcmF3IHRoZSByb3VuZCBpZiBhbGwgcm93cyBhcmUgZmlsbGVkXHJcbiAgICBlbHNlIGlmIChnYW1lLnBsYXllckRyYXcgPT09IDkgJiYgZ2FtZS5pc1BWUCA9PT0gdHJ1ZSkge1xyXG4gICAgICBnYW1lLmlzUm91bmRPdmVyID0gdHJ1ZTtcclxuICAgICAgZ2FtZS5pc0RyYXcgPSB0cnVlO1xyXG4gICAgICByb3VuZFN0YXR1cyhzZWxlY3RlZFBsYXllcik7XHJcbiAgICB9IGVsc2UgaWYgKGdhbWUucGxheWVyRHJhdyA9PT0gNSAmJiBnYW1lLmlzUFZFID09PSB0cnVlKSB7XHJcbiAgICAgIGdhbWUuaXNSb3VuZE92ZXIgPSB0cnVlO1xyXG5cclxuICAgICAgZ2FtZS5pc0RyYXcgPSB0cnVlO1xyXG4gICAgICByb3VuZFN0YXR1cyhzZWxlY3RlZFBsYXllcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHJvdW5kU3RhdHVzKHNlbGVjdGVkUGxheWVyKSB7XHJcbiAgY29uc29sZS5jbGVhcigpO1xyXG4gIGdhbWUucm91bmRQbGF5ZWQgKz0gMTsgLy8gdG8gc3RvcCBnYW1lIHdoZW4gYW55IHBsYXllciByZWFjaGVzIDUgcG9pbnRzXHJcbiAgY29uc29sZS5sb2coYEdhbWUgUGxheWVkICR7Z2FtZS5yb3VuZFBsYXllZH0gYCk7XHJcblxyXG4gIGZvciAoY29uc3QgY2VsbHMgb2YgY2VsbCkge1xyXG4gICAgaWYgKGdhbWUuaXNQVlAgPT09IHRydWUpIHtcclxuICAgICAgY2VsbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlQVlBGbmMsIHsgb25jZTogdHJ1ZSB9KTsgLy8gc3RvcHMgdGhlIGdhbWVcclxuICAgIH1cclxuICAgIGlmIChnYW1lLmlzUFZFID09PSB0cnVlKSB7XHJcbiAgICAgIGNlbGxzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5UFZFRm5jLCB7IG9uY2U6IHRydWUgfSk7IC8vIHN0b3BzIHRoZSBnYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAhIGNoYW5nZSB0byA1XHJcbiAgaWYgKGdhbWUuaXNEcmF3ICYmIGdhbWUucm91bmRQbGF5ZWQgIT09IDUpIHtcclxuICAgIHdpbm5lclVpLnRleHRDb250ZW50ID0gYFJvdW5kIEVuZGVkIGluIGEgRHJhd2A7XHJcbiAgICBzZXRUaW1lb3V0KHJlc2V0LCAxMzAwKTsgLy8gZHluYW1pYyByZXN0YXJ0XHJcbiAgfSBlbHNlIGlmIChnYW1lLnJvdW5kUGxheWVkICE9PSA1KSB7XHJcbiAgICB3aW5uZXJVaS50ZXh0Q29udGVudCA9IGBSb3VuZCBXaW5uZXIgOiAke3NlbGVjdGVkUGxheWVyLm5hbWV9YDtcclxuICAgIHNldFRpbWVvdXQocmVzZXQsIDEzMDApOyAvLyBkeW5hbWljIHJlc3RhcnRcclxuICB9IGVsc2UgaWYgKGdhbWUucm91bmRQbGF5ZWQgPT09IDUpIHtcclxuICAgIC8vIGFsZXJ0KFwiUmVhY2hlZCA1XCIpO1xyXG4gICAgaWYgKHBsYXllci5wbGF5ZXJPbmVTY29yZSA+IHBsYXllci5wbGF5ZXJUd29TY29yZSkge1xyXG4gICAgICB3aW5uZXJVaS50ZXh0Q29udGVudCA9IGBDb25ncmF0dWxhdGlvbnMsUGxheWVyIE9uZSB3b24uYDtcclxuICAgICAgd2lubmVyVWkuY2xhc3NMaXN0LmFkZChcImdhbWVPdmVyVUlcIik7XHJcbiAgICB9IGVsc2UgaWYgKHBsYXllci5wbGF5ZXJPbmVTY29yZSA9PT0gcGxheWVyLnBsYXllclR3b1Njb3JlKSB7XHJcbiAgICAgIHdpbm5lclVpLnRleHRDb250ZW50ID0gYEdhbWUgRHJhdy5gO1xyXG4gICAgICB3aW5uZXJVaS5jbGFzc0xpc3QuYWRkKFwiZ2FtZU92ZXJVSVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbm5lclVpLnRleHRDb250ZW50ID0gYENvbmdyYXR1bGF0aW9ucyBQbGF5ZXIgVHdvIHdvbi5gO1xyXG4gICAgICB3aW5uZXJVaS5jbGFzc0xpc3QuYWRkKFwiZ2FtZU92ZXJVSVwiKTtcclxuICAgIH1cclxuICAgIHJlc3RhcnRHYW1lTWFudWFsbHkoKTtcclxuICB9XHJcbiAgd2lubmVyVWkuY2xhc3NMaXN0LmFkZChcIndpbm5lclVpXCIpO1xyXG4gIHdpbm5lclVpLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJVaV9fdmlzaWJsZVwiKTtcclxufVxyXG5mdW5jdGlvbiByZXNldCgpIHtcclxuICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgIGNlbGxzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGdhbWUucGxheWVyRHJhdyA9IDA7XHJcbiAgICBnYW1lLmFycmF5UFZFID0gW107XHJcbiAgICBnYW1lLmlkU2lnbkFycmF5ID0gW107XHJcbiAgICBwbGF5ZXIuaXNTd2l0Y2hTaWduID0gZmFsc2U7XHJcbiAgICBnYW1lLmlzRHJhdyA9IGZhbHNlO1xyXG4gICAgZ2FtZS5pc1JvdW5kT3ZlciA9IGZhbHNlO1xyXG4gICAgZ2FtZS5nYW1lQm9hcmQgPSBbXCJ4XCIsIFwib1wiXTtcclxuICAgIGdhbWUucHJlZGVmaW5lZEFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG4gICAgLy8gd2lubmVyVWkudGV4dENvbnRlbnQgPSBcIlwiOyAvLyB0cmFuc2l0aW9uIHdvbid0IHdvcmtcclxuXHJcbiAgICAvLyByZXNldCBjZWxsIGNvbG9yXHJcbiAgICBjZWxsLmZvckVhY2goKGNlbGxzKSA9PiB7XHJcbiAgICAgIGNlbGxzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgY2VsbHMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2NvcmVPbmUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICBzY29yZU9uZS5jbGFzc0xpc3QucmVtb3ZlKFwic2NvcmVTY2FsZVwiKTtcclxuICAgIHNjb3JlVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJzY29yZVNjYWxlXCIpO1xyXG5cclxuICAgIHNjb3JlVHdvLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgd2lubmVyVWkuY2xhc3NMaXN0LnJlbW92ZShcIndpbm5lclVpX192aXNpYmxlXCIpO1xyXG4gICAgd2lubmVyVWkuY2xhc3NMaXN0LnJlbW92ZShcImdhbWVPdmVyVUlcIik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coZ2FtZS5hcnJheVBWRSk7XHJcbiAgICBpZiAoZ2FtZS5pc1BWUCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjZWxscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheVBWUEZuYywgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGdhbWUuaXNQVkUgPT09IHRydWUpIHtcclxuICAgICAgY2VsbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlQVkVGbmMsIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNlbGVjdGlvbk1lbnUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgc2VsZWN0aW9uTWVudS5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICAgIHN0YXJ0QnRuRGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGZvciAoY29uc3Qgc3BhbnMgb2Ygc3Bhbikge1xyXG4gICAgICAvLyBzdGFydEJ1dHRvbiBTdHlsaW5nXHJcbiAgICAgIHNwYW5zLnN0eWxlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICB9XHJcbiAgICBzZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgc2VjdGlvbi5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHNlY3Rpb24uc3R5bGUudHJhbnNpdGlvbiA9IFwiMC4xcyAhaW1wb3J0YW50XCI7XHJcblxyXG4gICAgZm9yIChjb25zdCBjZWxscyBvZiBjZWxsKSB7XHJcbiAgICAgIGNlbGxzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5UFZQRm5jLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgICAgY2VsbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlQVkVGbmMsIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJlc2V0KCk7XHJcbiAgICByZXN0YXJ0R2FtZSgpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG4gIHNjb3JlT25lLnRleHRDb250ZW50ID0gMDtcclxuICBzY29yZVR3by50ZXh0Q29udGVudCA9IDA7XHJcbiAgcGxheWVyLnBsYXllck9uZVNjb3JlID0gMDtcclxuICBwbGF5ZXIucGxheWVyVHdvU2NvcmUgPSAwO1xyXG4gIGdhbWUucm91bmRQbGF5ZWQgPSAwO1xyXG4gIGdhbWUuaXNQVlAgPSBmYWxzZTtcclxuICBnYW1lLmlzUFZFID0gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gcmVzdGFydEdhbWVNYW51YWxseSgpIHtcclxuICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgIGdhbWUuaXNPdmVyID0gZmFsc2U7IC8vIHJlc2V0IEdhbWUgT3ZlciB0byBmYWxzZSAgICAgLy8gbWFudWFsIHJlc3RhcnRcclxuICAgIGNlbGxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoIWdhbWUuaXNPdmVyKSB7XHJcbiAgICAgICAgaWYgKGdhbWUuaXNQVlAgPT09IHRydWUpIHtcclxuICAgICAgICAgIHBsYXlQVlAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWUuaXNQVkUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHBsYXlQVkUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NvcmVPbmUudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgICAgIHNjb3JlVHdvLnRleHRDb250ZW50ID0gMDtcclxuICAgICAgICBwbGF5ZXIucGxheWVyT25lU2NvcmUgPSAwO1xyXG4gICAgICAgIHBsYXllci5wbGF5ZXJUd29TY29yZSA9IDA7XHJcbiAgICAgICAgZ2FtZS5yb3VuZFBsYXllZCA9IDA7XHJcbiAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICBnYW1lLmlzT3ZlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRTY29yZShzZWxlY3RQbGF5ZXIsIHBsYXllclVJKSB7XHJcbiAgaWYgKHNlbGVjdFBsYXllciA9PT0gcGxheWVyLnBsYXllck9uZSkge1xyXG4gICAgcGxheWVyLnBsYXllck9uZVNjb3JlKys7XHJcbiAgICBwbGF5ZXJVSS50ZXh0Q29udGVudCA9IHBsYXllci5wbGF5ZXJPbmVTY29yZTtcclxuICAgIHNjb3JlT25lLnN0eWxlLmNvbG9yID0gXCJzcHJpbmdncmVlblwiO1xyXG4gICAgc2NvcmVPbmUuY2xhc3NMaXN0LmFkZChcInNjb3JlU2NhbGVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhgUGxheWVyT25lOiAke3BsYXllci5wbGF5ZXJPbmVTY29yZX0gYCk7XHJcbiAgfSBlbHNlIGlmIChzZWxlY3RQbGF5ZXIgPT09IHBsYXllci5wbGF5ZXJUd28pIHtcclxuICAgIHBsYXllci5wbGF5ZXJUd29TY29yZSsrO1xyXG4gICAgcGxheWVyVUkudGV4dENvbnRlbnQgPSBwbGF5ZXIucGxheWVyVHdvU2NvcmU7XHJcbiAgICBzY29yZVR3by5zdHlsZS5jb2xvciA9IFwic3ByaW5nZ3JlZW5cIjtcclxuICAgIHNjb3JlVHdvLmNsYXNzTGlzdC5hZGQoXCJzY29yZVNjYWxlXCIpO1xyXG4gICAgY29uc29sZS5sb2coYFBsYXllclR3bzogJHtwbGF5ZXIucGxheWVyVHdvU2NvcmV9IGApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd2lubmVyQmFja2dyb3VuZENvbG9yQ2hhbmdlKGEsIGIsIGMpIHtcclxuICBhLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE4NCwgMjI4LCAxNDgpXCI7XHJcbiAgYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxODQsIDIyOCwgMTQ4KVwiO1xyXG4gIGMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTg0LCAyMjgsIDE0OClcIjtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLlBWUDpob3Zlcixcbi5QVkU6aG92ZXIsIC5zdGFydEJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiA4cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cbn1cblxuLnNlbGVjdGlvbk1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdGFydFgge1xuICBjb2xvcjogcmdiKDEzNSwgMTM1LCAyNTIpO1xufVxuLnN0YXJ0TyB7XG4gIGNvbG9yOiByZ2IoMjQ4LCAxMTUsIDExNSk7XG59XG4uc3RhcnRCdG4ge1xuICBmb250LXNpemU6IDdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDEwLCAxMCwgMTApO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgMjMzLCAxNDcpOyAqL1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLnN0YXJ0QnRuIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5zdGFydEJ0biB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuc3RhcnRCdG4ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICB9XG59XG4uT3Bwb25lbnRTZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xufVxuXG4uUFZQLFxuLlBWRSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiKDEwLCAxMCwgMTApO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMXM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tVGltZSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuUFZQLFxuICAuUFZFIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLlBWUCxcbiAgLlBWRSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLlBWUCxcbiAgLlBWRSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuaDIge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbi5zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcbn1cblxuLm1lbnVEaXYge1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ubWVudUJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTUsIDE1LCAxNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZGlzcGxheSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbn1cblxuLnBsYXllck9uZVNjb3JlLFxuLnBsYXllclR3b1Njb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNjb3JlT25lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tVGltZSk7XG59XG4uc2NvcmVUd28ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcbn1cbi5zY29yZVNjYWxlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLnNjb3JlU2NhbGUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcbiAgfVxufVxuXG4uZ2FtZUJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgNzQsIDc0KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmdhbWVCb2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE4MHB4LCAxZnIpKTtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5nYW1lQm9hcmQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAgd2lkdGg6IDQ2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ2FtZUJvYXJkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoNTBweCwgMWZyKSk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbi5jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDdyZW07XG4gIGhlaWdodDogMjAwcHg7XG4gIGNvbG9yOiByZ2IoMjI4LCA3MiwgNzIpO1xuICBvcGFjaXR5OiAxMDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuY2VsbCB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBmb250LXNpemU6IDZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5jZWxsIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmNlbGwge1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG59XG4uY2VsbDpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG4uY2VsbDphY3RpdmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi5hbmltIHtcbiAgYW5pbWF0aW9uOiB0cmFuc2l0aW9uSW4gMXM7XG59XG5cbkBrZXlmcmFtZXMgdHJhbnNpdGlvbkluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG4gIH1cbn1cbi53aW5uZXJVaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDZyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC53aW5uZXJVaSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC53aW5uZXJVaSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAud2lubmVyVWkge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLndpbm5lclVpIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuLndpbm5lclVpX192aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTAwO1xufVxuXG4uZ2FtZU92ZXJVSSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDEwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdhbWVPdmVyVUkge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ2FtZU92ZXJVSSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ2FtZU92ZXJVSSB7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5nYW1lT3ZlclVJIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cblxuOnJvb3Qge1xuICAtLXRyYW5zaXRpb24tVGltZTogMC42cztcbiAgLS1mb250LWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU4LCA1OCk7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5oMSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5yb290IHtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsYXllckRyYXdDb2xvciB7XG4gIGNvbG9yOiByZ2IoOTAsIDkwLCAyMzApO1xufVxuXG4ubWVudUJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9zdGFydC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy91dGlsaXRpZXMvYnJlYWtQb2ludHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9zZWN0aW9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSw4Q0FBQTtBQ0FGO0FDRkU7RUZBRjtJQUlJLGdCQUFBO0VDRUY7QUFDRjtBQ1BFO0VGQUY7SUFPSSxlQUFBO0VDSUY7QUFDRjtBQ1pFO0VGQUY7SUFVSSxlQUFBO0VDTUY7QUFDRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0FDTUY7O0FESEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ01GO0FETEU7RUFDRSx5QkFBQTtBQ09KO0FETEU7RUFDRSx5QkFBQTtBQ09KO0FETEU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtF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QTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQThYRjs7QUEzWEE7RUFDRSx1QkFBQTtBQThYRjs7QUEzWEE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBOFhGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzIHV0O1xcclxcblxcclxcbiVidXR0b25Ib3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDEwcmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDhyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3Rpb25NZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICZYIHtcXHJcXG4gICAgY29sb3I6IHJnYigxMzUsIDEzNSwgMjUyKTtcXHJcXG4gIH1cXHJcXG4gICZPIHtcXHJcXG4gICAgY29sb3I6IHJnYigyNDgsIDExNSwgMTE1KTtcXHJcXG4gIH1cXHJcXG4gICZCdG4ge1xcclxcbiAgICBmb250LXNpemU6IDdyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDEwLCAxMCwgMTApO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gICAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICAgIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAyMzMsIDE0Nyk7ICovXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIEBleHRlbmQgJWJ1dHRvbkhvdmVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5PcHBvbmVudFNlbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uUFZQLFxcclxcbi5QVkUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMTAsIDEwLCAxMCk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgfVxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbkhvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBmb3J3YXJkIFxcXCJjb21wb25lbnRzXFxcIjtcXHJcXG5AZm9yd2FyZCBcXFwidXRpbGl0aWVzXFxcIjtcXHJcXG46cm9vdCB7XFxyXFxuICAtLXRyYW5zaXRpb24tVGltZTogMC42cztcXHJcXG4gIC0tZm9udC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgNTgsIDU4KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvb3Qge1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyRHJhd0NvbG9yIHtcXHJcXG4gIGNvbG9yOiByZ2IoOTAsIDkwLCAyMzApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgY29sb3I6IGdob3N0d2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblwiLFwiJGJyZWFrcG9pbnRzOiAoXFxyXFxuICBcXFwieFNtYWxsXFxcIjogMzIwcHgsXFxyXFxuICBcXFwic21hbGxcXFwiOiAzNzVweCxcXHJcXG4gIFxcXCJtZWRpdW1cXFwiOiA0My43NWVtLFxcclxcbiAgXFxcImxhcmdlXFxcIjogNTYuMjVlbSxcXHJcXG4gIFxcXCJsYXJnZXJcXFwiOiAxMDI0cHgsXFxyXFxuICBcXFwieExhcmdlXFxcIjogOTBlbSxcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50KCRzaXplKSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsJHNpemUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzIHV0O1xcclxcblxcclxcbkBtaXhpbiBnYW1lQm9hcmRIZWlnaHQoJGhlaWdodCkge1xcclxcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQoeExhcmdlKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZXIpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tVGltZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICZEaXYge1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuICAmQnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTUsIDE1LCAxNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQoeExhcmdlKSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2VyKSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyT25lU2NvcmUsXFxyXFxuLnBsYXllclR3b1Njb3JlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlIHtcXHJcXG4gICZPbmUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcXHJcXG4gIH1cXHJcXG4gICZUd28ge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcXHJcXG4gIH1cXHJcXG4gICZTY2FsZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi4yKTtcXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVCb2FyZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA3NCwgNzQpO1xcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZXIpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDE4MHB4LCAxZnIpKTtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcclxcbiAgICB3aWR0aDogNDYwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoNTBweCwgMWZyKSk7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDdyZW07XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgY29sb3I6IHJnYigyMjgsIDcyLCA3Mik7XFxyXFxuICBvcGFjaXR5OiAxMDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2VyKSB7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgaGVpZ2h0OiAxNDBweDtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgfVxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICB9XFxyXFxuICAmOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFuaW0ge1xcclxcbiAgYW5pbWF0aW9uOiB0cmFuc2l0aW9uSW4gMXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgdHJhbnNpdGlvbkluIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTEwZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyVWkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDZyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tVGltZSk7XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlcikge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbiAgJl9fdmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIG9wYWNpdHk6IDEwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVPdmVyVUkge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDEwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlcikge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiY2VsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInN0YXJ0QnRuRGl2IiwicXVlcnlTZWxlY3RvciIsInN0YXJ0QnRuIiwibWVudUJ0biIsInNlY3Rpb24iLCJzY29yZU9uZSIsInNjb3JlVHdvIiwic3BhbiIsInplcm90aENlbGwiLCJnZXRFbGVtZW50QnlJZCIsImZpcnN0Q2VsbCIsInNlY29uZENlbGwiLCJ0aGlyZENlbGwiLCJmb3VydGhDZWxsIiwiZmlmdGhDZWxsIiwic2l4dGhDZWxsIiwic2V2ZW50aENlbGwiLCJlaWdodENlbGwiLCJPcHBvbmVudFNlbGVjdGlvbiIsInNlbGVjdGlvbk1lbnUiLCJQVlAiLCJQVkUiLCJ3aW5uZXJVaSIsImNyZWF0ZUVsZW1lbnQiLCJnYW1lIiwiZ2FtZUJvYXJkIiwiYXJyYXlQVkUiLCJpZFNpZ25BcnJheSIsInByZWRlZmluZWRBcnJheSIsImNlbGxQb3NpdGlvbiIsInBsYXllckRyYXciLCJyb3VuZFBsYXllZCIsImlzUFZQIiwiaXNQVkUiLCJpc1JvdW5kT3ZlciIsImlzRHJhdyIsImlzT3ZlciIsImNyZWF0ZVBsYXllciIsIm5hbWUiLCJwbGF5ZXIiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJpc1N3aXRjaFNpZ24iLCJwbGF5ZXJPbmVTY29yZSIsInBsYXllclR3b1Njb3JlIiwidGljVGFjVG9lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwic3RhcnRHYW1lIiwicGxheVBWUCIsInBsYXlQVkUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJzdGFydEJ1dHRvbkhpZGUiLCJzcGFucyIsIm1lbnUiLCJmb3JFYWNoIiwiY2VsbHMiLCJwbGF5UFZQRm5jIiwib25jZSIsInRhcmdldCIsImlkIiwidGV4dENvbnRlbnQiLCJzaWduIiwiZ2FtZUxvZ2ljIiwiY29sb3IiLCJjb25zb2xlIiwibG9nIiwicGxheVBWRUZuYyIsInJlbW92ZUR1cGxpY2F0ZUNlbGxJbmRleEZyb21BcnJheSIsImNlbGxBcnJheSIsInVzZXJTZWxlY3RlZENlbGxQb3NpdGlvbiIsImluZGV4T2YiLCJzcGxpY2UiLCJBSURyYXdGbmMiLCJwYXJzZUludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQUlEcmF3VGV4dCIsInJlbW92ZSIsInJhbmRvbUFJSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJkcmF3QUkiLCJBSUNlbGxQb3NpdGlvbiIsInNlbGVjdGVkUGxheWVyIiwicGxheWVyVUkiLCJyb3VuZFNjb3JlIiwicm91bmRTdGF0dXMiLCJ3aW5uZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UiLCJjbGVhciIsInJlc2V0IiwicmVzdGFydEdhbWVNYW51YWxseSIsImJhY2tncm91bmRDb2xvciIsInRyYW5zaXRpb24iLCJyZXN0YXJ0R2FtZSIsInNlbGVjdFBsYXllciIsImEiLCJiIiwiYyJdLCJzb3VyY2VSb290IjoiIn0=