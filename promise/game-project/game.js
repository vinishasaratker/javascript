let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset");
let newGamebutton=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");

let turnO=true;

const winPattern=[
    [0,1,2 ],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



const resetgame=()=>{
     turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clickable box ");
        
        // if player o ki tern h to 
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        //  x player ki tern me click krne par x print ho jayenga 
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableboxes=()=>{
    for(let box of boxes){
        box.enableboxes=false;
        box.innerHTML=""
    }
}

const showWinner=(winner)=>{
    msg.innerHTML=`congratulation ! winner  is ${winner}`;
msgcontainer.classList.remove("hide");
disabled();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        let position1value=boxes[pattern[0]].innerText;
         let position2value=boxes[pattern[1]].innerText;
          let position3value=boxes[pattern[2]].innerText;
          if(position1value!="" && position2value!="" && position3value!=""){
if(position1value===position2value && position2value===position3value){
console.log("winner",position1value);


      showWinner(position1value);
                  }
                }
                }


}
newGamebutton.addEventListener("click" ,resetgame)
resetbutton.addEventListener("click",resetgame)