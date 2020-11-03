function debounce(fn) {
    let setTime = null;
    return function(){
        if(setTime) clearTimeout(setTime);
        setTime = setTimeout(()=>{
            fn.apply(this, arguments);
        }, 1000)
    }
}

function sayHi(name) {
    console.log('hi: ' + name)
}

let a = debounce(sayHi)
let i = 0;
while(i<5) {
    console.log(a('zhang'))
    i++;
}
