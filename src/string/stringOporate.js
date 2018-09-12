




//判断单词是否回文
//思路：将字符串转换为数组，并使用数组的reverse()将字符串反转，在转为字符串进行比较。
function checkPlaindrom(str){
    return str==str.split("").reverse().join("");
}


var str="abcde";
console.log(str.reverse());