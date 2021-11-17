// 手写bind函数
function fn1(a, b, c) {
  console.log('this', this);
  console.log(a, b, c);
  return 'this is fn1'
}

const fn2 = fn1.bind({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res);

Function.prototype.myBind = function(){
  // 将参数拆解为数组
  const args = [...arguments]
  // 获取 this （数组第一项）
  const argThis = args.shift()
  // fn1.bind(...)中的fn1
  const self = this
  // 返回一个函数
  return function(){
    return self.apply(argThis, args)
  }
}