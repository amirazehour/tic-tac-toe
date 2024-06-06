let btn = document.getElementsByClassName('btn')[0];
console.log(btn);
let title= document.getElementsByTagName('h1')[0]
let boxes = Array.from(document.getElementsByClassName('box'));
let arr= Array(9).fill(null);

let O_Player = 'O';
let X_Player = 'X';
let currentPlayer = O_Player;

const game = () => {
    boxes.forEach(box=> box.addEventListener('click', boxClicked));
};

function boxClicked(e){
    let i = e.target.id;
    if (arr[i] == null) {
        currentPlayer==X_Player?currentPlayer=O_Player:currentPlayer=X_Player;
        arr[i] = currentPlayer;
        e.target.innerText= currentPlayer;    
    }
    if((winner=checkWinner())!==null){
        boxes.forEach(box=> box.removeEventListener('click', boxClicked));
        title.innerText = `${winner} wins!`;
        return;
    } 
}

game();

function checkWinner(){
  let winner = null;
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombinations.forEach((wc) => {
    if (arr[wc[0]] && arr[wc[0]] == arr[wc[1]] && arr[wc[0]] == arr[wc[2]]) {
      winner = arr[wc[1]];
    }
  });
  return winner;
}

btn.addEventListener('click', ()=>{
    arr.fill(null);
    boxes.forEach(box=> box.innerText='');
    currentPlayer = O_Player;
    title.innerText = `Tic Tac Toe`;
    game();
});


let btnc = document.getElementById('change_mode')
let dark = window.localStorage.getItem('dark');


function cliked(){
    let r = document.querySelector(':root');
    console.log(dark);
    if(!dark){
    r.style.setProperty('--background-color', 'black');
    r.style.setProperty('--box-color', 'white');
    r.style.setProperty('--font-color', 'violet');
    dark = true;
    window.localStorage.setItem('dark', true);
    }else{
    r.style.setProperty('--background-color', 'white');
    r.style.setProperty('--box-color', 'violet');
    r.style.setProperty('--font-color', 'black');
    dark = false;
    window.localStorage.setItem('dark', false);
    }
}


function load_page(){
  let dark = window.localStorage.getItem('dark');
  let r = document.querySelector(':root');
  
  if(dark==='true'){
  r.style.setProperty('--background-color', 'black');
  r.style.setProperty('--box-color', 'white');
  r.style.setProperty('--font-color', 'violet');
  }
  else{
  r.style.setProperty('--background-color', 'white');
  r.style.setProperty('--box-color', 'violet');
  r.style.setProperty('--font-color', 'black');
  }
}

btnc.addEventListener('click', cliked);
window.onload = load_page();