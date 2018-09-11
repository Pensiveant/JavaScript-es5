//#region 函数可以操作任意数量个数形参
//获取最大值
function max() {
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < length; i++) {
        if (arguments[i] > max) max = arguments[i];
    }
    return max;
}
//#endregion

//#region  arguments[i] 与对应形参引用同一个值
var name = "pensiveant";

function getName(x) {
    console.log(x);
    arguments[0] = "zxw";
}

getName(name);
console.log(name);
//#endregion


//#region 将对象作为函数的形参
//拷贝一个数组到另外一个数组
function arraycopy(from, from_start, to, to_start) {

}

function easycopy() {
    var args=arguments;
    arraycopy(args.from,
        args.from_start || 0,
        args.to,
        args.to_start || 0,
        args.length);
}


var a = [1, 2, 3, 4],
    b = [];
easycopy({
    from: a,
    to: b,
    length: 4
});
//#endregion