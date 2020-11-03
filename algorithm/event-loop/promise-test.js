// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(5);
//     console.log(2);
//   }).then(val => {
//     console.log(val);
//     return val
//   });
  
//   promise.then((val) => {
//     console.log(val, 3);
//   });
  
//   console.log(4);
  
//   setTimeout(function() {
//     console.log(6);
//   });

  //node-12 1 2 4 5 3 6

  Promise.resolve()
  .then(function () {
    console.log(0);
    return Promise.resolve(4);
  })
  .then(function (r) {
    console.log(r);
  });

Promise.resolve()
  .then(function () {
    console.log(1);
  })
  .then(function () {
    console.log(2);
  })
  .then(function (r) {
    console.log(3);
  })
  .then(function () {
    console.log(5);
  });
// node-12 0 1 2 3 4 5
// node-8  0 1 4 2 3 5  