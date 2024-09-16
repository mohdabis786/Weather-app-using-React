let btn=document.querySelectorAll(".box");
let p=document.querySelector("#p1");
let newgame=document.querySelector("#click");

let pattern=[[0, 1, 2],[0, 3, 6],[0, 4, 8],[1, 4, 7],[2, 4, 6],[2, 5, 8],[3, 4, 5],[6, 7, 8]];
let turnx=true;

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnx){
            box.innerText="X";
            box.style.color="blue";
            turnx=false;
        }else{
            box.innerText="0";
            box.style.color="green";
            turnx=true;
        }
    box.disabled=true;
    winner()
    })
    

})

const winner=()=>{
    for(let i of pattern){
        let pos1=btn[i[0]].innerText;
        let pos2=btn[i[1]].innerText;
        let pos3=btn[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2==pos3){
                p.innerText=`congratulation the winner is ${pos1}`;
                disablesbox();
               
            }
        }
    }
}

const disablesbox=()=>{
    for(let i of btn){
        i.disabled=true;
    }
}


const enablesbox=()=>{
    for(let i of btn){
        i.disabled=false;
        box.innerText="";
    }
}

const resetgame=()=>{
    turnx=true;
    enablesbox();
}

newgame.addEventListener("click",resetgame);



  















