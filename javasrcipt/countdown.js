const enddate="30 april 2024 10:00 pm";

document.getElementById("end-date").innerText=enddate;

const clock=()=>{
    const end=new Date(enddate)
    const now=new Date();
    console.log(end);
    console.log(now)


}
clock()