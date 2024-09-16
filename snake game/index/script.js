let direction={x:0,y:0};
let foodsound=new Audio('food.mp3');
let gameover=new Audio('gameover.mp3');
let movesound=new Audio('move.mp3');
let musicsound=new Audio('music.mp3');
let speed=2;
let lastpainttime=0;
let  snakearr=[
    {x:13,y:15}
]

//game function

function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastpainttime)/1000<1/speed){
        return;
    }
    lastpainttime=ctime;
    gameEngine();

}

function gameEngine(){
    //part 1:updating the snake array

    //part 2: display the snake and food
    board.innerHTML=""
    snakearr.forEach((e,index)=>{
        snakeelement=document.createElement('div');
        snakeelement.style.gridRowStart=e.y;
        snakeelement.style.gridColumnStart=e.x;
        board.appendChlid(snakeelement);
    })

}

















window.requestAnimationFrame(main);