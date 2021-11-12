const m = false
const n = NaN // Not-A-Number
const a = ''
const b = 0
const c = null
const d = undefined

const e = {}
const f = []
const g = 100

// 以下是falsely变量
// m = false, !m = true, !!m = false
console.log(`m = false, !m = ${!m}, !!m = ${!!m}`);
// n = NaN, !n = true, !!n = false
console.log(`n = NaN, !n = ${!n}, !!n = ${!!n}`);
// !a = true, !!a = false
console.log(`a = '', !a = ${!a}, !!a = ${!!a}`);
// b = 0, !b = true, !!b = false
console.log(`b = 0, !b = ${!b}, !!b = ${!!b}`);
// c = null, !c = true, !!c = false
console.log(`c = null, !c = ${!c}, !!c = ${!!c}`);
// d = undefined, !d = true, !!d = false
console.log(`d = undefined, !d = ${!d}, !!d = ${!!d}`);

// 除此之外都是truly变量
// e = {}, !e = false, !!e = true
console.log(`e = {}, !e = ${!e}, !!e = ${!!e}`);
// f = [], !f = false, !!f = true
console.log(`f = [], !f = ${!f}, !!f = ${!!f}`);
// g = 100, !g = false, !!g = true
console.log(`g = 100, !g = ${!g}, !!g = ${!!g}`);

// 逻辑判断
// A && B 如果A是falsely变量，返回A；否则返回B
// && 前后有falsely变量返回falsely变量，否则返回&&后面的值
const h = 10 && 0
const i = 0 && 10
const j = 20 && 10
// 10是truly变量，继续往后判断，返回第二个值
console.log(`10 && 0 ? ${h}`); // 10 && 0 ? 0
console.log(`0 && 10 ? ${i}`); // 0 && 10 ? 0
console.log(`20 && 10 ? ${j}`); // 20 && 10 ? 10

const k = '' || 'abc'
const l = 'abc' || ''
const o = '' || null

// A || B 如果A是truly变量，返回A；否则返回B
// || 前后有truly变量返回truly变量，否则返回||后面的值
// ''空字符串是falsely变量，也会继续往后判断，返回第二个值
console.log(`'' || 'abc' ? ${k}`); // '' || 'abc' ? abc
console.log(`'abc' || '' ? ${l}`); // 'abc' || '' ? abc
console.log(`'' || null ? ${o}`); // '' || null ? null

// 非
console.log(!window.abc);