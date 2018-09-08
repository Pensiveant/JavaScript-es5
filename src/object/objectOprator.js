// 判断是否为对象
function isObject(test) {
    var type = typeof (test);
    if (type === "object" && test !== null) {
        console.log("这是一个对象");
    } else {
        console.log("这不是一个对象");
    }
}

//判断对象的类型
function Student(school, major, name, age) {
    this.school = school;
    this.major = major;
    this.name = name;
    this.age = age;
}

var student1 = new Student("清华大学", "软件工程", "李四", "23");
var date = new Date();
console.log(student1 instanceof Student);
console.log(date instanceof Date);