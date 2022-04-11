
//Board Creation


const makeBoard = (() => {
  let squareNumber = 1;

  const createElement = (() => {
    let getBoard = document.querySelector('.board');
    let tagName = 'div';
    let createSquare = document.createElement(tagName);
    let addClass = createSquare.classList.add('square');
    let setId = createSquare.setAttribute('id', 'square#' + squareNumber);
    let appendSquare = getBoard.appendChild(createSquare);
  });

  for (i = 1; i <= 9 ; i++){
    createElement();
    squareNumber++;
  };
});
makeBoard();






