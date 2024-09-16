// let heading=document.getElementById("d1");
// console.dir(heading.lastElementChild);

// let element=document.createElement("div");
// console.log(element);

// let newelement=document.createTextNode("hello muntaha i want to fuck you");
// console.log(newelement);

// let element2=document.createComment("will you suck my dick muntaha");
// console.log(element2);

//this is for innertext;

// let fruits=document.querySelector("h2");
// console.dir(fruits.innerText);
// fruits.innerText+=" from apna college"

let x=document.querySelectorAll(".box");
// x[0].innerText="new unique value";
// x[1].innerText="hello world";
// x[2].innerText="apna world"
let k=1
for(i of x){
    i.innerText=`new unique value ${k}`;
    k++;
    
}