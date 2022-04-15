
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



