//#region 判断属性是否存在

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
    },
    z: {
        value: 123.121,
        writable: true,
        configurable: true,
        enumerable: false
    },
});

// in 
console.log("x" in point);
console.log("type" in point);
//hasOwnProperty()
console.log(point.hasOwnProperty("x")); //true
console.log(point.hasOwnProperty("type")); //false

//propertyIsEnumerable()
console.log(point.propertyIsEnumerable("x")); //true
console.log(point.propertyIsEnumerable("z")); //false
console.log(point.propertyIsEnumerable("type")); //false

//1==
var point2 = {
    name: undefined
}
console.log(point.name !== undefined); //false
console.log(point.x !== undefined); //true
console.log(point.type !== undefined); //true
console.log(point2.name !== undefined); //false



//#endregion

//#region 获取属性
var book = {
    "main title": "JavaScript",
    "sub-title": "The Difinitive Guide",
    "for": "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagn"
    }
}
var author = book.author; //获取book的“author”属性
var name = author.surname; //获取book的“surname”属性
var title = book["main title"]; //获取book的“main title”属性
//#endregion

//#region 添加属性


book.edition = 6; //为book添加“edition”属性
book["main title"] = "ECMScript"; //设置book的“main title”属性
//#endregion

//#region 删除属性
delete book.edition;
delete book.toString;
//#endregion

//#region 枚举属性

//for in
console.log("for in ......");
for (var item in point) {
    console.log(point[item]);
}

//Object.keys
var keys = Object.keys(point);
console.log("keys......");
keys.forEach((item) => {
    console.log(point[item]);
});

//Object.getOwnPropertyNames()
var ownKeys = Object.getOwnPropertyNames(point);
console.log("getOwnPropertyNames() ......");
ownKeys.forEach((item) => {
    console.log(point[item])
});

//#endregion