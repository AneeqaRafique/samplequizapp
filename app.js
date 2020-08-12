window.onload = function(){
    Show(0)
}
var questions =[{
    id : 1,
    question : "How many languages are spoken in Pakistan?",
    ans : "Five ",
    options : [
        "three",
        "four",
        "five",
        "eight"
    ]
},
{
    id : 2,
    question : "What is the meaning of Pakistan?",
    ans : "land of pure" ,
    options : [
        "land of pure",
        "land of five province",
        "land of muslims",
        "land of rivers"
    ]
},
{
    id : 3 ,
    question : "Which is the national flower of Pakistan?",
    ans : "jasmine ",
    options : [
        "rose",
        "jasmine",
        "lavender",
        "lilly"
    ] 
},
{
    id : 4,
    question : "Who made the flag of Pakistan?",
    ans : "Syed Amir uddin Kedwaii ",
    options : [
        "hafiz jalandhiri",
        "allama iqbal",
        "mohammad ali jinnah",
        "Syed Amir uddin Kedwaii"
    ] 
},
{
    id : 5,
    question : "who is the founder of pakistan?",
    ans : "quaid e azam",
    options : [
        "allama iqbal",
        "quaid e azam ",
        "sir syed ahmed khan",
        "shah waliullah"
    ] 
},
{
    id : 6,
    question : "what is the national game of pakistan?",
    ans : "hockey",
    options : [
        "cricket",
        "football",
        "hockey",
        "tennis"
    ]  
},
{
    id : 7,
    question : "what is the national language of pakistan?",
    ans : "urdu",
    options : [
        "urdu",
        "english",
        "turkish",
        "german"
    ]    
},
{
    id : 8,
    question : "what is the national bird of pakistan?",
    ans : "chakor",
    options : [
        "eagle",
        "woodpeker",
        "chakor",
        "crow"
    ]  
},
{
    id : 9,
    question : "Who composed national anthem of Pakistan?",
    ans : "Ahmad G. Chagla ",
    options : [
        "Ahmad G. Chagla ",
        "hafeez jalandhri",
        "mohammad bin qasim",
        "allama iqbal"
    ]  
},
{
    id : 10,
    question : "Who wrote the national anthem of Pakistan?",
    ans : "hafeez jalandhiri ",
    options : [
        "Ahmad G. Chagla ",
        "hafeez jalandhri",
        "mohammad bin qasim",
        "allama iqbal"
    ]   
}]

var questionCount = 0;
function next(){
    questionCount++
    console.log(questionCount)
     show(questionCount)
}

function show(e){
    var ques= document.getElementById("question");
    ques.innerHTML = `<h3>${questions[e].question}</h3><ul class ="list">
    <li class = "option">${questions[e].options[0]}</li>
    <li class = "option">${questions[e].options[1]}</li>
    <li class = "option">${questions[e].options[2]}</li>
    <li class = "option">${questions[e].options[3]}</li>
    </ul>`
}

function Active(){
    let option1 = document.querySelectorAll('li.option');
    for(let i =0 ; i < option1.length ; i++){
        option1[i].onclick = function(){
            for(let j=0 ; j < option1.length;j++){
                if(option1[j].classList.contains("active")){
                    option1[j].classList.remove("active")
                };
            }
            option1[i].classList.add("active")
        }
        
    }

}