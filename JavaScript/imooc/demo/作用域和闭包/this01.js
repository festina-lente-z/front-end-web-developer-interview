const zhangsan = {
  name: '张三',
  sayHi() {
    // this 即当前对象
    console.log(this);
  },
  wait() {
    setTimeout(function() {
      // this === window
      console.log(this);
    })
  }
}

zhangsan.sayHi()
zhangsan.wait()
// 因为这个函数是在setTimeout里面被调用的，所以它会指向windows
// 是setTimeout本身触发的执行
// 默认绑定？？？？