//Board Creation
const makeBoard = (() => {
  let squareNumber = 1;

  const createElement = (() => {
    let getBoard = document.querySelector('.board');
    let tagName = 'div';
    let createSquare = document.createElement(tagName);
    createSquare.classList.add('square');
    createSquare.setAttribute('id', 'square' + squareNumber);
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
  switchPlayerText();

//Checks for element ID and text content, then places player symbol
  function findElement() { 
    document.addEventListener('click', function(e) {
      if ((e.target.hasAttribute('id')) == true && e.target.textContent == ''){
        e.target.textContent += currentPlayer.symbol;
        checkWin();
      }
      else {
        console.log("Invalid click for gameplay")
      }
    });
  };

  function switchPlayerText() {
    document.getElementById("playerUp").textContent = `${currentPlayer.name}, please choose a square.`
  };

  function playerTextWin() {
    document.getElementById("playerUp").textContent = `${currentPlayer.name} wins!`
  };
  
  //Switches from Player 1 to Player 2
  function switchPlayer() {
    if (currentPlayer == playerOne) {
      currentPlayer = playerTwo;
    } else if (currentPlayer == playerTwo) {
      currentPlayer = playerOne;
    }
  }

    //This checks the win conditions.  I hate this and will figure something else out, it was just the quick and dirty way to do it.  Suggestions are welcome.
    function checkWin(){
      //TOP ROW
      if (document.querySelector('#square1').textContent.includes(currentPlayer.symbol) &&
         (document.querySelector('#square2').textContent.includes(currentPlayer.symbol) &&
         (document.querySelector('#square3').textContent.includes(currentPlayer.symbol)))){
      playerTextWin();
      }
      //MIDDLE ROW
      else if (document.querySelector('#square4').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square5').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square6').textContent.includes(currentPlayer.symbol)))){
      playerTextWin();
      }
      //BOTTOM ROW
      else if (document.querySelector('#square7').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square8').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square9').textContent.includes(currentPlayer.symbol)))){
      playerTextWin();
      }
      //COLUMN 1
      else if (document.querySelector('#square1').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square4').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square7').textContent.includes(currentPlayer.symbol)))){
      playerTextWin();
      }
      //COLUMN 2
      else if (document.querySelector('#square2').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square5').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square8').textContent.includes(currentPlayer.symbol)))){
      playerTextWin();
      }
      //COLUMN 3
      else if (document.querySelector('#square3').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square6').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square9').textContent.includes(currentPlayer.symbol)))){
                                      //Damn good time
      playerTextWin();
      }
      //DIAGONAL 1
      else if (document.querySelector('#square1').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square5').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square9').textContent.includes(currentPlayer.symbol)))){
      playerTextWin();
      }
      //DIAGONAL 2
      else if (document.querySelector('#square3').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square5').textContent.includes(currentPlayer.symbol) &&
              (document.querySelector('#square7').textContent.includes(currentPlayer.symbol)))){
      playerTextWin();
      }
     else{
      moveAlong();
    }
  }
  
  
  //These aren't the droids you're looking for...Move Along
  function moveAlong(){
    switchPlayer();
    switchPlayerText();
  }
findElement();
  
  
  
});
gameLogic();

