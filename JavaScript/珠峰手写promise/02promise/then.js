// (then中传递的函数)判断成功和失败函数的返回结果
// 判断是不是promise 如果是promise就采用它的状态
// 如果不是promise直接将结果传递下去即可

let Promise = require('./promise')

let p = new Promise((resolve, reject) => {
  resolve()
})

p.then(data => {
  return 1000
}).then(data => {
  console.log(data)
})