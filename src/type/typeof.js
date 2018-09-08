//type=string
var name = "pensiveant";
//type=number
var age = 23;
//type=boolean
var isStudent = true;
//type=null
var nullValue = null;
//type=undefined
var undefinedValue = undefined;
//type=object
var student = {
    name: "pensiveant",
    age: 23
}
//type=object
var getYourName = function (student) {
    console.log(student.name);
}

console.log(typeof (name));//return string
console.log(typeof (age));//return number
console.log(typeof (isStudent));//return boolean
console.log(typeof (nullValue));//return object
console.log(typeof (undefinedValue));//return undefined
console.log(typeof (student));//return object
console.log(typeof (getYourName));//return function