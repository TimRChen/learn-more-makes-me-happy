/**
 * Please give a function which takes an array of
 * asynchronous and run the functions in the array,
 * each one running once the previous function has completed.
 * eg:
    function asyncOneByOne(arr) {
      // your code here
    }
    function one(callback) {
      setTimeout(function(){
          console.log(1);
          callback();
    }, 200); }
    function two(callback) {
      setTimeout(function(){
          console.log(2);
          callback();
      }, 0);
    }
    asyncOneByOne([one, two])
    // will print
    // > 1
    // > 2
    asyncOneByOne([one, two, two, one])
    // will print
    // > 1
    // > 2
    // > 2
    // > 1
*/



function one (callback) {
  setTimeout(() => {
    console.log(1)
    callback()
  }, 200)
}

function two (callback) {
  setTimeout(() => {
    console.log(2)
    callback()
  }, 0)
}

function asyncOneByOne (queue) {
  queue.reduce((promiseChain, func) => {
    return promiseChain.then(() => {
      return new Promise((resolve) => {
        func(resolve)
      })
    })
  }, Promise.resolve())
}

// function asyncOneByOne (queue) {
//   queue.reduce((promiseChain, func) => promiseChain.then(() => new Promise((resolve) => func(resolve))), Promise.resolve())
// }

asyncOneByOne([one, two, two, one])




