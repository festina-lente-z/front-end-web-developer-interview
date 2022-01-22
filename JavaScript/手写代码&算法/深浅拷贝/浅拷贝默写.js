const shallowCopy1 = (obj) => {
  if(typeof obj !== 'object') return 
  let newObj = obj instanceof Array ? [] : {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key]
    }
  }
  return newObj
}

const shallowCopy2 = (obj) => {
  if(typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key]
    }
  }
  return newObj
}