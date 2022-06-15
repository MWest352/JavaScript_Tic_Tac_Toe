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

//Checks for element ID and text content, then places player symbol
  function findElement() { 
    document.addEventListener('click', function(e) {
      if ((e.target.hasAttribute('id')) == true && e.target.textContent == ''){
        e.target.textContent += currentPlayer.symbol;
        switchPlayer();
      } 
      else {
        console.log("Falso")
      }
    });
  };
  
  //function to check if element is empty and if so, place player symbol
  function placeSymbol() {
    if (e.target.textContent == '') {
      e.target.textContent += currentPlayer.symbol
    }
    else{
      alert("Invalid move, please try again.");
    };
  };
  
  //Switches from Player 1 to Player 2
  function switchPlayer() {
    if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
    } else if (currentPlayer == playerTwo) {
      currentPlayer = playerOne;
    }
  }
findElement();
  
  
  
});
gameLogic();

