let a
const b = true
const n = 123
const str = 'abc'
const big = 2n
const bigi = BigInt(3)
const s = Symbol('s')
const foo = function () {}
const nul = null
const arr = ['a', 'b']
const obj = {x: 9}
const now = new Date()
const exp = /partten/g

// console.log(`typeof a ? ${typeof a}`); // undefined
// console.log(`typeof b ? ${typeof b}`); // boolean
// console.log(`typeof n ? ${typeof n}`); // number
// console.log(`typeof str ? ${typeof str}`); // string
// console.log(`typeof big ? ${typeof big}`); // bigint
// console.log(`typeof bigi ? ${typeof bigi}`); // bigint
// console.log(`typeof s ? ${typeof s}`); //symbol
// // 识别函数
// console.log(`typeof foo ? ${typeof foo}`); // function

// console.log(`typeof nul ? ${typeof nul}`); // object
// console.log(`typeof arr ? ${typeof arr}`); // object
// console.log(`typeof obj ? ${typeof obj}`); // object

// console.log(`a instanceof undefined ? ${a instanceof undefined}`); //Uncaught TypeError: Right-hand side of 'instanceof' is not an object
// console.log(`b instanceof Boolean ? ${b instanceof Boolean}`); // false
// console.log(`n instanceof Number ? ${n instanceof Number}`);// false
// console.log(`str instanceof String ? ${str instanceof String}`);// false
// console.log(`big instanceof BigInt ? ${big instanceof BigInt}`);// false
// console.log(`s instanceof Symbol ? ${s instanceof Symbol}`);// false
// console.log(`nul instanceof Object ? ${nul instanceof Object}`);// false
// console.log(`foo instanceof Function ? ${foo instanceof Function}`);// true
// console.log(`arr instanceof Array ? ${arr instanceof Array}`);// true
// console.log(`obj instanceof Object ? ${obj instanceof Object}`);// true

console.log(`Object.prototype.toString.call(a) ? ${Object.prototype.toString.call(a)}`); // [object Undefined]
console.log(`Object.prototype.toString.call(b) ? ${Object.prototype.toString.call(b)}`); // [object Boolean]
console.log(`Object.prototype.toString.call(n) ? ${Object.prototype.toString.call(n)}`); // [object Number]
console.log(`Object.prototype.toString.call(str) ? ${Object.prototype.toString.call(str)}`); // [object String]
console.log(`Object.prototype.toString.call(big) ? ${Object.prototype.toString.call(big)}`); // [object BigInt]
console.log(`Object.prototype.toString.call(s) ? ${Object.prototype.toString.call(s)}`); // [object Symbol]
console.log(`Object.prototype.toString.call(nul) ? ${Object.prototype.toString.call(nul)}`); // [object Null]
console.log(`Object.prototype.toString.call(foo) ? ${Object.prototype.toString.call(foo)}`); // [object Function]
console.log(`Object.prototype.toString.call(arr) ? ${Object.prototype.toString.call(arr)}`); // [object Array]
console.log(`Object.prototype.toString.call(obj) ? ${Object.prototype.toString.call(obj)}`); // [object Object]
console.log(`Object.prototype.toString.call(now) ? ${Object.prototype.toString.call(now)}`); // [object Date]
console.log(`Object.prototype.toString.call(exp) ? ${Object.prototype.toString.call(exp)}`); // [object RegExp]
// console.log(`obj.toString() ? ${obj.toString()}`); 
// console.log(`now.toString() ? ${now.toString()}`); // 结果是时间而不是数据类型，但是用call调用就显示数据类型（可能Date重写了toString方法
// console.log(`exp.toString() ? ${exp.toString()}`);
