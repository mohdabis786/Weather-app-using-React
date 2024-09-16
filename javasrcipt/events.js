// let btn1=document.querySelector("#btn1");
// btn1.onclick= () =>{
//     console.log("btn 1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }

// let div=document.querySelector(".div");
// div.onmouseover=()=>{
//     console.log("you are inside the div")d

// }

let bt=document.querySelector("#btn1");
let mode="light";
bt.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.background="black"
    }
    else{
        mode="light";
        document.querySelector("body").style.background="white"
    }
    console.log(mode)
    
})

// const frst=()=>{
//     console,log("button was clicked 1")
// }
// bt.addEventListener("click",frst);
   

// bt.addEventListener("click",()=>{
//     console.log("button was clicked 2")
// })
// bt.addEventListener("click",()=>{
//     console.log("button was clicked 3")
// })

// bt.removeEventListener("click",frst)