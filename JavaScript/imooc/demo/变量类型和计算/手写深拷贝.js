/**
 * 深拷贝
 */
// 可以看出for in 应用于数组循环返回的是数组的下标和数组的属性和原型上的方法和属性，
// 而for in应用于对象循环返回的是对象的属性名和原型中的方法和属性。
function deepClone(obj) {
  if(typeof obj !== 'object' || obj == null){
    //  如果obj不是对象或者obj是null,没有必要做深拷贝，直接返回
    return obj
  }
  // 初始化返回结果
  let result
  // 判断obj是不是数组，如果是数组就返回初始化数组格式
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj){
    // 保证key不是原型的属性
    if(obj.hasOwnProperty(key)){
      // 递归调用
      console.log(key);
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}

const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
console.log(obj1);
console.log(obj2);