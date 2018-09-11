function Student(school, major, name, age) {
    this.school = school;
    this.major = major;
    this.name = name;
    this.age = age;
}
var student = new Student("清华大学", "软件工程", "张三", "19");


function Student1(school,major,name,age){
    this.school=school;
    this.school=major;
    this.name=name;
    this.age=age;
}

Student1.prototype.sayName=function(){
    alert(this.name);
}

var student2=new Student1("清华大学","软件工程","李四",26);

function classOf(obj) {
    if (obj == null) return Null;
    if (obj == undefined) return Null;
    return Object.prototype.toString.call(obj).slice(8, -1);
}

console.log(classOf(student));    //返回Object
console.log(classOf(student2));  //返回Object
console.log(classOf(new Date())); //返回Date