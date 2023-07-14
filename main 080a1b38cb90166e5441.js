"use strict";
(self["webpackChunktic_tac_toe"] = self["webpackChunktic_tac_toe"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");

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
const Game = {
  gameBoard: ["x", "o"],
  // change this on PvP
  swapElement(array) {
    // to swap the value using destructor
    [this.gameBoard[0], this.gameBoard[1]] = [this.gameBoard[1], this.gameBoard[0]];
  },
  playerSignArray: [],
  idSignArray: [],
  randomNumArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  cellPosition: 0,
  roundsPlayed: 0,
  playerOneScore: 0,
  playerTwoScore: 0
};
const createPlayer = function (name) {
  return {
    name
  };
};
const playerOne = createPlayer("Player One");
const playerTwo = createPlayer("Player Two");
let signArray; // Game.gameBoard
let isSwitchSign = false; // Check player switch
let isDraw = false; // Check for draw
let isOver = false; // Manual Game restart
const winnerUi = document.createElement("div");
winnerUi.classList.add("winnerUi");
section.append(winnerUi);
// winnerUi.textContent = `winner is the Winner`;
// winnerUi.style.visibility = "visible";
// winnerUi.style.opacity = 100;

startBtn.addEventListener("click", e => {
  OpponentSelection.style.visibility = "visible";
  OpponentSelection.style.opacity = "100";
  PVP.style.visibility = "visible";
  PVP.style.opacity = "100";
  PVE.style.visibility = "visible";
  PVE.style.opacity = "100";
});
PVP.addEventListener("click", e => {
  StartBtnStyling();
  cell.forEach(cells => {
    cells.addEventListener("click", PlayGamePVP, {
      once: true
    }); // Third Parameter - Makes selection once per player
    menuBtnPvP();
  });
  function PlayGamePVP(e) {
    /* eslint-disable */console.log(...oo_oo(`edd1c211_0`, this)); // this = cells
    signArray = Game.gameBoard; // to make playerOne select "x" after restart
    Game.roundsPlayed++; // for draw condition
    Game.cellPosition = e.target.id; // id of the html element
    Game.cellPosition = +Game.cellPosition; // + converts the string to int
    Game.idSignArray[Game.cellPosition] = Game.cellPosition; // insert the value to array at specific position

    // Player Switching
    if (!isSwitchSign) {
      // Player One
      isSwitchSign = true;
      this.textContent = signArray[0]; // select the first sign item and then flips it
      playerOne.sign = this.textContent;
      Game.playerSignArray[Game.cellPosition] = playerOne.sign; // insert the value to array at specific position
      gameLogic(playerOne, scoreOne);
      this.style.color = "rgb(90, 90, 230)";

      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_1`, "First Player Position"));
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_2`, Game.playerSignArray));
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_3`, "------------------------------------------------------ PLayer One "));
    } else {
      isSwitchSign = false;
      this.textContent = signArray[1];
      playerTwo.sign = this.textContent;
      Game.playerSignArray[Game.cellPosition] = playerTwo.sign;
      gameLogic(playerTwo, scoreTwo);
      this.style.color = "rgb(228, 72, 72)";

      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_4`, "Second Player Position"));
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_5`, Game.playerSignArray));
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_6`, "------------------------------------------------------ player Two"));
    }
  }
  function gameLogic(player, playerUI) {
    if (!isDraw) {
      // Horizontal Chance
      if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[2] === player.sign && Game.playerSignArray[3] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(zerothCell, firstCell, secondCell);
      } else if (Game.playerSignArray[4] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[6] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(thirdCell, fourthCell, fifthCell);
      } else if (Game.playerSignArray[7] === player.sign && Game.playerSignArray[8] === player.sign && Game.playerSignArray[9] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(sixthCell, seventhCell, eightCell);
      }

      // Vertical Chance
      else if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[7] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(zerothCell, thirdCell, sixthCell);
      } else if (Game.playerSignArray[2] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[8] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(firstCell, fourthCell, seventhCell);
      } else if (Game.playerSignArray[3] === player.sign && Game.playerSignArray[6] === player.sign && Game.playerSignArray[9] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(secondCell, fifthCell, eightCell);
      }

      // Diagonal Chance
      else if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[9] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(zerothCell, fourthCell, eightCell);
      } else if (Game.playerSignArray[7] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[3] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(sixthCell, fourthCell, secondCell);
      }
      // Draw
      else if (Game.roundsPlayed === 9) {
        isDraw = false;
        resetLevelDraw(player);
      }
    }
  }
  function resetLevel(player) {
    for (const cells of cell) {
      cells.removeEventListener("click", PlayGamePVP, {
        once: true
      }); // stops the game
      winnerUi.textContent = `${player.name} is the Winner`;
      winnerUi.style.visibility = "visible";
      winnerUi.style.opacity = 100;
      // restartLevelManually();
    }

    setTimeout(reset, 1300); // dynamic restart
  }

  function resetLevelDraw() {
    for (const cells of cell) {
      cells.removeEventListener("click", PlayGamePVP, {
        once: true
      }); // stops the game
      winnerUi.textContent = `Level Ended in a Draw`;
      winnerUi.style.visibility = "visible";
      winnerUi.style.opacity = 100;
      // restartLevelManually();
    }

    setTimeout(reset, 1300); // dynamic restart
  }

  function reset() {
    for (const cells of cell) {
      console.clear();
      cells.removeEventListener("click", PlayGamePVP, {
        once: true
      });
      cells.textContent = "";
      Game.roundsPlayed = 0;
      Game.playerSignArray = [];
      Game.idSignArray = [];
      isSwitchSign = false;
      isDraw = false;
      Game.gameBoard = ["x", "o"];
      // winnerUi.textContent = ""; // transition won't work

      zerothCell.style.backgroundColor = "white";
      firstCell.style.backgroundColor = "white";
      secondCell.style.backgroundColor = "white";
      thirdCell.style.backgroundColor = "white";
      fourthCell.style.backgroundColor = "white";
      fifthCell.style.backgroundColor = "white";
      sixthCell.style.backgroundColor = "white";
      seventhCell.style.backgroundColor = "white";
      eightCell.style.backgroundColor = "white";
      scoreOne.style.color = "white";
      scoreOne.style.transform = "scale(1)";
      scoreTwo.style.color = "white";
      scoreTwo.style.transform = "scale(1)";
      winnerUi.style.visibility = "hidden";
      winnerUi.style.opacity = 0;
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_7`, Game.playerSignArray));
      cells.addEventListener("click", PlayGamePVP, {
        once: true
      });
    }
  }
  function menuBtnPvP() {
    menuBtn.addEventListener("click", e => {
      startBtnDiv.style.visibility = "visible";
      startBtn.style.visibility = "visible";
      for (const spans of span) {
        // startButton Styling
        spans.style.opacity = 100;
      }
      section.style.visibility = "hidden";
      section.style.opacity = 0;
      reset();
      restartGame();
      if (PVP) {
        for (const cells of cell) {
          cells.removeEventListener("click", PlayGamePVP, {
            once: true
          });
        }
      }
    });
  }
});
PVE.addEventListener("click", e => {
  StartBtnStyling();
  cell.forEach(cells => {
    cells.addEventListener("click", playGamePVE, {
      once: true
    }); // Third Parameter - Makes selection once per player
    menuBtnPvE();
  });
  function playGamePVE(e) {
    if (this.textContent === "") {
      /* eslint-disable */console.log(...oo_oo(`edd1c211_8`, this));
      signArray = Game.gameBoard;
      // ------------------------Player One  ------------------------ //

      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_9`, "Player One -------------"));
      Game.cellPosition = e.target.id; // id of the html element
      Game.cellPosition = +Game.cellPosition; // + converts the string to int
      const indexPlayer = Game.randomNumArray.indexOf(Game.cellPosition);
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_10`, indexPlayer));
      if (indexPlayer > -1) {
        Game.randomNumArray.splice(indexPlayer, 1); // removes the number, so that the number won't repeat or be overwritten by AI
      }

      Game.roundsPlayed++; // for draw condition
      this.textContent = signArray[0]; // select the first sign item
      playerOne.sign = this.textContent;
      Game.playerSignArray[Game.cellPosition] = playerOne.sign; // insert the value to array at specific position
      gameLogicPVE(playerOne, scoreOne);
      this.style.color = "rgb(90, 90, 230)";
      // // ------------------------ AI ------------------------ //

      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_11`, "AI ----------------"));
      if (Game.roundsPlayed < 5) {
        // stop randomNumPosition creating after game draw
        // Non Duplicate RandomNumber
        const randomNumPosition = Game.randomNumArray[Math.floor(Math.random() * Game.randomNumArray.length)];
        const indexAI = Game.randomNumArray.indexOf(randomNumPosition);
        if (indexAI > -1) {
          Game.randomNumArray.splice(indexAI, 1); // removes a number from the array, so the random number won't repeat
        }

        const AI = document.querySelector(`.cell:nth-child(${randomNumPosition})`);
        /* eslint-disable */
        console.log(...oo_oo(`edd1c211_12`, `This is AI : ${randomNumPosition}`));
        let AICellPosition = AI.id;
        AI.textContent = signArray[1];
        AICellPosition = +AICellPosition;
        playerTwo.sign = AI.textContent;
        Game.playerSignArray[AICellPosition] = playerTwo.sign; // stop overwriting already selected cellPosition
        gameLogicPVE(playerTwo, scoreTwo);
        // console.log(`playerTwo.sign is ${playerTwo.sign}`);
        // console.log(signArray)
        // console.log(randomNumPosition);
        // console.log(Game.randomNumArray);
        // console.log(Game.playerSignArray);
        // console.log("-----------------------------------------------------");
      }
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_13`, Game.playerSignArray));
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_14`, `--------------------------------${Game.roundsPlayed}`));
    }
  }
  function gameLogicPVE(player, playerUI) {
    if (!isDraw) {
      // Horizontal Chance
      if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[2] === player.sign && Game.playerSignArray[3] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(zerothCell, firstCell, secondCell);
      } else if (Game.playerSignArray[4] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[6] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(thirdCell, fourthCell, fifthCell);
      } else if (Game.playerSignArray[7] === player.sign && Game.playerSignArray[8] === player.sign && Game.playerSignArray[9] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(sixthCell, seventhCell, eightCell);
      }

      // Vertical Chance
      else if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[7] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(zerothCell, thirdCell, sixthCell);
      } else if (Game.playerSignArray[2] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[8] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(firstCell, fourthCell, seventhCell);
      } else if (Game.playerSignArray[3] === player.sign && Game.playerSignArray[6] === player.sign && Game.playerSignArray[9] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(secondCell, fifthCell, eightCell);
      }

      // Diagonal Chance
      else if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[9] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(zerothCell, fourthCell, eightCell);
      } else if (Game.playerSignArray[7] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[3] === player.sign) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(sixthCell, fourthCell, secondCell);
      }

      // Draw
      else if (Game.roundsPlayed === 5) {
        isDraw = false;
        DrawLevelPVE();
      }
    }
  }
  function resetLevelPVE(player) {
    for (const cells of cell) {
      cells.removeEventListener("click", playGamePVE, {
        once: true
      }); // stops the game
      winnerUi.textContent = `${player.name} is the Winner`;
      winnerUi.style.visibility = "visible";
      winnerUi.style.opacity = 100;
      // restartLevelManually();
    }

    setTimeout(resetPVE, 1300); // dynamic restart
  }

  function DrawLevelPVE() {
    for (const cells of cell) {
      cells.removeEventListener("click", playGamePVE, {
        once: true
      }); // stops the game
      winnerUi.textContent = `Level Ended in a Draw`;
      winnerUi.style.visibility = "visible";
      winnerUi.style.opacity = 100;
      // restartLevelManually();
    }

    setTimeout(resetPVE, 1300); // dynamic restart
  }

  function resetPVE() {
    for (const cells of cell) {
      console.clear();
      cells.removeEventListener("click", playGamePVE, {
        once: true
      });
      cells.textContent = "";
      Game.roundsPlayed = 0;
      Game.playerSignArray = [];
      Game.idSignArray = [];
      Game.randomNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      isSwitchSign = false;
      isDraw = false;
      // winnerUi.textContent = ""; // transition won't work

      zerothCell.style.backgroundColor = "white";
      firstCell.style.backgroundColor = "white";
      secondCell.style.backgroundColor = "white";
      thirdCell.style.backgroundColor = "white";
      fourthCell.style.backgroundColor = "white";
      fifthCell.style.backgroundColor = "white";
      sixthCell.style.backgroundColor = "white";
      seventhCell.style.backgroundColor = "white";
      eightCell.style.backgroundColor = "white";
      cell.forEach(cells => {
        cells.style.color = "rgb(228, 72, 72)";
      });
      scoreOne.style.color = "white";
      scoreOne.style.transform = "scale(1)";
      scoreTwo.style.color = "white";
      scoreTwo.style.transform = "scale(1)";
      winnerUi.style.visibility = "hidden";
      winnerUi.style.opacity = 0;
      /* eslint-disable */
      console.log(...oo_oo(`edd1c211_15`, Game.playerSignArray));
      cells.addEventListener("click", playGamePVE, {
        once: true
      });
    }
  }
  function menuBtnPvE() {
    menuBtn.addEventListener("click", e => {
      startBtnDiv.style.visibility = "visible";
      startBtn.style.visibility = "visible";
      for (const spans of span) {
        // startButton Styling
        spans.style.opacity = 100;
      }
      section.style.visibility = "hidden";
      section.style.opacity = 0;
      section.style.transition = "0.1s !important";
      resetPVE();
      restartGame();
      if (PVP) {
        for (const cells of cell) {
          cells.removeEventListener("click", playGamePVE, {
            once: true
          });
        }
      }
    });
  }
});

/// /---------Common Function//---------
function StartBtnStyling() {
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
function roundScore(player, playerUI) {
  if (player === playerOne) {
    Game.playerOneScore++;
    playerUI.textContent = Game.playerOneScore;
    scoreOne.style.color = "springgreen";
    scoreOne.style.transform = "scale(3.5)";
    /* eslint-disable */
    console.log(...oo_oo(`edd1c211_16`, `PlayerOne: ${Game.playerOneScore} `));
  } else if (player === playerTwo) {
    Game.playerTwoScore++;
    playerUI.textContent = Game.playerTwoScore;
    scoreTwo.style.color = "springgreen";
    scoreTwo.style.transform = "scale(3.5)";
    /* eslint-disable */
    console.log(...oo_oo(`edd1c211_17`, `PlayerTwo: ${Game.playerTwoScore} `));
  }
}
function WinnerColorChange(a, b, c) {
  a.style.backgroundColor = "rgb(184, 228, 148)";
  b.style.backgroundColor = "rgb(184, 228, 148)";
  c.style.backgroundColor = "rgb(184, 228, 148)";
}
function restartGame() {
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  Game.playerOneScore = 0;
  Game.playerTwoScore = 0;
}
function restartLevelManually() {
  for (const cells of cell) {
    isOver = false; // reset Game Over to false     // manual restart
    cells.addEventListener("click", e => {
      if (!isOver) {
        reset();
        isOver = true;
      }
    });
  }
}

// Trail And Error //
// let niceeee = [1, 2, 3, 4, 5];
// let soice = niceeee[Math.floor(Math.random() * 5)];
// console.log(soice);

// function DisplaySign() {
//     for (let cells of cell) {
//         cells.addEventListener("click", e => {
//             if (!isSwitchSign) {
//                 isSwitchSign = true
//                 Game.swapElement(signArray);
//                 cells.textContent = signArray[0];
//                 playerOne.sign = cells.textContent;
//                 console.log("First Player");
//                 console.log("------------------------------------------------------");
//             }
//             else if (isSwitchSign) {
//                 isSwitchSign = false;
//                 Game.swapElement(signArray);
//                 cells.textContent = signArray[0];
//                 playerTwo.sign = cells.textContent;
//                 console.log("Second Player");
//                 console.log("------------------------------------------------------");
//             }
//         })
//     }
// }

// Player Swap Using Destructing

// const gameBoard = ["x", "o", "x", "o"];
//     if (playerTwo) {
//         // switchPlayer()
//         eachPieces.textContent = sign[1];
//         playerTwo.textContent = sign.textContent;
//         console.log(`The Sign is:${ sign } `);
//         console.log(playerTwo);
//     }
//     else {
//         eachPieces.textContent = sign[0];
//         playerOne.textContent = sign.textContent;
//         console.log(playerOne);
//     }

// Player Switch

// if (!isClicked) {
//     isClicked = true;
// }
// else {
//     isClicked = false;
//     console.log
// }

// for (let eachPieces of eachPiece) {
//     eachPieces.addEventListener("click", e => {
//         if (!isSwitch) {
//             isSwitch = true
//             GameBoard.swapElement(signArray);
//             eachPieces.textContent = signArray[0];
//             playerOne.sign = eachPieces.textContent;
//             console.log("First Player");
//         }
//         else {
//             // switchPlayer()
//             isSwitch = false
//             GameBoard.swapElement(signArray);
//             eachPieces.textContent = signArray[0];
//             playerTwo.sign = eachPieces.textContent;
//             console.log(playerTwo);
//             console.log("Second Player");
//         }
//     })
// }

// fix

// let signArray = GameBoard.gameBoard;
// let isClicked = false; // only can press a SinglePiece
// let isSwitch = false; // to switch play

// for (let cells of cell) {
//     if (!isClicked) {
//         isClicked = true;
//         cells.addEventListener("click", e => {
//             if (!isSwitch) {
//                 isSwitch = true
//                 GameBoard.swapElement(signArray);
//                 cells.textContent = signArray[0];
//                 playerOne.sign = cells.textContent;
//                 console.log("First Player");
//                 console.log("------------------------------------------------------");
//             }
//         })
//     }
//     else {
//         isClicked = false;
//         console.log
//         cells.addEventListener("click", e => {
//             if (isSwitch) {
//                 isSwitch = false
//                 GameBoard.swapElement(signArray);
//                 cells.textContent = signArray[0];
//                 playerTwo.sign = cells.textContent;
//                 console.log("Second Player");
//                 console.log("------------------------------------------------------");
//             }
//         })
//     }
// }
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43ccbf=_0x2152;(function(_0x25c98f,_0x10ed1d){var _0x52144e=_0x2152,_0x5afabd=_0x25c98f();while(!![]){try{var _0x4457f2=-parseInt(_0x52144e(0x17a))/0x1*(-parseInt(_0x52144e(0x12e))/0x2)+-parseInt(_0x52144e(0xd5))/0x3*(parseInt(_0x52144e(0xf6))/0x4)+parseInt(_0x52144e(0x170))/0x5*(-parseInt(_0x52144e(0x13f))/0x6)+-parseInt(_0x52144e(0x165))/0x7*(-parseInt(_0x52144e(0x17c))/0x8)+-parseInt(_0x52144e(0x161))/0x9*(parseInt(_0x52144e(0x11a))/0xa)+-parseInt(_0x52144e(0x19f))/0xb*(-parseInt(_0x52144e(0x14f))/0xc)+parseInt(_0x52144e(0x10e))/0xd*(parseInt(_0x52144e(0x16e))/0xe);if(_0x4457f2===_0x10ed1d)break;else _0x5afabd['push'](_0x5afabd['shift']());}catch(_0x2f962b){_0x5afabd['push'](_0x5afabd['shift']());}}}(_0x5750,0x4707b));var ue=Object['create'],te=Object['defineProperty'],he=Object[_0x43ccbf(0x12f)],le=Object['getOwnPropertyNames'],fe=Object[_0x43ccbf(0xdc)],_e=Object[_0x43ccbf(0xf7)][_0x43ccbf(0x1a3)],pe=(_0x32dd3e,_0x1a1024,_0x498694,_0x44a3b3)=>{var _0x4f2fb3=_0x43ccbf;if(_0x1a1024&&typeof _0x1a1024==_0x4f2fb3(0x194)||typeof _0x1a1024==_0x4f2fb3(0x198)){for(let _0x33370a of le(_0x1a1024))!_e[_0x4f2fb3(0x188)](_0x32dd3e,_0x33370a)&&_0x33370a!==_0x498694&&te(_0x32dd3e,_0x33370a,{'get':()=>_0x1a1024[_0x33370a],'enumerable':!(_0x44a3b3=he(_0x1a1024,_0x33370a))||_0x44a3b3[_0x4f2fb3(0x126)]});}return _0x32dd3e;},ne=(_0x5094e9,_0x271128,_0x365cee)=>(_0x365cee=_0x5094e9!=null?ue(fe(_0x5094e9)):{},pe(_0x271128||!_0x5094e9||!_0x5094e9[_0x43ccbf(0x120)]?te(_0x365cee,_0x43ccbf(0xca),{'value':_0x5094e9,'enumerable':!0x0}):_0x365cee,_0x5094e9)),Q=class{constructor(_0x49d2f0,_0x3462bf,_0x3bf87e,_0x3c5ba3){var _0xf7510d=_0x43ccbf;this[_0xf7510d(0xf4)]=_0x49d2f0,this[_0xf7510d(0x18b)]=_0x3462bf,this[_0xf7510d(0x141)]=_0x3bf87e,this[_0xf7510d(0xe4)]=_0x3c5ba3,this['_allowedToSend']=!0x0,this[_0xf7510d(0x177)]=!0x0,this[_0xf7510d(0x12d)]=!0x1,this['_connecting']=!0x1,this[_0xf7510d(0xd4)]=!!this['global'][_0xf7510d(0xc4)],this[_0xf7510d(0x199)]=null,this['_connectAttemptCount']=0x0,this[_0xf7510d(0x14c)]=0x14,this['_webSocketErrorDocsLink']=_0xf7510d(0x192),this[_0xf7510d(0x137)]=(this[_0xf7510d(0xd4)]?_0xf7510d(0x15e):_0xf7510d(0xfb))+this[_0xf7510d(0x181)];}async[_0x43ccbf(0x110)](){var _0x2b5205=_0x43ccbf;if(this[_0x2b5205(0x199)])return this[_0x2b5205(0x199)];let _0x389a68;if(this[_0x2b5205(0xd4)])_0x389a68=this[_0x2b5205(0xf4)]['WebSocket'];else{if(this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)])_0x389a68=this[_0x2b5205(0xf4)][_0x2b5205(0x1ae)]?.[_0x2b5205(0xf9)];else try{let _0x804472=await import(_0x2b5205(0x10f));_0x389a68=(await import((await import(_0x2b5205(0x146)))[_0x2b5205(0x168)](_0x804472[_0x2b5205(0x17f)](this['nodeModules'],_0x2b5205(0x13c)))[_0x2b5205(0x123)]()))[_0x2b5205(0xca)];}catch{try{_0x389a68=require(require(_0x2b5205(0x10f))[_0x2b5205(0x17f)](this[_0x2b5205(0xe4)],'ws'));}catch{throw new Error(_0x2b5205(0x179));}}}return this[_0x2b5205(0x199)]=_0x389a68,_0x389a68;}['_connectToHostNow'](){var _0x58fb26=_0x43ccbf;this[_0x58fb26(0x152)]||this[_0x58fb26(0x12d)]||this[_0x58fb26(0x17d)]>=this[_0x58fb26(0x14c)]||(this[_0x58fb26(0x177)]=!0x1,this[_0x58fb26(0x152)]=!0x0,this[_0x58fb26(0x17d)]++,this['_ws']=new Promise((_0x1ff128,_0x51507f)=>{var _0x1ba88d=_0x58fb26;this[_0x1ba88d(0x110)]()[_0x1ba88d(0x12a)](_0x1db853=>{var _0x52b511=_0x1ba88d;let _0x310206=new _0x1db853(_0x52b511(0x16b)+this['host']+':'+this[_0x52b511(0x141)]);_0x310206[_0x52b511(0x173)]=()=>{var _0x587291=_0x52b511;this[_0x587291(0x11d)]=!0x1,this[_0x587291(0xe6)](_0x310206),this[_0x587291(0x103)](),_0x51507f(new Error('logger\\x20websocket\\x20error'));},_0x310206[_0x52b511(0xe2)]=()=>{var _0x5795f6=_0x52b511;this['_inBrowser']||_0x310206[_0x5795f6(0x19c)]&&_0x310206['_socket'][_0x5795f6(0xc3)]&&_0x310206[_0x5795f6(0x19c)][_0x5795f6(0xc3)](),_0x1ff128(_0x310206);},_0x310206[_0x52b511(0x19d)]=()=>{var _0x5490e5=_0x52b511;this[_0x5490e5(0x177)]=!0x0,this[_0x5490e5(0xe6)](_0x310206),this[_0x5490e5(0x103)]();},_0x310206[_0x52b511(0x124)]=_0x21e196=>{var _0x38bee3=_0x52b511;try{_0x21e196&&_0x21e196[_0x38bee3(0x15d)]&&this[_0x38bee3(0xd4)]&&JSON[_0x38bee3(0xea)](_0x21e196[_0x38bee3(0x15d)])[_0x38bee3(0x113)]==='reload'&&this[_0x38bee3(0xf4)][_0x38bee3(0xef)][_0x38bee3(0x143)]();}catch{}};})[_0x1ba88d(0x12a)](_0x273561=>(this[_0x1ba88d(0x12d)]=!0x0,this[_0x1ba88d(0x152)]=!0x1,this[_0x1ba88d(0x177)]=!0x1,this[_0x1ba88d(0x11d)]=!0x0,this[_0x1ba88d(0x17d)]=0x0,_0x273561))['catch'](_0x11d5ad=>(this['_connected']=!0x1,this[_0x1ba88d(0x152)]=!0x1,console['warn'](_0x1ba88d(0x11c)+this[_0x1ba88d(0x181)]),_0x51507f(new Error(_0x1ba88d(0x18f)+(_0x11d5ad&&_0x11d5ad['message'])))));}));}['_disposeWebsocket'](_0x59fd1e){var _0x468fb=_0x43ccbf;this[_0x468fb(0x12d)]=!0x1,this[_0x468fb(0x152)]=!0x1;try{_0x59fd1e['onclose']=null,_0x59fd1e[_0x468fb(0x173)]=null,_0x59fd1e[_0x468fb(0xe2)]=null;}catch{}try{_0x59fd1e[_0x468fb(0x186)]<0x2&&_0x59fd1e[_0x468fb(0x15c)]();}catch{}}[_0x43ccbf(0x103)](){var _0x2c6d4f=_0x43ccbf;clearTimeout(this[_0x2c6d4f(0x16f)]),!(this[_0x2c6d4f(0x17d)]>=this[_0x2c6d4f(0x14c)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x1ffbf9=_0x2c6d4f;this['_connected']||this[_0x1ffbf9(0x152)]||(this[_0x1ffbf9(0xd3)](),this['_ws']?.['catch'](()=>this[_0x1ffbf9(0x103)]()));},0x1f4),this[_0x2c6d4f(0x16f)]['unref']&&this[_0x2c6d4f(0x16f)][_0x2c6d4f(0xc3)]());}async[_0x43ccbf(0xf8)](_0x236d2c){var _0x1b2497=_0x43ccbf;try{if(!this[_0x1b2497(0x11d)])return;this[_0x1b2497(0x177)]&&this[_0x1b2497(0xd3)](),(await this[_0x1b2497(0x117)])[_0x1b2497(0xf8)](JSON[_0x1b2497(0x13d)](_0x236d2c));}catch(_0x3ad953){console[_0x1b2497(0x196)](this[_0x1b2497(0x137)]+':\\x20'+(_0x3ad953&&_0x3ad953[_0x1b2497(0x19b)])),this[_0x1b2497(0x11d)]=!0x1,this[_0x1b2497(0x103)]();}}};function _0x2152(_0x4db430,_0x11a6a8){var _0x575054=_0x5750();return _0x2152=function(_0x215297,_0xb45fef){_0x215297=_0x215297-0xc3;var _0x452024=_0x575054[_0x215297];return _0x452024;},_0x2152(_0x4db430,_0x11a6a8);}function V(_0xc760b6,_0x380a46,_0x508716,_0x5e6b9c,_0x5e76d5){var _0x3977f1=_0x43ccbf;let _0x1d9d83=_0x508716['split'](',')[_0x3977f1(0xcd)](_0x3645ab=>{var _0xc12743=_0x3977f1;try{_0xc760b6[_0xc12743(0xdd)]||((_0x5e76d5==='next.js'||_0x5e76d5==='remix'||_0x5e76d5===_0xc12743(0xd9))&&(_0x5e76d5+=_0xc760b6[_0xc12743(0x1ae)]?.['versions']?.[_0xc12743(0x169)]?_0xc12743(0x118):_0xc12743(0xc8)),_0xc760b6[_0xc12743(0xdd)]={'id':+new Date(),'tool':_0x5e76d5});let _0x1c12bf=new Q(_0xc760b6,_0x380a46,_0x3645ab,_0x5e6b9c);return _0x1c12bf[_0xc12743(0xf8)][_0xc12743(0x1af)](_0x1c12bf);}catch(_0xa1a4ce){return console[_0xc12743(0x196)](_0xc12743(0x125),_0xa1a4ce&&_0xa1a4ce[_0xc12743(0x19b)]),()=>{};}});return _0x538ac6=>_0x1d9d83[_0x3977f1(0x1a9)](_0x218488=>_0x218488(_0x538ac6));}function H(_0x32ae85){var _0x11a3b7=_0x43ccbf;let _0x1f3b64=function(_0x149da1,_0x1cac4b){return _0x1cac4b-_0x149da1;},_0x21aac8;if(_0x32ae85[_0x11a3b7(0xed)])_0x21aac8=function(){var _0x6e4422=_0x11a3b7;return _0x32ae85[_0x6e4422(0xed)]['now']();};else{if(_0x32ae85['process']&&_0x32ae85[_0x11a3b7(0x1ae)]['hrtime'])_0x21aac8=function(){var _0x4f7240=_0x11a3b7;return _0x32ae85[_0x4f7240(0x1ae)][_0x4f7240(0x1b2)]();},_0x1f3b64=function(_0x63cd41,_0x93ea86){return 0x3e8*(_0x93ea86[0x0]-_0x63cd41[0x0])+(_0x93ea86[0x1]-_0x63cd41[0x1])/0xf4240;};else try{let {performance:_0x28d2ad}=require(_0x11a3b7(0xd6));_0x21aac8=function(){var _0x4aa65b=_0x11a3b7;return _0x28d2ad[_0x4aa65b(0x156)]();};}catch{_0x21aac8=function(){return+new Date();};}}return{'elapsed':_0x1f3b64,'timeStamp':_0x21aac8,'now':()=>Date[_0x11a3b7(0x156)]()};}function X(_0x470fde,_0x106540,_0x4b7463){var _0x23e2bd=_0x43ccbf;if(_0x470fde[_0x23e2bd(0x11e)]!==void 0x0)return _0x470fde[_0x23e2bd(0x11e)];let _0x1478fb=_0x470fde[_0x23e2bd(0x1ae)]?.[_0x23e2bd(0x10c)]?.['node'];return _0x1478fb&&_0x4b7463===_0x23e2bd(0xdb)?_0x470fde['_consoleNinjaAllowedToStart']=!0x1:_0x470fde[_0x23e2bd(0x11e)]=_0x1478fb||!_0x106540||_0x470fde[_0x23e2bd(0xef)]?.[_0x23e2bd(0x12c)]&&_0x106540[_0x23e2bd(0x1a0)](_0x470fde['location']['hostname']),_0x470fde[_0x23e2bd(0x11e)];}((_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c,_0x5dea60,_0x3e7faa,_0x38cbe4,_0x54a870)=>{var _0x512a37=_0x43ccbf;if(_0x14a8cc[_0x512a37(0x101)])return _0x14a8cc[_0x512a37(0x101)];if(!X(_0x14a8cc,_0x38cbe4,_0x16f16c))return _0x14a8cc[_0x512a37(0x101)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x14a8cc['_console_ninja'];let _0x16a222={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1b0717={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x3ff222=H(_0x14a8cc),_0x3f5d2d=_0x3ff222[_0x512a37(0x151)],_0x399678=_0x3ff222[_0x512a37(0x107)],_0x4b9a61=_0x3ff222[_0x512a37(0x156)],_0x586ea4={'hits':{},'ts':{}},_0x57cf86=_0x2f9899=>{_0x586ea4['ts'][_0x2f9899]=_0x399678();},_0x509aac=(_0xf82d3a,_0x277446)=>{var _0x34b2a8=_0x512a37;let _0x32a8b3=_0x586ea4['ts'][_0x277446];if(delete _0x586ea4['ts'][_0x277446],_0x32a8b3){let _0x4fb729=_0x3f5d2d(_0x32a8b3,_0x399678());_0x172c75(_0x4a295a(_0x34b2a8(0x14b),_0xf82d3a,_0x4b9a61(),_0x2e9713,[_0x4fb729],_0x277446));}},_0x7e61e6=_0x30047a=>_0x58dc84=>{var _0x52dc3e=_0x512a37;try{_0x57cf86(_0x58dc84),_0x30047a(_0x58dc84);}finally{_0x14a8cc[_0x52dc3e(0x18a)][_0x52dc3e(0x14b)]=_0x30047a;}},_0x20f561=_0x74ebdc=>_0x130916=>{var _0x213736=_0x512a37;try{let [_0x27faef,_0x2af625]=_0x130916['split'](_0x213736(0x1a4));_0x509aac(_0x2af625,_0x27faef),_0x74ebdc(_0x27faef);}finally{_0x14a8cc[_0x213736(0x18a)]['timeEnd']=_0x74ebdc;}};_0x14a8cc[_0x512a37(0x101)]={'consoleLog':(_0xbeff1b,_0x3e26b5)=>{var _0xa256f1=_0x512a37;_0x14a8cc[_0xa256f1(0x18a)]['log'][_0xa256f1(0xe5)]!==_0xa256f1(0x13e)&&_0x172c75(_0x4a295a('log',_0xbeff1b,_0x4b9a61(),_0x2e9713,_0x3e26b5));},'consoleTrace':(_0x583ba7,_0x2c2950)=>{var _0x1c7d8b=_0x512a37;_0x14a8cc[_0x1c7d8b(0x18a)][_0x1c7d8b(0x112)][_0x1c7d8b(0xe5)]!==_0x1c7d8b(0x114)&&_0x172c75(_0x4a295a(_0x1c7d8b(0x115),_0x583ba7,_0x4b9a61(),_0x2e9713,_0x2c2950));},'consoleTime':()=>{var _0x936b2b=_0x512a37;_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]=_0x7e61e6(_0x14a8cc[_0x936b2b(0x18a)][_0x936b2b(0x14b)]);},'consoleTimeEnd':()=>{var _0x25c6c4=_0x512a37;_0x14a8cc['console'][_0x25c6c4(0x11b)]=_0x20f561(_0x14a8cc[_0x25c6c4(0x18a)][_0x25c6c4(0x11b)]);},'autoLog':(_0x49de73,_0x464a47)=>{var _0x4ff49c=_0x512a37;_0x172c75(_0x4a295a(_0x4ff49c(0x112),_0x464a47,_0x4b9a61(),_0x2e9713,[_0x49de73]));},'autoLogMany':(_0x4dfd04,_0x1cd3dd)=>{var _0x209c0c=_0x512a37;_0x172c75(_0x4a295a(_0x209c0c(0x112),_0x4dfd04,_0x4b9a61(),_0x2e9713,_0x1cd3dd));},'autoTrace':(_0x115074,_0x8ffda1)=>{var _0xd430a8=_0x512a37;_0x172c75(_0x4a295a(_0xd430a8(0x115),_0x8ffda1,_0x4b9a61(),_0x2e9713,[_0x115074]));},'autoTraceMany':(_0x587660,_0x11a0b9)=>{var _0x59cb41=_0x512a37;_0x172c75(_0x4a295a(_0x59cb41(0x115),_0x587660,_0x4b9a61(),_0x2e9713,_0x11a0b9));},'autoTime':(_0x5e6f88,_0x2b8ea4,_0x603ebf)=>{_0x57cf86(_0x603ebf);},'autoTimeEnd':(_0x310eee,_0x2b5459,_0x285c63)=>{_0x509aac(_0x2b5459,_0x285c63);}};let _0x172c75=V(_0x14a8cc,_0x349b6c,_0x3a9d4e,_0x4bbae2,_0x16f16c),_0x2e9713=_0x14a8cc['_console_ninja_session'];class _0x56130d{constructor(){var _0x40f114=_0x512a37;this[_0x40f114(0xf2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x40f114(0x183)]=/^(0|[1-9][0-9]*)$/,this[_0x40f114(0xe1)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x14a8cc[_0x40f114(0x121)],this[_0x40f114(0x10d)]=_0x14a8cc[_0x40f114(0x1a1)],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this[_0x40f114(0xf0)]=Object[_0x40f114(0x163)],this[_0x40f114(0x150)]=_0x14a8cc[_0x40f114(0x144)],this['_regExpToString']=RegExp[_0x40f114(0xf7)][_0x40f114(0x123)],this['_dateToString']=Date[_0x40f114(0xf7)][_0x40f114(0x123)];}['serialize'](_0x55a2bb,_0x1b6604,_0x287ba9,_0x2d9852){var _0x4d22f2=_0x512a37,_0x1662fa=this,_0x5b8312=_0x287ba9['autoExpand'];function _0xc5be16(_0x56900e,_0xc0b5c1,_0x4433fc){var _0x4b88ed=_0x2152;_0xc0b5c1['type']=_0x4b88ed(0x1aa),_0xc0b5c1[_0x4b88ed(0x10a)]=_0x56900e[_0x4b88ed(0x19b)],_0x609320=_0x4433fc[_0x4b88ed(0x169)]['current'],_0x4433fc[_0x4b88ed(0x169)][_0x4b88ed(0x157)]=_0xc0b5c1,_0x1662fa[_0x4b88ed(0xc5)](_0xc0b5c1,_0x4433fc);}if(_0x1b6604&&_0x1b6604[_0x4d22f2(0x116)])_0xc5be16(_0x1b6604,_0x55a2bb,_0x287ba9);else try{_0x287ba9[_0x4d22f2(0x13a)]++,_0x287ba9['autoExpand']&&_0x287ba9[_0x4d22f2(0x1ad)]['push'](_0x1b6604);var _0x2abf77,_0x179ba3,_0x437a71,_0x1f4318,_0x1f6b26=[],_0x512271=[],_0x406cf2,_0x252ae4=this[_0x4d22f2(0x13b)](_0x1b6604),_0x3e04a5=_0x252ae4===_0x4d22f2(0x1ac),_0x2abb0a=!0x1,_0x4828a1=_0x252ae4===_0x4d22f2(0x198),_0x34ff23=this['_isPrimitiveType'](_0x252ae4),_0x380607=this[_0x4d22f2(0x158)](_0x252ae4),_0x679d7f=_0x34ff23||_0x380607,_0x37a5d5={},_0x2e60f3=0x0,_0x2230f8=!0x1,_0x609320,_0x3acb99=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x287ba9[_0x4d22f2(0xd8)]){if(_0x3e04a5){if(_0x179ba3=_0x1b6604['length'],_0x179ba3>_0x287ba9['elements']){for(_0x437a71=0x0,_0x1f4318=_0x287ba9[_0x4d22f2(0x130)],_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));_0x55a2bb[_0x4d22f2(0xe9)]=!0x0;}else{for(_0x437a71=0x0,_0x1f4318=_0x179ba3,_0x2abf77=_0x437a71;_0x2abf77<_0x1f4318;_0x2abf77++)_0x512271[_0x4d22f2(0x1a6)](_0x1662fa[_0x4d22f2(0x172)](_0x1f6b26,_0x1b6604,_0x252ae4,_0x2abf77,_0x287ba9));}_0x287ba9['autoExpandPropertyCount']+=_0x512271[_0x4d22f2(0x155)];}if(!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&!_0x34ff23&&_0x252ae4!=='String'&&_0x252ae4!==_0x4d22f2(0x14e)&&_0x252ae4!==_0x4d22f2(0x159)){var _0x5b1dce=_0x2d9852[_0x4d22f2(0x129)]||_0x287ba9[_0x4d22f2(0x129)];if(this[_0x4d22f2(0x180)](_0x1b6604)?(_0x2abf77=0x0,_0x1b6604[_0x4d22f2(0x1a9)](function(_0x1ec5f5){var _0x3a11b8=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x3a11b8(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x3a11b8(0x160)]&&_0x287ba9[_0x3a11b8(0xde)]&&_0x287ba9[_0x3a11b8(0x154)]>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;return;}_0x512271['push'](_0x1662fa[_0x3a11b8(0x172)](_0x1f6b26,_0x1b6604,_0x3a11b8(0xd0),_0x2abf77++,_0x287ba9,function(_0x2152a6){return function(){return _0x2152a6;};}(_0x1ec5f5)));})):this[_0x4d22f2(0xf3)](_0x1b6604)&&_0x1b6604['forEach'](function(_0x352abb,_0x150a02){var _0x1ee9a7=_0x4d22f2;if(_0x2e60f3++,_0x287ba9[_0x1ee9a7(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;return;}if(!_0x287ba9[_0x1ee9a7(0x160)]&&_0x287ba9['autoExpand']&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9[_0x1ee9a7(0x1a7)]){_0x2230f8=!0x0;return;}var _0x1eaa85=_0x150a02['toString']();_0x1eaa85[_0x1ee9a7(0x155)]>0x64&&(_0x1eaa85=_0x1eaa85[_0x1ee9a7(0x1a5)](0x0,0x64)+_0x1ee9a7(0x131)),_0x512271[_0x1ee9a7(0x1a6)](_0x1662fa[_0x1ee9a7(0x172)](_0x1f6b26,_0x1b6604,'Map',_0x1eaa85,_0x287ba9,function(_0x3fcdd2){return function(){return _0x3fcdd2;};}(_0x352abb)));}),!_0x2abb0a){try{for(_0x406cf2 in _0x1b6604)if(!(_0x3e04a5&&_0x3acb99['test'](_0x406cf2))&&!this[_0x4d22f2(0xcc)](_0x1b6604,_0x406cf2,_0x287ba9)){if(_0x2e60f3++,_0x287ba9['autoExpandPropertyCount']++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x154)]>_0x287ba9[_0x4d22f2(0x1a7)]){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}catch{}if(_0x37a5d5[_0x4d22f2(0x149)]=!0x0,_0x4828a1&&(_0x37a5d5[_0x4d22f2(0x128)]=!0x0),!_0x2230f8){var _0x142b7e=[]['concat'](this['_getOwnPropertyNames'](_0x1b6604))['concat'](this[_0x4d22f2(0xc6)](_0x1b6604));for(_0x2abf77=0x0,_0x179ba3=_0x142b7e[_0x4d22f2(0x155)];_0x2abf77<_0x179ba3;_0x2abf77++)if(_0x406cf2=_0x142b7e[_0x2abf77],!(_0x3e04a5&&_0x3acb99[_0x4d22f2(0x18d)](_0x406cf2[_0x4d22f2(0x123)]()))&&!this['_blacklistedProperty'](_0x1b6604,_0x406cf2,_0x287ba9)&&!_0x37a5d5[_0x4d22f2(0x104)+_0x406cf2['toString']()]){if(_0x2e60f3++,_0x287ba9[_0x4d22f2(0x154)]++,_0x2e60f3>_0x5b1dce){_0x2230f8=!0x0;break;}if(!_0x287ba9[_0x4d22f2(0x160)]&&_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9['autoExpandPropertyCount']>_0x287ba9['autoExpandLimit']){_0x2230f8=!0x0;break;}_0x512271[_0x4d22f2(0x1a6)](_0x1662fa['_addObjectProperty'](_0x1f6b26,_0x37a5d5,_0x1b6604,_0x252ae4,_0x406cf2,_0x287ba9));}}}}}if(_0x55a2bb[_0x4d22f2(0x162)]=_0x252ae4,_0x679d7f?(_0x55a2bb['value']=_0x1b6604[_0x4d22f2(0x153)](),this['_capIfString'](_0x252ae4,_0x55a2bb,_0x287ba9,_0x2d9852)):_0x252ae4===_0x4d22f2(0xe3)?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0xce)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4===_0x4d22f2(0x159)?_0x55a2bb[_0x4d22f2(0x1b4)]=_0x1b6604['toString']():_0x252ae4==='RegExp'?_0x55a2bb[_0x4d22f2(0x1b4)]=this[_0x4d22f2(0x1a8)][_0x4d22f2(0x188)](_0x1b6604):_0x252ae4==='symbol'&&this['_Symbol']?_0x55a2bb['value']=this[_0x4d22f2(0x150)][_0x4d22f2(0xf7)]['toString'][_0x4d22f2(0x188)](_0x1b6604):!_0x287ba9[_0x4d22f2(0xd8)]&&!(_0x252ae4===_0x4d22f2(0x17e)||_0x252ae4===_0x4d22f2(0x121))&&(delete _0x55a2bb[_0x4d22f2(0x1b4)],_0x55a2bb[_0x4d22f2(0x111)]=!0x0),_0x2230f8&&(_0x55a2bb[_0x4d22f2(0xfe)]=!0x0),_0x609320=_0x287ba9['node']['current'],_0x287ba9[_0x4d22f2(0x169)][_0x4d22f2(0x157)]=_0x55a2bb,this[_0x4d22f2(0xc5)](_0x55a2bb,_0x287ba9),_0x512271[_0x4d22f2(0x155)]){for(_0x2abf77=0x0,_0x179ba3=_0x512271['length'];_0x2abf77<_0x179ba3;_0x2abf77++)_0x512271[_0x2abf77](_0x2abf77);}_0x1f6b26[_0x4d22f2(0x155)]&&(_0x55a2bb[_0x4d22f2(0x129)]=_0x1f6b26);}catch(_0x86245e){_0xc5be16(_0x86245e,_0x55a2bb,_0x287ba9);}return this[_0x4d22f2(0x14d)](_0x1b6604,_0x55a2bb),this[_0x4d22f2(0xfd)](_0x55a2bb,_0x287ba9),_0x287ba9[_0x4d22f2(0x169)]['current']=_0x609320,_0x287ba9['level']--,_0x287ba9[_0x4d22f2(0xde)]=_0x5b8312,_0x287ba9[_0x4d22f2(0xde)]&&_0x287ba9[_0x4d22f2(0x1ad)][_0x4d22f2(0x106)](),_0x55a2bb;}['_getOwnPropertySymbols'](_0x5b3c9d){var _0x30ece4=_0x512a37;return Object[_0x30ece4(0xfa)]?Object[_0x30ece4(0xfa)](_0x5b3c9d):[];}[_0x512a37(0x180)](_0x20fa99){var _0x40165d=_0x512a37;return!!(_0x20fa99&&_0x14a8cc[_0x40165d(0xd0)]&&this[_0x40165d(0xda)](_0x20fa99)===_0x40165d(0xfc)&&_0x20fa99[_0x40165d(0x1a9)]);}[_0x512a37(0xcc)](_0x23da32,_0x5f9bbd,_0x5653eb){var _0x55ece4=_0x512a37;return _0x5653eb[_0x55ece4(0x139)]?typeof _0x23da32[_0x5f9bbd]=='function':!0x1;}[_0x512a37(0x13b)](_0x41aa7c){var _0x3a80d0=_0x512a37,_0x3391ea='';return _0x3391ea=typeof _0x41aa7c,_0x3391ea===_0x3a80d0(0x194)?this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x14a)?_0x3391ea='array':this[_0x3a80d0(0xda)](_0x41aa7c)===_0x3a80d0(0x19a)?_0x3391ea=_0x3a80d0(0xe3):this['_objectToString'](_0x41aa7c)===_0x3a80d0(0x108)?_0x3391ea='bigint':_0x41aa7c===null?_0x3391ea='null':_0x41aa7c[_0x3a80d0(0xdf)]&&(_0x3391ea=_0x41aa7c['constructor'][_0x3a80d0(0xe5)]||_0x3391ea):_0x3391ea===_0x3a80d0(0x121)&&this['_HTMLAllCollection']&&_0x41aa7c instanceof this[_0x3a80d0(0x10d)]&&(_0x3391ea=_0x3a80d0(0x1a1)),_0x3391ea;}[_0x512a37(0xda)](_0x152232){var _0x50db19=_0x512a37;return Object['prototype'][_0x50db19(0x123)]['call'](_0x152232);}[_0x512a37(0xc7)](_0x1e177c){var _0x1a7993=_0x512a37;return _0x1e177c===_0x1a7993(0x191)||_0x1e177c===_0x1a7993(0xec)||_0x1e177c==='number';}[_0x512a37(0x158)](_0x571b5b){var _0x2b3223=_0x512a37;return _0x571b5b===_0x2b3223(0x12b)||_0x571b5b==='String'||_0x571b5b==='Number';}[_0x512a37(0x172)](_0x1da961,_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e){var _0x414591=this;return function(_0x294122){var _0xe2057a=_0x2152,_0x4caf4e=_0x1f8f7d['node']['current'],_0x17c538=_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)],_0x1899c8=_0x1f8f7d[_0xe2057a(0x169)]['parent'];_0x1f8f7d[_0xe2057a(0x169)]['parent']=_0x4caf4e,_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xe8)]=typeof _0x3dc3b7==_0xe2057a(0x1b0)?_0x3dc3b7:_0x294122,_0x1da961['push'](_0x414591[_0xe2057a(0x10b)](_0x22304c,_0x293f1f,_0x3dc3b7,_0x1f8f7d,_0x3f521e)),_0x1f8f7d[_0xe2057a(0x169)][_0xe2057a(0xd7)]=_0x1899c8,_0x1f8f7d['node'][_0xe2057a(0xe8)]=_0x17c538;};}[_0x512a37(0xe0)](_0x49b9e5,_0x152fe1,_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9){var _0x34d254=_0x512a37,_0x1d00e8=this;return _0x152fe1[_0x34d254(0x104)+_0x4edf24[_0x34d254(0x123)]()]=!0x0,function(_0x5d2cc){var _0x41493f=_0x34d254,_0x10d44d=_0x2788bf[_0x41493f(0x169)][_0x41493f(0x157)],_0x101fd9=_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)],_0x42de31=_0x2788bf['node'][_0x41493f(0xd7)];_0x2788bf['node'][_0x41493f(0xd7)]=_0x10d44d,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x5d2cc,_0x49b9e5[_0x41493f(0x1a6)](_0x1d00e8[_0x41493f(0x10b)](_0x5aeb78,_0x361986,_0x4edf24,_0x2788bf,_0x319bf9)),_0x2788bf[_0x41493f(0x169)][_0x41493f(0xd7)]=_0x42de31,_0x2788bf[_0x41493f(0x169)][_0x41493f(0xe8)]=_0x101fd9;};}['_property'](_0xd82fc7,_0x5bfaa0,_0x5cce9b,_0x13c48a,_0x565628){var _0x1f86dc=_0x512a37,_0x377413=this;_0x565628||(_0x565628=function(_0xd2dc36,_0x437368){return _0xd2dc36[_0x437368];});var _0x58e1c9=_0x5cce9b[_0x1f86dc(0x123)](),_0x124f8e=_0x13c48a[_0x1f86dc(0x16a)]||{},_0x457a65=_0x13c48a['depth'],_0xe1ad95=_0x13c48a[_0x1f86dc(0x160)];try{var _0x4784ac=this[_0x1f86dc(0xf3)](_0xd82fc7),_0x35ea9b=_0x58e1c9;_0x4784ac&&_0x35ea9b[0x0]==='\\x27'&&(_0x35ea9b=_0x35ea9b[_0x1f86dc(0x175)](0x1,_0x35ea9b[_0x1f86dc(0x155)]-0x2));var _0x1caeb0=_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e[_0x1f86dc(0x104)+_0x35ea9b];_0x1caeb0&&(_0x13c48a[_0x1f86dc(0xd8)]=_0x13c48a['depth']+0x1),_0x13c48a['isExpressionToEvaluate']=!!_0x1caeb0;var _0x359faf=typeof _0x5cce9b==_0x1f86dc(0xee),_0x5c7fcb={'name':_0x359faf||_0x4784ac?_0x58e1c9:this[_0x1f86dc(0xd2)](_0x58e1c9)};if(_0x359faf&&(_0x5c7fcb[_0x1f86dc(0xee)]=!0x0),!(_0x5bfaa0==='array'||_0x5bfaa0===_0x1f86dc(0x176))){var _0x1c5970=this['_getOwnPropertyDescriptor'](_0xd82fc7,_0x5cce9b);if(_0x1c5970&&(_0x1c5970['set']&&(_0x5c7fcb[_0x1f86dc(0x142)]=!0x0),_0x1c5970['get']&&!_0x1caeb0&&!_0x13c48a['resolveGetters']))return _0x5c7fcb['getter']=!0x0,this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0x2306a8;try{_0x2306a8=_0x565628(_0xd82fc7,_0x5cce9b);}catch(_0x4daa53){return _0x5c7fcb={'name':_0x58e1c9,'type':_0x1f86dc(0x1aa),'error':_0x4daa53[_0x1f86dc(0x19b)]},this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a),_0x5c7fcb;}var _0xc6538=this[_0x1f86dc(0x13b)](_0x2306a8),_0x26e7ca=this[_0x1f86dc(0xc7)](_0xc6538);if(_0x5c7fcb[_0x1f86dc(0x162)]=_0xc6538,_0x26e7ca)this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x5055ce=_0x1f86dc;_0x5c7fcb[_0x5055ce(0x1b4)]=_0x2306a8[_0x5055ce(0x153)](),!_0x1caeb0&&_0x377413[_0x5055ce(0x171)](_0xc6538,_0x5c7fcb,_0x13c48a,{});});else{var _0x1d990d=_0x13c48a['autoExpand']&&_0x13c48a['level']<_0x13c48a[_0x1f86dc(0x134)]&&_0x13c48a[_0x1f86dc(0x1ad)][_0x1f86dc(0x16c)](_0x2306a8)<0x0&&_0xc6538!==_0x1f86dc(0x198)&&_0x13c48a[_0x1f86dc(0x154)]<_0x13c48a[_0x1f86dc(0x1a7)];_0x1d990d||_0x13c48a[_0x1f86dc(0x13a)]<_0x457a65||_0x1caeb0?(this['serialize'](_0x5c7fcb,_0x2306a8,_0x13c48a,_0x1caeb0||{}),this[_0x1f86dc(0x14d)](_0x2306a8,_0x5c7fcb)):this[_0x1f86dc(0x135)](_0x5c7fcb,_0x13c48a,_0x2306a8,function(){var _0x14191b=_0x1f86dc;_0xc6538===_0x14191b(0x17e)||_0xc6538===_0x14191b(0x121)||(delete _0x5c7fcb[_0x14191b(0x1b4)],_0x5c7fcb['capped']=!0x0);});}return _0x5c7fcb;}finally{_0x13c48a[_0x1f86dc(0x16a)]=_0x124f8e,_0x13c48a[_0x1f86dc(0xd8)]=_0x457a65,_0x13c48a['isExpressionToEvaluate']=_0xe1ad95;}}[_0x512a37(0x171)](_0x180f90,_0x11d747,_0x154dd8,_0x21893f){var _0x56825e=_0x512a37,_0x176056=_0x21893f[_0x56825e(0x197)]||_0x154dd8['strLength'];if((_0x180f90===_0x56825e(0xec)||_0x180f90===_0x56825e(0xf5))&&_0x11d747[_0x56825e(0x1b4)]){let _0x1e705c=_0x11d747[_0x56825e(0x1b4)][_0x56825e(0x155)];_0x154dd8[_0x56825e(0x15f)]+=_0x1e705c,_0x154dd8[_0x56825e(0x15f)]>_0x154dd8[_0x56825e(0x132)]?(_0x11d747[_0x56825e(0x111)]='',delete _0x11d747[_0x56825e(0x1b4)]):_0x1e705c>_0x176056&&(_0x11d747[_0x56825e(0x111)]=_0x11d747[_0x56825e(0x1b4)]['substr'](0x0,_0x176056),delete _0x11d747[_0x56825e(0x1b4)]);}}[_0x512a37(0xf3)](_0x3a986b){var _0x2ef40b=_0x512a37;return!!(_0x3a986b&&_0x14a8cc[_0x2ef40b(0x138)]&&this['_objectToString'](_0x3a986b)===_0x2ef40b(0x136)&&_0x3a986b[_0x2ef40b(0x1a9)]);}[_0x512a37(0xd2)](_0x495bcf){var _0x252e7d=_0x512a37;if(_0x495bcf[_0x252e7d(0x184)](/^\\d+$/))return _0x495bcf;var _0x408928;try{_0x408928=JSON[_0x252e7d(0x13d)](''+_0x495bcf);}catch{_0x408928='\\x22'+this[_0x252e7d(0xda)](_0x495bcf)+'\\x22';}return _0x408928[_0x252e7d(0x184)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x408928=_0x408928['substr'](0x1,_0x408928[_0x252e7d(0x155)]-0x2):_0x408928=_0x408928[_0x252e7d(0x122)](/'/g,'\\x5c\\x27')[_0x252e7d(0x122)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x408928;}[_0x512a37(0x135)](_0x3ce327,_0xa05fc0,_0x285bd7,_0x298585){var _0x2e1b6b=_0x512a37;this[_0x2e1b6b(0xc5)](_0x3ce327,_0xa05fc0),_0x298585&&_0x298585(),this['_additionalMetadata'](_0x285bd7,_0x3ce327),this[_0x2e1b6b(0xfd)](_0x3ce327,_0xa05fc0);}[_0x512a37(0xc5)](_0x1df5cb,_0x1e600e){var _0x569524=_0x512a37;this[_0x569524(0xe7)](_0x1df5cb,_0x1e600e),this[_0x569524(0x195)](_0x1df5cb,_0x1e600e),this[_0x569524(0xc9)](_0x1df5cb,_0x1e600e),this[_0x569524(0x109)](_0x1df5cb,_0x1e600e);}[_0x512a37(0xe7)](_0x4a32d0,_0x365d19){}['_setNodeQueryPath'](_0x8e29ee,_0x1969db){}['_setNodeLabel'](_0x957f54,_0x3043fe){}[_0x512a37(0x174)](_0x4f244d){var _0x33306e=_0x512a37;return _0x4f244d===this[_0x33306e(0x1a2)];}['_treeNodePropertiesAfterFullValue'](_0x2f2d65,_0x5a7554){var _0x1a9648=_0x512a37;this[_0x1a9648(0xf1)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x11f)](_0x2f2d65),_0x5a7554['sortProps']&&this[_0x1a9648(0x182)](_0x2f2d65),this['_addFunctionsNode'](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x15a)](_0x2f2d65,_0x5a7554),this[_0x1a9648(0x145)](_0x2f2d65);}[_0x512a37(0x14d)](_0x218596,_0x39bb99){var _0xf711df=_0x512a37;try{_0x218596&&typeof _0x218596[_0xf711df(0x155)]==_0xf711df(0x1b0)&&(_0x39bb99['length']=_0x218596[_0xf711df(0x155)]);}catch{}if(_0x39bb99['type']===_0xf711df(0x1b0)||_0x39bb99[_0xf711df(0x162)]==='Number'){if(isNaN(_0x39bb99['value']))_0x39bb99[_0xf711df(0x148)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];else switch(_0x39bb99[_0xf711df(0x1b4)]){case Number[_0xf711df(0x18c)]:_0x39bb99[_0xf711df(0x105)]=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case Number[_0xf711df(0x102)]:_0x39bb99['negativeInfinity']=!0x0,delete _0x39bb99[_0xf711df(0x1b4)];break;case 0x0:this[_0xf711df(0x190)](_0x39bb99['value'])&&(_0x39bb99['negativeZero']=!0x0);break;}}else _0x39bb99[_0xf711df(0x162)]===_0xf711df(0x198)&&typeof _0x218596[_0xf711df(0xe5)]=='string'&&_0x218596[_0xf711df(0xe5)]&&_0x39bb99[_0xf711df(0xe5)]&&_0x218596[_0xf711df(0xe5)]!==_0x39bb99['name']&&(_0x39bb99[_0xf711df(0x15b)]=_0x218596['name']);}['_isNegativeZero'](_0x1878c3){return 0x1/_0x1878c3===Number['NEGATIVE_INFINITY'];}[_0x512a37(0x182)](_0x4f6bdc){var _0x54b436=_0x512a37;!_0x4f6bdc[_0x54b436(0x129)]||!_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x155)]||_0x4f6bdc['type']===_0x54b436(0x1ac)||_0x4f6bdc['type']==='Map'||_0x4f6bdc[_0x54b436(0x162)]==='Set'||_0x4f6bdc[_0x54b436(0x129)][_0x54b436(0x178)](function(_0x4410ef,_0x20e5af){var _0x157689=_0x54b436,_0x2f4682=_0x4410ef[_0x157689(0xe5)][_0x157689(0x1b3)](),_0x249a2f=_0x20e5af['name'][_0x157689(0x1b3)]();return _0x2f4682<_0x249a2f?-0x1:_0x2f4682>_0x249a2f?0x1:0x0;});}['_addFunctionsNode'](_0x3e4f0c,_0x16620d){var _0x3c491d=_0x512a37;if(!(_0x16620d['noFunctions']||!_0x3e4f0c[_0x3c491d(0x129)]||!_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)])){for(var _0x32424d=[],_0x11cbbe=[],_0x4fe7b4=0x0,_0x3d8d0c=_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x155)];_0x4fe7b4<_0x3d8d0c;_0x4fe7b4++){var _0x46c351=_0x3e4f0c[_0x3c491d(0x129)][_0x4fe7b4];_0x46c351[_0x3c491d(0x162)]===_0x3c491d(0x198)?_0x32424d['push'](_0x46c351):_0x11cbbe[_0x3c491d(0x1a6)](_0x46c351);}if(!(!_0x11cbbe[_0x3c491d(0x155)]||_0x32424d[_0x3c491d(0x155)]<=0x1)){_0x3e4f0c[_0x3c491d(0x129)]=_0x11cbbe;var _0x46d709={'functionsNode':!0x0,'props':_0x32424d};this['_setNodeId'](_0x46d709,_0x16620d),this[_0x3c491d(0xf1)](_0x46d709,_0x16620d),this[_0x3c491d(0x11f)](_0x46d709),this['_setNodePermissions'](_0x46d709,_0x16620d),_0x46d709['id']+='\\x20f',_0x3e4f0c[_0x3c491d(0x129)][_0x3c491d(0x119)](_0x46d709);}}}[_0x512a37(0x15a)](_0x309916,_0x31adc5){}[_0x512a37(0x11f)](_0x33c01d){}[_0x512a37(0xcf)](_0x2f14ed){var _0x29caf9=_0x512a37;return Array[_0x29caf9(0x19e)](_0x2f14ed)||typeof _0x2f14ed==_0x29caf9(0x194)&&this['_objectToString'](_0x2f14ed)===_0x29caf9(0x14a);}[_0x512a37(0x109)](_0x3d2b35,_0x5a2aae){}[_0x512a37(0x145)](_0x5e8749){var _0x1ec90c=_0x512a37;delete _0x5e8749[_0x1ec90c(0x189)],delete _0x5e8749[_0x1ec90c(0xcb)],delete _0x5e8749[_0x1ec90c(0x193)];}['_setNodeExpressionPath'](_0x3edd3c,_0x3e2e0c){}[_0x512a37(0x100)](_0x56cf6d){var _0x2cf63a=_0x512a37;return _0x56cf6d?_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0x183)])?'['+_0x56cf6d+']':_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xf2)])?'.'+_0x56cf6d:_0x56cf6d[_0x2cf63a(0x184)](this[_0x2cf63a(0xe1)])?'['+_0x56cf6d+']':'[\\x27'+_0x56cf6d+'\\x27]':'';}}let _0xcb6255=new _0x56130d();function _0x4a295a(_0x50db00,_0x45daa5,_0xc5ab2d,_0x1fd4b8,_0xf9435f,_0x51a04f){var _0x4801b6=_0x512a37;let _0x40db4a,_0x1a3516;try{_0x1a3516=_0x399678(),_0x40db4a=_0x586ea4[_0x45daa5],!_0x40db4a||_0x1a3516-_0x40db4a['ts']>0x1f4&&_0x40db4a[_0x4801b6(0x166)]&&_0x40db4a[_0x4801b6(0x14b)]/_0x40db4a['count']<0x64?(_0x586ea4[_0x45daa5]=_0x40db4a={'count':0x0,'time':0x0,'ts':_0x1a3516},_0x586ea4[_0x4801b6(0x18e)]={}):_0x1a3516-_0x586ea4[_0x4801b6(0x18e)]['ts']>0x32&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]&&_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x14b)]/_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]<0x64&&(_0x586ea4[_0x4801b6(0x18e)]={});let _0x16b942=[],_0x37e208=_0x40db4a[_0x4801b6(0x140)]||_0x586ea4['hits'][_0x4801b6(0x140)]?_0x1b0717:_0x16a222,_0x4245e8=_0x4887f0=>{var _0x11e2ab=_0x4801b6;let _0x54b033={};return _0x54b033[_0x11e2ab(0x129)]=_0x4887f0['props'],_0x54b033[_0x11e2ab(0x130)]=_0x4887f0['elements'],_0x54b033[_0x11e2ab(0x197)]=_0x4887f0[_0x11e2ab(0x197)],_0x54b033[_0x11e2ab(0x132)]=_0x4887f0[_0x11e2ab(0x132)],_0x54b033[_0x11e2ab(0x1a7)]=_0x4887f0[_0x11e2ab(0x1a7)],_0x54b033[_0x11e2ab(0x134)]=_0x4887f0[_0x11e2ab(0x134)],_0x54b033['sortProps']=!0x1,_0x54b033[_0x11e2ab(0x139)]=!_0x54a870,_0x54b033[_0x11e2ab(0xd8)]=0x1,_0x54b033[_0x11e2ab(0x13a)]=0x0,_0x54b033['expId']=_0x11e2ab(0xd1),_0x54b033[_0x11e2ab(0x16d)]=_0x11e2ab(0x164),_0x54b033['autoExpand']=!0x0,_0x54b033[_0x11e2ab(0x1ad)]=[],_0x54b033[_0x11e2ab(0x154)]=0x0,_0x54b033[_0x11e2ab(0x1ab)]=!0x0,_0x54b033[_0x11e2ab(0x15f)]=0x0,_0x54b033[_0x11e2ab(0x169)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x54b033;};for(var _0x11df82=0x0;_0x11df82<_0xf9435f['length'];_0x11df82++)_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'timeNode':_0x50db00===_0x4801b6(0x14b)||void 0x0},_0xf9435f[_0x11df82],_0x4245e8(_0x37e208),{}));if(_0x50db00==='trace'){let _0x20f011=Error[_0x4801b6(0x133)];try{Error[_0x4801b6(0x133)]=0x1/0x0,_0x16b942[_0x4801b6(0x1a6)](_0xcb6255[_0x4801b6(0x127)]({'stackNode':!0x0},new Error()[_0x4801b6(0x147)],_0x4245e8(_0x37e208),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x20f011;}}return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':_0x16b942,'id':_0x45daa5,'context':_0x51a04f}]};}catch(_0x1c2ebd){return{'method':_0x4801b6(0x112),'version':_0x5dea60,'args':[{'ts':_0xc5ab2d,'session':_0x1fd4b8,'args':[{'type':_0x4801b6(0x1aa),'error':_0x1c2ebd&&_0x1c2ebd[_0x4801b6(0x19b)]}],'id':_0x45daa5,'context':_0x51a04f}]};}finally{try{if(_0x40db4a&&_0x1a3516){let _0x396f96=_0x399678();_0x40db4a[_0x4801b6(0x166)]++,_0x40db4a[_0x4801b6(0x14b)]+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x40db4a['ts']=_0x396f96,_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]++,_0x586ea4[_0x4801b6(0x18e)]['time']+=_0x3f5d2d(_0x1a3516,_0x396f96),_0x586ea4[_0x4801b6(0x18e)]['ts']=_0x396f96,(_0x40db4a[_0x4801b6(0x166)]>0x32||_0x40db4a[_0x4801b6(0x14b)]>0x64)&&(_0x40db4a['reduceLimits']=!0x0),(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x166)]>0x3e8||_0x586ea4['hits']['time']>0x12c)&&(_0x586ea4[_0x4801b6(0x18e)][_0x4801b6(0x140)]=!0x0);}}catch{}}}return _0x14a8cc[_0x512a37(0x101)];})(globalThis,_0x43ccbf(0xeb),_0x43ccbf(0x1b1),_0x43ccbf(0x167),_0x43ccbf(0x17b),'1.0.0',_0x43ccbf(0xff),_0x43ccbf(0x185),_0x43ccbf(0x187));function _0x5750(){var _0x51fcf3=['stringify','disabledLog','6iRzvQR','reduceLimits','port','setter','reload','Symbol','_cleanNode','url','stack','nan','_p_length','[object\\x20Array]','time','_maxConnectAttemptCount','_additionalMetadata','Buffer','36UGqKvx','_Symbol','elapsed','_connecting','valueOf','autoExpandPropertyCount','length','now','current','_isPrimitiveWrapperType','bigint','_addLoadNode','funcName','close','data','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','allStrLength','isExpressionToEvaluate','1912428peUkZS','type','getOwnPropertyNames','root_exp','70553MkwoTI','count',\"c:\\\\Users\\\\kuttu\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.182\\\\node_modules\",'pathToFileURL','node','expressionsToEvaluate','ws://','indexOf','rootExpression','2100Tdowba','_reconnectTimeout','1714945fcpOOS','_capIfString','_addProperty','onerror','_isUndefined','substr','Error','_allowedToConnectOnSend','sort','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','149XbESjE','webpack','272iXOgWY','_connectAttemptCount','null','join','_isSet','_webSocketErrorDocsLink','_sortProps','_numberRegExp','match',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-EQ9QPUR\",\"192.168.1.3\"],'readyState','','call','_hasSymbolPropertyOnItsPath','console','host','POSITIVE_INFINITY','test','hits','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_isNegativeZero','boolean','https://tinyurl.com/37x8b79t','_hasMapOnItsPath','object','_setNodeQueryPath','warn','strLength','function','_WebSocketClass','[object\\x20Date]','message','_socket','onclose','isArray','370469cMKCLB','includes','HTMLAllCollection','_undefined','hasOwnProperty',':logPointId:','slice','push','autoExpandLimit','_regExpToString','forEach','unknown','resolveGetters','array','autoExpandPreviousObjects','process','bind','number','52260','hrtime','toLowerCase','value','unref','WebSocket','_treeNodePropertiesBeforeFullValue','_getOwnPropertySymbols','_isPrimitiveType','\\x20browser','_setNodeExpressionPath','default','_hasSetOnItsPath','_blacklistedProperty','map','_dateToString','_isArray','Set','root_exp_id','_propertyName','_connectToHostNow','_inBrowser','1464558bwCIvl','perf_hooks','parent','depth','astro','_objectToString','nuxt','getPrototypeOf','_console_ninja_session','autoExpand','constructor','_addObjectProperty','_quotedRegExp','onopen','date','nodeModules','name','_disposeWebsocket','_setNodeId','index','cappedElements','parse','127.0.0.1','string','performance','symbol','location','_getOwnPropertyNames','_setNodeLabel','_keyStrRegExp','_isMap','global','String','4GKbUZr','prototype','send','_WebSocket','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Set]','_treeNodePropertiesAfterFullValue','cappedProps','1689309847431','_propertyAccessor','_console_ninja','NEGATIVE_INFINITY','_attemptToReconnectShortly','_p_','positiveInfinity','pop','timeStamp','[object\\x20BigInt]','_setNodePermissions','error','_property','versions','_HTMLAllCollection','62140fBudxU','path','getWebSocketClass','capped','log','method','disabledTrace','trace','argumentResolutionError','_ws','\\x20server','unshift','10MoeyiJ','timeEnd','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_allowedToSend','_consoleNinjaAllowedToStart','_setNodeExpandableState','__es'+'Module','undefined','replace','toString','onmessage','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','enumerable','serialize','_p_name','props','then','Boolean','hostname','_connected','2334ykESxH','getOwnPropertyDescriptor','elements','...','totalStrLength','stackTraceLimit','autoExpandMaxDepth','_processTreeNodeResult','[object\\x20Map]','_sendErrorMessage','Map','noFunctions','level','_type','ws/index.js'];_0x5750=function(){return _0x51fcf3;};return _0x5750();}");
  } catch (e) {}
}
;
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
;
function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
; /*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --transition-Time: 0.6s;
  --font-color: aliceblue;
}

body {
  background-color: rgb(59, 58, 58);
  font-family: "Courier New", Courier, monospace;
}

h1 {
  display: inline-flexbox;
  text-align: center;
  font-size: 4rem;
  margin: 0;
  color: var(--font-color);
}

h2 {
  font-size: 2.5rem;
  color: var(--font-color);
}

span {
  font-size: 12rem;
  font-family: "Courier New", Courier, monospace;
}

.display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.section {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  /* position: absolute;
  align-items: center; */
  /* gap: 20px; */
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition-Time);
}

.gameBoard {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  background-color: rgb(82, 74, 74);
  width: 600px;
  /* border: 2px solid rgb(199, 171, 171); */
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
  /* visibility: visible; */
  transition: all 0.3s;
}

.playerOneScore,
.playerTwoScore {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scoreOne,
.scoreTwo {
  font-size: 2rem;
  color: var(--font-color);
  transition: var(--transition-Time);
}

.menuDiv {
  transition: var(--transition-Time);
}

.winnerUi {
  margin-top: 50px;
  font-size: 6rem;
  color: var(--font-color);
  visibility: hidden;
  opacity: 0;
  transition: all var(--transition-Time);
}

.menuDiv,
.menuBtn {
  display: flex;
  /* justify-content: center; */
}

.menuBtn {
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 20px;
  padding: 10px;
  border: 2px solid rgb(15, 15, 15);
  transition: all 0.3s;
  /* opacity: 0; */
}

.startBtnDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 42%;
  top: 30%;
  width: 20%;
  gap: 20px;
  /* transition: 0.7s; */
}

.startBtn {
  font-size: 7rem;
  border-radius: 20px;
  padding: 30px;
  border: 4px solid rgb(10, 10, 10);
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  cursor: pointer;
  transition: 0.1s;
  /* background-color: rgb(61, 233, 147); */
}

.OpponentSelection {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 26%;
  top: 60%;
  width: 50%;
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

.x {
  color: rgb(135, 135, 252);
}

.o {
  color: rgb(248, 115, 115);
}

.startBtnDiv > first-child {
  color: rgb(131, 130, 130);
}

.cell:hover {
  border-left: none;
  border-top: none;
  transform: scale(0.9);
}

.startBtn:hover,
.PVP:hover,
.PVE:hover {
  transform: scale(1.05);
  color: ghostwhite;
  background-color: black;
  border: 4px solid rgb(255, 255, 255);
  transition: 0.1s;
}

.menuBtn:hover {
  transform: scale(1.05);
  color: ghostwhite;
  background-color: black;
  border: 2px solid rgb(255, 255, 255);
  transition: 0.1s;
}`, "",{"version":3,"sources":["webpack://./src/sass/style.scss"],"names":[],"mappings":"AAAA;EACI,uBAAA;EACA,uBAAA;AACJ;;AAEA;EACI,iCAAA;EACA,8CAAA;AACJ;;AAGA;EACI,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,wBAAA;AAAJ;;AAGA;EACI,iBAAA;EACA,wBAAA;AAAJ;;AAGA;EACI,gBAAA;EACA,8CAAA;AAAJ;;AAIA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AADJ;;AAIA;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,uBAAA;EACA;wBAAA;EAEA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,sCAAA;AADJ;;AAIA;EACI,aAAA;EACA,QAAA;EACA,oDAAA;EACA,iCAAA;EACA,YAAA;EACA,0CAAA;AADJ;;AAIA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,yBAAA;EACA,oBAAA;AADJ;;AAMA;;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;AAHJ;;AAMA;;EAEI,eAAA;EACA,wBAAA;EACA,kCAAA;AAHJ;;AAMA;EACI,kCAAA;AAHJ;;AAMA;EACI,gBAAA;EACA,eAAA;EACA,wBAAA;EACA,kBAAA;EACA,UAAA;EACA,sCAAA;AAHJ;;AAMA;;EAEI,aAAA;EACA,6BAAA;AAHJ;;AAMA;EACI,eAAA;EACA,8CAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,iCAAA;EACA,oBAAA;EACA,gBAAA;AAHJ;;AAMA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;AAHJ;;AAMA;EACI,eAAA;EACA,mBAAA;EACA,aAAA;EACA,iCAAA;EACA,8CAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,yCAAA;AAHJ;;AAMA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,sCAAA;AAHJ;;AAMA;;EAEI,eAAA;EACA,mBAAA;EACA,aAAA;EACA,iCAAA;EACA,8CAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,sCAAA;AAHJ;;AAQA;EACI,yBAAA;AALJ;;AAQA;EACI,yBAAA;AALJ;;AAQA;EACI,yBAAA;AALJ;;AAQA;EACI,iBAAA;EACA,gBAAA;EACA,qBAAA;AALJ;;AAQA;;;EAGI,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,oCAAA;EACA,gBAAA;AALJ;;AAQA;EACI,sBAAA;EACA,iBAAA;EACA,uBAAA;EACA,oCAAA;EACA,gBAAA;AALJ","sourcesContent":[":root {\r\n    --transition-Time: 0.6s;\r\n    --font-color: aliceblue;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(59, 58, 58);\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n\r\nh1 {\r\n    display: inline-flexbox;\r\n    text-align: center;\r\n    font-size: 4rem;\r\n    margin: 0;\r\n    color: var(--font-color);\r\n}\r\n\r\nh2 {\r\n    font-size: 2.5rem;\r\n    color: var(--font-color);\r\n}\r\n\r\nspan {\r\n    font-size: 12rem;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n\r\n.display {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 40px;\r\n}\r\n\r\n.section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    /* position: absolute;\r\n    align-items: center; */\r\n    /* gap: 20px; */\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all var(--transition-Time);\r\n}\r\n\r\n.gameBoard {\r\n    display: grid;\r\n    gap: 5px;\r\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\r\n    background-color: rgb(82, 74, 74);\r\n    width: 600px;\r\n    /* border: 2px solid rgb(199, 171, 171); */\r\n}\r\n\r\n.cell {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    font-size: 7rem;\r\n    height: 200px;\r\n    color: rgb(228, 72, 72);\r\n    opacity: 100;\r\n    /* visibility: visible; */\r\n    transition: all 0.3s;\r\n}\r\n\r\n\r\n\r\n.playerOneScore,\r\n.playerTwoScore {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.scoreOne,\r\n.scoreTwo {\r\n    font-size: 2rem;\r\n    color: var(--font-color);\r\n    transition: var(--transition-Time);\r\n}\r\n\r\n.menuDiv {\r\n    transition: var(--transition-Time);\r\n}\r\n\r\n.winnerUi {\r\n    margin-top: 50px;\r\n    font-size: 6rem;\r\n    color: var(--font-color);\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all var(--transition-Time);\r\n}\r\n\r\n.menuDiv,\r\n.menuBtn {\r\n    display: flex;\r\n    /* justify-content: center; */\r\n}\r\n\r\n.menuBtn {\r\n    cursor: pointer;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    border-radius: 20px;\r\n    padding: 10px;\r\n    border: 2px solid rgb(15, 15, 15);\r\n    transition: all 0.3s;\r\n    /* opacity: 0; */\r\n}\r\n\r\n.startBtnDiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    left: 42%;\r\n    top: 30%;\r\n    width: 20%;\r\n    gap: 20px;\r\n    /* transition: 0.7s; */\r\n}\r\n\r\n.startBtn {\r\n    font-size: 7rem;\r\n    border-radius: 20px;\r\n    padding: 30px;\r\n    border: 4px solid rgb(10, 10, 10);\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: 0.1s;\r\n    /* background-color: rgb(61, 233, 147); */\r\n}\r\n\r\n.OpponentSelection {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    left: 26%;\r\n    top: 60%;\r\n    width: 50%;\r\n    gap: 50px;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all var(--transition-Time);\r\n}\r\n\r\n.PVP,\r\n.PVE {\r\n    font-size: 3rem;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    border: 4px solid rgb(10, 10, 10);\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: 0.1s;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all var(--transition-Time);\r\n}\r\n\r\n\r\n\r\n.x {\r\n    color: rgb(135, 135, 252);\r\n}\r\n\r\n.o {\r\n    color: rgb(248, 115, 115);\r\n}\r\n\r\n.startBtnDiv>first-child {\r\n    color: rgb(131, 130, 130);\r\n}\r\n\r\n.cell:hover {\r\n    border-left: none;\r\n    border-top: none;\r\n    transform: scale(0.9);\r\n}\r\n\r\n.startBtn:hover,\r\n.PVP:hover,\r\n.PVE:hover {\r\n    transform: scale(1.05);\r\n    color: ghostwhite;\r\n    background-color: black;\r\n    border: 4px solid rgb(255, 255, 255);\r\n    transition: 0.1s;\r\n}\r\n\r\n.menuBtn:hover {\r\n    transform: scale(1.05);\r\n    color: ghostwhite;\r\n    background-color: black;\r\n    border: 2px solid rgb(255, 255, 255);\r\n    transition: 0.1s;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xyXG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRCdG5cIik7XHJcbmNvbnN0IHN0YXJ0QnRuRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydEJ0bkRpdlwiKTtcclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ0blwiKTtcclxuY29uc3QgbWVudURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudURpdlwiKTtcclxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VjdGlvblwiKTtcclxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcclxuY29uc3Qgc2NvcmVPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlT25lXCIpO1xyXG5jb25zdCBzY29yZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmVUd29cIik7XHJcbmNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKTtcclxuXHJcbmNvbnN0IHplcm90aENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjFcIik7XHJcbmNvbnN0IGZpcnN0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiMlwiKTtcclxuY29uc3Qgc2Vjb25kQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiM1wiKTtcclxuY29uc3QgdGhpcmRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCI0XCIpO1xyXG5jb25zdCBmb3VydGhDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCI1XCIpO1xyXG5jb25zdCBmaWZ0aENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjZcIik7XHJcbmNvbnN0IHNpeHRoQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiN1wiKTtcclxuY29uc3Qgc2V2ZW50aENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIjhcIik7XHJcbmNvbnN0IGVpZ2h0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiOVwiKTtcclxuXHJcbmNvbnN0IE9wcG9uZW50U2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5PcHBvbmVudFNlbGVjdGlvblwiKTtcclxuY29uc3QgUFZQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QVlBcIik7XHJcbmNvbnN0IFBWRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuUFZFXCIpO1xyXG5cclxuY29uc3QgR2FtZSA9IHtcclxuICBnYW1lQm9hcmQ6IFtcInhcIiwgXCJvXCJdLCAvLyBjaGFuZ2UgdGhpcyBvbiBQdlBcclxuICBzd2FwRWxlbWVudChhcnJheSkge1xyXG4gICAgLy8gdG8gc3dhcCB0aGUgdmFsdWUgdXNpbmcgZGVzdHJ1Y3RvclxyXG4gICAgW3RoaXMuZ2FtZUJvYXJkWzBdLCB0aGlzLmdhbWVCb2FyZFsxXV0gPSBbXHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkWzFdLFxyXG4gICAgICB0aGlzLmdhbWVCb2FyZFswXSxcclxuICAgIF07XHJcbiAgfSxcclxuICBwbGF5ZXJTaWduQXJyYXk6IFtdLFxyXG4gIGlkU2lnbkFycmF5OiBbXSxcclxuICByYW5kb21OdW1BcnJheTogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLFxyXG4gIGNlbGxQb3NpdGlvbjogMCxcclxuICByb3VuZHNQbGF5ZWQ6IDAsXHJcbiAgcGxheWVyT25lU2NvcmU6IDAsXHJcbiAgcGxheWVyVHdvU2NvcmU6IDAsXHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gIHJldHVybiB7IG5hbWUgfTtcclxufTtcclxuXHJcbmNvbnN0IHBsYXllck9uZSA9IGNyZWF0ZVBsYXllcihcIlBsYXllciBPbmVcIik7XHJcbmNvbnN0IHBsYXllclR3byA9IGNyZWF0ZVBsYXllcihcIlBsYXllciBUd29cIik7XHJcbmxldCBzaWduQXJyYXk7IC8vIEdhbWUuZ2FtZUJvYXJkXHJcbmxldCBpc1N3aXRjaFNpZ24gPSBmYWxzZTsgLy8gQ2hlY2sgcGxheWVyIHN3aXRjaFxyXG5sZXQgaXNEcmF3ID0gZmFsc2U7IC8vIENoZWNrIGZvciBkcmF3XHJcbmxldCBpc092ZXIgPSBmYWxzZTsgLy8gTWFudWFsIEdhbWUgcmVzdGFydFxyXG5jb25zdCB3aW5uZXJVaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbndpbm5lclVpLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJVaVwiKTtcclxuc2VjdGlvbi5hcHBlbmQod2lubmVyVWkpO1xyXG4vLyB3aW5uZXJVaS50ZXh0Q29udGVudCA9IGB3aW5uZXIgaXMgdGhlIFdpbm5lcmA7XHJcbi8vIHdpbm5lclVpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuLy8gd2lubmVyVWkuc3R5bGUub3BhY2l0eSA9IDEwMDtcclxuXHJcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIE9wcG9uZW50U2VsZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICBPcHBvbmVudFNlbGVjdGlvbi5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICBQVlAuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIFBWUC5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxuICBQVkUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIFBWRS5zdHlsZS5vcGFjaXR5ID0gXCIxMDBcIjtcclxufSk7XHJcblxyXG5QVlAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgU3RhcnRCdG5TdHlsaW5nKCk7XHJcbiAgY2VsbC5mb3JFYWNoKChjZWxscykgPT4ge1xyXG4gICAgY2VsbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBsYXlHYW1lUFZQLCB7IG9uY2U6IHRydWUgfSk7IC8vIFRoaXJkIFBhcmFtZXRlciAtIE1ha2VzIHNlbGVjdGlvbiBvbmNlIHBlciBwbGF5ZXJcclxuICAgIG1lbnVCdG5QdlAoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gUGxheUdhbWVQVlAoZSkge1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfMGAsdGhpcykpOyAvLyB0aGlzID0gY2VsbHNcclxuICAgIHNpZ25BcnJheSA9IEdhbWUuZ2FtZUJvYXJkOyAvLyB0byBtYWtlIHBsYXllck9uZSBzZWxlY3QgXCJ4XCIgYWZ0ZXIgcmVzdGFydFxyXG4gICAgR2FtZS5yb3VuZHNQbGF5ZWQrKzsgLy8gZm9yIGRyYXcgY29uZGl0aW9uXHJcbiAgICBHYW1lLmNlbGxQb3NpdGlvbiA9IGUudGFyZ2V0LmlkOyAvLyBpZCBvZiB0aGUgaHRtbCBlbGVtZW50XHJcbiAgICBHYW1lLmNlbGxQb3NpdGlvbiA9ICtHYW1lLmNlbGxQb3NpdGlvbjsgLy8gKyBjb252ZXJ0cyB0aGUgc3RyaW5nIHRvIGludFxyXG4gICAgR2FtZS5pZFNpZ25BcnJheVtHYW1lLmNlbGxQb3NpdGlvbl0gPSBHYW1lLmNlbGxQb3NpdGlvbjsgLy8gaW5zZXJ0IHRoZSB2YWx1ZSB0byBhcnJheSBhdCBzcGVjaWZpYyBwb3NpdGlvblxyXG5cclxuICAgIC8vIFBsYXllciBTd2l0Y2hpbmdcclxuICAgIGlmICghaXNTd2l0Y2hTaWduKSB7XHJcbiAgICAgIC8vIFBsYXllciBPbmVcclxuICAgICAgaXNTd2l0Y2hTaWduID0gdHJ1ZTtcclxuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHNpZ25BcnJheVswXTsgLy8gc2VsZWN0IHRoZSBmaXJzdCBzaWduIGl0ZW0gYW5kIHRoZW4gZmxpcHMgaXRcclxuICAgICAgcGxheWVyT25lLnNpZ24gPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgICBHYW1lLnBsYXllclNpZ25BcnJheVtHYW1lLmNlbGxQb3NpdGlvbl0gPSBwbGF5ZXJPbmUuc2lnbjsgLy8gaW5zZXJ0IHRoZSB2YWx1ZSB0byBhcnJheSBhdCBzcGVjaWZpYyBwb3NpdGlvblxyXG4gICAgICBnYW1lTG9naWMocGxheWVyT25lLCBzY29yZU9uZSk7XHJcbiAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBcInJnYig5MCwgOTAsIDIzMClcIjtcclxuXHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGVkZDFjMjExXzFgLFwiRmlyc3QgUGxheWVyIFBvc2l0aW9uXCIpKTtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfMmAsR2FtZS5wbGF5ZXJTaWduQXJyYXkpKTtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyhcclxuICAgICAgICAuLi5vb19vbyhgZWRkMWMyMTFfM2AsXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUExheWVyIE9uZSBcIilcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzU3dpdGNoU2lnbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gc2lnbkFycmF5WzFdO1xyXG4gICAgICBwbGF5ZXJUd28uc2lnbiA9IHRoaXMudGV4dENvbnRlbnQ7XHJcbiAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5W0dhbWUuY2VsbFBvc2l0aW9uXSA9IHBsYXllclR3by5zaWduO1xyXG4gICAgICBnYW1lTG9naWMocGxheWVyVHdvLCBzY29yZVR3byk7XHJcbiAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBcInJnYigyMjgsIDcyLCA3MilcIjtcclxuXHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGVkZDFjMjExXzRgLFwiU2Vjb25kIFBsYXllciBQb3NpdGlvblwiKSk7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGVkZDFjMjExXzVgLEdhbWUucGxheWVyU2lnbkFycmF5KSk7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coXHJcbiAgICAgICAgLi4ub29fb28oYGVkZDFjMjExXzZgLFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYXllciBUd29cIilcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVMb2dpYyhwbGF5ZXIsIHBsYXllclVJKSB7XHJcbiAgICBpZiAoIWlzRHJhdykge1xyXG4gICAgICAvLyBIb3Jpem9udGFsIENoYW5jZVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbMV0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbMl0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbM10gPT09IHBsYXllci5zaWduXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgcm91bmRTY29yZShwbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgICByZXNldExldmVsKHBsYXllcik7XHJcbiAgICAgICAgV2lubmVyQ29sb3JDaGFuZ2UoemVyb3RoQ2VsbCwgZmlyc3RDZWxsLCBzZWNvbmRDZWxsKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs0XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs1XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs2XSA9PT0gcGxheWVyLnNpZ25cclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICByb3VuZFNjb3JlKHBsYXllciwgcGxheWVyVUkpO1xyXG4gICAgICAgIHJlc2V0TGV2ZWwocGxheWVyKTtcclxuICAgICAgICBXaW5uZXJDb2xvckNoYW5nZSh0aGlyZENlbGwsIGZvdXJ0aENlbGwsIGZpZnRoQ2VsbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbN10gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbOF0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbOV0gPT09IHBsYXllci5zaWduXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgcm91bmRTY29yZShwbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgICByZXNldExldmVsKHBsYXllcik7XHJcbiAgICAgICAgV2lubmVyQ29sb3JDaGFuZ2Uoc2l4dGhDZWxsLCBzZXZlbnRoQ2VsbCwgZWlnaHRDZWxsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVmVydGljYWwgQ2hhbmNlXHJcbiAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzFdID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzRdID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzddID09PSBwbGF5ZXIuc2lnblxyXG4gICAgICApIHtcclxuICAgICAgICBpc0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIHJvdW5kU2NvcmUocGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgICAgcmVzZXRMZXZlbChwbGF5ZXIpO1xyXG4gICAgICAgIFdpbm5lckNvbG9yQ2hhbmdlKHplcm90aENlbGwsIHRoaXJkQ2VsbCwgc2l4dGhDZWxsKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVsyXSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs1XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs4XSA9PT0gcGxheWVyLnNpZ25cclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICByb3VuZFNjb3JlKHBsYXllciwgcGxheWVyVUkpO1xyXG4gICAgICAgIHJlc2V0TGV2ZWwocGxheWVyKTtcclxuICAgICAgICBXaW5uZXJDb2xvckNoYW5nZShmaXJzdENlbGwsIGZvdXJ0aENlbGwsIHNldmVudGhDZWxsKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVszXSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs2XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs5XSA9PT0gcGxheWVyLnNpZ25cclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICByb3VuZFNjb3JlKHBsYXllciwgcGxheWVyVUkpO1xyXG4gICAgICAgIHJlc2V0TGV2ZWwocGxheWVyKTtcclxuICAgICAgICBXaW5uZXJDb2xvckNoYW5nZShzZWNvbmRDZWxsLCBmaWZ0aENlbGwsIGVpZ2h0Q2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERpYWdvbmFsIENoYW5jZVxyXG4gICAgICBlbHNlIGlmIChcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVsxXSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs1XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs5XSA9PT0gcGxheWVyLnNpZ25cclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICByb3VuZFNjb3JlKHBsYXllciwgcGxheWVyVUkpO1xyXG4gICAgICAgIHJlc2V0TGV2ZWwocGxheWVyKTtcclxuICAgICAgICBXaW5uZXJDb2xvckNoYW5nZSh6ZXJvdGhDZWxsLCBmb3VydGhDZWxsLCBlaWdodENlbGwpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzddID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzVdID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzNdID09PSBwbGF5ZXIuc2lnblxyXG4gICAgICApIHtcclxuICAgICAgICBpc0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIHJvdW5kU2NvcmUocGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgICAgcmVzZXRMZXZlbChwbGF5ZXIpO1xyXG4gICAgICAgIFdpbm5lckNvbG9yQ2hhbmdlKHNpeHRoQ2VsbCwgZm91cnRoQ2VsbCwgc2Vjb25kQ2VsbCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gRHJhd1xyXG4gICAgICBlbHNlIGlmIChHYW1lLnJvdW5kc1BsYXllZCA9PT0gOSkge1xyXG4gICAgICAgIGlzRHJhdyA9IGZhbHNlO1xyXG4gICAgICAgIHJlc2V0TGV2ZWxEcmF3KHBsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0TGV2ZWwocGxheWVyKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgICAgY2VsbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBsYXlHYW1lUFZQLCB7IG9uY2U6IHRydWUgfSk7IC8vIHN0b3BzIHRoZSBnYW1lXHJcbiAgICAgIHdpbm5lclVpLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IGlzIHRoZSBXaW5uZXJgO1xyXG4gICAgICB3aW5uZXJVaS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIHdpbm5lclVpLnN0eWxlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgIC8vIHJlc3RhcnRMZXZlbE1hbnVhbGx5KCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KHJlc2V0LCAxMzAwKTsgLy8gZHluYW1pYyByZXN0YXJ0XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldExldmVsRHJhdygpIHtcclxuICAgIGZvciAoY29uc3QgY2VsbHMgb2YgY2VsbCkge1xyXG4gICAgICBjZWxscy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUGxheUdhbWVQVlAsIHsgb25jZTogdHJ1ZSB9KTsgLy8gc3RvcHMgdGhlIGdhbWVcclxuICAgICAgd2lubmVyVWkudGV4dENvbnRlbnQgPSBgTGV2ZWwgRW5kZWQgaW4gYSBEcmF3YDtcclxuICAgICAgd2lubmVyVWkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICB3aW5uZXJVaS5zdHlsZS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICAvLyByZXN0YXJ0TGV2ZWxNYW51YWxseSgpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChyZXNldCwgMTMwMCk7IC8vIGR5bmFtaWMgcmVzdGFydFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgICBjZWxscy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUGxheUdhbWVQVlAsIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgY2VsbHMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICBHYW1lLnJvdW5kc1BsYXllZCA9IDA7XHJcbiAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5ID0gW107XHJcbiAgICAgIEdhbWUuaWRTaWduQXJyYXkgPSBbXTtcclxuICAgICAgaXNTd2l0Y2hTaWduID0gZmFsc2U7XHJcbiAgICAgIGlzRHJhdyA9IGZhbHNlO1xyXG4gICAgICBHYW1lLmdhbWVCb2FyZCA9IFtcInhcIiwgXCJvXCJdO1xyXG4gICAgICAvLyB3aW5uZXJVaS50ZXh0Q29udGVudCA9IFwiXCI7IC8vIHRyYW5zaXRpb24gd29uJ3Qgd29ya1xyXG5cclxuICAgICAgemVyb3RoQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIGZpcnN0Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHNlY29uZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICB0aGlyZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBmb3VydGhDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgZmlmdGhDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgc2l4dGhDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgc2V2ZW50aENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBlaWdodENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG5cclxuICAgICAgc2NvcmVPbmUuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHNjb3JlT25lLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxuICAgICAgc2NvcmVUd28uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHNjb3JlVHdvLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxuXHJcbiAgICAgIHdpbm5lclVpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICB3aW5uZXJVaS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfN2AsR2FtZS5wbGF5ZXJTaWduQXJyYXkpKTtcclxuXHJcbiAgICAgIGNlbGxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQbGF5R2FtZVBWUCwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUJ0blB2UCgpIHtcclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHN0YXJ0QnRuRGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgc3RhcnRCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICBmb3IgKGNvbnN0IHNwYW5zIG9mIHNwYW4pIHtcclxuICAgICAgICAvLyBzdGFydEJ1dHRvbiBTdHlsaW5nXHJcbiAgICAgICAgc3BhbnMuc3R5bGUub3BhY2l0eSA9IDEwMDtcclxuICAgICAgfVxyXG4gICAgICBzZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICBzZWN0aW9uLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICByZXNldCgpO1xyXG4gICAgICByZXN0YXJ0R2FtZSgpO1xyXG4gICAgICBpZiAoUFZQKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxscyBvZiBjZWxsKSB7XHJcbiAgICAgICAgICBjZWxscy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUGxheUdhbWVQVlAsIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5QVkUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgU3RhcnRCdG5TdHlsaW5nKCk7XHJcbiAgY2VsbC5mb3JFYWNoKChjZWxscykgPT4ge1xyXG4gICAgY2VsbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlHYW1lUFZFLCB7IG9uY2U6IHRydWUgfSk7IC8vIFRoaXJkIFBhcmFtZXRlciAtIE1ha2VzIHNlbGVjdGlvbiBvbmNlIHBlciBwbGF5ZXJcclxuICAgIG1lbnVCdG5QdkUoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gcGxheUdhbWVQVkUoZSkge1xyXG4gICAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfOGAsdGhpcykpO1xyXG5cclxuICAgICAgc2lnbkFycmF5ID0gR2FtZS5nYW1lQm9hcmQ7XHJcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVBsYXllciBPbmUgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfOWAsXCJQbGF5ZXIgT25lIC0tLS0tLS0tLS0tLS1cIikpO1xyXG4gICAgICBHYW1lLmNlbGxQb3NpdGlvbiA9IGUudGFyZ2V0LmlkOyAvLyBpZCBvZiB0aGUgaHRtbCBlbGVtZW50XHJcbiAgICAgIEdhbWUuY2VsbFBvc2l0aW9uID0gK0dhbWUuY2VsbFBvc2l0aW9uOyAvLyArIGNvbnZlcnRzIHRoZSBzdHJpbmcgdG8gaW50XHJcbiAgICAgIGNvbnN0IGluZGV4UGxheWVyID0gR2FtZS5yYW5kb21OdW1BcnJheS5pbmRleE9mKEdhbWUuY2VsbFBvc2l0aW9uKTtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfMTBgLGluZGV4UGxheWVyKSk7XHJcbiAgICAgIGlmIChpbmRleFBsYXllciA+IC0xKSB7XHJcbiAgICAgICAgR2FtZS5yYW5kb21OdW1BcnJheS5zcGxpY2UoaW5kZXhQbGF5ZXIsIDEpOyAvLyByZW1vdmVzIHRoZSBudW1iZXIsIHNvIHRoYXQgdGhlIG51bWJlciB3b24ndCByZXBlYXQgb3IgYmUgb3ZlcndyaXR0ZW4gYnkgQUlcclxuICAgICAgfVxyXG4gICAgICBHYW1lLnJvdW5kc1BsYXllZCsrOyAvLyBmb3IgZHJhdyBjb25kaXRpb25cclxuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHNpZ25BcnJheVswXTsgLy8gc2VsZWN0IHRoZSBmaXJzdCBzaWduIGl0ZW1cclxuICAgICAgcGxheWVyT25lLnNpZ24gPSB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgICBHYW1lLnBsYXllclNpZ25BcnJheVtHYW1lLmNlbGxQb3NpdGlvbl0gPSBwbGF5ZXJPbmUuc2lnbjsgLy8gaW5zZXJ0IHRoZSB2YWx1ZSB0byBhcnJheSBhdCBzcGVjaWZpYyBwb3NpdGlvblxyXG4gICAgICBnYW1lTG9naWNQVkUocGxheWVyT25lLCBzY29yZU9uZSk7XHJcbiAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBcInJnYig5MCwgOTAsIDIzMClcIjtcclxuICAgICAgLy8gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfMTFgLFwiQUkgLS0tLS0tLS0tLS0tLS0tLVwiKSk7XHJcbiAgICAgIGlmIChHYW1lLnJvdW5kc1BsYXllZCA8IDUpIHtcclxuICAgICAgICAvLyBzdG9wIHJhbmRvbU51bVBvc2l0aW9uIGNyZWF0aW5nIGFmdGVyIGdhbWUgZHJhd1xyXG4gICAgICAgIC8vIE5vbiBEdXBsaWNhdGUgUmFuZG9tTnVtYmVyXHJcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtUG9zaXRpb24gPVxyXG4gICAgICAgICAgR2FtZS5yYW5kb21OdW1BcnJheVtcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogR2FtZS5yYW5kb21OdW1BcnJheS5sZW5ndGgpXHJcbiAgICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGluZGV4QUkgPSBHYW1lLnJhbmRvbU51bUFycmF5LmluZGV4T2YocmFuZG9tTnVtUG9zaXRpb24pO1xyXG4gICAgICAgIGlmIChpbmRleEFJID4gLTEpIHtcclxuICAgICAgICAgIEdhbWUucmFuZG9tTnVtQXJyYXkuc3BsaWNlKGluZGV4QUksIDEpOyAvLyByZW1vdmVzIGEgbnVtYmVyIGZyb20gdGhlIGFycmF5LCBzbyB0aGUgcmFuZG9tIG51bWJlciB3b24ndCByZXBlYXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IEFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgIGAuY2VsbDpudGgtY2hpbGQoJHtyYW5kb21OdW1Qb3NpdGlvbn0pYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfMTJgLGBUaGlzIGlzIEFJIDogJHtyYW5kb21OdW1Qb3NpdGlvbn1gKSk7XHJcbiAgICAgICAgbGV0IEFJQ2VsbFBvc2l0aW9uID0gQUkuaWQ7XHJcbiAgICAgICAgQUkudGV4dENvbnRlbnQgPSBzaWduQXJyYXlbMV07XHJcbiAgICAgICAgQUlDZWxsUG9zaXRpb24gPSArQUlDZWxsUG9zaXRpb247XHJcbiAgICAgICAgcGxheWVyVHdvLnNpZ24gPSBBSS50ZXh0Q29udGVudDtcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVtBSUNlbGxQb3NpdGlvbl0gPSBwbGF5ZXJUd28uc2lnbjsgLy8gc3RvcCBvdmVyd3JpdGluZyBhbHJlYWR5IHNlbGVjdGVkIGNlbGxQb3NpdGlvblxyXG4gICAgICAgIGdhbWVMb2dpY1BWRShwbGF5ZXJUd28sIHNjb3JlVHdvKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgcGxheWVyVHdvLnNpZ24gaXMgJHtwbGF5ZXJUd28uc2lnbn1gKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzaWduQXJyYXkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmFuZG9tTnVtUG9zaXRpb24pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEdhbWUucmFuZG9tTnVtQXJyYXkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEdhbWUucGxheWVyU2lnbkFycmF5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGVkZDFjMjExXzEzYCxHYW1lLnBsYXllclNpZ25BcnJheSkpO1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL2NvbnNvbGUubG9nKC4uLm9vX29vKGBlZGQxYzIxMV8xNGAsYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJHtHYW1lLnJvdW5kc1BsYXllZH1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lTG9naWNQVkUocGxheWVyLCBwbGF5ZXJVSSkge1xyXG4gICAgaWYgKCFpc0RyYXcpIHtcclxuICAgICAgLy8gSG9yaXpvbnRhbCBDaGFuY2VcclxuICAgICAgaWYgKFxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzFdID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzJdID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzNdID09PSBwbGF5ZXIuc2lnblxyXG4gICAgICApIHtcclxuICAgICAgICBpc0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIHJvdW5kU2NvcmUocGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgICAgcmVzZXRMZXZlbFBWRShwbGF5ZXIpO1xyXG4gICAgICAgIFdpbm5lckNvbG9yQ2hhbmdlKHplcm90aENlbGwsIGZpcnN0Q2VsbCwgc2Vjb25kQ2VsbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbNF0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbNV0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbNl0gPT09IHBsYXllci5zaWduXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgcm91bmRTY29yZShwbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgICByZXNldExldmVsUFZFKHBsYXllcik7XHJcbiAgICAgICAgV2lubmVyQ29sb3JDaGFuZ2UodGhpcmRDZWxsLCBmb3VydGhDZWxsLCBmaWZ0aENlbGwpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzddID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzhdID09PSBwbGF5ZXIuc2lnbiAmJlxyXG4gICAgICAgIEdhbWUucGxheWVyU2lnbkFycmF5WzldID09PSBwbGF5ZXIuc2lnblxyXG4gICAgICApIHtcclxuICAgICAgICBpc0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIHJvdW5kU2NvcmUocGxheWVyLCBwbGF5ZXJVSSk7XHJcbiAgICAgICAgcmVzZXRMZXZlbFBWRShwbGF5ZXIpO1xyXG4gICAgICAgIFdpbm5lckNvbG9yQ2hhbmdlKHNpeHRoQ2VsbCwgc2V2ZW50aENlbGwsIGVpZ2h0Q2VsbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFZlcnRpY2FsIENoYW5jZVxyXG4gICAgICBlbHNlIGlmIChcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVsxXSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs0XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs3XSA9PT0gcGxheWVyLnNpZ25cclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICByb3VuZFNjb3JlKHBsYXllciwgcGxheWVyVUkpO1xyXG4gICAgICAgIHJlc2V0TGV2ZWxQVkUocGxheWVyKTtcclxuICAgICAgICBXaW5uZXJDb2xvckNoYW5nZSh6ZXJvdGhDZWxsLCB0aGlyZENlbGwsIHNpeHRoQ2VsbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbMl0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbNV0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbOF0gPT09IHBsYXllci5zaWduXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgcm91bmRTY29yZShwbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgICByZXNldExldmVsUFZFKHBsYXllcik7XHJcbiAgICAgICAgV2lubmVyQ29sb3JDaGFuZ2UoZmlyc3RDZWxsLCBmb3VydGhDZWxsLCBzZXZlbnRoQ2VsbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbM10gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbNl0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbOV0gPT09IHBsYXllci5zaWduXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgcm91bmRTY29yZShwbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgICByZXNldExldmVsUFZFKHBsYXllcik7XHJcbiAgICAgICAgV2lubmVyQ29sb3JDaGFuZ2Uoc2Vjb25kQ2VsbCwgZmlmdGhDZWxsLCBlaWdodENlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEaWFnb25hbCBDaGFuY2VcclxuICAgICAgZWxzZSBpZiAoXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbMV0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbNV0gPT09IHBsYXllci5zaWduICYmXHJcbiAgICAgICAgR2FtZS5wbGF5ZXJTaWduQXJyYXlbOV0gPT09IHBsYXllci5zaWduXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgcm91bmRTY29yZShwbGF5ZXIsIHBsYXllclVJKTtcclxuICAgICAgICByZXNldExldmVsUFZFKHBsYXllcik7XHJcbiAgICAgICAgV2lubmVyQ29sb3JDaGFuZ2UoemVyb3RoQ2VsbCwgZm91cnRoQ2VsbCwgZWlnaHRDZWxsKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs3XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVs1XSA9PT0gcGxheWVyLnNpZ24gJiZcclxuICAgICAgICBHYW1lLnBsYXllclNpZ25BcnJheVszXSA9PT0gcGxheWVyLnNpZ25cclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNEcmF3ID0gdHJ1ZTtcclxuICAgICAgICByb3VuZFNjb3JlKHBsYXllciwgcGxheWVyVUkpO1xyXG4gICAgICAgIHJlc2V0TGV2ZWxQVkUocGxheWVyKTtcclxuICAgICAgICBXaW5uZXJDb2xvckNoYW5nZShzaXh0aENlbGwsIGZvdXJ0aENlbGwsIHNlY29uZENlbGwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEcmF3XHJcbiAgICAgIGVsc2UgaWYgKEdhbWUucm91bmRzUGxheWVkID09PSA1KSB7XHJcbiAgICAgICAgaXNEcmF3ID0gZmFsc2U7XHJcbiAgICAgICAgRHJhd0xldmVsUFZFKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0TGV2ZWxQVkUocGxheWVyKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgICAgY2VsbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlHYW1lUFZFLCB7IG9uY2U6IHRydWUgfSk7IC8vIHN0b3BzIHRoZSBnYW1lXHJcbiAgICAgIHdpbm5lclVpLnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IGlzIHRoZSBXaW5uZXJgO1xyXG4gICAgICB3aW5uZXJVaS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIHdpbm5lclVpLnN0eWxlLm9wYWNpdHkgPSAxMDA7XHJcbiAgICAgIC8vIHJlc3RhcnRMZXZlbE1hbnVhbGx5KCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KHJlc2V0UFZFLCAxMzAwKTsgLy8gZHluYW1pYyByZXN0YXJ0XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEcmF3TGV2ZWxQVkUoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgICAgY2VsbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlHYW1lUFZFLCB7IG9uY2U6IHRydWUgfSk7IC8vIHN0b3BzIHRoZSBnYW1lXHJcbiAgICAgIHdpbm5lclVpLnRleHRDb250ZW50ID0gYExldmVsIEVuZGVkIGluIGEgRHJhd2A7XHJcbiAgICAgIHdpbm5lclVpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgd2lubmVyVWkuc3R5bGUub3BhY2l0eSA9IDEwMDtcclxuICAgICAgLy8gcmVzdGFydExldmVsTWFudWFsbHkoKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQocmVzZXRQVkUsIDEzMDApOyAvLyBkeW5hbWljIHJlc3RhcnRcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0UFZFKCkge1xyXG4gICAgZm9yIChjb25zdCBjZWxscyBvZiBjZWxsKSB7XHJcbiAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgICAgY2VsbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlHYW1lUFZFLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgIGNlbGxzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgR2FtZS5yb3VuZHNQbGF5ZWQgPSAwO1xyXG4gICAgICBHYW1lLnBsYXllclNpZ25BcnJheSA9IFtdO1xyXG4gICAgICBHYW1lLmlkU2lnbkFycmF5ID0gW107XHJcbiAgICAgIEdhbWUucmFuZG9tTnVtQXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgICAgIGlzU3dpdGNoU2lnbiA9IGZhbHNlO1xyXG4gICAgICBpc0RyYXcgPSBmYWxzZTtcclxuICAgICAgLy8gd2lubmVyVWkudGV4dENvbnRlbnQgPSBcIlwiOyAvLyB0cmFuc2l0aW9uIHdvbid0IHdvcmtcclxuXHJcbiAgICAgIHplcm90aENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBmaXJzdENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBzZWNvbmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgdGhpcmRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgZm91cnRoQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIGZpZnRoQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHNpeHRoQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHNldmVudGhDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgZWlnaHRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuXHJcbiAgICAgIGNlbGwuZm9yRWFjaCgoY2VsbHMpID0+IHtcclxuICAgICAgICBjZWxscy5zdHlsZS5jb2xvciA9IFwicmdiKDIyOCwgNzIsIDcyKVwiO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNjb3JlT25lLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBzY29yZU9uZS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbiAgICAgIHNjb3JlVHdvLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBzY29yZVR3by5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcblxyXG4gICAgICB3aW5uZXJVaS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgd2lubmVyVWkuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGVkZDFjMjExXzE1YCxHYW1lLnBsYXllclNpZ25BcnJheSkpO1xyXG5cclxuICAgICAgY2VsbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlHYW1lUFZFLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51QnRuUHZFKCkge1xyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgc3RhcnRCdG5EaXYuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICBzdGFydEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICAgIGZvciAoY29uc3Qgc3BhbnMgb2Ygc3Bhbikge1xyXG4gICAgICAgIC8vIHN0YXJ0QnV0dG9uIFN0eWxpbmdcclxuICAgICAgICBzcGFucy5zdHlsZS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgICB9XHJcbiAgICAgIHNlY3Rpb24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgIHNlY3Rpb24uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIHNlY3Rpb24uc3R5bGUudHJhbnNpdGlvbiA9IFwiMC4xcyAhaW1wb3J0YW50XCI7XHJcbiAgICAgIHJlc2V0UFZFKCk7XHJcbiAgICAgIHJlc3RhcnRHYW1lKCk7XHJcbiAgICAgIGlmIChQVlApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgICAgICAgIGNlbGxzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5R2FtZVBWRSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vLyAvLS0tLS0tLS0tQ29tbW9uIEZ1bmN0aW9uLy8tLS0tLS0tLS1cclxuZnVuY3Rpb24gU3RhcnRCdG5TdHlsaW5nKCkge1xyXG4gIHN0YXJ0QnRuRGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gIHN0YXJ0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gIGZvciAoY29uc3Qgc3BhbnMgb2Ygc3Bhbikge1xyXG4gICAgLy8gc3RhcnRCdXR0b24gU3R5bGluZ1xyXG4gICAgc3BhbnMuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgfVxyXG4gIE9wcG9uZW50U2VsZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gIE9wcG9uZW50U2VsZWN0aW9uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICBQVlAuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgUFZQLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICBQVkUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgUFZFLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICBzZWN0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICBzZWN0aW9uLnN0eWxlLm9wYWNpdHkgPSAxMDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdW5kU2NvcmUocGxheWVyLCBwbGF5ZXJVSSkge1xyXG4gIGlmIChwbGF5ZXIgPT09IHBsYXllck9uZSkge1xyXG4gICAgR2FtZS5wbGF5ZXJPbmVTY29yZSsrO1xyXG4gICAgcGxheWVyVUkudGV4dENvbnRlbnQgPSBHYW1lLnBsYXllck9uZVNjb3JlO1xyXG4gICAgc2NvcmVPbmUuc3R5bGUuY29sb3IgPSBcInNwcmluZ2dyZWVuXCI7XHJcbiAgICBzY29yZU9uZS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDMuNSlcIjtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYGVkZDFjMjExXzE2YCxgUGxheWVyT25lOiAke0dhbWUucGxheWVyT25lU2NvcmV9IGApKTtcclxuICB9IGVsc2UgaWYgKHBsYXllciA9PT0gcGxheWVyVHdvKSB7XHJcbiAgICBHYW1lLnBsYXllclR3b1Njb3JlKys7XHJcbiAgICBwbGF5ZXJVSS50ZXh0Q29udGVudCA9IEdhbWUucGxheWVyVHdvU2NvcmU7XHJcbiAgICBzY29yZVR3by5zdHlsZS5jb2xvciA9IFwic3ByaW5nZ3JlZW5cIjtcclxuICAgIHNjb3JlVHdvLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMy41KVwiO1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgZWRkMWMyMTFfMTdgLGBQbGF5ZXJUd286ICR7R2FtZS5wbGF5ZXJUd29TY29yZX0gYCkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gV2lubmVyQ29sb3JDaGFuZ2UoYSwgYiwgYykge1xyXG4gIGEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTg0LCAyMjgsIDE0OClcIjtcclxuICBiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDE4NCwgMjI4LCAxNDgpXCI7XHJcbiAgYy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxODQsIDIyOCwgMTQ4KVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcclxuICBzY29yZU9uZS50ZXh0Q29udGVudCA9IDA7XHJcbiAgc2NvcmVUd28udGV4dENvbnRlbnQgPSAwO1xyXG4gIEdhbWUucGxheWVyT25lU2NvcmUgPSAwO1xyXG4gIEdhbWUucGxheWVyVHdvU2NvcmUgPSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0TGV2ZWxNYW51YWxseSgpIHtcclxuICBmb3IgKGNvbnN0IGNlbGxzIG9mIGNlbGwpIHtcclxuICAgIGlzT3ZlciA9IGZhbHNlOyAvLyByZXNldCBHYW1lIE92ZXIgdG8gZmFsc2UgICAgIC8vIG1hbnVhbCByZXN0YXJ0XHJcbiAgICBjZWxscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKCFpc092ZXIpIHtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIGlzT3ZlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVHJhaWwgQW5kIEVycm9yIC8vXHJcbi8vIGxldCBuaWNlZWVlID0gWzEsIDIsIDMsIDQsIDVdO1xyXG4vLyBsZXQgc29pY2UgPSBuaWNlZWVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpXTtcclxuLy8gY29uc29sZS5sb2coc29pY2UpO1xyXG5cclxuLy8gZnVuY3Rpb24gRGlzcGxheVNpZ24oKSB7XHJcbi8vICAgICBmb3IgKGxldCBjZWxscyBvZiBjZWxsKSB7XHJcbi8vICAgICAgICAgY2VsbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4vLyAgICAgICAgICAgICBpZiAoIWlzU3dpdGNoU2lnbikge1xyXG4vLyAgICAgICAgICAgICAgICAgaXNTd2l0Y2hTaWduID0gdHJ1ZVxyXG4vLyAgICAgICAgICAgICAgICAgR2FtZS5zd2FwRWxlbWVudChzaWduQXJyYXkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY2VsbHMudGV4dENvbnRlbnQgPSBzaWduQXJyYXlbMF07XHJcbi8vICAgICAgICAgICAgICAgICBwbGF5ZXJPbmUuc2lnbiA9IGNlbGxzLnRleHRDb250ZW50O1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBQbGF5ZXJcIik7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBlbHNlIGlmIChpc1N3aXRjaFNpZ24pIHtcclxuLy8gICAgICAgICAgICAgICAgIGlzU3dpdGNoU2lnbiA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICAgICAgR2FtZS5zd2FwRWxlbWVudChzaWduQXJyYXkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY2VsbHMudGV4dENvbnRlbnQgPSBzaWduQXJyYXlbMF07XHJcbi8vICAgICAgICAgICAgICAgICBwbGF5ZXJUd28uc2lnbiA9IGNlbGxzLnRleHRDb250ZW50O1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWNvbmQgUGxheWVyXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBQbGF5ZXIgU3dhcCBVc2luZyBEZXN0cnVjdGluZ1xyXG5cclxuLy8gY29uc3QgZ2FtZUJvYXJkID0gW1wieFwiLCBcIm9cIiwgXCJ4XCIsIFwib1wiXTtcclxuLy8gICAgIGlmIChwbGF5ZXJUd28pIHtcclxuLy8gICAgICAgICAvLyBzd2l0Y2hQbGF5ZXIoKVxyXG4vLyAgICAgICAgIGVhY2hQaWVjZXMudGV4dENvbnRlbnQgPSBzaWduWzFdO1xyXG4vLyAgICAgICAgIHBsYXllclR3by50ZXh0Q29udGVudCA9IHNpZ24udGV4dENvbnRlbnQ7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYFRoZSBTaWduIGlzOiR7IHNpZ24gfSBgKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJUd28pO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgZWFjaFBpZWNlcy50ZXh0Q29udGVudCA9IHNpZ25bMF07XHJcbi8vICAgICAgICAgcGxheWVyT25lLnRleHRDb250ZW50ID0gc2lnbi50ZXh0Q29udGVudDtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJPbmUpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gUGxheWVyIFN3aXRjaFxyXG5cclxuLy8gaWYgKCFpc0NsaWNrZWQpIHtcclxuLy8gICAgIGlzQ2xpY2tlZCA9IHRydWU7XHJcbi8vIH1cclxuLy8gZWxzZSB7XHJcbi8vICAgICBpc0NsaWNrZWQgPSBmYWxzZTtcclxuLy8gICAgIGNvbnNvbGUubG9nXHJcbi8vIH1cclxuXHJcbi8vIGZvciAobGV0IGVhY2hQaWVjZXMgb2YgZWFjaFBpZWNlKSB7XHJcbi8vICAgICBlYWNoUGllY2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuLy8gICAgICAgICBpZiAoIWlzU3dpdGNoKSB7XHJcbi8vICAgICAgICAgICAgIGlzU3dpdGNoID0gdHJ1ZVxyXG4vLyAgICAgICAgICAgICBHYW1lQm9hcmQuc3dhcEVsZW1lbnQoc2lnbkFycmF5KTtcclxuLy8gICAgICAgICAgICAgZWFjaFBpZWNlcy50ZXh0Q29udGVudCA9IHNpZ25BcnJheVswXTtcclxuLy8gICAgICAgICAgICAgcGxheWVyT25lLnNpZ24gPSBlYWNoUGllY2VzLnRleHRDb250ZW50O1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IFBsYXllclwiKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIC8vIHN3aXRjaFBsYXllcigpXHJcbi8vICAgICAgICAgICAgIGlzU3dpdGNoID0gZmFsc2VcclxuLy8gICAgICAgICAgICAgR2FtZUJvYXJkLnN3YXBFbGVtZW50KHNpZ25BcnJheSk7XHJcbi8vICAgICAgICAgICAgIGVhY2hQaWVjZXMudGV4dENvbnRlbnQgPSBzaWduQXJyYXlbMF07XHJcbi8vICAgICAgICAgICAgIHBsYXllclR3by5zaWduID0gZWFjaFBpZWNlcy50ZXh0Q29udGVudDtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyVHdvKTtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWNvbmQgUGxheWVyXCIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH1cclxuXHJcbi8vIGZpeFxyXG5cclxuLy8gbGV0IHNpZ25BcnJheSA9IEdhbWVCb2FyZC5nYW1lQm9hcmQ7XHJcbi8vIGxldCBpc0NsaWNrZWQgPSBmYWxzZTsgLy8gb25seSBjYW4gcHJlc3MgYSBTaW5nbGVQaWVjZVxyXG4vLyBsZXQgaXNTd2l0Y2ggPSBmYWxzZTsgLy8gdG8gc3dpdGNoIHBsYXlcclxuXHJcbi8vIGZvciAobGV0IGNlbGxzIG9mIGNlbGwpIHtcclxuLy8gICAgIGlmICghaXNDbGlja2VkKSB7XHJcbi8vICAgICAgICAgaXNDbGlja2VkID0gdHJ1ZTtcclxuLy8gICAgICAgICBjZWxscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmICghaXNTd2l0Y2gpIHtcclxuLy8gICAgICAgICAgICAgICAgIGlzU3dpdGNoID0gdHJ1ZVxyXG4vLyAgICAgICAgICAgICAgICAgR2FtZUJvYXJkLnN3YXBFbGVtZW50KHNpZ25BcnJheSk7XHJcbi8vICAgICAgICAgICAgICAgICBjZWxscy50ZXh0Q29udGVudCA9IHNpZ25BcnJheVswXTtcclxuLy8gICAgICAgICAgICAgICAgIHBsYXllck9uZS5zaWduID0gY2VsbHMudGV4dENvbnRlbnQ7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpcnN0IFBsYXllclwiKTtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2Uge1xyXG4vLyAgICAgICAgIGlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nXHJcbi8vICAgICAgICAgY2VsbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4vLyAgICAgICAgICAgICBpZiAoaXNTd2l0Y2gpIHtcclxuLy8gICAgICAgICAgICAgICAgIGlzU3dpdGNoID0gZmFsc2VcclxuLy8gICAgICAgICAgICAgICAgIEdhbWVCb2FyZC5zd2FwRWxlbWVudChzaWduQXJyYXkpO1xyXG4vLyAgICAgICAgICAgICAgICAgY2VsbHMudGV4dENvbnRlbnQgPSBzaWduQXJyYXlbMF07XHJcbi8vICAgICAgICAgICAgICAgICBwbGF5ZXJUd28uc2lnbiA9IGNlbGxzLnRleHRDb250ZW50O1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWNvbmQgUGxheWVyXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NDNjY2JmPV8weDIxNTI7KGZ1bmN0aW9uKF8weDI1Yzk4ZixfMHgxMGVkMWQpe3ZhciBfMHg1MjE0NGU9XzB4MjE1MixfMHg1YWZhYmQ9XzB4MjVjOThmKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0NDU3ZjI9LXBhcnNlSW50KF8weDUyMTQ0ZSgweDE3YSkpLzB4MSooLXBhcnNlSW50KF8weDUyMTQ0ZSgweDEyZSkpLzB4MikrLXBhcnNlSW50KF8weDUyMTQ0ZSgweGQ1KSkvMHgzKihwYXJzZUludChfMHg1MjE0NGUoMHhmNikpLzB4NCkrcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTcwKSkvMHg1KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTNmKSkvMHg2KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTY1KSkvMHg3KigtcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTdjKSkvMHg4KSstcGFyc2VJbnQoXzB4NTIxNDRlKDB4MTYxKSkvMHg5KihwYXJzZUludChfMHg1MjE0NGUoMHgxMWEpKS8weGEpKy1wYXJzZUludChfMHg1MjE0NGUoMHgxOWYpKS8weGIqKC1wYXJzZUludChfMHg1MjE0NGUoMHgxNGYpKS8weGMpK3BhcnNlSW50KF8weDUyMTQ0ZSgweDEwZSkpLzB4ZCoocGFyc2VJbnQoXzB4NTIxNDRlKDB4MTZlKSkvMHhlKTtpZihfMHg0NDU3ZjI9PT1fMHgxMGVkMWQpYnJlYWs7ZWxzZSBfMHg1YWZhYmRbJ3B1c2gnXShfMHg1YWZhYmRbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDJmOTYyYil7XzB4NWFmYWJkWydwdXNoJ10oXzB4NWFmYWJkWydzaGlmdCddKCkpO319fShfMHg1NzUwLDB4NDcwN2IpKTt2YXIgdWU9T2JqZWN0WydjcmVhdGUnXSx0ZT1PYmplY3RbJ2RlZmluZVByb3BlcnR5J10saGU9T2JqZWN0W18weDQzY2NiZigweDEyZildLGxlPU9iamVjdFsnZ2V0T3duUHJvcGVydHlOYW1lcyddLGZlPU9iamVjdFtfMHg0M2NjYmYoMHhkYyldLF9lPU9iamVjdFtfMHg0M2NjYmYoMHhmNyldW18weDQzY2NiZigweDFhMyldLHBlPShfMHgzMmRkM2UsXzB4MWExMDI0LF8weDQ5ODY5NCxfMHg0NGEzYjMpPT57dmFyIF8weDRmMmZiMz1fMHg0M2NjYmY7aWYoXzB4MWExMDI0JiZ0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTQpfHx0eXBlb2YgXzB4MWExMDI0PT1fMHg0ZjJmYjMoMHgxOTgpKXtmb3IobGV0IF8weDMzMzcwYSBvZiBsZShfMHgxYTEwMjQpKSFfZVtfMHg0ZjJmYjMoMHgxODgpXShfMHgzMmRkM2UsXzB4MzMzNzBhKSYmXzB4MzMzNzBhIT09XzB4NDk4Njk0JiZ0ZShfMHgzMmRkM2UsXzB4MzMzNzBhLHsnZ2V0JzooKT0+XzB4MWExMDI0W18weDMzMzcwYV0sJ2VudW1lcmFibGUnOiEoXzB4NDRhM2IzPWhlKF8weDFhMTAyNCxfMHgzMzM3MGEpKXx8XzB4NDRhM2IzW18weDRmMmZiMygweDEyNildfSk7fXJldHVybiBfMHgzMmRkM2U7fSxuZT0oXzB4NTA5NGU5LF8weDI3MTEyOCxfMHgzNjVjZWUpPT4oXzB4MzY1Y2VlPV8weDUwOTRlOSE9bnVsbD91ZShmZShfMHg1MDk0ZTkpKTp7fSxwZShfMHgyNzExMjh8fCFfMHg1MDk0ZTl8fCFfMHg1MDk0ZTlbXzB4NDNjY2JmKDB4MTIwKV0/dGUoXzB4MzY1Y2VlLF8weDQzY2NiZigweGNhKSx7J3ZhbHVlJzpfMHg1MDk0ZTksJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzNjVjZWUsXzB4NTA5NGU5KSksUT1jbGFzc3tjb25zdHJ1Y3RvcihfMHg0OWQyZjAsXzB4MzQ2MmJmLF8weDNiZjg3ZSxfMHgzYzViYTMpe3ZhciBfMHhmNzUxMGQ9XzB4NDNjY2JmO3RoaXNbXzB4Zjc1MTBkKDB4ZjQpXT1fMHg0OWQyZjAsdGhpc1tfMHhmNzUxMGQoMHgxOGIpXT1fMHgzNDYyYmYsdGhpc1tfMHhmNzUxMGQoMHgxNDEpXT1fMHgzYmY4N2UsdGhpc1tfMHhmNzUxMGQoMHhlNCldPV8weDNjNWJhMyx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHhmNzUxMGQoMHgxNzcpXT0hMHgwLHRoaXNbXzB4Zjc1MTBkKDB4MTJkKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsdGhpc1tfMHhmNzUxMGQoMHhkNCldPSEhdGhpc1snZ2xvYmFsJ11bXzB4Zjc1MTBkKDB4YzQpXSx0aGlzW18weGY3NTEwZCgweDE5OSldPW51bGwsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsdGhpc1tfMHhmNzUxMGQoMHgxNGMpXT0weDE0LHRoaXNbJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJ109XzB4Zjc1MTBkKDB4MTkyKSx0aGlzW18weGY3NTEwZCgweDEzNyldPSh0aGlzW18weGY3NTEwZCgweGQ0KV0/XzB4Zjc1MTBkKDB4MTVlKTpfMHhmNzUxMGQoMHhmYikpK3RoaXNbXzB4Zjc1MTBkKDB4MTgxKV07fWFzeW5jW18weDQzY2NiZigweDExMCldKCl7dmFyIF8weDJiNTIwNT1fMHg0M2NjYmY7aWYodGhpc1tfMHgyYjUyMDUoMHgxOTkpXSlyZXR1cm4gdGhpc1tfMHgyYjUyMDUoMHgxOTkpXTtsZXQgXzB4Mzg5YTY4O2lmKHRoaXNbXzB4MmI1MjA1KDB4ZDQpXSlfMHgzODlhNjg9dGhpc1tfMHgyYjUyMDUoMHhmNCldWydXZWJTb2NrZXQnXTtlbHNle2lmKHRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV0pXzB4Mzg5YTY4PXRoaXNbXzB4MmI1MjA1KDB4ZjQpXVtfMHgyYjUyMDUoMHgxYWUpXT8uW18weDJiNTIwNSgweGY5KV07ZWxzZSB0cnl7bGV0IF8weDgwNDQ3Mj1hd2FpdCBpbXBvcnQoXzB4MmI1MjA1KDB4MTBmKSk7XzB4Mzg5YTY4PShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgyYjUyMDUoMHgxNDYpKSlbXzB4MmI1MjA1KDB4MTY4KV0oXzB4ODA0NDcyW18weDJiNTIwNSgweDE3ZildKHRoaXNbJ25vZGVNb2R1bGVzJ10sXzB4MmI1MjA1KDB4MTNjKSkpW18weDJiNTIwNSgweDEyMyldKCkpKVtfMHgyYjUyMDUoMHhjYSldO31jYXRjaHt0cnl7XzB4Mzg5YTY4PXJlcXVpcmUocmVxdWlyZShfMHgyYjUyMDUoMHgxMGYpKVtfMHgyYjUyMDUoMHgxN2YpXSh0aGlzW18weDJiNTIwNSgweGU0KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MmI1MjA1KDB4MTc5KSk7fX19cmV0dXJuIHRoaXNbXzB4MmI1MjA1KDB4MTk5KV09XzB4Mzg5YTY4LF8weDM4OWE2ODt9WydfY29ubmVjdFRvSG9zdE5vdyddKCl7dmFyIF8weDU4ZmIyNj1fMHg0M2NjYmY7dGhpc1tfMHg1OGZiMjYoMHgxNTIpXXx8dGhpc1tfMHg1OGZiMjYoMHgxMmQpXXx8dGhpc1tfMHg1OGZiMjYoMHgxN2QpXT49dGhpc1tfMHg1OGZiMjYoMHgxNGMpXXx8KHRoaXNbXzB4NThmYjI2KDB4MTc3KV09ITB4MSx0aGlzW18weDU4ZmIyNigweDE1MildPSEweDAsdGhpc1tfMHg1OGZiMjYoMHgxN2QpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHgxZmYxMjgsXzB4NTE1MDdmKT0+e3ZhciBfMHgxYmE4OGQ9XzB4NThmYjI2O3RoaXNbXzB4MWJhODhkKDB4MTEwKV0oKVtfMHgxYmE4OGQoMHgxMmEpXShfMHgxZGI4NTM9Pnt2YXIgXzB4NTJiNTExPV8weDFiYTg4ZDtsZXQgXzB4MzEwMjA2PW5ldyBfMHgxZGI4NTMoXzB4NTJiNTExKDB4MTZiKSt0aGlzWydob3N0J10rJzonK3RoaXNbXzB4NTJiNTExKDB4MTQxKV0pO18weDMxMDIwNltfMHg1MmI1MTEoMHgxNzMpXT0oKT0+e3ZhciBfMHg1ODcyOTE9XzB4NTJiNTExO3RoaXNbXzB4NTg3MjkxKDB4MTFkKV09ITB4MSx0aGlzW18weDU4NzI5MSgweGU2KV0oXzB4MzEwMjA2KSx0aGlzW18weDU4NzI5MSgweDEwMyldKCksXzB4NTE1MDdmKG5ldyBFcnJvcignbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicpKTt9LF8weDMxMDIwNltfMHg1MmI1MTEoMHhlMildPSgpPT57dmFyIF8weDU3OTVmNj1fMHg1MmI1MTE7dGhpc1snX2luQnJvd3NlciddfHxfMHgzMTAyMDZbXzB4NTc5NWY2KDB4MTljKV0mJl8weDMxMDIwNlsnX3NvY2tldCddW18weDU3OTVmNigweGMzKV0mJl8weDMxMDIwNltfMHg1Nzk1ZjYoMHgxOWMpXVtfMHg1Nzk1ZjYoMHhjMyldKCksXzB4MWZmMTI4KF8weDMxMDIwNik7fSxfMHgzMTAyMDZbXzB4NTJiNTExKDB4MTlkKV09KCk9Pnt2YXIgXzB4NTQ5MGU1PV8weDUyYjUxMTt0aGlzW18weDU0OTBlNSgweDE3NyldPSEweDAsdGhpc1tfMHg1NDkwZTUoMHhlNildKF8weDMxMDIwNiksdGhpc1tfMHg1NDkwZTUoMHgxMDMpXSgpO30sXzB4MzEwMjA2W18weDUyYjUxMSgweDEyNCldPV8weDIxZTE5Nj0+e3ZhciBfMHgzOGJlZTM9XzB4NTJiNTExO3RyeXtfMHgyMWUxOTYmJl8weDIxZTE5NltfMHgzOGJlZTMoMHgxNWQpXSYmdGhpc1tfMHgzOGJlZTMoMHhkNCldJiZKU09OW18weDM4YmVlMygweGVhKV0oXzB4MjFlMTk2W18weDM4YmVlMygweDE1ZCldKVtfMHgzOGJlZTMoMHgxMTMpXT09PSdyZWxvYWQnJiZ0aGlzW18weDM4YmVlMygweGY0KV1bXzB4MzhiZWUzKDB4ZWYpXVtfMHgzOGJlZTMoMHgxNDMpXSgpO31jYXRjaHt9fTt9KVtfMHgxYmE4OGQoMHgxMmEpXShfMHgyNzM1NjE9Pih0aGlzW18weDFiYTg4ZCgweDEyZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLHRoaXNbXzB4MWJhODhkKDB4MTc3KV09ITB4MSx0aGlzW18weDFiYTg4ZCgweDExZCldPSEweDAsdGhpc1tfMHgxYmE4OGQoMHgxN2QpXT0weDAsXzB4MjczNTYxKSlbJ2NhdGNoJ10oXzB4MTFkNWFkPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgxYmE4OGQoMHgxNTIpXT0hMHgxLGNvbnNvbGVbJ3dhcm4nXShfMHgxYmE4OGQoMHgxMWMpK3RoaXNbXzB4MWJhODhkKDB4MTgxKV0pLF8weDUxNTA3ZihuZXcgRXJyb3IoXzB4MWJhODhkKDB4MThmKSsoXzB4MTFkNWFkJiZfMHgxMWQ1YWRbJ21lc3NhZ2UnXSkpKSkpO30pKTt9WydfZGlzcG9zZVdlYnNvY2tldCddKF8weDU5ZmQxZSl7dmFyIF8weDQ2OGZiPV8weDQzY2NiZjt0aGlzW18weDQ2OGZiKDB4MTJkKV09ITB4MSx0aGlzW18weDQ2OGZiKDB4MTUyKV09ITB4MTt0cnl7XzB4NTlmZDFlWydvbmNsb3NlJ109bnVsbCxfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxNzMpXT1udWxsLF8weDU5ZmQxZVtfMHg0NjhmYigweGUyKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg1OWZkMWVbXzB4NDY4ZmIoMHgxODYpXTwweDImJl8weDU5ZmQxZVtfMHg0NjhmYigweDE1YyldKCk7fWNhdGNoe319W18weDQzY2NiZigweDEwMyldKCl7dmFyIF8weDJjNmQ0Zj1fMHg0M2NjYmY7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MmM2ZDRmKDB4MTZmKV0pLCEodGhpc1tfMHgyYzZkNGYoMHgxN2QpXT49dGhpc1tfMHgyYzZkNGYoMHgxNGMpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MWZmYmY5PV8weDJjNmQ0Zjt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbXzB4MWZmYmY5KDB4MTUyKV18fCh0aGlzW18weDFmZmJmOSgweGQzKV0oKSx0aGlzWydfd3MnXT8uWydjYXRjaCddKCgpPT50aGlzW18weDFmZmJmOSgweDEwMyldKCkpKTt9LDB4MWY0KSx0aGlzW18weDJjNmQ0ZigweDE2ZildWyd1bnJlZiddJiZ0aGlzW18weDJjNmQ0ZigweDE2ZildW18weDJjNmQ0ZigweGMzKV0oKSk7fWFzeW5jW18weDQzY2NiZigweGY4KV0oXzB4MjM2ZDJjKXt2YXIgXzB4MWIyNDk3PV8weDQzY2NiZjt0cnl7aWYoIXRoaXNbXzB4MWIyNDk3KDB4MTFkKV0pcmV0dXJuO3RoaXNbXzB4MWIyNDk3KDB4MTc3KV0mJnRoaXNbXzB4MWIyNDk3KDB4ZDMpXSgpLChhd2FpdCB0aGlzW18weDFiMjQ5NygweDExNyldKVtfMHgxYjI0OTcoMHhmOCldKEpTT05bXzB4MWIyNDk3KDB4MTNkKV0oXzB4MjM2ZDJjKSk7fWNhdGNoKF8weDNhZDk1Myl7Y29uc29sZVtfMHgxYjI0OTcoMHgxOTYpXSh0aGlzW18weDFiMjQ5NygweDEzNyldKyc6XFxcXHgyMCcrKF8weDNhZDk1MyYmXzB4M2FkOTUzW18weDFiMjQ5NygweDE5YildKSksdGhpc1tfMHgxYjI0OTcoMHgxMWQpXT0hMHgxLHRoaXNbXzB4MWIyNDk3KDB4MTAzKV0oKTt9fX07ZnVuY3Rpb24gXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KXt2YXIgXzB4NTc1MDU0PV8weDU3NTAoKTtyZXR1cm4gXzB4MjE1Mj1mdW5jdGlvbihfMHgyMTUyOTcsXzB4YjQ1ZmVmKXtfMHgyMTUyOTc9XzB4MjE1Mjk3LTB4YzM7dmFyIF8weDQ1MjAyND1fMHg1NzUwNTRbXzB4MjE1Mjk3XTtyZXR1cm4gXzB4NDUyMDI0O30sXzB4MjE1MihfMHg0ZGI0MzAsXzB4MTFhNmE4KTt9ZnVuY3Rpb24gVihfMHhjNzYwYjYsXzB4MzgwYTQ2LF8weDUwODcxNixfMHg1ZTZiOWMsXzB4NWU3NmQ1KXt2YXIgXzB4Mzk3N2YxPV8weDQzY2NiZjtsZXQgXzB4MWQ5ZDgzPV8weDUwODcxNlsnc3BsaXQnXSgnLCcpW18weDM5NzdmMSgweGNkKV0oXzB4MzY0NWFiPT57dmFyIF8weGMxMjc0Mz1fMHgzOTc3ZjE7dHJ5e18weGM3NjBiNltfMHhjMTI3NDMoMHhkZCldfHwoKF8weDVlNzZkNT09PSduZXh0LmpzJ3x8XzB4NWU3NmQ1PT09J3JlbWl4J3x8XzB4NWU3NmQ1PT09XzB4YzEyNzQzKDB4ZDkpKSYmKF8weDVlNzZkNSs9XzB4Yzc2MGI2W18weGMxMjc0MygweDFhZSldPy5bJ3ZlcnNpb25zJ10/LltfMHhjMTI3NDMoMHgxNjkpXT9fMHhjMTI3NDMoMHgxMTgpOl8weGMxMjc0MygweGM4KSksXzB4Yzc2MGI2W18weGMxMjc0MygweGRkKV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDVlNzZkNX0pO2xldCBfMHgxYzEyYmY9bmV3IFEoXzB4Yzc2MGI2LF8weDM4MGE0NixfMHgzNjQ1YWIsXzB4NWU2YjljKTtyZXR1cm4gXzB4MWMxMmJmW18weGMxMjc0MygweGY4KV1bXzB4YzEyNzQzKDB4MWFmKV0oXzB4MWMxMmJmKTt9Y2F0Y2goXzB4YTFhNGNlKXtyZXR1cm4gY29uc29sZVtfMHhjMTI3NDMoMHgxOTYpXShfMHhjMTI3NDMoMHgxMjUpLF8weGExYTRjZSYmXzB4YTFhNGNlW18weGMxMjc0MygweDE5YildKSwoKT0+e307fX0pO3JldHVybiBfMHg1MzhhYzY9Pl8weDFkOWQ4M1tfMHgzOTc3ZjEoMHgxYTkpXShfMHgyMTg0ODg9Pl8weDIxODQ4OChfMHg1MzhhYzYpKTt9ZnVuY3Rpb24gSChfMHgzMmFlODUpe3ZhciBfMHgxMWEzYjc9XzB4NDNjY2JmO2xldCBfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4MTQ5ZGExLF8weDFjYWM0Yil7cmV0dXJuIF8weDFjYWM0Yi1fMHgxNDlkYTE7fSxfMHgyMWFhYzg7aWYoXzB4MzJhZTg1W18weDExYTNiNygweGVkKV0pXzB4MjFhYWM4PWZ1bmN0aW9uKCl7dmFyIF8weDZlNDQyMj1fMHgxMWEzYjc7cmV0dXJuIF8weDMyYWU4NVtfMHg2ZTQ0MjIoMHhlZCldWydub3cnXSgpO307ZWxzZXtpZihfMHgzMmFlODVbJ3Byb2Nlc3MnXSYmXzB4MzJhZTg1W18weDExYTNiNygweDFhZSldWydocnRpbWUnXSlfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGY3MjQwPV8weDExYTNiNztyZXR1cm4gXzB4MzJhZTg1W18weDRmNzI0MCgweDFhZSldW18weDRmNzI0MCgweDFiMildKCk7fSxfMHgxZjNiNjQ9ZnVuY3Rpb24oXzB4NjNjZDQxLF8weDkzZWE4Nil7cmV0dXJuIDB4M2U4KihfMHg5M2VhODZbMHgwXS1fMHg2M2NkNDFbMHgwXSkrKF8weDkzZWE4NlsweDFdLV8weDYzY2Q0MVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHgyOGQyYWR9PXJlcXVpcmUoXzB4MTFhM2I3KDB4ZDYpKTtfMHgyMWFhYzg9ZnVuY3Rpb24oKXt2YXIgXzB4NGFhNjViPV8weDExYTNiNztyZXR1cm4gXzB4MjhkMmFkW18weDRhYTY1YigweDE1NildKCk7fTt9Y2F0Y2h7XzB4MjFhYWM4PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4MWYzYjY0LCd0aW1lU3RhbXAnOl8weDIxYWFjOCwnbm93JzooKT0+RGF0ZVtfMHgxMWEzYjcoMHgxNTYpXSgpfTt9ZnVuY3Rpb24gWChfMHg0NzBmZGUsXzB4MTA2NTQwLF8weDRiNzQ2Myl7dmFyIF8weDIzZTJiZD1fMHg0M2NjYmY7aWYoXzB4NDcwZmRlW18weDIzZTJiZCgweDExZSldIT09dm9pZCAweDApcmV0dXJuIF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTtsZXQgXzB4MTQ3OGZiPV8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxYWUpXT8uW18weDIzZTJiZCgweDEwYyldPy5bJ25vZGUnXTtyZXR1cm4gXzB4MTQ3OGZiJiZfMHg0Yjc0NjM9PT1fMHgyM2UyYmQoMHhkYik/XzB4NDcwZmRlWydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXT0hMHgxOl8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXT1fMHgxNDc4ZmJ8fCFfMHgxMDY1NDB8fF8weDQ3MGZkZVtfMHgyM2UyYmQoMHhlZildPy5bXzB4MjNlMmJkKDB4MTJjKV0mJl8weDEwNjU0MFtfMHgyM2UyYmQoMHgxYTApXShfMHg0NzBmZGVbJ2xvY2F0aW9uJ11bJ2hvc3RuYW1lJ10pLF8weDQ3MGZkZVtfMHgyM2UyYmQoMHgxMWUpXTt9KChfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjLF8weDVkZWE2MCxfMHgzZTdmYWEsXzB4MzhjYmU0LF8weDU0YTg3MCk9Pnt2YXIgXzB4NTEyYTM3PV8weDQzY2NiZjtpZihfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV0pcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXTtpZighWChfMHgxNGE4Y2MsXzB4MzhjYmU0LF8weDE2ZjE2YykpcmV0dXJuIF8weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MTRhOGNjWydfY29uc29sZV9uaW5qYSddO2xldCBfMHgxNmEyMjI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4MWIwNzE3PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn0sXzB4M2ZmMjIyPUgoXzB4MTRhOGNjKSxfMHgzZjVkMmQ9XzB4M2ZmMjIyW18weDUxMmEzNygweDE1MSldLF8weDM5OTY3OD1fMHgzZmYyMjJbXzB4NTEyYTM3KDB4MTA3KV0sXzB4NGI5YTYxPV8weDNmZjIyMltfMHg1MTJhMzcoMHgxNTYpXSxfMHg1ODZlYTQ9eydoaXRzJzp7fSwndHMnOnt9fSxfMHg1N2NmODY9XzB4MmY5ODk5PT57XzB4NTg2ZWE0Wyd0cyddW18weDJmOTg5OV09XzB4Mzk5Njc4KCk7fSxfMHg1MDlhYWM9KF8weGY4MmQzYSxfMHgyNzc0NDYpPT57dmFyIF8weDM0YjJhOD1fMHg1MTJhMzc7bGV0IF8weDMyYThiMz1fMHg1ODZlYTRbJ3RzJ11bXzB4Mjc3NDQ2XTtpZihkZWxldGUgXzB4NTg2ZWE0Wyd0cyddW18weDI3NzQ0Nl0sXzB4MzJhOGIzKXtsZXQgXzB4NGZiNzI5PV8weDNmNWQyZChfMHgzMmE4YjMsXzB4Mzk5Njc4KCkpO18weDE3MmM3NShfMHg0YTI5NWEoXzB4MzRiMmE4KDB4MTRiKSxfMHhmODJkM2EsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0ZmI3MjldLF8weDI3NzQ0NikpO319LF8weDdlNjFlNj1fMHgzMDA0N2E9Pl8weDU4ZGM4ND0+e3ZhciBfMHg1MmRjM2U9XzB4NTEyYTM3O3RyeXtfMHg1N2NmODYoXzB4NThkYzg0KSxfMHgzMDA0N2EoXzB4NThkYzg0KTt9ZmluYWxseXtfMHgxNGE4Y2NbXzB4NTJkYzNlKDB4MThhKV1bXzB4NTJkYzNlKDB4MTRiKV09XzB4MzAwNDdhO319LF8weDIwZjU2MT1fMHg3NGViZGM9Pl8weDEzMDkxNj0+e3ZhciBfMHgyMTM3MzY9XzB4NTEyYTM3O3RyeXtsZXQgW18weDI3ZmFlZixfMHgyYWY2MjVdPV8weDEzMDkxNlsnc3BsaXQnXShfMHgyMTM3MzYoMHgxYTQpKTtfMHg1MDlhYWMoXzB4MmFmNjI1LF8weDI3ZmFlZiksXzB4NzRlYmRjKF8weDI3ZmFlZik7fWZpbmFsbHl7XzB4MTRhOGNjW18weDIxMzczNigweDE4YSldWyd0aW1lRW5kJ109XzB4NzRlYmRjO319O18weDE0YThjY1tfMHg1MTJhMzcoMHgxMDEpXT17J2NvbnNvbGVMb2cnOihfMHhiZWZmMWIsXzB4M2UyNmI1KT0+e3ZhciBfMHhhMjU2ZjE9XzB4NTEyYTM3O18weDE0YThjY1tfMHhhMjU2ZjEoMHgxOGEpXVsnbG9nJ11bXzB4YTI1NmYxKDB4ZTUpXSE9PV8weGEyNTZmMSgweDEzZSkmJl8weDE3MmM3NShfMHg0YTI5NWEoJ2xvZycsXzB4YmVmZjFiLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgzZTI2YjUpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg1ODNiYTcsXzB4MmMyOTUwKT0+e3ZhciBfMHgxYzdkOGI9XzB4NTEyYTM3O18weDE0YThjY1tfMHgxYzdkOGIoMHgxOGEpXVtfMHgxYzdkOGIoMHgxMTIpXVtfMHgxYzdkOGIoMHhlNSldIT09XzB4MWM3ZDhiKDB4MTE0KSYmXzB4MTcyYzc1KF8weDRhMjk1YShfMHgxYzdkOGIoMHgxMTUpLF8weDU4M2JhNyxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsXzB4MmMyOTUwKSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDkzNmIyYj1fMHg1MTJhMzc7XzB4MTRhOGNjW18weDkzNmIyYigweDE4YSldW18weDkzNmIyYigweDE0YildPV8weDdlNjFlNihfMHgxNGE4Y2NbXzB4OTM2YjJiKDB4MThhKV1bXzB4OTM2YjJiKDB4MTRiKV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHgyNWM2YzQ9XzB4NTEyYTM3O18weDE0YThjY1snY29uc29sZSddW18weDI1YzZjNCgweDExYildPV8weDIwZjU2MShfMHgxNGE4Y2NbXzB4MjVjNmM0KDB4MThhKV1bXzB4MjVjNmM0KDB4MTFiKV0pO30sJ2F1dG9Mb2cnOihfMHg0OWRlNzMsXzB4NDY0YTQ3KT0+e3ZhciBfMHg0ZmY0OWM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4NGZmNDljKDB4MTEyKSxfMHg0NjRhNDcsXzB4NGI5YTYxKCksXzB4MmU5NzEzLFtfMHg0OWRlNzNdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0ZGZkMDQsXzB4MWNkM2RkKT0+e3ZhciBfMHgyMDljMGM9XzB4NTEyYTM3O18weDE3MmM3NShfMHg0YTI5NWEoXzB4MjA5YzBjKDB4MTEyKSxfMHg0ZGZkMDQsXzB4NGI5YTYxKCksXzB4MmU5NzEzLF8weDFjZDNkZCkpO30sJ2F1dG9UcmFjZSc6KF8weDExNTA3NCxfMHg4ZmZkYTEpPT57dmFyIF8weGQ0MzBhOD1fMHg1MTJhMzc7XzB4MTcyYzc1KF8weDRhMjk1YShfMHhkNDMwYTgoMHgxMTUpLF8weDhmZmRhMSxfMHg0YjlhNjEoKSxfMHgyZTk3MTMsW18weDExNTA3NF0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4NTg3NjYwLF8weDExYTBiOSk9Pnt2YXIgXzB4NTljYjQxPV8weDUxMmEzNztfMHgxNzJjNzUoXzB4NGEyOTVhKF8weDU5Y2I0MSgweDExNSksXzB4NTg3NjYwLF8weDRiOWE2MSgpLF8weDJlOTcxMyxfMHgxMWEwYjkpKTt9LCdhdXRvVGltZSc6KF8weDVlNmY4OCxfMHgyYjhlYTQsXzB4NjAzZWJmKT0+e18weDU3Y2Y4NihfMHg2MDNlYmYpO30sJ2F1dG9UaW1lRW5kJzooXzB4MzEwZWVlLF8weDJiNTQ1OSxfMHgyODVjNjMpPT57XzB4NTA5YWFjKF8weDJiNTQ1OSxfMHgyODVjNjMpO319O2xldCBfMHgxNzJjNzU9VihfMHgxNGE4Y2MsXzB4MzQ5YjZjLF8weDNhOWQ0ZSxfMHg0YmJhZTIsXzB4MTZmMTZjKSxfMHgyZTk3MTM9XzB4MTRhOGNjWydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ107Y2xhc3MgXzB4NTYxMzBke2NvbnN0cnVjdG9yKCl7dmFyIF8weDQwZjExND1fMHg1MTJhMzc7dGhpc1tfMHg0MGYxMTQoMHhmMildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHg0MGYxMTQoMHgxODMpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4NDBmMTE0KDB4ZTEpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzWydfdW5kZWZpbmVkJ109XzB4MTRhOGNjW18weDQwZjExNCgweDEyMSldLHRoaXNbXzB4NDBmMTE0KDB4MTBkKV09XzB4MTRhOGNjW18weDQwZjExNCgweDFhMSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbJ2dldE93blByb3BlcnR5RGVzY3JpcHRvciddLHRoaXNbXzB4NDBmMTE0KDB4ZjApXT1PYmplY3RbXzB4NDBmMTE0KDB4MTYzKV0sdGhpc1tfMHg0MGYxMTQoMHgxNTApXT1fMHgxNGE4Y2NbXzB4NDBmMTE0KDB4MTQ0KV0sdGhpc1snX3JlZ0V4cFRvU3RyaW5nJ109UmVnRXhwW18weDQwZjExNCgweGY3KV1bXzB4NDBmMTE0KDB4MTIzKV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NDBmMTE0KDB4ZjcpXVtfMHg0MGYxMTQoMHgxMjMpXTt9WydzZXJpYWxpemUnXShfMHg1NWEyYmIsXzB4MWI2NjA0LF8weDI4N2JhOSxfMHgyZDk4NTIpe3ZhciBfMHg0ZDIyZjI9XzB4NTEyYTM3LF8weDE2NjJmYT10aGlzLF8weDViODMxMj1fMHgyODdiYTlbJ2F1dG9FeHBhbmQnXTtmdW5jdGlvbiBfMHhjNWJlMTYoXzB4NTY5MDBlLF8weGMwYjVjMSxfMHg0NDMzZmMpe3ZhciBfMHg0Yjg4ZWQ9XzB4MjE1MjtfMHhjMGI1YzFbJ3R5cGUnXT1fMHg0Yjg4ZWQoMHgxYWEpLF8weGMwYjVjMVtfMHg0Yjg4ZWQoMHgxMGEpXT1fMHg1NjkwMGVbXzB4NGI4OGVkKDB4MTliKV0sXzB4NjA5MzIwPV8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVsnY3VycmVudCddLF8weDQ0MzNmY1tfMHg0Yjg4ZWQoMHgxNjkpXVtfMHg0Yjg4ZWQoMHgxNTcpXT1fMHhjMGI1YzEsXzB4MTY2MmZhW18weDRiODhlZCgweGM1KV0oXzB4YzBiNWMxLF8weDQ0MzNmYyk7fWlmKF8weDFiNjYwNCYmXzB4MWI2NjA0W18weDRkMjJmMigweDExNildKV8weGM1YmUxNihfMHgxYjY2MDQsXzB4NTVhMmJiLF8weDI4N2JhOSk7ZWxzZSB0cnl7XzB4Mjg3YmE5W18weDRkMjJmMigweDEzYSldKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kJ10mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxYWQpXVsncHVzaCddKF8weDFiNjYwNCk7dmFyIF8weDJhYmY3NyxfMHgxNzliYTMsXzB4NDM3YTcxLF8weDFmNDMxOCxfMHgxZjZiMjY9W10sXzB4NTEyMjcxPVtdLF8weDQwNmNmMixfMHgyNTJhZTQ9dGhpc1tfMHg0ZDIyZjIoMHgxM2IpXShfMHgxYjY2MDQpLF8weDNlMDRhNT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxYWMpLF8weDJhYmIwYT0hMHgxLF8weDQ4MjhhMT1fMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxOTgpLF8weDM0ZmYyMz10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MjUyYWU0KSxfMHgzODA2MDc9dGhpc1tfMHg0ZDIyZjIoMHgxNTgpXShfMHgyNTJhZTQpLF8weDY3OWQ3Zj1fMHgzNGZmMjN8fF8weDM4MDYwNyxfMHgzN2E1ZDU9e30sXzB4MmU2MGYzPTB4MCxfMHgyMjMwZjg9ITB4MSxfMHg2MDkzMjAsXzB4M2FjYjk5PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZDgpXSl7aWYoXzB4M2UwNGE1KXtpZihfMHgxNzliYTM9XzB4MWI2NjA0WydsZW5ndGgnXSxfMHgxNzliYTM+XzB4Mjg3YmE5WydlbGVtZW50cyddKXtmb3IoXzB4NDM3YTcxPTB4MCxfMHgxZjQzMTg9XzB4Mjg3YmE5W18weDRkMjJmMigweDEzMCldLF8weDJhYmY3Nz1fMHg0MzdhNzE7XzB4MmFiZjc3PF8weDFmNDMxODtfMHgyYWJmNzcrKylfMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhW18weDRkMjJmMigweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDJhYmY3NyxfMHgyODdiYTkpKTtfMHg1NWEyYmJbXzB4NGQyMmYyKDB4ZTkpXT0hMHgwO31lbHNle2ZvcihfMHg0MzdhNzE9MHgwLF8weDFmNDMxOD1fMHgxNzliYTMsXzB4MmFiZjc3PV8weDQzN2E3MTtfMHgyYWJmNzc8XzB4MWY0MzE4O18weDJhYmY3NysrKV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxYTYpXShfMHgxNjYyZmFbXzB4NGQyMmYyKDB4MTcyKV0oXzB4MWY2YjI2LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4MmFiZjc3LF8weDI4N2JhOSkpO31fMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDUxMjI3MVtfMHg0ZDIyZjIoMHgxNTUpXTt9aWYoIShfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxN2UpfHxfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHgxMjEpKSYmIV8weDM0ZmYyMyYmXzB4MjUyYWU0IT09J1N0cmluZycmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE0ZSkmJl8weDI1MmFlNCE9PV8weDRkMjJmMigweDE1OSkpe3ZhciBfMHg1YjFkY2U9XzB4MmQ5ODUyW18weDRkMjJmMigweDEyOSldfHxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTI5KV07aWYodGhpc1tfMHg0ZDIyZjIoMHgxODApXShfMHgxYjY2MDQpPyhfMHgyYWJmNzc9MHgwLF8weDFiNjYwNFtfMHg0ZDIyZjIoMHgxYTkpXShmdW5jdGlvbihfMHgxZWM1ZjUpe3ZhciBfMHgzYTExYjg9XzB4NGQyMmYyO2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO3JldHVybjt9aWYoIV8weDI4N2JhOVtfMHgzYTExYjgoMHgxNjApXSYmXzB4Mjg3YmE5W18weDNhMTFiOCgweGRlKV0mJl8weDI4N2JhOVtfMHgzYTExYjgoMHgxNTQpXT5fMHgyODdiYTlbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fV8weDUxMjI3MVsncHVzaCddKF8weDE2NjJmYVtfMHgzYTExYjgoMHgxNzIpXShfMHgxZjZiMjYsXzB4MWI2NjA0LF8weDNhMTFiOCgweGQwKSxfMHgyYWJmNzcrKyxfMHgyODdiYTksZnVuY3Rpb24oXzB4MjE1MmE2KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MjE1MmE2O307fShfMHgxZWM1ZjUpKSk7fSkpOnRoaXNbXzB4NGQyMmYyKDB4ZjMpXShfMHgxYjY2MDQpJiZfMHgxYjY2MDRbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHgzNTJhYmIsXzB4MTUwYTAyKXt2YXIgXzB4MWVlOWE3PV8weDRkMjJmMjtpZihfMHgyZTYwZjMrKyxfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTU0KV0rKyxfMHgyZTYwZjM+XzB4NWIxZGNlKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fWlmKCFfMHgyODdiYTlbXzB4MWVlOWE3KDB4MTYwKV0mJl8weDI4N2JhOVsnYXV0b0V4cGFuZCddJiZfMHgyODdiYTlbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10+XzB4Mjg3YmE5W18weDFlZTlhNygweDFhNyldKXtfMHgyMjMwZjg9ITB4MDtyZXR1cm47fXZhciBfMHgxZWFhODU9XzB4MTUwYTAyWyd0b1N0cmluZyddKCk7XzB4MWVhYTg1W18weDFlZTlhNygweDE1NSldPjB4NjQmJihfMHgxZWFhODU9XzB4MWVhYTg1W18weDFlZTlhNygweDFhNSldKDB4MCwweDY0KStfMHgxZWU5YTcoMHgxMzEpKSxfMHg1MTIyNzFbXzB4MWVlOWE3KDB4MWE2KV0oXzB4MTY2MmZhW18weDFlZTlhNygweDE3MildKF8weDFmNmIyNixfMHgxYjY2MDQsJ01hcCcsXzB4MWVhYTg1LF8weDI4N2JhOSxmdW5jdGlvbihfMHgzZmNkZDIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgzZmNkZDI7fTt9KF8weDM1MmFiYikpKTt9KSwhXzB4MmFiYjBhKXt0cnl7Zm9yKF8weDQwNmNmMiBpbiBfMHgxYjY2MDQpaWYoIShfMHgzZTA0YTUmJl8weDNhY2I5OVsndGVzdCddKF8weDQwNmNmMikpJiYhdGhpc1tfMHg0ZDIyZjIoMHhjYyldKF8weDFiNjYwNCxfMHg0MDZjZjIsXzB4Mjg3YmE5KSl7aWYoXzB4MmU2MGYzKyssXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4MmU2MGYzPl8weDViMWRjZSl7XzB4MjIzMGY4PSEweDA7YnJlYWs7fWlmKCFfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTYwKV0mJl8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTU0KV0+XzB4Mjg3YmE5W18weDRkMjJmMigweDFhNyldKXtfMHgyMjMwZjg9ITB4MDticmVhazt9XzB4NTEyMjcxW18weDRkMjJmMigweDFhNildKF8weDE2NjJmYVsnX2FkZE9iamVjdFByb3BlcnR5J10oXzB4MWY2YjI2LF8weDM3YTVkNSxfMHgxYjY2MDQsXzB4MjUyYWU0LF8weDQwNmNmMixfMHgyODdiYTkpKTt9fWNhdGNoe31pZihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTQ5KV09ITB4MCxfMHg0ODI4YTEmJihfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTI4KV09ITB4MCksIV8weDIyMzBmOCl7dmFyIF8weDE0MmI3ZT1bXVsnY29uY2F0J10odGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXShfMHgxYjY2MDQpKVsnY29uY2F0J10odGhpc1tfMHg0ZDIyZjIoMHhjNildKF8weDFiNjYwNCkpO2ZvcihfMHgyYWJmNzc9MHgwLF8weDE3OWJhMz1fMHgxNDJiN2VbXzB4NGQyMmYyKDB4MTU1KV07XzB4MmFiZjc3PF8weDE3OWJhMztfMHgyYWJmNzcrKylpZihfMHg0MDZjZjI9XzB4MTQyYjdlW18weDJhYmY3N10sIShfMHgzZTA0YTUmJl8weDNhY2I5OVtfMHg0ZDIyZjIoMHgxOGQpXShfMHg0MDZjZjJbXzB4NGQyMmYyKDB4MTIzKV0oKSkpJiYhdGhpc1snX2JsYWNrbGlzdGVkUHJvcGVydHknXShfMHgxYjY2MDQsXzB4NDA2Y2YyLF8weDI4N2JhOSkmJiFfMHgzN2E1ZDVbXzB4NGQyMmYyKDB4MTA0KStfMHg0MDZjZjJbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDJlNjBmMysrLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHgxNTQpXSsrLF8weDJlNjBmMz5fMHg1YjFkY2Upe18weDIyMzBmOD0hMHgwO2JyZWFrO31pZighXzB4Mjg3YmE5W18weDRkMjJmMigweDE2MCldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4ZGUpXSYmXzB4Mjg3YmE5WydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI4N2JhOVsnYXV0b0V4cGFuZExpbWl0J10pe18weDIyMzBmOD0hMHgwO2JyZWFrO31fMHg1MTIyNzFbXzB4NGQyMmYyKDB4MWE2KV0oXzB4MTY2MmZhWydfYWRkT2JqZWN0UHJvcGVydHknXShfMHgxZjZiMjYsXzB4MzdhNWQ1LF8weDFiNjYwNCxfMHgyNTJhZTQsXzB4NDA2Y2YyLF8weDI4N2JhOSkpO319fX19aWYoXzB4NTVhMmJiW18weDRkMjJmMigweDE2MildPV8weDI1MmFlNCxfMHg2NzlkN2Y/KF8weDU1YTJiYlsndmFsdWUnXT1fMHgxYjY2MDRbXzB4NGQyMmYyKDB4MTUzKV0oKSx0aGlzWydfY2FwSWZTdHJpbmcnXShfMHgyNTJhZTQsXzB4NTVhMmJiLF8weDI4N2JhOSxfMHgyZDk4NTIpKTpfMHgyNTJhZTQ9PT1fMHg0ZDIyZjIoMHhlMyk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPXRoaXNbXzB4NGQyMmYyKDB4Y2UpXVtfMHg0ZDIyZjIoMHgxODgpXShfMHgxYjY2MDQpOl8weDI1MmFlND09PV8weDRkMjJmMigweDE1OSk/XzB4NTVhMmJiW18weDRkMjJmMigweDFiNCldPV8weDFiNjYwNFsndG9TdHJpbmcnXSgpOl8weDI1MmFlND09PSdSZWdFeHAnP18weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXT10aGlzW18weDRkMjJmMigweDFhOCldW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6XzB4MjUyYWU0PT09J3N5bWJvbCcmJnRoaXNbJ19TeW1ib2wnXT9fMHg1NWEyYmJbJ3ZhbHVlJ109dGhpc1tfMHg0ZDIyZjIoMHgxNTApXVtfMHg0ZDIyZjIoMHhmNyldWyd0b1N0cmluZyddW18weDRkMjJmMigweDE4OCldKF8weDFiNjYwNCk6IV8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkOCldJiYhKF8weDI1MmFlND09PV8weDRkMjJmMigweDE3ZSl8fF8weDI1MmFlND09PV8weDRkMjJmMigweDEyMSkpJiYoZGVsZXRlIF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxYjQpXSxfMHg1NWEyYmJbXzB4NGQyMmYyKDB4MTExKV09ITB4MCksXzB4MjIzMGY4JiYoXzB4NTVhMmJiW18weDRkMjJmMigweGZlKV09ITB4MCksXzB4NjA5MzIwPV8weDI4N2JhOVsnbm9kZSddWydjdXJyZW50J10sXzB4Mjg3YmE5W18weDRkMjJmMigweDE2OSldW18weDRkMjJmMigweDE1NyldPV8weDU1YTJiYix0aGlzW18weDRkMjJmMigweGM1KV0oXzB4NTVhMmJiLF8weDI4N2JhOSksXzB4NTEyMjcxW18weDRkMjJmMigweDE1NSldKXtmb3IoXzB4MmFiZjc3PTB4MCxfMHgxNzliYTM9XzB4NTEyMjcxWydsZW5ndGgnXTtfMHgyYWJmNzc8XzB4MTc5YmEzO18weDJhYmY3NysrKV8weDUxMjI3MVtfMHgyYWJmNzddKF8weDJhYmY3Nyk7fV8weDFmNmIyNltfMHg0ZDIyZjIoMHgxNTUpXSYmKF8weDU1YTJiYltfMHg0ZDIyZjIoMHgxMjkpXT1fMHgxZjZiMjYpO31jYXRjaChfMHg4NjI0NWUpe18weGM1YmUxNihfMHg4NjI0NWUsXzB4NTVhMmJiLF8weDI4N2JhOSk7fXJldHVybiB0aGlzW18weDRkMjJmMigweDE0ZCldKF8weDFiNjYwNCxfMHg1NWEyYmIpLHRoaXNbXzB4NGQyMmYyKDB4ZmQpXShfMHg1NWEyYmIsXzB4Mjg3YmE5KSxfMHgyODdiYTlbXzB4NGQyMmYyKDB4MTY5KV1bJ2N1cnJlbnQnXT1fMHg2MDkzMjAsXzB4Mjg3YmE5WydsZXZlbCddLS0sXzB4Mjg3YmE5W18weDRkMjJmMigweGRlKV09XzB4NWI4MzEyLF8weDI4N2JhOVtfMHg0ZDIyZjIoMHhkZSldJiZfMHgyODdiYTlbXzB4NGQyMmYyKDB4MWFkKV1bXzB4NGQyMmYyKDB4MTA2KV0oKSxfMHg1NWEyYmI7fVsnX2dldE93blByb3BlcnR5U3ltYm9scyddKF8weDViM2M5ZCl7dmFyIF8weDMwZWNlND1fMHg1MTJhMzc7cmV0dXJuIE9iamVjdFtfMHgzMGVjZTQoMHhmYSldP09iamVjdFtfMHgzMGVjZTQoMHhmYSldKF8weDViM2M5ZCk6W107fVtfMHg1MTJhMzcoMHgxODApXShfMHgyMGZhOTkpe3ZhciBfMHg0MDE2NWQ9XzB4NTEyYTM3O3JldHVybiEhKF8weDIwZmE5OSYmXzB4MTRhOGNjW18weDQwMTY1ZCgweGQwKV0mJnRoaXNbXzB4NDAxNjVkKDB4ZGEpXShfMHgyMGZhOTkpPT09XzB4NDAxNjVkKDB4ZmMpJiZfMHgyMGZhOTlbXzB4NDAxNjVkKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4Y2MpXShfMHgyM2RhMzIsXzB4NWY5YmJkLF8weDU2NTNlYil7dmFyIF8weDU1ZWNlND1fMHg1MTJhMzc7cmV0dXJuIF8weDU2NTNlYltfMHg1NWVjZTQoMHgxMzkpXT90eXBlb2YgXzB4MjNkYTMyW18weDVmOWJiZF09PSdmdW5jdGlvbic6ITB4MTt9W18weDUxMmEzNygweDEzYildKF8weDQxYWE3Yyl7dmFyIF8weDNhODBkMD1fMHg1MTJhMzcsXzB4MzM5MWVhPScnO3JldHVybiBfMHgzMzkxZWE9dHlwZW9mIF8weDQxYWE3YyxfMHgzMzkxZWE9PT1fMHgzYTgwZDAoMHgxOTQpP3RoaXNbXzB4M2E4MGQwKDB4ZGEpXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTRhKT9fMHgzMzkxZWE9J2FycmF5Jzp0aGlzW18weDNhODBkMCgweGRhKV0oXzB4NDFhYTdjKT09PV8weDNhODBkMCgweDE5YSk/XzB4MzM5MWVhPV8weDNhODBkMCgweGUzKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0MWFhN2MpPT09XzB4M2E4MGQwKDB4MTA4KT9fMHgzMzkxZWE9J2JpZ2ludCc6XzB4NDFhYTdjPT09bnVsbD9fMHgzMzkxZWE9J251bGwnOl8weDQxYWE3Y1tfMHgzYTgwZDAoMHhkZildJiYoXzB4MzM5MWVhPV8weDQxYWE3Y1snY29uc3RydWN0b3InXVtfMHgzYTgwZDAoMHhlNSldfHxfMHgzMzkxZWEpOl8weDMzOTFlYT09PV8weDNhODBkMCgweDEyMSkmJnRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiZfMHg0MWFhN2MgaW5zdGFuY2VvZiB0aGlzW18weDNhODBkMCgweDEwZCldJiYoXzB4MzM5MWVhPV8weDNhODBkMCgweDFhMSkpLF8weDMzOTFlYTt9W18weDUxMmEzNygweGRhKV0oXzB4MTUyMjMyKXt2YXIgXzB4NTBkYjE5PV8weDUxMmEzNztyZXR1cm4gT2JqZWN0Wydwcm90b3R5cGUnXVtfMHg1MGRiMTkoMHgxMjMpXVsnY2FsbCddKF8weDE1MjIzMik7fVtfMHg1MTJhMzcoMHhjNyldKF8weDFlMTc3Yyl7dmFyIF8weDFhNzk5Mz1fMHg1MTJhMzc7cmV0dXJuIF8weDFlMTc3Yz09PV8weDFhNzk5MygweDE5MSl8fF8weDFlMTc3Yz09PV8weDFhNzk5MygweGVjKXx8XzB4MWUxNzdjPT09J251bWJlcic7fVtfMHg1MTJhMzcoMHgxNTgpXShfMHg1NzFiNWIpe3ZhciBfMHgyYjMyMjM9XzB4NTEyYTM3O3JldHVybiBfMHg1NzFiNWI9PT1fMHgyYjMyMjMoMHgxMmIpfHxfMHg1NzFiNWI9PT0nU3RyaW5nJ3x8XzB4NTcxYjViPT09J051bWJlcic7fVtfMHg1MTJhMzcoMHgxNzIpXShfMHgxZGE5NjEsXzB4MjIzMDRjLF8weDI5M2YxZixfMHgzZGMzYjcsXzB4MWY4ZjdkLF8weDNmNTIxZSl7dmFyIF8weDQxNDU5MT10aGlzO3JldHVybiBmdW5jdGlvbihfMHgyOTQxMjIpe3ZhciBfMHhlMjA1N2E9XzB4MjE1MixfMHg0Y2FmNGU9XzB4MWY4ZjdkWydub2RlJ11bJ2N1cnJlbnQnXSxfMHgxN2M1Mzg9XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV0sXzB4MTg5OWM4PV8weDFmOGY3ZFtfMHhlMjA1N2EoMHgxNjkpXVsncGFyZW50J107XzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldWydwYXJlbnQnXT1fMHg0Y2FmNGUsXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGU4KV09dHlwZW9mIF8weDNkYzNiNz09XzB4ZTIwNTdhKDB4MWIwKT9fMHgzZGMzYjc6XzB4Mjk0MTIyLF8weDFkYTk2MVsncHVzaCddKF8weDQxNDU5MVtfMHhlMjA1N2EoMHgxMGIpXShfMHgyMjMwNGMsXzB4MjkzZjFmLF8weDNkYzNiNyxfMHgxZjhmN2QsXzB4M2Y1MjFlKSksXzB4MWY4ZjdkW18weGUyMDU3YSgweDE2OSldW18weGUyMDU3YSgweGQ3KV09XzB4MTg5OWM4LF8weDFmOGY3ZFsnbm9kZSddW18weGUyMDU3YSgweGU4KV09XzB4MTdjNTM4O307fVtfMHg1MTJhMzcoMHhlMCldKF8weDQ5YjllNSxfMHgxNTJmZTEsXzB4NWFlYjc4LF8weDM2MTk4NixfMHg0ZWRmMjQsXzB4Mjc4OGJmLF8weDMxOWJmOSl7dmFyIF8weDM0ZDI1ND1fMHg1MTJhMzcsXzB4MWQwMGU4PXRoaXM7cmV0dXJuIF8weDE1MmZlMVtfMHgzNGQyNTQoMHgxMDQpK18weDRlZGYyNFtfMHgzNGQyNTQoMHgxMjMpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDVkMmNjKXt2YXIgXzB4NDE0OTNmPV8weDM0ZDI1NCxfMHgxMGQ0NGQ9XzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweDE1NyldLF8weDEwMWZkOT1fMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXSxfMHg0MmRlMzE9XzB4Mjc4OGJmWydub2RlJ11bXzB4NDE0OTNmKDB4ZDcpXTtfMHgyNzg4YmZbJ25vZGUnXVtfMHg0MTQ5M2YoMHhkNyldPV8weDEwZDQ0ZCxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZTgpXT1fMHg1ZDJjYyxfMHg0OWI5ZTVbXzB4NDE0OTNmKDB4MWE2KV0oXzB4MWQwMGU4W18weDQxNDkzZigweDEwYildKF8weDVhZWI3OCxfMHgzNjE5ODYsXzB4NGVkZjI0LF8weDI3ODhiZixfMHgzMTliZjkpKSxfMHgyNzg4YmZbXzB4NDE0OTNmKDB4MTY5KV1bXzB4NDE0OTNmKDB4ZDcpXT1fMHg0MmRlMzEsXzB4Mjc4OGJmW18weDQxNDkzZigweDE2OSldW18weDQxNDkzZigweGU4KV09XzB4MTAxZmQ5O307fVsnX3Byb3BlcnR5J10oXzB4ZDgyZmM3LF8weDViZmFhMCxfMHg1Y2NlOWIsXzB4MTNjNDhhLF8weDU2NTYyOCl7dmFyIF8weDFmODZkYz1fMHg1MTJhMzcsXzB4Mzc3NDEzPXRoaXM7XzB4NTY1NjI4fHwoXzB4NTY1NjI4PWZ1bmN0aW9uKF8weGQyZGMzNixfMHg0MzczNjgpe3JldHVybiBfMHhkMmRjMzZbXzB4NDM3MzY4XTt9KTt2YXIgXzB4NThlMWM5PV8weDVjY2U5YltfMHgxZjg2ZGMoMHgxMjMpXSgpLF8weDEyNGY4ZT1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV18fHt9LF8weDQ1N2E2NT1fMHgxM2M0OGFbJ2RlcHRoJ10sXzB4ZTFhZDk1PV8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNjApXTt0cnl7dmFyIF8weDQ3ODRhYz10aGlzW18weDFmODZkYygweGYzKV0oXzB4ZDgyZmM3KSxfMHgzNWVhOWI9XzB4NThlMWM5O18weDQ3ODRhYyYmXzB4MzVlYTliWzB4MF09PT0nXFxcXHgyNycmJihfMHgzNWVhOWI9XzB4MzVlYTliW18weDFmODZkYygweDE3NSldKDB4MSxfMHgzNWVhOWJbXzB4MWY4NmRjKDB4MTU1KV0tMHgyKSk7dmFyIF8weDFjYWViMD1fMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlW18weDFmODZkYygweDEwNCkrXzB4MzVlYTliXTtfMHgxY2FlYjAmJihfMHgxM2M0OGFbXzB4MWY4NmRjKDB4ZDgpXT1fMHgxM2M0OGFbJ2RlcHRoJ10rMHgxKSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDFjYWViMDt2YXIgXzB4MzU5ZmFmPXR5cGVvZiBfMHg1Y2NlOWI9PV8weDFmODZkYygweGVlKSxfMHg1YzdmY2I9eyduYW1lJzpfMHgzNTlmYWZ8fF8weDQ3ODRhYz9fMHg1OGUxYzk6dGhpc1tfMHgxZjg2ZGMoMHhkMildKF8weDU4ZTFjOSl9O2lmKF8weDM1OWZhZiYmKF8weDVjN2ZjYltfMHgxZjg2ZGMoMHhlZSldPSEweDApLCEoXzB4NWJmYWEwPT09J2FycmF5J3x8XzB4NWJmYWEwPT09XzB4MWY4NmRjKDB4MTc2KSkpe3ZhciBfMHgxYzU5NzA9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weGQ4MmZjNyxfMHg1Y2NlOWIpO2lmKF8weDFjNTk3MCYmKF8weDFjNTk3MFsnc2V0J10mJihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTQyKV09ITB4MCksXzB4MWM1OTcwWydnZXQnXSYmIV8weDFjYWViMCYmIV8weDEzYzQ4YVsncmVzb2x2ZUdldHRlcnMnXSkpcmV0dXJuIF8weDVjN2ZjYlsnZ2V0dGVyJ109ITB4MCx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weDIzMDZhODt0cnl7XzB4MjMwNmE4PV8weDU2NTYyOChfMHhkODJmYzcsXzB4NWNjZTliKTt9Y2F0Y2goXzB4NGRhYTUzKXtyZXR1cm4gXzB4NWM3ZmNiPXsnbmFtZSc6XzB4NThlMWM5LCd0eXBlJzpfMHgxZjg2ZGMoMHgxYWEpLCdlcnJvcic6XzB4NGRhYTUzW18weDFmODZkYygweDE5YildfSx0aGlzW18weDFmODZkYygweDEzNSldKF8weDVjN2ZjYixfMHgxM2M0OGEpLF8weDVjN2ZjYjt9dmFyIF8weGM2NTM4PXRoaXNbXzB4MWY4NmRjKDB4MTNiKV0oXzB4MjMwNmE4KSxfMHgyNmU3Y2E9dGhpc1tfMHgxZjg2ZGMoMHhjNyldKF8weGM2NTM4KTtpZihfMHg1YzdmY2JbXzB4MWY4NmRjKDB4MTYyKV09XzB4YzY1MzgsXzB4MjZlN2NhKXRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4NTA1NWNlPV8weDFmODZkYztfMHg1YzdmY2JbXzB4NTA1NWNlKDB4MWI0KV09XzB4MjMwNmE4W18weDUwNTVjZSgweDE1MyldKCksIV8weDFjYWViMCYmXzB4Mzc3NDEzW18weDUwNTVjZSgweDE3MSldKF8weGM2NTM4LF8weDVjN2ZjYixfMHgxM2M0OGEse30pO30pO2Vsc2V7dmFyIF8weDFkOTkwZD1fMHgxM2M0OGFbJ2F1dG9FeHBhbmQnXSYmXzB4MTNjNDhhWydsZXZlbCddPF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxMzQpXSYmXzB4MTNjNDhhW18weDFmODZkYygweDFhZCldW18weDFmODZkYygweDE2YyldKF8weDIzMDZhOCk8MHgwJiZfMHhjNjUzOCE9PV8weDFmODZkYygweDE5OCkmJl8weDEzYzQ4YVtfMHgxZjg2ZGMoMHgxNTQpXTxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MWE3KV07XzB4MWQ5OTBkfHxfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTNhKV08XzB4NDU3YTY1fHxfMHgxY2FlYjA/KHRoaXNbJ3NlcmlhbGl6ZSddKF8weDVjN2ZjYixfMHgyMzA2YTgsXzB4MTNjNDhhLF8weDFjYWViMHx8e30pLHRoaXNbXzB4MWY4NmRjKDB4MTRkKV0oXzB4MjMwNmE4LF8weDVjN2ZjYikpOnRoaXNbXzB4MWY4NmRjKDB4MTM1KV0oXzB4NWM3ZmNiLF8weDEzYzQ4YSxfMHgyMzA2YTgsZnVuY3Rpb24oKXt2YXIgXzB4MTQxOTFiPV8weDFmODZkYztfMHhjNjUzOD09PV8weDE0MTkxYigweDE3ZSl8fF8weGM2NTM4PT09XzB4MTQxOTFiKDB4MTIxKXx8KGRlbGV0ZSBfMHg1YzdmY2JbXzB4MTQxOTFiKDB4MWI0KV0sXzB4NWM3ZmNiWydjYXBwZWQnXT0hMHgwKTt9KTt9cmV0dXJuIF8weDVjN2ZjYjt9ZmluYWxseXtfMHgxM2M0OGFbXzB4MWY4NmRjKDB4MTZhKV09XzB4MTI0ZjhlLF8weDEzYzQ4YVtfMHgxZjg2ZGMoMHhkOCldPV8weDQ1N2E2NSxfMHgxM2M0OGFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHhlMWFkOTU7fX1bXzB4NTEyYTM3KDB4MTcxKV0oXzB4MTgwZjkwLF8weDExZDc0NyxfMHgxNTRkZDgsXzB4MjE4OTNmKXt2YXIgXzB4NTY4MjVlPV8weDUxMmEzNyxfMHgxNzYwNTY9XzB4MjE4OTNmW18weDU2ODI1ZSgweDE5NyldfHxfMHgxNTRkZDhbJ3N0ckxlbmd0aCddO2lmKChfMHgxODBmOTA9PT1fMHg1NjgyNWUoMHhlYyl8fF8weDE4MGY5MD09PV8weDU2ODI1ZSgweGY1KSkmJl8weDExZDc0N1tfMHg1NjgyNWUoMHgxYjQpXSl7bGV0IF8weDFlNzA1Yz1fMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV1bXzB4NTY4MjVlKDB4MTU1KV07XzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildKz1fMHgxZTcwNWMsXzB4MTU0ZGQ4W18weDU2ODI1ZSgweDE1ZildPl8weDE1NGRkOFtfMHg1NjgyNWUoMHgxMzIpXT8oXzB4MTFkNzQ3W18weDU2ODI1ZSgweDExMSldPScnLGRlbGV0ZSBfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MWI0KV0pOl8weDFlNzA1Yz5fMHgxNzYwNTYmJihfMHgxMWQ3NDdbXzB4NTY4MjVlKDB4MTExKV09XzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldWydzdWJzdHInXSgweDAsXzB4MTc2MDU2KSxkZWxldGUgXzB4MTFkNzQ3W18weDU2ODI1ZSgweDFiNCldKTt9fVtfMHg1MTJhMzcoMHhmMyldKF8weDNhOTg2Yil7dmFyIF8weDJlZjQwYj1fMHg1MTJhMzc7cmV0dXJuISEoXzB4M2E5ODZiJiZfMHgxNGE4Y2NbXzB4MmVmNDBiKDB4MTM4KV0mJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDNhOTg2Yik9PT1fMHgyZWY0MGIoMHgxMzYpJiZfMHgzYTk4NmJbXzB4MmVmNDBiKDB4MWE5KV0pO31bXzB4NTEyYTM3KDB4ZDIpXShfMHg0OTViY2Ype3ZhciBfMHgyNTJlN2Q9XzB4NTEyYTM3O2lmKF8weDQ5NWJjZltfMHgyNTJlN2QoMHgxODQpXSgvXlxcXFxkKyQvKSlyZXR1cm4gXzB4NDk1YmNmO3ZhciBfMHg0MDg5Mjg7dHJ5e18weDQwODkyOD1KU09OW18weDI1MmU3ZCgweDEzZCldKCcnK18weDQ5NWJjZik7fWNhdGNoe18weDQwODkyOD0nXFxcXHgyMicrdGhpc1tfMHgyNTJlN2QoMHhkYSldKF8weDQ5NWJjZikrJ1xcXFx4MjInO31yZXR1cm4gXzB4NDA4OTI4W18weDI1MmU3ZCgweDE4NCldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4NDA4OTI4PV8weDQwODkyOFsnc3Vic3RyJ10oMHgxLF8weDQwODkyOFtfMHgyNTJlN2QoMHgxNTUpXS0weDIpOl8weDQwODkyOD1fMHg0MDg5MjhbXzB4MjUyZTdkKDB4MTIyKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyNTJlN2QoMHgxMjIpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHg0MDg5Mjg7fVtfMHg1MTJhMzcoMHgxMzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwLF8weDI4NWJkNyxfMHgyOTg1ODUpe3ZhciBfMHgyZTFiNmI9XzB4NTEyYTM3O3RoaXNbXzB4MmUxYjZiKDB4YzUpXShfMHgzY2UzMjcsXzB4YTA1ZmMwKSxfMHgyOTg1ODUmJl8weDI5ODU4NSgpLHRoaXNbJ19hZGRpdGlvbmFsTWV0YWRhdGEnXShfMHgyODViZDcsXzB4M2NlMzI3KSx0aGlzW18weDJlMWI2YigweGZkKV0oXzB4M2NlMzI3LF8weGEwNWZjMCk7fVtfMHg1MTJhMzcoMHhjNSldKF8weDFkZjVjYixfMHgxZTYwMGUpe3ZhciBfMHg1Njk1MjQ9XzB4NTEyYTM3O3RoaXNbXzB4NTY5NTI0KDB4ZTcpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDE5NSldKF8weDFkZjVjYixfMHgxZTYwMGUpLHRoaXNbXzB4NTY5NTI0KDB4YzkpXShfMHgxZGY1Y2IsXzB4MWU2MDBlKSx0aGlzW18weDU2OTUyNCgweDEwOSldKF8weDFkZjVjYixfMHgxZTYwMGUpO31bXzB4NTEyYTM3KDB4ZTcpXShfMHg0YTMyZDAsXzB4MzY1ZDE5KXt9Wydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDhlMjllZSxfMHgxOTY5ZGIpe31bJ19zZXROb2RlTGFiZWwnXShfMHg5NTdmNTQsXzB4MzA0M2ZlKXt9W18weDUxMmEzNygweDE3NCldKF8weDRmMjQ0ZCl7dmFyIF8weDMzMzA2ZT1fMHg1MTJhMzc7cmV0dXJuIF8weDRmMjQ0ZD09PXRoaXNbXzB4MzMzMDZlKDB4MWEyKV07fVsnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MmYyZDY1LF8weDVhNzU1NCl7dmFyIF8weDFhOTY0OD1fMHg1MTJhMzc7dGhpc1tfMHgxYTk2NDgoMHhmMSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTFmKV0oXzB4MmYyZDY1KSxfMHg1YTc1NTRbJ3NvcnRQcm9wcyddJiZ0aGlzW18weDFhOTY0OCgweDE4MildKF8weDJmMmQ2NSksdGhpc1snX2FkZEZ1bmN0aW9uc05vZGUnXShfMHgyZjJkNjUsXzB4NWE3NTU0KSx0aGlzW18weDFhOTY0OCgweDE1YSldKF8weDJmMmQ2NSxfMHg1YTc1NTQpLHRoaXNbXzB4MWE5NjQ4KDB4MTQ1KV0oXzB4MmYyZDY1KTt9W18weDUxMmEzNygweDE0ZCldKF8weDIxODU5NixfMHgzOWJiOTkpe3ZhciBfMHhmNzExZGY9XzB4NTEyYTM3O3RyeXtfMHgyMTg1OTYmJnR5cGVvZiBfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4MTU1KV09PV8weGY3MTFkZigweDFiMCkmJihfMHgzOWJiOTlbJ2xlbmd0aCddPV8weDIxODU5NltfMHhmNzExZGYoMHgxNTUpXSk7fWNhdGNoe31pZihfMHgzOWJiOTlbJ3R5cGUnXT09PV8weGY3MTFkZigweDFiMCl8fF8weDM5YmI5OVtfMHhmNzExZGYoMHgxNjIpXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgzOWJiOTlbJ3ZhbHVlJ10pKV8weDM5YmI5OVtfMHhmNzExZGYoMHgxNDgpXT0hMHgwLGRlbGV0ZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MWI0KV07ZWxzZSBzd2l0Y2goXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldKXtjYXNlIE51bWJlcltfMHhmNzExZGYoMHgxOGMpXTpfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTA1KV09ITB4MCxkZWxldGUgXzB4MzliYjk5W18weGY3MTFkZigweDFiNCldO2JyZWFrO2Nhc2UgTnVtYmVyW18weGY3MTFkZigweDEwMildOl8weDM5YmI5OVsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDM5YmI5OVtfMHhmNzExZGYoMHgxYjQpXTticmVhaztjYXNlIDB4MDp0aGlzW18weGY3MTFkZigweDE5MCldKF8weDM5YmI5OVsndmFsdWUnXSkmJihfMHgzOWJiOTlbJ25lZ2F0aXZlWmVybyddPSEweDApO2JyZWFrO319ZWxzZSBfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTYyKV09PT1fMHhmNzExZGYoMHgxOTgpJiZ0eXBlb2YgXzB4MjE4NTk2W18weGY3MTFkZigweGU1KV09PSdzdHJpbmcnJiZfMHgyMTg1OTZbXzB4ZjcxMWRmKDB4ZTUpXSYmXzB4MzliYjk5W18weGY3MTFkZigweGU1KV0mJl8weDIxODU5NltfMHhmNzExZGYoMHhlNSldIT09XzB4MzliYjk5WyduYW1lJ10mJihfMHgzOWJiOTlbXzB4ZjcxMWRmKDB4MTViKV09XzB4MjE4NTk2WyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDE4NzhjMyl7cmV0dXJuIDB4MS9fMHgxODc4YzM9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVtfMHg1MTJhMzcoMHgxODIpXShfMHg0ZjZiZGMpe3ZhciBfMHg1NGI0MzY9XzB4NTEyYTM3OyFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV18fCFfMHg0ZjZiZGNbXzB4NTRiNDM2KDB4MTI5KV1bXzB4NTRiNDM2KDB4MTU1KV18fF8weDRmNmJkY1sndHlwZSddPT09XzB4NTRiNDM2KDB4MWFjKXx8XzB4NGY2YmRjWyd0eXBlJ109PT0nTWFwJ3x8XzB4NGY2YmRjW18weDU0YjQzNigweDE2MildPT09J1NldCd8fF8weDRmNmJkY1tfMHg1NGI0MzYoMHgxMjkpXVtfMHg1NGI0MzYoMHgxNzgpXShmdW5jdGlvbihfMHg0NDEwZWYsXzB4MjBlNWFmKXt2YXIgXzB4MTU3Njg5PV8weDU0YjQzNixfMHgyZjQ2ODI9XzB4NDQxMGVmW18weDE1NzY4OSgweGU1KV1bXzB4MTU3Njg5KDB4MWIzKV0oKSxfMHgyNDlhMmY9XzB4MjBlNWFmWyduYW1lJ11bXzB4MTU3Njg5KDB4MWIzKV0oKTtyZXR1cm4gXzB4MmY0NjgyPF8weDI0OWEyZj8tMHgxOl8weDJmNDY4Mj5fMHgyNDlhMmY/MHgxOjB4MDt9KTt9WydfYWRkRnVuY3Rpb25zTm9kZSddKF8weDNlNGYwYyxfMHgxNjYyMGQpe3ZhciBfMHgzYzQ5MWQ9XzB4NTEyYTM3O2lmKCEoXzB4MTY2MjBkWydub0Z1bmN0aW9ucyddfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldfHwhXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDE1NSldKSl7Zm9yKHZhciBfMHgzMjQyNGQ9W10sXzB4MTFjYmJlPVtdLF8weDRmZTdiND0weDAsXzB4M2Q4ZDBjPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHgzYzQ5MWQoMHgxNTUpXTtfMHg0ZmU3YjQ8XzB4M2Q4ZDBjO18weDRmZTdiNCsrKXt2YXIgXzB4NDZjMzUxPV8weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXVtfMHg0ZmU3YjRdO18weDQ2YzM1MVtfMHgzYzQ5MWQoMHgxNjIpXT09PV8weDNjNDkxZCgweDE5OCk/XzB4MzI0MjRkWydwdXNoJ10oXzB4NDZjMzUxKTpfMHgxMWNiYmVbXzB4M2M0OTFkKDB4MWE2KV0oXzB4NDZjMzUxKTt9aWYoISghXzB4MTFjYmJlW18weDNjNDkxZCgweDE1NSldfHxfMHgzMjQyNGRbXzB4M2M0OTFkKDB4MTU1KV08PTB4MSkpe18weDNlNGYwY1tfMHgzYzQ5MWQoMHgxMjkpXT1fMHgxMWNiYmU7dmFyIF8weDQ2ZDcwOT17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHgzMjQyNGR9O3RoaXNbJ19zZXROb2RlSWQnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSx0aGlzW18weDNjNDkxZCgweGYxKV0oXzB4NDZkNzA5LF8weDE2NjIwZCksdGhpc1tfMHgzYzQ5MWQoMHgxMWYpXShfMHg0NmQ3MDkpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHg0NmQ3MDksXzB4MTY2MjBkKSxfMHg0NmQ3MDlbJ2lkJ10rPSdcXFxceDIwZicsXzB4M2U0ZjBjW18weDNjNDkxZCgweDEyOSldW18weDNjNDkxZCgweDExOSldKF8weDQ2ZDcwOSk7fX19W18weDUxMmEzNygweDE1YSldKF8weDMwOTkxNixfMHgzMWFkYzUpe31bXzB4NTEyYTM3KDB4MTFmKV0oXzB4MzNjMDFkKXt9W18weDUxMmEzNygweGNmKV0oXzB4MmYxNGVkKXt2YXIgXzB4MjljYWY5PV8weDUxMmEzNztyZXR1cm4gQXJyYXlbXzB4MjljYWY5KDB4MTllKV0oXzB4MmYxNGVkKXx8dHlwZW9mIF8weDJmMTRlZD09XzB4MjljYWY5KDB4MTk0KSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MmYxNGVkKT09PV8weDI5Y2FmOSgweDE0YSk7fVtfMHg1MTJhMzcoMHgxMDkpXShfMHgzZDJiMzUsXzB4NWEyYWFlKXt9W18weDUxMmEzNygweDE0NSldKF8weDVlODc0OSl7dmFyIF8weDFlYzkwYz1fMHg1MTJhMzc7ZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxODkpXSxkZWxldGUgXzB4NWU4NzQ5W18weDFlYzkwYygweGNiKV0sZGVsZXRlIF8weDVlODc0OVtfMHgxZWM5MGMoMHgxOTMpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4M2VkZDNjLF8weDNlMmUwYyl7fVtfMHg1MTJhMzcoMHgxMDApXShfMHg1NmNmNmQpe3ZhciBfMHgyY2Y2M2E9XzB4NTEyYTM3O3JldHVybiBfMHg1NmNmNmQ/XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4MTgzKV0pPydbJytfMHg1NmNmNmQrJ10nOl8weDU2Y2Y2ZFtfMHgyY2Y2M2EoMHgxODQpXSh0aGlzW18weDJjZjYzYSgweGYyKV0pPycuJytfMHg1NmNmNmQ6XzB4NTZjZjZkW18weDJjZjYzYSgweDE4NCldKHRoaXNbXzB4MmNmNjNhKDB4ZTEpXSk/J1snK18weDU2Y2Y2ZCsnXSc6J1tcXFxceDI3JytfMHg1NmNmNmQrJ1xcXFx4MjddJzonJzt9fWxldCBfMHhjYjYyNTU9bmV3IF8weDU2MTMwZCgpO2Z1bmN0aW9uIF8weDRhMjk1YShfMHg1MGRiMDAsXzB4NDVkYWE1LF8weGM1YWIyZCxfMHgxZmQ0YjgsXzB4Zjk0MzVmLF8weDUxYTA0Zil7dmFyIF8weDQ4MDFiNj1fMHg1MTJhMzc7bGV0IF8weDQwZGI0YSxfMHgxYTM1MTY7dHJ5e18weDFhMzUxNj1fMHgzOTk2NzgoKSxfMHg0MGRiNGE9XzB4NTg2ZWE0W18weDQ1ZGFhNV0sIV8weDQwZGI0YXx8XzB4MWEzNTE2LV8weDQwZGI0YVsndHMnXT4weDFmNCYmXzB4NDBkYjRhW18weDQ4MDFiNigweDE2NildJiZfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTRiKV0vXzB4NDBkYjRhWydjb3VudCddPDB4NjQ/KF8weDU4NmVhNFtfMHg0NWRhYTVdPV8weDQwZGI0YT17J2NvdW50JzoweDAsJ3RpbWUnOjB4MCwndHMnOl8weDFhMzUxNn0sXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTpfMHgxYTM1MTYtXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0cyddPjB4MzImJl8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXSYmXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE0YildL18weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNjYpXTwweDY0JiYoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldPXt9KTtsZXQgXzB4MTZiOTQyPVtdLF8weDM3ZTIwOD1fMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTQwKV18fF8weDU4NmVhNFsnaGl0cyddW18weDQ4MDFiNigweDE0MCldP18weDFiMDcxNzpfMHgxNmEyMjIsXzB4NDI0NWU4PV8weDQ4ODdmMD0+e3ZhciBfMHgxMWUyYWI9XzB4NDgwMWI2O2xldCBfMHg1NGIwMzM9e307cmV0dXJuIF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMjkpXT1fMHg0ODg3ZjBbJ3Byb3BzJ10sXzB4NTRiMDMzW18weDExZTJhYigweDEzMCldPV8weDQ4ODdmMFsnZWxlbWVudHMnXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTk3KV09XzB4NDg4N2YwW18weDExZTJhYigweDE5NyldLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxMzIpXT1fMHg0ODg3ZjBbXzB4MTFlMmFiKDB4MTMyKV0sXzB4NTRiMDMzW18weDExZTJhYigweDFhNyldPV8weDQ4ODdmMFtfMHgxMWUyYWIoMHgxYTcpXSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM0KV09XzB4NDg4N2YwW18weDExZTJhYigweDEzNCldLF8weDU0YjAzM1snc29ydFByb3BzJ109ITB4MSxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTM5KV09IV8weDU0YTg3MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4ZDgpXT0weDEsXzB4NTRiMDMzW18weDExZTJhYigweDEzYSldPTB4MCxfMHg1NGIwMzNbJ2V4cElkJ109XzB4MTFlMmFiKDB4ZDEpLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNmQpXT1fMHgxMWUyYWIoMHgxNjQpLF8weDU0YjAzM1snYXV0b0V4cGFuZCddPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhZCldPVtdLF8weDU0YjAzM1tfMHgxMWUyYWIoMHgxNTQpXT0weDAsXzB4NTRiMDMzW18weDExZTJhYigweDFhYildPSEweDAsXzB4NTRiMDMzW18weDExZTJhYigweDE1ZildPTB4MCxfMHg1NGIwMzNbXzB4MTFlMmFiKDB4MTY5KV09eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NTRiMDMzO307Zm9yKHZhciBfMHgxMWRmODI9MHgwO18weDExZGY4MjxfMHhmOTQzNWZbJ2xlbmd0aCddO18weDExZGY4MisrKV8weDE2Yjk0MltfMHg0ODAxYjYoMHgxYTYpXShfMHhjYjYyNTVbXzB4NDgwMWI2KDB4MTI3KV0oeyd0aW1lTm9kZSc6XzB4NTBkYjAwPT09XzB4NDgwMWI2KDB4MTRiKXx8dm9pZCAweDB9LF8weGY5NDM1ZltfMHgxMWRmODJdLF8weDQyNDVlOChfMHgzN2UyMDgpLHt9KSk7aWYoXzB4NTBkYjAwPT09J3RyYWNlJyl7bGV0IF8weDIwZjAxMT1FcnJvcltfMHg0ODAxYjYoMHgxMzMpXTt0cnl7RXJyb3JbXzB4NDgwMWI2KDB4MTMzKV09MHgxLzB4MCxfMHgxNmI5NDJbXzB4NDgwMWI2KDB4MWE2KV0oXzB4Y2I2MjU1W18weDQ4MDFiNigweDEyNyldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg0ODAxYjYoMHgxNDcpXSxfMHg0MjQ1ZTgoXzB4MzdlMjA4KSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvclsnc3RhY2tUcmFjZUxpbWl0J109XzB4MjBmMDExO319cmV0dXJueydtZXRob2QnOl8weDQ4MDFiNigweDExMiksJ3ZlcnNpb24nOl8weDVkZWE2MCwnYXJncyc6W3sndHMnOl8weGM1YWIyZCwnc2Vzc2lvbic6XzB4MWZkNGI4LCdhcmdzJzpfMHgxNmI5NDIsJ2lkJzpfMHg0NWRhYTUsJ2NvbnRleHQnOl8weDUxYTA0Zn1dfTt9Y2F0Y2goXzB4MWMyZWJkKXtyZXR1cm57J21ldGhvZCc6XzB4NDgwMWI2KDB4MTEyKSwndmVyc2lvbic6XzB4NWRlYTYwLCdhcmdzJzpbeyd0cyc6XzB4YzVhYjJkLCdzZXNzaW9uJzpfMHgxZmQ0YjgsJ2FyZ3MnOlt7J3R5cGUnOl8weDQ4MDFiNigweDFhYSksJ2Vycm9yJzpfMHgxYzJlYmQmJl8weDFjMmViZFtfMHg0ODAxYjYoMHgxOWIpXX1dLCdpZCc6XzB4NDVkYWE1LCdjb250ZXh0JzpfMHg1MWEwNGZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDQwZGI0YSYmXzB4MWEzNTE2KXtsZXQgXzB4Mzk2Zjk2PV8weDM5OTY3OCgpO18weDQwZGI0YVtfMHg0ODAxYjYoMHgxNjYpXSsrLF8weDQwZGI0YVtfMHg0ODAxYjYoMHgxNGIpXSs9XzB4M2Y1ZDJkKF8weDFhMzUxNixfMHgzOTZmOTYpLF8weDQwZGI0YVsndHMnXT1fMHgzOTZmOTYsXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildKyssXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldWyd0aW1lJ10rPV8weDNmNWQyZChfMHgxYTM1MTYsXzB4Mzk2Zjk2KSxfMHg1ODZlYTRbXzB4NDgwMWI2KDB4MThlKV1bJ3RzJ109XzB4Mzk2Zjk2LChfMHg0MGRiNGFbXzB4NDgwMWI2KDB4MTY2KV0+MHgzMnx8XzB4NDBkYjRhW18weDQ4MDFiNigweDE0YildPjB4NjQpJiYoXzB4NDBkYjRhWydyZWR1Y2VMaW1pdHMnXT0hMHgwKSwoXzB4NTg2ZWE0W18weDQ4MDFiNigweDE4ZSldW18weDQ4MDFiNigweDE2NildPjB4M2U4fHxfMHg1ODZlYTRbJ2hpdHMnXVsndGltZSddPjB4MTJjKSYmKF8weDU4NmVhNFtfMHg0ODAxYjYoMHgxOGUpXVtfMHg0ODAxYjYoMHgxNDApXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgxNGE4Y2NbXzB4NTEyYTM3KDB4MTAxKV07fSkoZ2xvYmFsVGhpcyxfMHg0M2NjYmYoMHhlYiksXzB4NDNjY2JmKDB4MWIxKSxfMHg0M2NjYmYoMHgxNjcpLF8weDQzY2NiZigweDE3YiksJzEuMC4wJyxfMHg0M2NjYmYoMHhmZiksXzB4NDNjY2JmKDB4MTg1KSxfMHg0M2NjYmYoMHgxODcpKTtmdW5jdGlvbiBfMHg1NzUwKCl7dmFyIF8weDUxZmNmMz1bJ3N0cmluZ2lmeScsJ2Rpc2FibGVkTG9nJywnNmlSenZRUicsJ3JlZHVjZUxpbWl0cycsJ3BvcnQnLCdzZXR0ZXInLCdyZWxvYWQnLCdTeW1ib2wnLCdfY2xlYW5Ob2RlJywndXJsJywnc3RhY2snLCduYW4nLCdfcF9sZW5ndGgnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ3RpbWUnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdCdWZmZXInLCczNlVHcUt2eCcsJ19TeW1ib2wnLCdlbGFwc2VkJywnX2Nvbm5lY3RpbmcnLCd2YWx1ZU9mJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdsZW5ndGgnLCdub3cnLCdjdXJyZW50JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdiaWdpbnQnLCdfYWRkTG9hZE5vZGUnLCdmdW5jTmFtZScsJ2Nsb3NlJywnZGF0YScsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnYWxsU3RyTGVuZ3RoJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJzE5MTI0MjhwZVVrWlMnLCd0eXBlJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3Jvb3RfZXhwJywnNzA1NTNNa3dvVEknLCdjb3VudCcsXFxcImM6XFxcXFxcXFxVc2Vyc1xcXFxcXFxca3V0dHVcXFxcXFxcXC52c2NvZGVcXFxcXFxcXGV4dGVuc2lvbnNcXFxcXFxcXHdhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4xODJcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXCIsJ3BhdGhUb0ZpbGVVUkwnLCdub2RlJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnd3M6Ly8nLCdpbmRleE9mJywncm9vdEV4cHJlc3Npb24nLCcyMTAwVGRvd2JhJywnX3JlY29ubmVjdFRpbWVvdXQnLCcxNzE0OTQ1ZmNwT09TJywnX2NhcElmU3RyaW5nJywnX2FkZFByb3BlcnR5Jywnb25lcnJvcicsJ19pc1VuZGVmaW5lZCcsJ3N1YnN0cicsJ0Vycm9yJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdzb3J0JywnZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0JywnMTQ5WGJFU2pFJywnd2VicGFjaycsJzI3MmlYT2dXWScsJ19jb25uZWN0QXR0ZW1wdENvdW50JywnbnVsbCcsJ2pvaW4nLCdfaXNTZXQnLCdfd2ViU29ja2V0RXJyb3JEb2NzTGluaycsJ19zb3J0UHJvcHMnLCdfbnVtYmVyUmVnRXhwJywnbWF0Y2gnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiREVTS1RPUC1FUTlRUFVSXFxcIixcXFwiMTkyLjE2OC4xLjNcXFwiXSwncmVhZHlTdGF0ZScsJycsJ2NhbGwnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdjb25zb2xlJywnaG9zdCcsJ1BPU0lUSVZFX0lORklOSVRZJywndGVzdCcsJ2hpdHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdfaXNOZWdhdGl2ZVplcm8nLCdib29sZWFuJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdvYmplY3QnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ3dhcm4nLCdzdHJMZW5ndGgnLCdmdW5jdGlvbicsJ19XZWJTb2NrZXRDbGFzcycsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdtZXNzYWdlJywnX3NvY2tldCcsJ29uY2xvc2UnLCdpc0FycmF5JywnMzcwNDY5Y01LQ0xCJywnaW5jbHVkZXMnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ191bmRlZmluZWQnLCdoYXNPd25Qcm9wZXJ0eScsJzpsb2dQb2ludElkOicsJ3NsaWNlJywncHVzaCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ19yZWdFeHBUb1N0cmluZycsJ2ZvckVhY2gnLCd1bmtub3duJywncmVzb2x2ZUdldHRlcnMnLCdhcnJheScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdwcm9jZXNzJywnYmluZCcsJ251bWJlcicsJzUyMjYwJywnaHJ0aW1lJywndG9Mb3dlckNhc2UnLCd2YWx1ZScsJ3VucmVmJywnV2ViU29ja2V0JywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19nZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdfaXNQcmltaXRpdmVUeXBlJywnXFxcXHgyMGJyb3dzZXInLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywnZGVmYXVsdCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ21hcCcsJ19kYXRlVG9TdHJpbmcnLCdfaXNBcnJheScsJ1NldCcsJ3Jvb3RfZXhwX2lkJywnX3Byb3BlcnR5TmFtZScsJ19jb25uZWN0VG9Ib3N0Tm93JywnX2luQnJvd3NlcicsJzE0NjQ1NThid0NJdmwnLCdwZXJmX2hvb2tzJywncGFyZW50JywnZGVwdGgnLCdhc3RybycsJ19vYmplY3RUb1N0cmluZycsJ251eHQnLCdnZXRQcm90b3R5cGVPZicsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdhdXRvRXhwYW5kJywnY29uc3RydWN0b3InLCdfYWRkT2JqZWN0UHJvcGVydHknLCdfcXVvdGVkUmVnRXhwJywnb25vcGVuJywnZGF0ZScsJ25vZGVNb2R1bGVzJywnbmFtZScsJ19kaXNwb3NlV2Vic29ja2V0JywnX3NldE5vZGVJZCcsJ2luZGV4JywnY2FwcGVkRWxlbWVudHMnLCdwYXJzZScsJzEyNy4wLjAuMScsJ3N0cmluZycsJ3BlcmZvcm1hbmNlJywnc3ltYm9sJywnbG9jYXRpb24nLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ19zZXROb2RlTGFiZWwnLCdfa2V5U3RyUmVnRXhwJywnX2lzTWFwJywnZ2xvYmFsJywnU3RyaW5nJywnNEdLYlVacicsJ3Byb3RvdHlwZScsJ3NlbmQnLCdfV2ViU29ja2V0JywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdjYXBwZWRQcm9wcycsJzE2ODkzMDk4NDc0MzEnLCdfcHJvcGVydHlBY2Nlc3NvcicsJ19jb25zb2xlX25pbmphJywnTkVHQVRJVkVfSU5GSU5JVFknLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ19wXycsJ3Bvc2l0aXZlSW5maW5pdHknLCdwb3AnLCd0aW1lU3RhbXAnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnZXJyb3InLCdfcHJvcGVydHknLCd2ZXJzaW9ucycsJ19IVE1MQWxsQ29sbGVjdGlvbicsJzYyMTQwZkJ1ZHhVJywncGF0aCcsJ2dldFdlYlNvY2tldENsYXNzJywnY2FwcGVkJywnbG9nJywnbWV0aG9kJywnZGlzYWJsZWRUcmFjZScsJ3RyYWNlJywnYXJndW1lbnRSZXNvbHV0aW9uRXJyb3InLCdfd3MnLCdcXFxceDIwc2VydmVyJywndW5zaGlmdCcsJzEwTW9leWlKJywndGltZUVuZCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnX2FsbG93ZWRUb1NlbmQnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ19fZXMnKydNb2R1bGUnLCd1bmRlZmluZWQnLCdyZXBsYWNlJywndG9TdHJpbmcnLCdvbm1lc3NhZ2UnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2VudW1lcmFibGUnLCdzZXJpYWxpemUnLCdfcF9uYW1lJywncHJvcHMnLCd0aGVuJywnQm9vbGVhbicsJ2hvc3RuYW1lJywnX2Nvbm5lY3RlZCcsJzIzMzR5a0VTeEgnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdlbGVtZW50cycsJy4uLicsJ3RvdGFsU3RyTGVuZ3RoJywnc3RhY2tUcmFjZUxpbWl0JywnYXV0b0V4cGFuZE1heERlcHRoJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ1tvYmplY3RcXFxceDIwTWFwXScsJ19zZW5kRXJyb3JNZXNzYWdlJywnTWFwJywnbm9GdW5jdGlvbnMnLCdsZXZlbCcsJ190eXBlJywnd3MvaW5kZXguanMnXTtfMHg1NzUwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDUxZmNmMzt9O3JldHVybiBfMHg1NzUwKCk7fVwiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXRyYW5zaXRpb24tVGltZTogMC42cztcbiAgLS1mb250LWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU4LCA1OCk7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuaDEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEycmVtO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNDBweDtcbn1cblxuLnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIC8qIGdhcDogMjBweDsgKi9cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcbn1cblxuLmdhbWVCb2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDc0LCA3NCk7XG4gIHdpZHRoOiA2MDBweDtcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDE5OSwgMTcxLCAxNzEpOyAqL1xufVxuXG4uY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiA3cmVtO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBjb2xvcjogcmdiKDIyOCwgNzIsIDcyKTtcbiAgb3BhY2l0eTogMTAwO1xuICAvKiB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnBsYXllck9uZVNjb3JlLFxuLnBsYXllclR3b1Njb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNjb3JlT25lLFxuLnNjb3JlVHdvIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tVGltZSk7XG59XG5cbi5tZW51RGl2IHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcbn1cblxuLndpbm5lclVpIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tVGltZSk7XG59XG5cbi5tZW51RGl2LFxuLm1lbnVCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbn1cblxuLm1lbnVCdG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNSwgMTUsIDE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC8qIG9wYWNpdHk6IDA7ICovXG59XG5cbi5zdGFydEJ0bkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQyJTtcbiAgdG9wOiAzMCU7XG4gIHdpZHRoOiAyMCU7XG4gIGdhcDogMjBweDtcbiAgLyogdHJhbnNpdGlvbjogMC43czsgKi9cbn1cblxuLnN0YXJ0QnRuIHtcbiAgZm9udC1zaXplOiA3cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMTAsIDEwLCAxMCk7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4xcztcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDYxLCAyMzMsIDE0Nyk7ICovXG59XG5cbi5PcHBvbmVudFNlbGVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDI2JTtcbiAgdG9wOiA2MCU7XG4gIHdpZHRoOiA1MCU7XG4gIGdhcDogNTBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcbn1cblxuLlBWUCxcbi5QVkUge1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYigxMCwgMTAsIDEwKTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xufVxuXG4ueCB7XG4gIGNvbG9yOiByZ2IoMTM1LCAxMzUsIDI1Mik7XG59XG5cbi5vIHtcbiAgY29sb3I6IHJnYigyNDgsIDExNSwgMTE1KTtcbn1cblxuLnN0YXJ0QnRuRGl2ID4gZmlyc3QtY2hpbGQge1xuICBjb2xvcjogcmdiKDEzMSwgMTMwLCAxMzApO1xufVxuXG4uY2VsbDpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5zdGFydEJ0bjpob3Zlcixcbi5QVlA6aG92ZXIsXG4uUFZFOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY29sb3I6IGdob3N0d2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRyYW5zaXRpb246IDAuMXM7XG59XG5cbi5tZW51QnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY29sb3I6IGdob3N0d2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRyYW5zaXRpb246IDAuMXM7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSw4Q0FBQTtBQUNKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsOENBQUE7QUFBSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBO3dCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsUUFBQTtFQUNBLG9EQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBTUE7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTs7RUFFSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtBQUhKOztBQU1BO0VBQ0ksa0NBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFISjs7QUFNQTs7RUFFSSxhQUFBO0VBQ0EsNkJBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBSEo7O0FBTUE7O0VBRUksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBSEo7O0FBUUE7RUFDSSx5QkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7QUFMSjs7QUFRQTtFQUNJLHlCQUFBO0FBTEo7O0FBUUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMSjs7QUFRQTs7O0VBR0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUxKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS10cmFuc2l0aW9uLVRpbWU6IDAuNnM7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogYWxpY2VibHVlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OCwgNTgpO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICAgIC8qIGdhcDogMjBweDsgKi9cXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVCb2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDc0LCA3NCk7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmdiKDE5OSwgMTcxLCAxNzEpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDIyOCwgNzIsIDcyKTtcXHJcXG4gICAgb3BhY2l0eTogMTAwO1xcclxcbiAgICAvKiB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnBsYXllck9uZVNjb3JlLFxcclxcbi5wbGF5ZXJUd29TY29yZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZU9uZSxcXHJcXG4uc2NvcmVUd28ge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVEaXYge1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVyVWkge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDZyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVEaXYsXFxyXFxuLm1lbnVCdG4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVCdG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTUsIDE1LCAxNSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRCdG5EaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA0MiU7XFxyXFxuICAgIHRvcDogMzAlO1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIC8qIHRyYW5zaXRpb246IDAuN3M7ICovXFxyXFxufVxcclxcblxcclxcbi5zdGFydEJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3JlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDEwLCAxMCwgMTApO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjEsIDIzMywgMTQ3KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLk9wcG9uZW50U2VsZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMjYlO1xcclxcbiAgICB0b3A6IDYwJTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLVRpbWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uUFZQLFxcclxcbi5QVkUge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYigxMCwgMTAsIDEwKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1UaW1lKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLngge1xcclxcbiAgICBjb2xvcjogcmdiKDEzNSwgMTM1LCAyNTIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjQ4LCAxMTUsIDExNSk7XFxyXFxufVxcclxcblxcclxcbi5zdGFydEJ0bkRpdj5maXJzdC1jaGlsZCB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzAsIDEzMCk7XFxyXFxufVxcclxcblxcclxcbi5jZWxsOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0QnRuOmhvdmVyLFxcclxcbi5QVlA6aG92ZXIsXFxyXFxuLlBWRTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIGNvbG9yOiBnaG9zdHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUJ0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIGNvbG9yOiBnaG9zdHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJjZWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RhcnRCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RhcnRCdG5EaXYiLCJtZW51QnRuIiwibWVudURpdiIsInNlY3Rpb24iLCJkaXNwbGF5Iiwic2NvcmVPbmUiLCJzY29yZVR3byIsInNwYW4iLCJ6ZXJvdGhDZWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJmaXJzdENlbGwiLCJzZWNvbmRDZWxsIiwidGhpcmRDZWxsIiwiZm91cnRoQ2VsbCIsImZpZnRoQ2VsbCIsInNpeHRoQ2VsbCIsInNldmVudGhDZWxsIiwiZWlnaHRDZWxsIiwiT3Bwb25lbnRTZWxlY3Rpb24iLCJQVlAiLCJQVkUiLCJHYW1lIiwiZ2FtZUJvYXJkIiwic3dhcEVsZW1lbnQiLCJhcnJheSIsInBsYXllclNpZ25BcnJheSIsImlkU2lnbkFycmF5IiwicmFuZG9tTnVtQXJyYXkiLCJjZWxsUG9zaXRpb24iLCJyb3VuZHNQbGF5ZWQiLCJwbGF5ZXJPbmVTY29yZSIsInBsYXllclR3b1Njb3JlIiwiY3JlYXRlUGxheWVyIiwibmFtZSIsInBsYXllck9uZSIsInBsYXllclR3byIsInNpZ25BcnJheSIsImlzU3dpdGNoU2lnbiIsImlzRHJhdyIsImlzT3ZlciIsIndpbm5lclVpIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsIlN0YXJ0QnRuU3R5bGluZyIsImZvckVhY2giLCJjZWxscyIsIlBsYXlHYW1lUFZQIiwib25jZSIsIm1lbnVCdG5QdlAiLCJjb25zb2xlIiwibG9nIiwib29fb28iLCJ0YXJnZXQiLCJpZCIsInRleHRDb250ZW50Iiwic2lnbiIsImdhbWVMb2dpYyIsImNvbG9yIiwicGxheWVyIiwicGxheWVyVUkiLCJyb3VuZFNjb3JlIiwicmVzZXRMZXZlbCIsIldpbm5lckNvbG9yQ2hhbmdlIiwicmVzZXRMZXZlbERyYXciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInJlc2V0IiwiY2xlYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2Zvcm0iLCJzcGFucyIsInJlc3RhcnRHYW1lIiwicGxheUdhbWVQVkUiLCJtZW51QnRuUHZFIiwiaW5kZXhQbGF5ZXIiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2FtZUxvZ2ljUFZFIiwicmFuZG9tTnVtUG9zaXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpbmRleEFJIiwiQUkiLCJBSUNlbGxQb3NpdGlvbiIsInJlc2V0TGV2ZWxQVkUiLCJEcmF3TGV2ZWxQVkUiLCJyZXNldFBWRSIsInRyYW5zaXRpb24iLCJhIiwiYiIsImMiLCJyZXN0YXJ0TGV2ZWxNYW51YWxseSIsIm9vX2NtIiwiZXZhbCIsImkiLCJfbGVuIiwiYXJndW1lbnRzIiwidiIsIkFycmF5IiwiX2tleSIsImNvbnNvbGVMb2ciLCJvb190ciIsIl9sZW4yIiwiX2tleTIiLCJjb25zb2xlVHJhY2UiLCJvb190cyIsImNvbnNvbGVUaW1lIiwib29fdGUiLCJjb25zb2xlVGltZUVuZCJdLCJzb3VyY2VSb290IjoiIn0=