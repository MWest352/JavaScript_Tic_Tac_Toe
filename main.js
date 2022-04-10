
//Board Creation
const makeBoard = (() => {
  let blockNumber = 0

  const createElement = (() => {
    let getBoard = document.querySelector(".board")
    let tagName = "div"
    let createSquare = document.createElement(tagName);
  
    let numberBlock = createSquare.classList.add("Block" + blockNumber);
    let appendSquare = getBoard.appendChild(createSquare)

    createGrid = () =>{
      createSquare;
      numberBlock;
      appendSquare;
  }
  return createGrid();
  })

  for (i = 0; i < 10; i++){
    createElement();
    blockNumber++;
  }
});
makeBoard();

