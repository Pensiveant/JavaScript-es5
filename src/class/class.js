//创建原型对象为proto的新对象。
//相当于方法Object.create(proto)
function inherit(proto) {
    if (proto == null) throw TypeError;
    if (Object.create) return Object.create(proto);
    var type = typeof proto;
    if (type !== "object" && type !== "function") throw TypeError;

    function f() {};
    f.prototype = proto;
    return new f();
}

//拷贝对象p中可枚举属性o中
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

//定义类
function defineClass(constructor, methods, statics) {
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);
    return constructor;
}

//定义子类的函数
function defineSubclass(superclass, constructor, methods, statics) {
    constructor.prototype = inherit(superclass.prototype); //子类构造函数的prototype属性执行父类的实例
    constructor.prototype.constructor = constructor;
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);
    return constructor;
}


//手动定义子类
function SingletonSet(member) {
    this.member = member; // Remember the single member of the set
}
SingletonSet.prototype = inherit(Set.prototype);
extend(SingletonSet.prototype, {
    constructor: SingletonSet,
    add: function () {
        throw "read-only set";
    },
    remove: function () {
        throw "read-only set";
    },
    size: function () {
        return 1;
    },
    foreach: function (f, context) {
        f.call(context, this.member);
    },
    contains: function (x) {
        return x === this.member;
    }
});