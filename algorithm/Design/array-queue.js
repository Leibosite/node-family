/**
 * 用数组实现一个队列，要求入队和出队的复杂度都是O(1)
 */
const SIZE = Symbol('SIZE')
const MAX_SIZE = Symbol('MAX_SIZE')
const START= Symbol('start');
const END = Symbol('end');

class ArrayQueue{
    constructor(size){
        this[SIZE] = 0;
        this[MAX_SIZE] = size;
        this.array = new Array(size).fill(null);
        this.start = 0;
        this.end = 0;
    }
    multAdd(arr) {
        if(arr.length > this[MAX_SIZE]) {
            throw new Error('超出队列')
        }
        for(let v of arr) {
            this.add(v);
        }
        return true
    }
    add(e){
        if(this[SIZE] === this[MAX_SIZE]){
            throw new Error('队满')
        }
        this.array[this.end] = e;
        this.end = (this.end + 1) % this[MAX_SIZE];
        this[SIZE]++;
        return true;
    }
    pop(e) {
        if(this[SIZE] === 0) throw new Error('队空')
        const res = this.array[this.start];
        this.array[this.start] = null;
        this.start = (this.start + 1) % this[MAX_SIZE];
        this[SIZE]--;
        return res;
    }
    size(){
        return this[SIZE];
    }
}

const aq = new ArrayQueue(5)
console.log(aq.size());
console.log(aq.add(1), aq.size(), aq.array)
console.log(aq.pop(), aq.array)
console.log(aq.multAdd([1,2,3,4,5]), aq.array)
console.log(aq.pop(), aq.pop(), aq.pop(), aq.array)
console.log(aq.add(1), aq)