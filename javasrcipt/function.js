// function myfunc(n1,n2) {
//     z=n1+n2;
//     return z;
    
// }

// let val=myfunc(10,10);
// console.log(val)
// function vowels(str) {
//     let count=0;
//     for(const i of str) {
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowels("ashabbaqri");

// const vowe=(st)=>{
//     let count=0;
//     for(const i of st) {
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u") {
//             count++;
//         }
//     }
//     console.log(count);

// }
// vowe("ashab")

// let arr=["pune","delhi","mumbai"];
// arr.forEach((val) => {
//     console.log(val);

// })

// let arr=[1,2,3,4,5,6];
// arr.forEach((val) => {
//     console.log(val*val);
// })

// let nums=[1,44,67];
// nums.map((val)=>{
//     console.log(val);
// })

// let arr=[23,46,76,43,34,57,53,21,23,27];
// // arr.forEach((val)=>{
// //     if(val%2===0){
// //         console.log(val)
// //     }

// // })
// let newarr=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(newarr)


// let arr=[2,3,4,7,35,775];
// const output=arr.reduce((prev,curr)=>{
//     return prev>curr ? prev:curr;
// });
// console.log(output)


// let arr=[56,87,47,92,76,98,89];
// let newarr=arr.filter((val)=>{
//     return val>=90
// })
// console.log(newarr)

let x=prompt("enter a  number");
let arr=[];
for(let i=1;i<=x;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log("sum =",sum);

let factorial=arr.reduce((prev,curr)=>{
    return prev*curr;
})

console.log("factorial =",factorial)

























