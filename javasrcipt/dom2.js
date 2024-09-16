// let div=document.querySelector("div");
// console.log(div.getAttribute("class"));

// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id)
// let newbtn=document.createElement("button")
// newbtn.innerText="click me";
// console.log(newbtn);
// let div=document.querySelector("div");
// div.append(newbtn)
// let heading=document.createElement("h1");
// heading.innerHTML="<i>this is a heading</i>"
// console.log(heading);
// let add=document.querySelector("div")
// add.before(heading)


let newbt=document.createElement("button");
newbt.innerText="click me";
newbt.style.backgroundColor="red";
newbt.style.color="white";
let body=document.querySelector("body");
body.append(newbt)
