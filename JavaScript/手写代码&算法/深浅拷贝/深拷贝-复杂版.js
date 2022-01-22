// 复杂版深拷贝
// 基于简单版的基础上，还考虑了内置对象比如Date、RegExp等对象和函数以及解决了循环引用问题

const isObject = (target) => {
  typeof (target === 'object' || typeof target === 'function') && target !== null
}

