// const prompt=require('prompt-sync')()
// let a=Number(prompt('enter a no'));
// let b=Number(prompt('anter a no b'))
// console.log(a+b)

// const prompt=require('prompt-sync')()
// let a=Number(prompt("enter a first no"));
// let b=Number(prompt("enter a second number"));
// let c=Number(prompt("enter a third number"));
// if(a>b && a<c || a>c && a<b){
//     console.log(`${a} is second larges`)
    
// }else if(b>a &&b<c || b>c &&b<a){
//     console.log(`${b} is greater`)

// }
// else{
//     console.log(`${c} is second largest`)


// let x=parseInt(prompt("enter a no"));
// // let sum=0;
// // for(let i=1;i<=x;i++){
// //     sum+=i
// // }
// // console.log(sum)
// let sum=0;
// for(let i=1; i<=x;i++){
//     sum+=i
// }

// console.log(`the sum is ${sum}`)
// console.log(`the average is${sum/x}`)
// const prompt=require('prompt-sync')()
// let cube=parseInt(prompt('enter a no'))
// for(let i=1;i<=cube;i++){
//     console.log(i**i)
// }}

// let str=""
// for(let i=1;i<=5;i++){
//     for(let j=i;j<=5;j++){
//         str+=i


//     }
//     str+="\n"
// }
// console.log(str)
// const prompt=require('prompt-sync')();
// let num=parseInt(prompt("enter a number"));

// let str="";
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=num-i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)
// let even=0;
// let odd=0
// let i=0;
// while(i<=100){
//     if(i%2==0){
//         even+=i;
//     }else{
//         odd+=i
//     }
//     i++

// }

// console.log(even)
// console.log(odd)
// const prompt=require('prompt-sync')()
// 


// const prompt=require('prompt-sync')();
// let user=parseInt(prompt("enter a no"nsole.log("the no is not prime")







// let employee={
//     name:'rahul',
//     age:34,
//     gender:'male',
//     designation:'software engineer',
//     admin:false,
//     salary:{2001:40000,2003:50000,2004:100000},
//     post:{
//         january:'client',
//         february:'admin',
//         increament:[234,678,975]
//     }


// }

// console.log(employee.post.increament[0
                    
// ]

// 

// console.log("hello world");
// let data=fetch('https://jsonplaceholder.typicode.com/todos/').then((re)=>{
//     re.json(

//     ).then((data)=>{
//         console.log(data)

//     }).catch((err)=>{
//         console.log(err)

//     })

// }).catch((rej)=>{
//     console.log(rej)


// })
// console.log("i am ashab")



// function hello(age){
//     return new Promise((res,rej)=>{

//         if(age>18){
//             res("you are eligible for driving");
//         }else{
//             rej("you are not eligible for driving")
//         }
//     })

// }
// async function data(){
//     let result=await hello(23);
//     console.log(result)
    



// }
// data()

// hello(23).then((data)=>{
//     console.log(data)

// }).catch((err)=>{
//     console.log(err)

// })




// async function getWheather(){
//     const data=await fetch('https://jsonplaceholder.typicode.com/todos/');
//     const jsonData=await data.json();
//     console.log(jsonData)
// }
// getWheather();


const add=document.getElementById('add');
const view=document.getElementById('view');
const update=document.getElementById('update');
const delet=document.getElementById('delete');



let idArr=[];
let ageArr=[];
let nameArr=[];

add.addEventListener('click',()=>{
    let id=document.getElementById('id').value;
    let age=document.getElementById('age').value;
    let name=document.getElementById('name').value;

    
    idArr.push(id);
    ageArr.push(age);
    nameArr.push(name);


    console.log(idArr);
    console.log(ageArr);
    console.log(nameArr)
});

view.addEventListener('click',()=>{
    let str=`<tr>
    <td>ID</td>
    <td>AGE</td>
    <td>NAME</td>
    </tr>`

   for(let i=0;i<idArr.length;i++){
    str+=`<tr>
    <td>${idArr[i]}</td>
    <td>${ageArr[i]}</td>
    <td>${nameArr[i]}</td>
    </tr>`
   }
   document.getElementById('myTable').innerHTML=str;

})

















                                                                                               









             











































































































































































