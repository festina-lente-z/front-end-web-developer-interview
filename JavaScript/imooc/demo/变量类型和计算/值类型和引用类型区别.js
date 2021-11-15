// 值类型
let a = 100
let b = a
a = 200
console.log(b);

// 引用类型
let c = { age: 20 }
let d = c
d.age = 21
console.log(c.age);