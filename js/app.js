
var userName = prompt('Hello, what\'s your name?');

console.log('name', + userName);
alert('Let\'s play a guessing game '+ userName + '!');



var tattoos =Number(prompt( userName +' how many tattoos do you think I have?'));

console.log('tattoos', tattoos);

if(tattoos === 15) {
  alert('Wow! You got it.');
}
else if(tattoos > 15){
  alert('Wrong, it\'s 15.');
}
else
{

  alert('Nice try, it\'s 15.');
}



var animal = prompt('So many people in Seattle own an animal, do you think I do Y or N?').toUpperCase();
console.log('animal', animal);

if (animal === 'N') {
  alert('You are correct!');

} else if (animal === 'Y')
{
  alert('You are wrong, but I sure do wish.');
}

var outdoors = prompt('Living in the PNW most everyone likes being outdoors, can you guess if I do. Y or N?').toUpperCase();

console.log('outdoors', outdoors);
if(outdoors === 'N'){
  alert ('That\'s right, I prefer the staying in a city.');

} else if (outdoors === 'Y')
{
  alert('Nope, I actually like being in a city more.');
}
var favoriteColor =prompt('Now take a guess on what my favorite color is?').toUpperCase();
console.log('favoriteColor', favoriteColor);

if(favoriteColor === 'GREEN'){
  alert ('You got it!');

} else {
  alert('Wrong! It\'s green.');
}

var condiment =prompt('Last question, can you guess what my favorite condiment is?').toUpperCase();
console.log('condiment', + condiment);

if(condiment ==='KETCHUP'){
  alert('You are correct my friend!');
} else {
  alert('You are wrong, it\'s ketchup!');
}

