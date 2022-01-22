class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(executor) {
    this.status = MyPromise.PENDING
    this.value = undefined //成功的值
    this.reason = undefined //失败的原因
    this.onResolvedCallbacks = [] //成功的回调的数组
    this.onRejectedCallbacks = [] //失败的回调的数组
    let resolve = (value) => {
      if(this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLED
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if(this.status === MyPromise.PENDING) {
        this.status = MyPromise.Rejected
        this.reason = Reason
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try{
      executor(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onfulfilled, onrejected) {
    // 同步情况
    if(this.status === MyPromise.FULFILLED) {
      onfulfilled(this.value)
    }
    if(this.status === MyPromise.REJECTED) {
      onrejected(this.reason)
    }
    // 异步情况
    
    if(this.status === MyPromise.PENDING) {
      // 做切片
      this.onResolvedCallbacks.push(() => {
        onfulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onrejected(this.reason)
      })
    }
  }
}