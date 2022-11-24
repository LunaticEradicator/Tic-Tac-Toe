// click sign x 
// click again change sign to o


const eachPiece = document.querySelectorAll(".eachPiece");

const GameBoard = {
    gameBoard: ["o", "x"],
    swapElement(array) { // to swap the value using destructor
        [this.gameBoard[0], this.gameBoard[1]] = [this.gameBoard[1], this.gameBoard[0]];
        console.log(`Is the function working :${GameBoard.gameBoard}`);
    }
}

const createPlayer = function (name) {
    return { name };
}

const playerOne = createPlayer("PlayerOne");
const playerTwo = createPlayer("PlayerTwo");


let signArray = GameBoard.gameBoard;
for (let eachPieces of eachPiece) {
    eachPieces.addEventListener("click", e => {
        GameBoard.swapElement(signArray);
        eachPieces.textContent = signArray[0];
        // playerOne.textContent = signArray;
        // console.log(playerOne);
        // console.log(signArray);
    })
}

function switchPlayer() {
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
}


// const gameBoard = ["x", "o", "x", "o"];


