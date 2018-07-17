'use strict';

var userName = prompt('Hello, what\'s your name?');

console.log('name', + userName);
alert('Let\'s play a guessing game '+ userName + '!');


var scorePoint = 0;
var counter = 0;
console.log('This is a counter', counter);
alert('You can earn up to 7 points! If you get it all right then you win');



function getQ1() {
  var tattoos =Number(prompt( userName +' how many tattoos do you think I have?'));

  console.log('tattoos', tattoos);

  if(tattoos === 15) {
    alert('Wow! You got it.');
    scorePoint++;
  }
  else if(tattoos > 15){
    alert('Wrong, it\'s 15.');
  }
  else
  {

    alert('Nice try, it\'s 15.');
  }
}


getQ1();


function getQ2() {

  var animal = prompt('So many people in Seattle own an animal, do you think I do Y or N?').toUpperCase();
  console.log('animal', animal);

  if (animal === 'N') {
    alert('You are correct!');
    scorePoint++;

  } else if (animal === 'Y')
  {
    alert('You are wrong, but I sure do wish.');
  }
}

getQ2();


function getQ3() {

  var outdoors = prompt('Living in the PNW most everyone likes being outdoors, can you guess if I do. Y or N?').toUpperCase();

  console.log('outdoors', outdoors);
  if(outdoors === 'N'){
    alert ('That\'s right, I prefer the staying in a city.');
    scorePoint++;

  } else if (outdoors === 'Y') {
    alert('Nope, I actually like being in a city more.');
  }
}

getQ3();


function getQ4() {

  var favoriteColor =prompt('Now take a guess on what my favorite color is?').toUpperCase();
  console.log('favoriteColor', favoriteColor);

  if(favoriteColor === 'GREEN'){
    alert ('You got it!');
    scorePoint++;

  } else {
    alert('Wrong! It\'s green.');
  }
}

getQ4();

function getQ5() {

  var condiment =prompt('Can you guess what my favorite condiment is?').toUpperCase();
  console.log('condiment', + condiment);

  if(condiment ==='KETCHUP'){
    alert('You are correct my friend!');
    scorePoint++;

  } else {
    alert('You are wrong, it\'s ketchup!');
  }
}

getQ5();


function getQ6() {

  var ageCounter = 0;
  var myAge = 25;
  do {
    var guessMyAge = prompt('Can you guess my age?');
    console.log('User guess my age', guessMyAge );
    ageCounter++;
    if (guessMyAge > myAge) {
      console.log('Wrong answer');
      alert('Wow! Too high!');
    }
    else if (guessMyAge < myAge) {
      console.log('hit wrong answer');
      alert('Not quite, too low.');
    }
    else {
      console.log('hitting correct answer');
      alert('Spot on, good job!');
      scorePoint++;
      console.log(scorePoint);
      break;
    }
  } while (ageCounter < 4);
}

getQ6();



var favFruit= ['MANGO', 'STRAWBERRY','WATERMELON','PINEAPPLE'];

function getQ7() {
  var correctAnswer = false;

  for (var i = 0; i < 6; i++){ //var starts at 0(mango)  i < 6 is how many tries in the loop i++ is keeping track of how many its going thro

    var fruitGuess = prompt('Can you guess one of my favorite fruits?');

    console.log(fruitGuess);
    for (var a = 0; a <favFruit.length; a++){ //this is looking at all my favorite fruits
      if(fruitGuess.toUpperCase() === favFruit[a]) { //if user got ques right this is the response.
        console.log('here');
        alert('Wow, you got it!'); //alerting the user they got my question right.
        scorePoint++; //adding the point
        correctAnswer = true; //keeping track that my answer is right.
        break;// if answer is right its telling the loop to stop.
      }
      else if(correctAnswer === true){ // this is double checking, if the answer is true its stopping the loop.
        console.log('here again');
        break;
      }
    }

    if(correctAnswer === true){
      console.log('here again'); // triple check for the right answer.
      break;
    }
    else {
      alert('Wrong, nice try though.'); //if user answered ques wrong

    }
  }
}

getQ7();

console.log(scorePoint);

alert('Nice job! You got ' + scorePoint + ' out of 7 questions right.');