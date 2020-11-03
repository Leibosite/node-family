/**
 * 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
    for (var i = 0; i< 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
 */

for(let i = 0; i<10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 100)
}

for(var i = 0; i<10; i++) {
    (function(x){setTimeout(() => {
        console.log(x)
    }, 100)})(i)
}

for(var i=0; i<10; i++) {
    setTimeout(i => {
        console.log(i)
    }, 100, i)
}

for(var i = 0; i<10; i++) {
    setTimeout(console.log, 100, i);
}

