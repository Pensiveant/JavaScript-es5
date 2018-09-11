var book = {
    "main title": "原生js对象总结",
    "author": "pensiveant",
    getAuthor: function () {
        console.log("pensiveant");
    }
};

console.log(book.constructor);
console.log(book.hasOwnProperty("author"));
console.log(Object.isPrototypeOf(book));
console.log(book.propertyIsEnumerable("author"));
console.log(book.toLocaleString());
console.log(book.toString());
// valueOf
console.log(new Object(12).valueOf()); // 12
console.log(new Object("pensvieant").valueOf()); //pensiveant
console.log(new Object(true).valueOf()); //true
console.log(new Object(null).valueOf()); //{}
console.log(new Object(undefined).valueOf()); //{}
var array = [1, 2, 3];
console.log(array.valueOf()); // [1, 2, 3]
console.log(new Date().valueOf()); // 1536412478738(毫秒数)
console.log(book.valueOf()); //对象本身

//静态方法 Object.create()
var point = Object.create({
    type: "point"

}, {
    x: {
        value: 10.1212,
        writable: true,
        configurable: true,
        enumerable: true
    },
    y: {
        value: 123.121,
        writable: true,
        configurable: true,
        enumerable: true
    }
});
//静态方法Object.defineProperties(object，descripts)
Object.defineProperties(point, {
    z: {
        value: 10,
        writable: true,
        configurable: true,
        enumerable: true
    }
});
//静态方法Object.defineProperties(object, propertyname, descriptor)
Object.defineProperty(point, "z",{
    z: {
        value: 11,
        writable: true,
        configurable: true,
        enumerable: true
    }
});
//静态方法Object.getOwnPropertyDescriptor(object, propertyname)
console.log(Object.getOwnPropertyDescriptor(point, "x"));
//静态方法Object.getOwnPropertyNames(object)
console.log(Object.getOwnPropertyNames(point));