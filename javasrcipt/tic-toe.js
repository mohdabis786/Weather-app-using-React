let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let drw=document.querySelector("#draw")


let turn0=true;//player1/player2

const winpattern= [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 6],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
let count=0;
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
       
        if(turn0){
            box.innerText="O";

            box.style.color="red"
            turn0=false;
            
        }
        else{
            box.innerText="X";
            box.style.color="blue"
            turn0=true;
        }

        box.disabled=true;

       count+=1
       if(count==9){
        console.log("the game is draw");
        
       }

        checkwinner();
        
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(winner)=>{
    msg.innerText=`congratulation , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);







    
