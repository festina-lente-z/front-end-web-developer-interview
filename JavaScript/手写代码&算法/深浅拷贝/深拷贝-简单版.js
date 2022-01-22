// 简单版深拷贝：只考虑普通对象属性，不考虑内置对象和函数
const deepClone = (obj) => {
  if(typeof obj !== 'object') return
  let newObj = obj instanceof Array ? [] : {}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}