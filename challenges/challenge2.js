/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * 
 *    Expected output:
 *    "Hello there, Ducky"
 *    "MAKE SCHOOL IS AWESOME!!!"
 * 
 *    Actual output:
 *    "Hello there, Ducky"
 *    "MAKE SCHOOL IS AWESOME!!!"
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * 
 *    An error is thrown if 'name' is a number. 'uppercaser' does not run; it's
 *    chained to 'greet', so 'greet' needs to resolve for 'uppercaser' to run.
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'upperStr' and
 *    run the code again.
 * 
 *    'greet' still executes as expected, but 'uppercaser' throws an error.
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greet() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
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
    }, 1000);
  });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} upperStr The string to uppercase.
 */
function uppercaser(upperStr) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof upperStr === 'string') {
        resolve(upperStr.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1500);
  });
}

/**
 * Returns the spaced version of a string.
 * @param {*} spaceStr The string to space.
 */
function spacer(spaceStr) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof spaceStr === 'string') {
        resolve(spaceStr.split('').join(' '));
      } else {
        reject('Argument to space must be string');
      }
    }, 2000);
  });
}

const name = "Me"
const upperStr = "Make School is neat"
const spaceStr = "<Pensive reflection about universe>"

greet(name)
  .then((greetResult) => {
    console.log(greetResult)
    return uppercaser(upperStr);
  })
  .then((uppercaserResult) => {
    console.log(uppercaserResult)
    return spacer(spaceStr);
  })
  .then((spacerResult) => {
    console.log(spacerResult);
  }).catch((err) => {
    console.log('Received an error!')
    console.log(err);
  });

/* Uncomment for async...await syntax version */
// async function asyncVer() {
//   try {
//     const results = await Promise.all([greet(name), uppercaser(upperStr), spacer(spaceStr)]);
//     results.forEach(result => {
//       console.log(result);
//     })
//   } catch (error) {
//     console.log("Received an error!");
//     console.log(error);
//   }
// }

// asyncVer();
