//! function restartLevelManually() {
//   for (const cells of cell) {
//     isOver = false; // reset Game Over to false     // manual restart
//     cells.addEventListener("click", (e) => {
//       if (!isOver) {
//         reset();
//         isOver = true;
//       }
//     });
//   }
// }

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
// ! }

//! function gameLogicPVE(player, playerUI) {
//   if (!isDraw) {
//     // Horizontal Chance
//     if (
//       Game.playerSignArray[1] === player.sign &&
//       Game.playerSignArray[2] === player.sign &&
//       Game.playerSignArray[3] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(zerothCell, firstCell, secondCell);
//     } else if (
//       Game.playerSignArray[4] === player.sign &&
//       Game.playerSignArray[5] === player.sign &&
//       Game.playerSignArray[6] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(thirdCell, fourthCell, fifthCell);
//     } else if (
//       Game.playerSignArray[7] === player.sign &&
//       Game.playerSignArray[8] === player.sign &&
//       Game.playerSignArray[9] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(sixthCell, seventhCell, eightCell);
//     }

//     // Vertical Chance
//     else if (
//       Game.playerSignArray[1] === player.sign &&
//       Game.playerSignArray[4] === player.sign &&
//       Game.playerSignArray[7] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(zerothCell, thirdCell, sixthCell);
//     } else if (
//       Game.playerSignArray[2] === player.sign &&
//       Game.playerSignArray[5] === player.sign &&
//       Game.playerSignArray[8] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(firstCell, fourthCell, seventhCell);
//     } else if (
//       Game.playerSignArray[3] === player.sign &&
//       Game.playerSignArray[6] === player.sign &&
//       Game.playerSignArray[9] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(secondCell, fifthCell, eightCell);
//     }

//     // Diagonal Chance
//     else if (
//       Game.playerSignArray[1] === player.sign &&
//       Game.playerSignArray[5] === player.sign &&
//       Game.playerSignArray[9] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(zerothCell, fourthCell, eightCell);
//     } else if (
//       Game.playerSignArray[7] === player.sign &&
//       Game.playerSignArray[5] === player.sign &&
//       Game.playerSignArray[3] === player.sign
//     ) {
//       isDraw = true;
//       roundScore(player, playerUI);
//       resetLevelPVE(player);
//       winnerBackgroundColorChange(sixthCell, fourthCell, secondCell);
//     }

//     // Draw
//     else if (Game.roundsPlayed === 5) {
//       isDraw = false;
//       DrawLevelPVE();
//     }
//   }
// }

// function resetLevelPVE(player) {
//   for (const cells of cell) {
//     cells.removeEventListener("click", playGamePVE, { once: true }); // stops the game
//     winnerUi.textContent = `${player.name} is the Winner`;
//     winnerUi.style.visibility = "visible";
//     winnerUi.style.opacity = 100;
//     // restartLevelManually();
//   }
//   setTimeout(resetPVE, 1300); // dynamic restart
// }

// function DrawLevelPVE() {
//   for (const cells of cell) {
//     cells.removeEventListener("click", playGamePVE, { once: true }); // stops the game
//     winnerUi.textContent = `Level Ended in a Draw`;
//     winnerUi.style.visibility = "visible";
//     winnerUi.style.opacity = 100;
//     // restartLevelManually();
//   }
//   setTimeout(resetPVE, 1300); // dynamic restart
// }

// function resetPVE() {
//   for (const cells of cell) {
//     console.clear();
//     cells.removeEventListener("click", playGamePVE, { once: true });
//     cells.textContent = "";
//     Game.roundsPlayed = 0;
//     Game.playerSignArray = [];
//     Game.idSignArray = [];
//     Game.randomNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     isSwitchSign = false;
//     isDraw = false;
//     // winnerUi.textContent = ""; // transition won't work

//     zerothCell.style.backgroundColor = "white";
//     firstCell.style.backgroundColor = "white";
//     secondCell.style.backgroundColor = "white";
//     thirdCell.style.backgroundColor = "white";
//     fourthCell.style.backgroundColor = "white";
//     fifthCell.style.backgroundColor = "white";
//     sixthCell.style.backgroundColor = "white";
//     seventhCell.style.backgroundColor = "white";
//     eightCell.style.backgroundColor = "white";

//     cell.forEach((cells) => {
//       cells.style.color = "rgb(228, 72, 72)";
//     });

//     scoreOne.style.color = "white";
//     scoreOne.style.transform = "scale(1)";
//     scoreTwo.style.color = "white";
//     scoreTwo.style.transform = "scale(1)";

//     winnerUi.style.visibility = "hidden";
//     winnerUi.style.opacity = 0;
//     console.log(Game.playerSignArray);

//     cells.addEventListener("click", playGamePVE, { once: true });
//   }
// }

// function menuBtnPvE() {
//   menuBtn.addEventListener("click", (e) => {
//     startBtnDiv.style.visibility = "visible";
//     startBtn.style.visibility = "visible";
//     for (const spans of span) {
//       // startButton Styling
//       spans.style.opacity = 100;
//     }
//     section.style.visibility = "hidden";
//     section.style.opacity = 0;
//     section.style.transition = "0.1s !important";
//     resetPVE();
//     restartGame();
//     if (PVP) {
//       for (const cells of cell) {
//         cells.removeEventListener("click", playGamePVE, { once: true });
//       }
//     }
//   });
//! }
