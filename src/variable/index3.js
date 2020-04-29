// 函数作用域理解

function test(o) {
    var i = 0;  // i的定义贯穿整个函数
    if (typeof o === 'object') {
        var j = 0;  // j的定义，不只在该块级作用域中
        for (var k = 0; k < 10; k++) { // k的定义，不只在该循环中
            console.log(k); // 打印出 0-9
        }
        console.log(k); // k有定义，打印出10
    }
    console.log(j); // j有定义，但有可能未初始化
}

test(); // console.log(j) 打印出undefined
test({test:0}); // console.log(j) 打印出0

var scope='global';
function f(){
    console.log(scope); // 打印出‘undefined’，而不是‘global’
    var scope='local';
    console.log(scope); // 打印出‘local’
}
f();