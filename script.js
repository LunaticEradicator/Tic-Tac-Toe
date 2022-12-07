// when the player click
// if the pattern is correct
// condition is needed

const cell = document.querySelectorAll(".cell");
const startBtn = document.querySelector(".startBtn");
const startBtnDiv = document.querySelector(".startBtnDiv");
const restartBtn = document.querySelector(".restartBtn");
const restartDiv = document.querySelector(".restartDiv");
const section = document.querySelector(".section");
const display = document.querySelector(".display");
const scoreOne = document.querySelector(".scoreOne");
const scoreTwo = document.querySelector(".scoreTwo");
const span = document.querySelectorAll("span");


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
let arrayLength = 0;
let isDraw = false; // checking for draw
let playerOneScore = 0;
let playerTwoScore = 0;

const winnerUi = document.createElement("div");
winnerUi.classList.add("winnerUi");
restartDiv.append(winnerUi);


function PlayGame(e) {
    signArray = Game.gameBoard; // to make playerOne select "x" after restart
    // console.log(`playerOneScore ${playerOneScore}`)
    // console.log(`playerTwoScore ${playerTwoScore}`)
    // console.log(`SignArray Before the flip`);
    // console.log(signArray);

    arrayLength++;
    console.log(`ArrayLength : ${arrayLength}`);

    cellPosition = e.target.id;
    cellPosition = +cellPosition; // + converts the string to int
    Game.idSignArray[cellPosition] = cellPosition; // insert the value to array at specific position 

    // console.log(`Cell Position : ${cellPosition}`)
    console.log(Game.idSignArray);

    if (!isSwitchSign) { // switching between player
        const winnerUi = document.createElement("div");
        winnerUi.classList.add("winnerUi");
        section.append(winnerUi);

        isSwitchSign = true
        Game.swapElement(signArray);
        this.textContent = signArray[0]; // select the first sign item and then flips it
        playerOne.sign = this.textContent;
        Game.playerSignArray[cellPosition] = playerOne.sign; // insert the value to array at specific position
        gameLogic(playerOne, scoreOne);
        console.log("First Player Position");

        // console.log(`SignArray After the flip`);
        // console.log(signArray);

        console.log("------------------------------------------------------");
    }
    else {
        const winnerUi = document.createElement("div");
        winnerUi.classList.add("winnerUi");
        section.append(winnerUi);

        isSwitchSign = false;
        Game.swapElement(signArray);
        this.textContent = signArray[0]; // select the first sign item and then flips it
        playerTwo.sign = this.textContent;
        Game.playerSignArray[cellPosition] = playerTwo.sign;
        gameLogic(playerTwo, scoreTwo);
        console.log("Second Player Position");
        // console.log(`SignArray After the flip`);
        // console.log(signArray);
        console.log("------------------------------------------------------");
    }
}





cell.forEach(cells => {
    cells.addEventListener("click", PlayGame, { once: true }); // Third Parameter - Makes selection once per player

    function restartLevel() {
        console.clear();
        cells.removeEventListener("click", PlayGame, { once: true });
        cells.textContent = "";
        arrayLength = 0;
        Game.playerSignArray = [];
        Game.idSignArray = [];
        isSwitchSign = false;
        isDraw = false;
        Game.gameBoard = ["o", "x"];
        winnerUi.textContent = "";

        scoreOne.textContent = 0;
        scoreTwo.textContent = 0;
        playerOneScore = 0;
        playerTwoScore = 0;

        console.log(Game.playerSignArray);
        cells.addEventListener("click", PlayGame, { once: true });

        // restartDiv.style.visibility = "visible";
        // restartBtn.style.opacity = 100;
    }
})

function nice() {

}

function restart() {
    for (let cells of cell) {
        console.clear();
        cells.removeEventListener("click", PlayGame, { once: true });
        cells.textContent = "";
        arrayLength = 0;
        Game.playerSignArray = [];
        Game.idSignArray = [];
        isSwitchSign = false;
        isDraw = false;
        Game.gameBoard = ["o", "x"];
        winnerUi.textContent = "";
        console.log(Game.playerSignArray);
        cells.addEventListener("click", PlayGame, { once: true });
    }

}

function gameLogic(player, playerUI) {
    if (!isDraw) {
        //Horizontal
        if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[1] === player.sign && Game.playerSignArray[2] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            for (let cells of cell) {
                cells.removeEventListener("click", PlayGame, { once: true });      //fix this

            }


            // restart()
            setTimeout(restart, 1500);
            console.log(player.name)

            winnerUi.textContent = `${player.name} is the Winner`;
            restartDiv.style.visibility = "visible";
            restartDiv.style.opacity = 100;
            // restartBtn.style.opacity = 100;
            // winnerUi.style.visibility = "visible";
            // winnerUi.style.opacity = 100;

        }
        else if (Game.playerSignArray[3] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[5] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            // alert(`${player.sign} is the Winner`)
            winnerUi.textContent = `${player.name} is the Winner`;
        }
        else if (Game.playerSignArray[6] === player.sign && Game.playerSignArray[7] === player.sign && Game.playerSignArray[8] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            // alert(`${player.sign} is the Winner`)
            winnerUi.textContent = `${player.name} is the Winner`;
        }

        //vertical
        else if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[3] === player.sign && Game.playerSignArray[6] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            // alert(`${player.sign} is the Winner`)
            winnerUi.textContent = `${player.name} is the Winner`
        }
        else if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[7] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            // alert(`${player.sign} is the Winner`)
            winnerUi.textContent = `${player.name} is the Winner`
        }
        else if (Game.playerSignArray[2] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[8] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            // alert(`${player.sign} is the Winner`)
            winnerUi.textContent = `${player.name} is the Winner`
        }

        //Diagonal
        else if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[8] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            // alert(`${player.sign} is the Winner`)
            winnerUi.textContent = `${player.name} is the Winner`
        }
        else if (Game.playerSignArray[6] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[2] === player.sign) {
            isDraw = true;
            roundScore(player, playerUI);
            // alert(`${player.sign} is the Winner`)
            winnerUi.textContent = `${player.name} is the Winner`
        }

        //Draw
        else if (arrayLength === 9) {
            isDraw = false;
            alert("Round Draw");
        }
    }

};








function roundScore(player, playerUI) {
    if (player === playerOne) {
        playerOneScore++;
        playerUI.textContent = playerOneScore;
        console.log(`PlayerOne : ${playerOneScore}`);
    }
    else if (player === playerTwo) {
        playerTwoScore++;
        playerUI.textContent = playerTwoScore;
        console.log(`PlayerTwo : ${playerTwoScore}`);
    }
}



startBtn.addEventListener("click", e => {
    // startBtn.style.opacity = 0;
    startBtnDiv.style.visibility = "hidden";
    for (let spans of span) {
        spans.style.opacity = 0;
    }
    section.style.visibility = "visible";
    section.style.opacity = 100;
})

restartBtn.addEventListener("click", e => {
    startBtnDiv.style.visibility = "visible";
    for (let spans of span) {
        spans.style.opacity = 100;
    }
    section.style.visibility = "hidden";
    section.style.opacity = 0;
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