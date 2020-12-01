const { rejects } = require("assert");
const { resolve } = require("path");

const co = function(generator, ...rest){
    const ctx = this;
    return new Promise((resolve, reject) => {
        const gen = generator.call(ctx, ...rest);
        if(!gen|| gen.next !== 'function'){
            return resolve(gen)
        }

        const onFulfilled = res => {
            let ret ;
            try{
                ret = gen.next(res);
            } catch(e){
                return reject(e)
            }
            next(ret)
        }

        const onRejected = err => {
            let ret
            try {
              ret = gen.throw(err)
            } catch (e) {
              return reject(e)
            }
            next(ret)
          }

        const next = ret => {
            if(ret.done){
                return resolve(ret.value);
            }
            toPromise(ret.value).then(onFulfilled, onRejected);
        }
        onFulfilled();
    })
}

const toPromise = (value) => {
    if(isPromise(value)) return value;
    if('function' == typeof value){
        return new Promise((resolve, reject)=> {
            value((err, ...rest)=>{
                if(err) return reject
            })
            resolve(rest.length > 1 ? rest:rest[0])
        })
        
    }
}