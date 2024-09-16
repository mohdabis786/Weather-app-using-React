const btn1=document.querySelector('.left-arrow');
const btn2=document.querySelector('.right-arrow');
const span=document.querySelector('#span');
const span2=document.querySelector('#span2');

const totaLApples=100;
let secondBasket=0
let firstBasket=totaLApples-secondBasket;
span.innerText=firstBasket;
span2.innerText=secondBasket

function decrease(){
    if(firstBasket>0){
        firstBasket--;
        span.innerText=firstBasket;
        secondBasket++;
        span2.innerText=secondBasket;

    }
    

    
}

function increase(){
    if(secondBasket>0){
        firstBasket++;
        span.innerText=firstBasket;
        secondBasket--;
        span2.innerText=secondBasket;

    }
   
    
}

btn1.addEventListener('click',()=>{
    increase();
   

   

})

btn2.addEventListener('click',()=>{
   decrease();
})

