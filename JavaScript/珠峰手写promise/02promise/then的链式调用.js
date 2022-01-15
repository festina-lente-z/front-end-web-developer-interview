// then的用法

let fs = require('fs')

// 要分段读取，第一个的输出是下一个人的输入

// fs.readFile('./name.txt', 'utf8', function (err, data) {
//   fs.readFile(data, 'utf8', function (err, data) {
//     console.log(data)
//   })
// })

// 把它变成promise
function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', function (err, data) {
      if(err) reject(err)
      else resolve(data)
    })
  })
}
// 如果一个promise的then方法中的函数（成功和失败）返回的结果是一个promise
// 会自动将这个promise执行，并且采用它的状态
// 如果成功会将成功的结果向外层的下一个then传递
read('./name.txt').then((data) => {
  return read(data + '1')
}, err => {
  console.log(err)
}).then(data => {
  console.log(data)
}, err => {
  console.log(err)
  // 如果返回值是一个普通值，那么会将这个普通值作为下一次的成功的结果
  return 1
  // throw new Error('throw error')
}).then(data => {
  console.log(data)
  // 希望在这里不要再继续向下走then？
  // throw new Error()错误也会认为走到外层错误中
  // 终止promise可以返回一个pending的promise
  return new Promise(() => {})
}).then(data => {
  console.log('stop')
}).catch(err => {
  console.log('catch-'+err)
})

// then只有两种情况会失败，一种是返回一个失败的promise，另一种是抛出异常
// 每次执行promise的时候都会返还一个新的promise实例
// 状态为失败会先看then有没有第二个参数，没有则会找catch