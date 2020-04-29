// 局部同名变量优先于全局变量
var scope='global';
function checkscope(){
    var scope='local';
    return scope;
}
console.log(checkscope());