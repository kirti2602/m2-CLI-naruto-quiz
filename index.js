let readlineSync = require("readline-sync");

const chalk = require('chalk');

console.log(chalk.bold('🍜 WELCOME TO NARUTO Land! ENJOY YOURSELVES 🍜')); 
console.log(' '); //for extra spacing

let score = 0;

// data of high score
let highScores = [
  {
    name: "Kirti",
    score: 4,
  },

  {
    name: "Karan",
    score: 3,
  },
]

// array of objects
let questions = [{
  question: "Who is Naruto❔ " + chalk.cyanBright("a)Doc b)Eng. c)Ninja  "),
  answer: "c"
}, 
  
{
  question: "Naruto's Lastname❔"+  chalk.cyanBright("a)Uzumaki b)Haruna c)Uchia  "),
  answer: "a"
}, 
  
{
  question: "Where does Naruto lives❔ " + chalk.cyanBright("a)Leaf Village b)Sand Village c)Sound Village  "),
  answer: "a"
}, 

{
  question: "His favorite food would be❔ "+ chalk.cyanBright("a)Ramen b)Rajma-Chawal c)Oats  "),
  answer: "a"
},
{
  question: "His dream is to become ❔" + chalk.cyanBright("a)Student b)Hokage c)Mechanic  "),
  answer: "b"
}
];

function welcome() {
 let userName = readlineSync.question(("What's your name? "));

  console.log("Welcome "+ chalk.cyanBright(userName) + "!  DO YOU KNOW " + chalk.bold(" Naruto ") + "?");
  console.log(chalk.underline('Just type the option initial(a,b, or c)'));
  console.log(' ')
}


// play function
function play(question, answer) {
  
  let userAnswer = readlineSync.question(chalk.yellowBright(question));
  

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("✅ right ✅"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("❌ wrong ❌"));
   
  }

  console.log(chalk.black.bgWhite.bold ("current score: ", score));
  console.log("-------------")
} 

function game() {
  for (let i=0; i<questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showLeaderBoard() {
  
  console.log(' ')
  console.log(chalk.green("Check out the Leaderboard"));

  highScores.map(score => console.log(score.name, " : ", score.score))
}

function updateHightScore(highScores){
  console.log(' ')
  console.log("YAY! You SCORED: ", score);

  if(score > highScores[0].score){
    console.log(chalk.green('Congratulations on beating previous High Scores. Make sure to send me a Screenshot, so that I can update about your achievement 😃 '));
} 
  }
  
welcome();
game();
updateHightScore(highScores);
showLeaderBoard();
