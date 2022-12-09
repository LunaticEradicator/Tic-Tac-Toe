// when the player click
// if the pattern is correct
// condition is needed

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

const zerothCell = document.getElementById("0")
const firstCell = document.getElementById("1")
const secondCell = document.getElementById("2")
const thirdCell = document.getElementById("3")
const fourthCell = document.getElementById("4")
const fifthCell = document.getElementById("5")
const sixthCell = document.getElementById("6")
const seventhCell = document.getElementById("7")
const eightCell = document.getElementById("8")


const Game = {
    gameBoard: ["o", "x"],
    swapElement(array) { // to swap the value using destructor
        [this.gameBoard[0], this.gameBoard[1]] = [this.gameBoard[1], this.gameBoard[0]];
        // console.log(` SwapElements !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: ${this.gameBoard}`);
    },
    playerSignArray: [],
    idSignArray: []
}

const createPlayer = function (name) {
    return { name };
}

let signArray; // selecting the sign
let playerOne = createPlayer("Player One");
let playerTwo = createPlayer("Player Two");
let isSwitchSign = false; // to switch player
let cellPosition = 0;
let roundsPlayed = 0;
let isDraw = false; // checking for draw
let playerOneScore = 0;
let playerTwoScore = 0;
let isOver = false;


const winnerUi = document.createElement("div");
winnerUi.classList.add("winnerUi");
section.append(winnerUi);
// winnerUi.textContent = `winner is the Winner`;
// winnerUi.style.visibility = "visible";
// winnerUi.style.opacity = 100;


cell.forEach(cells => {
    cells.addEventListener("click", PlayGame, { once: true }); // Third Parameter - Makes selection once per player
})

function PlayGame(e) {
    // this here is cells 
    signArray = Game.gameBoard; // to make playerOne select "x" after restart
    // console.log(`playerOneScore ${playerOneScore}`)
    // console.log(`playerTwoScore ${playerTwoScore}`)
    // console.log(`SignArray Before the flip`);
    // console.log(signArray);

    roundsPlayed++; // for draw condition 
    console.log(`ArrayLength : ${roundsPlayed}`);

    cellPosition = e.target.id; // id of the html element
    cellPosition = +cellPosition; // + converts the string to int
    Game.idSignArray[cellPosition] = cellPosition; // insert the value to array at specific position

    // console.log(`Cell Position : ${cellPosition}`)
    // console.log(Game.idSignArray);

    // Player Switching
    if (!isSwitchSign) { // Player One
        isSwitchSign = true
        Game.swapElement(signArray);
        this.textContent = signArray[0]; // select the first sign item and then flips it
        playerOne.sign = this.textContent;
        Game.playerSignArray[cellPosition] = playerOne.sign; // insert the value to array at specific position
        gameLogic(playerOne, scoreOne);
        console.log("First Player Position");
        // this.style.color = "rgb(131, 130, 130)";
        this.style.color = "rgb(90, 90, 230)";
        // this.style.backgroundColor = "azure";

        // console.log(`SignArray After the flip`);
        // console.log(signArray);
        console.log("------------------------------------------------------");
    }
    else { // Player Two
        isSwitchSign = false;
        Game.swapElement(signArray);
        this.textContent = signArray[0]; // select the first sign item and then flips it
        playerTwo.sign = this.textContent;
        Game.playerSignArray[cellPosition] = playerTwo.sign;
        gameLogic(playerTwo, scoreTwo);
        console.log("Second Player Position");
        this.style.color = "rgb(228, 72, 72)";

        // console.log(`SignArray After the flip`);
        // console.log(signArray);
        console.log("------------------------------------------------------");
    }
}

function gameLogic(player, playerUI) {
    if (!isDraw) {
        // Horizontal Chance
        if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[1] === player.sign && Game.playerSignArray[2] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(zerothCell, firstCell, secondCell);
        }

        else if (Game.playerSignArray[3] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[5] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(thirdCell, fourthCell, fifthCell);

        }
        else if (Game.playerSignArray[6] === player.sign && Game.playerSignArray[7] === player.sign && Game.playerSignArray[8] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(sixthCell, seventhCell, eightCell);

        }

        // Vertical Chance
        else if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[3] === player.sign && Game.playerSignArray[6] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(zerothCell, thirdCell, sixthCell);

        }
        else if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[7] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(firstCell, fourthCell, seventhCell);
        }
        else if (Game.playerSignArray[2] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[8] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(secondCell, fifthCell, eightCell);
        }

        // Diagonal Chance
        else if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[8] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(zerothCell, fourthCell, eightCell);
        }
        else if (Game.playerSignArray[6] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[2] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            resetLevel(player);
            WinnerColorChange(sixthCell, fourthCell, secondCell);
        }

        // Draw
        else if (roundsPlayed === 9) {
            isDraw = false;
            resetLevelDraw(player);
        }
    }

};

function roundScore(player, playerUI) {
    if (player === playerOne) {
        playerOneScore++;
        playerUI.textContent = playerOneScore;
        scoreOne.style.color = "springgreen";
        scoreOne.style.transform = "scale(3.5)";
        console.log(`PlayerOne : ${playerOneScore}`);
    }
    else if (player === playerTwo) {
        playerTwoScore++;
        playerUI.textContent = playerTwoScore;
        scoreOne.style.color = "springgreen";
        scoreOne.style.transform = "scale(3.5)";
        console.log(`PlayerTwo : ${playerTwoScore}`);
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
    playerOneScore = 0;
    playerTwoScore = 0;
}

function reset() {
    for (let cells of cell) {
        console.clear();
        cells.removeEventListener("click", PlayGame, { once: true });
        cells.textContent = "";
        roundsPlayed = 0;
        Game.playerSignArray = [];
        Game.idSignArray = [];
        isSwitchSign = false;
        isDraw = false;
        Game.gameBoard = ["o", "x"];
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

        winnerUi.style.visibility = "hidden";
        winnerUi.style.opacity = 0;
        console.log(Game.playerSignArray);

        cells.addEventListener("click", PlayGame, { once: true });


    }
}

function resetLevel(player) {
    for (let cells of cell) {
        cells.removeEventListener("click", PlayGame, { once: true });      //stops the game
        winnerUi.textContent = `${player.name} is the Winner`;
        winnerUi.style.visibility = "visible";
        winnerUi.style.opacity = 100;
        // restartLevelManually();
    }
    setTimeout(reset, 1300);              // dynamic restart
}

function resetLevelDraw(player) {
    for (let cells of cell) {
        cells.removeEventListener("click", PlayGame, { once: true });      //stops the game
        winnerUi.textContent = `Level Ended in a Draw`;
        winnerUi.style.visibility = "visible";
        winnerUi.style.opacity = 100;
        // restartLevelManually();
    }
    setTimeout(reset, 1300);              // dynamic restart
}

function restartLevelManually() {
    for (let cells of cell) {
        isOver = false; // reset Game Over to false     // manual restart
        cells.addEventListener("click", e => {
            if (!isOver) {
                reset();
                isOver = true;

            }
        })
    }
}



startBtn.addEventListener("click", e => {
    startBtnDiv.style.visibility = "hidden";
    startBtn.style.visibility = "hidden";

    for (let spans of span) { //startButton Styling
        spans.style.opacity = 0;
    }
    section.style.visibility = "visible";
    section.style.opacity = 100;
})

menuBtn.addEventListener("click", e => {
    startBtnDiv.style.visibility = "visible";
    startBtn.style.visibility = "visible";
    for (let spans of span) { //startButton Styling
        spans.style.opacity = 100;
    }
    section.style.visibility = "hidden";
    section.style.opacity = 0;
    reset();
    restartGame();
});

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

//Player Swap Using Destructing

// const gameBoard = ["x", "o", "x", "o"];
  //     if (playerTwo) {
    //         // switchPlayer()
    //         eachPieces.textContent = sign[1];
    //         playerTwo.textContent = sign.textContent;
    //         console.log(`The Sign is :${sign}`);
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