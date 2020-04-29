var truevar=1;  // 声明一个全局变量，不可删除
fakevar=2;  // 创建一个可以删除的全局对象的属性
this.fakevar2=3; // 和fakevar一致
delete truevar; // false:变量不可删除
delete fakevar; // true: 变量可以删除
delete this.fakevar2; // true: 变量可以删除