
// async/await
// const readFile = async ()=>{
//     const res1 = await fs.readFileSync('./bfs-dfs.js', { encoding: 'utf8' });
//     console.log(res1);
//     const res2 = await fs.readFileSync('./bfs-dfs.js', { encoding: 'utf8' });
//     console.log(res2);
//     return 'done'
//   }
//   const res = readFile();


const sleep = function(time) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve('time ---');
        }, time)
    })
}

const sleepAsync = async function(time) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('---ttt---')
        }, time);
    })
}

sleepAsync(1000).then(console.log)


function run(gen) {
    const g = gen();
    function next(data) {
        const res = g.next(data);
        // 深度递归，只要 `Generator` 函数还没执行到最后一步，`next` 函数就调用自身
        if (res.done) return res.value;
        res.value.then(function(data) {
            next(data);
        });
    }
    next();
}

//  Generator
// run(function*() {
//     const res1 = yield sleep(1000);
//     console.log(res1);
//     const res2 = yield sleep(1000);
//     console.log(res2);
//   });

// console.log('--')

async function normalFn() {
    await 1
    await 2
    await 3
    console.log('end')
}
// console.log('=====')
// Promise.resolve().then(()=> {
//     console.log('121212')
// }).then(()=> {
//     console.log('2222')
// }).then(()=> {
//     console.log('3333')
// }).then(()=> {
//     console.log('4444')
// })
// normalFn()

const co = function(generator, ...rest) {
    const ctx = this;
    return new Promise((resolve, reject) => {
        const gen = generator.call(ctx, ...rest)
        if(!gen || typeof gen !== 'function') {
            return gen
        }

        const onFuliled = res => {
            let ret;
            try {
                ret = gen.next(res);
            } catch (e) {
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
        const next = result => {
            if(result.done) resolve(result.value)
            toPromise(result.value).then(onFuliled, onRejected)
        }
        onFuliled()
    })
}

function toPromise(obj) {
    if (!obj) return obj;
    if (isPromise(obj)) return obj;
    if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
    if ('function' == typeof obj) return thunkToPromise.call(this, obj);
    if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
    if (isObject(obj)) return objectToPromise.call(this, obj);
    return obj;
}

function thunkToPromise(fn) {
    var ctx = this;
    return new Promise(function (resolve, reject) {
      fn.call(ctx, function (err, res) {
        if (err) return reject(err);
        if (arguments.length > 2) res = slice.call(arguments, 1);
        resolve(res);
      });
    });
  }

  function arrayToPromise(obj) {
    return Promise.all(obj.map(toPromise, this));
  }

  function objectToPromise(obj){
    var results = new obj.constructor();
    var keys = Object.keys(obj);
    var promises = [];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var promise = toPromise.call(this, obj[key]);
      if (promise && isPromise(promise)) defer(promise, key);
      else results[key] = obj[key];
    }
    return Promise.all(promises).then(function () {
      return results;
    });
  
    function defer(promise, key) {
      // predefine the key in the result
      results[key] = undefined;
      promises.push(promise.then(function (res) {
        results[key] = res;
      }));
    }
  }

  function isPromise(obj) {
    return 'function' == typeof obj.then;
  }

  function isGenerator(obj) {
    return 'function' == typeof obj.next && 'function' == typeof obj.throw;
  }
  function isGeneratorFunction(obj) {
    var constructor = obj.constructor;
    if (!constructor) return false;
    if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
    return isGenerator(constructor.prototype);
  }
  function isObject(val) {
    return Object == val.constructor;
  }


  const co1 = function(generator) {
      const ctx = this;
      const args = Array.prototype.slice.call(arguments, 1);

      return new Promise((resolve, reject) => {
        if (typeof generator === 'function') generator = generator.call(ctx, ...rest)
        if(!generator || typeof generator !== 'function') return resolve(generator)

        onFuliled()

        const onFuliled = res => {
            let ret 
            try {
                ret = generator.next(res)
            } catch (e) {
                return reject(e)
            }
            next(ret)
            return null
        }

        const onRejected = err => {
            let ret
            try {
                ret = generator.throw(err)
            } catch (error) {
                return reject(error)
            }
            next(ret)
        }

        const next = res => {
            if(res.done) resolve(res.value)
            const value = toPromise.call(ctx, res.value);
            if(value && isPromise(value)) toPromise(res.value).then(onFuliled, onRejected)
            return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
                + 'but the following object was passed: "' + String(ret.value) + '"'));
        }
      })
  }