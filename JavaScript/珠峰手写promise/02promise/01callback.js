// 执行器executor会立刻执行
// 只要传了一个函数，这个函数会立刻执行
// executor函数里面会传入两个参数（函数） resolve reject
// resolve代表的是成功 reject代表的是失败
// 每个promise实例都有一个then方法
// 如果new Promise的时候报错了，会变成失败态(抛错也算失败，状态不会变)
// 如果已经修改了状态，再抛错，原来修改完的状态也不会变。
let Promise = require('./02promise')
// let promise = new Promise((resolve, reject) => { // executor执行器
//   console.log(1);
//   // reject('hello')
//   throw new Error('error new promise')
//   resolve('success')
// }).then(data => { //成功
//   console.log(data)
// }, err => { //失败
//   console.log(`error - ${err}`)
// })

let promise1 = new Promise(() => {
  console.log(3);
})
console.log(2);