const cells = document.querySelectorAll("[data-cell]");
const hoverBoard = document.getElementById("board");
const WinMessageText = document.querySelector("[data-win-message-text]");
const WinMessageElement = document.getElementById("winningMessage");
const btnRestart =document.getElementById("restartButton");
const winning_combinations=[
    [0 , 1 , 2] , [3 , 4 , 5] , [6 , 7 , 8] ,
    [0 , 4 , 8] , [2 , 4 , 6] , [8 , 4 , 0] , [6 , 4 , 2] , 
    [0 , 3 , 6] , [1 , 4 , 7] , [2 , 5 , 8] 
                              ];

const x_class='x';
const circle_class='circle';
let circleTurn;

StartGame();

btnRestart.addEventListener("click" , StartGame)

function StartGame(){
    circleTurn=false;
    cells.forEach(function(cell){
      cell.classList.remove(x_class);
      cell.classList.remove(circle_class);
      cell.removeEventListener("click" , handleClick);
      cell.addEventListener("click" , handleClick , {once:true})
              });

  setBroadHoverClass();

  WinMessageElement.classList.remove("show-flex");
}
 
function handleClick(event){ 
   //console.log("click");
   const cell=event.target;
   const cheakClass=circleTurn ? circle_class : x_class;
   placeMark(cell,cheakClass);

   if(cheackWins(cheakClass)){
      //console.log("winner");
      endGame(false);
   }else if(isDraw()){
      endGame(true);
   }else{
      swapTurns();
      setBroadHoverClass();
   };
}


function placeMark(cell , cheakClass){
    cell.classList.add(cheakClass);
}

function swapTurns(){
    circleTurn=!circleTurn;
}

function setBroadHoverClass(){
    hoverBoard.classList.remove(x_class);
    hoverBoard.classList.remove(circle_class);
    if(circleTurn){
      hoverBoard.classList.add(circle_class);
    }else{
      hoverBoard.classList.add(x_class);
    }
}

function cheackWins(cheakClass){
     return winning_combinations.some(function(combination){
        return combination.every(function(index){
          return cells[index].classList.contains(cheakClass);
        })
    })
}

function endGame(draw){
    if(draw){
        WinMessageText.innerText = "Draw !";
    }else{
        WinMessageText.innerText = `${circleTurn ? "O win !!" : "X win !!"}`;
    }
    WinMessageElement.classList.add("show-flex");
}

function isDraw(){
    return [...cells].every(function(cell){
       return cell.classList.contains(x_class) || cell.classList.contains(circle_class);
    });
}