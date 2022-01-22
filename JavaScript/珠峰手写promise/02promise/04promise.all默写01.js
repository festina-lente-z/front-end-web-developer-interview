const res = require("express/lib/response")


Promise.all = (values) => {
  return new Promise((resolve, reject) => {
    let arr = [], index = 0
    const resData = (key, value) => {
      arr[key] = value
      if(++index === values.length) {
        resolve(arr)
      }
    }
    for(let i=0; i<values.length; i++) {
      let curr = values[i]
      if(isPromise(curr)){
        curr.then((data) => {
          resData(i, data)
        }, reject)
      } else {
        resData(i, curr)
      }
    }
  })
}