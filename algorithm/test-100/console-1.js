/**
 * 京东）下面代码中 a 在什么情况下会打印 1？
    var a = ?;
    if(a == 1 && a == 2 && a == 3){
        console.log(1);
    }
 */


var a = {
    i:1,
    toString: function(){
        return this.i++;
    }
}

var a = {
    i:1,
    valueOf: function() {
        return this.i++;
    }
}

if(a == 1 && a==2 && a==3) {
    console.log(1)
}