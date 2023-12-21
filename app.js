const boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes);

const spaces = [null, null, null,null, null, null,null, null, null]
const O_text = 'O';
const X_text = 'X';
let currentplayer = O_text;



const drawBoard = () => {
    boxes.forEach ((box, index)=>{
        let styleString= '';
        if(index<3){
            styleString += 'border-bottom: 3px solid maroon;';
        }
        if(index % 3===0){
            styleString += 'border-right: 3px solid maroon;';
        }
        if(index % 3===2){
            styleString += 'border-left: 3px solid maroon;';
        }
        if(index>5){
            styleString += 'border-top: 3px solid maroon;';
        }
        box.style=styleString;
        box.addEventListener('click', boxClicked)
    });
};

const boxClicked = (e) => {
    const id =e.target.id;
    console.log(id)
    if(!spaces[id]){
        spaces [id] = currentplayer;
        e.target.innerText = currentplayer;
  
        currentplayer= currentplayer===O_text ? X_text : O_text;
    }
};

drawBoard();