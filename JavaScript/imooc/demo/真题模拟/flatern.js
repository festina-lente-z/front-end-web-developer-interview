function flat(arr) {
  // 验证 arr 中，还有没有深层数组[1,2,[3,4]]
  // some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。
  // 它返回的是一个Boolean类型的值。
  const isDeep = arr.some(item => item instanceof Array)
  if(!isDeep){
    return arr // 已经是flatern[1,2,3,4]
  }
  const res = Array.prototype.concat.apply([], arr)
  return flat(res)
}

const res = flat([1, 2, [3,[4,8]],5])
console.log(res);