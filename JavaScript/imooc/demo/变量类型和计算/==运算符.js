// ==情况下也会发生字符串转换
console.log(`100 == '100' ? ${100 == '100'}`); // true
console.log(`0 == '' ? ${0 == ''}`); // true
console.log(`0 == false ? ${0 == false}`); // true
console.log(`false == '' ? ${false == ''}`); // true
console.log(`null == undefined ? ${null == undefined}`); // true
console.log(`null == false ? ${null == false}`); // false

// == 尽量会让前后（转化之后）相等

// 除了 ==null 之外，其他都一律用 === ，例如：
const obj = { x: 100}
if (obj.a == null) { }
// 相当于：
// if (obj.a === null || obj.a === undefined) { }

console.log(`100 === '100' ? ${100 === '100'}`); // false
console.log(`0 === '' ? ${0 === ''}`); // false
console.log(`0 === false ? ${0 === false}`); // false
console.log(`false === '' ? ${false === ''}`); // false
console.log(`null === undefined ? ${null === undefined}`); // false