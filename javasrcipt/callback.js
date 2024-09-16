// function getdata(dataid,getnextdata){
//     setTimeout(() => {
//         console.log("data",dataid)
//         if(getnextdata){
//             getnextdata();
//         }
//     }, 2000);
// }

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4)
//         })9
//     });
// })



// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataid);
//             resolve("success");
            


            
//         }, 5000);
//     })
// }

// async function myfunc(){
//     console.log("getting data1");
//     await getdata(123);
//     console.log("gettinng data 2");
//     await getdata(632);
//     console.log("getting data 3")
//     await getdata(786)

// }



function myfunc(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("the data is",data);
            resolve("succcess");
            
        }, 4000);
    })
};

async function func(){
    console.log("fetching data");
    await myfunc(123)
    console.log("fetching 2 data...")
    await myfunc(453)
}










// const async=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('some detail');
//             resolve("success")
//         },4000);;
//     })
// }
// const async2=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('some detail2');
//             resolve("success")
//         },4000);;
//     })
// }

// console.log("fetching datail1")
// let p1=async();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetchng detail2")
//     let p2=async2();
//     p2.then((res)=>{
//         console.log(res)
//     })

// })

// function myfunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("work is completed")
//             resolve("finished");
            
//         }, 4000);
//     })
// }

// async function func(){
//     await myfunc()
//     await myfunc()

// }










