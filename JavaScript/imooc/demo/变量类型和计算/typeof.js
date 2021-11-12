let a
const b = true
const n = 123
const str = 'abc'
const big = 2n //A BigInt is created by appending n to the end of an integer or by calling the constructor.
const bigi = BigInt(3)
const s = Symbol('s')

console.log(`typeof a ? ${typeof a}`); // undefined
console.log(`typeof b ? ${typeof b}`); // boolean
console.log(`typeof n ? ${typeof n}`); // number
console.log(`typeof str ? ${typeof str}`); // string
console.log(`typeof big ? ${typeof big}`); // bigint
console.log(`typeof bigi ? ${typeof bigi}`); // bigint
console.log(`typeof s ? ${typeof s}`); //symbol

console.log(`typeof console.log ? ${typeof console.log}`); // function
console.log(`typeof function () {} ? ${typeof function () {}}`); // function

console.log(`typeof null ? ${typeof null}`); // object
console.log(`typeof ['a', 'b'] ? ${typeof ['a', 'b']}`); // object
console.log(`typeof {x: 9} ? ${typeof {x: 9}}`); // object
const map = new Map()
console.log(`typeof map ? ${typeof map}`); // object

