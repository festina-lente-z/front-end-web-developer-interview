const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'
// 每个promise有三个状态
// then方法在原型上
class Promise {
  // 1.看这个属性能否在原型上使用
  // 2.看这个属性是否公用
  constructor(executor) {
    this.status = PENDING //默认是pending状态
    this.value = undefined // 成功的值
    this.reason = undefined // 失败的原因
    // 用箭头函数是为了保证this指向没问题
    // 成功函数
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value
        this.status = RESOLVED
      }
    }
    // 失败函数
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
      }
    }
    try {
      // 执行器特点：立刻执行
      executor(resolve, reject) // 默认执行器会立刻执行
    } catch (e) {
      reject(e) // 如果执行时发生错误，等价于调用了失败方法
    }
  }
  then(){

  }
}
// 导出Promise类
module.exports = Promise