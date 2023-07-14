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

const Game = {
  gameBoard: ["x", "o"], // change this on PvP
  swapElement(array) {
    // to swap the value using destructor
    [this.gameBoard[0], this.gameBoard[1]] = [
      this.gameBoard[1],
      this.gameBoard[0],
    ];
  },
  playerSignArray: [],
  idSignArray: [],
  randomNumArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  cellPosition: 0,
  roundsPlayed: 0,
  playerOneScore: 0,
  playerTwoScore: 0,
};

const createPlayer = function (name) {
  return { name };
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

startBtn.addEventListener("click", (e) => {
  OpponentSelection.style.visibility = "visible";
  OpponentSelection.style.opacity = "100";
  PVP.style.visibility = "visible";
  PVP.style.opacity = "100";
  PVE.style.visibility = "visible";
  PVE.style.opacity = "100";
});

PVP.addEventListener("click", (e) => {
  StartBtnStyling();
  cell.forEach((cells) => {
    cells.addEventListener("click", PlayGamePVP, { once: true }); // Third Parameter - Makes selection once per player
    menuBtnPvP();
  });

  function PlayGamePVP(e) {
    console.log(this); // this = cells
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

      console.log("First Player Position");
      console.log(Game.playerSignArray);
      console.log(
        "------------------------------------------------------ PLayer One "
      );
    } else {
      isSwitchSign = false;
      this.textContent = signArray[1];
      playerTwo.sign = this.textContent;
      Game.playerSignArray[Game.cellPosition] = playerTwo.sign;
      gameLogic(playerTwo, scoreTwo);
      this.style.color = "rgb(228, 72, 72)";

      console.log("Second Player Position");
      console.log(Game.playerSignArray);
      console.log(
        "------------------------------------------------------ player Two"
      );
    }
  }

  function gameLogic(player, playerUI) {
    if (!isDraw) {
      // Horizontal Chance
      if (
        Game.playerSignArray[1] === player.sign &&
        Game.playerSignArray[2] === player.sign &&
        Game.playerSignArray[3] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(zerothCell, firstCell, secondCell);
      } else if (
        Game.playerSignArray[4] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[6] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(thirdCell, fourthCell, fifthCell);
      } else if (
        Game.playerSignArray[7] === player.sign &&
        Game.playerSignArray[8] === player.sign &&
        Game.playerSignArray[9] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(sixthCell, seventhCell, eightCell);
      }

      // Vertical Chance
      else if (
        Game.playerSignArray[1] === player.sign &&
        Game.playerSignArray[4] === player.sign &&
        Game.playerSignArray[7] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(zerothCell, thirdCell, sixthCell);
      } else if (
        Game.playerSignArray[2] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[8] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(firstCell, fourthCell, seventhCell);
      } else if (
        Game.playerSignArray[3] === player.sign &&
        Game.playerSignArray[6] === player.sign &&
        Game.playerSignArray[9] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(secondCell, fifthCell, eightCell);
      }

      // Diagonal Chance
      else if (
        Game.playerSignArray[1] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[9] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevel(player);
        WinnerColorChange(zerothCell, fourthCell, eightCell);
      } else if (
        Game.playerSignArray[7] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[3] === player.sign
      ) {
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
      cells.removeEventListener("click", PlayGamePVP, { once: true }); // stops the game
      winnerUi.textContent = `${player.name} is the Winner`;
      winnerUi.style.visibility = "visible";
      winnerUi.style.opacity = 100;
      // restartLevelManually();
    }
    setTimeout(reset, 1300); // dynamic restart
  }

  function resetLevelDraw() {
    for (const cells of cell) {
      cells.removeEventListener("click", PlayGamePVP, { once: true }); // stops the game
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
      cells.removeEventListener("click", PlayGamePVP, { once: true });
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
      console.log(Game.playerSignArray);

      cells.addEventListener("click", PlayGamePVP, { once: true });
    }
  }

  function menuBtnPvP() {
    menuBtn.addEventListener("click", (e) => {
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
          cells.removeEventListener("click", PlayGamePVP, { once: true });
        }
      }
    });
  }
});

PVE.addEventListener("click", (e) => {
  StartBtnStyling();
  cell.forEach((cells) => {
    cells.addEventListener("click", playGamePVE, { once: true }); // Third Parameter - Makes selection once per player
    menuBtnPvE();
  });

  function playGamePVE(e) {
    if (this.textContent === "") {
      console.log(this);

      signArray = Game.gameBoard;
      // ------------------------Player One  ------------------------ //

      console.log("Player One -------------");
      Game.cellPosition = e.target.id; // id of the html element
      Game.cellPosition = +Game.cellPosition; // + converts the string to int
      const indexPlayer = Game.randomNumArray.indexOf(Game.cellPosition);
      console.log(indexPlayer);
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

      console.log("AI ----------------");
      if (Game.roundsPlayed < 5) {
        // stop randomNumPosition creating after game draw
        // Non Duplicate RandomNumber
        const randomNumPosition =
          Game.randomNumArray[
            Math.floor(Math.random() * Game.randomNumArray.length)
          ];
        const indexAI = Game.randomNumArray.indexOf(randomNumPosition);
        if (indexAI > -1) {
          Game.randomNumArray.splice(indexAI, 1); // removes a number from the array, so the random number won't repeat
        }

        const AI = document.querySelector(
          `.cell:nth-child(${randomNumPosition})`
        );
        console.log(`This is AI : ${randomNumPosition}`);
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
      console.log(Game.playerSignArray);
      console.log(`--------------------------------${Game.roundsPlayed}`);
    }
  }

  function gameLogicPVE(player, playerUI) {
    if (!isDraw) {
      // Horizontal Chance
      if (
        Game.playerSignArray[1] === player.sign &&
        Game.playerSignArray[2] === player.sign &&
        Game.playerSignArray[3] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(zerothCell, firstCell, secondCell);
      } else if (
        Game.playerSignArray[4] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[6] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(thirdCell, fourthCell, fifthCell);
      } else if (
        Game.playerSignArray[7] === player.sign &&
        Game.playerSignArray[8] === player.sign &&
        Game.playerSignArray[9] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(sixthCell, seventhCell, eightCell);
      }

      // Vertical Chance
      else if (
        Game.playerSignArray[1] === player.sign &&
        Game.playerSignArray[4] === player.sign &&
        Game.playerSignArray[7] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(zerothCell, thirdCell, sixthCell);
      } else if (
        Game.playerSignArray[2] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[8] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(firstCell, fourthCell, seventhCell);
      } else if (
        Game.playerSignArray[3] === player.sign &&
        Game.playerSignArray[6] === player.sign &&
        Game.playerSignArray[9] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(secondCell, fifthCell, eightCell);
      }

      // Diagonal Chance
      else if (
        Game.playerSignArray[1] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[9] === player.sign
      ) {
        isDraw = true;
        roundScore(player, playerUI);
        resetLevelPVE(player);
        WinnerColorChange(zerothCell, fourthCell, eightCell);
      } else if (
        Game.playerSignArray[7] === player.sign &&
        Game.playerSignArray[5] === player.sign &&
        Game.playerSignArray[3] === player.sign
      ) {
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
      cells.removeEventListener("click", playGamePVE, { once: true }); // stops the game
      winnerUi.textContent = `${player.name} is the Winner`;
      winnerUi.style.visibility = "visible";
      winnerUi.style.opacity = 100;
      // restartLevelManually();
    }
    setTimeout(resetPVE, 1300); // dynamic restart
  }

  function DrawLevelPVE() {
    for (const cells of cell) {
      cells.removeEventListener("click", playGamePVE, { once: true }); // stops the game
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
      cells.removeEventListener("click", playGamePVE, { once: true });
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

      cell.forEach((cells) => {
        cells.style.color = "rgb(228, 72, 72)";
      });

      scoreOne.style.color = "white";
      scoreOne.style.transform = "scale(1)";
      scoreTwo.style.color = "white";
      scoreTwo.style.transform = "scale(1)";

      winnerUi.style.visibility = "hidden";
      winnerUi.style.opacity = 0;
      console.log(Game.playerSignArray);

      cells.addEventListener("click", playGamePVE, { once: true });
    }
  }

  function menuBtnPvE() {
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
      resetPVE();
      restartGame();
      if (PVP) {
        for (const cells of cell) {
          cells.removeEventListener("click", playGamePVE, { once: true });
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
    console.log(`PlayerOne: ${Game.playerOneScore} `);
  } else if (player === playerTwo) {
    Game.playerTwoScore++;
    playerUI.textContent = Game.playerTwoScore;
    scoreTwo.style.color = "springgreen";
    scoreTwo.style.transform = "scale(3.5)";
    console.log(`PlayerTwo: ${Game.playerTwoScore} `);
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
    cells.addEventListener("click", (e) => {
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
