console.log('script start')

async function async1() {
  await async2(1)
  console.log('async1 end')
  await async2(2)
  console.log('222222')
    // new Promise((resolve) => {
    //     console.log('async2 end')
    //     resolve();
    // }).then(()=> {
    //     console.log('async1 end')
    // }).then(() => {
    //     console.log('222222')
    // })
}
async function async2(x) {
  console.log('async2 end ' +x) 
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')

// node -v 8
// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// 222222
// promise2
// setTimeout

// node -v 11
// script start
// async2 end 1
// Promise
// script end
// async1 end
// async2 end 2
// promise1
// 222
// promise2
// setTimeout

// ------------------

// const fs = require('fs');
// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
//     return fs.readFileSync('async-promise.js')
// }).then(function(rs) {
//     // console.log(rs.toString());
//     console.log(fs.readFileSync('async-promise.js').toString()) 
// });
// console.log('script end');
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout