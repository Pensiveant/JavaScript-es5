var scope='global scope';   
function checkscope(){
    var scope='local scope';
    function nested(){
        var scope='nested scope';
        return scope;
    }
    return nested();
}

console.log(checkscope());  // 打印出“nested scope”