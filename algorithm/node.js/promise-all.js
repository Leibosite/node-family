const { resolve } = require("path")

const All = function(list) {
    return new Promise((resolve, reject) => {
        let resP = [], counts = 0;

        function handleResolve(i, data){
            resP[i] = data;
            counts++;
            if(i === counts) {
                resolve(resP)
            }
        }

        for(let [i, p] of list) {
            p = p.then ? p: Promise.resolve(p);
            p.then(data => {
                handleResolve(i, data)
            }, reject)
        }
    })
}

const race = function(list) {
    return new Promise((resolve, reject) => {
        for(let [i, p] of list) {
            p = p.then ? p: Promise.resolve(p);
            p.then(resolve, reject);
        }
    });
}
