function say(name) {
  console.log(`${name} say hello`)
}
// 希望所有函数都有这个before功能，所以应该把before放在函数的原型上
// before方法参数是回调函数，执行完后返回一个新函数
// 然后实现before()在say()之前执行
Function.prototype.before = function (beforeFunc) {
  // 谁调用before，这个函数里面this就指向谁
  // 注意箭头函数this指向
  // （在函数参数里面）...剩余运算符，将所有参数组合成一个数组，只能在最后一个参数里用
  return (...args) => { // newFn 箭头函数没有this,没有arguments，没有原型
    // console.log(args)
    beforeFunc()
    this(...args)
  }
}
let newFn = say.before(function(){
  console.log('before say hello');
})
newFn('Tom')

// vue 2.0也会利用函数劫持 aop
let oldPush = Array.prototype.push

function push(...args) { // call用法：1.改变this指向 2.让函数执行
  // this = [1,2,3]
  console.log(args)
  console.log('data updated')
  oldPush.call(this, ...args)
}

let arr = [1,2,3]
push.call(arr,4,5,6,7,8) //在调用push方法时，触发一句更新操作
console.log(arr)



