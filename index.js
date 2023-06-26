/*
Do you know me? MarkOne
*/

var readlineSync = require('readline-sync');
var username;
var score =0;
var scorecard= [
    {
        name:'Anurag',
        score:3
    },
    {
        name:'Preetam',
        score:2
    }
]


var questions = [
    {
        question:"Where do I live?",
        answer:"Hyderabad"
    },
    {
        question:"Where do I work?",
        answer:"None"
    },
    {
        question:"Where do I do?",
        answer:"everything"
    },
    {
        question:"What pets do I like the most?",
        answer:"dogs"
    },
    {
        question:"What do I like to eat the most?",
        answer:"biryani"
    }
]


function welcome(){
    username = readlineSync.question("What's your name?\n")
    console.log('Welcome' + " " + username + " " + 'to Do yo know Anurag?')
}

function play(question,answer){
    var reply = readlineSync.question(question)
    if(reply.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log('correct!')
}else{
    console.log('wrong!')
    }
    console.log('current score' + " " + score)
    console.log('------------')
}
function questionrolling(questions){
    for(var i=0;i<questions.length;i++){
        play(questions[i].question,questions[i].answer)
    }
}
function showScore(){
    console.log("Yay! You scored :" + " " + score)
    scorecard.push({name:username,score:score})
    console.log("Scorecard of players till now")
    console.log('------------')
    scorecard.forEach(function(scorecard){
        console.log(scorecard.name + "," + scorecard.score)
    });

}
welcome()
questionrolling(questions)
showScore()