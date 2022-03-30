/// Step one Gets users name
let userName = 'Milkdromeda';
/// first log asks question and adds the username if provided
userName ? console.log(`Hello, ${userName}!`) 
: console.log('Hello!');
const userQuestion ='poo pee?';
console.log(`So, ${userName}, you want to know ${userQuestion}?`);
///Number generator that 
let randomNumber= Math.floor(Math.random() * 8);
let eightBall = '';
///Eight Ball Responses
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
  } else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again'
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
}  else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'My sources say no';
} else if (randomNumber === 7) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 8) {
  eightBall = 'Signs point to yes';
}
/// This will log the response of the eightball based on the random number generated
console.log(eightBall);
  
