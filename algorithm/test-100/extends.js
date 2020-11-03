// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
    this.arr = []
}
  // 原型方法
Animal.prototype.eat = function(food) {
console.log(this.name + '正在吃：' + food);
};


function CatPrototype () {}  
CatPrototype.prototype = new Animal();
CatPrototype.prototype.name = 'cat';

//　Test Code
var cat = new CatPrototype();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof CatPrototype); //true

function CatConstruct(name){
    Animal.call(this);
    this.name = name || 'Tom';
}

// Test Code
var cat = new CatConstruct();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof CatConstruct); // true

function CatCombination(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
CatCombination.prototype = new Animal();

// 感谢 @学无止境c 的提醒，组合继承也是需要修复构造函数指向的。

CatCombination.prototype.constructor = CatCombination;

// Test Code
var cat = new CatCombination();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof CatCombination); // true
console.log(CatCombination.prototype.constructor)

// 寄生
function CatParasitic(name){
    Animal.call(this);
    this.name = name || 'Tom';
}
(function(){
// 创建一个没有实例方法的类
var Super = function(){};
Super.prototype = Animal.prototype;
//将实例作为子类的原型
CatParasitic.prototype = new Super();
})();

// Test Code
var cat = new CatParasitic();
var cat1 = new CatParasitic();
cat1.arr.push(1)
console.log(cat.name);
console.log(cat.arr)
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof CatParasitic); //true

console.log('------------')
class A {
    constructor() {
        this.a = 'aaa'
    }
}
class B extends A {
    constructor() {
        super()
        this.b = 'bbb'
    }
}
const b = new B()
console.log(b.__proto__ === B.prototype)
console.log(B.prototype.__proto__ === A.prototype)
console.log(B.__proto__ === A)
console.log(A.prototype.__proto__ === Object.prototype)
console.log(A.__proto__ === Function.prototype)
console.log(b.a)