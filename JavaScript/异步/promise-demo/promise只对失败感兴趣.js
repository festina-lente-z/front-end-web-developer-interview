/**
 * 如果我们只对error感兴趣，那么我们可以使用null作为第一个参数：.then(null, errorHandleFunction)
 * 或者也可以使用.catch(errorHandlingFunction)
 */

 let promise = new Promise((resolve, reject) => {
   setTimeout(() => reject(new Error("Whoops!")), 1000)
 })

//  .catch(f) 与 promise.then(null, f)一样
promise.catch(alert)

/**
 * .catch(f)调用是.then(null, f)的完全的模拟，它只是一个简写形式
 */