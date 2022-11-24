const cell = document.querySelectorAll(".cell");

const GameBoard = {
    gameBoard: ["o", "x"],
    swapElement(array) { // to swap the value using destructor
        [this.gameBoard[0], this.gameBoard[1]] = [this.gameBoard[1], this.gameBoard[0]];
        console.log(` SwapElements : ${GameBoard.gameBoard}`);
    }
}

const createPlayer = function (name) {
    return { name };
}

let playerOne = createPlayer("PlayerOne");
let playerTwo = createPlayer("PlayerTwo");

let signArray = GameBoard.gameBoard;
let isClicked = false; // only can press a SinglePiece
let isSwitch = false; // to switch player

for (let cells of cell) {
    if (!isClicked) {
        isClicked = true;
        cells.addEventListener("click", e => {
            if (!isSwitch) {
                isSwitch = true
                GameBoard.swapElement(signArray);
                cells.textContent = signArray[0];
                playerOne.sign = cells.textContent;
                console.log("First Player");
                console.log("------------------------------------------------------");
            }
        })
    }
    else {
        isClicked = false;
        console.log
        cells.addEventListener("click", e => {
            if (isSwitch) {
                isSwitch = false
                GameBoard.swapElement(signArray);
                cells.textContent = signArray[0];
                playerTwo.sign = cells.textContent;
                console.log("Second Player");
                console.log("------------------------------------------------------");
            }
        })
    }
}
// if (!isClicked) {
//     isClicked = true;
// }
// else {
//     isClicked = false;
//     console.log
// }



function switchPlayer() {

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