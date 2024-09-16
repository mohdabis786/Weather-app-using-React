console.log("Welcome to spotify");

//Initialize the variables
let songindex=0;

let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songsitem=Array.from(document.getElementsByClassName('songitem'));
let songitemplay=Array.from(document.getElementsByClassName("songitemplay"));

let songs=[
    {songname:"Warriyo - Mortals INCS Released",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/6.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/7.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/8.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/9.jpg"},
    {songname:"Salam-e-ishq",filepath:"songs/2.mp3",coverpath:"covers/9.jpg"},
]
songsitem.forEach((element,i)=>{
     element.getElementsByTagName("img")[0].src=songs[i].coverpath;
     element.getElementsByClassName("songname")[0].innerText= songs[i].songname

})


// audioelement.play();
//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Listen to events
audioelement.addEventListener('timeupdate',()=>{
    
    //Update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
   
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
});




const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}


songitemplay.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeallplay();
       
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioelement.src=`songs/${songindex}.mp3`;
        mastersongplay.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })

})

document.getElementById('next').addEventListener('click',()=>{
   if(songindex>=9){
    songindex=0;
   }
   else{
    songindex+=1;
   }
   audioelement.src=`songs/${songindex+1}.mp3`;
   mastersongplay.innerText=songs[songindex].songname;
   audioelement.currentTime=0;
   audioelement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
     songindex=0;
    }
    else{
     songindex-=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    mastersongplay.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
 })

