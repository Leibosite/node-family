function* helloworld() {
    yield 'hello'
    yield 'world'
}


var g = helloworld()
for(let i of g) {
    console.log(i)
}
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

function run(gen) {
    g = gen()
    const arr = []
    function next(data) {
        const res = g.next()
        if(res.done) return
        arr.push(res.value);
        next(data)
    }
    next()
    console.log(arr)
    return arr
}

run(helloworld)

let a = {}
a[Symbol.iterator] = helloworld

console.log([...a])

