var vm = require('vm');
var fs = require('fs');

//读取源文件（JS源码）
var js_code = fs.readFileSync(__dirname+"/test.js").toString();

//生成字节码
var script = new vm.Script(js_code, {produceCachedData: true});
console.log(script.cachedData.toString())
var byte_code = script.cachedData;

//将字节码写入文件
fs.writeFileSync(__dirname+"/test.jsb",byte_code);