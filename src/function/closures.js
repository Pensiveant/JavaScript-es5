var scope = "global scope";

function checkScope() {
    var scope = "local scope";

    function f() {
        return scope;
    }
    return f;
}

var result = checkScope()();
console.log(result);


var uniqueInteger = (function () {
    var counter = 0;
    return function () {
        return counter++;
    };
}());

console.log(uniqueInteger);


function counter() {
    var n = 0;
    return {
        count: function () {
            return n++;
        },
        reset: function () {
            n = 0;
        }
    };
}

var c = counter(),
    d = counter();
console.log(c.count());//0
console.log(d.count());//0
console.log(c.reset());//undefined
console.log(c.count());//0
console.log(d.count());//1