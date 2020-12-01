/**
 * 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况
 */
const symbol = Symbol()
const obj = {
    objNumber: new Number(12),
    number: 1,
    objString: new String('1212'),
    string: 'string',
    objRegexp: new RegExp('\\w'),
    regexp: /w+/g,
    function:function(params) {},
    array: [{a:1}, 2],
    objBooblean: new Boolean(1),
    [symbol]: 22
}
const isObj = obj => obj !== null && (typeof obj === 'object' || typeof obj === "function");
const isFunction = obj => typeof obj === 'function';

function deepClone (obj, hash = new WeakMap()) {
    if(hash.get(obj)) {
        // 环处理
        return hash.get(obj)
    }
    if(!isObj(obj)) return obj;
    // 是函数，返回原索引
    if(isFunction(obj)) return obj;
    let cloneObj;
    const Constructor = obj.constructor;
    console.log('constructor: ', Constructor)
    switch(Constructor){
        case Date:
            return new Date(+obj);
        case Boolean:    
        case Number:
        case String:
        case RegExp:
            return new Constructor(obj);
        default:
            console.log('---default', Constructor, obj)
            cloneObj = new Constructor();
            hash.set(obj, cloneObj);
    }

    [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)].forEach(k => {
        console.log(';;;', k, obj[k])
        cloneObj[k] = deepClone(obj[k], hash); 
    });
    return cloneObj;
}

const o = deepClone(obj)
console.log('----', o)

console.log(o[symbol] === obj[symbol]);