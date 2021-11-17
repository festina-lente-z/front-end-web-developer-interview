// 传统方式
// function unique(arr) {
//   const res = []
//   // indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
//   arr.forEach(item => {
//     if (res.indexOf(item) < 0) {
//       res.push(item)
//     }
//   })

//   return res
// }

// 使用set(无序结构，不能重复)

function unique(arr){
  const set = new Set(arr)
  console.log(Object.prototype.toString.call(set));
  return [...set]
}

const res = unique([10,10,20,20])
console.log(res);