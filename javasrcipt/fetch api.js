// const para=document.querySelector("#p1");
// const bttn=document.querySelector("#bt1")

// const URL=" https://cat-fact.herokuapp.com/facts";
// const getfacts=async ()=>{
//     console.log("getting fetching data.....");
//    let response=await fetch(URL);
//    console.log(response)
//    let data=await response.json();
//    para.innerText=data[0].text;

// }
// bttn.addEventListener("click",getfacts);

const bttn=document.querySelector("#bt1")

const URL=" https://cat-fact.herokuapp.com/facts";
async function myfunc(){
    let data= await fetch(URL)
    console.log(data)
    let result=await data.json()
    console.log(result)
}

bttn.addEventListener('click',myfunc)

