// let str="hello my name is ashab"

// let savedArr=str.split(" ")
// .map((word)=>{
//     return word.split("").reverse().join("");


// })
// console.log(savedArr.join(" "))


// function palindrome(str){
//    let reversed=str
//     str.split("").reverse().join("")


//    if(str===reversed){
//       return "it is palindrome"
//    }else{
//       return "it is not palindrome"
//    }
   
 
// }  


// let rs=palindrome("afeefa");
// console.log(rs)

// function reverseNumber(num){
//   return  Number(num.toString().split("").reverse().join(""));

// }

// let result=reverseNumber(1234)
// console.log(result)


// function reverseNo(num){
   
//    var rev=0;
//    while(num>0){
//       var rem=num%10;
//       rev=rev*10+rem;
//       num=Math.floor(num/10)
//    }
//    return rev;
   
// }

// let result=reverseNo(1224)
// console.log(result)


// Palindrome no
// function reverseNo(num){
//    let copy=num;
//    var rev=0;
//    while(num>0){
//       var rem=num%10;
//       rev=rev*10+rem;
//       num=Math.floor(num/10)
//    }
//    if(rev===copy){
//       return "it is palindrome"
//    }
//    else{
//       return "it is not palinndrome"
//    }
// }

// let result=reverseNo(1224)
// console.log(result)


// function stringAlphaBeticalOrder(str){
//    return str.split("").sort().join("");

// }

// let result=stringAlphaBeticalOrder("ashab");
// console.log(result)

// function UpperCase(str){
//   let x= str.split(" ").map((word)=>{
//    return word.charAt(0).toUpperCase()+word.substring(1)
//   })
//   return x.join(" ");

// }

// let result=UpperCase("ashab bhai kese ho");
// console.log(result)

// function occ(str){
//   let occuences={}
//   str.split("").forEach((elm)=>{
//     if(occuences.hasOwnProperty(elm)===false){
//       occuences[elm]=1;
//     }else{
//       occuences[elm]++;
//     }
    

//   })

//   return occuences
  

// }

// let result=occ("apple")
// console.log(result)



// let arr=[1,2,3,4,5,6,7];
// let sum=0;
// arr.forEach((elm)=>{
//   sum=sum+elm;

// })
// console.log(sum)


// let arr=["csdnsd","sddsjfn",123,35,"fsdf",456,"dsfa",12];
// let sum=0;
// arr.forEach((elm)=>{
//   if(typeof elm ==="number"){
//     sum=sum+elm
//   }
// })
// console.log(sum)


// let arr=[
//   {name:"ashab",gender:"male"},
//   {name:"aliza",gender:"female"},
//   {name:"shajar",gender:"male"},
//   {name:"bushra",gender:"female"},
//   {name:"asdff",gender:"female"},
//   {name:"sdsf",gender:"female"},
//   {name:"asds",gender:"male"}
           
// ]
// var count=0;
// arr.forEach((elm)=>{
//   if(elm.gender !=="male"){
//     count++
//   }
// })

// for(var i=1;i<=count;i++){
//   for(var j=0;j<arr.length;j++){
//     if(arr[j].gender !=="male"){
//       arr.splice(j,1);
//     }
//   }
// }

// console.log(arr)



// function clone(arr){
//   let newArr=[];
//   arr.forEach((elm)=>{
//     newArr.push(elm)
//   })
//   return newArr
  
// }


// let result=clone([1,2,3,4])
// console.log(result)



// function retrieve(arr ,n=1){
//     if(n<=arr.length){
//         for(var i=0;i<n;i++){
//             console.log(arr[i])
//         }
//     }else{
//         console.log(`${n} toh elements hi nhi h `)
//     }

// }

// retrieve([1,2,3,4,5,6,7,8],7)



// function retrieve(arr,n=1){
//     if(n<=arr.length){
//         for(let i=0;i<n;i++){
//             console.log(arr[arr.length-1-i])
//         }
//     }
//     else{
//         console.log(`${n} to element nhi hai `)
//     }
// }
// retrieve([1,2,3,4,5,6])


// function freq(arr){
//     let freq={};
//     arr.forEach((elm)=>{
//         if(freq.hasOwnProperty(elm)){
//             freq[elm]++
//         }else{
//             freq[elm]=1
//         }
//     })
//     var ans=Object.keys(freq).reduce((acc,next)=>{
//         return freq[acc]>freq[next] ? acc :next;
//     })

//     console.log(ans)

// }

// freq([1,2,3,4,52,3,4,7,9,35,7,1,3,5,2,3,9])


// function Bigger(arr){
//     return arr.reduce((acc,next)=>{
//         return acc>next ? acc:next
//         ;
//     })


// }

// let result=Bigger([1,2,3,4,5,6,56,42,7643,45])
// console.log(result)


// let shuffleKaro=(arr)=>{
//     let totalShuffleArea=arr.length;
//     while(totalShuffleArea>0){
//         totalShuffleArea--;
//         let indexToBeExchanged=Math.floor(Math.random() * totalShuffleArea)
//         let temp=arr[totalShuffleArea]
//         arr[totalShuffleArea]=arr[indexToBeExchanged]
//         arr[indexToBeExchanged]=temp
//     }
//     return arr
    

// }

// let result=shuffleKaro([1,2,3,4,5,6,7]);
// console.log(result)




function union(arr1,arr2){
    return [...new Set(arr1.concat(arr2))]

}
let result=union([1,2,3,4,5],[3,4,5,6,7,8])
console.log(result)








