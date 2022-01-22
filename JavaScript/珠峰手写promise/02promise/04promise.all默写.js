const isPromise = (value) => {
  if((typeof value === 'object' && value !== null) || typeof value === 'function') {
    if(typeof value.then === 'function') {
      return true
    } else {
      return false
    }
  }
}

Promise.all = (values) =>{
  return new Promise((resolve, reject) => {
    let arr = [], index = 0
    const resData = (key, val) => {
      arr[key] = val
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
Promise.all([1,2,3,6,7]).then(data => {
  console.log(data);
})