Function.prototype.myCall = function(context, ...arg) {
  // context == null 相当于 context === null || context === undefined
  if (context == null) {
    context = this
  } else {
    context = Object(context)
  }
  
  const uniqueProp = Symbol()
  context[uniqueProp] = this
  // console.log('this: ',this);
  // console.log('context: ',context);
  const res = context[uniqueProp](...arg)
  delete context[uniqueProp]
  return res
}

function foo(something) {
  this.a = something
}

var obj1 = {
  foo: foo
}

var obj2 = {}

// obj1.foo(2)
// console.log(obj1.a);
// console.log(obj1);
// 隐式绑定，obj1调用的函数必须是obj1自身就有的函数

// obj1.foo.myCall(obj2, 3)
// console.log(obj2.a);
// console.log(obj2);

var bar = new obj1.foo(4);
console.log(obj1.a);
console.log(bar.a);