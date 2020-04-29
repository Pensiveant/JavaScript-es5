// 声明全局变量可以不用var，但是局部变量必须使用。
scope='global'; // 声明全局变量
function checkscope2(){
    scope='local';  // 不小心改变了全局变量的值
    myscope='local';
    return [scope,myscope];
}

console.log(checkscope2()); // 打印出 ['local','local']
console.log(scope);     // 打印出 local:全局变量的值被改变了
console.log(myscope);   // 打印出 local：全局命名空间混乱