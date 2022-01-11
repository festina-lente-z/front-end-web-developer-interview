function say() {
  console.log('say hello')
}
// 希望所有函数都有这个before功能，所以应该把before放在函数的原型上
// before方法参数是回调函数，执行完后返回一个新函数
// 然后实现before()在say()之前执行
Function.prototype.before = function (beforeFunc) {
  // 谁调用before，这个函数里面this就指向谁
  // 注意箭头函数this指向
  return () => { // newFn 箭头函数没有this,没有arguments，没有原型
    beforeFunc()
    this()
  }
}
let newFn = say.before(function(){
  console.log('before say hello');
})
newFn()

