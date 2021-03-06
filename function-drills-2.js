'use strict';

function jediName(firstName, lastName) {
  var last = lastName.slice(0, 3);
  var first = firstName.slice(0, 2);
  console.log(last + first);
}

jediName('Richard', 'Tomes');

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}

beyond(-100);

function decode(str) {
  let result = '';
  let strArray = str.split(' ');
  const codeObj = {
    a: 2, b: 3, c: 4, d: 5
  };
  for (let i = 0; i < strArray.length; i++) {
    if (codeObj.hasOwnProperty(strArray[i][0])) {
      result += strArray[i][codeObj[strArray[i][0]] - 1];
    }
    else {
      result += ' ';
    }
  }
  console.log(result);
}

decode('craft block argon meter bells brown croon droop');

function daysInMonth(month, leapYear = false) {
  switch (month) {
  case 'January':
  case 'May':
  case 'March':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    console.log(`${month} has 31 days.`);
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    console.log(`${month} has 30 days.`);
    break;
  case 'February':
    if (leapYear) {
      console.log(`${month} has 29 days`);
    } else {
      console.log(`${month} has 28 days`);
    }
    break;
  default: throw new Error('Must provide a valid month.');
  }
}
try {
  daysInMonth('Fsbruary');
}
catch (error) {
  console.log(error);
}

// const randomNo = Math.floor(Math.random() * 3) + 1;
function rps(input) {
  let randomNo = Math.floor(Math.random() * 3) + 1;
  if (input < 1 || input > 3) {
    throw new Error('Invalid Input');
  }
  if (input === randomNo) {
    console.log('It is a tie');
  } else if (input > randomNo) {
    if (input === 3 && randomNo === 1) {
      console.log('Lose');
    }
    else {
      console.log('Win');
    }
  }
  else {
    if (input === 1 && randomNo === 3) {
      console.log('Win');
    }
    else {
      console.log('Lose');
    }
  }
}
try {
  rps(3);
}
catch (error) {
  console.log(error);
}