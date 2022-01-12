let fs = require('fs') // file system

let event = {
  _arr: [],
  on(fn) { // 发布和订阅之间没有任何的关系！
    this._arr.push(fn)
  },
  emit() {
    this._arr.forEach(fn => fn())
  }
}
let school = {}
// 订阅 函数不会立即执行
// event.on(function () {
//   console.log('读取一个');
// })
// on可以绑多个（可以有多个订阅）
event.on(function () {
  console.log('读取一个')
  if (Object.keys(school).length === 2) {
    console.log('ok', school);
  }
})

fs.readFile('./name.txt', 'utf8', function(err, data) {
  school.name = data
  event.emit() //这个方法一触发就会执行emit函数
  // 为什么触发emit会把on也执行了？
})
fs.readFile('./age.txt', 'utf8', function(err, data) {
  school.age = data
  event.emit()
})
// console.log(school);
// 最终拿到一个整体的结果{name:'name', age:'age'}

// 解决回调
// 1. 通过回调函数来解决 after函数
// 2. 发布订阅模式 发布 emit 和 订阅 on 或者观察者模式
// 观察者（有关系的 而且是基于发布订阅模式）和发布订阅有什么区别