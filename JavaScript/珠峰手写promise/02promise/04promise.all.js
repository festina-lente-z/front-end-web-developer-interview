// Promise.all 全部 可以实现等待所有的异步执行完后，拿到统一结果
// 解决异步并发， 同步处理结果

let fs = require('fs')

function read(url) {

}
// 判断是不是promise
const isPromise = (value) => {
  if((typeof value === 'object' && value !== null) || typeof value === 'function') {
    if(typeof value.then === 'function') {
      return true
    }
    else {
      return false
    }
  }
}
Promise.all = function (values) {
  // 返回一个then，所以返回一个new Promise
  return new Promise((resolve, reject) => {
    let arr = [], index = 0 // 解决多个异步的并发问题，要使用计数器
    function processData(key, value) {
      index++
      arr[key] = value
      if(index == values.length){
        resolve(arr)
      }
    }
    // 因为最终同步执行，所以要依次把数组中的值取出来，所以要用一个for循环
    for (let i=0; i<values.length; i++) {
      let current = values[i]
      if(isPromise(current)) {
        current.then((data) => {
          processData(i, data)
        }, reject)
      } else {
        processData(i, current)
      }
    }

  })
}
// 类上的方法叫静态方法 全部成功就成功，有任何一个失败就失败了
Promise.all([1,2,3,6, 7]).then(data => {
  console.log(data);
})