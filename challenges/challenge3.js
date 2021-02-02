/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 *    The async/await a "syntactic sugar" version of the native promise syntax.
 *    Instead of using a chain/composition of promises using .then(), the
 *    async method uses the await operator to halt execution until a promise
 *    resolves. This causes the returned value to be whatever the promise
 *    resolves to.
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 *    "Promise { <pending> }" <-- a promise object is being printed
 *    rather than the expected output (an uppercased string).
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 *    Now the promise is properly being resolved and an uppercased string
 *    is being logged, as expected.
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from challenge 2.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 *******************************************************************************
 */


/**
 * Asynchronously returns a greeting for a specified name.
 * @param name The name of the person to greet.
 */
function greet(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof name === 'string') {
        resolve('Hello there, ' + name);
      } else {
        reject('Name must be a string!');
      }
    }, 500);
  });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 500);
  });
}

function spacer(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof str === 'string') {
        resolve(str.split('').join(' '));
      } else {
        reject('Argument to space must be string');
      }
    }, 500);
  });
}

async function greetAndUppercase(name) {
  const greeting = await greet(name);
  const uppercasedGreeting = await uppercaser(greeting);
  const spacedGreeting = await spacer(uppercasedGreeting);
  return spacedGreeting;
}

/* Uncomment me! #1 */
// const result = greetAndUppercase('Ducky');
// console.log(result);

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
