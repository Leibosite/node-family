/**
 * 要求设计 LazyMan 类，实现以下功能。
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
*/

class LazyManClass {
    constructor(name) {
        this.queue = [];
        this.name = name;
        setTimeout(() => {
            console.log('I am '+this.name)
            this.start()
        })
    }
    eat(val){
        this.queue.push( function(){
            console.log(`I am eating ${val}`)
        })
        return this
    }
    delay(sed){
        return ()=> {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log(`等待了${sed}秒`)
                    resolve()
                }, sed*1000)
            })
        }
    }
    sleep(sed) {
        this.queue.push(this.delay(sed))
        return this;
    }
    sleepFirst(sed) {
        this.queue.unshift(this.delay(sed))
        return this;
    }
    async start(){
        for(const row of this.queue){
            await row()
        }
    }
}
function LazyMan(name) {
    return new LazyManClass(name)
}

LazyMan('Tony').eat('lunch').sleep(1).eat('dinner').sleepFirst(2).eat('junk food')

class nam{
    constructor(v) {
        this.value = v;
    }
    add(x) {
        this.value +=x;
        return this
    }
    minus(x) {
        this.value -=x;
        return this
    }
    get(){
        return this.value
    }
}

const n = new nam(5)
console.log(n.add(3).minus(2).value)

Number.MAX_SAFE_DIGITS = Number.MAX_SAFE_INTEGER.toString().length -2
Number.prototype.digits = () => {
    let result = (this.valueOf().toString().split('.')[1] || '').length
    return result > Number.MAX_SAFE_DIGITS ? Number.MAX_SAFE_DIGITS : result;
}
Number.prototype.add = function(i=0) {
    if(typeof i !== 'number') {
        throw new Error('请输入正确的数字')
    }
    const v = this.valueOf();
    const thisDigits = this.digits();
    const iDigits = i.digits();
    const baseNum = Math.pow(10, Math.max(iDigits, thisDigits));
    const result = (v*baseNum + i*baseNum)/baseNum;
    if(result>0){return result>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:result}
    else {return result<Number.MIN_SAFE_INTEGER?Number.MIN_SAFE_INTEGER:result}
}



console.log((5).digits())