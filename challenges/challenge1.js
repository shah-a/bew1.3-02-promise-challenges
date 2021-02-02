/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *    The order will be "Step 1", "Step 3", "Step 2". "setTimeout()" uses the
 *    event-loop to execute a function asynchronously after some milliseconds.
 *    In the meantime, the code moves on to the next line (which, in this case,
 *    is "Step 3").
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *    Step 1, Step 3, Step 2 -- as expected.
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    My guess is that order will not change. The reason why I think this is
 *    because even though there's a theoretical 0 millisecond delay, I think
 *    invoking setTimeout() would send the call to the event-loop which would
 *    take some amount of time, even if that time is close to 0.
 * 
 *    After running the code, it still ran in the same order as before. But I'm
 *    not sure if it's because of the reason I wrote above or because of another
 *    reason.
 * 
 *******************************************************************************
 */


/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function () {
    action();
  }, 0);
}
console.log('Step 1');

snooze(function () {
  console.log('Step 2');
  console.log("Async Action completed via callback");
});

console.log('Step 3');
