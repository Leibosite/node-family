// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');


// function test () {
//   console.log('start')
//    setTimeout(() => {
//        console.log('children2')
//        Promise.resolve().then(() => {console.log('children2-1')})
//    }, 0)
//    setTimeout(() => {
//        console.log('children3')
//        Promise.resolve().then(() => {console.log('children3-1')})
//    }, 0)
//    Promise.resolve().then(() => {console.log('children1')})
//    console.log('end') 
// }

// test()

setTimeout( () => {
  new Promise(resolve => {
    resolve()
    console.log(4)
  }).then(() => {
    console.log(7)
  })
})

new Promise(resolve => {
  resolve()
  console.log(1)
}).then( () => {
  console.log(3)
})

setTimeout( () => {
  Promise.resolve(6).then(() => console.log(6))
  new Promise(resolve => {
    resolve()
    console.log(8)
  }).then(() => {
    console.log(9)
  })
})

Promise.resolve(5).then(() => console.log(5))

console.log(2)