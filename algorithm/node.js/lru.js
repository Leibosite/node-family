const yallist = require('./yallist');
const NAME = Symbol('name');
const AGE = Symbol('age');
const linkedHashMap = require('./linkedHashMap');
const MAX = Symbol('max');
const LENGTH = Symbol('length');
const MAXAGE = Symbol('maxAge');


class LRUCache {
    constructor(options) {
        if (typeof options === 'number') {
            options = {max: options}
        }
        this[MAX] = options.max
        this[MAXAGE] = options.maxAge || 1000 * 60 * 60
    }

    set (key, value, maxAge) {
        maxAge = maxAge || this[MAXAGE]
        // 校验maxAge是否为number类型
        if(maxAge && typeof maxAge !== 'number') {
            throw new Error('max age is not a number')
        }

        

    }
}
const yll = new yallist([1,2,3,4,5]);
yll.forEach((v, i, h)=> {
    console.log(v, i);
})
// console.log(yll) 