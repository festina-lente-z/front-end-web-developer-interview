// hasOwnProperty()方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
const shallowCopy = (obj) => {
  // 如果不是object，直接返回
  if(typeof obj !== 'object') return 
  let newObj = obj instanceof Array ? [] : {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key]
    }
  }
  return newObj
}

obj1 = {
  'apple':1,
  'children':{'one':1, 'two':2}
}
let obj2 = shallowCopy(obj1)
obj2.children.one = 9
console.log(obj1)
