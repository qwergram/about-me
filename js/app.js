'use strict';

// console.log('Hello World');yout

let username = prompt('What is your name?');

alert('Welcome ' + username + '!  Please answer the following five questions yes/no or y/n');

function q1() {
  let answerOne = prompt('Do I live in Seattle?').toLowerCase();
  // this is required
  if(answerOne === 'yes' || answerOne === 'y'){
    // console.log('answerOne: ' + answerOne);
    alert('you are correct!  I live in Seattle');
  }
}

//function: key word 
//q6 is the function
// paranthesis would be arguments/ or hold parameters
//let is the variable 
//userGuess is the name
//parseInt converst the string number to a number
//break stops the for loop when the answer is correct
function q6() {
  const realSeattlAreaCode = 206;
  for (let i=0; i < 6;i++){
    let userGuess = parseInt(prompt('what is the area code for seattle washington?'));
    if(userGuess === realSeattlAreaCode){
      alert('Yes! are you a local seattlite');
      break;
    }
    else if (userGuess < realSeattlAreaCode){
      alert('Wrong are you from florida or something? the actual answer is higher');
    }
    else{
      alert('Wrong just go ahead and google it at this point. Answer is lower');
    }
  }
}

q1();

// this is doing extra
// if(answerOne === 'yes' || answerOne === 'y'){
//   console.log('answerOne: ' + answerOne);
//   alert('you are correct!  I live in Seattle')
// } else if (answerOne === 'no' || answerOne === 'n'){
//   alert('nope!')
// } else {
//   alert('can you at least play along?');
// }




