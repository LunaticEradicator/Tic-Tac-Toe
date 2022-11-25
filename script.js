// when the player click
// if the pattern is correct
// condition is needed

const cell = document.querySelectorAll(".cell");

const Game = {
    gameBoard: ["o", "x"],
    swapElement(array) { // to swap the value using destructor
        [this.gameBoard[0], this.gameBoard[1]] = [this.gameBoard[1], this.gameBoard[0]];
        // console.log(` SwapElements : ${GameBoard.gameBoard}`);
    },
    playerSignArray: [],
    idSignArray: []
}

const createPlayer = function (name) {
    return { name };
}

let playerOne = createPlayer("PlayerOne");
let playerTwo = createPlayer("PlayerTwo");
let signArray = Game.gameBoard;
let isSwitchSign = false; // to switch player
let cellPosition = 0;

function CellsPosition() {

}


for (let cells of cell) {
    cells.addEventListener("click", e => {
        cellPosition = e.target.id;
        cellPosition = +cellPosition; // + converts the string to int
        Game.idSignArray[cellPosition] = cellPosition; // insert the value to array at specific position 

        // console.log(`ID : ${e.target.id}`)
        // console.log(typeof (idCollector));
        console.log(`Cell Position : ${cellPosition}`)
        console.log(Game.idSignArray);


        if (!isSwitchSign) {
            isSwitchSign = true
            Game.swapElement(signArray);
            cells.textContent = signArray[0]; // select the first sign item and then flips it
            playerOne.sign = cells.textContent;

            Game.playerSignArray[cellPosition] = playerOne.sign; // insert the value to array at specific position
            // GameBoard.playerSignArray.splice(pos++, 0, playerOne.sign);
            // GameBoard.newArray.push(playerOne.sign);

            playerOneGameLogic(playerOne);
            console.log("First Player Position");
            console.log(Game.playerSignArray);
            console.log("------------------------------------------------------");
        }
        else {
            isSwitchSign = false;
            Game.swapElement(signArray);
            cells.textContent = signArray[0]; // select the first sign item and then flips it
            playerTwo.sign = cells.textContent;

            Game.playerSignArray[cellPosition] = playerTwo.sign;
            // GameBoard.playerSignArray.splice(pos++, 0, playerTwo.sign);
            // GameBoard.newArray.push(playerTwo.sign);

            // if (Game.playerSignArray.includes(playerTwo.sign)) {
            //     console.log("nice!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            // }

            playerOneGameLogic(playerTwo);

            console.log("Second Player Position");
            console.log(Game.playerSignArray);
            console.log("------------------------------------------------------");
        }

        // Game Logic
        // if (Game.idSignArray === 0) {
        //     alert("Winner")
        // }

        // console.log(playerOne.sign);
        // console.log(playerTwo.sign);



        // if (Game.idSignArray.includes(0) && Game.idSignArray.includes(1) && Game.idSignArray.includes(2) ) {
        //     alert("Winner");
        // }

    }, { once: true }) // so that each cell will only take one sign and switch player 
}



function playerOneGameLogic(player) {

    if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[1] === player.sign && Game.playerSignArray[2] === player.sign) {
        alert(`!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    }
    else if (Game.playerSignArray[3] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[5] === player.sign) {
        alert(`!!!!!!!!!!!!!!!!!!!WINNER ${player.sign}`)
    }
    else if (Game.playerSignArray[6] === player.sign && Game.playerSignArray[7] === player.sign && Game.playerSignArray[8] === player.sign) {
        alert(`"!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    }
    //vertical
    else if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[3] === player.sign && Game.playerSignArray[6] === player.sign) {
        alert(`!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    }
    else if (Game.playerSignArray[1] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[7] === player.sign) {
        alert(`!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    }
    else if (Game.playerSignArray[2] === player.sign && Game.playerSignArray[5] === player.sign && Game.playerSignArray[8] === player.sign) {
        alert(`!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    }
    //Diagonal
    else if (Game.playerSignArray[0] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[8] === player.sign) {
        alert(`!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    }
    else if (Game.playerSignArray[6] === player.sign && Game.playerSignArray[4] === player.sign && Game.playerSignArray[2] === player.sign) {
        alert(`!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    }


    // switch (player) {
    //     case [0] === player.sign && Game.playerSignArray[1] === player.sign && Game.playerSignArray[2] === player.sign:
    //         alert(`!!!!!!!!!!!!!!!!!!!WINNER  ${player.sign}`)
    //         break;

    //     default:
    //         // alert(`Not Winner`)
    //         break;
    // }

    // horizontal
}

function switchPlayer() {

}

function DisplaySign() {
    for (let cells of cell) {
        cells.addEventListener("click", e => {

            if (!isSwitchSign) {
                isSwitchSign = true
                Game.swapElement(signArray);
                cells.textContent = signArray[0];
                playerOne.sign = cells.textContent;
                console.log("First Player");
                console.log("------------------------------------------------------");
            }


            else if (isSwitchSign) {
                isSwitchSign = false;
                Game.swapElement(signArray);
                cells.textContent = signArray[0];
                playerTwo.sign = cells.textContent;
                console.log("Second Player");
                console.log("------------------------------------------------------");
            }


        })
    }
}

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