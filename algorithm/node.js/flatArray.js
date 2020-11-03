const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
console.log(Array.from(new Set(arr.toString().split(','))).sort((a, b)=> a-b))

let a = 0
let b = async () => {
  const c = await 10;
  a = a + c;
  console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 11

const fn = function(){
    this.name = 1;
    this.age = 17;
}

const f = new fn()

const _new = function(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const ret = fn.apply(obj, ...args)
    return ret instanceof Object? ret:obj;
}

const f1 = _new(fn)

console.log(f.name, f1.name)