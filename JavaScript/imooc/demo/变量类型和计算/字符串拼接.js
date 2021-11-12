const a = 100 + 10
const b = 100 + '10'
const c = true + '10'

// 只要有字符串，+就不是加法，而是字符串拼接，会把前后都变成字符串进行拼接
console.log('a:', a); // a: 110
console.log('b:', b); // b: 10010
console.log('c:', c); // c: true10

// 可以使用parseInt将字符串转为数字
const d = 100 + parseInt('10')
console.log('d:', d);
