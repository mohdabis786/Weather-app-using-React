//step 1: define quiz data

const quizdata=[
    {
        question:"Whar does Html stand for",
        options:[
            "Hypertext markup language",
            "Hyper transfer markup language",
            "Hypertext machine language",
            "Hyperlink and text markup language",
        ],
        correct:0,
    },
    {
        question:"which css property is used to  control the spacing between elements?",
        options:["margin","padding","spacing","border-spacing"],
        correct:1,


        
    },
    {
        question:"What is  the javascript function used to select an HTML element by its id?",
        options:[
            "document-query",
            "getelementById",
            "SelectElement",
            "finfElementById",
        ],
        correct:1,
    },
    {
        question:"In React.js, which hook is used to perform side effects in a function components?",
        options:["useEffect","useState","useControl","useReduce"],
        correct:0,
    },
    {
        question:"Which HTML tag is used to create an ordered list?",
        options:["<ul>","<li>","<ol>","<dl>"],
        correct:2,
    },
    
];


//step 2:initialization javascript;

const answerelm=document.querySelectorAll(".answer");
const [questionelm, option_1,option_2,option_3,option_4]=document.querySelectorAll("#question, #option_1,#option_2,#option_3,#option_4");
const submitbtn=document.querySelector("#submit");
const currentquiz=0;
const score=0;

//step 3:load quiz function;
const loadquiz=()=>{
    const {question,options}=quizdata[currentquiz];
    console.log(question);
    questionelm.innerText=question;
    // options.forEach((curroption,index)=>{

    // })
    options.forEach((curroption,index)=>(window[`option_${index+1}`].innerText=curroption)
    );
};


loadquiz();



//step 4:get selected answer function on button click


const getselectedopt=()=>{
    // let ans_index;
    // answerelm.forEach((curroption,index)=>{
    //     if(curroption.checked){
    //         ans_index=index;
    //     }
    // })
    // return ans_index

    answerelm.findIndex((curelem,index)=>curelem.checked);
};

submitbtn.addEventListener('click',()=>{
    const selectoptidx=getselectedopt();
    console.log(selectoptidx)
});

