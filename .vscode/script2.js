const prompt=require('prompt-sync')();
let no1=parseInt(prompt("enter a first no"));
let no2=parseInt(prompt("enter a no 2"));
let sum=no1+no2;

if(sum>=50 && sum<=80){
    return 65;
}else{
    return 80;
}
