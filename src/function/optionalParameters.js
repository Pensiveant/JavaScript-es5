//将一个对象中所有的可枚举的属性名，追加到一个数组中
//如果数组未定义，则创建一个新的数组，并追加到该数组
function getPropertyNames(o, /*option*/ propertyNames) {
    //设置可选参数的默认值
    //if (propertyNames === undefined) propertyNames = [];
    propertyNames = propertyNames || [];
    for (var property in o) propertyNames.push(property);
    return propertyNames;
}

var a = getPropertyNames(o); //将o中所有的可枚举属性名保存在新数组，并赋值给a
getPropertyNames(p, a); //将p中可枚举的属性名追加到a数组中。