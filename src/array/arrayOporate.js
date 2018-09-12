//#region 是否为数组
console.log("======是否为数组=====");
//es5之前检测是否为数组
var numberArr = [0, 1, 2, 3, 4, 5, 6];
var isArray = Function.isArray || function (o) {
    return typeof o === "object" &&
        Object.prototype.toString.call(o) === "[object Array]";
};
console.log(isArray(numberArr));


//es5 Array.isArray()
console.log(Array.isArray(numberArr));
//#endregion

//#region 添加
console.log("=====添加=====");
var addArr = [];
var addArr1 = [99, 98];
var addArr2 = [99, 98];
addArr.push(...[1, 2, 3]);
console.log(addArr);
addArr1.unshift(...[1, 2, 3]);
console.log(addArr1);
addArr2.splice(0, 0, [1, 2], ...[1, 2, 3]);
console.log(addArr2);
//#endregion

//#region 删除
console.log("=====删除=====");
var deleteArr = [1, 2, 3, 4, 5, 6];
var deleteArr1 = [99, 98];
var deleteArr2 = [99, 98];
deleteArr.pop();
console.log(addArr);
deleteArr1.unshift();
console.log(addArr1);
deleteArr2.splice(0, 0, ...[1, 2, 3]);
console.log(addArr2);
//#endregion

//#region 反转
console.log("=====反转=====");
var reverseArr = [1, 2, 3, 4, 5, 6];
console.log(reverseArr.reverse());
//#endregion


//#region 数组连接
console.log("=====连接=====");
var conArr = [1, 2, 3, 4, 5, 6];
console.log(conArr.concat(7, [8, 9], [10, [11, 12]]));
//#endregion



//#region 获取下标
console.log("=====获取下标=====");
var indexArr = [1, 2, 3, 4, 5, 6];
console.log(indexArr.indexOf(4));
console.log(indexArr.lastIndexOf());
//#endregion

//#region 排序
console.log("=====排序=====");
var indexArr = ["a", "e", "t", "f", "k", "p", "o", "c", "v", "r"];
console.log(indexArr.sort());
var indexArr2 = [2, 4, 1, 6, 3, 76, 23, 56, 84, 77];
console.log(indexArr2.sort((a, b) => {
    return b - a;
}));
indexArr.sort()
//#endregion

//#region 遍历
console.log("=====遍历=====");
var foreachArr = [1, 2, 3, 4, 5, 6];
foreachArr.forEach((elem, index, arr) => {
    arr[index] = elem * 2;
});
console.log(foreachArr);

var foreachArr1 = [1, 2, 3, 4, 5, 6];
var mapArr = foreachArr1.map((elem, index, arr) => {
    return elem * 3;
});
console.log(foreachArr1);
console.log(mapArr);
//#endregion

//#region 检测每个元素
console.log("=====检测每个元素=====");
var checkArr = [1, 2, 3, 4, 5, 6, 7];
var hasTwo = checkArr.some((elem, index, arr) => {
    return elem == 2;
});
console.log(hasTwo);

var allTwo = checkArr.every((elem, index, arr) => {
    return elem == 2;
});
console.log(allTwo);


//#endregion


//#region 筛选数组
console.log("=====筛选数组=====");
var filterArr = [1, 2, 3, 4, 5, 6];
var filterArr1 = filterArr.filter((elem, index, arr) => {
    return elem % 2 == 0;
});
console.log(filterArr1);
//#endregion


//#region 子数组
console.log("=====子数组=====");
var sliceArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(sliceArr);
console.log(sliceArr.slice(2, 5));

//#endregion

//#region 组合
console.log("=====组合=====");
var reverseArr = [1, 2, 3, 4, 5, 6];
console.log(reverseArr.reduce((pre, current, currentIndex, arr) => {
    return pre + current;
}));





//#endregion




//#region 转为有分隔符的字符串
console.log("=====转为字符串=====");
var stringArr = [1, 2, 3, 4, 5, 6];
console.log(stringArr.toString());
console.log(stringArr.toLocaleString());
console.log(stringArr.join());
console.log(stringArr.join("*"));
//#endregion