const zhangsan = {
  name: '张三',
  sayHi() {
    // this 即当前对象
    console.log(this);
  },
  waitAgain() {
    setTimeout(() => {
      // this 即当前对象
      console.log(this);
    })
  }
}

zhangsan.sayHi()
zhangsan.waitAgain()
// 箭头函数不使用this的四种标准规则，而是根据外层（函数或者全局）作用域来决定this