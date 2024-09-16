// let a=5;
// let b=9;
// alert("the sum of a and b is ="+parseInt(a+b))

// function myfunc(){
//     alert("welcome to my dashboard")
// }

// let btn = document.querySelector("#btn");
// console.log(btn);

// btn.onclick = () => {
//     let a = parseInt(prompt("Enter a number"));
//     let b = parseInt(prompt("Enter a second number"));

//     if (a > b) {
//         btn.style.backgroundColor = "red";
//     } else {
//         btn.style.backgroundColor = "green";
//     }
// };


// document.getElementById("btn").addEventListener("click",function(){
//     var a=parseFloat(document.getElementById("input").value);
//     var b=parseFloat(document.getElementById("innput").value);
//     if(a>b){
//         document.getElementById("btn").style.backgroundColor="red";
//     }else{
//         document.getElementById("btn").style.backgroundColor="blue"
//     }
// })
// function validateform(){
//     var name=document.myform.name.value;
//     var password=document.myform.password.value;
//     if(name==null || name==""){
//         alert("name can't be blank");
//         return false;

//     }else if(password.length<6){
//         alert("password must be 6 character long");
//         return false
//     }

// }

// function matchpass(){
//     var firstpassword=document.f1.password.value;
//     var secondpassword=document.f1.password2.value;
//     if(firstpassword==secondpassword){
//         return true;
//     }
// }

// function validate(){
//     var num=document.myform.num.value;
//     if(isNaN(num)){
//         document.getElementById("numloc").innerHTML="enter numeric value only";
//         return false;

//     }else{
//         return true;

//     }
// }

function validate(){
    var name=document.f1.name.value;
    var password=document.f1.password.value;
    var status=false;

    if(name.lenght<1){
        document.getElementById("nameloc").innerHTML="<img src='unchecked.gif'/>please enter your name";
        status=false;
    }else{
        document.getElementById("nameloc").innerHTML="<img src='checked.gif'/>";
        status=true;
    }
    if(password.length<6){
        document.getElementById("passwordloc").innerHTML="<img src='unchecked.gif'> password must be at least 6 char long";
        status=false;
    }else{
        document.getElementById("passwordloc").innerHTML="<img src='checked.gif'/>";
    }
    return status;
}



