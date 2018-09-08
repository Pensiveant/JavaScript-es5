//直接量
var book = {
    "main title": "原生js对象总结",
    "author": "pensiveant",
    getAuthor: function () {
        console.log("pensiveant");
    }
}
console.log(book);


//构造函数
function Student() {
    this.school = "清华大学";
    this.major = "软件工程";
    this.institute = "地球物理";
    this.name = "张三";
    this.age = "18";
}
var student = new Student();
console.log(student);

// Object.create
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
console.log(point);




exports.book = book;
exports.student = student;
exports.point = point;