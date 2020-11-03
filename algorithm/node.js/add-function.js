/**
 *  add(1); // 1
    add(1)(2);  // 3
    add(1)(2)(3)； // 6
    add(1)(2)(3)(4)； // 10 

// 以此类推
 */
const add = function () {
    let args = [...arguments];
    let addfn = function() {
        args.push(...arguments);
        return addfn;
    }
    addfn.toString = function(){
        return args.reduce((a, b) => a + b);
    }
    addfn.valueOf = function() {
        return args.reduce((a, b) => a + b);
    }
    return addfn;
}

console.log(add(1)(2))

const add1 = (...args) => {
    const _add = (...args1) => {
      return add(...args, ...args1)
    }
    _add.toString = () => [...args].reduce((t, c) => t+c,  0)
  
    return _add
  }
  console.log(add1(1,2)(3)(4,5)(6))