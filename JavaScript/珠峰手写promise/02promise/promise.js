// then的链式调用
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
// 每个promise有三个状态
const resolvePromise = (promise2, x, resolve, reject) => {
  
}
// then方法在原型上
class Promise {
  // 1.看这个属性能否在原型上使用
  // 2.看这个属性是否公用
  constructor(executor) {
    this.status = PENDING //默认是pending状态
    this.value = undefined // 成功的值
    this.reason = undefined // 失败的原因
    this.onResolvedCallbacks = [] // 成功的回调的数组
    this.onRejectedCallbacks = [] // 失败的回调的数组
    // 用箭头函数是为了保证this指向没问题
    // 成功函数
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value
        this.status = FULFILLED
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    // 失败函数
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      // 执行器特点：立刻执行
      executor(resolve, reject) // 默认执行器会立刻执行
    } catch (e) {
      reject(e) // 如果执行时发生错误，等价于调用了失败方法
    }
  }
  // 调用then的时候就知道了当前状态是成功还是失败
  then(onfulfilled, onrejected){ // then目前有两个参数，一个是onfulfilled，一个是onrejected
    let promise2 = new Promise((resolve, reject) => {
      // 同步
      if (this.status === FULFILLED) {
        let x = onfulfilled(this.value)
        // x是普通值也可能是promise
        // 判断x的值来推导当前promise2的状态
        resolvePromise(promise2, x, resolve, reject)
      }
      if (this.status === REJECTED) {
        onrejected(this.reason)
      }
      // 异步情况
      if (this.status === PENDING) {
        // 做切片
        this.onResolvedCallbacks.push(() => {
          onfulfilled(this.value)
        })
        this.onRejectedCallbacks.push(() => {
          onrejected(this.reason)
        })
      }
    })
    return promise2
  }
}
// 导出Promise类
module.exports = Promise