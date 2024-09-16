const lengthp=document.getElementById('length-number');
const upper=document.getElementById('upper-case');
const lower=document.getElementById('lower-case');
const numbers=document.getElementById('numbers');
const symbols=document.getElementById('symbols');
const passInp=document.getElementById('pass-input');
const copy=document.getElementById('copy');
const generate=document.getElementById('generate');
const uppercaseStr='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const loewrcaseStr='abcdefghijklmnopqrstuvwxyz';
const numberStr='0123456789';
const symbolsStr='@#$^&!~()*?/|+=-_';
let password='';




generate.addEventListener('click',()=>{
    let str="";
    if(upper.checked){
        str+=uppercaseStr

    }

    if(lower.checked){
        str+=loewrcaseStr

    }

    if(numbers.checked){
        str+=numberStr

    }

    if(symbols.checked){
        str+=symbolsStr

    }
    console.log(str)
   
    for(let i=0;i<lengthp.value;i++){
        console.log(str.length,'str.length');
        let index=Math.floor(Math.random()*str.length);
        console.log(index);
        console.log('math.random()',Math.random());
        console.log('math.rendom() + str.length',Math.random()+str.length);
        console.log('math.floor(math.random() +str.length',Math.floor(Math.random()*str.length));
        console.log(str[index]);
        password+=str[index]

    }
    console.log(password,'password')
    passInp.value=password

})


copy.addEventListener('click',()=>{
    if(passInp.value===''){
        alert('please enter a password first')
    }else{
       const newele=document.createElement('textarea');
       newele.value=passInp.value;
       document.body.appendChild(newele);
       newele.select();
       document.execCommand('copy');
       alert('password copied in clipboard');
       newele.remove();

    }

})

