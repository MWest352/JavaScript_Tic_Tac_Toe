
//Board Creation


const makeBoard = (() => {
  let squareNumber = 1;

  const createElement = (() => {
    let getBoard = document.querySelector('.board');
    let tagName = 'div';
    let createSquare = document.createElement(tagName);
    createSquare.classList.add('square');
    createSquare.setAttribute('id', 'square#' + squareNumber);
    getBoard.appendChild(createSquare);
  });

  for (i = 1; i <= 9 ; i++){
    createElement();
    squareNumber++;
  };
});
makeBoard();


//Player Factory
const playerFactory = (name, symbol) => {
  return {name, symbol};
};



//Game Logic
const gameLogic = (() => {
  let playerOne = playerFactory('Player One', 'X');
  let playerTwo = playerFactory('Player Two', 'O');
  let currentPlayer =  playerOne;


  //Should return square when clicked
  const findElement = () => {
    window.onclick = e =>
      console.log(e.target.id);
  };

  //Switches from Player 1 to Player 2
  function switchPlayer() {
    if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
    } else if (currentPlayer == playerTwo) {
      currentPlayer = playerOne;
    }
  }
  
});
console.log(gameLogic());