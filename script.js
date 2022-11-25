// when the player click
// if the pattern is correct
// condition is needde

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
let pos = 0;


for (let cells of cell) {
    cells.addEventListener("click", e => {
        pos = e.target.id;
        pos = +pos; // + converts the string to int
        Game.idSignArray[pos] = pos; // insert the value to array at specific position 
        // console.log(`ID : ${e.target.id}`)
        // console.log(typeof (idCollector));
        console.log(`ID Position : ${pos}`)
        console.log(Game.idSignArray);


        if (!isSwitchSign) {
            isSwitchSign = true
            Game.swapElement(signArray);
            cells.textContent = signArray[0];
            playerOne.sign = cells.textContent;

            Game.playerSignArray[pos] = playerOne.sign;
            // GameBoard.playerSignArray.splice(pos++, 0, playerOne.sign);
            // GameBoard.newArray.push(playerOne.sign);

            console.log(Game.playerSignArray);
            console.log("First Player");
            console.log("------------------------------------------------------");
        }
        else {
            isSwitchSign = false;
            Game.swapElement(signArray);
            cells.textContent = signArray[0];
            playerTwo.sign = cells.textContent;

            Game.playerSignArray[pos] = playerTwo.sign;
            // GameBoard.playerSignArray.splice(pos++, 0, playerTwo.sign);
            // GameBoard.newArray.push(playerTwo.sign);

            console.log("Second Player");
            console.log(Game.playerSignArray);
            console.log("------------------------------------------------------");
        }
    }, { once: true }) // so that each cell will only take one sign and switch player 
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