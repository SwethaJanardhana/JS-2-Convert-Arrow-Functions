console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
/* Arrow Function for getCurrentHour() */

const currentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

console.log("---------------------------------------------------");

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

/* Arrow Function for getVectorLength(x, y, z) */

const vectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;

console.log("---------------------------------------------------");

function cleanInput(string) {
  return string.toLowerCase().trim();
}

/* Arrow Function for cleanInput(string) */

const cleanInputString = (string) => string.toLowerCase().trim();

console.log("---------------------------------------------------");

/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};
/* Classic function for isOddAnsSmall */

function checkIsOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

console.log("---------------------------------------------------");

const add3 = (a, b, c) => a + b + c;

/* Classic function for add3 */
function add3Numbers(a, b, c) {
  return a + b + c;
}

console.log("---------------------------------------------------");

const repeat10 = (string) => string.repeat(10);
/* Classic function for repeat10 */
function repeatString10Times(string) {
  return string.repeat(10);
}
